import{a as s}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as i}from"./BackLink-DjX4LGhj.js";import"./v4-CQkTLCs1.js";import"./vue.esm-bundler-BiAlgFmf.js";import"./Icon-C-Sturzh.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const d={title:"Atoms/Back Link",argTypes:{backTitle:{description:"Type of header.",table:{type:{summary:"string"}}}},args:{backTitle:"Retourner sur La Poste.fr"}},t={render:a=>({components:{SolarisBackLink:i},setup(){const c=s("click-stop");return{args:a,clickStopElement:c}},template:'<SolarisBackLink v-bind="args" @goBack="clickStopElement" />'})};var e,r,o;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisBackLink
    },
    setup() {
      const clickStopElement = action('click-stop');
      return {
        args,
        clickStopElement
      };
    },
    template: '<SolarisBackLink v-bind="args" @goBack="clickStopElement" />'
  })
}`,...(o=(r=t.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const u=["BackLinkStory"];export{t as BackLinkStory,u as __namedExportsOrder,d as default};
