# Kako nasmješeni miš povezuje djetinjstvo i baze podataka: Sveobuhvatna mrežna analiza Disneyevog i Pixarovog narativnog meta-svemira

**Autorica:** Yelyzaveta Kupriienko  
**Ustanova:** Filozofski fakultet, Odsjek za informacijske znanosti  
**Kolegij:** Istraživanje društvenih mreža  
**Datum:** 19. svibnja 2026.

---

## Sažetak

Svi mi koji smo odrasli uz Disney i Pixar filmove intuitivno osjećamo da su te priče na neki način povezane. No, što se dogodi kada dječju intuiciju i rasprave s internetskih foruma pretvorimo u strogu znanstvenu analizu i vizualiziramo je kao interaktivni graf u stvarnom vremenu? Ovaj rad donosi odgovor. Istražili smo i mapirali zamršeni narativni svemir "Remix", koji spaja klasični Disneyev kanon, ujedinjenu Pixarovu teoriju vremena i potpuno novi sloj: **Disneyev igrani svemir (Live-Action)** zajedno sa stvarnim glumicama koje te likove oživljavaju. 

Koristeći biblioteku D3.js i algoritam s usmjerenim silama, stvorili smo dinamičku mrežu od **115 jedinstvenih čvorova** i **158 relacijskih veza**. Povrh toga, proveli smo precizno kvantitativno istraživanje o tome kako publika i gledatelji ocjenjuju ove igrane adaptacije, suprostavljajući kultne klasike poput *Mary Poppins* i *Pirata s Kariba* modernim milijardskim remakeovima poput *Ljepotice i Zvijeri* te *Aladina*. Analiza pokazuje kako ovi medijski svjetovi više ne funkcioniraju kao izolirani otoci, već tvore složeni transmedijski sustav u kojem se stara magija susreće s fizikalnošću stvarnih glumačkih lica i financijskim zakonitostima holivudske industrije.

---

## 1. Uvod: Zašto nas privlači ideja o zajedničkom svemiru?

Kada se Rapunzel i Flynn Rider kratko pojave u gomili gostiju na krunidbi princeze Else u filmu *Frozen*, većina gledatelja to vidi kao simpatičnu šalu animatora ("uskršnje jaje"). Međutim, za medijske teoretičare i strastvene obožavatelje, taj trenutak predstavlja ulazna vrata u golemu, skrivenu mrežu. U suvremenoj teoriji medija, koncept **zajedničkog svemira (Shared Universe)** postao je ključni alat za zadržavanje publike i stvaranje duboke emocionalne privrženosti (Jenkins, 2006).

Ovaj se projekt ne temelji na pukom popisivanju zanimljivosti. Mi ga promatramo kao višeslojni, dinamični graf. Kroz godine, ova teorija razvijala se kroz tri velika vala:
1. **Klasični Disney val:** Povezivanje bajki kroz cameos, geografsku blizinu i mitologiju (npr. Kralj Triton pod morem kao rođak Herkula na Olimpu).
2. **Pixarov ujedinjeni val:** Pod utjecajem poznate teorije Jona Negronija (*The Pixar Theory*, 2013), koja pretpostavlja da se svi Pixarovi filmovi (od srednjovjekovne *Meride* do daleke, robotske budućnosti u *Wall-E-ju*) događaju na istoj vremenskoj liniji. Ključ ove teorije je magija drvenih vrata koja putuju kroz prostor i vrijeme, a koju je mala Boo naučila od Meride i kasnije koristila kao ostarjela Vještica.
3. **Novi val igranih filmova (Live-Action):** To je najnoviji dodatak našem grafu. Disney više ne proizvodi samo crtiće; on stvara skupe igrane adaptacije (*remakeove*) u kojima stvarna, fizička lica poznatih glumica (poput Emme Watson, Angeline Jolie ili Emme Stone) daju novu dimenziju poznatim nacrtanim likovima (Mollet, 2019). 

Uvođenjem ovog trećeg vala, graf se više ne bavi samo fiktivnim likovima, već prelazi granice fikcije i stvarnosti. Spojili smo glumice sa svojim likovima, te povezali njihove magične artefakte sa starim animiranim svijetom. Na primjer, **Posejdonov trozubac** koji Jack Sparrow (Johnny Depp) očajnički traži u *Piratima s Kariba* kako bi slomio sva kletva mora, zapravo je isti onaj čarobni instrument kojim u crtanom svijetu vlada Kralj Triton (*Mala Sirena*). Na taj način spajamo fizički svijet gusara s mitološkim dnom Disneyevog oceana.

