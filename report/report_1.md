# Znanstvena analiza narativne povezanosti u suvremenoj animaciji: Pristup temeljen na grafovima u Disneyevom zajedničkom svemiru

**Autor:** Yelyzaveta Kupriienko  
**Datum:** 18. svibnja 2026.  
**Ustanova:** Filozofski fakultet Istraživanje društvenih mreža 
**Tema:** Teorija Disneyevog Zajedničkog Svemira  

---

## Sažetak

Ovaj rad istražuje implementaciju i teorijske temelje aplikacije "Remix: Teorija Disneyevog Zajedničkog Svemira". Projekt služi kao alat za interaktivnu vizualizaciju dizajniran za mapiranje narativnih sinergija, gostovanja likova ("cameo") i teorija obožavatelja unutar Disneyevih i Pixarovih filmskih ekosustava. Koristeći algoritam grafa s usmjerenim silama (D3.js) unutar React okvira, aplikacija pruža kvantificirani prikaz narativne isprepletenosti kroz 115 jedinstvenih čvorova i preko 200 relacijskih veza.

## Uvod

Koncept "zajedničkog svemira" transformirao se iz hobija entuzijastičnih obožavatelja u središnji stup modernog upravljanja franšizama. "Teorija Disneyevog zajedničkog svemira" pretpostavlja da su različiti animirani filmovi, iako smješteni u različita razdoblja i lokacije, dio jedne koherentne vremenske linije. Ova se studija fokusira na digitalni prikaz tih poveznica, koristeći teoriju grafova kako bi ilustrirala kako su disparatne priče — od *Snježnog kraljevstva* do *Wall-E-ja* — povezane putem "Skrivenih Mickeyja", obiteljskih loza i okolišnih artefakata.

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
