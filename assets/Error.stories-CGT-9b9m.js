import{S as a}from"./Error-CWbF3THT.js";import"./vue.esm-bundler-DD7xIM0D.js";import"./logo-Bjhj7hjj.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const m={title:"Templates/Error",argTypes:{status:{description:"The error status code",table:{type:{summary:"number"}},control:{type:"select"},options:[404,500]},sessionId:{description:"The session id",table:{type:{summary:"string"}}},date:{description:"The date of the error",table:{type:{summary:"string"}}}},args:{status:404,sessionId:"df8db67e-4834-4cf8-9eb8-c6a31d24f6ab",date:"2020/07/20 10:30:32:635 CEST"}},r={render:o=>({components:{SolarisError:a},setup(){return{args:o}},template:'<SolarisError v-bind="args" />'})};var e,s,t;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisError
    },
    setup() {
      return {
        args
      };
    },
    template: \`<SolarisError v-bind="args" />\`
  })
}`,...(t=(s=r.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};const c=["Error"];export{r as Error,c as __namedExportsOrder,m as default};