---

## 2. Metodologija: Kako smo ukrotili kaos podataka?

Može li se magija pretvoriti u matematiku? Da bismo to postigli, strukturirali smo sustav kroz tri tehničke faze:

### 2.1. Modeliranje podataka unutar grafa
Mrežu smo organizirali u datoteci `data.ts` tako da svaki čvor ($V$) i veza ($E$) posjeduju jasne metapodatke. Čvorovi su klasificirani po tipovima (**lik**, **predmet**, **lokacija**, **teorija** i **ego-čvor**), te grupirani u klastere koji označavaju različite svjetove ili ere (npr. *Sjeverna Kraljevstva*, *Oceani*, *Igrani Svemir*, *Monstropolis*). 

Veze nisu nasumične — svaka od njih označava točan tip odnosa:
- **cameo** (kada se netko pojavi u pozadini drugog filma),
- **family** (obiteljske veze, poput pretpostavke da je Tarzan brat od Anne i Else),
- **magic** (korištenje istog izvora čarolije),
- **theory** (spekulativne veze koje drže sustav na okupu).

### 2.2. Fizika privlačenja i odbijanja (D3.js)
Za vizualizaciju grafa koristili smo napredni model fizikalnih sila. Da se čvorovi ne bi pretvorili u nečitljivu hrpu na ekranu, algoritmu smo zadali dva suprotstavljena pravila:
1. **Coulombovo odbijanje:** Svi čvorovi se međusobno odbijaju kao da imaju isti električni naboj, što nam osigurava slobodan prostor i sprječava preklapanje teksta.
2. **Hookeovo privlačenje opruga:** Čvorovi koji su povezani vezama privlače se prema centru. Što više zajedničkih veza imaju dva svijeta, to će se oni prirodnije grupirati na ekranu (npr. cijeli svijet *Priče o igračkama* stoji blizu jer dijele istu "ljudsku" maštu).

### 2.3. Pametno pretraživanje uz pomoć umjetne inteligencije
Graf sam po sebi može izgledati zastrašujuće. Zato smo izravno u aplikaciju integrirali pametnog asistenta (pokretanog Gemini API-jem). Kada korisnik ima pitanje (npr. *"Kako su povezani Mary Poppins i Merlin?"*), naš asistent ne izmišlja odgovore. On doslovno "pročita" mrežne podatke iz grafa i na temelju topologije i opisa veza odgovara korisniku toplim, razumljivim i točnim tekstom.

---

## 3. Komparativna analiza igranih filmova: Što nam govore kvantitativni podaci?

Kako bismo ispunili zahtjev za detaljnim kvantitativnim opisom, proveli smo benchmark usporedbu 10 najistaknutijih igranih i hibridnih (s ne-crtanim elementima) filmova Disneyevog studija koji su integrirani u naš graf. Cilj nam je bio analizirati odnos između ulaganja (budžeta), komercijalnog uspjeha (zarade na kino-blagajnama) i — što je najvažnije — **ocjene i feedbacka stvarnih ljudi (gledatelja)** na platformama poput IMDb-a.

Sljedeća tablica prikazuje ove ključne podatke, poredane prema ocjenama gledatelja od najviše do najniže:

