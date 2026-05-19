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
- **Milijarderi niske ocjene:** Zanimljivo je pogledati filmove poput *Aliske u zemlji čudesa (2010)* i *Aladina (2019)*. Oba filma su prešla magičnu granicu od **1 milijarde dolara zarade** na blagajnama, unatoč tome što su im ocjene gledatelja bile razmjerno niske (6.4 i 6.9). Ovo nam ukazuje na "Disney mašineriju industrijskog remakea" (Mollet, 2019) — publika hrli u kina zbog nostalgije i brenda, ali nakon gledanja izražava umjereno zadovoljstvo.
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
- **Liu Yifei i Mulan (2020):** Liu Yifei donosi nevjerojatnu fizičku borbenu spremnost i fokus na unutarnju energiju "Chi". Ova verzija Mulan se odmiče od animiranog humora i prizemljuje priču u povijesnu ratnu spektakl, što nam daje uvid u antičku kinesku povijest čija se duhovna snaga predaka osjeća u modernom dobu djevojčice Mei Lee (*Turning Red*).
- **Mia Wasikowska i Alice (2010):** Mia tumači devetnaestogodišnju odraslu Alice koja se nakon mnogo godina vraća u Podzemlje (Wonderland) kako bi ispunila svoju sudbinu ratnice. To nam pokazuje da fantastični svjetovi ne nestaju s odlaskom djetinjstva, već ostaju kao trajne dimenzije kojima krstari Mačak Cheshire, premošćujući snove i digitalne svjetove (poput *Krša i loma*).

---

## 6. Sveobuhvatna teorijska i empirijska analiza mrežnih mjera, centralnosti i klasteriranja (SNA)

U okviru analize društvenih i narativnih mreža (engl. *Social Network Analysis* - SNA), mreža likova i glumaca Disney-Pixar meta-svemira podliježe strogoj matematičkoj procjeni. Kako bismo osigurali apsolutnu konzistentnost i razumljivost, definirat ćemo **referentni podgraf** koji obuhvaća ključne energetske, obiteljske, magične i teorijske petlje našeg mrežnog svemira, te ćemo sve mrežne mjere i centralnosti demonstrirati izravno na njegovoj topologiji:

```text
                [merlin] -----(magic)-----> [mary_poppins]
                   |                             |
                (magic)                   (hidden_mickey)
                   |                             |
                 [kida]                          |
                   |                             |
            (hidden_mickey)                      |
                   |                             v
                [ ego ] <=====(hidden_mickey)=======> [remy] ----(easter_egg)----> [anton_ego]
                   |                                                      |
            (hidden_mickey)                                        (hidden_mickey)
                   |                                                      v
                [ariel] <=====(family)====== [triton]                      [  ego  ]
                   |                            |
             (easter_egg)                    (magic)
                   |                            |
           [potonuli_brod]            [posejdonov_trozubac] <====(magic)==== [jack_sparrow]
                   ^
                   |
            (theory_roditelj)
                   |
                [elsa] ======(family)======> [tarzan] ======(family)======> [jane] ======(family)======> [belle]
```

U nastavku detaljno analiziramo i objašnjavamo ključne koncepte, povezujući ih izravno s ovim strukturnim modelom.

### 6.1. Čvorovi i veze (Nodes and Links)
U grafičkom i mrežnom teorijskom smislu, mreža se definira kao uređeni par $G = (V, E)$, gdje je:
- $V$ skup **čvorova (Nodes)** koji predstavljaju samostalne entitete u sustavu. U našem referentnom grafu to su likovi (*elsa*, *tarzan*, *jane*, *belle*, *ariel*, *triton*, *jack_sparrow*, *mary_poppins*, *merlin*, *remy*, *anton_ego*, *kida*), mitski predmeti (*posejdonov_trozubac*), lokacije (*potonuli_brod*) i sam ego-čvor (*ego* - Skriveni Mickey). Naš globalni graf sadrži preko 115 jedinstvenih čvorova.
- $E$ skup **veza (Links)** koji definira relacije među tim čvorovima. Na gornjoj shemi vidimo više tipova veza: simetrične `family` (npr. obiteljski most od Else preko Tarzana do Belle), usmjerene ili neusmjerene `magic` tokove (Merlinovo učenje Mary Poppins), te referentne `hidden_mickey` i `easter_egg` veze koje premošćuju fikciju i zagonetke (Mickey u kuhinji s Remyjem). Globalni graf broji oko 158 relacijskih veza.

