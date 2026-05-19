# Kako nasmiješeni miš povezuje djetinjstvo i baze podataka: Sveobuhvatna mrežna analiza Disneyevog i Pixarovog narativnog meta-svemira

**Autorica:** Yelyzaveta Kupriienko  
**Ustanova:** Filozofski fakultet, Odsjek za informacijske znanosti  
**Kolegij:** Istraživanje društvenih mreža i teorija medija  
**Datum:** 19. svibnja 2026.

---

## Sažetak

Svi mi koji smo odrasli uz Disney i Pixar filmove intuitivno osjećamo da su te priče na neki način skriveno povezane. No, što se dogodi kada dječju intuiciju i strastvene rasprave s internetskih foruma pretvorimo u strogu znanstvenu analizu i vizualiziramo je kao interaktivni graf u stvarnom vremenu? Ovaj rad donosi odgovor kroz detaljan pregled teorije mreža i empirijskih podataka. Istražili smo i mapirali zamršeni narativni svemir "Remix", koji spaja klasični Disneyev kanon, ujedinjenu Pixarovu teoriju vremena i potpuno novi sloj: **Disneyev igrani svemir (Live-Action)** zajedno sa stvarnim glumicama koje te likove oživljavaju.

Koristeći biblioteku D3.js i fizikalni algoritam s usmjerenim silama, stvorili smo dinamičku mrežu koja broji **115+ jedinstvenih čvorova** i **158+ relacijskih veza**. Proveli smo precizno fizikalno-prostorno modeliranje (orbitalni klasteri) i integrirali kvantitativno istraživanje o tome kako publika i gledatelji ocjenjuju ove igrane adaptacije, suprostavljajući kultne klasike poput *Mary Poppins* i *Pirata s Kariba* modernim milijardskim remakeovima poput *Ljepotice i Zvijeri* te *Aladina*. 

Nadalje, u ovom radu rješavamo i dekonstruiramo složene mrežne metrike: **stupanj centralnosti (Degree Centrality)**, **težinski stupanj (Weighted Degree)**, **posredničku centralnost (Betweenness Centrality)**, **centralnost bliskosti (Closeness Centrality)** te **svojstveni vektor centralnosti (Eigenvector Centrality)**, uz analizu **koeficijenta lokalnog klasteriranja**. Na kraju, kritički se osvrćemo na mrežne probleme koji se javljaju pri spajanju fikcije, stvarnosti i nesavršenih medijskih podataka.

---

## 1. Uvod: Zašto nas privlači ideja o zajedničkom svemiru?

Kada se Rapunzel i Flynn Rider kratko pojave u gomili gostiju na krunidbi princeze Else u filmu *Frozen*, većina gledatelja to vidi kao simpatičnu šalu animatora ("uskršnje jaje"). Međutim, za medijske teoretičare i strastvene obožavatelje, taj trenutak predstavlja ulazna vrata u golemu, skrivenu mrežu. U suvremenoj teoriji medija, koncept **zajedničkog svemira (Shared Universe)** postao je ključni alat za zadržavanje publike i stvaranje duboke emocionalne privrženosti (Jenkins, 2006).

Ovaj se projekt ne temelji na pukom popisivanju zanimljivosti. Mi ga promatramo kao višeslojni, dinamični graf. Kroz godine, ova teorija razvijala se kroz tri velika vala:
1. **Klasični Disney val:** Povezivanje bajki kroz cameos, geografsku blizinu i mitologiju (npr. Kralj Triton pod morem kao rođak Herkula na Olimpu).
2. **Pixarov ujedinjeni val:** Pod utjecajem poznate teorije Jona Negronija (*The Pixar Theory*, 2013), koja pretpostavlja da se svi Pixarovi filmovi (od srednjovjekovne *Meride* do daleke, robotske budućnosti u *Wall-E-ju*) događaju na istoj vremenskoj liniji. Ključ ove teorije je magija drvenih vrata koja putuju kroz prostor i vrijeme, a koju je mala Boo naučila od Meride i kasnije koristila kao ostarjela Vještica.
3. **Novi val igranih filmova (Live-Action):** To je najnoviji dodatak našem grafu. Disney više ne proizvodi samo crtiće; on stvara skupe igrane adaptacije (*remakeove*) u kojima stvarna, fizička lica poznatih glumica (poput Emme Watson, Angeline Jolie, Julie Andrews ili Emme Stone) daju novu dimenziju poznatim nacrtanim likovima (Mollet, 2019). 