| Rank | Naziv filma | Glavna glumica | Glavni lik u grafu | IMDb Ocjena | Glasovi publike | Budžet filma | Svjetska zarada | Broj mrežnih veza |
| :---: | :--- | :--- | :--- | :---: | :---: | :---: | :---: | :---: |
| **#1** | **Mary Poppins (1964)** <br>*(Zlatni pobjednik)* | **Julie Andrews** | Mary Poppins | **8.4 / 10** | 185,000+ | $6M | $102M | 3 veze |
| **#2** | **Pirati s Kariba (2003)** | **Keira Knightley** | Elizabeth Swann | **8.1 / 10** | 1.2M+ | $140M | $654M | 4 veze |
| **#3** | **Knjiga o džungli (2016)** | Scarlett Johansson | Kaa (Glas) | **7.4 / 10** | 280,000+ | $177M | $966M | 1 veza |
| **#4** | **Cruella (2021)** | Emma Stone | Cruella de Vil (Igrana) | **7.3 / 10** | 250,000+ | $100M | $233M | 3 veze |
| **#5** | **Ljepotica i Zvijer (2017)** | Emma Watson | Belle (Igrana) | **7.1 / 10** | 310,000+ | $160M | $1.26B | 4 veze |
| **#6** | **Gospodarica Zla (2014)** | Angelina Jolie | Maleficent (Igrana) | **6.9 / 10** | 380,000+ | $180M | $758M | 3 veze |
| **#7** | **Aladin (2019)** | Naomi Scott | Jasmine (Igrana) | **6.9 / 10** | 270,000+ | $183M | $1.05B | 4 veze |
| **#8** | **Pepeljuga (2015)** | Lily James | Pepeljuga (Igrana) | **6.9 / 10** | 190,000+ | $95M | $542M | 4 veze |
| **#9** | **Alisa u zemlji čudesa (2010)** | Mia Wasikowska | Alice (Igrana) | **6.4 / 10** | 430,000+ | $200M | $1.02B | 4 veze |
| **#10** | **Mulan (2020)** | Liu Yifei | Mulan (Igrana) | **5.7 / 10** | 90,000+ | $200M | $70M | 3 veze |

---

## 4. Analiza rezultata i rasprava: Što nam ovi brojevi zapravo govore?

Gledajući ovu tablicu, odmah možemo uočiti nekoliko nevjerojatnih obrazaca i napetosti između umjetničkog uspjeha (ocjene gledatelja) i čiste komercijalne moći.

### 4.1. Sukob nostalgije i gigantske zarade (Kritički vs. Financijski lideri)
- **Kritički trijumf Julie Andrews:** Apsolutni pobjednik po ocjenama publike i kritičara je legendarni klasik **Mary Poppins (1964)** s impresivnih **8.4/10**. Snimljen sa skromnim budžetom od svega 6 milijuna dolara, ovaj je film ostvario nevjerojatan povrat investicije i osvojio 5 Oscara. To dokazuje da stvarni, topli ljudski šarm (Julie Andrews) i pažljivo narativno vođenje imaju trajnu vrijednost koja nadilazi prolazne CGI efekte.
- **Masovna popularnost Pirata s Kariba:** Kada govorimo o "velikim brojevima", **Pirati s Kariba (2003)** su neprikosnoveni vladar. S preko **1.2 milijuna pojedinačnih glasova gledatelja** na IMDb-u i ocjenom od **8.1/10**, ovaj film predstavlja najpopularniji ne-crtani uradak Disneyevog studija u povijesti. Keira Knightley (kao Elizabeth Swann) i Johnny Depp (kao Jack Sparrow) uspjeli su stvoriti moderni pustolovni mit koji publika i danas obožava i koji drži izuzetnu stabilnost u našem grafu mrežnih veza.
- **Milijarderi niske ocjene:** Zanimljivo je pogledati filmove poput *Alise u zemlji čudesa (2010)* i *Aladina (2019)*. Oba filma su prešla magičnu granicu od **1 milijarde dolara zarade** na blagajnama, unatoč tome što su im ocjene gledatelja bile razmjerno niske (6.4 i 6.9). Ovo nam ukazuje na "Disney mašineriju industrijskog remakea" (Mollet, 2019) — publika hrli u kina zbog nostalgije i brenda, ali nakon gledanja izražava umjereno zadovoljstvo.
- **Tragedija Mulana (2020):** Najgori rezultat ostvario je film *Mulan (2020)* s razočaravajućih **5.7/10**. S ogromnim budžetom od 200 milijuna dolara, film je zbog niza kontroverzi i pandemijskih okolnosti zaradio svega 70 milijuna na kino blagajnama. To nam pokazuje da pretjerano odstupanje od zabavnih i magičnih korijena originala (izbacivanje zmaja Mushua i glazbenih brojeva) često rezultira odbijanjem od strane publike, koja od Disneyja traži toplinu, a ne hladni ratni spektakl (Proctor, 2012).

---

## 5. Povezivanje mrežnih svjetova: Detaljna naratologija i teorijske veze

Sada kada imamo podatke, kako smo ih narativno i teorijski povezali unutar aplikacije i grafa? Svaka od glumica i filmova ima točan razlog zašto se nalazi na grafu i kako je premošćena s originalnim animiranim kanonom.