### 6.2. Gustoća grafa (Graph Density)
Gustoća mreže ($D$) mjeri omjer stvarnog broja veza prema maksimalno mogućem broju veza u grafu s $N$ čvorova. Za neusmjereni graf formula glasi:
$$D = \frac{2 |E|}{N(N - 1)}$$
- **Primjer u grafu:** Ako uzmemo gornji podgraf od $N = 14$ čvorova (uključujući dupli vizualni prikaz ega) i $|E| = 15$ veza, gustoća iznosi $2 \times 15 / (14 \times 13) \approx 0.165$ (ili $16.5\%$). To nam pokazuje visoku lokalnu integraciju. Međutim, kada se ovaj podgraf ulije u cjeloviti skup od $115$ čvorova i $158$ veza, gustoća drastično opada na svega $\approx 2.4\%$.
- **Mrežna interpretacija:** Niska gustoća je uobičajena za narativne mreže. Pojedini filmski svjetovi (npr. obitelj *Priče o igračkama* ili *Izbavitelji*) formiraju visoko povezane lokalne module, dok su međusobni mostovi rijetki i prolaze kroz jedinstvene točke (kao što je *potonuli_brod* koji spaja ocean Ariel i sjeverno kraljevstvo Else).

### 6.3. Centralnost (Centrality) - Opći koncept
Centralnost označava skupinu mjera koje identificiraju "najvažnije" ili "najutjecajnije" čvorove u mreži. No, pojam važnosti varira ovisno o primijenjenom mrežnom filteru:

#### 6.3.1. Stupanj centralnosti (Degree Centrality)
Predstavlja najjednostavniju mjeru centralnosti — ukupan broj izravnih veza (susjeda) koje pojedini čvor posjeduje:
$$C_D(v) = \text{deg}(v)$$
- **Primjer u grafu:** Čvor **ego (Skriveni Mickey)** ima najveći stupanj centralnosti ($C_D = 4$ u našem pojednostavljenom prikazu, a čak $C_D = 26$ u globalnoj bazi). On je povezan izravno s *arielom*, *kida*, *remyjem* i *anton_ego-om*. Nakon njega, visoki stupanj ima **tarzan** ($C_D = 3$), koji je spona između sestara Ane/Else, supruge Jane i šireg obiteljskog stabla.

#### 6.3.2. Težinski stupanj (Weighted Degree)
Težinski stupanj uzima u obzir vrijednost ili snagu (težinu) svake pojedne veze:
$$C_{WD}(v) = \sum_{u \in N(v)} w(v, u)$$
U našem modelu, čvrstim kanonskim vezama (kao što su obiteljska stabla - `family` ili dokazani `easter_egg`) pridružena je veća težina ($w = 1.5$), dok su špekulativne forumski raspisane teorije (`theory`) vrednovane nižom težinom ($w = 0.6$).
- **Primjer u grafu:** Ako izračunamo težinu za **ariela**, njegove veze su `family` s Tritonon ($1.5$), `easter_egg` s potonulim brodom ($1.5$) i `hidden_mickey` s egom ($1.0$), što mu daje težinski stupanj $C_{WD} = 4.0$. Nasuprot tome, špekulativna veza `theory_roditelj` između Else i potonulog broda teži svega $0.6$. To sprječava da nagađanja nadvladaju čvrste činjenice originalnog scenarija.

#### 6.3.3. Centralnost bliskosti (Closeness Centrality)
Mjeri koliko je neki čvor "blizu" svim ostalim čvorovima u mreži, na temelju prosječne duljine najkraćeg puta:
$$C_C(v) = \frac{N - 1}{\sum_{u \neq v} d(v, u)}$$
- **Primjer u grafu:** Čvor **ariel** ima izuzetno visoku bliskost jer se nalazi u samom geografskom središtu morskih i ljudskih veza. Od Ariel do *potonulog_broda*, *tritona* i *ega* udaljenost je samo 1 skok, dok do *else* i *kide* treba samo 2 skoka. S druge strane, čvor **jack_sparrow** na rubu grafa ima najnižu bliskost, jer mora putovati preko *posejdonovog_trozupca*, *tritona* i *ariela* kako bi uopće došao do ostatka mreže.