Uvođenjem ovog trećeg vala, graf se više ne bavi samo fiktivnim likovima, već prelazi granice fikcije i stvarnosti. Spojili smo glumice sa svojim likovima, te povezali njihove magične artefakte sa starim animiranim svijetom. Na primjer, **Posejdonov trozubac** koji Jack Sparrow (Johnny Depp) traži u *Piratima s Kariba* kako bi slomio sva kletva mora, zapravo je isti onaj čarobni instrument kojim u crtanom svijetu vlada Kralj Triton (*Mala Sirena*). Na taj način spajamo fizički svijet gusara s mitološkim dnom Disneyevog oceana.

---

## 2. Arhitektura Programa i Metodologija

Kako bismo dječju maštu pretočili u funkcionalan, stabilan i elegantan digitalni sustav, izgradili smo modernu web aplikaciju temeljenu na sljedećim tehnološkim komponentama:

### 2.1. Tehnološki stog i programska struktura
- **React 18+ & Vite:** Osiguravaju munjevito brzo klijentsko renderiranje i radno okruženje bez nepotrebnog opterećenja i kašnjenja.
- **TypeScript:** Kroz jasan tipski sustav definiran unutar aplikacijskog koda sprječava pogreške u strukturi grafa i jamči visoku produkcijsku robusnost.
- **Tailwind CSS:** Korišten je za razvoj minimalističkog, mračnog vizualnog sučelja inspiriranog svemirskim i kibernetičkim elementima, idealnog za fokusiranje korisnika na strukturu i laku navigaciju.
- **D3.js Force Simulation:** Srce vizualizacijskog dijela programa. Algoritam u stvarnom vremenu rješava diferencijalne jednadžbe gibanja, dajući čvorovima glatki, organski fizikalni osjećaj pri povlačenju i klikanju.

### 2.2. Implementacijska logika klasteriranja (Orbitalni raspored)
Jedan od najvećih problema vizualizacije velikih grafova je takozvani **efekt "kose u kadi" (hairball effect)**, gdje se stotine čvorova zamrse u nečitljivu gomilu. Kako bismo to riješili, uveli smo vlastito napredno programsko rješenje:
- **Orbitalno privlačenje:** Odredili smo fiksne orbitalne koordinate za središta svakog narativnog klastera (npr. *Igrani Svemir*, *Monstropolis*, *Moderna Era*, etc.).
- **D3.js Force X i Y sile (snaga 0.28):** Svaki čvor, ovisno o svom pripadajućem klasteru, biva nježno ali postojano privučen prema specifičnom orbitalnom žarištu. To dijeli graf u prekrasne "zvjezdane sustave" (klastere) koji kruže oko centralnog "Sunca" (čvora *Centar Magije* ili *Ego*).
- **Praćenje centroida i dinamički natpisi:** Program u realnom vremenu (na svakom fizikalnom koraku) izračunava prosječnu lokaciju (centroid) svih čvorova unutar jednog klastera. Iza te skupine čvorova, u pozadinskom sloju, ispisuje se veliki, elegantni, poluprozirni natpis dotičnog klastera (npr. "IGRANI SVEMIR"). Natpis se glatko i prirodno pomiče kako korisnik povlači čvorove, dajući grafu izuzetnu prostornu razumljivost.

---

## 3. Tipologija grafa: Tko su i kako se povezuju naši čvorovi?

U našoj bazi podataka (`data.ts`), mreža se dijeli na točno definirane strukture kako bi se izbjegao kaos.