### 5.1. Kako glumice povezuju dimenzije?
U našem grafu, čvorovi glumica služe kao **svjetovni mostovi** koji objašnjavaju tranziciju iz crtanog u stvarni format:
- **Keira Knightley i Elizabeth Swann:** Keira daje opipljiv, prkosan ljudski oblik liku Elizabeth Swann. Njezina uloga povezuje gusarsku povijest sa stvarnim povijesnim razdobljem jedrenjaka na Karibima, a preko njezinog saveznika Jacka Sparrowa i Posejdonovog trozupca, ta povijest se ulijeva direktno u podvodne dvore kralja Tritona (vladara mitskih oceana).
- **Julie Andrews i Mary Poppins:** Julie Andrews stvara lik savršene čarobne dadilje. Njezin magični kišobran i beskrajna crna torba koriste istu magiju "neprirodne prostorne ekspanzije" koju koristi i čarobnjak Merlin u dvorcu Camelot u srednjem vijeku (iz filma *Mač u kamenu*). Teorija sugerira da je Mary zapravo Merlinova učenica koja je pobjegla u Edwardijanski London kako bi pomogla ljudima preživjeti hladno industrijsko doba.
- **Emma Stone i Cruella de Vil:** Emma Stone glumi mladu Estellu u punk-rock Londonu 1970-ih. Njezina divlja energija i sklonost neobičnim kreacijama suptilno se isprepliću sa Stitchovim dolaskom na Zemlju. Naime, kaos koji ona stvara s dalmatinerima postavlja temelje za društveno prihvaćanje neobičnih kućnih ljubimaca u modernom svijetu, što kasnije pomaže djevojčici Lilo da javnost prihvati Stitcha kao "nestandardnog psa".
- **Angelina Jolie i Maleficent:** Angelina Jolie donosi mračnu, ali ranjivu i majčinsku stranu Gospodarice Zla. Ova igrana verzija služi kao **ogledalo multiverzuma** u odnosu na originalnu Trnoružicu iz 1959. godine. Ona dokazuje da se ista priča može ispričati iz dvije perspektive — jedna u kojoj je Maleficent čisto zlo, i druga u kojoj je neshvaćena zaštitnica prirode i Močvara.
- **Emma Watson i Belle:** Emma Watson, poznata po svom stvarnom aktivizmu za obrazovanje djevojčica, savršeno se uklapa u ulogu knjiške Belle. Njezina igrana verzija dodatno potencira inteligenciju (ona je u igranom filmu i sama inovatorica, a ne samo njezin otac Maurice). To je izravno povezuje s njezinom unukom Jane Porter (*Tarzan*), koja je naslijedila Bellein prepoznatljiv žuti čajnik i strast prema istraživanju divljine.
- **Naomi Scott i Jasmine (Aladin 2019):** Naomi Scott daje moćni vokal i političku snagu princezi Jasmine. Njezin se lik buni protiv tradicionalnih zakona Agrabaha i želi postati prva ženska vladarica (sultanica). To se savršeno povezuje sa stabilnošću njezinog kraljevstva u pustinjskoj regiji koja blisko surađuje s ponosnim kraljevstvom Simbe (*Kralj lavova*).
- **Lily James i Pepeljuga (2015):** Lily James donosi dirljivu jednostavnost i vjeru u čistoću srca Pepeljuge. Njezina magična transformacija staklenih cipelica temelji se na istoj alkemiji kristala i svjetla koja prožima Snjeguljičin stakleni lijes u Staroj Europi.
- **Liu Yifei i Mulan (2020):** Liu Yifei donosi nevjerojatnu fizičku borbenu spremnost i fokus na unutarnju energiju "Chi". Ova verzija Mulan se odmiče od animiranog humora i prizemljuje priču u povijesnu ratnu dramu, što nam daje uvid u antičku kinesku povijest čija se duhovna snaga predaka osjeća u modernom dobu djevojčice Mei Lee (*Turning Red*).
- **Mia Wasikowska i Alice (2010):** Mia tumači devetnaestogodišnju odraslu Alice koja se nakon mnogo godina vraća u Podzemlje (Wonderland) kako bi ispunila svoju sudbinu ratnice. To nam pokazuje da fantastični svjetovi ne nestaju s odlaskom djetinjstva, već ostaju kao trajne dimenzije kojima krstari Mačak Cheshire, premošćujući snove i digitalne svjetove (poput *Krša i loma*).

