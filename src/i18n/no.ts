// Norwegian (Bokmål). Typed as Record<TranslationKey, string> so TypeScript
// fails the build if a key is missing or an extra/typo'd key is added.

import type { TranslationKey } from './en';

export const no: Record<TranslationKey, string> = {
  'a11y.skipToMain': 'Hopp til hovedinnhold',
  'a11y.toggleMenu': 'Vis/skjul meny',
  'a11y.languageSwitcher': 'Velg språk',
  'a11y.cart': 'Handlekurv',

  'nav.home': 'Hjem',
  'nav.shop': 'Butikk',
  'nav.about': 'Om oss',
  'nav.blog': 'Blogg',
  'nav.contact': 'Kontakt',
  'nav.faq': 'Vanlige spørsmål',

  'hero.title': 'Eldgammel magi, moderne håndverk',
  'hero.subtitle':
    'Håndlagde norrøn-inspirerte varer smidd med tradisjon og bygget for å vare',
  'hero.shopNow': 'Handle nå',
  'hero.ourStory': 'Vår historie',

  'comingSoon.title': 'Kommer snart',
  'comingSoon.homeBody':
    'Vi jobber hardt for å gi deg en fantastisk kolleksjon av håndlagde norrøn-inspirerte produkter. Fra drikkehorn til håndsmidde tilbehør forteller hvert stykke en historie forankret i eldgammel tradisjon.',
  'comingSoon.homeNewsletter':
    'Meld deg på nyhetsbrevet vårt og bli den første som får vite når vi lanserer.',
  'comingSoon.shopBody':
    'Hele kolleksjonen vår forberedes. Kom tilbake snart for håndlagde norrøn-inspirerte drikkehorn, smykker og hjemmedekor.',
  'comingSoon.pageBody':
    'Denne siden forberedes. Kom tilbake snart for håndlagde norrøn-inspirerte drikkehorn, smykker og hjemmedekor.',

  'shop.filter.category': 'Kategori:',
  'shop.filter.allCategories': 'Alle kategorier',
  'shop.filter.sortBy': 'Sorter etter:',
  'shop.sort.default': 'Standard',
  'shop.sort.priceAsc': 'Pris: lav til høy',
  'shop.sort.priceDesc': 'Pris: høy til lav',
  'shop.sort.rating': 'Best vurdert',
  'shop.sort.name': 'Navn A–Å',

  'features.authentic.title': 'Ekte håndverk',
  'features.authentic.body':
    'Hvert stykke er håndlaget med tradisjonelle norrøne teknikker som er gått i arv gjennom generasjoner.',
  'features.love.title': 'Laget med kjærlighet',
  'features.love.body':
    'Hver vare er laget med lidenskap og oppmerksomhet på detaljer for å sikre høyeste kvalitet.',
  'features.shipping.title': 'Verdensomspennende frakt',
  'features.shipping.body':
    'Vi leverer våre norrøne skatter til dører over hele verden med sikker emballasje.',

  'trust.shipping.title': 'Gratis frakt',
  'trust.shipping.body': 'På bestillinger over $75',
  'trust.checkout.title': 'Sikker betaling',
  'trust.checkout.body': 'Stripe og PayPal',
  'trust.returns.title': 'Enkle returer',
  'trust.returns.body': '30 dagers angrerett',
  'trust.handcrafted.title': 'Håndlaget',
  'trust.handcrafted.body': 'Småskalakvalitet',

  'footer.tagline': 'Eldgammel magi, moderne håndverk',
  'footer.description':
    'Norrøn-inspirerte varer laget med tradisjonelle teknikker og moderne kvalitetsstandarder.',
  'footer.shop': 'Butikk',
  'footer.shop.all': 'Alle produkter',
  'footer.shop.horns': 'Drikkehorn',
  'footer.shop.jewelry': 'Smykker',
  'footer.shop.decor': 'Hjemmedekor',
  'footer.help': 'Hjelp',
  'footer.help.faq': 'Vanlige spørsmål',
  'footer.help.contact': 'Kontakt',
  'footer.help.shipping': 'Fraktinfo',
  'footer.help.returns': 'Retur og bytte',
  'footer.company': 'Selskap',
  'footer.company.about': 'Om oss',
  'footer.company.blog': 'Blogg',
  'footer.company.contact': 'Kontakt',
  'footer.copyright': '© {year} Norne Craft. Alle rettigheter reservert.',

  'about.heroTitle': 'Om oss',
  'about.story.title': 'Vår historie',
  'about.story.p1':
    'Norne Craft ble født ut av en dyp lidenskap for norrøn arv og tradisjonelt håndverk. Vi mener at den eldgamle kunsten å lage ting for hånd fortjener å bli bevart og feiret i den moderne verden.',
  'about.story.p2':
    'Hvert stykke i kolleksjonen vår er nøye håndlaget av dyktige håndverkere som deler vår ærefrykt for norrøne tradisjoner. Fra drikkehorn til håndsmidde tilbehør bærer hver gjenstand ånden fra det eldgamle nord.',
  'about.story.p3':
    'Navnet vårt er inspirert av nornene fra norrøn mytologi — vesenene som former skjebnen. Akkurat som de vever skjebnetråder, vever vi sammen eldgamle teknikker med moderne kvalitet for å skape stykker som tåler tidens tann.',
  'about.values.title': 'Våre verdier',
  'about.values.subtitle': 'Hva som driver oss hver dag',
  'about.values.authenticity.title': 'Ekthet',
  'about.values.authenticity.body':
    'Vi holder oss til tradisjonelle norrøne håndverksmetoder, og sørger for at hvert stykke gjenspeiler den ekte ånden i nordisk arv.',
  'about.values.quality.title': 'Kvalitet',
  'about.values.quality.body':
    'Hver vare gjennomgår grundige kvalitetskontroller. Vi bruker kun de fineste naturmaterialene, hentet på en ansvarlig måte.',
  'about.values.sustainability.title': 'Bærekraft',
  'about.values.sustainability.body':
    'Vi er forpliktet til bærekraftig praksis, og bruker etisk hentede materialer og miljøvennlig emballasje.',
  'about.values.community.title': 'Fellesskap',
  'about.values.community.body':
    'Vi bygger et fellesskap av norrøne entusiaster, og deler kunnskap og verdsettelse av eldgammel nordisk kultur.',
  'about.imageAlt': 'Norne Craft-verksted',

  'blog.heroTitle': 'Blogg',
  'blog.section.title': 'Norrøn kunnskap og fortellinger',
  'blog.section.subtitle':
    'Utforsk verdenen av norrønt håndverk og mytologi',
  'blog.readMore': 'Kommer snart',
  'blog.date.comingSoon': 'Kommer snart',
  'blog.cat.history': 'Historie',
  'blog.cat.culture': 'Kultur',
  'blog.cat.guide': 'Veiledning',
  'blog.cat.mythology': 'Mytologi',
  'blog.cat.craft': 'Håndverk',
  'blog.readTime.4': '4 min lesing',
  'blog.readTime.5': '5 min lesing',
  'blog.readTime.6': '6 min lesing',
  'blog.readTime.7': '7 min lesing',
  'blog.readTime.8': '8 min lesing',
  'blog.post.1.title': 'Kunsten med vikingdrikkehorn',
  'blog.post.1.excerpt':
    'Oppdag den rike historien bak vikingdrikkehorn og hvordan de ble laget av norrøne håndverkere for mange århundrer siden.',
  'blog.post.2.title': 'Norrøne runer: Maktens symboler',
  'blog.post.2.excerpt':
    'Lær om Eldre Futhark-runene, deres betydninger, og hvordan de ble brukt i eldgammel norrøn kultur.',
  'blog.post.3.title': 'Slik tar du vare på hornkruset ditt',
  'blog.post.3.excerpt':
    'Viktige tips og triks for å vedlikeholde drikkehornet ditt slik at det varer i generasjoner.',
  'blog.post.4.title': 'Nornene: Skjebnens vevere',
  'blog.post.4.excerpt':
    'Utforsk mytologien om nornene, de tre vesenene som former skjebnen til guder og mennesker i norrøn legende.',
  'blog.post.5.title': 'Tradisjonelt norrønt trearbeid',
  'blog.post.5.excerpt':
    'Et dypdykk i trearbeidsteknikkene som ble brukt av vikinghåndverkere for å skape fantastiske kunstverk.',
  'blog.post.6.title': 'Vikinggjestebud: Mat og drikke',
  'blog.post.6.excerpt':
    'Hva spiste og drakk vikingene? Utforsk de kulinariske tradisjonene til det norrøne folket.',
  'blog.aria.comingSoon': '{title} — kommer snart',

  'contact.heroTitle': 'Kontakt oss',
  'contact.getInTouch.title': 'Ta kontakt',
  'contact.getInTouch.body':
    'Har du et spørsmål om produktene våre eller ønsker å bestille noe spesialtilpasset? Vi vil gjerne høre fra deg!',
  'contact.info.email': 'E-post',
  'contact.info.location': 'Sted',
  'contact.info.locationValue': 'Norrøne land, Skandinavia',
  'contact.info.hours': 'Åpningstider',
  'contact.info.hoursValue': 'Man – fre: 09:00 – 18:00',
  'contact.form.name': 'Fullt navn',
  'contact.form.namePlaceholder': 'Navnet ditt',
  'contact.form.email': 'E-postadresse',
  'contact.form.emailPlaceholder': 'din@epost.no',
  'contact.form.subject': 'Emne',
  'contact.form.subjectSelect': 'Velg et emne',
  'contact.form.subject.general': 'Generell henvendelse',
  'contact.form.subject.order': 'Spørsmål om bestilling',
  'contact.form.subject.custom': 'Spesialbestilling',
  'contact.form.subject.wholesale': 'Engros',
  'contact.form.subject.other': 'Annet',
  'contact.form.message': 'Melding',
  'contact.form.messagePlaceholder': 'Fortell oss hva du trenger...',
  'contact.form.submit': 'Send melding',
  'contact.form.success':
    'Takk for meldingen din! Vi tar kontakt med deg så snart som mulig.',

  'faq.heroTitle': 'Vanlige spørsmål',
  'faq.section.title': 'Vanlige spørsmål',
  'faq.section.subtitle':
    'Finn svar på vanlige spørsmål om produktene og tjenestene våre',
  'faq.cat.products': 'Produkter',
  'faq.cat.shipping': 'Bestillinger og frakt',
  'faq.cat.returns': 'Retur og stell',
  'faq.q.foodSafe.q': 'Er drikkehornene deres trygge for mat og drikke?',
  'faq.q.foodSafe.a':
    'Ja! Alle drikkehornene våre er grundig rengjort, polert og forseglet med et matgodkjent belegg, slik at de er helt trygge å drikke fra.',
  'faq.q.materials.q': 'Hvilke materialer bruker dere?',
  'faq.q.materials.a':
    'Vi bruker etisk hentede naturmaterialer, blant annet ekte oksehorn, bærekraftig høstet tre, håndsmidde metaller og naturlig lær. Hvert materiale velges nøye ut fra kvalitet og ekthet.',
  'faq.q.handmade.q': 'Er produktene håndlagde?',
  'faq.q.handmade.a':
    'Ja, hvert stykke er håndlaget av dyktige håndverkere. Fordi produktene våre er håndlagde, er små variasjoner i farge, størrelse og mønster normalt og gjør hvert stykke unikt.',
  'faq.q.shipTime.q': 'Hvor lang tid tar frakten?',
  'faq.q.shipTime.a':
    'Innenlandske bestillinger kommer vanligvis frem innen 5–7 virkedager. Internasjonal frakt tar 10–20 virkedager avhengig av sted. Ekspressfrakt er tilgjengelig i kassen.',
  'faq.q.intl.q': 'Sender dere internasjonalt?',
  'faq.q.intl.a':
    'Ja, vi sender over hele verden! Fraktkostnader og leveringstid varierer etter sted. Alle internasjonale bestillinger pakkes nøye for å sikre trygg levering.',
  'faq.q.track.q': 'Kan jeg spore bestillingen min?',
  'faq.q.track.a':
    'Absolutt! Når bestillingen din sendes, mottar du en e-post med et sporingsnummer slik at du kan følge pakken hele veien.',
  'faq.q.return.q': 'Hva er returvilkårene deres?',
  'faq.q.return.a':
    'Vi tilbyr 30 dagers returrett for ubrukte varer i originalemballasjen. Spesialbestillinger kan ikke refunderes. Vennligst kontakt oss for å starte en retur.',
  'faq.q.care.q': 'Hvordan tar jeg vare på drikkehornet mitt?',
  'faq.q.care.a':
    'Håndvask med varmt vann og mild såpe. Ikke bruk oppvaskmaskin eller mikrobølgeovn. Unngå varm væske over 60 grader Celsius. Smør på et tynt lag matgodkjent olje av og til for å bevare overflaten.',
  'faq.q.custom.q': 'Tilbyr dere spesialbestillinger?',
  'faq.q.custom.a':
    'Ja! Vi elsker å lage spesialtilpassede stykker. Enten det er en personlig gravering eller en skreddersydd design — ta kontakt med ideen din, så jobber vi sammen for å virkeliggjøre den.',
};