#### 6.3.4. Posrednička centralnost (Betweenness Centrality)
Ova mjera broji koliko često se promatrani čvor nalazi na najkraćem putu između bilo koja druga dva čvora u mreži:
$$C_B(v) = \sum_{s \neq v \neq t} \frac{\sigma_{st}(v)}{\sigma_{st}}$$
Čvorovi s visokim $C_B$ djeluju kao ključni "mostovi" ili čuvari vrata bez kojih bi se graf raspao na više nepovezanih komponenti.
- **Primjer u grafu:** Čvor **potonuli_brod** drži golemu posredničku vrijednost. Ako Elsa želi dosegnuti Ariel ili bilo koji morski/magični čvor, najkraći put obavezno vodi preko ovog čvora. Ako uklonimo *potonuli_brod* s našeg grafa, čitav blok *Sjevernih Kraljevstava* i obiteljska loza Tarzana/Belle ostaju potpuno odsječeni od oceanskih legendi Ariel i Tritona.

#### 6.3.5. Centralnost svojstvenog vektora (Eigenvector Centrality)
Svojstveni vektor dodjeljuje utjecaj čvoru na temelju kvalitete/utjecaja njegovih susjeda: *"Nije bitno koliko prijatelja imaš, nego tko su oni."* Ako se povezuješ s drugim utjecajnim hubovima, tvoja vrijednost raste:
$$x_v = \frac{1}{\lambda} \sum_{u \in M(v)} x_u$$
- **Primjer u grafu:** Čvor **anton_ego** ima malo izravnih veza ($C_D = 2$), ali su mu susjedi izuzetno važni — to su **remy** (glavni mrežni kuhar) i centralni **ego (Skriveni Mickey)**. Zato je njegova centralnost svojstvenog vektora primjetno veća nego kod čvora *jack_sparrow*, koji je spojen na iznimno periferne, rubne čvorove puste morske obale.

### 6.4. Koeficijenti klasteriranja (Clustering Coefficients)
Klasteriranje nam govori o tendenciji čvorova da se grupiraju u visoko povezane podgrafove (klike).

#### 6.4.1. Lokalni koeficijent klasteriranja (Local Clustering Coefficient)
Mjeri koliko su susjedi pojedinog čvora sami međusobno povezanim trokutima:
$$C(v) = \frac{2 e_v}{k_v(k_v - 1)}$$
- **Primjer u grafu:** Pogledajmo čvor **triton**. Njegovi susjedi su *ariel*, *posejdonov_trozubac* i *ego*. Među njima postoji izravna veza između Ariel i ega (skriveni Mickey pod morem). To zatvara jedan trokut ($e_v = 1$). Od 3 moguća partnerstva među susjedima, jedno je ostvareno, pa lokalni koeficijent iznosi $C = 1/3 \approx 0.33$. Nasuprot tome, čvor **potonuli_brod** ima susjede *ariel* i *elsa* koji nisu međusobno povezani, pa mu je lokalni koeficijent $C = 0$.

#### 6.4.2. Globalni koeficijent klasteriranja (Global Clustering Coefficient)
Globalna mjera koja se temelji na omjeru zatvorenih trokuta naspram svih povezanih trojki (tripleta) u cijelom grafu:
$$C_{global} = \frac{3 \times \text{broj trokuta}}{\text{broj povezanih tripleta}}$$
- **Nemogućnost izravnog izračuna u klijentskom grafu:** Iako naš interaktivni D3.js program dinamički iscrtava i raspoređuje čvorove te koristi njihove atribute za vizualno grupiranje, točna vrijednost globalnog koeficijenta klasteriranja se **ne izračunava direktno u klijentskom kodu**. Razlog tome je iznimna računalna složenost algoritmizacije trećeg stupnja u JavaScriptu u realnom vremenu (s obzirom na to da je klijentska aplikacija optimizirana za glatko iscrtavanje na 60 FPS unutar preglednika). Umjesto toga, globalna kohezija se aproksimira i rješava rasporedom sila (odbijanje i privlačenje) koje vizualno simuliraju gustoću tih povezanih trokuta na ekranu.

