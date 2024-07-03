import{S as a}from"./Footer-D0kDF3qU.js";import"./vue.esm-bundler-DD7xIM0D.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const i=`[
  {
    url: string;
    text: string
  }
]`,s=[{url:"/urlFromProp1",text:"urlProp 1"},{url:"/urlFromProp2",text:"urlProp 2"}],u={title:"Organisms/Footer",argTypes:{moreLinks:{description:"Adds links to the default list.",table:{type:{summary:"array",detail:i}}},newLogo:{description:"Show the design of the new footer",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},universe:{description:"The type of the logo.",table:{type:{summary:["part","pro","business","single"]}},defaultValue:{summary:"part"},control:{type:"select"},options:["part","pro","business","single"]}},args:{moreLinks:s,newLogo:!1,universe:"part"}},e={render:n=>({components:{SolarisFooter:a},setup(){return{args:n}},template:`
  <div style="margin-top: 20px;">
      <SolarisFooter v-bind="args" />
  </div>
  `}),args:{moreLinks:s,newLogo:!1,universe:"part"}};var r,o,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisFooter
    },
    setup() {
      return {
        args
      };
    },
    template: \`
  <div style="margin-top: 20px;">
      <SolarisFooter v-bind="args" />
  </div>
  \`
  }),
  args: {
    moreLinks: moreLinks,
    newLogo: false,
    universe: 'part'
  }
}`,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const d=["Footer"];export{e as Footer,d as __namedExportsOrder,u as default};
