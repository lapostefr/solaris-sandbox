import{a as p,b as l,t as o,e as g,l as c,c as m,p as d,d as y,f as n,h as t}from"./texts-DRpTSM7O.js";const k="#",S="#",F="#",h="#",u={facebook:k,twitter:S,instagram:F,youtube:h},x=[{title:"Nos services",links:t},{title:"Nos produits",links:t},{title:"Nos tarifs",links:t},{title:"Rubriques",links:t}],b={title:"Organisms/Footer",argTypes:{},args:{}},e=(A,{argTypes:i})=>({props:Object.keys(i),data:()=>({appLink:p,apps:l,connected:u,copyright:o.copyright,engagements:g,headings:x,links:c,logo:m,partner:d,pros:y,text:o.text,titleApps:n.apps,titleConnected:n.connected,titleEngagements:n.engagements}),template:`<div style="margin-top: 300px;">
    <SolarisFullFooter>
      <SolarisFooterEngagement :title="titleEngagements" :engagements="engagements" />

      <SolarisRow>
        <SolarisFooterCopyright
          :copyright="copyright"
          :logo="logo" />
        <SolarisFooterBottom
          :text="text"
          :pros="pros"
          :partner="partner"
          :links="links" />
      </SolarisRow>
    </SolarisFullFooter>
  </div>`});var s,r,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`(args: any, {
  argTypes
}: {
  argTypes: any;
}) => ({
  props: Object.keys(argTypes),
  data: () => ({
    appLink: allAppsLink,
    apps: appsArray,
    connected: connectedSimple,
    copyright: texts.copyright,
    engagements: engagementArray,
    headings: headingsArray,
    links: links,
    logo: logo,
    partner: partner,
    pros: pros,
    text: texts.text,
    titleApps: title.apps,
    titleConnected: title.connected,
    titleEngagements: title.engagements
  }),
  template: \`<div style="margin-top: 300px;">
    <SolarisFullFooter>
      <SolarisFooterEngagement :title="titleEngagements" :engagements="engagements" />

      <SolarisRow>
        <SolarisFooterCopyright
          :copyright="copyright"
          :logo="logo" />
        <SolarisFooterBottom
          :text="text"
          :pros="pros"
          :partner="partner"
          :links="links" />
      </SolarisRow>
    </SolarisFullFooter>
  </div>\`
})`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const E=["SimplifiedFooter"];export{e as SimplifiedFooter,E as __namedExportsOrder,b as default};
