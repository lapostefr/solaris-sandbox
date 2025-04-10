import{a as i}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as n}from"./Progress-MOuEZ-0r.js";import"./v4-CQkTLCs1.js";import"./vue.esm-bundler-BiAlgFmf.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const l=[{title:"Label",state:"done"},{title:"Label",state:"done"},{title:"Label",state:"current"},{title:"Label",state:"pending"}],c=`
  {
    title?: string,
    state?: 'done' | 'current' | 'pending'
  }
`,u={title:"Atoms/Progress",argTypes:{progressList:{description:"List of steps <br> <b>Warning</b>: The <b>current</b> status <b>MUST be filled in</b>.",table:{type:{summary:"array",detail:c}}}}},e={render:o=>({components:{SolarisProgress:n},setup(){const a=i("goBack");return{args:o,elementClick:a}},template:'<SolarisProgress v-bind="args" @goBack="elementClick" />'}),args:{progressList:l}};var r,s,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisProgress
    },
    setup() {
      const elementClick = action('goBack');
      return {
        args,
        elementClick
      };
    },
    template: '<SolarisProgress v-bind="args" @goBack="elementClick" />'
  }),
  args: {
    progressList: progressList as ProgressType[]
  }
}`,...(t=(s=e.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};const L=["Progress"];export{e as Progress,L as __namedExportsOrder,u as default};
