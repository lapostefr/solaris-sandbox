import{a as o}from"./chunk-MZXVCX43-DWuJqIWT.js";import{_ as l}from"./NumberField-C4wBZwG4.js";import{w as m}from"./vue.esm-bundler-DD7xIM0D.js";import"./v4-D8aEg3BZ.js";import"./generateId-DPOzJEtM.js";const v={title:"Atoms/Number Field",parameters:{layout:"centered"},args:{dataError:{active:!1,message:""},disabled:!1,error:!1,id:"monId",label:"Label",max:100,message:"Voilà le message",min:1,name:"name",small:!1,type:"quiet",value:0}},e={render:a=>({components:{SolarisNumberField:l},setup(){return m(()=>a.value,n=>{o("input")(n)}),{args:a}},template:'<SolarisNumberField v-model="args.value" v-bind="args" />'})};var r,s,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisNumberField
    },
    setup() {
      watch(
      // log v-model update to action
      () => args.value, val => {
        action('input')(val);
      });
      return {
        args
      };
    },
    template: \`<SolarisNumberField v-model="args.value" v-bind="args" />\`
  })
}`,...(t=(s=e.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};const b=["NumberField"];export{e as NumberField,b as __namedExportsOrder,v as default};
