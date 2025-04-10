import{s as p,S as m}from"./LogoNew-BfEyZx6H.js";import"./vue.esm-bundler-BiAlgFmf.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const o=["horizontal","vertical"],t=["XSmall","Small","Medium","Large"],s=["part","pro","business","single"],r=["button","link","none"],g={title:"Atoms/Logo",argTypes:{direction:{description:"The type of the logo.",table:{type:{summary:o.join(" | ")}},defaultValue:{summary:"part"},control:{type:"select"},options:o},isLogoSingleOnMobile:{description:"Active responsive switch layout for logo",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},isResponsive:{description:"Active responsive display for logo",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},logoRole:{description:"Accessibilty role for the logo",table:{type:{summary:r.join(" | ")}},defaultValue:{summary:"link"},control:{type:"select"},options:r},size:{description:"The type of the logo.",table:{type:{summary:t.join(" | ")}},defaultValue:{summary:"part"},control:{type:"select"},options:t},type:{description:"Type of file",table:{type:{summary:"string"}}},universe:{description:"The brand.",table:{type:{summary:s.join(" | ")}},defaultValue:{summary:"part"},control:{type:"select"},options:s},altLogo:{description:"Alt of the logo",table:{type:{summary:"string"}}}},args:{direction:"horizontal",isLogoSingleOnMobile:!0,isResponsive:!0,logoRole:"link",size:p.LARGE,type:"image/svg+xml",universe:"part",altLogo:""}},e={render:l=>({components:{SolarisLogoNew:m},setup(){return{args:l}},template:`<div style="height: 100vh;">
    <SolarisLogoNew v-bind="args" />
  </div>`})};var i,n,a;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisLogoNew
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div style="height: 100vh;">
    <SolarisLogoNew v-bind="args" />
  </div>\`
  })
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const d=["LogoNew"];export{e as LogoNew,d as __namedExportsOrder,g as default};