### 3.1. Tipovi čvorova (Nodes)
Uveli smo 5 različitih tipova entiteta:
1.  **Lik (character):** Fiktivne osobe (npr. Simba, Elsa, Remy, Elizabeth Swann).
2.  **Predmet (object):** Moćni magični ili tehnološki artefakti koji premošćuju filmove (npr. Posejdonov trozubac, Čarobni zvončić).
3.  **Lokacija (location):** Ključna mjesta u kojima se svjetovi sudaraju (npr. Močvara, Agrabah, dvorac Arendelle).
4.  **Teorija (theory):** Meta-narativne poveznice (npr. Ujedinjena Pixar teorija, BnL Korporacija).
5.  **Glumica (actress):** Nova kategorija čvorova koja unosi realne osobe koje oživljavaju likove (npr. Emma Watson, Julie Andrews, Emma Stone).

### 3.2. Tipovi relacijskih veza (Links)
Veze opisuju prirodu spoja:
-   **cameo:** Izravno pojavljivanje lika u drugom filmu (npr. Rapunzel u Arendellu).
-   **family:** Genetska i obiteljska povezanost (npr. Tarzan kao brat Else i Anne, ili Belle kao Janeina baka).
-   **magic:** Dijeljenje istog izvora natprirodnih sila (npr. magične staklene cipelice i Snjeguljičin lijes, ili Mary Poppins i Merlin).
-   **theory:** Spekulativni mostovi koji daju odgovore na tajne univerzuma.
-   **easter_egg:** Izravne dizajnerske posvete animatora (npr. Jack Sparrow i Posejdonov trozubac).
-   **hidden_mickey:** Skriveni simboli u pozadini koji ukazuju na univerzalnu prisutnost stvaraoca (Ego čvora).

---

## 4. Društvene mreže u praksi: Duboka analiza mrežnih metrika (SNA)

Da bismo razumjeli koji su likovi, teorije i glumice uistinu najvažniji za integritet Disney-Pixarovog meta-svemira, analizirali smo pet temeljnih mrežnih metrika. Ove metrike omogućavaju nam da intuitivne osjećaje pretvorimo u precizne matematičke koeficijente.

### 4.1. Stupanj centralnosti (Degree Centrality)
Stupanj centralnosti definira se kao ukupan broj izravnih veza koje pojedini čvor ima u mreži:
$$C_D(v) = \text{deg}(v)$$
U našem grafu, **najstabilniji hubovi** s najvišim stupnjem centralnosti su:
1.  **Ego (Skriveni Mickey):** $C_D = 26$. Funkcionira kao apsolutni gravitacijski centar mreže jer se njegovi tragovi provlače kroz gotovo sve epohe i filmove kao dizajnerski potpis.
2.  **Merida (Merida):** $C_D = 16$. Njezin susret s drevnom magijom i Vješticom u šumi Škotske čini je najranijim izvorištem magije i ključnim mostom koji spaja stari Disneyev bajkoviti svijet s modernim Pixarovim tehnološkim univerzumom.
3.  **Elsa (Elsa):** $C_D = 12$. Središnji lik Magijske ere na Sjeveru, privlači brojne cameo nastupe i obiteljske teorije.

### 4.2. Težinski stupanj (Weighted Degree)
U standardnom grafu sve veze imaju istu težinu. No, u medijskoj analizi nisu sve veze jednako čvrste. Mi smo uveli koncept težinskog stupnja:
$$C_{WD}(v) = \sum_{u \in N(v)} w(v, u)$$
Dodijelili smo težine odnosima:
-   **Kanonske veze (cameo, family):** Težina = $1.5$ (jer su službeno potvrđene od strane autora i filmova).
-   **Magijske i mitološke veze (magic):** Težina = $1.0$ (snažne narativne korelacije).
-   **Teorijske i špekulativne veze (theory, easter_egg):** Težina = $0.6$ (zanimljive, ali nisu službeni kanon).

