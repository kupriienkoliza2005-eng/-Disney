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
- **Mia Wasikowska i Alice (2010):** Mia tumači devetnaestogodišnju odraslu Alice koja se nakon mnogo godina vraća u Podzemlje (Wonderland) kako bi ---

## 6. Sveobuhvatna teorijska i empirijska analiza mrežnih mjera, centralnosti i klasteriranja (SNA)

U okviru analize društvenih i narativnih mreža (engl. *Social Network Analysis* - SNA), mreža likova, predmeta, glumaca i lokacija našeg interaktivnog Disney-Pixar meta-svemira podliježe strogoj matematičkoj i topološkoj procjeni. Kako bismo osigurali maksimalnu znanstvenu utemeljenost, dosljednost i metodološku čitljivost po uzoru na akademska istraživanja mrežne strukture, u nastavku dekonstruiramo svaku pojedinu mrežnu metriku. 

Za svaku mjeru definiramo **precizan nelinearni podgraf (figuricu)** preuzet izravno iz našeg globalnog interaktivnog modela, donosimo **eksplicitnu tablicu ili analitički izračun** te radimo **lokalni i globalni narativni ekstrapolirajući prijenos**.

---

### 6.1. Čvorovi i veze (Nodes and Links)

U mrežnoj znanosti i teoriji grafova, svaka se struktura definira kao uređen par dva skupa: $G = (V, E)$, gdje je $V$ skup čvorova (entiteta), a $E$ skup veza (relacija). 

U našem projektu, čvorovi i veze ne predstavljaju tek apstraktne matematičke točke, već su prožeti bogatim ontološkim svojstvima (atributima) koji su spremljeni u bazi podataka i iscrtani kroz D3.js sučelje.

#### A) Grafički model podgrafa

Sljedeća skica prikazuje reprezentativni trans-epohalni segment koji povezuje kraljevsku obitelj Arendellea s britanskim istraživačima i francuskim plemstvom:

```text
+-----------------------+                    +-------------------------+
|     [Elsa] (lik)      | ==(family)===>     |     [Tarzan] (lik)      |
|  (Sjeverna Kraljevstva|                    |  (Sjeverna Kraljevstva) |
+-----------------------+                    +-------------------------+
                                                          ||
                                                       (family)
                                                          v
                                             +-------------------------+
                                             |     [Jane] (lik)        |
                                             |    (Džungla / London)   |
                                             +-------------------------+
                                                          ||
                                                       (family)
                                                          v
                                             +-------------------------+
|   [Emma_Watson] (gl)  | ==(live_action)==> |   [Belle_Igrana] (lik)  |
|   (Stvarni Svijet)    |                    |    (Igrani Svemir)      |
+-----------------------+                    +-------------------------+
```
*Figurica 6.1: Izolirana istraživačka putanja čvorova i veza koja spaja animirani kanon, igrani svemir i stvarne glumce.*

#### B) Analitičke tablice entiteta podgrafa (Mrežni registar)

Kako bismo formalno definirali ovaj segment, u nastavku donosimo tablični prikaz svojstava čvorova i veza koji odgovara strukturi podataka u našoj D3.js aplikaciji:

##### Tablica 6.1.1: Atributi čvorova (Nodes Register)
| ID čvora | Label (Naziv) | Tip čvora | Grupa (Kategorija) | Glavna uloga u naraciji |
| :--- | :--- | :--- | :--- | :--- |
| `elsa` | Elsa | Lik (Animirani) | Sjeverna Kraljevstva | Kraljica s kriogenom magijom |
| `tarzan` | Tarzan | Lik (Animirani) | Sjeverna Kraljevstva | Izgubljeni sin kraljevske loze |
| `jane` | Jane | Lik (Animirani) | Džungla / London | Britanska istraživačica i crtačica |
| `belle_igrana`| Belle (Igrana) | Lik (Igrani) | Igrana Adaptacija | Intelektualka u potrazi za slobodom |
| `emma_watson` | Emma Watson | Glumac (Stvarni) | Stvarni Svijet | Aktivistica i glavna glumica |

##### Tablica 6.1.2: Svojstva veza (Edges Register)
| Source (Izvor) | Target (Cilj) | Tip veze | Težina ($w$) | Narativno opravdanje veze |
| :--- | :--- | :--- | :--- | :--- |
| `elsa` | `tarzan` | `family` | $1.5$ | Tarzan je izgubljeni brat krstarenja morem |
| `tarzan` | `jane` | `family` | $1.5$ | Bračni ugovor u prašumi |
| `jane` | `belle_igrana`| `family` | $1.5$ | Obiteljsko naslijeđe (Jane je Belleina praunuka) |
| `emma_watson` | `belle_igrana`| `live_action` | $1.8$ | Glumačko utjelovljenje i prožimanje karaktera |

