import{a as n}from"./chunk-MZXVCX43-DWuJqIWT.js";import{S as d}from"./Select-C0M5WDlK.js";import{o as s}from"./options-Bt7MkW-R.js";import{L as i}from"./types-Dd7QR7uO.js";import{r as u,w as b}from"./vue.esm-bundler-DD7xIM0D.js";import"./v4-D8aEg3BZ.js";import"./Icon-BQIPAAEI.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./generateId-DPOzJEtM.js";const y=`[
  value: string | number,
  label: string,
  disabled?: boolean
]`,f=`{
  active: boolean,
  message: string
}`,g=Object.values(i),j={title:"Atoms/Select",argTypes:{aria:{description:"Aria attributes.",table:{type:{summary:"object"}},control:"object"},dataError:{description:"Active error and display the error message.",table:{type:{summary:"object",detail:f}},control:{type:"object"}},disabled:{description:"Disabled the select.",table:{type:{summary:"boolean"}},defaultValue:!1,control:{type:"boolean"}},icon:{description:"Icon on the right of the select.",table:{type:{summary:"string"},defaultValue:{summary:"arrow-bottom"}}},id:{description:"The select id.",table:{type:{summary:"string"}},required:!0},inputRef:{description:"Input reference.",table:{type:{summary:"string"},defaultValue:{summary:"select"}}},label:{description:"Add a label or not.",table:{type:{summary:"string"}}},labelPosition:{description:"Changes the position ot the label.",table:{type:{summary:g},defaultValue:{summary:"inside"}},control:{type:"select"},options:i},mandatory:{description:"Makes the select mandatory.",table:{type:{summary:"boolean"}},defaultValue:!1,control:{type:"boolean"}},message:{description:"Active and display the message.",table:{type:{summary:"string"}},control:{type:"string"}},name:{description:"The select name.",table:{type:{summary:"string"}},required:!0},options:{description:"The options of the select.",table:{type:{summary:"object",detail:y}},required:!0},placeholder:{description:"The placeholder of the select.",table:{type:{summary:"string"}}},readonly:{description:"Change the select to read-only.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},size:{description:"The size of the textarea.",table:{type:{summary:"string"}},defaultValue:{summary:"medium"},control:{type:"select"},options:["default","compact","small","medium"]},error:{description:'Show an error for the select. <span style="color:orange">deprecated</span>*',table:{type:{summary:"boolean"},category:"Deprecated"},defaultValue:!1,control:{type:"boolean"}},blur:{description:"Event at blur on the select.",table:{category:"Events"},action:"blur"},input:{description:"Event at change on the select.",table:{category:"Events"},action:"input"}},args:{aria:{label:"name"},dataError:{active:!1,message:""},disabled:!1,error:!1,icon:"arrow-bottom",id:"monId",inputRef:"select",label:"Label",labelPosition:"inside",mandatory:!1,message:"Voilà le message",name:"name",options:s,placeholder:"-Sélectionner une option-",readonly:!1,size:"default"}},e={render:t=>({components:{SolarisSelect:d},setup(){const a=u("3");b(()=>t.value,p=>{a.value=p});const c=n("change"),m=n("blur");return{args:t,elementInput:c,elementBlur:m,selectData:a}},template:'<SolarisSelect v-model="selectData" v-bind="args" @input="elementInput" @blur="elementBlur"/>'}),args:{aria:{label:"name"},dataError:{active:!1,message:""},disabled:!1,error:!1,icon:"arrow-bottom",id:"monId",inputRef:"select",label:"Label",labelPosition:"inside",mandatory:!1,message:"Voilà le message",name:"name",options:s,placeholder:"-Sélectionner une option-",readonly:!1,size:"default"}};var o,l,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
    template: \`<SolarisSelect v-model="selectData" v-bind="args" @input="elementInput" @blur="elementBlur"/>\`
  }),
  args: {
    aria: {
      label: 'name'
    },
    dataError: {
      active: false,
      message: ''
    },
    disabled: false,
    error: false,
    icon: 'arrow-bottom',
    id: 'monId',
    inputRef: 'select',
    label: 'Label',
    labelPosition: 'inside',
    mandatory: false,
    message: 'Voilà le message',
    name: 'name',
    options: options,
    placeholder: '-Sélectionner une option-',
    readonly: false,
    size: 'default'
  }
}`,...(r=(l=e.parameters)==null?void 0:l.docs)==null?void 0:r.source}}};const P=["Select"];export{e as Select,P as __namedExportsOrder,j as default};
