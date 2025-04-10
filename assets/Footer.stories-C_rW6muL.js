import{S as i}from"./Footer-B4Scq56h.js";import{a as n}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./vue.esm-bundler-BiAlgFmf.js";import"./Icon-C-Sturzh.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Container-BH3iOhd_.js";import"./LogoNew-BfEyZx6H.js";import"./v4-CQkTLCs1.js";const p=`[
  {
    url: string;
    text: string
  }
]`,a=[{url:"/urlFromProp1",text:"urlProp 1"},{url:"/urlFromProp2",text:"urlProp 2"}],k={title:"Organisms/Footer",argTypes:{altLogo:{description:"Specifies the alternative text for the logo.",table:{type:{summary:"string"},defaultValue:{summary:"La Poste, aller à l'accueil"}}},moreLinks:{description:"Adds links to the default list.",table:{type:{summary:"array",detail:p}}},newLogo:{description:"Show the design of the new footer",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},universe:{description:"The type of the logo.",table:{type:{summary:["part","pro","business","single"].join(" | ")}},defaultValue:{summary:"part"},control:{type:"select"},options:["part","pro","business","single"]}},args:{altLogo:"La Poste, aller à l'accueil",moreLinks:a,newLogo:!1,universe:"part"}},e={render:s=>({components:{SolarisFooter:i},setup(){const l=n("logoClicked");return{args:s,handleLogoClick:l}},template:`
  <div style="margin-top: 20px;">
      <SolarisFooter v-bind="args" @logo-clicked="handleLogoClick"/>
  </div>
  `}),args:{moreLinks:a,newLogo:!1,universe:"part"}};var o,r,t;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisFooter
    },
    setup() {
      const handleLogoClick = action('logoClicked');
      return {
        args,
        handleLogoClick
      };
    },
    template: \`
  <div style="margin-top: 20px;">
      <SolarisFooter v-bind="args" @logo-clicked="handleLogoClick"/>
  </div>
  \`
  }),
  args: {
    moreLinks: moreLinks,
    newLogo: false,
    universe: 'part'
  }
}`,...(t=(r=e.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const h=["Footer"];export{e as Footer,h as __namedExportsOrder,k as default};