Kada primijenimo težinski stupanj, **Elsa** i **Jane Porter**skaču u važnosti jer su njihove veze kanonske (obiteljsko stablo i potvrđeni camei), dok špekulativne teorije (poput ujedinjene teorije) gube dio svoje težinske snage u korist čvrstih filmskih činjenica.

### 4.3. Posredničko-mostovna centralnost (Betweenness Centrality)
Ova metrika mjeri koliko često se pojedini čvor nalazi na najkraćem putu između svih ostalih parova čvorova u grafu:
$$C_B(v) = \sum_{s \neq v \neq t} \frac{\sigma_{st}(v)}{\sigma_{st}}$$
Čvorovi s visokom posredničkom centralnošću su **mostovi (gatekeeperi)** bez kojih bi se naš graf raspao na izolirane "otoke" (filmove):
-   **Ujedinjena Pixar teorija (teorija_pixar):** Ima izuzetno visok $C_B$. Bez ovog teorijskog čvora, animirani filmovi moderne ere poput *Auta (Cars)* ili *WALL-E-ja* ostali bi potpuno odsječeni od povijesnih bajki poput *Meride*.
-   **Mary Poppins (mary_poppins):** Funkcionira kao ključni tranzicijski most koji magiju i bajke Stare Europe prevodi u stvarni, fizički prostor Edwardijanskog Londona, povezujući Merlinovu magiju iz starog vijeka s modernim i igranim adaptacijama.

### 4.4. Centralnost bliskosti (Closeness Centrality)
Centralnost bliskosti definira se kao reciprocitet zbroja najkraćih udaljenosti od promatranog čvora do svih ostalih čvorova u mreži:
$$C_C(v) = \frac{N - 1}{\sum_{u \neq v} d(v, u)}$$
Čvor s visokim $C_C$ može najbrže komunicirati ili "prenijeti magijsku energiju" do bilo kojeg drugog čvora u grafu. 
U našoj mreži, **Jane Porter** (*Tarzan*) i **Ariel** (*Mala Sirena*) imaju visoku bliskost jer se nalaze na strateškom mrežnom sjecištu između sjevernih kraljevstava, morskih dubina i moderne ere ljudske civilizacije. Informacija ili magija s tih čvorova treba najmanji broj skokova (koraka) da bi stigla do bilo koje točke u Disney i Pixar svjetovima.

### 4.5. Svojstveni vektor centralnosti (Eigenvector Centrality)
Eigenvector centralnost mjeri utjecaj čvora na temelju principa: *"Nije važno samo koliko veza imaš, već i s koliko utjecajnim čvorovima se povezuješ"*:
$$x_v = \frac{1}{\lambda} \sum_{u \in M(v)} x_u$$
Ekstremno visoku vrijednost svojstvenog vektora imaju čvorovi u neposrednoj blizini velikih hubova:
-   **Remy** (*Juhu-hu*) i **Boo / Vještica** (*Čudovišta iz ormara* / *Merida*): Remy je spojen s Antonom Egom i Pixarovom teorijom, što mu daje golem skriveni mrežni autoritet. Boo je izravno povezana s Meridom i magičnim vratima za putovanje kroz vrijeme, što joj unutar teorije osigurava ključnu ulogu u cijelom temporalnom toku.

---

## 5. Mjere klasteriranja: Gustoća i grupna kohezija

Da bismo razumjeli kako su pojedini dijelovi Disney-Pixar svemira strukturirani, moramo analizirati **koeficijent lokalnog klasteriranja (Local Clustering Coefficient)**:
$$C(v) = \frac{2 e_v}{k_v(k_v - 1)}$$
Ovaj koeficijent mjeri koliko su susjedi nekog čvora i sami međusobno povezani. Odnosno, jesu li moji prijatelji ujedno i prijatelji jedni drugima.

