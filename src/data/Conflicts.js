import vigo from "./../images/vigo.jpg";
import mulleres from "./../images/mulleres.jpg";
import prestige from "./../images/prestige.jpg";
import alcoa from "./../images/alcoa.jpg";
import eume from "./../images/eume.jpg";
import irixo from "./../images/irixo.jpg";
import corcoesto from "./../images/corcoesto.jpeg";
import tractorada from "./../images/tractorada.jpg";
const conflicts = [
  {
    id: 1,
    year: "1974",
    name: "Primeiro plan de extracción de Fenosa en Encrobas",
    location: "Cerceda A Coruña",
    p1:
      "Fenosa merca por 900 millons de pesetas a concesión dunha mina de Lignito no val das Encrobas. Nace a sociedade `Lignitos de Meirama, S.A. Nese verán o consello de ministros presidido por Franco aproba un decreto de utilidade pública e declara de interés preferente o enclave da mina, autorizando a empresa a expropiación forzosa pola vía de urxencia`",
    p2: "",
    p3: "",
    links: ["https://www.youtube.com/watch?v=LJqJA2inpko"],
    url: mulleres,
    imgFont:
      "https://www.lavozdegalicia.es/album/enfoque/2019/01/16/as-encrobas/01101547650588172615640.htm",
    date: "1977",
  },
  {
    id: 2,
    year: "2002",
    name: "O Prestige",
    location: "Costa de Fisterra",
    p1:
      "O petrolero Prestige sofre unha vía de auga a 28 millas da costa de Fisterra. A Madrugada do 19 de novembro partiuse en dous afundindose cunha carga de 77.000t de crudo que provocarían un dos maiores desastres ecosociais da Galiza. ",
    p2: "",
    p3: "",
    links: [
      " https://plataformanuncamais.wordpress.com/",
      "https://www.udc.es/dep/ps/grupo/varios/prest_es.pdf",
    ],
    url: prestige,
    imgFont: "https://prestige.lavozdegalicia.es/",
    date: "13/11/2002",
  },
  {
    id: 3,
    year: "2017",
    name: "Vaga de Incendios",
    location: "Provincias de Ourense e Pontevedra",
    p1:
      "O monocultivo de especies forestais pirófitas coma o eucalipto (das que son grandes beneficiarios empresas como o Grupo Ence ou Grupo Finsa) xunto ao despoboamento rural e a emerxencia climática, sentaron as bases para unha das vagas de incendios máis importantes dos últimos anos que en dúas semanas acabaron cunha superficie de máis de 70.000 km cuadrados",
    p2: "",
    p3: "",
    links: [
      "https://www.lavanguardia.com/vida/20171019/432157474162/industria-fuego-galicia-xabier-vazquez-pumarino.html",
    ],
    url: vigo,
    imgFont:
      "https://elcierredigital.com/factor-ambiental/953278748/causas-cerradas-incendios-galicia.html",
    date: "15/10/2017",
  },
  {
    id: 4,
    year: "2020",
    name: "Folga dos Traballadores de Alcoa",
    location: "Cervo, Lugo",
    p1:
      " Despóis de meses de negociacións, a fábrica de Aluminios de Alcoa-San Cibrao péchase en banda rexeitando a venda a compañía de Liberty House e o ofrecemento do estado para facerse coa planta. Tras semanas de folga indefinida por parte dxs traballadores, e o bloqueo da circulación da producción, a compañía termina por executar os ERES poñendo na rúa a máis de 500 traballadorxs.",
    p2:
      " Non debemos esquecer que Alcoa ten unha débeda ecolóxica ca Mariña en forma de balsa de lodos tóxicos, e o ecoloxismo debe por suposto denunciar esta realidade, máis tamén plantexar alternativas de emprego sostible. A deslocalización de Alcoa é un claro exemplo de dumping ambiental onde a industria desplázase para abaratar custos en recursos e residuos emitidos ao medio ambiente. ",

    p3:
      "Nesta operación as clases traballadoras pagan as consecuencias ca perda do seu emprego. A decisión de Alcoa de parar a producción e despedir a 524 traballadores queda agora en máns do Tribunal Superior de xustiza de Galiza.",
    links: [
      "https://www.nosdiario.gal/articulo/economia/goberno-estatal-desbota-expropiar-nacionalizar-alcoa/20201028161354107819.html",
    ],
    url: alcoa,
    date: "4 / 10 / 2020",
    imgFont:
      "https://www.lavanguardia.com/economia/20201004/483849548508/trabajadores-fabrica-san-cibrao-alcoa-huelga-indefinida.html",
  },
  {
    id: 5,
    year: "2020",
    name: "Verteduras no río Eume",
    location: "Pontedeume, A Coruña",
    p1:
      "A Xunta declara a 'situación de emerxencia' e mantén a prohibición do consumo de auga en Pontedeume mentres pide responsabilidades a Endesa pola xestión do embalse do río, emplazado en territorio de Parque Natural.",
    p2:
      "Este non é un feito illado, a contaminación, degradación e vertidos “crónicos” son continuos no Eume e en moitos ríos con vertidos puntuais agudos e graves. A propia Augas de Galicia no Plan hidrolóxico Galicia-Costa 2015-2021 afirmaba que o 21% das masas superficiais naturais de auga tiñan un estado ecolóxico entre moderado, deficiente ou malo.",
    p3: "",
    links: [
      "https://www.nosdiario.gal/articulo/social/investigan-posibel-vertedura-rio-eume/20201007192518106445.html",
    ],
    url: eume,
    date: "15/10/2020",
    imgFont:
      "https://www.elidealgallego.com/articulo/galicia/pontedeume-xunta-contaminacion-rio-eume/20201015135031447169.html",
  },
  {
    id: 6,
    year: "2012",
    name: "Loita contra a Incineradora de Sogama",
    location: "Irixo, Lalín, Ourense",
    p1:
      "A resposta da veciñanza e as manifestacións multitudinarias en contra do proxecto de Sogama para instalar unha Incineradora de Residuos en o Irixo, saldarase tras case un ano de loita ca derogación do proxecto por parte da Xunta.",
    p2:
      "A resposta social dará lugar a unha reforma do plan de residuos sólidos de Galicia e a ampliación da incineradora de Cerceda.",
    p3: "",
    links: [
      "https://www.farodevigo.es/galicia/2012/04/22/centenares-manifestantes-lalin-incineradora-o-17663692.html",
    ],
    url: irixo,
    date: "23/4/2012",
    imgFont:
      "https://www.ecoticias.com/residuos-reciclaje/64746/Centenares-personas-manifiestan-Lalin-incineradora-O-Irixo",
  },
  {
    id: 7,
    year: "2020",
    name: "A mineira de Corcoesto perde a batalla Xudicial",
    location: "Cabana de Bergantiños, A Coruña",
    p1:
      "Despóis de máis de cinco anos de loita veciñal contra o proxecto de Megaminaría da canadense Edgewater a xustiza respalda a decisión da Xunta de paralizar a mina de ouro proxectada en Corcoesto.",
    p2:
      "Xa en 2020 o Estado Español gañou en París a arbitraxe que mantiña contra a empresa, así, o tribunal desestimaba a reclamación da minera en pro dunha compensación relativa a fase de estudos previos do proxecto.",
    p3: "",
    links: [
      "https://galicia.economiadigital.es/directivos-y-empresas/la-ultima-derrota-de-la-minera-de-corcoesto-naufraga-con-el-arbitraje_20056959_102.html",
    ],
    url: corcoesto,
    date: "15/03/2019",
    imgFont:
      "https://www.galiciapress.es/texto-diario/mostrar/1357004/supremo-avala-negativa-xunta-proyecto-corcoesto-minera-agota-via-judicial",
  },
  {
    id: 8,
    year: "2015",
    name: "Tractorada da muralla",
    location: "Lugo",
    p1:
      " O 3 de setembro de 2015, mais de 1.000 tractores invaden a ciudade de Lugo nunha nova protesta polos baixos prezos do leite.",
    p2:
      "En decembro de 2016, tras a ruptura do `Acordo lácteo` firmado coa Industria en Madrid, o sector funda o colectivo Agromuralla e volta as rúas, desta vez para bloquear a cidade lucense durante máis dun mes. `Foi un movemento moi soado na zoa, cos seus retractores coma sempre, xa que cortar a ronda da muralla durante tantas semanas é como quitarlle a cidade a sua arteria principal, e todo o comercio en Lugo depende desta vía. Ainda así moita xente entendeu o porqué da loita do sector leiteiro e mostrou o seu apoio`. ",
    p3: "`Foi un movemento moi soado na zoa, cos seus retractores coma sempre, xa que cortar a ronda da muralla durante tantas semanas é como quitarlle a cidade a sua arteria principal, e todo o comercio en Lugo depende desta vía. Ainda así moita xente entendeu o porqué da loita do sector leiteiro e mostrou o seu apoio. Imaxina todas as festas do nadal decoradas con tractores!` (Laura, colaboradora)" ,
    links: [
      "https://www.elprogreso.es/articulo/lugo/unos-mil-tractores-colapsan-hoy-la-ronda-da-muralla-durante-cinco-horas/20150903000000356525.html","https://esradio.libertaddigital.com/galicia/2015-09-04/unos-quinientos-tractores-siguen-cercando-la-muralla-de-lugo-1276556310/amp.html","https://www.campogalego.es/los-ganaderos-retiraran-este-viernes-todos-los-tractores-de-la-muralla-de-lugo/"
    ],
    url: tractorada,
    date: "3/09/2015",
    imgFont:
      "",
  },
];

export default conflicts;
