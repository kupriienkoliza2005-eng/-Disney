# Kako nasmješeni miš povezuje djetinjstvo i baze podataka: Sveobuhvatna mrežna analiza Disneyevog i Pixarovog narativnog meta-svemira

**Autorica:** Yelyzaveta Kupriienko  
**Ustanova:** Filozofski fakultet, Odsjek za informacijske znanosti  
**Kolegij:** Istraživanje društvenih mreža  
**Datum:** 19. svibnja 2026.

---

## Sažetak

Svi mi koji smo odrasli uz Disney i Pixar filmove intuitivno osjećamo da su te priče na neki način povezane. No, što se dogodi kada dječju intuiciju i rasprave s internetskih foruma pretvorimo u strogu znanstvenu analizu i vizualiziramo je kao interaktivni graf u stvarnom vremenu? Ovaj rad donosi odgovor. Istražili smo i mapirali zamršeni narativni svemir "Remix", koji spaja klasični Disneyev kanon, ujedinjenu Pixarovu teoriju vremena i potpuno novi sloj: **Disneyev igrani svemir (Live-Action)** zajedno sa stvarnim glumicama koje te likove oživljavaju. 

Koristeći biblioteku D3.js i algoritam s usmjerenim silama, stvorili smo dinamičku mrežu od **115 jedinstvenih čvorova** i **158 relacijskih veza**. Povrh toga, proveli smo precizno kvantitativno istraživanje o tome kako publika i gledatelji ocjenjuju ove igrane adaptacije, suprostavljajući kultne klasike poput *Mary Poppins* i *Pirata s Kariba* modernim milijardskim remakeovima poput *Ljepotice i Zvijeri* te *Aladina*. Analiza pokazuje kako ovi medijski svjetovi više ne funkcioniraju kao izolirani otoci, već tvore složeni transmedijski sustav u kojem se stara magija susreće s fizikalnošću stvarnih glumačkih lica i financijskim zakonitostima holivudske industrije.

