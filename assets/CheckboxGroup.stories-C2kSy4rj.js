import{a as i}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{d as p,a as n}from"./details-Dlf24xuS.js";import{o as m}from"./options-Bt3-Nn_M.js";import{S as s}from"./CheckboxGroup-DnqGD_1M.js";import{r as d,w as u}from"./vue.esm-bundler-BiAlgFmf.js";import"./v4-CQkTLCs1.js";import"./Checkbox-BV2bMv1f.js";import"./generateId-CVaf2GGW.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const S={title:"Atoms/Checkbox/Group",component:s,argTypes:{options:{description:"The list of checkbox. ",table:{type:{summary:"object",detail:p}},required:!0},color:{description:"The color of the checkbox.",table:{type:{summary:["emphasis","default","quiet","error"].join(" | ")},defaultValue:{summary:"emphasis"}},control:{type:"select"},options:["emphasis","default","quiet","error"]},dataError:{description:"Active error and display the error message.",table:{type:{summary:"object",detail:n}},control:{type:"object"}},disabled:{description:"Shows that the group is disabled.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},layout:{description:"The checkbox group layout.",table:{type:{summary:["vertical","vertical nested","horizontal"].join(" | ")},defaultValue:{summary:"vertical"}},control:{type:"select"},options:["vertical","vertical nested","horizontal"]},error:{description:'Show an error checkbox. *<span style="color:orange">deprecated</span>*',table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Deprecated"},control:"boolean"},nesting:{description:'Checkbox nesting if is true. *<span style="color:orange">deprecated</span>*',table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Deprecated"},control:"boolean"}},args:{color:"emphasis",dataError:{active:!1,message:""},disabled:!1,error:!1,layout:"vertical",nesting:!0,options:m}},e={render:l=>({components:{SolarisCheckboxGroup:s},setup(){const o=d(["checkbox-id-1","checkbox-id-3"]);return u(()=>o.value,c=>{i("update")(c)}),{args:l,model:o}},template:'<SolarisCheckboxGroup v-bind="{...args}" v-model="model"></SolarisCheckboxGroup>'})};var r,a,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisCheckboxGroup
    },
    setup() {
      const model = ref(['checkbox-id-1', 'checkbox-id-3']);
      watch(() => model.value, (value: any) => {
        action('update')(value);
      });
      return {
        args,
        model
      };
    },
    template: '<SolarisCheckboxGroup v-bind="{...args}" v-model="model"></SolarisCheckboxGroup>'
  })
}`,...(t=(a=e.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};const C=["Group"];export{e as Group,C as __namedExportsOrder,S as default};
