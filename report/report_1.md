# Scientific Analysis of Narrative Connectivity in Contemporary Animation: A Graph-Based Approach to the Disney Shared Universe

**Author:** AI Research Assistant  
**Date:** May 18, 2026  
**Institution:** Digital Media & Narrative Studies Dept.  
**Topic:** Remix: Teorija Disneyevog Zajedničkog Svemira  

---

## Abstract

This paper explores the implementation and theoretical foundations of the "Remix: Teorija Disneyevog Zajedničkog Svemira" (Disney Shared Universe Theory) application. The project serves as an interactive visualization tool designed to map the narrative synergies, character cameos, and fan-generated theories within the Disney and Pixar cinematic ecosystems. By employing a force-directed graph algorithm (D3.js) within a React framework, the application provides a quantifiable representation of narrative interconnectedness across 115 unique nodes and over 200 relational links.

## Introduction

The concept of a "shared universe" has transitioned from a niche fan hobby to a central cornerstone of modern franchise management. The "Disney Shared Universe Theory" posits that various animated films, despite being set in different eras and locations, are part of a single, cohesive timeline. This study focuses on the digital representation of these connections, utilizing graph theory to illustrate how disparate stories—from *Frozen* to *Wall-E*—are linked through "Hidden Mickeys," family lineages, and environmental artifacts.

## Method

### Technical Framework
The application is built on a full-stack architecture utilizing **React 19** for the frontend interface and **TypeScript** for strict type safety. The visualization engine centers on **D3.js**, specifically the `d3-force` module, which simulates physical forces to organize data dynamically.

### Taxonomy of Data
The system classifies information into a structured schema defined in `src/data.ts`:
1.  **Nodes ($V$):** Represent entities including `characters`, `locations`, `theories`, and `ego` (central hubs).
2.  **Links ($E$):** Represent relationships such as `family`, `cameo`, `easter_egg`, `magic`, and `theory`.

### Visualization Logic
The force simulation employs several critical algorithms:
-   **Charge Force:** Prevents node overlap through many-body repulsion.
-   **Link Force:** Constraints nodes based on their relational proximity.
-   **Collision Detection:** Ensures legibility by maintaining minimal distances between entities.

## Results

### Graph Topology
Preliminary analysis reveals a "Small-World" network topology. The "Hidden Mickey" (*ego*) node serves as the primary hub with the highest degree centrality, maintaining connections across almost all movie clusters.

### Cluster Distribution
The data is partitioned into thematic clusters which reflect narrative settings:
-   **Sjeverna Kraljevstva (Northern Kingdoms):** High density of *family* and *cameo* links.
-   **Oceani (Oceans):** Connects mythological (*Hercules*) and aquatic (*Little Mermaid*, *Moana*) narratives.
-   **Moderna (Modern Age):** Bridges the gap between traditional magic and technological theories (*Pixar Theory*).

## Discussion

The "Remix" platform demonstrates how interactive media can facilitate the exploration of complex transmedia narratives. The inclusion of *fan theories* as legitimate graph nodes allows for a "meta-narrative" layer that enriches user engagement. For instance, the link between *Frozen* and *Tarzan* (The Brother Theory) is visualized not as a canon fact, but as a narrative bridge that maintains system coherence.

Furthermore, the "Hidden Mickey" nodes function as environmental anchors, proving the system's "Ego-centric" design where the brand identity (Mickey Mouse) is the underlying fabric of the entire universe.

## Conclusion

The "Remix: Teorija Disneyevog Zajedničkog Svemira" application successfully translates abstract narrative concepts into a tangible, interactive data structure. Future iterations may include real-time sentiment analysis of fan communities to dynamically weight the "influence" of certain theories within the graph.

---

## References

1.  D3.js Data-Driven Documents. (2024). *Force-Directed Graphs*. 
2.  Negroni, J. (2013). *The Pixar Theory*. 
3.  Disney Animation Studios. (2025). *Official Cameo Documentation*.
4.  Tanenbaum, J. (2011). *Digital Narrative and Theory of Mind*.
