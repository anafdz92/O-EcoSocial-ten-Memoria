import vigo from "./../images/vigo.jpg";
import mulleres from "./../images/mulleres.jpg";
import prestige from "./../images/prestige.jpg";
import alcoa from "./../images/alcoa.jpg";
import eume from "./../images/eume.jpg";
import irixo from "./../images/irixo.jpg";
import corcoesto from "./../images/corcoesto.jpeg";
const conflicts = [
  {
    id: 1,
    year: "1974",
    name: "Primeiro plan de extracción de Fenosa en Encrobas",
    location: "Cerceda A Coruña",
    what:
      "Fenosa merca por 900 millons de pesetas a concesión dunha mina de Lignito no val das Encrobas. Nace a sociedade `Lignitos de Meirama, S.A. Nese verán o consello de ministros presidido por Franco aproba un decreto de utilidade pública e declara de interés preferente o enclave da mina, autorizando a empresa a expropiación forzosa pola vía de urxencia`",
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
    what:
      "O petrolero Prestige sofre unha vía de auga a 28 millas da costa de Fisterra. A Madrugada do 19 de novembro partiuse en dous afundindose cunha carga de 77.000t de crudo que provocarían un dos maiores desastres ecosociais da Galiza. ",
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
    what:
      "O monocultivo de especies forestais pirófitas coma o eucalipto (das que son grandes beneficiarios empresas como o Grupo Ence ou Grupo Finsa) xunto ao despoboamento rural e a emerxencia climática, sentaron as bases para unha das vagas de incendios máis importantes dos últimos anos que en dúas semanas acabaron cunha superficie de máis de 70.000 km cuadrados",
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
    what:
      " Despóis de meses de negociacións, a fábrica de Aluminios de Alcoa-San Cibrao péchase en banda rexeitando a venda a compañía de Liberty House e o ofrecemento do estado para facerse coa planta. Tras semanas de folga indefinida por parte dxs traballadores, e o bloqueo da circulación da producción, a compañía termina por executar os ERES poñendo na rúa a máis de 500 traballadorxs. Non debemos esquecer que Alcoa ten unha débeda ecolóxica ca Mariña en forma de balsa de lodos tóxicos, e o ecoloxismo debe por suposto denunciar esta realidade, máis tamén plantexar alternativas de emprego sostible. A deslocalización de Alcoa é un claro exemplo de dumping ambiental onde a industria desplázase para abaratar custos en recursos e residuos emitidos ao medio ambiente. Nesta operación as clases traballadoras pagan as consecuencias ca perda do seu emprego. A decisión de Alcoa de parar a producción e despedir a 524 traballadores queda agora en máns do Tribunal Superior de xustiza de Galiza.",
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
    what:
      "A Xunta declara a 'situación de emerxencia' e mantén a prohibición do consumo de auga en Pontedeume mentres pide responsabilidades a Endesa pola xestión do embalse do río, emplazado en territorio de Parque Natural. Este non é un feito illado, a contaminación, degradación e vertidos “crónicos” son continuos no Eume e en moitos ríos con vertidos puntuais agudos e graves. A propia Augas de Galicia no Plan hidrolóxico Galicia-Costa 2015-2021 afirmaba que o 21% das masas superficiais naturais de auga tiñan un estado ecolóxico entre moderado, deficiente ou malo.",
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
    what:
      "A resposta da veciñanza e as manifestacións multitudinarias en contra do proxecto de Sogama para instalar unha Incineradora de Residuos en o Irixo, saldarase tras case un ano de loita ca derogación do proxecto por parte da Xunta. A resposta social dará lugar a unha reforma do plan de residuos sólidos de Galicia e a ampliación da incineradora de Cerceda.",
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
    name: "A minera de Corcoesto perde a batalla Xudicial",
    location: "Cabana de Bergantiños, A Coruña",
    what:
      "Despóis de máis de cinco anos de loita veciñal contra o proxecto de Megaminaría da canadense Edgewater a xustiza respalda a decisión da Xunta de paralizar a mina de ouro proxectada en Corcoesto. Xa en 2020 o Estado Español gañou en parís a arbitraxe que mantiña contra a empresa, así, o tribunal desestimaba a reclamación da minera en pro dunha compensación relativa a fase de estudos previos do proxecto",
    links: [
      "https://galicia.economiadigital.es/directivos-y-empresas/la-ultima-derrota-de-la-minera-de-corcoesto-naufraga-con-el-arbitraje_20056959_102.html",
    ],
    url: corcoesto,
    date: "15/03/2019",
    imgFont:
      "https://www.galiciapress.es/texto-diario/mostrar/1357004/supremo-avala-negativa-xunta-proyecto-corcoesto-minera-agota-via-judicial",
  },
];

export default conflicts;
