import{d as p,l as c,a as C,b as B,t as n,e as v,c as J,p as T,f as r,h as t}from"./texts-DD3YWNds.js";import{a as R}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as E,a as V,b as X,c as N}from"./FooterBottom-CVBINviq.js";import{S as z,a as H,b as _,c as M}from"./FooterHeadingsList-CxIi7D5v.js";import{S as D}from"./Row-BfwjSzah.js";import{S as O}from"./Picture-BofBnaNi.js";import{r as e}from"./vue.esm-bundler-BiAlgFmf.js";import"./v4-CQkTLCs1.js";import"./Icon-C-Sturzh.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./LogoNew-BfEyZx6H.js";import"./index-a4aneQim.js";import"./iframe-Tb9yYTcJ.js";import"../sb-preview/runtime.js";const q=`[
{
url: string;
text: string
}
]`,I=[{url:"/urlFromProp1",text:"urlProp 1"},{url:"/urlFromProp2",text:"urlProp 2"}],W=[{name:"linkedin",label:"Compte Linkedin La Poste",url:"#"},{name:"instagram",label:"Compte Instagram La Poste",url:"#"},{name:"x",label:"Compte X La Poste",url:"#"},{name:"tiktok",label:"Compte Tiktok La Poste",url:"#"},{name:"facebook",label:"Compte Facebook La Poste",url:"#"},{name:"youtube",label:"Compte Youtube La Poste",url:"#"},{name:"threads",label:"Compte Threads La Poste",url:"#"}],s=`[
  {
    label?: string
    url?: string
    target?: '_blank' | '_self'
  }
]`,Y=`[
  {
    url?: string
    image: {
      defaultSource: {
        width: number
        height: number
        url: string
        alt?: string
        mimeType: string
      }
    }
  }
]`,j=[{title:"Nos services",links:t},{title:"Nos produits",links:t},{title:"Nos tarifs",links:t},{title:"Rubriques",links:t}],G={universe:{description:"The type of the logo.",table:{type:{summary:"part | pro | business | single"},category:"FooterBottom props"},defaultValue:{summary:"part"},control:{type:"select"},options:["part","pro","business","single"]},logoSize:{description:"The type of the logo.",table:{type:{summary:"XXSmall | XSmall | Small | Medium | Large"},category:"FooterBottom props"},defaultValue:{summary:"Large"},control:{type:"select"},options:["XXSmall","XSmall","Small","Medium","Large"]},siteTitle:{control:"text",description:"Add a universe title next to the logo.",table:{type:{summary:"string"},category:"FooterBottom props"}}},pe={title:"Organisms/Footer",argTypes:{altLogo:{description:"Specifies the alternative text for the logo.",table:{type:{summary:"string"},category:"FooterBottom props"},defaultValue:{summary:"La Poste, aller à l'accueil"}},externalLinks:{description:"Add pros links at the bottom footer.",table:{type:{summary:"array",detail:s}}},hasStaticLinks:{description:"To use the static links of the footer legacy.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},moreLinks:{description:"When using the legacy footer, add more links at the bottom footer.",table:{type:{summary:"array",detail:q}}},newLinks:{description:"Add links at the bottom footer.",table:{type:{summary:"array",detail:s}}},newPartners:{description:"Add image for partners.",table:{type:{summary:"array",detail:Y}}},showBackButton:{description:'Show the "Back to top" button.',table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},activeBack:{description:'*Activate the "Back to top" button. This prop is <span style="color:orange">deprecated</span>, use ShowBackButton. *',table:{type:{summary:"boolean"},defaultValue:{summary:"true"},category:"Deprecated"}},borderTop:{description:'*Show a border at the top of the footer.This prop is <span style="color:orange">deprecated</span>*',table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Deprecated"}},...G},args:{altLogo:"La Poste, aller à l'accueil",externalLinks:p,hasStaticLinks:!1,moreLinks:I,newLinks:c,newPartners:[{url:"#",image:{url:"https://placehold.co/50",alt:"Nom Partenaire 2 - aller sur site"}},{url:"#",image:{url:"https://placehold.co/50",alt:"Nom Partenaire 2 - aller sur site"}},{url:"#",image:{url:"https://placehold.co/50",alt:"Nom Partenaire 2 - aller sur site"}}],showBackButton:!0,activeBack:!1,borderTop:!1}},o={render:g=>({components:{SolarisFullFooter:E,SolarisFooterEngagement:V,SolarisRow:D,SolarisFooterHeadingsList:z,SolarisFooterBottom:X,SolarisPicture:O,SolarisFooterApps:H,SolarisFooterAppLink:_,SolarisFooterSocial:M,SolarisFooterCopyright:N},setup(){const m=e(C),d=e(B),u=e(W),y=e(n.copyright),k=e(v),S=e(j),h=e(c),L=e(J),f=e(T),F=e(n.text),b=e(p),x=e(r.apps),A=e(r.connected),P=e(r.engagements),w=R("logoClicked");return{args:g,appLink:m,titleApps:x,apps:d,connected:u,titleConnected:A,engagements:k,titleEngagements:P,headings:S,links:h,logo:L,partner:f,text:F,pros:b,copyright:y,handleLogoClick:w}},template:`
    <div style="margin-top: 50px;">
    <SolarisFullFooter v-bind="args">

      <SolarisFooterEngagement :title="titleEngagements" :engagements="engagements" />

      <SolarisRow>
        <SolarisFooterApps :title="titleApps" :apps="apps" />
        <SolarisFooterAppLink :link="appLink" />
        <SolarisFooterSocial :title="titleConnected" :connected="connected" />
      </SolarisRow>

      <SolarisFooterHeadingsList :headings="headings" />

      <SolarisRow>
        <SolarisFooterCopyright
          :copyright="copyright"
          :logo="logo" />
        <SolarisFooterBottom @logo-clicked="handleLogoClick"
          :altLogo="args.altLogo"
          :site-title="args.siteTitle"
          :logo-size="args.logoSize"
          :universe="args.universe"
          :newPartners="args.newPartners"
          :moreLinks="args.moreLinks"
          :text="text"
          :pros="pros"
          :partner="partner"
          :links="links" />
      </SolarisRow>

    </SolarisFullFooter>
    </div>
  `})};var a,l,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisFullFooter,
      SolarisFooterEngagement,
      SolarisRow,
      SolarisFooterHeadingsList,
      SolarisFooterBottom,
      SolarisPicture,
      SolarisFooterApps,
      SolarisFooterAppLink,
      SolarisFooterSocial,
      SolarisFooterCopyright
    },
    setup() {
      const appLink = ref(allAppsLinkJson);
      const apps = ref(appsArrayJson);
      const connected = ref(connectedJson);
      const copyright = ref(textsJson.copyright);
      const engagements = ref(engagementArray);
      const headings = ref(headingsArray);
      const links = ref(linksJson);
      const logo = ref(logoJson);
      const partner = ref(partnerJson);
      const text = ref(textsJson.text);
      const pros = ref(externalLinksJson);
      const titleApps = ref(title.apps);
      const titleConnected = ref(title.connected);
      const titleEngagements = ref(title.engagements);
      const handleLogoClick = action('logoClicked');
      return {
        args,
        appLink,
        titleApps,
        apps,
        connected,
        titleConnected,
        engagements,
        titleEngagements,
        headings,
        links,
        logo,
        partner,
        text,
        pros,
        copyright,
        handleLogoClick
      };
    },
    template: \`
    <div style="margin-top: 50px;">
    <SolarisFullFooter v-bind="args">

      <SolarisFooterEngagement :title="titleEngagements" :engagements="engagements" />

      <SolarisRow>
        <SolarisFooterApps :title="titleApps" :apps="apps" />
        <SolarisFooterAppLink :link="appLink" />
        <SolarisFooterSocial :title="titleConnected" :connected="connected" />
      </SolarisRow>

      <SolarisFooterHeadingsList :headings="headings" />

      <SolarisRow>
        <SolarisFooterCopyright
          :copyright="copyright"
          :logo="logo" />
        <SolarisFooterBottom @logo-clicked="handleLogoClick"
          :altLogo="args.altLogo"
          :site-title="args.siteTitle"
          :logo-size="args.logoSize"
          :universe="args.universe"
          :newPartners="args.newPartners"
          :moreLinks="args.moreLinks"
          :text="text"
          :pros="pros"
          :partner="partner"
          :links="links" />
      </SolarisRow>

    </SolarisFullFooter>
    </div>
  \`
  })
}`,...(i=(l=o.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const ce=["FullFooter"];export{o as FullFooter,ce as __namedExportsOrder,pe as default};