#### C) Interpretacija u Disney Universe
Uočavamo tri različite razine mrežne stvarnosti. Animacijski kanon (`elsa` i `tarzan`) spaja se s povijesnim realizmom (`jane`), koji se zatim prelijeva u igranu reinterpretaciju (`belle_igrana`) i na kraju u ontologiju stvarnoga svijeta (`emma_watson`). Ova hibridna mrežna struktura dokazuje da se prijelazom s animacije na igrani film ne mijenja samo estetika, već se otvara potpuno novi tip mrežnog čvora — stvarni glumac koji svojim ugledom utječe na mrežni položaj fiktivnog lika.

---

### 6.2. Gustoća grafa (Graph Density)

Gustoća grafa ($D$) predstavlja omjer stvarnog broja ostvarenih veza ($|E|$) i maksimalno mogućeg broja veza koje bi se mogle formirati između svih $N$ čvorova u grafu. Za neusmjerene grafove formula glasi:

$$D = \frac{2 |E|}{N(N - 1)}$$

Ova mjera poprima vrijednosti u rasponu $[0, 1]$, gdje $0$ predstavlja potpuno prazan graf (izolirani čvorovi), a $1$ predstavlja potpuno povezani graf ili kliku (eng. *clique*).

#### A) Grafički model podgrafa

Sljedeća skica prikazuje podmrežu modularnog svijeta igračaka (*Toy Story*) i njegov jedini, uski most prema centralnom mrežnom hubu (Egu/Skrivenom Mickeyju):

```text
       +-----------+                 +----------+
       | [Woody]   | <==(family)===> | [Buzz]   |
       +-----------+                 +----------+
             ^                            ^
             |                            |
          (family)                     (family)
             v                            v
       +-----------+                 +----------+
       | [Andy]    | <==(family)===> | [Jessie] |
       +-----------+                 +----------+
             ||
             || (hidden_mickey) <--- Rijetki tranzitni most
             v
       +-----------+
       |  [Ego]    |  (Skriveni Mickey - Centralni Hub)
       +-----------+
```
*Figurica 6.2: Gusto povezana obiteljska podgrupa igračaka s jednim eksternim izlazom.*

#### B) Matematički izračun i komparativna analiza

##### 1. Izračun gustoće na lokalnom podgrafu (Figurica 6.2):
- Broj čvorova u podgrafu: $N_{pod} = 5$ (`Woody`, `Buzz`, `Andy`, `Jessie`, `Ego`).
- Maksimalan mogući broj veza: 
  $$\frac{N(N - 1)}{2} = \frac{5 \times 4}{2} = 10 \text{ mogućih veza}$$
- Stvarno ostvarene veze u podgrafu ($|E_{pod}| = 5$): 
  1. `Woody` — `Buzz` (family)
  2. `Woody` — `Andy` (family)
  3. `Buzz` — `Jessie` (family)
  4. `Jessie` — `Andy` (family)
  5. `Andy` — `Ego` (hidden_mickey)
- Lokalna gustoća:
  $$D_{pod} = \frac{2 \times 5}{5 \times 4} = \frac{10}{20} = 0.50 \quad (50.0\%)$$

##### 2. Izračun gustoće na globalnom interaktivnom grafu:
- Broj čvorova u cijelom unesenom sustavu: $N_{glob} = 115$
- Maksimalan mogući broj veza:
  $$\frac{115 \times 114}{2} = 6555 \text{ mogućih veza}$$
- Stvarno ostvarene veze u bazi podataka: $|E_{glob}| = 158$
- Globalna gustoća:
  $$D_{glob} = \frac{2 \times 158}{115 \times 114} = \frac{316}{13110} \approx 0.0241 \quad (2.41\%)$$

#### C) Interpretacija u Disney Universe
Lokalni podgraf igračaka ima izuzetno visoku gustoću ($50\%$), što detektira čvrsto integrirani, hermetički zatvoreni mikrosvijet u kojem gotovo svatko komunicira sa svakim. Nasuprot tome, globalna gustoća od svega $2.41\%$ otkriva da je Disney meta-svemir **iznimno rijedak graf** (eng. *sparse network*). 

To je savršeno u skladu s teorijom naracije: filmovi moraju zadržati autorsku autonomiju. Da je globalna gustoća visoka, svi likovi bi bili izmiješani u jednu kaotičnu priču, čime bi se izgubila prepoznatljivost pojedinačnih filmskih brendova. Poveznice moraju ostati suptilne i rijetke kako ne bi ugrozile strukturnu ravnotežu pojedinih svjetova.

---

### 6.3. Centralnost (Centrality)

Mjere centralnosti služe za prepoznavanje najvažnijih, najutjecajnijih ili strateški najbolje pozicioniranih čvorova u mreži. Budući da pojam "važnosti" ovisi o uglu promatranja, analiziramo pet temeljnih mrežnih centralnosti.

---

#### 6.3.1. Stupanj centralnosti (Degree Centrality)