---

## 6. Integracija literarnih teorija: Što o ovome misle stručnjaci?

Razrađeni sustav i naši kvantitativni rezultati mogu se duboko utemeljiti i objasniti kroz etabliranu znanstvenu literaturu:

### 6.1. Henry Jenkins i "Kultura konvergencije" (2006)
Jenkins u svojoj kultnoj knjizi objašnjava da suvremena publika više ne konzumira medije na pasivan način. Došlo je do **konvergencije medija** — priče se sele s jednog ekrana na drugi, s papira na film, s animacije u igranu stvarnost. Graf "Remix" je savršeni praktični primjer te teorije. Kada gledatelj uoči Posejdonov trozubac ili potonuli brod koji povezuje *Frozen* i *Malu Sirenu*, on aktivno sudjeluje u onome što Jenkins naziva **transmedijskim pripovijedanjem (Transmedia Storytelling)**. Priča se više ne nalazi samo u jednom filmu, već se komadići slagalice nalaze svuda u medijskom prostoru, a publika ih zajednički sklapa u koherentan svemir.

### 6.2. L. Mollet (2019) i redefiniranje klasičnih bajki
U svojoj analizi *"The Power of Disney: How Disney’s Live-Action Remakes Redefine the Fairy Tale"*, Mollet objašnjava da Disney namjerno koristi igrane remaked kako bi modernizirao zastarjele narative. Princeze više nisu pasivne i nemoćne (poput Jasmine ili Belle u originalu), već postaju aktivne pokretačice promjena. Glumice poput Emme Watson i Naomi Scott donose svoj stvarni javni imidž u filmsku ulogu, čime se briše granica između glumice i lika. Naš graf to kvantificira uvođenjem glumica kao zasebnih čvorova: one daju fizičku i mentalnu potporu likovima u realnom svijetu, što povećava mrežnu koheziju cjelokupnog svemira.

### 6.3. William Proctor (2012) i kolektivna memorija
U radu *"Regenerating Imaginary Worlds"*, Proctor analizira kako remakes utječu na našu nostalgiju. Kada stvarni ljudi glasuju na IMDb-u ili pišu recenzije o novim filmovima, oni nesvjesno uspoređuju novu igranu verziju sa svojim djetinjstvom. To objašnjava zašto *Mary Poppins (1964)* drži nevjerojatan vrhunac od **8.4/10** — ona je postala zlatni standard u kolektivnom pamćenju čovječanstva. Moderni naslovi, čak i s proračunima od stotina milijuna dolara, krvare u ocjenama jer se natječu s nečim što je nemoguće pobijediti: čistom dječjom nostalgijom.

---

## 7. Zaključak

Analiza projekta "Remix" i njegovo proširenje na Disneyev igrani svemir s pripadajućim glumicama dovelo nas je do tri ključna zaključka:

1. **Disneyev svemir je živ, nelinearan sustav:** Priče više nemaju jasan početak i kraj. Kroz uskršnja jaja, vremenske teorije i multiverzumska ogledala, likovi komuniciraju kroz desetljeća i žanrove.
2. **Nostalgija pobjeđuje tehnologiju:** Bez obzira na to koliko novca Disney uloži u CGI vizuale (poput 200 milijuna dolara za *Mulan* ili *Alisu u zemlji čudesa*), gledatelji i dalje najviše ocjenjuju toplinu, autentičnost i glumačku iskrenost. Klasik *Mary Poppins* i izvorni *Pirati s Kariba* ostaju na samom vrhu mrežne i kritičke stabilnosti.
3. **Mrežna vizualizacija je budućnost analize medija:** Tradicionalni linearni popisi i tablice na Wikipediji ne mogu prikazati nelinearnost suvremenih franšiza. Korištenje interaktivnih grafova s podrškom umjetne inteligencije omogućuje nam da na jednom mjestu vidimo i razumijemo kako jedan potonuli brod ili jedan skriveni trozubac spaja stotine različitih ljudskih sudbina i kinematografskih snova.

Grafika i podaci u našem projektu dokazuju da Disney i Pixar nisu samo stvorili zabavu za djecu — oni su izgradili monumentalnu digitalnu mitologiju našeg vremena u kojoj svatko od nas može pronaći svoju skrivenu vezu.

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
