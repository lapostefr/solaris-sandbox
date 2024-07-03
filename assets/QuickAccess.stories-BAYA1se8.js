import{a}from"./chunk-MZXVCX43-DWuJqIWT.js";import{S as l}from"./QuickAccess-BDEO9Fwr.js";import{S as n}from"./Picture-Bw_qRSk2.js";import"./v4-D8aEg3BZ.js";import"./vue.esm-bundler-DD7xIM0D.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./lazysizes-C_krz_Ug.js";const c=`[
  {
    image?: {
      width?: number,
      height?: number,
      defaultSource: {
        alt?: string,
        url: string,
        mimeType: 'image/jpeg' | 'image/jpg' | 'image/png' | 'image/webp',
        device?: 320 | 640 | 992 | 1280 | 1440 | 1680
      },
      otherSources: [
        {
          alt?: string,
          url: string,
          mimeType: image/jpeg' | 'image/jpg' | 'image/png' | 'image/webp',
          device?: 320 | 640 | 992 | 1280 | 1440 | 1680
        }
      ],
      lazyload?: boolean
    },
    link?: string,
    new?: boolean,
    title?: string
  }
]`,u=[{new:!1,title:"Suivre un colis ou un courrier",link:"https://www.laposte.fr/outils/suivre-vos-envois",image:{defaultSource:{alt:"Suivre un colis ou un courrier",url:"https://via.placeholder.com/200x200",mimeType:"image/jpg"},otherSources:[]}},{new:!1,title:"Trouver un point de contact La Poste",link:"https://localiser.laposte.fr/",image:{defaultSource:{alt:"Trouver un point de contact La Poste",url:"https://via.placeholder.com/200x200",mimeType:"image/jpg"},otherSources:[]}},{new:!1,title:"Consulter les tarifs",link:"https://www.laposte.fr/produits/article/tarifs-consulter-le-catalogue-integral",image:{defaultSource:{alt:"Consulter les tarifs",url:"https://via.placeholder.com/200x200",mimeType:"image/jpg"},otherSources:[]}},{new:!1,title:"Acheter des timbres",link:"https://www.laposte.fr/achat-rapide",image:{defaultSource:{alt:"Acheter des timbres",url:"https://via.placeholder.com/200x200",mimeType:"image/jpg"},otherSources:[]}},{new:!1,title:"Envoyer un recommandé en ligne",link:"https://www.laposte.fr/lettre-recommandee-en-ligne",image:{defaultSource:{alt:"Envoyer un recommandé en ligne",url:"https://via.placeholder.com/200x200",mimeType:"image/jpg"},otherSources:[]}},{new:!1,title:"Envoyer un colis",link:"https://www.laposte.fr/colissimo-en-ligne",image:{defaultSource:{alt:"Envoyer un colis",url:"https://via.placeholder.com/200x200",mimeType:"image/jpg"},otherSources:[]}},{new:!1,title:"Payer les droits de douane",link:"https://www.laposte.fr/frais-droits-douane",image:{defaultSource:{alt:"Payer les droits de douane",url:"https://via.placeholder.com/200x200",mimeType:"image/jpg"},otherSources:[]}},{new:!1,title:"Transférer son courrier",link:"https://www.laposte.fr/changement-adresse-demenagement-reexpedition",image:{defaultSource:{alt:"Transférer son courrier",url:"https://via.placeholder.com/200x200",mimeType:"image/jpg"},otherSources:[]}},{new:!1,title:"Retourner un colis",link:"https://www.laposte.fr/envoyer-retourner-colis-boite-aux-lettres",image:{defaultSource:{alt:"Retourner un colis",url:"https://via.placeholder.com/200x200",mimeType:"image/jpg"},otherSources:[]}}],y={title:"Molecules/Quick Access",argTypes:{button:{description:"The component footer button (optional).",table:{type:{summary:"ButtonProps"}}},quickList:{description:"List of elements for the component.",table:{type:{summary:"Array",detail:c}}}},args:{button:{color:"darkgrey",href:"https://google.com",label:"Tous les services en ligne",target:"_blank",title:"Tous les services en ligne",type:"secondary"}}},e={render:s=>({components:{SolarisQuickAccess:l,SolarisPicture:n},setup(){const i=a("click");return{args:s,elementClick:i}},template:'<div style="max-width:420px;"><SolarisQuickAccess v-bind="args" /></div>'}),args:{button:{color:"darkgrey",href:"https://google.com",label:"Tous les services en ligne",target:"_blank",title:"Tous les services en ligne",type:"secondary"},quickList:u}};var t,r,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisQuickAccess,
      SolarisPicture
    },
    setup() {
      const elementClick = action('click');
      return {
        args,
        elementClick
      };
    },
    template: \`<div style="max-width:420px;"><SolarisQuickAccess v-bind="args" /></div>\`
  }),
  args: {
    button: {
      color: 'darkgrey',
      href: 'https://google.com',
      label: 'Tous les services en ligne',
      target: '_blank',
      title: 'Tous les services en ligne',
      type: 'secondary'
    },
    quickList: quickList
  }
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const v=["QuickAccess"];export{e as QuickAccess,v as __namedExportsOrder,y as default};
