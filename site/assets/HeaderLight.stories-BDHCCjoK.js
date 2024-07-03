import{t as o,d as i,b as l,c as p}from"./templateContent-CRXX3PUE.js";import{S as m,a as d,b as g}from"./HeaderSecure-Cz8wMm4v.js";import{L as u}from"./Logo-BG6jVBM2.js";import{S as c}from"./Progress-BGHEjd2N.js";import{r as h}from"./vue.esm-bundler-DD7xIM0D.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./logo-Bjhj7hjj.js";const y=[{title:"Label",state:"done"},{title:"Label",state:"current"},{title:"Label",state:"pending"},{title:"Label",state:"pending"}],k={title:"Organisms/Header/Light",argTypes:{backTitle:{description:"Text for the backlink.",table:{type:{summary:"string"}}},helpLink:{description:"Url for the backlink icon.",table:{type:{summary:"string"}}},newLogo:{description:"Use the new fullFooter design",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},universe:{description:"The type of the logo.",table:{type:{summary:["part","pro","business","single"]}},defaultValue:{summary:"part"},control:{type:"select"},options:["part","pro","business","single"]}},args:{backTitle:"Texte du lien",helpLink:"#",newLogo:!0,universe:"single"}},e={render:n=>({components:{SolarisHeader:m,SolarisLogo:u,SolarisHeaderLight:d,SolarisHeaderSecure:g,SolarisProgress:c},setup(){const s=h(y);return{args:n,progressArray:s}},template:`<div
    style="height: 1000px;
    margin: -1rem;">
  <SolarisHeader v-bind="args">
    <template #headerTop>
      ${o}
    </template>

    ${i}

    <template #headerBottom>
      ${l}
    </template>
  </SolarisHeader>
  <div style="color: #949494;">
    ${p}
  </div>
  </div>`}),args:{backTitle:"Texte du lien",helpLink:"#",newLogo:!0,universe:"single"}};var t,r,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisHeader,
      SolarisLogo,
      SolarisHeaderLight,
      SolarisHeaderSecure,
      SolarisProgress
    },
    setup() {
      const progressArray = ref(progressArrayJson);
      return {
        args,
        progressArray
      };
    },
    template: \`<div
    style="height: 1000px;
    margin: -1rem;">
  <SolarisHeader v-bind="args">
    <template #headerTop>
      \${templateHeaderTop}
    </template>

    \${templateHeaderLighContent}

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
    backTitle: 'Texte du lien',
    helpLink: '#',
    newLogo: true,
    universe: 'single'
  }
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const x=["Light"];export{e as Light,x as __namedExportsOrder,k as default};