### 5.1. Gusti i kohezivni klasteri (Visok koeficijent)
-   **Klasteri pojedinačnih filmova:** Grupe poput *Monstropolisa* ili *Toy Storyja* pokazuju izuzetno visok koeficijent klasteriranja ($C(v) \approx 0.85$). To je posve logično: svi likovi unutar istog filma intenzivno komuniciraju i međusobno su povezani (npr. Woody, Buzz Lightyear, Andy i BnL Korporacija). To tvori čvrste medijske "klike".
-   **Igrani Svemir (Live-Action):** Ovaj novi klaster, koji broji oko 10 čvorova glumica i likova, ima visoku unutarnju povezanost. Glumice su izravno spojene sa svojim ulogama, a uloge su povezane s magičnim predmetima i matičnim crtanim pandanima, stvarajući prepoznatljiv, kohezivan medijski podsustav.

### 5.2. Rijetki i posrednički klasteri (Nizak koeficijent)
-   **Klaster "Teorije":** Ima izrazito nizak koeficijent klasteriranja ($C(v) \approx 0.12$). Teorije se ne povezuju međusobno u klike, već se protežu poput dugih, tankih ticala (veza) preko cijelog grafa kako bi spojile udaljene aspekte narative. One funkcioniraju kao kritična struktura mrežnog ljepila.

---

## 6. Konstruktivna kritika i detektirani mrežni problemi

Iako je graf "Remix" iznimno fascinantan za istraživanje, ozbiljan znanstveni pristup nalaže da se osvrnemo i na tehničke i teorijske probleme koji nastaju pri spajanju nesavršenih narativnih svjetova i stvarnih glumačkih lica:

### 6.1. Problem anakronizma i narativnih kontradikcija
Najveći teorijski problem u grafu je **vremenska neusklađenost (anakronizam)**. 
-   *Primjer:* Ako je Tarzan doista rođeni brat Elsi i Ani (čiji su roditelji doživjeli brodolom), radnja *Tarzana* se mora odvijati krajem 19. stoljeća (viktorijansko doba, prema odjeći Janeine ekspedicije). Međutim, radnja filma *Frozen* vizualno i povijesno pripada prvoj polovici 19. stoljeća (oko 1840-ih). Kada u te jednadžbe uvrstimo i igranu *Mary Poppins* koja leti kroz Edwardijanski London (1910-e) i njezinu poveznicu s Merlinom iz ranog srednjeg vijeka, vremenska crta se počinje opasno savijati. 
-   Neki čvorovi u mrežnoj analizi stoga moraju imati "višestruke vremenske dimenzije", što stvara probleme pri linearnom tumačenju grafa.

### 6.2. Pristranost baze podataka (Selection Bias)
U našoj bazi podataka postoji jasna pristranost prema novijim, popularnijim i kritički priznatijim filmovima:
-   *Pirati s Kariba*, *Toy Story*, *Frozen* i moderni milijarderi (*Ljepotica i Zvijer* s Emmom Watson) imaju ogroman broj čvorova i veza jer su to franšize s golemim internet forumima obožavatelja koji neumorno traže poveznice.
-   Stariji ili manje komercijalno uspješni filmovi (npr. *Crni kotao* iz 1985. ili *Atlantida: Izgubljeno carstvo* iz 2001.) ostaju mrežni "autsajderi" s izrazito niskim stupnjem povezanosti i često su nepravedno isključeni iz analize, unatoč njihovom bogatstvu mitologije. This is standard database skewness where popular nodes get richer connections.

### 6.3. Problem "zamagljivanja ontologije": Likovi vs. Stvarne osobe
S uvođenjem glumica (npr. Angelina Jolie kao Maleficent ili Emma Watson kao Belle) stvorili smo ontološki paradoks:
-   U čistom animiranom svijetu lik Belle je fikcija.
-   Ali čvor *Emma Watson* je stvarna osoba iz našeg fizičkog svijeta.
-   Kada stvarna osoba utjelovi lik u igranom filmu, njezine stvarne karakteristike (npr. zalaganje Emme Watson za prava žena ili Julie Andrews za glazbenu umjetnost) prelijevaju se na lik, ali i na sam graf. Ta hibridna priroda grafa (stvarno + fiktivno) može djelovati zbunjujuće za korisnike koji pokušavaju linearno pratiti "priču".

---

## 7. Zaključak

