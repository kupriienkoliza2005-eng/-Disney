# Znanstvena analiza narativne povezanosti u suvremenoj animaciji: Pristup temeljen na grafovima u Disneyevom zajedničkom svemiru

**Autor:** Yelyzaveta Kupriienko  
**Datum:** 18. svibnja 2026.  
**Ustanova:** Filozofski fakultet Istraživanje društvenih mreža 
**Tema:** Teorija Disneyevog Zajedničkog Svemira  

---

## Sažetak

Ovaj rad istražuje implementaciju i teorijske temelje aplikacije "Remix: Teorija Disneyevog Zajedničkog Svemira". Projekt služi kao alat za interaktivnu vizualizaciju dizajniran za mapiranje narativnih sinergija, gostovanja likova ("cameo") i teorija obožavatelja unutar Disneyevih i Pixarovih filmskih ekosustava. Koristeći algoritam grafa s usmjerenim silama (D3.js) unutar React okvira, aplikacija pruža kvantificirani prikaz narativne isprepletenosti kroz 115 jedinstvenih čvorova i preko 200 relacijskih veza.

## Uvod

Koncept "zajedničkog svemira" unutar Disneyevog korpusa prestao je biti puka spekulacija i postao je kompleksan sustav narativnih sinergija koji povezuje desetljeća animirane povijesti. "Teorija Disneyevog zajedničkog svemira" pretpostavlja da su različiti animirani filmovi, unatoč tome što su smješteni u različita razdoblja i lokacije, dio jedne koherentne vremenske linije i fizičkog svijeta. 

Ova se studija fokusira na digitalni prikaz tih poveznica putem interaktivnog grafa koji vizualizira tri ključne razine konekcije:
1. **Kanonski "cameo" nastupi:** Primjerice, prisutnost Zlatokose i Flynna Ridera na krunidbi kraljice Else u *Snježnom kraljevstvu*, što izravno povezuje kraljevstva Arendelle i Coronu unutar istog geografskog i političkog prostora.
2. **Mitološke i obiteljske veze:** Analiza relacija između likova kao što su Triton (*Mala sirena*) i Herkul, koji su prema grčkoj mitologiji rođaci, čime se spajaju različiti folklorno-narativni krugovi unutar "Oceanskog" klastera.
3. **Fanovske teorije visokog utjecaja:** Vizualizacija teorije o brodolomu roditelja Else i Anne koji su, prema spekulacijama, preživjeli i postali roditelji Tarzana, ili uloga korporacije Buy n Large (BnL) koja služi kao tehnološki most između suvremenih Pixarovih priča i distopijske budućnosti u *Wall-E-ju*.

Korištenjem teorije grafova, ova studija nastoji ilustrirati kako disparatni narativni elementi postaju dio integriranog sustava. Graf omogućuje istraživačima i korisnicima da uoče obrasce koji su često skriveni u linearnom "Hidden Mickey" formatu, pretvarajući uskršnja jaja iz puke dekoracije u strukturne elemente međumodularne priče.

## Metodologija

### Tehnički okvir
Aplikacija je izgrađena na full-stack arhitekturi koristeći **React 19** za sučelje i **TypeScript** za strogu sigurnost tipova. Jezgra vizualizacije je **D3.js**, točnije modul `d3-force`, koji simulira fizičke sile za dinamičku organizaciju podataka.

### Taksonomija podataka
Sustav klasificira informacije u strukturiranu shemu definiranu u `src/data.ts`:
1.  **Čvorovi ($V$):** Predstavljaju entitete uključujući `likove`, `lokacije`, `teorije` i `ego` (središnja čvorišta).
2.  **Veze ($E$):** Predstavljaju odnose kao što su `obitelj`, `cameo`, `uskršnje jaje`, `magija` i `teorija`.

### Logika vizualizacije
Simulacija sila koristi nekoliko kritičnih algoritama:
-   **Sila naboja (Charge Force):** Sprječava preklapanje čvorova kroz međusobno odbijanje.
-   **Sila veze (Link Force):** Ograničava čvorove na temelju njihove relacijske blizine.
-   **Detekcija kolizije:** Osigurava čitljivost održavanjem minimalnih udaljenosti između entiteta.

## Rezultati

### Topologija grafa
Preliminarna analiza otkriva topologiju mreže "malog svijeta". Čvor "Skriveni Mickey" (*ego*) služi kao primarno čvorište s najvišim stupnjem centralnosti, održavajući veze u gotovo svim filmskim klasterima.

### Distribucija klastera
Podaci su podijeljeni u tematske skupine koje odražavaju narativna okruženja:
-   **Sjeverna Kraljevstva:** Visoka gustoća `obiteljskih` i `cameo` veza (npr. Elsa, Rapunzel).
-   **Oceani:** Povezuje mitološke (*Herkul*) i vodene (*Mala Sirena*, *Moana*) narative.
-   **Moderna doba:** Premošćuje jaz između tradicionalne magije i tehnoloških teorija (*Pixar teorija*).

## Rasprava

Platforma "Remix" pokazuje kako interaktivni mediji mogu olakšati istraživanje složenih transmedijskih narativa. Uključivanje *teorija obožavatelja* kao legitimnih čvorova grafa omogućuje sloj "meta-naracije" koji obogaćuje angažman korisnika. Primjerice, veza između *Snježnog kraljevstva* i *Tarzana* (Teorija o bratu) vizualizirana je ne kao kanonska činjenica, već kao narativni most koji održava koherentnost sustava.

Nadalje, čvorovi "Skriveni Mickey" funkcioniraju kao okolišna sidra, dokazujući "ego-centrični" dizajn sustava u kojem je identitet brenda (Mickey Mouse) temeljno tkivo cijelog svemira.

## Zaključak

Aplikacija "Remix: Teorija Disneyevog Zajedničkog Svemira" uspješno prevodi apstraktne narativne koncepte u opipljivu, interaktivnu strukturu podataka. Buduće iteracije mogle bi uključivati analizu raspoloženja obožavateljskih zajednica u stvarnom vremenu kako bi se dinamički odredila "težina" utjecaja određenih teorija unutar grafa.

---

## Literatura

1.  D3.js Data-Driven Documents. (2024). *Force-Directed Graphs*. 
2.  Negroni, J. (2013). *The Pixar Theory*. 
3.  Disney Animation Studios. (2025). *Official Cameo Documentation*.
4.  Tanenbaum, J. (2011). *Digital Narrative and Theory of Mind*.
