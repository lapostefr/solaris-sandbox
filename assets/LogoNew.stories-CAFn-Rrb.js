import{S as p}from"./LogoNew-Dq-oHkPC.js";import"./vue.esm-bundler-DD7xIM0D.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const o=["horizontal","vertical"],t=["XSmall","Small","Medium","Large"],s=["part","pro","business","single"],r=["button","link","none"],y={title:"Atoms/Logo",argTypes:{direction:{description:"The type of the logo.",table:{type:{summary:o}},defaultValue:{summary:"part"},control:{type:"select"},options:o},isLogoSingleOnMobile:{description:"Active responsive switch layout for logo",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},isResponsive:{description:"Active responsive display for logo",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},logoRole:{description:"Accessibilty role for the logo",table:{type:{summary:r}},defaultValue:{summary:"link"},control:{type:"select"},options:r},newLogo:{description:"Show the new design",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},size:{description:"The type of the logo.",table:{type:{summary:t}},defaultValue:{summary:"part"},control:{type:"select"},options:t},type:{description:"Type of file",table:{type:{summary:"string"}}},universe:{description:"The brand.",table:{type:{summary:s}},defaultValue:{summary:"part"},control:{type:"select"},options:s},altLogo:{description:"Alt of the logo",table:{type:{summary:"string"}}}},args:{direction:"horizontal",isLogoSingleOnMobile:!0,isResponsive:!0,newLogo:!0,logoRole:"link",size:"Large",type:"image/svg+xml",universe:"part",altLogo:""}},e={render:l=>({components:{SolarisLogoNew:p},setup(){return{args:l}},template:`<div style="height: 100vh;">
    <SolarisLogoNew v-bind="args" />
  </div>`}),args:{direction:"horizontal",isLogoSingleOnMobile:!0,isResponsive:!0,newLogo:!0,logoRole:"link",size:"Large",type:"image/svg+xml",universe:"part",altLogo:""}};var n,i,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
  }),
  args: {
    direction: 'horizontal',
    isLogoSingleOnMobile: true,
    isResponsive: true,
    newLogo: true,
    logoRole: 'link',
    size: 'Large',
    type: 'image/svg+xml',
    universe: 'part',
    altLogo: ''
  }
}`,...(a=(i=e.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const c=["LogoNew"];export{e as LogoNew,c as __namedExportsOrder,y as default};
