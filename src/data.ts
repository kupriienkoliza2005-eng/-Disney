export interface Node {
  id: string;
  name: string;
  type: 'character' | 'object' | 'location' | 'theory' | 'ego';
  description: string;
  movie: string;
  cluster: string;
}

export interface Link {
  source: string;
  target: string;
  type: 'cameo' | 'family' | 'easter_egg' | 'theory' | 'magic' | 'hidden_mickey';
  description: string;
}

export const graphData: { nodes: Node[]; links: Link[] } = {
  nodes: [
    { id: 'ego', name: 'Skriveni Mickey', type: 'ego', description: 'Centralni simbol Disney magije. Njegova prisutnost u svakom filmu dokazuje da su svi ovi svjetovi dio jedne velike kreativne misli.', movie: 'Svi filmovi', cluster: 'Centar Magije' },
    
    // Sjeverna Kraljevstva
    { id: 'elsa', name: 'Elsa', type: 'character', description: 'Kraljica leda. Njezin izvor moći je isti kao kod Moane i Pocahontas, a njezina obitelj seže do Afrike i Tarzana.', movie: 'Snježno kraljevstvo', cluster: 'Sjeverna Kraljevstva' },
    { id: 'anna', name: 'Anna', type: 'character', description: 'Kraljica Anna. Njezina potraga za istinom o roditeljima povezuje je s Tarzanom i morskim olupinama.', movie: 'Snježno kraljevstvo', cluster: 'Sjeverna Kraljevstva' },
    { id: 'rapunzel', name: 'Rapunzel', type: 'character', description: 'Posjeduje moć Sunca. Njezin dolazak u Arendelle i sličnost s Elsom potiču teorije o krunskim rođacima.', movie: 'Vrlo zapetljana priča', cluster: 'Sjeverna Kraljevstva' },
    { id: 'flynn', name: 'Flynn Rider', type: 'character', description: 'Bivši lopov koji je kroz Rapunzel ušao u najviše krugove Disneyevog kraljevstva.', movie: 'Vrlo zapetljana priča', cluster: 'Sjeverna Kraljevstva' },
    
    // Oceani
    { id: 'ariel', name: 'Ariel', type: 'character', description: 'Sirena koja sakuplja ljudske predmete. Njezin život spaja Atlantidu, Olimp (preko Tritona) i Neverland.', movie: 'Mala Sirena', cluster: 'Oceani' },
    { id: 'triton', name: 'Kralj Triton', type: 'character', description: 'Vladar mora. Njegovo božansko porijeklo ga čini izravnim rođakom Herculesa.', movie: 'Mala Sirena', cluster: 'Oceani' },
    { id: 'moana', name: 'Moana', type: 'character', description: 'Navigatorica koja komunicira s oceanom, istom silom koja je u Frozenu oživjela u obliku vodenog konja.', movie: 'Moana', cluster: 'Oceani' },
    { id: 'maui', name: 'Maui', type: 'character', description: 'Polubog čija kuka ima magiju sličnu onoj iz Atlantide i Moane.', movie: 'Moana', cluster: 'Oceani' },

    // Divljina
    { id: 'tarzan', name: 'Tarzan', type: 'character', description: 'Slikovit primjer preživljavanja. Prema direktoru filma, on je Annin i Elsin brat, rođen u džungli.', movie: 'Tarzan', cluster: 'Divljina' },
    { id: 'jane', name: 'Jane Porter', type: 'character', description: 'Istraživačica koja je od predaka naslijedila Bellein čuveni set za čaj.', movie: 'Tarzan', cluster: 'Divljina' },
    { id: 'simba', name: 'Simba', type: 'character', description: 'Kralj lavova čija legenda o precima iz zvijezda odjekuje u Moani i Mulan.', movie: 'Kralj Lavova', cluster: 'Divljina' },
    { id: 'scar', name: 'Scar', type: 'character', description: 'Zli lav čija je sudbina (koža) završila u Herculesovom svijetu kao trofej.', movie: 'Kralj Lavova', cluster: 'Divljina' },

    // Stara Europa
    { id: 'belle', name: 'Belle', type: 'character', description: 'Ljubiteljica knjiga. Njezina obiteljska loza vodi do Jane Porter u Africi.', movie: 'Ljepotica i Zvijer', cluster: 'Stara Europa' },
    { id: 'beast', name: 'Zvijer', type: 'character', description: 'Princ koji je naučio o kletvama, sličnim onima koje baca Maleficent.', movie: 'Ljepotica i Zvijer', cluster: 'Stara Europa' },
    { id: 'cinderella', name: 'Pepeljuga', type: 'character', description: 'Simbol nade. Njezina magija kume vile je preteča moći iz Trnoružice.', movie: 'Pepeljuga', cluster: 'Stara Europa' },
    { id: 'maleficent', name: 'Maleficent', type: 'character', description: 'Vila tame. Njezina magija transformacije je "zlatni standard" za Ursulu i Jafara.', movie: 'Trnoružica', cluster: 'Stara Europa' },

    // Teorije i Lokacije
    { id: 'potonuli_brod', name: 'Potonuli brod', type: 'location', description: 'Ključna točka spajanja tri filma: Frozen, Mala Sirena i Tarzan.', movie: 'Razno', cluster: 'Veze' },
    { id: 'teorija_roditelja', name: 'Teorija Brata', type: 'theory', description: 'Teorija da roditelji iz Frozena nisu poginuli nego su postali roditelji Tarzana.', movie: 'Teorija', cluster: 'Teorije' },
    { id: 'teorija_jane', name: 'Belleino nasljeđe', type: 'theory', description: 'Teorija da je Jane Porter unuka Belle, zbog identičnog posuđa i interesa.', movie: 'Teorija', cluster: 'Teorije' },
    
    // Extra likovi za gustoću (50+ ukupno s vezama)
    { id: 'olaf', name: 'Olaf', type: 'character', description: 'Snjegović koji razumije ljubav kao i ostali Disney suputnici.', movie: 'Snježno kraljevstvo', cluster: 'Sjeverna Kraljevstva' },
    { id: 'kristoff', name: 'Kristoff', type: 'character', description: 'Povezan s trolovima i njihovom drevnom magijom zemlje.', movie: 'Snježno kraljevstvo', cluster: 'Sjeverna Kraljevstva' },
    { id: 'ursula', name: 'Ursula', type: 'character', description: 'Morska vještica koja trguje paktovima kao i Had.', movie: 'Mala Sirena', cluster: 'Oceani' },
    { id: 'sebastian', name: 'Sebastian', type: 'character', description: 'Rak koji se pojavljuje u Aladdinu kao cameo.', movie: 'Mala Sirena', cluster: 'Oceani' },
    { id: 'hercules', name: 'Herkul', type: 'character', description: 'Polubog čiji su podvizi poznati u cijelom morskom kraljevstvu.', movie: 'Herkul', cluster: 'Olimp' },
    { id: 'hades', name: 'Had', type: 'character', description: 'Bog podzemlja koji upravlja dušama svih zlikovaca.', movie: 'Herkul', cluster: 'Olimp' },
    { id: 'phil', name: 'Filoktet', type: 'character', description: 'Trener koji posjeduje Scarov trofej.', movie: 'Herkul', cluster: 'Olimp' },
    { id: 'aladdin', name: 'Aladin', type: 'character', description: 'Vodi nas u pustinju gdje je vidio Sebastiana.', movie: 'Aladin', cluster: 'Pustinja' },
    { id: 'genie', name: 'Duh', type: 'character', description: 'Svemoćno biće koje probija granice filma.', movie: 'Aladin', cluster: 'Pustinja' },
    { id: 'jasmine', name: 'Jasmina', type: 'character', description: 'Princeza čiji tepih leti iznad svih kraljevstava.', movie: 'Aladin', cluster: 'Pustinja' },
    { id: 'jafar', name: 'Jafar', type: 'character', description: 'Zlikovac čija magija podsjeća na Maleficent.', movie: 'Aladin', cluster: 'Pustinja' },
    { id: 'mulan', name: 'Mulan', type: 'character', description: 'Ratnica čija se legenda proučava u modernom svijetu Lilo i Stitcha.', movie: 'Mulan', cluster: 'Istok' },
    { id: 'mushu', name: 'Mushu', type: 'character', description: 'Zmaj čuvar predaka, mehanika slična Mufasi.', movie: 'Mulan', cluster: 'Istok' },
    { id: 'stitch', name: 'Stitch', type: 'character', description: 'Vanzemaljac koji posjeduje poster Mulan u svojoj sobi.', movie: 'Lilo & Stitch', cluster: 'Moderna' },
    { id: 'lilo', name: 'Lilo', type: 'character', description: 'Djevojčica s Havaja koja poznaje Mulanine legende.', movie: 'Lilo & Stitch', cluster: 'Moderna' },
    { id: 'pocahontas', name: 'Pocahontas', type: 'character', description: 'Komunicira s duhovima vjetra, preteča Elsinih moći.', movie: 'Pocahontas', cluster: 'Novi Svijet' },
    { id: 'pinocchio', name: 'Pinocchio', type: 'character', description: 'Drveni lutak viđen kao kipar u Tangled-u.', movie: 'Pinocchio', cluster: 'Snovi' },
    { id: 'dumbo', name: 'Dumbo', type: 'character', description: 'Slonić čija se igračka pojavljuje u Liloinoj sobi.', movie: 'Dumbo', cluster: 'Snovi' },
    { id: 'peter_pan', name: 'Petar Pan', type: 'character', description: 'Dječak iz Neverlanda čije su sirene srodne Arielinoj obitelji.', movie: 'Petar Pan', cluster: 'Neverland' },
    { id: 'hook', name: 'Kuka', type: 'character', description: 'Kapetan koji je navodno usmrtio Arielinu majku Atenu.', movie: 'Petar Pan', cluster: 'Neverland' },
    { id: 'tinkerbell', name: 'Zvončica', type: 'character', description: 'Izvor vilinskog praha, univerzalnog Disney resursa.', movie: 'Petar Pan', cluster: 'Neverland' },
    { id: 'alice', name: 'Alice', type: 'character', description: 'Putuje kroz dimenzije kroz koje krstari i Mačak Cheshire.', movie: 'Alice', cluster: 'Neverland' },
    { id: 'cheshire_cat', name: 'Mačak Cheshire', type: 'character', description: 'Metafizičko biće koje povezuje sve dimenzije snova.', movie: 'Alice', cluster: 'Neverland' },
    { id: 'kida', name: 'Kida', type: 'character', description: 'Princeza Atlantide čiji kristal napaja svu magiju svijeta.', movie: 'Atlantis', cluster: 'Tajne' },
    { id: 'milo', name: 'Milo', type: 'character', description: 'Istraživač koji je povezao antičke jezike u jedan sustav.', movie: 'Atlantis', cluster: 'Tajne' },
    { id: 'jim_hawkins', name: 'Jim Hawkins', type: 'character', description: 'Navigator koji je na rubu svemira vidio Hidden Mickeys.', movie: 'Treasure Planet', cluster: 'Tajne' },
    { id: 'miguel', name: 'Miguel', type: 'character', description: 'Dječak koji spaja svijet živih i mrtvih (Hadovo podzemlje).', movie: 'Coco', cluster: 'Moderna' },
    { id: 'hector', name: 'Hector', type: 'character', description: 'Duh čije sjećanje čuva vezu s obitelji (Mulan mahanika).', movie: 'Coco', cluster: 'Moderna' },
    { id: 'mother_gothel_secret', name: 'Gothelina tajna', type: 'theory', description: 'Ona je ista osoba kao i Zla Kraljica, koristeći drugu magiju.', movie: 'Teorija', cluster: 'Teorije' },
    { id: 'aurora', name: 'Aurora', type: 'character', description: 'Povezana s kletvama i vilama koje vladaju Starkom Europom.', movie: 'Trnoružica', cluster: 'Stara Europa' },
    { id: 'snow_white', name: 'Snjeguljica', type: 'character', description: 'Osnova svih bajki čije se ogledalo spominje u dvorcu Zvijeri.', movie: 'Snjeguljica', cluster: 'Stara Europa' },
    { id: 'evil_queen', name: 'Zla Kraljica', type: 'character', description: 'Prva zla vještica čije kletve i danas odjekuju.', movie: 'Snjeguljica', cluster: 'Stara Europa' },
    { id: 'mufasa', name: 'Mufasa', type: 'character', description: 'Bivši kralj lavova čiji duh bdije iz zvijezda.', movie: 'Kralj Lavova', cluster: 'Divljina' },
    { id: 'red_witch', name: 'Grimhilde', type: 'character', description: 'Poznata i kao Zla Kraljica, čije mračne moći Had koristi u podzemlju.', movie: 'Snjeguljica', cluster: 'Stara Europa' },
    
    // Pixar & Moderna
    { id: 'woody', name: 'Woody', type: 'character', description: 'Kauboj igračka. Njegova egzistencija dokazuje da neživi predmeti crpe magiju iz dječje mašte.', movie: 'Priča o igračkama', cluster: 'Moderna' },
    { id: 'buzz', name: 'Buzz Svjetlosni', type: 'character', description: 'Svemirski rendžer. Njegova tehnologija podsjeća na rane prototipove iz Treasure Planeta.', movie: 'Priča o igračkama', cluster: 'Moderna' },
    { id: 'andy', name: 'Andy', type: 'character', description: 'Dječak čija mašta napaja svijet igračaka. Njegova soba krije brojne reference na druge svjetove.', movie: 'Priča o igračkama', cluster: 'Moderna' },
    { id: 'remy', name: 'Remy', type: 'character', description: 'Štakor kuhar. Njegov talent je dar koji se u ovom svemiru često dodjeljuje "običnim" stvorenjima.', movie: 'Juhu-hu', cluster: 'Moderna' },
    { id: 'linguini', name: 'Linguini', type: 'character', description: 'Kuhar koji je uz Remyja otkrio da "svatko može kuhati" uz malo magije.', movie: 'Juhu-hu', cluster: 'Moderna' },
    { id: 'carl', name: 'Carl Fredricksen', type: 'character', description: 'Starac koji je odletio s kućom. Njegova kuća je viđena iznad brojnih Disneyevih gradova.', movie: 'Nebesa', cluster: 'Moderna' },
    { id: 'russell', name: 'Russell', type: 'character', description: 'Mladi izviđač koji je povezao moderni svijet s drevnim divljinama Južne Amerike.', movie: 'Nebesa', cluster: 'Moderna' },
    { id: 'charles_muntz', name: 'Charles Muntz', type: 'character', description: 'Istraživač čiji su izumi (ogrlice za pse) preteča tehnologije komunikacije sa životinjama.', movie: 'Nebesa', cluster: 'Moderna' },
    { id: 'wall_e', name: 'Wall-E', type: 'character', description: 'Robot koji je preživio kraj civilizacije. Njegova upornost je ista ona koja pokreće Pinokija.', movie: 'Wall-E', cluster: 'Daleka Budućnost' },
    { id: 'eve', name: 'Eva', type: 'character', description: 'Napredni sondažni robot. Njezina tehnologija je vrhunac BnL korporacije.', movie: 'Wall-E', cluster: 'Daleka Budućnost' },
    { id: 'merlin', name: 'Merlin', type: 'character', description: 'Čarobnjak koji putuje kroz vrijeme. Njegovo poznavanje Bermuda i modernog svijeta objašnjava anakronizme.', movie: 'Mač u Kamenu', cluster: 'Srednji Vijek' },
    { id: 'arthur', name: 'Arthur', type: 'character', description: 'Budući kralj. Njegov mač je kovan istom tehnikom kao i Mauijeva kuka.', movie: 'Mač u Kamenu', cluster: 'Srednji Vijek' },
    { id: 'robin_hood', name: 'Robin Hood', type: 'character', description: 'Plemeniti lopov. Njegov svijet životinja koje govore je rani stadij Zootopije.', movie: 'Robin Hood', cluster: 'Srednji Vijek' },
    { id: 'judy_hopps', name: 'Judy Hopps', type: 'character', description: 'Policajka u svijetu gdje su životinje evoluirale do ljudske razine.', movie: 'Zootopia', cluster: 'Zootopia' },
    { id: 'nick_wilde', name: 'Nick Wilde', type: 'character', description: 'Lisac koji je naslijedio snalažljivost svog dalekog pretka Robina Hooda.', movie: 'Zootopia', cluster: 'Zootopia' },
    { id: 'hiro', name: 'Hiro Hamada', type: 'character', description: 'Genijalni dječak koji je spojio tech i magiju u San Fransokyu.', movie: 'Ekipa za 6', cluster: 'Tehno-Budućnost' },
    { id: 'baymax', name: 'Baymax', type: 'character', description: 'Robot bolničar čija je empatija moderni ekvivalent vilinske magije.', movie: 'Ekipa za 6', cluster: 'Tehno-Budućnost' },
    { id: 'ralph', name: 'Ralph', type: 'character', description: 'Razbijač iz videoigara. Dokazuje da i digitalni svjetovi imaju svoju "dušu".', movie: 'Krš i lom', cluster: 'Digitalni' },
    { id: 'vanellope', name: 'Vanellope', type: 'character', description: 'Princeza koda koja je upoznala sve klasične Disneyjeve princeze u internetu.', movie: 'Krš i lom', cluster: 'Digitalni' },
    { id: 'dory', name: 'Dori', type: 'character', description: 'Riba koja zaboravlja, ali čiji instinkt vodi do istih oceanskih struja koje koristi Moana.', movie: 'U Potrazi za Nemom', cluster: 'Oceani' },
    { id: 'bambi', name: 'Bambi', type: 'character', description: 'Mladi srndać čija je majka stradala od istog "Lovca" koji se spominje u brojnim filmovima.', movie: 'Bambi', cluster: 'Divljina' },
    { id: 'nemo', name: 'Nemo', type: 'character', description: 'Mala riba klaun koja je preživjela akvarij i vratila se u divljinu oceana.', movie: 'U Potrazi za Nemom', cluster: 'Oceani' },
    { id: 'maid_marian', name: 'Maid Marian', type: 'character', description: 'Robinova ljubav; njezina prisutnost u Nottinghamu je preteča plemstva u Zootopiji.', movie: 'Robin Hood', cluster: 'Srednji Vijek' },
    { id: 'sid', name: 'Sid', type: 'character', description: 'Dječak koji muči igračke; njegova trauma je stvorila mračnije teorije o svijetu predmeta.', movie: 'Priča o igračkama', cluster: 'Moderna' },
    
    // Pixar Proširenje (Monsters, Incredibles, Brave, more)
    { id: 'merida', name: 'Merida', type: 'character', description: 'Princeza koja je otkrila drevnu magiju preobražaja. Njezin susret s Vješticom je početak Pixarove vremenske linije.', movie: 'Merida Hrabra', cluster: 'Drevna Škotska' },
    { id: 'witch_boo', name: 'Vještica (Boo)', type: 'character', description: 'Zagonetna starica koja rezbari drvo. Postoji teorija da je ona zapravo odrasla Boo koja putuje kroz vrijeme tražeći Sulleyja.', movie: 'Merida Hrabra', cluster: 'Drevna Škotska' },
    { id: 'sulley', name: 'Sulley', type: 'character', description: 'Čudovište koje sakuplja dječje vrisak/smijeh. Njegov svijet koristi vrata kao portale kroz vrijeme.', movie: 'Čudovišta iz ormara', cluster: 'Monstropolis' },
    { id: 'mike', name: 'Mike Wazowski', type: 'character', description: 'Najbolji Sulleyjev prijatelj. Njegova energija i humor su ključni za stabilnost Monstropolisa.', movie: 'Čudovišta iz ormara', cluster: 'Monstropolis' },
    { id: 'boo', name: 'Boo', type: 'character', description: 'Djevojčica koja je ušla u svijet čudovišta i zauvijek promijenila Sulleyja.', movie: 'Čudovišta iz ormara', cluster: 'Monstropolis' },
    { id: 'mr_incredible', name: 'Bob Parr', type: 'character', description: 'Gospodin Nevjerojatni. Jedan od prvih "supera" čije moći sugeriraju evoluciju mašte u snagu.', movie: 'Izbavitelji', cluster: 'Doba Heroja' },
    { id: 'elastigirl', name: 'Helen Parr', type: 'character', description: 'Elastika. Njezina fleksibilnost je fizički ekvivalent magije transformacije.', movie: 'Izbavitelji', cluster: 'Doba Heroja' },
    { id: 'jack_jack', name: 'Jack-Jack', type: 'character', description: 'Beba s neograničenim spekrom moći, uključujući putovanje kroz dimenzije i promjenu oblika.', movie: 'Izbavitelji', cluster: 'Doba Heroja' },
    { id: 'mcqueen', name: 'Munjevit Jurić', type: 'character', description: 'Trkaći auto u svijetu bez ljudi. Dokaz ere u kojoj su strojevi (BnL) preuzeli dominaciju.', movie: 'Auti', cluster: 'Era Strojeva' },
    { id: 'mater', name: 'Vučko', type: 'character', description: 'Lojalni kamion za vuču koji čuva uspomene na staru tehnologiju.', movie: 'Auti', cluster: 'Era Strojeva' },
    { id: 'joy', name: 'Radost', type: 'character', description: 'Emocija koja upravlja ljudskom sviješću. Njezina priroda je ista ona "iskra" koja pokreće duše u Cocou.', movie: 'Izvrnuto obrnuto', cluster: 'Unutarnji Svijet' },
    { id: 'sadness', name: 'Tuga', type: 'character', description: 'Neophodna emocija za dublje razumijevanje sjećanja i empatije.', movie: 'Izvrnuto obrnuto', cluster: 'Unutarnji Svijet' },
    { id: 'anton_ego', name: 'Anton Ego', type: 'character', description: 'Strogi kritičar hrane čije je djetinjstvo povezano s toplinom doma i magijom kuhanja.', movie: 'Juhu-hu', cluster: 'Moderna' },
    { id: 'mei_lee', name: 'Mei Lee', type: 'character', description: 'Djevojčica koja se pretvara u crvenu pandu, koristeći drevnu magiju predaka sličnu Mulaninoj.', movie: 'Turning Red', cluster: 'Moderna' },

    // Nove Teorije
    { id: 'bnl_corp', name: 'BnL Korporacija', type: 'theory', description: 'Megakorporacija koja stoji iza tehnologije u Priči o igračkama, Nebesima i Wall-E.', movie: 'Teorija', cluster: 'Teorije' },
    { id: 'teorija_pixar', name: 'Ujedinjena Pixar Teorija', type: 'theory', description: 'Sve Pixarove priče su u istoj vremenskoj liniji od antičkog doba do Wall-E ere.', movie: 'Teorija', cluster: 'Teorije' },
    { id: 'teorija_merlin', name: 'Merlinov Godišnji', type: 'theory', description: 'Teorija da Merlin posjećuje Disney World u budućnosti, što objašnjava njegovu bermudsku košulju.', movie: 'Teorija', cluster: 'Teorije' }
  ],
  links: [
    // --- ELSA VEZE ---
    { source: 'elsa', target: 'anna', type: 'family', description: 'Najčvršća obiteljska veza; Anna je pokretač Elsine ljudskosti.' },
    { source: 'elsa', target: 'rapunzel', type: 'family', description: 'Teorija o rođacima: Rapunzel i Flynn su viđeni na krunidbi, a roditelji su putovali na njeno vjenčanje.' },
    { source: 'elsa', target: 'olaf', type: 'magic', description: 'Olaf je kreacija njezine podsvjesne ljubavi prema igri s Annom.' },
    { source: 'elsa', target: 'pocahontas', type: 'magic', description: 'Obje komuniciraju s elementarnim duhovima vjetra i prirode.' },
    { source: 'elsa', target: 'teorija_roditelja', type: 'theory', description: 'Potraga za brodom koji spaja njenu prošlost s Tarzanovom džunglom.' },

    // --- ARIEL VEZE ---
    { source: 'ariel', target: 'triton', type: 'family', description: 'Kćer i otac; Tritonova kruna i trozubac su simboli Olimpovske moći.' },
    { source: 'ariel', target: 'potonuli_brod', type: 'easter_egg', description: 'Istražuje istu olupinu u kojoj su Elsa i Anna izgubile roditelje.' },
    { source: 'ariel', target: 'hercules', type: 'family', description: 'Hercules i Triton su rođaci (Triton je Posejdonov sin, Posejdon je Zeusov brat). To čini Ariel i Herculesa rođacima!' },
    { source: 'ariel', target: 'hook', type: 'theory', description: 'Teorija da je Kuka kapetan koji je ubio Arielinu majku Atenu blizu Neverlanda.' },
    { source: 'ariel', target: 'ego', type: 'hidden_mickey', description: 'Njezina publika pod vodom krije siluetu Mickeyja.' },

    // --- SIMBA VEZE ---
    { source: 'simba', target: 'mufasa', type: 'family', description: 'Otac i sin; Mufasin duh u zvijezdama vodi Simbu kao što su preci vodili Moanu.' },
    { source: 'simba', target: 'scar', type: 'family', description: 'Borba za prijestolje; Scar je završio kao trofejna koža kod Philokteta.' },
    { source: 'simba', target: 'tarzan', type: 'theory', description: 'Simba i Tarzan dijele istu džunglu u Africi, susrećući ista bića.' },
    { source: 'simba', target: 'mulan', type: 'magic', description: 'Komunikacija s precima je ista tehnologija magije u oba svijeta.' },

    // --- JANE PORTER VEZE ---
    { source: 'jane', target: 'tarzan', type: 'family', description: 'Par koji spaja dva svijeta.' },
    { source: 'jane', target: 'teorija_jane', type: 'theory', description: 'Set za čaj i sličnost s Belle su glavni dokazi.' },
    { source: 'jane', target: 'belle', type: 'family', description: 'Jane je unuka Belle čije je posuđe prenosila generacijama.' },

    // --- ZLIKOVCI VEZE ---
    { source: 'maleficent', target: 'ursula', type: 'magic', description: 'Ursula koristi isti zeleni plamen transformacije kao i Maleficent.' },
    { source: 'maleficent', target: 'jafar', type: 'magic', description: 'Pretvaranje u krilata stvorenja i zmajeve iz istog mračnog izvora.' },
    { source: 'hades', target: 'red_witch', type: 'magic', description: 'Had upravlja ugovorima duša zlikovaca nakon poraza.' },
    { source: 'evil_queen', target: 'mother_gothel_secret', type: 'theory', description: 'Teorija da su Gothel i Zla Kraljica ista osoba koja traži vječnu ljepotu.' },

    // --- MODERNA & TAJNE ---
    { source: 'stitch', target: 'lilo', type: 'family', description: 'Ohana znači obitelj.' },
    { source: 'stitch', target: 'mulan', type: 'easter_egg', description: 'U sobi se vidi poster Mulan, legende iz prošlosti.' },
    { source: 'lilo', target: 'dumbo', type: 'easter_egg', description: 'Lilo se igra s Dumbo igračkom, pokazujući da je cirkus bio slavan.' },
    { source: 'kida', target: 'moana', type: 'magic', description: 'Izvor energije Atlantide i Moanino srce Te Fiti koriste isti kristalni oblik.' },
    { source: 'milo', target: 'jim_hawkins', type: 'theory', description: 'Milo je dešifrirao mape koje su Jimu omogućile put u svemir.' },
    { source: 'miguel', target: 'hades', type: 'magic', description: 'Podzemni svijet (Mictlan i Tartar) su povezani istim prolazima.' },

    // --- EGO VEZE (SVUDA) ---
    { source: 'ego', target: 'elsa', type: 'hidden_mickey', description: 'Skriven u dvorcu Arendell.' },
    { source: 'ego', target: 'ariel', type: 'hidden_mickey', description: 'Skriven u gomili pod morem.' },
    { source: 'ego', target: 'aladdin', type: 'hidden_mickey', description: 'Skriven među blagom u Pećini Čuda.' },
    { source: 'ego', target: 'hercules', type: 'hidden_mickey', description: 'Navijači s kapama Mickeyja.' },
    { source: 'ego', target: 'pinocchio', type: 'hidden_mickey', description: 'Drvena lutka Mickeyja u radionici.' },
    { source: 'ego', target: 'dumbo', type: 'hidden_mickey', description: 'Oblak u obliku tri kruga.' },
    { source: 'ego', target: 'kida', type: 'hidden_mickey', description: 'Znakovi na zidu Atlantide.' },
    { source: 'ego', target: 'simba', type: 'hidden_mickey', description: 'Pojavljuje se na krznu lavova u povorci.' },

    // Garancija potpune povezanosti:
    { source: 'phil', target: 'hercules', type: 'family', description: 'Trener i heroj.' },
    { source: 'phil', target: 'scar', type: 'easter_egg', description: 'Drži Scarovu kožu kao dokaz herojstva.' },
    { source: 'genie', target: 'sebastian', type: 'cameo', description: 'Izvukao raka iz torbe.' },
    { source: 'sebastian', target: 'ariel', type: 'family', description: 'Vjerni savjetnik.' },
    { source: 'aladdin', target: 'jasmine', type: 'family', description: 'Supružnici.' },
    { source: 'jasmine', target: 'simba', type: 'theory', description: 'Njezin tigar Rajah je bio inspiriran kraljevstvom lavova.' },
    { source: 'pinocchio', target: 'rapunzel', type: 'cameo', description: 'Viđen u krčmi "Snuggly Duckling".' },
    { source: 'kristoff', target: 'anna', type: 'family', description: 'Partneri.' },
    { source: 'kristoff', target: 'tarzan', type: 'theory', description: 'Njegovo djetinjstvo u divljini se podudara s Tarzanovim.' },
    { source: 'mulan', target: 'mushu', type: 'family', description: 'Čuvar.' },
    { source: 'mushu', target: 'hector', type: 'magic', description: 'Komunikacija s onostranim.' },
    { source: 'alice', target: 'cheshire_cat', type: 'magic', description: 'Zajedno u Zemlji čudesa.' },
    { source: 'cheshire_cat', target: 'tinkerbell', type: 'magic', description: 'Vile i metafizička bića dijele istu eteričnu ravan.' },
    { source: 'tinkerbell', target: 'peter_pan', type: 'family', description: 'Najbolji prijatelji.' },
    { source: 'hook', target: 'peter_pan', type: 'family', description: 'Arhineprijatelji.' },
    { source: 'aurora', target: 'maleficent', type: 'magic', description: 'Kletva.' },
    { source: 'aurora', target: 'snow_white', type: 'family', description: 'Srodne princeze.' },
    { source: 'beast', target: 'belle', type: 'family', description: 'Par.' },
    { source: 'beast', target: 'simba', type: 'theory', description: 'Oba princa su prošla kroz transformaciju "zvijeri".' },
    { source: 'rapunzel', target: 'flynn', type: 'family', description: 'Supružnici koji su putovali na Elsino krunjenje.' },
    { source: 'moana', target: 'maui', type: 'family', description: 'Nerazdvojni dvojac; Maui je čuvar Moaninog srca Te Fiti.' },
    { source: 'snow_white', target: 'cinderella', type: 'cameo', description: 'Viđene zajedno na kraljevskim festivalima Starog svijeta.' },
    { source: 'maleficent', target: 'aurora', type: 'family', description: 'Vila i njezinka kći iz sjene, vezane kletvom vretena.' },
    { source: 'ursula', target: 'triton', type: 'family', description: 'Prognana sestra kralja mora, koristi istu magiju transformacije.' },
    { source: 'hades', target: 'hercules', type: 'family', description: 'Bog podzemlja i njegov nećak u vječnom sukobu.' },
    { source: 'jafar', target: 'aladdin', type: 'magic', description: 'Mračni vezir i ulični lopov u borbi za čarobnu lampu.' },
    { source: 'kida', target: 'milo', type: 'family', description: 'Istraživač i besmrtna princeza Atlantide.' },
    { source: 'miguel', target: 'hector', type: 'family', description: 'Dječak glazbenik i njegov pradjed u svijetu mrtvih.' },
    { source: 'mother_gothel_secret', target: 'rapunzel', type: 'magic', description: 'Gothel je otela Rapunzel kako bi crpila njezinu sunčevu moć.' },
    { source: 'evil_queen', target: 'snow_white', type: 'family', description: 'Prva velika borba između taštine i čistoće srca.' },
    { source: 'red_witch', target: 'ego', type: 'hidden_mickey', description: 'Simbol skriven u dizajnu njezina otrovanog ogledala.' },
    
    // --- NOVE VEZE ZA PROŠIRENJE ---
    { source: 'andy', target: 'woody', type: 'family', description: 'Veze između djeteta i igračke su najčvršći oblik magije mašte.' },
    { source: 'woody', target: 'buzz', type: 'family', description: 'Prijateljstvo koje premošćuje klasičnu igru i modernu tehnologiju.' },
    { source: 'bnl_corp', target: 'buzz', type: 'theory', description: 'Vjeruje se da je Buzz proizvod rane faze BnL korporacije.' },
    { source: 'bnl_corp', target: 'wall_e', type: 'magic', description: 'BnL je doslovno stvorio Wall-E svijet.' },
    { source: 'carl', target: 'andy', type: 'easter_egg', description: 'Carl i Ellie su poslali razglednicu koja se vidi na Andyjevom zidu.' },
    { source: 'remy', target: 'linguini', type: 'family', description: 'Kulinarski dvojac povezan neraskidivom niti talenta.' },
    { source: 'remy', target: 'ego', type: 'hidden_mickey', description: 'U sjeni kuhinje, tave formiraju poznati oblik.' },
    { source: 'merlin', target: 'arthur', type: 'family', description: 'Mentor i učenik; Merlin vidi budućnost koju Arthur gradi.' },
    { source: 'merlin', target: 'teorija_merlin', type: 'theory', description: 'Njegovo putovanje kroz vrijeme je ključ za sve anakronizme.' },
    { source: 'robin_hood', target: 'nick_wilde', type: 'theory', description: 'Nick se smatra izravnim potomkom legendarnog Robina Hooda.' },
    { source: 'judy_hopps', target: 'nick_wilde', type: 'family', description: 'Partneri u Zootopiji, dokaz evolucije suživota životinja.' },
    { source: 'hiro', target: 'baymax', type: 'family', description: 'Neraskidiva veza stvoritelja i negovatelja.' },
    { source: 'hiro', target: 'stitch', type: 'theory', description: 'Hirowa tehnologija i Stitchovo vanzemaljsko porijeklo dijele slične energetske baze.' },
    { source: 'ralph', target: 'vanellope', type: 'family', description: 'Prijateljstvo koje je spasilo digitalno kraljevstvo.' },
    { source: 'vanellope', target: 'rapunzel', type: 'cameo', description: 'Vanellope je srela Rapunzel i ostale princeze u internetu.' },
    { source: 'dory', target: 'nemo', type: 'family', description: 'Ribe koje su prešle ocean kako bi pronašle svoju obitelji.' },
    { source: 'dory', target: 'moana', type: 'theory', description: 'Doryne migracije prate iste rute koje su drevni polinezijski moreplovci koristili.' },
    { source: 'maid_marian', target: 'robin_hood', type: 'family', description: 'Ljubav koja je prkosila tiraniji, preteča svih modernih Disneyevih romansi.' },
    { source: 'sid', target: 'andy', type: 'family', description: 'Susjedi u ljudskom svijetu, dva suprotna pola djetinjstva.' },
    { source: 'sid', target: 'ego', type: 'hidden_mickey', description: 'Na njegovoj majici s lubanjom, katkad se nazire poznati oblik ušiju.' },
    { source: 'bambi', target: 'scar', type: 'theory', description: 'Crna teorija da je Lovac iz Bambija zapravo ista sila koja je pokrenula kaos u drugim šumama.' },
    { source: 'teorija_pixar', target: 'bnl_corp', type: 'theory', description: 'Središnji stup ujedinjene Pixar teorije o usponu i padu strojeva.' },
    { source: 'russell', target: 'carl', type: 'family', description: 'Izviđač koji je Carlu vratio volju za životom.' },
    { source: 'charles_muntz', target: 'russell', type: 'family', description: 'Mentor koji je postao suparnik u potraci za rijetkim pticama.' },
    { source: 'wall_e', target: 'eve', type: 'family', description: 'Ljubav koja je restartala ljudsku civilizaciju.' },
    { source: 'merlin', target: 'genie', type: 'magic', description: 'Dva najmoćnija korisnika plave magije koji se vjerojatno poznaju izvan vremena.' },
    { source: 'kida', target: 'merlin', type: 'magic', description: 'Atlantidska kristalna magija je izvor Merlinovih najdubljih čarolija.' },
    { source: 'cheshire_cat', target: 'ralph', type: 'magic', description: 'Mačak koji nestaje i digitalni glitch dijele istu metafizičku nestabilnost.' },
    { source: 'ego', target: 'wall_e', type: 'hidden_mickey', description: 'Među hrpama otpada, tri zupčanika su savršeno posložena.' },
    { source: 'ego', target: 'baymax', type: 'hidden_mickey', description: 'U odsjaju vizira, Mickey se smiješi.' },
    { source: 'ego', target: 'robin_hood', type: 'hidden_mickey', description: 'Šerifov novčić nosi kraljevski žig s tri kruga.' },

    // Pixar Proširenje Veze
    { source: 'merida', target: 'witch_boo', type: 'theory', description: 'Teorija da je Vještica zapravo ostarjela Boo koja je naučila magiju vrata.' },
    { source: 'witch_boo', target: 'sulley', type: 'easter_egg', description: 'U vještičinoj kolibi vidi se drveni kip Sulleyja.' },
    { source: 'sulley', target: 'mike', type: 'family', description: 'Nerazdvojni kolege i najbolji prijatelji.' },
    { source: 'sulley', target: 'boo', type: 'family', description: 'Veza djeteta i čudovišta koja je promijenila energetski sustav njihova svijeta.' },
    { source: 'mr_incredible', target: 'elastigirl', type: 'family', description: 'Temelj obitelji superheroja.' },
    { source: 'mr_incredible', target: 'bnl_corp', type: 'theory', description: 'Teorija da je BnL rano financirao i kontrolirao heroje prije njihova povlačenja.' },
    { source: 'jack_jack', target: 'mr_incredible', type: 'family', description: 'Beba s moćima koja nadilazi sve heroje.' },
    { source: 'mcqueen', target: 'mater', type: 'family', description: 'Najveće prijateljstvo u eri bez ljudske prisutnosti.' },
    { source: 'mcqueen', target: 'bnl_corp', type: 'theory', description: 'Strojevi koji su evoluirali do ljudskih osobnosti nakon što je BnL napustio Zemlju.' },
    { source: 'joy', target: 'sadness', type: 'family', description: 'Svjetlo i sjena ljudske psihe.' },
    { source: 'joy', target: 'miguel', type: 'magic', description: 'Unutarnja duhovna "iskra" koja povezuje svijet osjećaja sa svijetom predaka.' },
    { source: 'anton_ego', target: 'remy', type: 'easter_egg', description: 'Okus ratatouillea vratio je Ega u djetinjstvo, povezujući generacije.' },
    { source: 'mei_lee', target: 'mulan', type: 'magic', description: 'Duhovno nasljeđe životinja zaštitnika koje se prenosi kroz generacije.' },
    { source: 'mei_lee', target: 'ego', type: 'hidden_mickey', description: 'Skriven u dizajnu njezina rodnog grada i hrama.' },
    { source: 'teorija_pixar', target: 'merida', type: 'theory', description: 'Meridin susret s magijom postavlja temelje za sve kasnije magijske i tech događaje u Pixar univerzumu.' }
  ]
};
