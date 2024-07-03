import{t as n,a as s,b as i,c as m}from"./templateContent-CRXX3PUE.js";import{S as l,a as p,b as d}from"./HeaderSecure-Cz8wMm4v.js";import{L as S}from"./Logo-BG6jVBM2.js";import{S as c}from"./Progress-BGHEjd2N.js";import"./vue.esm-bundler-DD7xIM0D.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./logo-Bjhj7hjj.js";const b={title:"Organisms/Header/Simple",argTypes:{isSticky:{description:"Make header sticky.",table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:{type:"boolean"}}},args:{isSticky:!0}},e={render:o=>({components:{SolarisHeader:l,SolarisLogo:S,SolarisHeaderLight:p,SolarisHeaderSecure:d,SolarisProgress:c},setup(){return{args:o}},template:`<div
    style="height: 1000px;
    margin: -1rem;">
  <SolarisHeader v-bind="args">
    <template #headerTop>
      ${n}
    </template>

   ${s}

    <template #headerBottom>
    ${i}
    </template>
  </SolarisHeader>

  <div style="color: #949494;">
    ${m}
  </div>
  </div>`}),args:{isSticky:!0}};var t,a,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisHeader,
      SolarisLogo,
      SolarisHeaderLight,
      SolarisHeaderSecure,
      SolarisProgress
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div
    style="height: 1000px;
    margin: -1rem;">
  <SolarisHeader v-bind="args">
    <template #headerTop>
      \${templateHeaderTop}
    </template>

   \${templateHeaderContent}

    <template #headerBottom>
    \${templateHeaderBottom}
    </template>
  </SolarisHeader>

  <div style="color: #949494;">
    \${templatePageContent}
  </div>
  </div>\`
  }),
  args: {
    isSticky: true
  }
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const f=["Simple"];export{e as Simple,f as __namedExportsOrder,b as default};
