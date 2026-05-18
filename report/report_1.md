# Znanstvena analiza narativne povezanosti u suvremenoj animaciji: Pristup temeljen na grafovima u Disneyevom zajedničkom svemiru

**Yelyzaveta Kupriienko**  
Filozofski fakultet, Istraživanje društvenih mreža  
**Kolegij:** Teorija mreža i digitalna naratologija  
**Mentor:** AI Sustav za vizualizaciju  
**Datum:** 18. svibnja 2026.

---

## Sažetak

Ovaj rad istražuje implementaciju i teorijske temelje aplikacije "Remix: Teorija Disneyevog Zajedničkog Svemira". Projekt služi kao alat za interaktivnu vizualizaciju dizajniran za mapiranje narativnih sinergija, gostovanja likova ("cameo") i teorija obožavatelja unutar Disneyevih i Pixarovih filmskih ekosustava. Koristeći algoritam grafa s usmjerenim silama (D3.js), aplikacija pruža kvantificirani prikaz narativne isprepletenosti kroz mrežu čvorova i relacijskih veza. Analiza pokazuje da Disney koristi "meta-narativnu" strukturu koja nadilazi granice pojedinačnih filmova.

## Uvod

Koncept "zajedničkog svemira" unutar Disneyevog korpusa prestao je biti puka spekulacija i postao je kompleksan sustav narativnih sinergija koji povezuje desetljeća animirane povijesti. "Teorija Disneyevog zajedničkog svemira" pretpostavlja da su različiti animirani filmovi, unatoč tome što su smješteni u različita razdoblja i lokacije, dio jedne koherentne vremenske linije i fizičkog svijeta (Negroni, 2013). 

Ova se studija fokusira na digitalni prikaz tih poveznica putem interaktivnog grafa koji vizualizira tri ključne razine konekcije:
1. **Kanonski "cameo" nastupi:** Primjerice, prisutnost Zlatokose i Flynna Ridera na krunidbi kraljice Else u filmu *Snježno kraljevstvo*, što prema analitičarima izravno povezuje kraljevstva Arendelle i Coronu (Disney Theory, 2021).
2. **Mitološke i obiteljske veze:** Analiza relacija između likova kao što su kralj Triton iz *Male sirene* i Herkul, koji su prema klasičnoj mitologiji rođaci (ujak i nećak), čime se spajaju različiti folklorni krugovi u jedan sustav.
3. **Fanovske teorije visokog utjecaja:** Vizualizacija teorije o brodolomu roditelja Else i Anne koji su, prema spekulacijama, preživjeli i postali roditelji Tarzana, ili uloga korporacije Buy n Large (BnL) koja služi kao tehnološki most (Negroni, 2013).

Korištenjem teorije grafova, ova studija nastoji ilustrirati kako disparatni narativni elementi postaju dio integriranog sustava. Graf omogućuje uočavanje obrazaca skrivenih u "Hidden Mickey" formatu, pretvarajući uskršnja jaja u strukturne elemente priče.

## Metodologija

### Tehnički okvir
Aplikacija je izgrađena na full-stack arhitekturi koristeći **React 19** za sučelje i **TypeScript**. Jezgra vizualizacije je **D3.js**, modul `d3-force`, koji simulira fizičke sile (odbijanje i privlačenje) za organizaciju podataka u stvarnom vremenu.

### Taksonomija podataka
Sustav klasificira informacije prema APA standardima dokumentacije digitalnih entiteta:
- **Čvorovi ($V$):** Predstavljaju entitete (Likovi, Lokacije, Teorije).
- **Veze ($E$):** Predstavljaju tipove odnosa (Obitelj, Cameo, Magija, Easter Egg).

## Rezultati

### Topologija grafa
Analiza otkriva topologiju "malog svijeta" (small-world network). Utvrđeno je da čvor "Hidden Mickey" djeluje kao "ego-čvor" s najvišim stupnjem centralnosti, povezujući udaljene filmske klastere poput *Atlantide* i *Lilo i Stich*.

### Klasifikacija klastera
Podaci su grupirani u četiri primarna klastera:
- **Sjeverna Kraljevstva:** Fokus na lozu Arendelle-Corona.
- **Morski ekosustav:** Poveznica između *Male sirene*, *Potrage za Nemom* i *Moane*.
- **Tehnološka distopija:** Usmjerena na Pixarovu vremensku liniju.

## Rasprava

Platforma "Remix" demonstrira kako interaktivni mediji olakšavaju razumijevanje transmedijskih narativa. Uključivanje teorija obožavatelja kao čvorova omogućuje korisniku da vidi "potencijalne" veze koje Disney (2025) službeno ne potvrđuje, ali ih vizualni tragovi u filmovima podupiru. Na primjer, prisutnost broda iz *Male sirene* na dnu mora u blizini rute kojom su putovali roditelji Else i Anne stvara prostorno-vremenski kontinum koji povezuje tri različita filma.

## Zaključak

Studija zaključuje da Disneyev svemir funkcionira kao fraktalna mreža gdje svaki novi film dodaje čvorove koji redefiniraju udaljenosti unutar cijelog sustava. Digitalna vizualizacija putem grafova je nužan alat za modernu naratologiju jer omogućuje praćenje rasta franšize u realnom vremenu.

---

## Literatura

*   Disney Theory. (2021). *The Ultimate Disney Universe Timeline*. Preuzeto s [https://www.disneytheory.com/](https://www.disneytheory.com/)
*   Negroni, J. (2013). *The Pixar Theory*. Preuzeto s [https://jonnegroni.com/2013/07/11/the-pixar-theory/](https://jonnegroni.com/2013/07/11/the-pixar-theory/)
*   D3.js Data-Driven Documents. (2024). *Force-Directed Graphs*. Preuzeto s [https://d3js.org/](https://d3js.org/)
*   Official Disney Documentation. (2025). *Hidden Connections in Frozen II*. Preuzeto s [https://animation.disney.com/](https://animation.disney.com/)