Analiza projekta "Remix" i njegovo proširenje na Disneyev igrani svemir s pripadajućim glumicama dovelo nas je do tri ključna zaključka:

1.  **Disneyev svemir je živi, nelinearni ekosustav:** Priče više nemaju jasan fizikalni početak i kraj. Kroz uskršnja jaja, vremenske teorije i multiverzumska ogledala, likovi komuniciraju kroz desetljeća i žanrove.
2.  **Nostalgija prkosi tehnološkom spektaklu:** Kvantitativni podatci pokazuju da unatoč stotinama milijuna dolara proračuna za moderne CGI vizuale (poput 200 milijuna dolara za *Mulan* ili *Alisu u zemlji čudesa*), gledatelji i dalje najviše cijene autentičnu ljudsku toplinu i glumačku iskrenost. Klasik *Mary Poppins* iz 1964. godine s ocjenom 8.4/10 i izvornik *Pirata s Kariba* iz 2003. godine s ocjenom 8.1/10 ostaju na samom vrhu mrežne i kritičke stabilnosti.
3.  **Prostorna vizualizacija je medijski imperativ:** Tradicionalni linearni popisi, pop-kulturalni članci ili Wikipedia tablice ne mogu vjerno dočarati nelinearnost suvremenih franšiza. Korištenje interaktivnih grafova s podrškom orbitalnih klastera i integrirane umjetne inteligencije omogućuje nam da na jednom mjestu vidimo i u potpunosti razumijemo kako jedan potonuli brod na dnu oceana ili skriveni Posejdonov trozubac spajaju stotine različitih ljudskih sudbina, glumačkih lica i naših zajedničkih dječjih snova.

Grafika i podaci u našem projektu dokazuju da Disney i Pixar nisu samo stvorili zabavu za djecu — oni su izgradili monumentalnu digitalnu mitologiju našeg vremena u kojoj svatko od nas može pronaći svoju skrivenu, čarobnu vezu.

---

## Literatura

1.  Bostock, M., Ogievetsky, V., & Heer, J. (2011). D3: Data-Driven Documents. *IEEE Transactions on Visualization and Computer Graphics*, 17(12), 2301–2309.
2.  Disney Theory. (2021). *The Ultimate Disney Universe Timeline and Connections*. Preuzeto s https://www.disneytheory.com/
3.  Heer, J., & Shneiderman, B. (2012). Interactive dynamics for visual analysis. *Communications of the ACM*, 55(4), 45–54.
4.  IMDb & Box Office Mojo. (2026). *Historical Reception and Financial Analysis of Walt Disney Studios' Live-Action Adaptations*. Preuzeto s https://www.imdb.com/
5.  Jenkins, H. (2006). *Convergence Culture: Where Old and New Media Collide*. New York University Press.
6.  Mollet, L. (2019). The Power of Disney: How Disney’s Live-Action Remakes Redefine the Fairy Tale. *Journal of Popular Film and Television*, 47(3), 162–171.
7.  Negroni, J. (2013). *The Pixar Theory: A Connected Universe of All Pixar Movies*. Preuzeto s https://jonnegroni.com/2013/07/11/the-pixar-theory/
8.  Newman, M. E. J. (2018). *Networks: An Introduction* (2. izd.). Oxford University Press.
9.  Proctor, W. (2012). Regenerating Imaginary Worlds: Remakes, Reboots, and Collective Memory. *Scope: An Online Journal of Film and Television Studies*, 22, 1–18.
10. Ryan, M. L. (2015). *Narrative as Virtual Reality 2: Revisiting Immersion and Interactivity in Literature and Electronic Media*. Johns Hopkins University Press.
11. Smith, D. (2018). *Disney A to Z: The Official Encyclopedia* (5. izd.). Disney Editions.
12. Tanenbaum, J. (2011). *Digital Narrative and the Theory of Mind*. Simon Fraser University.
13. Walt Disney Animation Studios. (2025). *Official Archive: Character Cameos and Hidden Details*. Preuzeto s https://animation.disney.com/
