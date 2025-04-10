import{S as L,a as E,b as J,c as w}from"./FooterBottom-DHgCqHbg.js";import{S as R}from"./Row-BfwjSzah.js";import{a as b,b as v,t as s,e as B,l as N,c as _,p as O,d as q,f as e,h as t}from"./texts-DD3YWNds.js";import{r as o}from"./vue.esm-bundler-BiAlgFmf.js";import{a as T}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./Icon-C-Sturzh.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Picture-Bv3IzpnC.js";import"./iframe-BnG0fEMb.js";import"../sb-preview/runtime.js";import"./LogoNew-BfEyZx6H.js";import"./v4-CQkTLCs1.js";const j="#",z="#",D="#",G="#",H={facebook:j,twitter:z,instagram:D,youtube:G},I=[{title:"Nos services",links:t},{title:"Nos produits",links:t},{title:"Nos tarifs",links:t},{title:"Rubriques",links:t}],to={title:"Organisms/Footer",argTypes:{},args:{}},n={render:l=>({components:{SolarisFullFooter:L,SolarisFooterEngagement:E,SolarisRow:R,SolarisFooterBottom:J,SolarisFooterCopyright:w},setup(){const p=o(b),c=o(v),g=o(H),m=o(s.copyright),d=o(B),S=o(I),k=o(N),F=o(_),f=o(O),h=o(s.text),y=o(q),u=o(e.apps),x=o(e.connected),C=o(e.engagements),A=T("logoClicked");return{args:l,appLink:p,titleApps:u,apps:c,connected:g,titleConnected:x,engagements:d,titleEngagements:C,headings:S,links:k,logo:F,partner:f,text:h,pros:y,copyright:m,handleLogoClick:A}},template:`<div style="margin-top: 300px;">
      <SolarisFullFooter>
        <SolarisFooterEngagement :title="titleEngagements" :engagements="engagements" />

        <SolarisRow>
          <SolarisFooterCopyright
            :copyright="copyright"
            :logo="logo" />
          <SolarisFooterBottom
            @logo-clicked="handleLogoClick"
            :text="text"
            :pros="pros"
            :partner="partner"
            :links="links" />
        </SolarisRow>
      </SolarisFullFooter>
    </div>`})};var r,i,a;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisFullFooter,
      SolarisFooterEngagement,
      SolarisRow,
      SolarisFooterBottom,
      SolarisFooterCopyright
    },
    setup() {
      const appLink = ref(allAppsLink);
      const apps = ref(appsArray);
      const connected = ref(connectedSimple);
      const copyright = ref(texts.copyright);
      const engagements = ref(engagementArray);
      const headings = ref(headingsArray);
      const links = ref(linksJson);
      const logo = ref(logoJson);
      const partner = ref(partnerJson);
      const text = ref(texts.text);
      const pros = ref(prosJson);
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
    template: \`<div style="margin-top: 300px;">
      <SolarisFullFooter>
        <SolarisFooterEngagement :title="titleEngagements" :engagements="engagements" />

        <SolarisRow>
          <SolarisFooterCopyright
            :copyright="copyright"
            :logo="logo" />
          <SolarisFooterBottom
            @logo-clicked="handleLogoClick"
            :text="text"
            :pros="pros"
            :partner="partner"
            :links="links" />
        </SolarisRow>
      </SolarisFullFooter>
    </div>\`
  })
}`,...(a=(i=n.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const no=["SimplifiedFooter"];export{n as SimplifiedFooter,no as __namedExportsOrder,to as default};
