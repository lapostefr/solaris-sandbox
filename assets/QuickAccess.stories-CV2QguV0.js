import{a as l}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as a}from"./QuickAccess-B0nCaJ1T.js";import{S as n}from"./Picture-Bv3IzpnC.js";import"./v4-CQkTLCs1.js";import"./vue.esm-bundler-BiAlgFmf.js";import"./Button-CxIFeNFW.js";import"./Icon-C-Sturzh.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Loader-DHIAU4Qg.js";import"./iframe-BnG0fEMb.js";import"../sb-preview/runtime.js";const c=`[
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
]`,u=[{new:!1,title:"Suivre un colis ou un courrier",link:"https://www.laposte.fr/outils/suivre-vos-envois",image:{defaultSource:{alt:"Suivre un colis ou un courrier",url:"https://placehold.co/200x200",mimeType:"image/jpg"},otherSources:[]}},{new:!1,title:"Trouver un point de contact La Poste",link:"https://localiser.laposte.fr/",image:{defaultSource:{alt:"Trouver un point de contact La Poste",url:"https://placehold.co/200x200",mimeType:"image/jpg"},otherSources:[]}},{new:!1,title:"Consulter les tarifs",link:"https://www.laposte.fr/produits/article/tarifs-consulter-le-catalogue-integral",image:{defaultSource:{alt:"Consulter les tarifs",url:"https://placehold.co/200x200",mimeType:"image/jpg"},otherSources:[]}},{new:!1,title:"Acheter des timbres",link:"https://www.laposte.fr/achat-rapide",image:{defaultSource:{alt:"Acheter des timbres",url:"https://placehold.co/200x200",mimeType:"image/jpg"},otherSources:[]}},{new:!1,title:"Envoyer un recommandé en ligne",link:"https://www.laposte.fr/lettre-recommandee-en-ligne",image:{defaultSource:{alt:"Envoyer un recommandé en ligne",url:"https://placehold.co/200x200",mimeType:"image/jpg"},otherSources:[]}},{new:!1,title:"Envoyer un colis",link:"https://www.laposte.fr/colissimo-en-ligne",image:{defaultSource:{alt:"Envoyer un colis",url:"https://placehold.co/200x200",mimeType:"image/jpg"},otherSources:[]}},{new:!1,title:"Payer les droits de douane",link:"https://www.laposte.fr/frais-droits-douane",image:{defaultSource:{alt:"Payer les droits de douane",url:"https://placehold.co/200x200",mimeType:"image/jpg"},otherSources:[]}},{new:!1,title:"Transférer son courrier",link:"https://www.laposte.fr/changement-adresse-demenagement-reexpedition",image:{defaultSource:{alt:"Transférer son courrier",url:"https://placehold.co/200x200",mimeType:"image/jpg"},otherSources:[]}},{new:!1,title:"Retourner un colis",link:"https://www.laposte.fr/envoyer-retourner-colis-boite-aux-lettres",image:{defaultSource:{alt:"Retourner un colis",url:"https://placehold.co/200x200",mimeType:"image/jpg"},otherSources:[]}}],b={title:"Molecules/Quick Access",argTypes:{button:{description:"The component footer button (optional).",table:{type:{summary:"ButtonProps"}}},quickList:{description:"List of elements for the component.",table:{type:{summary:"Array",detail:c}}}},args:{button:{color:"darkgrey",href:"https://google.com",label:"Tous les services en ligne",target:"_blank",title:"Tous les services en ligne",type:"secondary"}}},e={render:s=>({components:{SolarisQuickAccess:a,SolarisPicture:n},setup(){const i=l("click");return{args:s,elementClick:i}},template:'<div style="max-width:420px;"><SolarisQuickAccess v-bind="args" /></div>'}),args:{button:{color:"darkgrey",href:"https://google.com",label:"Tous les services en ligne",target:"_blank",title:"Tous les services en ligne",type:"secondary"},quickList:u}};var t,r,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
    template: '<div style="max-width:420px;"><SolarisQuickAccess v-bind="args" /></div>'
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
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const T=["QuickAccess"];export{e as QuickAccess,T as __namedExportsOrder,b as default};
