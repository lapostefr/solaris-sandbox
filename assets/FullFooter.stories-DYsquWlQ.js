import{d as r,l as s,a as J,b as T,t as a,e as R,c as E,p as q,f as o,h as t}from"./texts-DRpTSM7O.js";import{S as C,a as V,b as D,c as H}from"./FooterBottom-BlQeAYBw.js";import{S as _}from"./Row-BNJDXJUe.js";import{S as $}from"./Picture-KDXJRyj_.js";import{r as e}from"./vue.esm-bundler-DD7xIM0D.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./lazysizes-DRnWiMDM.js";const j=`[
{
url: string;
text: string
}
]`,m=[{url:"/urlFromProp1",text:"urlProp 1"},{url:"/urlFromProp2",text:"urlProp 2"}],N=[{name:"facebook",label:"Facebook",url:"#"},{name:"twitter",label:"Twitter",url:"#"},{name:"instagram",label:"Instagram",url:"#"},{name:"youtube",label:"Youtube",url:"#"}],i=[{url:"#",image:{width:50,height:50,defaultSource:{url:"https://via.placeholder.com/50",alt:"alt quelconque 1",mimeType:"image/jpeg"}}},{url:"#",image:{width:50,height:50,defaultSource:{url:"https://via.placeholder.com/50",alt:"alt quelconque 2",mimeType:"image/jpeg"}}},{url:"#",image:{width:50,height:50,defaultSource:{url:"https://via.placeholder.com/50",alt:"alt quelconque 3",mimeType:"image/jpeg"}}}],l=`[
  {
    label?: string
    url?: string
    target?: '_blank' | '_self'
  }
]`,O=`[
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
]`,I=[{title:"Nos services",links:t},{title:"Nos produits",links:t},{title:"Nos tarifs",links:t},{title:"Rubriques",links:t}],Q={title:"Organisms/Footer",argTypes:{externalLinks:{description:"Add pros links at the bottom footer.",table:{type:{summary:"array",detail:l}}},hasStaticLinks:{description:"To use the static links of the footer legacy.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},moreLinks:{description:"When using the legacy footer, add more links at the bottom footer.",table:{type:{summary:"array",detail:j}}},newLinks:{description:"Add links at the bottom footer.",table:{type:{summary:"array",detail:l}}},newLogo:{description:"Use the new logo design for fullFooter",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},newPartners:{description:"Add image for partners.",table:{type:{summary:"array",detail:O}}},showBackButton:{description:'Show the "Back to top" button.',table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},universe:{description:"The type of the logo.",table:{type:{summary:["part","pro","business","single"]}},defaultValue:{summary:"part"},control:{type:"select"},options:["part","pro","business","single"]},activeBack:{description:'*Activate the "Back to top" button. This prop is <span style="color:orange">deprecated</span>, use ShowBackButton. *',table:{type:{summary:"boolean"},defaultValue:{summary:"true"},category:"Deprecated"}},borderTop:{description:'*Show a border at the top of the footer.This prop is <span style="color:orange">deprecated</span>*',table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Deprecated"}}},args:{externalLinks:r,hasStaticLinks:!1,moreLinks:m,newLinks:s,newLogo:!0,showBackButton:!0,universe:"part",activeBack:!1,borderTop:!1}},n={render:u=>({components:{SolarisFullFooter:C,SolarisFooterEngagement:V,SolarisRow:_,SolarisFooterHeadingsList:D,SolarisFooterBottom:H,SolarisPicture:$},setup(){const d=e(J),k=e(T),h=e(N),y=e(a.copyright),f=e(R),S=e(I),w=e(s),L=e(E),b=e(q),F=e(i),x=e(a.text),v=e(r),A=e(o.apps),B=e(o.connected),P=e(o.engagements);return{args:u,appLink:d,titleApps:A,apps:k,connected:h,titleConnected:B,engagements:f,titleEngagements:P,headings:S,links:w,logo:L,partner:b,newPartners:F,text:x,pros:v,copyright:y}},template:`
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
        <SolarisFooterBottom
          :newLogo="args.newLogo"
          universe="part"
          :newPartners="args.newPartners"
          :moreLinks="args.moreLinks"
          :text="text"
          :pros="pros"
          :partner="partner"
          :links="links" />
      </SolarisRow>

    </SolarisFullFooter>
    </div>
  `}),args:{externalLinks:r,hasStaticLinks:!1,moreLinks:m,newLinks:s,newLogo:!0,newPartners:i,showBackButton:!0,universe:"part",activeBack:!1,borderTop:!1}};var p,c,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisFullFooter,
      SolarisFooterEngagement,
      SolarisRow,
      SolarisFooterHeadingsList,
      SolarisFooterBottom,
      SolarisPicture
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
      const newPartners = ref(newPartnersJson);
      const text = ref(textsJson.text);
      const pros = ref(externalLinksJson);
      const titleApps = ref(title.apps);
      const titleConnected = ref(title.connected);
      const titleEngagements = ref(title.engagements);
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
        newPartners,
        text,
        pros,
        copyright
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
        <SolarisFooterBottom
          :newLogo="args.newLogo"
          universe="part"
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
  }),
  args: {
    externalLinks: externalLinksJson,
    hasStaticLinks: false,
    moreLinks: moreLinksJson,
    newLinks: linksJson,
    newLogo: true,
    newPartners: newPartnersJson,
    showBackButton: true,
    universe: 'part',
    // |-- Deprecated
    activeBack: false,
    borderTop: false
    // Deprecated --|
  }
}`,...(g=(c=n.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};const X=["FullFooter"];export{n as FullFooter,X as __namedExportsOrder,Q as default};
