import{a as o}from"./chunk-MZXVCX43-DWuJqIWT.js";import{S as a}from"./Progress-BGHEjd2N.js";import"./v4-D8aEg3BZ.js";import"./vue.esm-bundler-DD7xIM0D.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const i=[{title:"Label",state:"done"},{title:"Label",state:"done"},{title:"Label",state:"current"},{title:"Label",state:"pending"}],l=`
  {
    title?: string,
    state?: 'done' | 'current' | 'pending'
  }
`,u={title:"Atoms/Progress",argTypes:{progressList:{description:"List of steps <br> <b>Warning</b>: The <b>current</b> status <b>MUST be filled in</b>.",table:{type:{summary:"array",detail:l}}}}},e={render:n=>({components:{SolarisProgress:a},setup(){return{args:n,elementClick:()=>o("goBack")}},template:'<SolarisProgress v-bind="args" @goBack="elementClick" />'}),args:{progressList:i}};var r,t,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisProgress
    },
    setup() {
      const elementClick = () => action('goBack');
      return {
        args,
        elementClick
      };
    },
    template: \`<SolarisProgress v-bind="args" @goBack="elementClick" />\`
  }),
  args: {
    progressList: progressList
  }
}`,...(s=(t=e.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const k=["Progress"];export{e as Progress,k as __namedExportsOrder,u as default};