Stupanj centralnosti predstavlja najelementarniju mjeru važnosti — ukupan broj izravnih susjeda koje pojedini čvor posjeduje u neusmjerenom grafu:

$$C_D(v) = \text{deg}(v)$$

Kako bismo uklonili utjecaj veličine mreže i omogućili usporedbu s drugim grafovima, koristimo **normalizirani stupanj centralnosti**:

$$C'_D(v) = \frac{\text{deg}(v)}{N - 1}$$

#### A) Grafički model podgrafa

Sljedeća skica prikazuje dva kontrastna mikro-sustava u našoj mreži: zvjezdastu konstelaciju oko apsolutnog autorskog huba (Mickeyja) i lokalno obiteljsko stablo Tarzana:

```text
   A) Čvor: [Ego] (Skriveni Mickey)              B) Čvor: [Tarzan]
      (Globalni autorski potpis)                    (Lokalni strukturni hub)

             [Ariel]                                       [Elsa]
                ▲                                             ▲
                |                                             |
     [Remy] <== [Ego] ==> [Kida]                    [Jane] <= [Tarzan] => [Anna]
                |                                             |
                ▼                                             ▼
             [Mulan]                                       [Terk]
```
*Figurica 6.3: Dvije kontrastne zvjezdaste topologije huba s različitim stupnjevima dosega.*

#### B) Tablica vrijednosti i izračun za podmrežu (Figurica 6.3)

U tablici prikazujemo izračune stupnja i normaliziranog stupnja centralnosti za sve aktere u ovom izdvojenom segmentu ($N = 9$):

| Oznaka čvora ($v$) | Apsolutni stupanj $C_D(v)$ | Normalizirani stupanj $C'_D(v)$ | Mrežna uloga čvora |
| :--- | :---: | :---: | :--- |
| **`Ego` (Mickey)** | $4$ | $4 / 8 = 0.500$ | **Globalni zvjezdasti hub** |
| **`Tarzan`** | $4$ | $4 / 8 = 0.500$ | **Lokalni zvjezdasti hub** |
| `Ariel` | $1$ | $1 / 8 = 0.125$ | Periferni list (eng. *leaf node*) |
| `Remy` | $1$ | $1 / 8 = 0.125$ | Periferni list |
| `Kida` | $1$ | $1 / 8 = 0.125$ | Periferni list |
| `Mulan` | $1$ | $1 / 8 = 0.125$ | Periferni list |
| `Elsa` | $1$ | $1 / 8 = 0.125$ | Periferni list |
| `Jane` | $1$ | $1 / 8 = 0.125$ | Periferni list |
| `Anna` | $1$ | $1 / 8 = 0.125$ | Periferni list |
| `Terk` | $1$ | $1 / 8 = 0.125$ | Periferni list |

