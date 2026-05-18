import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import { graphData } from "./src/data";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Gemini
  const apiKey = process.env.GEMINI_API_KEY;
  const genAI = apiKey ? new GoogleGenAI({ 
    apiKey,
    httpOptions: { headers: { 'User-Agent': 'aistudio-build' } }
  }) : null;

  app.post("/api/chat", async (req, res) => {
    if (!genAI) {
      return res.status(500).json({ error: "Gemini API key not configured." });
    }

    try {
      const { message, history } = req.body;
      
      // We inject the graph data context in the system instruction
      const systemInstruction = `
        Ti si stručnjak za Disney i Pixar zajednički svemir. 
        Tvoj posao je odgovarati na pitanja o povezanosti likova, uskršnjim jajima i teorijama.
        Na raspolaganju imaš podatke o grafu koji sadrži:
        - ${graphData.nodes.length} likova/čvorova
        - ${graphData.links.length} veza
        
        Neki ključni likovi i hubovi su: Skriveni Mickey, Elsa, Merida, Korporacija BnL.
        Tvoji odgovori trebaju biti na hrvatskom jeziku, informativni i zabavni.
        Kada te pitaju o kvantitativnim podacima, koristi informacije iz grafa.
        
        Podaci o čvorovima: ${JSON.stringify(graphData.nodes.map(n => ({ id: n.id, name: n.name, type: n.type, movie: n.movie })))}
        Podaci o vezama: ${JSON.stringify(graphData.links.map(l => ({ source: l.source, target: l.target, type: l.type, desc: l.description })))}
      `;

      const response = await genAI.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          ...history.map((h: any) => ({ role: h.role, parts: [{ text: h.text }] })),
          { role: "user", parts: [{ text: message }] }
        ],
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      res.json({ text: response.text });
    } catch (error: any) {
      console.error("Gemini Error:", error);
      res.status(500).json({ error: error.message });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