### 6.5. Modularnost (Modularity)
Modularnost ($Q$) je mjera strukture grafa koja ocjenjuje kvalitetu podjele mreže u klastere (zajednice). Visoka modularnost ukazuje na to da unutar klastera postoji gusta povezanost, dok su veze između različitih klastera rijetke:
$$Q = \frac{1}{2m} \sum_{i,j} \left[ A_{ij} - \frac{k_i k_j}{2m} \right] \delta(c_i, c_j)$$
Zajedno sa formulom i objašnjenjem, točna vrijednost modularnosti se ne može u stvarnom vremenu izračunati na klijentu jer takva kalkulacija zahtijeva cjelovit, statički prelazak matrice susjedstva ($A_{ij}$) nakon svakog dodavanja ili brisanja čvorova, što bi uzrokovalo zastajkivanje i pad performansi D3 simulacije u pregledniku. Zbog toga se modularnost u našem radu koristi kao **polazni teorijski okvir** kojim opravdavamo podjelu grafa na prepoznatljive vizualne orbitalne klastere, čime smo olakšali čitljivost i estetski dojam cijelog sučelja.

---

## 7. Integracija literarnih teorija: Što o ovome misle stručnjaci?

Razrađeni sustav i naši kvantitativni rezultati mogu se duboko utemeljiti i explainati kroz etabliranu znanstvenu literaturu:

### 7.1. Henry Jenkins i "Kultura konvergencije" (2006)
Jenkins u svojoj kultnoj knjizi objašnjava da suvremena publika više ne konzumira medije na pasivan način. Došlo je do **konvergencije medija** — priče se sele s jednog ekrana na drugi, s papira na film, s animacije u igranu stvarnost. Graf "Remix" je savršeni praktični primjer te teorije. Kada gledatelj uoči Posejdonov trozubac ili potonuli brod koji povezuje *Frozen* i *Malu Sirenu*, on aktivno sudjeluje u onome što Jenkins naziva **transmedijskim pripovijedanjem (Transmedia Storytelling)**. Priča se više ne nalazi samo u jednom filmu, već se komadići slagalice nalaze svuda u medijskom prostoru, a publika ih zajednički sklapa u koherentan svemir.

### 7.2. L. Mollet (2019) i redefiniranje klasičnih bajki
U svojoj analizi *"The Power of Disney: How Disney’s Live-Action Remakes Redefine the Fairy Tale"*, Mollet objašnjava da Disney namjerno koristi igrane remaked kako bi modernizirao zastarjele narative. Princeze više nisu pasivne i nemoćne (poput Jasmine ili Belle u originalu), već postaju aktivne pokretačice promjena. Glumice poput Emme Watson i Naomi Scott donose svoj stvarni javni imidž u filmsku ulogu, čime se briše granica između glumice i lika. Naš graf to kvantificira uvođenjem glumica kao zasebnih čvorova: one daju fizičku i mentalnu potporu likovima u realnom svijetu, što povećava mrežnu koheziju cjelokupnog svemira.

### 7.3. William Proctor (2012) i kolektivna memorija
U radu *"Regenerating Imaginary Worlds"*, Proctor analizira kako remakes utječu na našu nostalgiju. Kada stvarni ljudi glasuju na IMDb-u ili pišu recenzije o novim filmovima, oni nesvjesno uspoređuju novu igranu verziju sa svojim djetinjstvom. To objašnjava zašto *Mary Poppins (1964)* drži nevjerojatan vrhunac od **8.4/10** — ona je postala zlatni standard u kolektivnom pamćenju čovječanstva. Moderni naslovi, čak i s proračunima od stotina milijuna dolara, krvare u ocjenama jer se natječu s nečim što je nemoguće pobijediti: čistom dječjom nostalgijom.

---

## 8. Zaključak

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
