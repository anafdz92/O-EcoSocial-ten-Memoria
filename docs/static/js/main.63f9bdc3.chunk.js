(this["webpackJsonpmy-react-app"]=this["webpackJsonpmy-react-app"]||[]).push([[0],{19:function(e,a,t){e.exports=t.p+"static/media/vigo.f3e1c4d0.jpg"},20:function(e,a,t){e.exports=t.p+"static/media/mulleres.f50a2348.jpg"},21:function(e,a,t){e.exports=t.p+"static/media/prestige.81d9b430.jpg"},22:function(e,a,t){e.exports=t.p+"static/media/javiota.778c3762.jpg"},23:function(e,a,t){e.exports=t(35)},34:function(e,a,t){},35:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(17),c=t.n(r),o=t(3),i=t(7),s=t(1),m=t(11),u=t.n(m),d=(t(31),function(e){var a=e.conflicts.sort((function(e,a){return a.year-e.year})).map((function(e){return l.a.createElement(u.a,{animateIn:"fadeIn",animateOut:"fadeOut",duration:"1s"},l.a.createElement("li",{key:e.id},l.a.createElement("div",null,l.a.createElement("time",null,e.year),l.a.createElement("p",null," ",e.name),l.a.createElement("p",null,e.location),l.a.createElement(o.b,{to:"/line/".concat(e.id)},l.a.createElement("button",{className:"buttonPink"},l.a.createElement("i",{class:"fas fa-info-circle"}))))))}));return l.a.createElement("div",{className:"line"},l.a.createElement("ul",{className:"dotList"},a))}),p=Object(s.f)((function(e){console.log(e);var a=e.conflict.links.map((function(e,a){return l.a.createElement("li",{key:a},l.a.createElement("a",{href:e},e))}));return l.a.createElement("article",{className:"modal"},l.a.createElement("div",{className:"content"},l.a.createElement(o.b,{to:"/"},l.a.createElement("button",{className:"close"},l.a.createElement("i",{class:"fas fa-times"}))),l.a.createElement("div",{className:"info"},l.a.createElement("div",null,l.a.createElement("h2",null,e.conflict.name)),l.a.createElement("div",{className:"imgContainer"},l.a.createElement("img",{src:e.conflict.url,alt:e.conflict.name,className:"eventImg"})),l.a.createElement("ul",{className:"modalList"},l.a.createElement("li",null,"Ano: ",e.conflict.year),l.a.createElement("li",null,"Lugar: ",e.conflict.location),l.a.createElement("li",null,"O que: ",e.conflict.what),l.a.createElement("ul",{className:"links"},"Enlaces: ",a)))))})),E=t(19),f=t.n(E),v=t(20),h=t.n(v),b=t(21),N=t.n(b),g=[{id:1,year:"1974",name:"Primeiro plan de extracci\xf3n de Fenosa en Encrobas",location:"Cerceda A Coru\xf1a",what:"Fenosa merca por 900 millons de pesetas a concesi\xf3n dunha mina de Lignito no val das Encrobas. Nace a sociedade `Lignitos de Meirama, S.A. Nese ver\xe1n o consello de ministros presidido por Franco aproba un decreto de utilidade p\xfablica e declara de inter\xe9s preferente o enclave da mina, autorizando a empresa a expropiaci\xf3n forzosa pola v\xeda de urxencia`",links:["https://www.youtube.com/watch?v=LJqJA2inpko"],url:h.a},{id:2,year:"2002",name:"Desastre do Prestige",location:"Costa de Fisterra",what:"O petrolero Prestige sofre unha v\xeda de auga a 28 millas da costa de Fisterra. A Madrugada do 19 de novembro partiuse en dous afundindose cunha carga de 77.000t de crudo que provocar\xedan un dos maiores desastres ecosociais da Galiza. ",links:[" https://plataformanuncamais.wordpress.com/","https://www.udc.es/dep/ps/grupo/varios/prest_es.pdf"],url:N.a},{id:3,year:"2017",name:"Vaga de Incendios",location:"Provincias de Ourense e Pontevedra",what:"O monocultivo de especies forestais pir\xf3fitas coma o eucalipto (das que son grandes beneficiarios empresas como o Grupo Ence ou Grupo Finsa) xunto ao despoboamento rural e a emerxencia clim\xe1tica, sentaron as bases para unha das vagas de incendios m\xe1is importantes dos \xfaltimos anos que en d\xfaas semanas acabaron cunha superficie de m\xe1is de 70.000 km cuadrados",links:["https://www.lavanguardia.com/vida/20171019/432157474162/industria-fuego-galicia-xabier-vazquez-pumarino.html"],url:f.a}],x=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("form",{className:"form"},l.a.createElement("label",{htmlfor:"date",className:"filter"},"FILTRAR POR ANO"),l.a.createElement("input",{type:"text",id:"date",name:"date",placeholder:"Busca aqu\xed",onChange:function(a){e.handleFilter({value:a.target.value,key:"number"})}})))},y=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("form",{className:"form"},l.a.createElement("label",{htmlfor:"place",className:"filter"},"FILTRAR POR LUGAR"),l.a.createElement("input",{type:"text",id:"place",name:"place",placeholder:"Busca aqu\xed",onChange:function(a){e.handleFilter({value:a.target.value,key:"place"})}})))},C=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("form",{className:"form"},l.a.createElement("label",{htmlfor:"place",className:"filter"},"PALABRA CHAVE"),l.a.createElement("input",{type:"text",id:"place",name:"place",placeholder:"Busca aqu\xed",onChange:function(a){e.handleFilter({value:a.target.value,key:"word"})}})))},O=function(e){var a=Object(n.useState)(""),t=Object(i.a)(a,2),r=t[0],c=t[1],o=Object(n.useState)(""),s=Object(i.a)(o,2),m=s[0],u=s[1],p=Object(n.useState)(""),E=Object(i.a)(p,2),f=E[0],v=E[1],h=Object(n.useState)(!1),b=Object(i.a)(h,2),N=b[0],O=b[1],F=Object(n.useState)(!1),w=Object(i.a)(F,2),j=w[0],q=w[1],k=function(e){console.log("manejando los filtros",e),"number"===e.key?c(e.value):"place"===e.key?u(e.value):"word"===e.key&&v(e.value)},A=g.filter((function(e){return e.year.includes(r)})).filter((function(e){return e.location.toUpperCase().includes(m.toUpperCase())})).filter((function(e){return e.what.toUpperCase().includes(f.toUpperCase())})),P="buttonFilter",L="hide";return!0===N&&(P="hide"),!0===j&&(L="filterContainer"),l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"mainList"},l.a.createElement("div",{className:"animate"},l.a.createElement("h1",{className:"title"}," O EcoSocial ten Memoria ")),l.a.createElement("div",null,l.a.createElement("button",{className:P,onClick:function(){O(!N),q(!j),console.log(N)}},l.a.createElement("p",null,"Filtrar"),l.a.createElement("i",{class:"fas fa-sort"}))),l.a.createElement("div",{className:L},l.a.createElement("button",{className:"close"},l.a.createElement("i",{class:"fas fa-times"})),l.a.createElement(x,{handleFilter:k}),l.a.createElement(y,{handleFilter:k}),l.a.createElement(C,{handleFilter:k})),l.a.createElement(d,{conflicts:A})))},F=t(22),w=t.n(F),j=function(e){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"projectContainer"},l.a.createElement("div",{className:"typewriter"},l.a.createElement("h3",null," O Proxecto")),l.a.createElement("div",{className:"quote"},l.a.createElement("p",null,"\u201cExiste un mapa de aldeas esquecidas que morre todas as ma\xf1\xe1s\u201d."),l.a.createElement("p",null,"Miguel Anxo Fern\xe1n Vello.")),l.a.createElement("div",{className:"imgCont"},l.a.createElement("img",{src:w.a,alt:"Xos\xe9 Su\xe1rez",className:"eventImg"})),l.a.createElement("div",{className:"text"},l.a.createElement("p",null,"Este proxecto \xe9 unha t\xe1ctica de resistencia fronte a desmemoria."),l.a.createElement("p",null,"Un arquivo vivo en torno o que reflectir arredor dos conflictos ecol\xf3xicos e sociais que atravesan a nosa hist\xf3ria contempor\xe1nea."),l.a.createElement("p",null,"Unha ollada o pasado para confrontar as loitas do presente."))))},q=function(e){return l.a.createElement("div",{className:"mainContainer"},l.a.createElement("div",{className:"formContainer"},l.a.createElement("div",{className:"typewriter"},l.a.createElement("h3",null,"Contacta")),l.a.createElement("p",null,"Podes colaborar co proxecto envi\xe1ndonos documentaci\xf3n, recursos e informaci\xf3n."),l.a.createElement("p",null,"Recomendaci\xf3ns, correcci\xf3ns e suxesti\xf3ns son sempre benvidas."),l.a.createElement("form",{action:"https://formspree.io/f/mleodvon",method:"post",className:"contactForm"},l.a.createElement("fieldset",{className:"fieldset"},l.a.createElement("legend",null," Sobre ti "),l.a.createElement("div",{className:"formContent"},l.a.createElement("label",{for:"firstName"},"Nome:"),l.a.createElement("input",{className:"inputs",type:"text",name:"name",id:"firstName",placeholder:"Ana Baneira",required:!0})),l.a.createElement("div",null,l.a.createElement("label",{for:"email"},"Email:"),l.a.createElement("input",{className:"inputs",type:"email",name:"email",id:"email",placeholder:"anabaneira@gmail.com",required:!0}))),l.a.createElement("fieldset",{className:"fieldset"},l.a.createElement("legend",null,"Ax\xfadanos a construir Memoria"),l.a.createElement("div",{className:"formContent"},l.a.createElement("label",{for:"date"},"Data:"),l.a.createElement("input",{className:"inputs",type:"date",id:"date",name:"date",value:"2018-07-22",min:"1850-01-01",max:"2020-12-31"})),l.a.createElement("div",null,l.a.createElement("label",{for:"conflict"},"Conflicto:"),l.a.createElement("input",{className:"inputs",type:"text",name:"conflict",id:"conflict",placeholder:"Desastre do Prestige",required:!0})),l.a.createElement("div",{className:"formContent"},l.a.createElement("label",{for:"place"},"Lugar:"),l.a.createElement("input",{className:"inputs",type:"text",name:"place",id:"place",placeholder:"Costa de Fisterra",required:!0})),l.a.createElement("div",{className:"shareContent"},l.a.createElement("label",{for:"memoria"}," Comparte:"),l.a.createElement("textarea",{className:"share",type:"text",name:"memoria",id:"memoria",placeholder:"Adxunta informaci\xf3n de interese",required:!0})),l.a.createElement("div",{className:"formContent"},l.a.createElement("label",{for:"files"},"Documentos:"),l.a.createElement("input",{type:"file",name:"files",id:"files",className:"files"}))),l.a.createElement("button",{className:"button"},l.a.createElement("i",{class:"far fa-paper-plane"})))))},k=Object(s.f)((function(e){var a=Object(n.useState)(g),t=Object(i.a)(a,2),r=t[0];t[1];console.log(r);return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",null,l.a.createElement("nav",{className:"menu"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(o.b,{to:"/"},"Inicio")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/Proxecto"},"O Proxecto")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/Contacta"},"Contacta"))))),l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/",component:O}),l.a.createElement(s.a,{exact:!0,path:"/Proxecto",component:j}),l.a.createElement(s.a,{exact:!0,path:"/Contacta",component:q}),l.a.createElement(s.a,{exact:!0,path:"/line/:id",render:function(e){console.log(e.match.params.id,g);var a=g.find((function(a){return console.log(a.id),a.id===parseInt(e.match.params.id)}));return console.log(a),l.a.createElement(p,{conflict:a})}}),l.a.createElement(s.a,null,"no match")))}));t(34);c.a.render(l.a.createElement(o.a,null,l.a.createElement(k,null)),document.querySelector("#root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.63f9bdc3.chunk.js.map