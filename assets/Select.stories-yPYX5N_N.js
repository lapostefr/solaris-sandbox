import{a as r}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as p}from"./Select-DhXuss5o.js";import{o as u}from"./options-Bu0UZnng.js";import{L as e}from"./types-DKXD8uiR.js";import{r as d,w as b}from"./vue.esm-bundler-BiAlgFmf.js";import"./v4-CQkTLCs1.js";import"./Icon-C-Sturzh.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./generateId-CVaf2GGW.js";const y=`[
  value: string | number,
  label: string,
  disabled?: boolean
]`,g=`{
  active: boolean,
  message: string
}`,f=Object.values(e),A={title:"Atoms/Select",argTypes:{aria:{description:"Aria attributes.",table:{type:{summary:"object"}},control:"object"},dataError:{description:"Active error and display the error message.",table:{type:{summary:"object",detail:g}},control:{type:"object"}},disabled:{description:"Disabled the select.",table:{type:{summary:"boolean"}},defaultValue:!1,control:{type:"boolean"}},icon:{description:"Icon on the right of the select.",table:{type:{summary:"string"},defaultValue:{summary:"arrow-bottom"}}},id:{description:"The select id.",table:{type:{summary:"string"}},required:!0},inputRef:{description:"Input reference.",table:{type:{summary:"string"},defaultValue:{summary:"select"}}},label:{description:"Add a label or not.",table:{type:{summary:"string"}}},labelPosition:{description:"Changes the position ot the label.",table:{type:{summary:f.join(" | ")},defaultValue:{summary:e.inside}},control:{type:"select"},options:[e.inside,e.outside]},mandatory:{description:"Makes the select mandatory.",table:{type:{summary:"boolean"}},defaultValue:!1,control:{type:"boolean"}},message:{description:"Active and display the message.",table:{type:{summary:"string"}},control:{type:"text"}},name:{description:"The select name.",table:{type:{summary:"string"}},required:!0},options:{description:"The options of the select.",table:{type:{summary:"object",detail:y}},required:!0},placeholder:{description:"The placeholder of the select.",table:{type:{summary:"string"}}},readonly:{description:"Change the select to read-only.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},size:{description:"The size of the textarea.",table:{type:{summary:"string"}},defaultValue:{summary:"medium"},control:{type:"select"},options:["default","compact","small","medium"]},error:{description:'Show an error for the select. <span style="color:orange">deprecated</span>*',table:{type:{summary:"boolean"},category:"Deprecated"},defaultValue:!1,control:{type:"boolean"}}},args:{aria:{label:"name"},dataError:{active:!1,message:""},disabled:!1,error:!1,icon:"arrow-bottom",id:"monId",inputRef:"select",label:"Label",labelPosition:e.inside,mandatory:!1,message:"Voilà le message",name:"name",options:u,placeholder:"-Sélectionner une option-",readonly:!1,size:"default"}},t={render:a=>({components:{SolarisSelect:p},setup(){const o=d("3");b(()=>a.value,m=>{o.value=m});const i=r("change"),c=r("blur");return{args:a,elementInput:i,elementBlur:c,selectData:o}},template:'<SolarisSelect v-model="selectData" v-bind="args" @input="elementInput" @blur="elementBlur"/>'})};var l,s,n;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisSelect
    },
    setup() {
      const selectData = ref('3');
      watch(() => args.value, (value: string) => {
        selectData.value = value;
      });
      const elementInput = action('change');
      const elementBlur = action('blur');
      return {
        args,
        elementInput,
        elementBlur,
        selectData
      };
    },
    template: '<SolarisSelect v-model="selectData" v-bind="args" @input="elementInput" @blur="elementBlur"/>'
  })
}`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const B=["Select"];export{t as Select,B as __namedExportsOrder,A as default};