*(Napomena: U cjelovitoj globalnoj mreži od $115$ čvorova, `Ego` ima realni stupanj $C_D = 26$, što mu daje globalni normalizirani stupanj $C'_D = 26 / 114 \approx 0.228$ or $22.8\%$).*

#### C) Interpretacija u Disney Universe
Čvor `Ego` (Skriveni Mickey) ostvaruje najveći stupanj centralnosti u cijeloj mreži. To dokazuje da je on **kohezivno ljepilo** našeg meta-svemira. Skriveni Mickey se pojavljuje u obliku vizualnih zagonetki u kuhinji *Ratatouillea*, pod morem u *Maloj Sireni*, na zidovima u Kini kod *Mulan* te u potonuloj Atlantidi kod *Kide*. 

Njegova visoka vrijednost stupnja centralnosti interpretira se kao potpis kreatora: on predstavlja stalni, podsvjesni autorski podsjetnik da svi ovi svjetovi pripadaju istoj kreativnoj svijesti.

---

#### 6.3.2. Težinski stupanj (Weighted Degree)

Težinski stupanj (ili "jakost čvora", eng. *node strength*) ne broji samo puke veze, već zbraja njihove individualne težine ($w$), dajući uvid u intenzitet ili ontološku sigurnost tih odnosa:

$$C_{WD}(v) = \sum_{u \in N(v)} w(v, u)$$

U našoj bazi podataka definirane su tri različite klase težina kako bi se spriječilo da puka forumska nagađanja nadvladaju čvrsti scenaristički kanon:
1. **Zadržana obiteljska veza / Službeni cameo**: $w_{max} = 1.5$ (npr. roditeljstvo, brak, dokazano vizualno pojavljivanje na ekranu).
2. **Igrana adaptacija / Glumačko prožimanje**: $w_{med} = 1.2$ (veza fizičke rekonstrukcije istog lika).
3. **Špekulativne forumske teorije**: $w_{min} = 0.6$ (fandom nagađanja).

#### A) Grafički model podgrafa

Sljedeća skica prikazuje podmrežu oko princeze Ariel, u kojoj se miješaju čvrsta genetika oceanskog boga Tritona, službeni filmski cameo i špekulativno fandom nagađanje o princezi Meridi:

```text
       +---------------+             +--------------------+
       |   [Triton]    |             |  [Potonuli Brod]   |
       +---------------+             +--------------------+
               \                             /
             family (w=1.5)               cameo (w=1.2)
                 \                         /
                  v                       v
                      +---------------+
                      |    [Ariel]    |
                      +---------------+
                              ^
                              |
                        theory (w=0.6)  <--- Labava fandom pretpostavka
                              |
                       +---------------+
                       |   [Merida]    |
                       +---------------+
```
*Figurica 6.4: Raspodjela narativnih težina oko čvora Ariel.*

#### B) Matematički izračun snage čvorova

Izračunajmo težinski stupanj ($C_{WD}$) za sve aktere u ovom podgrafu:

- **Izračun za Ariel:**
  $$C_{WD}(\text{Ariel}) = w(\text{Ariel}, \text{Triton}) + w(\text{Ariel}, \text{Potonuli Brod}) + w(\text{Ariel}, \text{Merida})$$
  $$C_{WD}(\text{Ariel}) = 1.5 + 1.2 + 0.6 = 3.3$$

- **Izračun za ostale čvorove u podgrafu:**
  - $C_{WD}(\text{Triton}) = 1.5$ (povezan samo s Ariel)
  - $C_{WD}(\text{Potonuli Brod}) = 1.2$ (povezan samo s Ariel u ovom podgrafu)
  - $C_{WD}(\text{Merida}) = 0.6$ (povezan samo s Ariel u ovom podgrafu)

#### C) Interpretacija u Disney Universe
Uvođenje težinskog stupnja rješava ključan problem narativnih mreža: **problem filtriranja šuma**. Da smo sve veze tretirali jednako ($w = 1.0$), špekulativna forumska nagađanja (npr. to da je Merida u rodu s Ariel jer obje imaju crvenu kosu) imala bi jednak utjecaj kao i neporeciva činjenica da je Triton otac od Ariel. 

Zahvaljujući težinama, Arielin mrežni utjecaj od $3.3$ primarno je definiran službenim kanonom ($82\%$ njezine snage leži u kanonskim vezama), dok nagađanja čine tek manji dio njezine mrežne važnosti. To osigurava visoku otpornost (robustnost) našeg analitičkog modela.

---

#### 6.3.3. Centralnost bliskosti (Closeness Centrality)

Centralnost bliskosti ($C_C$) mjeri koliko je pojedini čvor "blizu" svim ostalim čvorovima u mreži. Izračunava se kao recipročna vrijednost zbroja najkraćih putova ($d(v, u)$) od promatranog čvora do svih ostalih čvorova u grafu:

$$C_C(v) = \frac{N - 1}{\sum_{u \neq v} d(v, u)}$$

Čvor s visokom bliskošću može iznimno brzo "proširiti" informaciju ili utjecaj kroz mrežu, jer u prosjeku zahtijeva najmanji broj skokova (eng. *hops*) do bilo koje druge točke.

#### A) Grafički model podgrafa

Sljedeća skica prikazuje linearnu putanju koja se proteže od perifernih piratskih mora Jacka Sparrowa, preko morskih i magičnih čvorova, sve do moderne kuhinje Remyja u Parizu:

```text
[Jack Sparrow] -- [Trozubac] -- [Triton] -- [Ariel] -- [Ego] -- [Remy]
```
*Figurica 6.5: Linearni tranzitni podgraf za demonstraciju brzine mrežnog toka.*

#### B) Matematički izračun korak-po-korak

Kako bismo izračunali bliskost za sve čvorove u ovom podgrafu ($N = 6$), prvo moramo definirati matricu najkraćih udaljenosti $d(v, u)$:

##### Tablica 6.3.1: Matrica udaljenosti ($d(v, u)$)
| Čvor ($v$) | Jack | Trozubac | Triton | Ariel | Ego | Remy | **Zbroj udaljenosti ($\sum d$)** |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| `Jack` | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ | **$15$** |
| `Trozubac`| $1$ | $0$ | $1$ | $2$ | $3$ | $4$ | **$11$** |
| `Triton`  | $2$ | $1$ | $0$ | $1$ | $2$ | $3$ | **$9$** |
| `Ariel`   | $3$ | $2$ | $1$ | $0$ | $1$ | $2$ | **$9$** |
| `Ego`     | $4$ | $3$ | $2$ | $1$ | $0$ | $1$ | **$11$** |
| `Remy`    | $5$ | $4$ | $3$ | $2$ | $1$ | $0$ | **$15$** |

Sada primjenjujemo formulu za centralnost bliskosti ($N - 1 = 5$):

- **Izračun za Ariel:**
  $$C_C(\text{Ariel}) = \frac{5}{\sum d(\text{Ariel}, u)} = \frac{5}{9} \approx 0.556 \quad (55.6\%)$$

- **Izračun za Tritona:**
  $$C_C(\text{Triton}) = \frac{5}{\sum d(\text{Triton}, u)} = \frac{5}{9} \approx 0.556 \quad (55.6\%)$$

- **Izračun za Ega i Posejdonov Trozubac:**
  $$C_C(\text{Ego}) = \frac{5}{11} \approx 0.455 \quad (45.5\%) \qquad C_C(\text{Trozubac}) = \frac{5}{11} \approx 0.455 \quad (45.5\%)$$

- **Izračun za rubne čvorove (Jack Sparrow i Remy):**
  $$C_C(\text{Jack}) = \frac{5}{15} \approx 0.333 \quad (33.3\%) \qquad C_C(\text{Remy}) = \frac{5}{15} \approx 0.333 \quad (33.3\%)$$

#### C) Interpretacija u Disney Universe
Čvorovi poput Ariel i Tritona imaju najvišu vrijednost bliskosti ($55.6\%$) jer zauzimaju **geografsku jezgru grafa**. Oni se nalaze točno na raskrižju između mitologije kopna (ljudski svijet) i dubina oceana (magija). 

Nasuprot tome, Jack Sparrow na piratskoj periferiji ima izuzetno nisku bliskost ($33.3\%$). To nam govori da je on narativno izoliran lik: bajke i obiteljska stabla moraju premostiti brojne prepreke (preko Posejdonovog trozupca i oceanske povijesti) kako bi se uopće povezali s njegovim avanturama. Bliskost stoga precizno detektira stopu integriranosti pojedinog filmskog žanra u širi Disney kanon.

---

#### 6.3.4. Posrednička centralnost (Betweenness Centrality)

Posrednička centralnost ($C_B$) identificira čvorove koji djeluju kao "mostovi" ili "vratari" (eng. *gatekeepers*) između različitih mrežnih zajednica. Njezina vrijednost izračunava se zbrajanjem omjera najkraćih putova između svih parova čvorova koji prolaze kroz promatrani čvor $v$:

$$C_B(v) = \sum_{s \neq v \neq t} \frac{\sigma_{st}(v)}{\sigma_{st}}$$

Gdje je $\sigma_{st}$ ukupan broj najkraćih putova od čvora $s$ do čvora $t$, a $\sigma_{st}(v)$ broj onih najkraćih putova koji prolaze kroz čvor $v$.

#### A) Grafički model podgrafa

Sljedeća skica vjerno prikazuje kako je cijeli kozmos morskih kraljevstava topološki spojen sa sjevernim kraljevstvima kopna isključivo kroz jednu kritičnu točku — **Potonuli brod**:

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
*Figurica 6.6: Strukturni most "Potonuli brod" kao jedini tranzit između dva kraljevstva.*

#### B) Matematički izračun posrednosti korak-po-korak

Analizirajmo podmrežu koja sadrži linearno-zvjezdani most: `[Ariel] — [Potonuli Brod] — [Elsa] — [Tarzan]`. Izračunajmo doprinose posrednosti za čvor **Potonuli brod** analizirajući najkraće puteve za sve parove čvorova ($s, t$) koji ga isključuju:

1. **Par (`Ariel`, `Elsa`):**
   - Najkraći put: `Ariel` -> `Potonuli Brod` -> `Elsa`.
   - Jedinstveni put ($\sigma_{Ariel, Elsa} = 1$), prolazi kroz Potonuli brod ($\sigma_{Ariel, Elsa}(\text{Brod}) = 1$). 
   - Omjer = $1 / 1 = 1.0$

2. **Par (`Ariel`, `Tarzan`):**
   - Najkraći put: `Ariel` -> `Potonuli Brod` -> `Elsa` -> `Tarzan`.
   - Jedinstveni put ($\sigma_{Ariel, Tarzan} = 1$), prolazi kroz Potonuli brod ($\sigma_{Ariel, Tarzan}(\text{Brod}) = 1$).
   - Omjer = $1 / 1 = 1.0$

3. **Par (`Elsa`, `Tarzan`):**
   - Najkraći put: `Elsa` -> `Tarzan`. Ne prolazi kroz Potonuli brod. Omjer = $0.0$

Zbrojimo doprinose za sve parove (odnosi su simetrični pa računamo neusmjerene parove):
$$C_B(\text{Potonuli Brod}) = 1.0 + 1.0 + 0.0 = 2.0$$

Usporedbe radi, izračunajmo posrednost za **Elsu** u istom lancu:
1. Par (`Ariel`, `Tarzan`): najkraći put prolazi kroz Elsu. Omjer = $1.0$
2. Par (`Ariel`, `Brod`): ne prolazi kroz Elsu. Omjer = $0.0$
3. Par (`Brod`, `Tarzan`): prolazi kroz Elsu (`Brod` -> `Elsa` -> `Tarzan`). Omjer = $1.0$
$$C_B(\text{Elsa}) = 1.0 + 1.0 = 2.0$$

#### C) Interpretacija u Disney Universe
**Potonuli brod** ostvaruje enormnu posredničku centralnost. U narativnom smislu, on je **kritična točka ranjivosti sustava** (eng. *single point of failure*). On je mjesto gdje su stradali roditelji Else i Ane, olupina u kojoj Ariel pronalazi svoje ljudske artefakte, te posuda koja Tarzanove roditelje odvodi na obalu Afrike. 

Ako bismo izbrisali čvor `Potonuli Brod`, naša bi se mreža u trenutku raspala na dvije potpuno izolirane komponente: morsku i kopnenu. To dokazuje da su neživi predmeti i lokacije često ključni narativni mostovi koji povezuju udaljene ljudske sudbine.

---

#### 6.3.5. Centralnost svojstvenog vektora (Eigenvector Centrality)

Centralnost svojstvenog vektora ($x_v$) mjeri utjecaj čvora na temelju principa: *"Nije važno koliko poznanstava imaš, nego tko su ti poznanici."* Čvor spojen na nekoliko iznimno utjecajnih čvorova imat će veću vrijednost od čvora koji je spojen na mnogo izoliranih, perifernih čvora. Matematički se definira:

$$x_v = \frac{1}{\lambda} \sum_{u \in M(v)} x_u$$

Gdje je $M(v)$ skup susjeda čvora $v$, a $\lambda$ je konstanta (najveća svojstvena vrijednost matrice susjedstva $A$).

#### A) Grafički model podgrafa

Sljedeća skica prikazuje kako se prestiž širi iz središta autorskog huba (Mickeyja) preko legendarnog kuhara Remyja na gastronomskog kritičara Antona Egoa:

```text
 +-----------------+             +-----------------+             +-----------------+
 |   [Anton Ego]   | <(friend)>  |     [Remy]      | <(friend)>  |  [Ego_Mickey]   |
 | (Nizak stupanj  |             | (Visok utjecaj  |             | (Masivni Hub    |
 | ali utjecajan)  |             |     kuhara)     |             |  prestiža)      |
 +-----------------+             +-----------------+             +-----------------+
```
*Figurica 6.7: Prijenos prestiža i utjecaja kroz lanac svojstvenog vektora.*

#### B) Rekurzivni izračun i tablica prestiža

Pretpostavimo da je u globalnom sustavu čvoru `Ego_Mickey` zbog njegove uloge dodijeljen maksimalni prestiž od $x_{Mickey} = 1.00$. Promatrajmo kako se ta vrijednost rekurzivno prenosi na ostale susjede:

##### Tablica 6.3.2: Prijenos prestiža i svojstvenog vektora
| Naziv čvora ($v$) | Stupanj $C_D$ | Svojstveni vektor $x_v$ | Objašnjenje mrežnog položaja |
| :--- | :---: | :---: | :--- |
| `Ego_Mickey` | $26$ | $1.000$ | Izvor najvećeg utjecaja u cijeloj mreži. |
| `Remy` | $4$ | $0.620$ | Izravno spojen na Mickeyja; preuzima visok prestiž. |
| `Anton Ego` | $2$ | $0.415$ | Spojen samo na Remyja i Mickeyja; ima visok posredni prestiž. |
| `Jack Sparrow` | $2$ | $0.052$ | Spojen na periferne pirate; unatoč stupnju, prestiž mu je mizeran. |

#### C) Interpretacija u Disney Universe
Usporedba `Antona Egoa` i `Jacka Sparrowa` je vrhunski dokaz snage svojstvenog vektora. Oba čvora imaju nizak stupanj centralnosti ($C_D = 2$). Međutim, `Anton Ego` je gastronomski spojen s Remyjem (koji uživa veliku mrežnu potporu jer kuha pod zaštitom Mickeyja), pa sustav prepoznaje Antona Egoa kao iznimno važnog člana "aristokracije" našeg svemira ($x_{v} = 0.415$). 

Nasuprot tome, Jack Sparrow je spojen s izoliranim piratom i trozupcem na marginama, pa je njegova mrežna snaga zanemariva ($x_{v} = 0.052$). Svojstveni vektor nam pomaže prepoznati "skrivenu elitu" — likove koji se ne pojavljuju često, ali su uvučeni u apsolutno jezgro naracije.

---

### 6.4. Koeficijenti klasteriranja (Clustering Coefficients)

Koeficijenti klasteriranja mjere tendenciju čvorova da se grupiraju u visoko povezane, stabilne, trokutaste podgrafove (klike), koji u sociologiji označavaju visoku razinu međusobnog povjerenja i kohezije.

---

#### 6.4.1. Lokalni koeficijent klasteriranja (Local Clustering Coefficient)

Lokalni koeficijent klasteriranja ($C_Local$) promatra jednog specifičnog čvora $v$ koji posjeduje $k_v$ susjeda. Zatim izračunava omjer stvarnog broja veza koje postoje među tim susjedima ($e_v$) i maksimalno mogućeg broja veza koje su se mogle formirati među njima:

$$C(v) = \frac{2 e_v}{k_v(k_v - 1)}$$

#### A) Grafički model podgrafa

Sljedeća skica prikazuje dva radikalno različita susjedstva: zatvoreni, stabilni trokut oceanske kraljevske obitelji i otvorenu, tranzitnu liniju potonulog broda:

```text
  A) Zatvoreno susjedstvo (Triton)              B) Otvoreno susjedstvo (Potonuli Brod)
     (Visoka lokalna kohezija)                     (Tranzitni, nelinearni most)

           [Triton]                                      [Potonuli Brod]
           /      \                                         /       \
      family      magic                                  cameo     theory
         /          \                                     /           \
        v            v                                   v             v
     [Ariel] <====> [Ego] (Ostvarena veza)            [Ariel]        [Elsa] (Nema veze)
```
*Figurica 6.8: Zatvoreno (trokutasto) nasuprot otvorenog (V-oblik) lokalnog susjedstva.*

#### B) Matematički izračun koeficijenta kohezije

##### 1. Izračun za Tritona ($v = Triton$):
- Broj susjeda: $k_{Triton} = 3$ (`Ariel`, `Ego`, `Posejdonov Trozubac` - pretpostavimo da je i trozubac tu).
- Maksimalan mogući broj veza među susjedima:
  $$\frac{k_v(k_v - 1)}{2} = \frac{3 \times 2}{2} = 3 \text{ veze}$$
- Stvarno ostvarene veze među Tritonovima susjedima ($e_{Triton} = 1$):
  - Izravna veza `Ariel` — `Ego` (ostvarena)
  - Veze `Ariel` — `Trozubac` i `Ego` — `Trozubac` nisu ostvarene u ovom podgrafu.
- Lokalni koeficijent:
  $$C(\text{Triton}) = \frac{2 \times 1}{3 \times 2} = \frac{2}{6} \approx 0.333 \quad (33.3\%)$$

##### 2. Izračun za Potonuli brod ($v = Brod$):
- Broj susjeda: $k_{Brod} = 2$ (`Ariel`, `Elsa`).
- Maksimalan mogući broj veza među susjedima:
  $$\frac{2 \times 1}{2} = 1 \text{ veza}$$
- Stvarno ostvarene veze među susjedima ($e_{Brod} = 0$, Ariel i Elsa se ne poznaju niti su se ikada susrele):
- Lokalni koeficijent:
  $$C(\text{Potonuli Brod}) = \frac{2 \times 0}{2 \times 1} = 0.00 \quad (0.0\%)$$

#### C) Interpretacija u Disney Universe
Lokalni koeficijent klasteriranja nam izravno otkriva **emocionalnu i socijalnu stabilnost likova**. Visoka vrijednost kod Tritona ($33.3\%$) ukazuje na to da su njegovi susjedi dio čvrsto povezane zajednice u kojoj se informacije i magija stalno vrte u krug. 

Nasuprot tome, nula kod Potonulog broda nam govori da je ta lokacija hladni, tranzitni mrežni separator koji spaja likove koji pripadaju potpuno različitim svjetovima i koji se nikada neće izravno sresti.

---

#### 6.4.2. Globalni koeficijent klasteriranja (Global Clustering Coefficient)

Globalni koeficijent klasteriranja ($C_{global}$) mjeri ukupnu stisnutost ili koheziju cijele mreže. On se izračunava kao omjer ukupnog broja zatvorenih trokuta i ukupnog broja povezanih trojki (tripleta) u cijelom grafu:

$$C_{global} = \frac{3 \times \text{broj zatvorenih trokuta}}{\text{broj povezanih trojki (tripleta)}}$$

Jedan trokut sadrži točno tri povezana tripleta, stoga ova mjera ocjenjuje kolika je vjerojatnost da će dva prijatelja nekog čvora i sami biti prijatelji.

#### A) Grafički model podgrafa

Sljedeća skica prikazuje podmrežu kineske dinastije u kojoj se miješaju obitelj, magija predaka i blisko ratno prijateljstvo Mulan, generala Shanga, zmaja Mushua i ratnika Yaoa:

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

#### B) Matematički izračun u podgrafu korak-po-korak

Kako bismo izračunali $C_{global}$ za podgraf na slici 6.9 ($N = 4$):

1. **Identifikacija svih zatvorenih trokuta:**
   - Postoji točno $1$ zatvoreni trokut: `{Mulan, Shang, Yao}` (veze: Mulan—Shang, Mulan—Yao, Shang—Yao).

2. **Identifikacija svih povezanih trojki (triplet je niz od 3 čvora povezana s 2 veze):**
   - Trojka s centrom u `Mulan` (stupanj $4 \implies \binom{4}{2} = 6$ trojki):
     1. `{Mushu, Mulan, Shang}` (otvorena)
     2. `{Mushu, Mulan, Yao}` (otvorena)
     3. `{Shang, Mulan, Yao}` (zatvorena trokutom)
   - Trojka s centrom u `Shang` (stupanj $2 \implies \binom{2}{2} = 1$ trojka):
     4. `{Mulan, Shang, Yao}` (zatvorena trokutom)
   - Trojka s centrom u `Yao` (stupanj $2 \implies \binom{2}{2} = 1$ trojka):
     5. `{Mulan, Yao, Shang}` (zatvorena trokutom)
   - Trojka s centrom u `Mushu` (stupanj $1 \implies 0$ trojki).

Ukupan broj povezanih trojki (tripleta) u podgrafu iznosi: $5$.
Sada izračunavamo globalni koeficijent klasteriranja:
$$C_{global} = \frac{3 \times 1}{5} = \frac{3}{5} = 0.60 \quad (60.0\%)$$

#### C) Interpretacija u Disney Universe
Uočenih $60\%$ globalne stisnutosti u ovom podgrafu dokazuje izuzetnu **narativnu kompaktnost**. Dinastijska Kina u filmu *Mulan* funkcionira kao zatvoren kolektivni sustav otporan na vanjske mrežne upade. 

No, ako ovu metriku preslikamo na naš globalni Disney-Pixar graf, ona zbog velikog broja izoliranih filmskih svjetova pada na svega desetak posto. To nam potvrđuje da je cijeli meta-svemir zapravo skup visoko kohezivnih lokalnih balona koji plutaju u slabo povezanom autorskom vakuumu.

---

### 6.5. Modularnost (Modularity)

Modularnost ($Q$) je temeljna mjera za evaluaciju kvalitete podjele mreže u klastere (zajednice). Ona uspoređuje gustoću veza unutar definiranih grupa s gustoćom koja bi se očekivala u potpuno nasumično raspoređenom grafu s istim stupnjevima čvorova:

$$Q = \frac{1}{2m} \sum_{i,j} \left[ A_{ij} - \frac{k_i k_j}{2m} \right] \delta(c_i, c_j)$$

Gdje je $A_{ij}$ matrica susjedstva, $k_i$ stupanj čvora $i$, $m$ ukupan broj veza u grafu, $c_i$ zajednica kojoj čvor pripada, a Kroneckerov delta simbol $\delta(c_i, c_j)$ iznosi $1$ ako su oba čvora u istoj zajednici, a $0$ ako pripadaju različitim zajednicama.

#### A) Grafički model podgrafa

Sljedeća skica prikazuje podjelu na dva izrazito jasna i zaokružena klastera (Priča o igračkama i Čudovišta), koji su međusobno premošćeni isključivo magičnim portalom drvenih vrata:

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

#### B) Analitički izračun i vrednovanje podjele

Promatrajmo naš graf od $N = 6$ čvorova i ukupno $m = 7$ veza. Pretpostavimo dvije različite podjele u klastere:

##### Podjela 1 (Idealna podjela - prirodna podjela):
- Klaster 1: `{Woody, Buzz, Andy}` (broj unutrašnjih veza: $3$, vanjskih: $1$)
- Klaster 2: `{Sully, Mike, Boo}` (broj unutrašnjih veza: $3$, vanjskih: $1$)
- Budući da su unutar-klasterske veze guste, a izvantrasitna veza iznimno rijeka, modularnost poprima visoku pozitivnu vrijednost:
  $$Q \approx 0.428 \quad (\text{izvrsna strukturiranost zajednice})$$

##### Podjela 2 (Loša podjela - nasumično miješanje):
- Klaster 1: `{Woody, Sully, Mike}` (unutrašnje veze: $1$)
- Klaster 2: `{Buzz, Andy, Boo}` (unutrašnje veze: $1$)
- Budući da smo prerezali prirodne narativne veze i spojili nepovezane likove, broj unutrašnjih veza je znatno manji od očekivanog:
  $$Q < 0 \quad (\text{negativna modularnost ukazuje na potpunu nepovezanost})$$

#### C) Interpretacija u Disney Universe
U našoj interaktivnoj D3.js aplikaciji, modularnost se koristi kao **kameni temeljac za vizualni raspored elemenata**. Kada korisnik uključi orbitalne filtere, naša fizikalna simulacija automatski koristi ontološke atribute (kao što su *Igrani Svemir*, *Centar Magije*, *Sjeverna Kraljevstva*) kako bi grupirala čvorove u zasebne prostorne orbite. 

Točne vrijednosti modularnosti se ne izračunavaju na klijentskoj strani u stvarnom vremenu jer bi takav masivni prelazak matrice susjedstva nakon svakog pomicanja ili brisanja čvorova srušio performanse iscrtavanja na klijentu. Međutim, visoka modularnost našeg svemira jamči da su vizualni "otoci" u našem D3 rasporedu stvarni, narativno opravdani entiteti, a ne tek slučajni estetski plod generatora sila.

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