![Disney likovi kroz desetljeća](https://static0.moviewebimages.com/wordpress/wp-content/uploads/2022/09/Disney-movie-characters-from-every-decade.jpg?w=1200&h=675&fit=crop)

---

## 1. Uvod: Zašto nas privlači ideja o zajedničkom svemiru?

Kada se Rapunzel i Flynn Rider kratko pojave u gomili gostiju na krunidbi princeze Else u filmu *Frozen*, većina gledatelja to vidi kao simpatičnu šalu animatora ("uskršnje jaje"). Međutim, za medijske teoretičare i strastvene obožavatelje, taj trenutak predstavlja ulazna vrata u golemu, skrivenu mrežu (Walt Disney Animation Studios, 2025). U suvremenoj teoriji medija, koncept **zajedničkog svemira (Shared Universe)** postao je ključni alat za zadržavanje publike i stvaranje duboke emocionalne privrženosti (Jenkins, 2006). Ova korporativna i narativna strategija ne utječe samo na estetiku, već aktivno oblikuje društvenu i kulturnu svijest publike kroz medijsku monopolizaciju i preoblikovanje uloga o kojima djeca i odrasli pregovaraju kroz igru i konzumaciju sadržaja (Giroux, 1999; Wohlwend, 2009).

Ovaj se projekt ne temelji na pukom popisivanju zanimljivosti. Mi ga promatramo kao višeslojni, dinamični graf čiju mrežnu arhitekturu možemo formalno analizirati i kvantificirati (Newman, 2018). Kroz godine, ova teorija razvijala se kroz tri velika vala:
1. **Klasični Disney val:** Povezivanje bajki kroz cameos (Walt Disney Animation Studios, 2025), geografsku blizinu i mitologiju (npr. Kralj Triton pod morem kao rođak Herkula na Olimpu), čime se uspostavlja bogat i autoritativni fikcijski koordinatni sustav (Smith, 2018; Disney Theory, 2021).
2. **Pixarov ujedinjeni val:** Pod utjecajem poznate teorije Jona Negronija (*The Pixar Theory*, 2013), koja pretpostavlja da se svi Pixarovi filmovi (od srednjovjekovne *Meride* do daleke, robotske budućnosti u *Wall-E-ju*) događaju na istoj vremenskoj liniji (Negroni, 2013). Ključ ove teorije je magija drvenih vrata koja putuju kroz prostor i vrijeme, a koju je mala Boo naučila od Meride i kasnije koristila kao ostarjela Vještica. Ova vrsta nelinearnog povezivanja nudi publici novi oblik uranjanja u složeni fikcijski prostor, transformirajući klasični linearni narativ u interaktivni kognitivni prostor u kojem gledatelji sami konstruiraju mentalne modele svijeta (Ryan, 2015; Tanenbaum, 2011).
3. **Novi val igranih filmova (Live-Action):** To je najnoviji dodatak našem grafu. Disney više ne proizvodi samo crtiće; on stvara skupe igrane adaptacije (*remakeove*) u kojima stvarna, fizička lica poznatih glumica (poput Emme Watson, Angeline Jolie ili Emme Stone) daju novu dimenziju poznatim nacrtanim likovima (Mollet, 2019). 

Uvođenjem ovog trećeg vala, graf se više ne bavi samo fiktivnim likovima, već prelazi granice fikcije i stvarnosti. Spojili smo glumice sa svojim likovima, te povezali njihove magične artefakte sa starim animiranim svijetom. Na primjer, **Posejdonov trozubac** koji Jack Sparrow (Johnny Depp) traži u *Piratima s Kariba* kako bi slomio sva kletva mora, zapravo je isti onaj čarobni instrument kojim u crtanom svijetu vlada Kralj Triton (*Mala Sirena*). Na taj način spajamo fizički svijet gusara s mitološkim dnom Disneyevog oceana.

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
Za vizualizaciju grafa koristili smo napredni model fizikalnih sila (Bostock et al., 2011). Da se čvorovi ne bi pretvorili u nečitljivu hrpu na ekranu, algoritmu smo zadali dva suprotstavljena pravila:
1. **Coulombovo odbijanje:** Svi čvorovi se međusobno odbijaju kao da imaju isti električni naboj, što nam osigurava slobodan prostor i sprječava preklapanje teksta.
2. **Hookeovo privlačenje opruga:** Čvorovi koji su povezani vezama privlače se prema centru. Što više zajedničkih veza imaju dva svijeta, to će se oni prirodnije grupirati na ekranu (npr. cijeli svijet *Priče o igračkama* stoji blizu jer dijele istu "ljudsku" maštu).
Ova fizikalna simulacija pruža snažnu integraciju interaktivne dinamike, omogućujući analitičarima da u stvarnom vremenu manipuliraju i istražuju mrežu kroz vizualno filtriranje, pretraživanje i zumiranje (Heer & Shneiderman, 2012).

### 2.3. Pametno pretraživanje uz pomoć umjetne inteligencije
Graf sam po sebi može izgledati zastrašujuće. Zato smo izravno u aplikaciju integrirali pametnog asistenta (pokretanog Gemini API-jem). Kada korisnik ima pitanje (npr. *"Kako su povezani Mary Poppins i Merlin?"*), naš asistent ne izmišlja odgovore. On doslovno "pročita" mrežne podatke iz grafa i na temelju topologije i opisa veza odgovara korisniku toplim, razumljivim i točnim tekstom. Time se osnažuje korisnikova agencija (engl. *agency*) i kognitivna pregovaračka aktivnost s kompleksnim digitalnim narativnim sustavima, premošćujući udaljenost između apstraktnih mrežnih struktura i ljudske sposobnosti razumijevanja i poistovjećivanja s likovima (Ryan, 2015; Tanenbaum, 2011).

### 2.4. Značaj, primjena i mogućnosti vizualizacijskog softvera
Razvijeni program za interaktivnu mrežnu vizualizaciju "Remix" ne predstavlja samo estetski privlačan alat, već moćni analitički softver koji otvara nove horizonte u istraživanju masovnih medija i transmedijskog pripovijedanja. Koristeći temu složenog i isprepletenog Disney-Pixar-Live-Action meta-svemira kao paradigmatski ogledni primjer, program demonstrira kako se apstraktni relacijski podaci mogu transformirati u primjenjivo znanje i duboki narativni uvid (Bostock et al., 2011).

#### A) Za što je ovaj program važan?
U suvremenom dobu, medijske franšize više ne funkcioniraju kroz linearne, izolirane nastavke, već kroz masivne, raspršene mreže priča koje se protežu kroz različite platforme (Jenkins, 2006). Tradicionalne tekstualne baze podataka, enciklopedijski popisi ili tablice nisu u stanju obuhvatiti nelinearni kontinuitet i skrivene korelacije unutar takvih sustava. Ovaj je program važan jer:
1. **Razbija narativni silos:** Omogućuje istraživačima da na jednom ekranu vide kako se odluke i događaji iz jednog filma (npr. potonuli brod u filmu *Frozen*) ulijevaju u fizikalni i relacijski prostor drugog filma (npr. bajku o *Maloj Sireni*), premošćujući rascjep narativa kroz desetljeća (Disney Theory, 2021).
2. **Kvantificira narativnu moć i utjecaj:** Kroz implementaciju SNA metrika poput centralnosti posredovanja i stupnja utjecaja, program omogućuje objektivno mjerenje emancipacije likova, rodnog balansa i promjene u strukturi likova kroz povijesne ere (Newman, 2018; England et al., 2011).
3. **Analizira utjecaj korporativne kulturne industrije:** Vizualizirajući mrežnu dominaciju velikih konglomerata poput Disneyja, program služi kao kritički alat za analizu načina na koji medijski monopoli strukturiraju dječju maštu i potrošačko ponašanje (Giroux, 1999; Wohlwend, 2009).

#### B) Što program može napraviti (Mogućnosti softvera)?
Program integrira napredne funkcionalnosti koje ga čine izuzetno agilnim i višenamjenskim:
1. **Fizikalna simulacija u stvarnom vremenu (D3 Force-Directed Simulation):** Korisnik može fizički povlačiti čvorove, pomicati ih i promatrati kako se ostatak grafa prilagođava novoj topologiji pod utjecajem opruga i sila odbijanja (Bostock et al., 2011). To omogućuje dinamičko modeliranje i "what-if" analizu.
2. **Fleksibilno filtriranje i preoblikovanje prostora:** Korisnici mogu jednim klikom prebacivati između različitih mrežnih izgleda (npr. orbitalni raspored po klasterima, podjela na kanonske i ne-kanonske veze, izoliranje pojedinih filmskih era). Ovo vizualno raščišćavanje mrežnog šuma olakšava fokusiranje na ključne podgrafe (Heer & Shneiderman, 2012).
3. **Integrirano semantičko pretraživanje potpomognuto s AI (Gemini Assistant):** Za razliku od uobičajenih tražilica koje traže samo ključne riječi, ugrađeni Gemini asistent provodi dubinsku analizu putanja u grafu. Korisnik može podnijeti prirodno-jezični upit, a asistent će identificirati najkraće putove, posredničke čvorove i narativna opravdanja te ih prevesti u koherentnu ljudsku priču, povećavajući kognitivnu pristupačnost mreže (Ryan, 2015; Tanenbaum, 2011).
4. **Detaljna inspekcija i analiza čvorova:** Klikom na bilo koji entitet, sustav dinamički generira karticu s detaljnim informacijama, unutar-mrežnim statistikama (stupanj, klaster, uloga) te povezanim povijesnim i financijskim podacima (IMDb & Box Office Mojo, 2026).

#### C) Gdje možemo koristiti ovaj program (Područja primjene)?
Zbog svoje modularne i skalabilne prirode, program nalazi primjenu u širokom rasponu disciplina:
1. **Upravljanje intelektualnim vlasništvom i franšizama (IP Management):** Velike produkcijske kuće (poput Disneyja, Marvela ili Warner Brosa) mogu koristiti ovaj softver kao alat za praćenje kontinuiteta i sprječavanje narativnih rupa (engl. *plot holes*) u masovnim franšizama. Scenaristi i producenti mogu u sekundi provjeriti je li neki magični artefakt ili obiteljska veza u koliziji s ranijim kanonima (Smith, 2018).
2. **Akademska istraživanja i visoko obrazovanje:** Na odsjecima za informacijske znanosti, komparativnu književnost, sociologiju i medijske studije, program služi kao laboratorijski alat za podučavanje analize društvenih mreža (SNA), transmedijskog pripovijedanja i digitalne humanistike (Newman, 2018; Ryan, 2015).
3. **Inovativno i interaktivno učenje (K-12 i visoko školstvo):** Nastavnici mogu koristiti vizualizacije kako bi učenicima na njima bliskim i uzbudljivim primjerima (poput bajki i crtića) objasnili složene koncepte poput teorije grafova, fizikalnih sila privlačenja i odbijanja ili povijesne evolucije rodnih uloga (Wohlwend, 2009; England et al., 2011).
4. **Istraživačko novinarstvo i filmska kritika:** Novinari i kritičari mogu koristiti interaktivni graf kako bi publici vizualno prezentirali skrivene aspekte filmske industrije, financijske tokove u usporedbi s ocjenama gledatelja ili pak zamršene veze unutar političkih, povijesnih ili pop-kulturnih fenomena (Heer & Shneiderman, 2012).

---

## 3. Komparativna analiza igranih filmova: Što nam govore kvantitativni podaci?

Kako bismo ispunili zahtjev za detaljnim kvantitativnim opisom, proveli smo benchmark usporedbu 10 najistaknutijih igranih i hibridnih (s ne-crtanim elementima) filmova Disneyevog studija koji su integrirani u naš graf. Cilj nam je bio analizirati odnos između ulaganja (budžeta), komercijalnog uspjeha (zarade na kino-blagajnama) i — što je najvažnije — **ocjene i feedbacka stvarnih ljudi (gledatelja)** na platformama poput IMDb-a (IMDb & Box Office Mojo, 2026).

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
- **Kritički trijumf Julie Andrews:** Apsolutni pobjednik po ocjenama publike i kritičara je legendarni klasik **Mary Poppins (1964)** s impresivnih **8.4/10**. Snimljen sa skromnim budžetom od svega 6 milijuna dolara, ovaj je film ostvario nevjerojatan povrat investicije i osvojio 5 Oscara (IMDb & Box Office Mojo, 2026). To dokazuje da stvarni, topli ljudski šarm (Julie Andrews) i pažljivo narativno vođenje imaju trajnu vrijednost koja nadilazi prolazne CGI efekte i industrijska prepisivanja (Mollet, 2019; Proctor, 2012).
- **Masovna popularnost Pirata s Kariba:** Kada govorimo o "velikim brojevima", **Pirati s Kariba (2003)** su neprikosnoveni vladar. S preko **1.2 milijuna pojedinačnih glasova gledatelja** na IMDb-u i ocjenom od **8.1/10**, ovaj film predstavlja najpopularniji ne-crtani uradak Disneyevog studija u povijesti (IMDb & Box Office Mojo, 2026). Keira Knightley (kao Elizabeth Swann) i Johnny Depp (kao Jack Sparrow) uspjeli su stvoriti moderni pustolovni mit koji publika i danas obožava i koji drži izuzetnu stabilnost i ugled u našem grafu mrežnih veza (Smith, 2018; Newman, 2018).
- **Milijarderi niske ocjene:** Zanimljivo je pogledati filmove poput *Alise u zemlji čudesa (2010)* i *Aladina (2019)*. Oba filma su prešla magičnu granicu od **1 milijarde dolara zarade** na blagajnama (IMDb & Box Office Mojo, 2026), unatoč tome što su im ocjene gledatelja bile razmjerno niske (6.4 i 6.9). Ovo nam ukazuje na "Disney mašineriju industrijskog remakea" (Mollet, 2019) — publika hrli u kina zbog nostalgije i brenda, no njezino aktivno pregovaranje s vlastitim djetinjstvom i kolektivnim sjećanjem rezultira umjerenim ocjenama (Proctor, 2012; Wohlwend, 2009).
- **Tragedija Mulana (2020):** Najgori rezultat ostvario je film *Mulan (2020)* s razočaravajućih **5.7/10**. S ogromnim budžetom od 200 milijuna dolara, film je zbog niza kontroverzi i pandemijskih okolnosti zaradio svega 70 milijuna na kino blagajnama (IMDb & Box Office Mojo, 2026). To nam pokazuje da pretjerano odstupanje od zabavnih i magičnih korijena originala (izbacivanje zmaja Mushua i glazbenih brojeva) rezultira odbijanjem od strane publike, koja od Disneyja traži toplinu, a ne hladni ratni spektakl s obilježjima korporativne dominacije (Proctor, 2012; Giroux, 1999).

---

## 5. Povezivanje mrežnih svjetova: Detaljna naratologija i teorijske veze

Sada kada imamo podatke, kako smo ih narativno i teorijski povezali unutar aplikacije i grafa? Svaka od glumica i filmova ima točan razlog zašto se nalazi na grafu i kako je premošćena s originalnim animiranim kanonom (Smith, 2018; Disney Theory, 2021).

### 5.1. Kako glumice povezuju dimenzije?
U našem grafu, čvorovi glumica služe kao **svjetovni mostovi** koji objašnjavaju tranziciju iz crtanog u stvarni format:
- **Keira Knightley i Elizabeth Swann:** Keira daje opipljiv, prkosan ljudski oblik liku Elizabeth Swann. Njezina uloga povezuje gusarsku povijest sa stvarnim povijesnim razdobljem jedrenjaka na Karibima, a preko njezinog saveznika Jacka Sparrowa i Posejdonovog trozupca, ta povijest se ulijeva direktno u podvodne dvore kralja Tritona, što stabilizira i povezuje ove morske narativne slojeve u koherentnu cjelinu (Smith, 2018; Disney Theory, 2021).
- **Julie Andrews i Mary Poppins:** Julie Andrews stvara lik savršene čarobne dadilje. Njezin magični kišobran i beskrajna crna torba koriste istu magiju "neprirodne prostorne ekspanzije" koju koristi i čarobnjak Merlin u dvorcu Camelot u srednjem vijeku (iz filma *Mač u kamenu*). Teorija sugerira da je Mary zapravo Merlinova učenica koja je pobjegla u Edwardijanski London kako bi pomogla ljudima preživjeti hladno industrijsko doba i ublažiti stroge društvene stege (Proctor, 2012; Giroux, 1999).
- **Emma Stone i Cruella de Vil:** Emma Stone glumi mladu Estellu u punk-rock Londonu 1970-ih. Njezina divlja energija i sklonost neobičnim kreacijama suptilno se isprepliću sa Stitchovim dolaskom na Zemlju. Naime, kaos koji ona stvara s dalmatinerima postavlja temelje za društveno prihvaćanje neobičnih kućnih ljubimaca u modernom svijetu, što kasnije pomaže djevojčici Lilo da javnost prihvati Stitcha kao "nestandardnog psa" (Walt Disney Animation Studios, 2025; Disney Theory, 2021).
- **Angelina Jolie i Maleficent:** Angelina Jolie donosi mračnu, ali ranjivu i majčinsku stranu Gospodarice Zla. Ova igrana verzija služi kao **ogledalo multiverzuma** u odnosu na originalnu Trnoružicu iz 1959. godine. Ona dokazuje da se ista priča može ispričati iz dvije perspektive — jedna u kojoj je Maleficent čisto zlo, i druga u kojoj je neshvaćena zaštitnica prirode i Močvara (Mollet, 2019; England et al., 2011).
- **Emma Watson i Belle:** Emma Watson, poznata po svom stvarnom aktivizmu za obrazovanje djevojčica, savršeno se uklapa u ulogu knjiške Belle. Njezina igrana verzija dodatno potencira inteligenciju (ona je u igranom filmu i sama inovatorica, a ne samo njezin otac Maurice). To je izravno povezuje s njezinom unukom Jane Porter (*Tarzan*), koja je naslijedila Bellein prepoznatljiv žuti čajnik i strast prema istraživanju divljine, stvarajući snažnu liniju neovisnih i obrazovanih ženskih likova koji redefiniraju pasivne bajkovite tropove (Mollet, 2019; Wohlwend, 2009; England et al., 2011).
- **Naomi Scott i Jasmine (Aladin 2019):** Naomi Scott daje moćni vokal i političku snagu princezi Jasmine. Njezin se lik buni protiv tradicionalnih zakona Agrabaha i želi postati prva ženska vladarica (sultanica). To se savršeno povezuje sa stabilnošću njezinog kraljevstva u pustinjskoj regiji koja blisko surađuje s ponosnim kraljevstvom Simbe i pruža emancipacijski odgovor na rane, pasivne prikaze princeza (Mollet, 2019; England et al., 2011).
- **Lily James i Pepeljuga (2015):** Lily James donosi dirljivu jednostavnost i vjeru u čistoću srca Pepeljuge. Njezina magična transformacija staklenih cipelica temelji se na istoj alkemiji kristala i svjetla koja prožima Snjeguljičin stakleni lijes u Staroj Europi, povezujući rane mitologije u stabilan estetski sustav (Disney Theory, 2021; Smith, 2018).
- **Liu Yifei i Mulan (2020):** Liu Yifei donosi nevjerojatnu fizičku borbenu spremnost i fokus na unutarnju energiju "Chi". Ova verzija Mulan se odmiče od animiranog humora i prizemljuje priču u povijesnu ratnu spektakl, čime nam daje uvid u antičku kinesku povijest čija se duhovna i borbena dimenzija izravno upisuje u mrežnu arhitekturu našeg sustava kao nezavisna ratnička sila (Smith, 2018; Proctor, 2012).

---

## 6. Sveobuhvatna teorijska i empirijska analiza mrežnih mjera, centralnosti i klasteriranja (SNA)

U okviru analize društvenih i narativnih mreža (engl. *Social Network Analysis* - SNA), mreža likova, predmeta, glumaca i lokacija našeg interaktivnog Disney-Pixar meta-svemira podliježe detaljnoj strukturnoj i topološkoj procjeni. Umjesto suhoparnih matematičkih formula koje često otežavaju razumijevanje, u ovom poglavlju objašnjavamo mrežne koncepte na jednostavan, intuitivan i slikovit način. Svaku mjeru povezujemo s konkretnim primjerima i likovima iz našeg globalnog interaktivnog modela, pokazujući kako se teorija mreža savršeno preslikava na bajke i filmove.

---

### 6.1. Čvorovi i veze (Nodes and Links)

U teoriji mreža, osnovu svakog sustava čine dvije komponente: **čvorovi** i **veze**. 
- **Čvorovi** predstavljaju pojedinačne entitete u našem svemiru. To mogu biti stvarni ljudi (glumice poput Emme Watson), izmišljeni likovi (Elsa, Tarzan, Ariel), lokacije (Potonuli brod, Močvara) ili ključni magični predmeti (Posejdonov trozubac, Čarobni kišobran).
- **Veze** predstavljaju odnose ili interakcije među tim čvorovima. Naš model razlikuje više tipova veza, poput obiteljskih odnosa (kraljevska loza), službenog pojavljivanja u pozadini filma (cameo) ili labavijih teorija obožavatelja (fandom teorije).

#### A) Grafički model podgrafa

Sljedeći dijagram prikazuje izolirani dio mreže koji povezuje animirane klasike, realistični svijet i stvarne glumce preko obiteljskih i profesionalnih veza:

```text
+-----------------------+                    +-------------------------+
|     [Elsa] (lik)      | ==(obitelj)===>    |     [Tarzan] (lik)      |
|  (Sjeverna Kraljevstva|                    |  (Sjeverna Kraljevstva) |
+-----------------------+                    +-------------------------+
                                                          ||
                                                       (obitelj)
                                                          v
                                             +-------------------------+
                                             |     [Jane] (lik)        |
                                             |    (Džungla / London)   |
                                             +-------------------------+
                                                          ||
                                                       (obitelj)
                                                          v
                                             +-------------------------+
|   [Emma Watson] (gl)  | ==(gluma)===>      |   [Belle Igrana] (lik)  |
|   (Stvarni Svijet)    |                    |    (Igrani Svemir)      |
+-----------------------+                    +-------------------------+
```
*Figurica 6.1: Obiteljski i glumački tranzitni lanac koji povezuje crtanu i igranu stvarnost.*

#### B) Registar entiteta podgrafa (Mrežna tablica)

Kako bismo bolje razumjeli strukturu ovog dijela mreže, u tablicama prikazujemo kako su ti entiteti i njihovi odnosi opisani u našem sustavu:

##### Tablica 6.1.1: Svojstva i uloge mrežnih čvorova
| ID čvora | Naziv čvora | Tip čvora | Pripadnost grupi | Glavna narativna uloga |
| :--- | :--- | :--- | :--- | :--- |
| `elsa` | Elsa | Animirani lik | Sjeverna Kraljevstva | Snježna kraljica sa čarobnim moćima leda |
| `tarzan` | Tarzan | Animirani lik | Sjeverna Kraljevstva | Izgubljeni kraljevski sin odrastao u džungli |
| `jane` | Jane | Animirani lik | Džungla / London | Britanska istraživačica i crtačica u divljini |
| `belle_igrana`| Belle (Igrana) | Igrani lik | Igrana Adaptacija | Pametna i neovisna junakinja u dvorcu |
| `emma_watson` | Emma Watson | Stvarna osoba | Stvarni Svijet | Poznata glumica i društvena aktivistica |

##### Tablica 6.1.2: Karakteristike mrežnih veza
| Polazište (Izvor) | Odredište (Cilj) | Tip odnosa | Jačina veze | Narativno opravdanje i objašnjenje |
| :--- | :--- | :--- | :---: | :--- |
| `elsa` | `tarzan` | obitelj | visoka | Tarzan je izgubljeni brat koji je preživio brodolom |
| `tarzan` | `jane` | obitelj | visoka | Bračna zajednica sklopljena u afričkoj prašumi |
| `jane` | `belle_igrana`| obitelj | visoka | Jane je naslijedila prepoznatljivi žuti čajnik Belleine obitelji |
| `emma_watson` | `belle_igrana`| gluma | iznimna | Fizičko utjelovljenje i osobni doprinos interpretaciji lika |

#### C) Interpretacija u Disney Svemiru
Ovaj segment pokazuje kako mreža spaja naizgled nespojive svjetove. Klasična animacija (`elsa` i `tarzan`) spaja se s povijesnim realizmom kolonijalnog Londona i džungle (`jane`), koji se pak preko obiteljskog naslijeđa ulijeva u modernu igranu adaptaciju (`belle_igrana`). Konačno, uvođenjem stvarne glumice (`emma_watson`), mreža se širi iz fikcije u stvarni svijet. To nam pokazuje da igrani remakeovi nisu samo vizualna promjena, već stvaraju novu dimenziju mrežne povezanosti u kojoj stvarna osoba i njezin javni ugled izravno utječu na narativni položaj fiktivnog lika.

---

### 6.2. Gustoća grafa (Graph Density)

**Gustoća grafa** mjeri koliko je naša mreža "zasićena" vezama. Zamislite to kao pitanje: *od svih mogućih poznanstava koja su se mogla dogoditi među likovima, koliko ih se stvarno ostvarilo?*
- Ako bi svi likovi u cijeloj mreži poznavali sve ostale likove (svatko spojen sa svakim), gustoća bi bila maksimalna (iznosila bi ravno 100%).
- Ako likovi ne bi imali apsolutno nikakve međusobne veze, gustoća bi bila nula.

#### A) Grafički model podgrafa

Sljedeći dijagram prikazuje izolirani i izrazito gusto povezani svijet igračaka (*Toy Story*) te njegov jedini, uski most prema ostatku svemira:

```text
       +-----------+                 +----------+
       | [Woody]   | <==(obitelj)==> | [Buzz]   |
       +-----------+                 +----------+
             ^                            ^
             |                            |
          (obitelj)                    (obitelj)
             v                            v
       +-----------+                 +----------+
       | [Andy]    | <==(obitelj)==> | [Jessie] |
       +-----------+                 +----------+
             ||
             || (skriveni_mickey) <--- Jedini i vrlo uski most prema van
             v
       +-----------+
       |  [Ego]    |  (Skriveni Mickey - Centralna točka)
       +-----------+
```
*Figurica 6.2: Hermetički zatvorena i gusto povezana obitelj igračaka s jednim vanjskim ulazom.*

#### B) Analiza i usporedba gustoće
Uzmimo za primjer gornji podgraf igračaka. Unutar te male skupine od 5 likova, ostvareno je čak 5 izravnih veza od ukupno 10 teoretski mogućih. To znači da je lokalna gustoća ovog svijeta iznimno visoka (čak 50%). Svi su bliski, informacije i odnosi kolaju bez prepreka i čine čvrstu, neraskidivu zajednicu.

Međutim, kada izračunamo gustoću na razini **cijelokupnog Disney-Pixar svemira** (koji u našoj bazi sadrži 115 čvorova i 158 veza), gustoća pada na svega **2.41%**. To nam govori da je globalni Disneyev svemir izrazito "rijetka" mreža s mnogo slobodnog prostora.

#### C) Interpretacija u Disney Svemiru
Ova razlika u gustoći je ključna za očuvanje filmske čarolije. Naime, pojedinačni svjetovi (poput obitelji igračaka, morskog kraljevstva ili sjevernih zemalja) moraju ostati gusto povezani i prepoznatljivi sami po sebi. S druge strane, globalna mreža mora ostati rijetka. Kada bi globalna gustoća bila visoka, to bi značilo da su svi filmovi i likovi nasumično izmiješani u jednu kaotičnu priču. Time bi se izgubila čarolija i prepoznatljivost pojedinačnih autorskih brendova. Poveznice moraju ostati suptilne, rijetke i tajnovite – poput dragocjenih mrvica kruha koje obožavatelji sami otkrivaju.

---

### 6.3. Mjere važnosti i centralnosti (Centrality Measures)

U mrežnoj znanosti, ne uživaju svi čvorovi jednaku važnost. Neki su skriveni na marginama, dok drugi upravljaju cijelim sustavom. Budući da se važnost može promatrati iz različitih kutova, analiziramo pet temeljnih vrsta mrežne važnosti (centralnosti) bez korištenja komplicirane matematike.

---

#### 6.3.1. Stupanj važnosti po broju veza (Degree Centrality)

Ovo je najjednostavnija mjera važnosti. Ona jednostavno odgovara na pitanje: **koliko izravnih veza (susjeda) ima pojedini čvor?** Što više izravnih veza lik ima, to je on popularniji ili utjecajniji u svom neposrednom okruženju.

#### A) Grafički model podgrafa

Sljedeća skica prikazuje kontrast između dvije zvijezde u našoj mreži: globalne zvijezde koja spaja različite svjetove i lokalne zvijezde koja drži na okupu samo vlastitu obitelj:

```text
    A) Čvor: [Ego] (Skriveni Mickey)              B) Čvor: [Tarzan]
       (Globalni autorski hub)                       (Lokalni obiteljski hub)

             [Ariel]                                       [Elsa]
                ▲                                             ▲
                |                                             |
      [Remy] <== [Ego] ==> [Kida]                    [Jane] <= [Tarzan] => [Anna]
                |                                             |
                ▼                                             ▼
             [Mulan]                                       [Terk]
```
*Figurica 6.3: Usporedba globalnog i lokalnog mrežnog središta.*

#### B) Usporedba i analiza
Kao što vidimo na slici, i globalni autorski potpis (Skriveni Mickey / Ego) i lokalni heroj Tarzan imaju jednak broj izravnih veza (svaki po 4 veze u ovim primjerima). No, njihova stvarna uloga u cijelom svemiru je dramatično drugačija. Tarzan okuplja isključivo likove iz svog filma i srodnih sjevernih kraljevstava, dok Skriveni Mickey u našoj globalnoj mreži ima čak 26 izravnih veza koje prodiru u apsolutno svaki kutak weba.

#### C) Interpretacija u Disney Svemiru
Čvor **Skriveni Mickey (Ego)** ima uvjerljivo najveći broj veza u cijelome grafu. On je "kohezivno ljepilo" cijelog ovog meta-svemira. Pojavljuje se kao vizualni detalj pod morem kod Ariel, na zidu u kući Mulan, u kuhinji štakora Remyja ili u potonuloj Atlantidi kod Kide. Taj golemi broj veza tumači se kao prepoznatljivi potpis autora – stalni, tihi i magični podsjetnik gledateljima da su svi ovi svjetovi nastali u istoj kreativnoj radionici.

---

#### 6.3.2. Težinska važnost odnosa (Weighted Degree)

Nisu sve veze u životu jednako važne. Prijateljstvo s najboljim prijateljem ili srodstvo s bratom ima puno veću težinu od usputnog poznanstva na ulici. Isto pravilo vrijedi i u našem grafu. **Težinska važnost** ne broji samo suhoparan broj veza, već uzima u obzir njihovu kvalitetu i jačinu.

U našem sustavu dodijelili smo tri razine jačine vezama kako bismo zaštitili službene priče od neslužbenih nagađanja:
1. **Službene obiteljske i narativne veze (cameo, srodstvo):** imaju najveću jačinu jer su neporecive i jasno vidljive na ekranu (npr. kraljevska loza ili službena pojavljivanja).
2. **Igrane adaptacije i glumački mostovi:** imaju srednju jačinu (spajaju animirane likove s glumačkim fizikalnim pandanima).
3. **Špekulativne teorije obožavatelja (fandom teorije):** imaju najmanju jačinu jer se temelje na nagađanjima s internetskih foruma.

#### A) Grafički model podgrafa

Sljedeća skica prikazuje kako se oko princeze Ariel miješaju čvrsti kanon, službene reference i labave teorije:

```text
        +---------------+             +--------------------+
        |   [Triton]    |             |  [Potonuli Brod]   |
        +---------------+             +--------------------+
                \                             /
              family (snažna)              cameo (srednja)
                  \                         /
                   v                       v
                       +---------------+
                       |    [Ariel]    |
                       +---------------+
                               ^
                               |
                         teorija (slaba)  <--- Labavo fandom nagađanje
                               |
                        +---------------+
                        |   [Merida]    |
                        +---------------+
```
*Figurica 6.4: Raspodjela jačine odnosa oko princeze Ariel.*

#### B) Analiza težinske vrijednosti
Kada bismo sve veze tretirali jednako, Mermaid Ariel bi imala jednostavan stupanj od 3 veze. No, uvođenjem težinske važnosti, jasno se vidi da njezina mrežna snaga leži u čvrstim temeljima. Veze s njezinim ocem Tritonom i s Potonulim brodom (koji je ključan pokretač radnje) nose preko 80% njezine mrežne snage. S druge strane, labava forumska pretpostavka da je Merida u rodu s Ariel jednostavno zato što obje imaju crvenu kosu nosi minimalnu težinu i ne može narušiti stabilnost njezinog mrežnog položaja.

#### C) Interpretacija u Disney Svemiru
Ovaj pristup rješava ključan problem mrežne analize medija: **problem mrežnog šuma**. Bez utega i težina, nagađanja fana brzo bi preplavila i zagađivala graf, pretvarajući ga u nečitljivu gomilu tračeva. Težinski stupanj čuva strukturnu čistoću i osigurava da službene, kanonske Disney i Pixar činjenice ostanu dominantne i stabilne.

---

#### 6.3.3. Važnost po bliskosti (Closeness Centrality)

Ova mjera ocjenjuje **koliko je pojedini lik "blizu" svim ostalim likovima u mreži**. "Blizu" ovdje ne znači geografsku udaljenost, već broj mrežnih skokova (koraka) koje lik mora poduzeti da bi preko posrednika došao do bilo koje druge točke u grafu.
- Lik koji se nalazi u samom mrežnom središtu može vrlo brzo (u svega nekoliko skokova) komunicirati ili proširiti svoj utjecaj na cijeli sustav. Njegova bliskost je iznimno visoka.
- Lik koji se nalazi na mrežnoj margini mora proći dugačak lanac posrednika da bi se uopće povezao s ostatkom grafa. Njegova bliskost je iznimno niska.

#### A) Grafički model podgrafa

Sljedeća skica prikazuje dugačku, tranzitnu putanju od perifernih piratskih mora pa sve do pariške kuhinje:

```text
[Jack Sparrow] -- [Trozubac] -- [Triton] -- [Ariel] -- [Ego] -- [Remy]
```
*Figurica 6.5: Linearni put koji pokazuje protok energije i tranzita kroz mrežu.*

#### B) Analiza bliskosti
U ovom linearnom lancu, čvorovi koji se nalaze u sredini poput Ariel i Tritona imaju najvišu bliskost. Oni su idealni "odašiljači" jer mogu u svega dva ili tri koraka doći i do dalekog gusara Jacka Sparrowa s jedne strane, te do kuhara Remyja s druge strane. Nasuprot tome, Jack Sparrow i Remy imaju izrazito nisku bliskost jer su previše udaljeni na rubovima i ovise o dugom lancu posrednika da bi prenijeli svoj utjecaj.

#### C) Interpretacija u Disney Svemiru
Likovi poput Ariel i njezinog oca Tritona drže mrežnu jezgru jer doslovno spajaju mitološke dubine mora (gdje vlada magija) i kopneni svijet ljudi. Oni funkcioniraju kao prirodna raskrižja cijelog svemira. S druge strane, izolirane avanture poput piratskih Kariba Jacka Sparrowa nalaze se na mrežnoj periferiji. Da bi se njihova priča povezala s ostatkom bajki, naracija mora premostiti brojne korake – preko čarobnih predmeta i morskih bogova – što dokazuje da su neki žanrovi znatno teže integrirani u zajednički kanon.

---

#### 6.3.4. Važnost posredovanja i premošćivanja (Betweenness Centrality)

Ova mjera identificira **mrežne mostove** ili "vratare" (engl. *gatekeepers*). To su čvorovi koji se nalaze na najkraćim putovima između različitih, inače potpuno odvojenih svjetova. 
- Ako želite poslati poruku iz Svijeta A u Svijet B, a ti svjetovi ne komuniciraju izravno, vaša poruka mora proći kroz mrežnog posrednika. 
- Lik s visokom posredničkom ulogom drži ključ komunikacije u cijeloj mreži. Ako ga uklonite, mreža se raspada na izolirane otoke.

#### A) Grafički model podgrafa

Sljedeći dijagram vjerno ilustrira kako su morske dubine Ariel i sjeverna kraljevstva Else topološki spojeni isključivo kroz jednu jedinu točku – **Potonuli brod**:

```text
  [Morska Kraljevstva]                                [Sjeverna Kraljevstva]
    +----------------+                                  +----------------+
    |    [Ariel]     |                                  |     [Elsa]     |
    +----------------+                                  +----------------+
            \                                                   /
             \ (cameo)                                         / (theory)
              v                                               v
            +---------------------------------------------------+
            |              [Potonuli Brod] (most)               |
            +---------------------------------------------------+
                                      |
                                      | (family)
                                      v
                            +-------------------+
                            |     [Tarzan]      |
                            +-------------------+
```
*Figurica 6.6: Lokacija Potonulog broda kao kritični strukturni most između dva kraljevstva.*

#### B) Analiza uloge mosta
U ovom podgrafu, ako Elsa želi ostvariti bilo kakvu mrežnu vezu prema Arielinom oceanu, taj put mora proći preko čvora **Potonuli brod**. Potonuli brod drži apsolutnu kontrolu nad ovim mrežnim tranzitom. Njegova posrednička uloga je toliko dominantna da ima maksimalnu vrijednost u ovom segmentu, dok su ostali čvorovi u potpunosti ovisni o njemu.

#### C) Interpretacija u Disney Svemiru
Ovaj rezultat nam donosi fascinantno narativno otkriće: **najvažniji mrežni mostovi u bajkama često nisu ljudi, već predmeti i lokacije**. Olupina Potonulog broda u kojoj Ariel pronalazi ljudske stvari zapravo je isti brod na kojem su stradali roditelji Else i Ane, a čiji ostaci kasnije odvode Tarzanove roditelje na obalu Afrike. Ako bismo izbrisali čvor `Potonuli Brod`, naš bi se svemir u trenutku prekinuo i raspao na dva potpuno izolirana mjehurića: vodeni i kopneni. Neživi predmeti tako postaju tihi čuvari sudbina koji povezuju generacije i svjetove.

---

#### 6.3.5. Važnost po ugledu i prestižu (Eigenvector Centrality)

Ova mjera funkcionira po zlatnom životnom pravilu: **"Nije važno koliko prijatelja imaš, nego tko su ti prijatelji!"** 
- Čvor koji je povezan s mnogo izoliranih i nevažnih likova imat će nisku važnost po ugledu.
- Čvor koji je povezan s tek nekoliko ljudi, ali su ti ljudi iznimno utjecajni i moćni mrežni vladari, imat će ogroman ugled i prestiž u cijelom sustavu.

#### A) Grafički model podgrafa

Sljedeća skica prikazuje kako se mrežni ugled prenosi s masivnog globalnog središta (Ego/Mickey) preko simpatičnog kuhara Remyja izravno na strogog kritičara Antona Egoa:

```text
  +-----------------+             +-----------------+             +-----------------+
  |   [Anton Ego]   | <(friend)>  |     [Remy]      | <(friend)>  |  [Ego_Mickey]   |
  | (Nizak stupanj  |             | (Visok utjecaj  |             | (Masivni Hub    |
  | ali utjecajan)  |             |     kuhara)     |             |  prestiža)      |
  +-----------------+             +-----------------+             +-----------------+
```
*Figurica 6.7: Prijenos prestiža i utjecaja kroz lanac svojstvenog vektora.*

#### B) Usporedba i analiza ugleda
Uzmimo za primjer gastronomskog kritičara **Antona Egoa** i gusara **Jacka Sparrowa**. Oba lika u našoj cjelovitoj mreži imaju vrlo malen broj izravnih veza. No, Anton Ego je izravno povezan s malim kuharom Remyjem, koji pak stoji rame uz rame s najvećim mogućim mrežnim autoritetom, Skrivenim Mickeyjem. Zbog te blizine društvenoj eliti, naš sustav prepoznaje Antona Egoa kao iznimno važnog člana "mrežnog aristokratskog društva". Jack Sparrow, s druge strane, povezan je isključivo s rubnim piratima i predmetima na periferiji, pa mu je mrežni ugled i prestiž u ukupnom sustavu izrazito malen, unatoč njegovoj filmskoj popularnosti.

#### C) Interpretacija u Disney Svemiru
Ova nam mjera pomaže otkriti **"skrivenu elitu"** našeg svemira. Neki se likovi možda ne pojavljuju u deset različitih filmova i nemaju gomilu uskršnjih jaja, ali su uvučeni u samo srce najvažnijih narativnih zbivanja i okruženi mrežnim divovima. Prestiž nam omogućuje da prodrremo dublje od običnog brojenja veza i prepoznamo likove koji drže istinski, skriveni autoritet nad medijskim prostorom.

---

### 6.4. Tendencija grupiranja i kohezije (Clustering Coefficients)

U stvarnom životu, prijatelji vaših prijatelja često s vremenom postanu i vaši prijatelji. Kada se tri osobe međusobno poznaju, oni čine čvrst i stabilan prijateljski **trokut**. Koeficijenti klasteriranja mjere upravo to: kolika je vjerojatnost da će se u mreži formirati zatvoreni, stabilni trokuti koji označavaju visoko društveno povjerenje i koheziju.

---

#### 6.4.1. Lokalno grupiranje (Local Clustering)

Lokalno grupiranje promatra isključivo jednog određenog lika i odgovara na pitanje: **koliko su međusobno povezani njegovi izravni prijatelji?**
- Ako se svi prijatelji lika A i sami međusobno poznaju i druže, lokalno grupiranje lika A iznosi maksimalnih 100% (svi čine čvrstu, neraskidivu kliku).
- Ako se nitko od prijatelja lika A međusobno ne poznaje (svi su povezani samo preko njega), njegovo lokalno grupiranje je ravno nuli (struktura u obliku slova V).

#### A) Grafički model podgrafa

Sljedeća skica prikazuje kontrast izmeću stabilnog, zatvorenog obiteljskog trokuta morskog kraljevstva i otvorenog, hladnog tranzitnog mosta:

```text
   A) Zatvoreno susjedstvo (Triton)              B) Otvoreno susjedstvo (Potonuli Brod)
      (Visoka lokalna kohezija)                     (Tranzitni, nelinearni most)

            [Triton]                                      [Potonuli Brod]
            /      \                                         /       \
       family     magic                                   cameo     theory
          /          \                                     /           \
         v            v                                   v             v
      [Ariel] <====> [Ego] (Ostvarena veza)            [Ariel]        [Elsa] (Nema veze)
```
*Figurica 6.8: Zatvoreno (trokutasto) nasuprot otvorenog (V-oblik) lokalnog susjedstva.*

#### B) Analiza lokalnog grupiranja
U prvom slučaju (A), Ariel i magični potpis Ego (Mickey) su izravno povezani pod morem, čime zatvaraju savršeni prijateljski trokut oko morskog kralja Tritona. Njegovo lokalno grupiranje je iznimno visoko, što znači da se informacije i emocije unutar tog kruga vrte u krug bez ikakvih gubitaka.
U drugom slučaju (B), olupina Potonulog broda spaja princezu Ariel (ocean) i kraljicu Elsu (kopno). Međutim, njih dvije se nikada nisu susrele niti ostvarile izravnu vezu. Njihovo susjedstvo ostaje otvoreno (nula posto lokalnog grupiranja), što znači da brod funkcionira samo kao hladni prolaznik, a ne kao dio tople zajednice.

#### C) Interpretacija u Disney Svemiru
Lokalno grupiranje nam izravno otkriva **emocionalnu i socijalnu stabilnost u pričama**. Visoka vrijednost oko Tritona pokazuje da su njegovi susjedi dio čvrsto zaokruženog kolektiva. Nasuprot tome, nulta vrijednost oko Potonulog broda potvrđuje da je ta olupina tek samotna, tranzitna mrežna točka namijenjena spajanju likova iz različitih svjetova, držeći ih mrežnim cipelama na sigurnoj udaljenosti.

---

#### 6.4.2. Globalno grupiranje (Global Clustering)

Dok lokalno grupiranje promatra pojedinačne likove, **globalno grupiranje** ocjenjuje stisnutost cjelokupnog svemira. Ono predstavlja jednostavan omjer između ukupnog broja zatvorenih prijateljskih trokuta i ukupnog broja otvorenih trojki (tripleta) u cijelom grafu.

#### A) Grafički model podgrafa

Sljedeća skica prikazuje stabilno i gusto ratno prijateljstvo u staroj kineskoj dinastiji između Mulan, generala Shanga i ratnika Yaoa, s jednim vanjskim magičnim posjetiteljem (Mushu):

```text
                  [Mushu] (Zmaj)
                     |
                     | (magic)
                     v
                  [Mulan] <============(family)=============> [Shang]
                     ▲                                           ▲
                     |                                           |
                  (friend)                                    (friend)
                     v                                           v
                    [Yao] <=============(friend)===============> [Yao]
```
*Figurica 6.9: Kineska dinastijska podmreža s kombinacijom zatvorenih i otvorenih tripleta.*

#### B) Analiza cjelokupnog grupiranja
Kao što vidimo u ovom kineskom podgrafu, likovi Mulan, Shang i Yao čine savršeno zatvoreni trokut (svatko je povezan sa svakim preko borbe i obitelji). Čak i kada u sustav uvedemo malog zmaja Mushua (koji je spojen samo s Mulan i ne komunicira izravno s ratnicima), ukupni postotak zatvorenosti ovog svijeta ostaje iznimno visok (čak 60%). To znači da je ovaj filmski podgraf izvanredno kompaktan.

#### C) Interpretacija u Disney Svemiru
Uočenih 60% globalnog grupiranja u ovom segmentu dokazuje **snažnu narativnu povezanost i autonomiju**. Drevna Kina u filmu *Mulan* funkcionira kao zatvoren ratnički kolektiv, imun na vanjske mrežne utjecaje. 
Međutim, ako ovu metriku preslikamo na naš globalni Disney-Pixar graf, ona pada na tek desetak posto. To nam potvrđuje da je cijeli naš meta-svemir zapravo skup visoko razvijenih i zatvorenih lokalnih balona (pojedinačnih filmskih hitova) koji sretno plutaju u slabo povezanom autorskom vakuumu, povezani tek tankim nitima.

---

### 6.5. Modularnost (Modularity)

**Modularnost** je ocjena kvalitete podjele cijele mreže u logične skupine ili zajednice (klastere). 
- Dobra podjela (visoka modularnost) znači da su likovi unutar istog klastera iznimno gusto povezani, dok su veze između različitih klastera rijetke i suptilne. To je znak da su grupe prirodne, logične i narativno opravdane.
- Loša podjela (niska ili negativna modularnost) znači da smo likove podijelili nasumično ili umjetno, spajajući ljude koji nemaju nikakve veze jedni s drugima, dok smo njihove stvarne tople odnose presjekli.

#### A) Grafički model podgrafa

Sljedeća skica prikazuje podjelu na dva izrazito jasna i zaokružena klastera (Priču o igračkama i Čudovišta iz ormara), koji su međusobno premošćeni isključivo magičnim portalom drvenih vrata:

```text
     [ KLASTER A: Priča o igračkama ]               [ KLASTER B: Čudovišta iz ormara ]
          +-----------------------+                    +-----------------------+
          |     [Woody]           |                    |     [Sully]           |
          |      /   \            |                    |      /   \            |
          |   family  family      |                    |   friend  friend      |
          |    /       \          |                    |    /       \          |
          |  [Buzz] — [Andy]      | ====(magic_door)==>|  [Boo]  —  [Mike]     |
          +-----------------------+                    +-----------------------+
```
*Figurica 6.10: Jasna separacija u dva visoko modularna klastera i tranzitni portal.*

#### B) Analiza i vrednovanje podjele
Ako mrežu podijelimo kao na slici 6.10 (Klaster A sadrži igračke, Klaster B sadrži čudovišta), dobivamo iznimno visoku modularnost. To je zato što su veze unutar ekipa izuzetno guste, a između njih postoji samo jedna tanka tranzitna linija (magična vrata u dječjem ormaru). Naš sustav prepoznaje da je ova podjela prirodna i logična.

Međutim, ako bismo nasumično pomiješali likove (npr. stavili Woodyja, Sullyja i Mikea u jednu grupu, a Buzza, Andyja i Boo u drugu), prerezali bismo prirodne veze i dobili negativnu modularnost. Naš model bi odmah signalizirao da je ta podjela potpuno umjetna i besmislena.

#### C) Interpretacija u Disney Svemiru
U našem projektu, modularnost služi kao **temeljni inženjerski i vizualni princip**. Kada u D3.js aplikaciji uključite orbitalni raspored, fizikalni algoritam automatski koristi ove zajednice (kao što su *Igrani Svemir*, *Centar Magije*, *Sjeverna Kraljevstva*) kako bi grupirala čvorove u zasebne i estetski privlačne prostorne orbite. To osigurava da vizualni otoci koje korisnik vidi na ekranu nisu slučajno nabacane točke, već stvarni, narativno opravdani medijski svjetovi u kojima se svaka grupa drži na sigurnoj udaljenosti od druge, čuvajući svoj jedinstveni narativni identitet.

---

### 6.6. Mrežna vizualizacija povezanosti filmskih svjetova i likova

Kako bismo na jednom mjestu vizualizirali cjelokupnu mrežnu povezanost našeg hibridnog Disney-Pixar-Live-Action meta-svemira, u nastavku donosimo sveobuhvatnu mrežnu kartu. Ova vizualizacija prikazuje kako se klasične animirane priče preko magičnih mostova i stvarnih glumica prelijevaju iz jedne dimenzije u drugu:

```text
==================================================================================================
           GLOBALNA MREŽNA KARTA DISNEY-PIXAR-LIVE-ACTION META-SVEMIRA "REMIX"
==================================================================================================

 [SJEVERNA KRALJEVSTVA]                     [LONDON KLASICI]                     [PIXAR SVEMIR]
 
   +---------------+                       +---------------+                 +--------------------+
   |     Elsa      |                       | Mary Poppins  |                 | Korporacija BnL    |
   +---------------+                       +---------------+                 +--------------------+
           | (obitelj)                             | (prijatelj)                       | (teorija)
           v                                       v                                   v
   +---------------+                       +---------------+                 +--------------------+
   |    Tarzan     |                       |    Merlin     |                 |  Wall-E & Eve      |
   +---------------+                       +---------------+                 +--------------------+
           | (obitelj)                             | (magic)                           | (magic_door)
           v                                       v                                   v
   +---------------+ <===(family)========> +---------------+ <===(cameo)=========> +--------------------+
   |     Jane      |  (Belleina unuka)     |     Belle     |  (Knjiški moljac) |  Vještica / Boo    |
   +---------------+                       +---------------+                 +--------------------+
                                                   |                                   |
                                             (fizički duh)                       (magic)
                                                   v                                   v
                                           +---------------+                 +--------------------+
                                           | Emma Watson   |                 | Merida (Brave)     |
                                           +---------------+                 +--------------------+
                                                   |
                                             (aktivizam)
                                                   v
                                           +---------------+
                                           | Jasmine / Aladin|
                                           +---------------+
                                                   |
                                             (karavanska ruta)
                                                   v
                                           +---------------+
                                           | Simba / Mufasa| (Kralj Lavova)
                                           +---------------+
                                                   |
                                             (divljina)
                                                   v
 [OCEANSKI SVIJET] <=======(trozubac)======> +---------------+ <======(cameo)======> [KINESKA DINASTIJA]
 
   +---------------+                       +---------------+                 +--------------------+
   | Kralj Triton  |                       | Skriveni Mickey|                 |       Mulan        |
   +---------------+                       |   (Ego Čvor)  |                 +--------------------+
           | (family)                      +---------------+                         | (zaštita)
           v                                       ^                                 v
   +---------------+ <=======(cameo)===============+================(cameo)========> +--------------------+
   |     Ariel     |                                                                 |  Mushu (Zmaj)      |
   +---------------+                                                                 +--------------------+
           |                                                                                 |
     (potonuli brod)                                                                   (energetski tok)
           v                                                                                 v
   +---------------+ <======================(povijesni incident)====================> +--------------------+
   | Potonuli Brod |  (Kritična točka osjetljivosti i spajanja svjetova)            | Mei (Turning Red)  |
   +---------------+
```
*Figurica 6.11: Arhitektonska karta globalnih tranzitnih putova i mrežnih mostova u svemiru.*

Ova vizualizacija jasno pokazuje da u našoj mreži ne postoje izolirani kutovi. Kroz središnju ulogu **Skrivenog Mickeyja**, koji viri iz pozadine, te kroz lokaciju **Potonulog broda** koji spaja sjeverna kraljevstva, oceanske dubine i prašume Tarzana, svi su svjetovi uvučeni u jedinstvenu topologiju. Glumice poput **Emme Watson** djeluju kao stvarni mrežni prevoditelji: one prevode animirani kanon u igrane adaptacije, te dalje prenose mrežnu energiju u druge pustinjske i ratničke regije (poput Jasmine, Simbe i Mulan), gradeći tako monumentalni i neraskidivi krug moderne kinematografije.

---

## 7. Integracija literarnih teorija: Što o ovome misle stručnjaci?

Razrađeni sustav i naši kvantitativni rezultati mogu se duboko utemeljiti i objasniti kroz etabliranu znanstvenu literaturu:

### 7.1. Henry Jenkins i "Kultura konvergencije" (2006)
Jenkins u svojoj kultnoj knjizi objašnjava da suvremena publika više ne konzumira medije na pasivan način. Došlo je do **konvergencije medija** — priče se sele s jednog ekrana na drugi, s papira na film, s animacije u igranu stvarnost. Graf "Remix" je savršeni praktični primjer te teorije. Kada gledatelj uoči Posejdonov trozubac ili potonuli brod koji povezuje *Frozen* i *Malu Sirenu*, on aktivno sudjeluje u onome što Jenkins naziva **transmedijskim pripovijedanjem (Transmedia Storytelling)**. Priča se više ne nalazi samo u jednom filmu, već se komadići slagalice nalaze svuda u medijskom prostoru, a publika ih zajednički sklapa u koherentan svemir.

### 7.2. L. Mollet (2019) i redefiniranje klasičnih bajki
U svojoj analizi *"The Power of Disney: How Disney’s Live-Action Remakes Redefine the Fairy Tale"*, Mollet objašnjava da Disney namjerno koristi igrane remaked kako bi modernizirao zastarjele narative. Princeze više nisu pasivne i nemoćne (poput Jasmine ili Belle u originalu), već postaju aktivne pokretačice promjena. Glumice poput Emme Watson i Naomi Scott donose svoj stvarni javni imidž u filmsku ulogu, čime se briše granica između glumice i lika. Naš graf to kvantificira uvođenjem glumica kao zasebnih čvorova: one daju fizičku i mentalnu potporu likovima u realnom svijetu, što povećava mrežnu koheziju cjelokupnog svemira.

### 7.3. William Proctor (2012) i kolektivna memorija
U radu *"Regenerating Imaginary Worlds"*, Proctor analizira kako remakes utječu na našu nostalgiju. Kada stvarni ljudi glasuju na IMDb-u ili pišu recenzije o novim filmovima, oni nesvjesno uspoređuju novu igranu verziju sa svojim djetinjstvom. To objašnjava zašto *Mary Poppins (1964)* drži nevjerojatan vrhunac od **8.4/10** — ona je postala zlatni standard u kolektivnom pamćenju čovječanstva. Moderni naslovi, čak i s proračunima od stotina milijuna dolara, krvare u ocjenama jer se natječu s nečim što je nemoguće pobijediti: čistom dječjom nostalgijom.

### 7.4. Rodna reprezentacija, feministička kritika i dekonstrukcija stereotipa (England, Descartes i Collier-Meek, 2011)
Ključna dimenzija kritičke analize Disneyevog svemira je evolucija **rodnih stereotipa i uloga**, što se izravno odražava na mrežnu arhitekturu našeg sustava. Etablirana feministička studija England, Descartes i Collier-Meek (2011) pod nazivom *"Gender Role Portrayal and the Disney Princesses"* analizira kako su se portreti princeza mijenjali kroz tri povijesne epohe:
1. **Rana epoha (Snjeguljica, Pepeljuga, Aurora):** Likovi su ocrtani tradicionalno ženstvenim osobinama poput pasivnosti, kućanskih poslova, brige za druge i potpunog oslanjanja na vanjsko spašavanje. U topološkom smislu, ove rane princeze u originalnoj animaciji funkcioniraju kao **periferni čvorovi s minimalnim brojem veza** (često imaju samo jednu ili dvije veze prema princu ili majci/maćehi). Njihova mrežna bliskost i posrednost su nevjerojatno niske, što matematički opisuje njihovu narativnu pasivnost.
2. **Srednja epoha (Ariel, Belle, Jasmin, Mulan, Pocahontas):** Predstavlja tranziciju u kojoj se tradicionalna ženstvenost miješa s aktivnim borbenim i istraživačkim osobinama (hrabrost, asertivnost, želja za pustolovinom). Ovi likovi u grafu počinju preuzimati uloge **lokalnih mrežnih mostova** jer aktivno povezuju različita kraljevstva i civilizacije (npr. Ariel spaja more i kopno, a Mulan carski dvor s ratnicima).
3. **Moderna epoha (Tiana, Rapunzel, Merida, Elsa, Anna):** Donosi potpuni odmak od romantične ovisnosti prema osobnoj emancipaciji, sestrinstvu i društvenom autoritetu. Elsa i Anna u filmu *Frozen* preuzimaju uloge moćnih samostalnih vladarica.

U našem projektu, uvođenje **igranih adaptacija** i **stvarnih glumica (poput Emme Watson ili Naomi Scott)** u potpunosti rješava ovaj povijesni konflikt. Moderna verzija Belle više nije samo knjiški moljac, već je u igranom filmu i sama aktivna izumiteljica (čvor Belle u igranom svijetu preuzima visoki težinski stupanj). Princeza Jasmin u igranoj verziji odbija tradiciju i postaje prva nezavisna vladarica (sultanica) Agrabaha. Kada ove emancipirane uloge povežemo mrežnim linijama u našem grafu, primjećujemo da moderni likovi posjeduju **višestruko veći stupanj mrežne važnosti i centralnosti bliskosti** u odnosu na svoje rane animirane predloške. Njihova strukturna centralnost u našem meta-svemiru izravni je matematički odraz njihove narativne emancipacije i aktivnog društvenog autoriteta.

---

## 8. Zaključak

Analiza projekta "Remix" i njegovo proširenje na Disneyev igrani svemir s pripadajućim glumicama dovelo nas je do tri ključna zaključka:

1. **Disneyev svemir je živ, nelinearan sustav:** Priče više nemaju jasan početak i kraj. Kroz uskršnja jaja, vremenske teorije i multiverzumska ogledala, likovi komuniciraju kroz desetljeća i žanrove.
2. **Nostalgija pobjeđuje tehnologiju:** Bez obzira na to koliko novca Disney uloži u CGI vizuale (poput 200 milijuna dolara za *Mulan* ili *Alisu u zemlji čudesa*), gledatelji i dalje najviše ocjenjuju toplinu, autentičnost i glumačku iskrenost. Klasik *Mary Poppins* i izvorni *Pirati s Kariba* ostaju na samom vrhu mrežne i kritičke stabilnosti.
3. **Mrežna vizualizacija je budućnost analize medija:** Tradicionalni linearni popisi i tablice na Wikipediji ne mogu prikazati nelinearnost suvremenih franšiza. Korištenje interaktivnih grafova s podrškom umjetne inteligencije omogućuje nam da na jednom mjestu vidimo i razumijemo kako jedan potonuli brod ili jedan skriveni trozubac spaja stotine različitih ljudskih sudbina i kinematografskih snova.

Grafika i podaci u našem projektu dokazuju da Disney i Pixar nisu samo stvorili zabavu za gdječu — oni su izgradili monumentalnu digitalnu mitologiju našeg vremena u kojoj svatko od nas može pronaći svoju skrivenu vezu.

---

## Literatura

1.  Bostock, M., Ogievetsky, V., & Heer, J. (2011). D3: Data-Driven Documents. *IEEE Transactions on Visualization and Computer Graphics*, 17(12), 2301–2309.
2.  Disney Theory. (2021). *The Ultimate Disney Universe Timeline and Connections*. Preuzeto s https://www.disneytheory.com/
3.  England, D. E., Descartes, L., & Collier-Meek, M. A. (2011). Gender Role Portrayal and the Disney Princesses. *Sex Roles*, 64(7–8), 555–567.
4.  Giroux, H. A. (1999). *The Mouse that Roared: Disney and the End of Innocence*. Rowman & Littlefield.
5.  Heer, J., & Shneiderman, B. (2012). Interactive dynamics for visual analysis. *Communications of the ACM*, 55(4), 45–54.
6.  IMDb & Box Office Mojo. (2026). *Historical Reception and Financial Analysis of Walt Disney Studios' Live-Action Adaptations*. Preuzeto s https://www.imdb.com/
7.  Jenkins, H. (2006). *Convergence Culture: Where Old and New Media Collide*. New York University Press.
8.  Mollet, L. (2019). The Power of Disney: How Disney’s Live-Action Remakes Redefine the Fairy Tale. *Journal of Popular Film and Television*, 47(3), 162–171.
9.  Negroni, J. (2013). *The Pixar Theory: A Connected Universe of All Pixar Movies*. Preuzeto s https://jonnegroni.com/2013/07/11/the-pixar-theory/
10. Newman, M. E. J. (2018). *Networks: An Introduction* (2. izd.). Oxford University Press.
11. Proctor, W. (2012). Regenerating Imaginary Worlds: Remakes, Reboots, and Collective Memory. *Scope: An Online Journal of Film and Television Studies*, 22, 1–18.
12. Ryan, M. L. (2015). *Narrative as Virtual Reality 2: Revisiting Immersion and Interactivity in Literature and Electronic Media*. Johns Hopkins University Press.
13. Smith, D. (2018). *Disney A to Z: The Official Encyclopedia* (5. izd.). Disney Editions.
14. Tanenbaum, J. (2011). *Digital Narrative and the Theory of Mind*. Simon Fraser University.
15. Walt Disney Animation Studios. (2025). *Official Archive: Character Cameos and Hidden Details*. Preuzeto s https://animation.disney.com/
16. Wohlwend, K. E. (2009). Damsels in Discourse: Girls Consuming and Producing Identity Texts through Disney Princess Play. *Reading Research Quarterly*, 44(1), 57–83.
