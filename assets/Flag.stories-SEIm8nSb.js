import{_ as s}from"./Flag-CWEvK9cZ.js";import"./vue.esm-bundler-DD7xIM0D.js";import"./lazysizes-C_krz_Ug.js";const o=`{
  name: string,
  alt?: string
}`,m={title:"Atoms/Flag",argTypes:{country:{description:"The flag to display.",table:{type:{summary:"object",detail:o}},required:!0},lazyload:{description:"Activates lazyloading.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"}},args:{country:{name:"UA",alt:"Ukraine"},lazyload:!1}},a={render:n=>({components:{SolarisFlag:s},setup(){return{args:n}},template:`<div style="height: 100vh;">
    <SolarisFlag v-bind="args" />
  </div>`}),args:{country:{name:"UA",alt:"Ukraine"},lazyload:!0}};var e,r,t;a.parameters={...a.parameters,docs:{...(e=a.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisFlag
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div style="height: 100vh;">
    <SolarisFlag v-bind="args" />
  </div>\`
  }),
  args: {
    country: {
      name: 'UA',
      alt: 'Ukraine'
    },
    lazyload: true
  }
}`,...(t=(r=a.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const c=["Flag"];export{a as Flag,c as __namedExportsOrder,m as default};
