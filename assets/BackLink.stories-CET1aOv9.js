import{a}from"./chunk-MZXVCX43-DWuJqIWT.js";import{S as c}from"./BackLink-BZ9EQyZ-.js";import"./v4-D8aEg3BZ.js";import"./vue.esm-bundler-DD7xIM0D.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const S={title:"Atoms/Back Link",argTypes:{backTitle:{description:"Type of header.",table:{type:{summary:"string"}}}},args:{backTitle:"Retourner sur La Poste.fr"}},t={render:o=>({components:{SolarisBackLink:c},setup(){return{args:o,clickStopElement:()=>{a("click-stop")}}},template:'<SolarisBackLink v-bind="args" @goBack="clickStopElement" />'})};var e,n,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisBackLink
    },
    setup() {
      const clickStopElement = () => {
        action('click-stop');
      };
      return {
        args,
        clickStopElement
      };
    },
    template: \`<SolarisBackLink v-bind="args" @goBack="clickStopElement" />\`
  })
}`,...(r=(n=t.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const d=["BackLinkStory"];export{t as BackLinkStory,d as __namedExportsOrder,S as default};
