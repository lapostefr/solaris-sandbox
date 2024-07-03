import{a as n}from"./chunk-MZXVCX43-DWuJqIWT.js";import{d as l,a as i}from"./details-Dlf24xuS.js";import{o as p}from"./options-yUlKBJIZ.js";import{S as a}from"./CheckboxGroup-CjMlOP-i.js";import"./v4-D8aEg3BZ.js";import"./vue.esm-bundler-DD7xIM0D.js";import"./generateId-DPOzJEtM.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const x={title:"Atoms/Checkbox/Group",component:a,argTypes:{options:{description:"The list of checkbox. ",table:{type:{summary:"object",detail:l}},required:!0},color:{description:"The color of the checkbox.",table:{type:{summary:["emphasis","default","quiet","error"]},defaultValue:{summary:"emphasis"}},control:{type:"select"},options:["emphasis","default","quiet","error"]},dataError:{description:"Active error and display the error message.",table:{type:{summary:"object",detail:i}},control:{type:"object"}},disabled:{description:"Shows that the group is disabled.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},layout:{description:"The checkbox group layout.",table:{type:{summary:["vertical","vertical nested","horizontal"]},defaultValue:{summary:"vertical"}},control:{type:"select"},options:["vertical","vertical nested","horizontal"]},readonly:{description:"The label must remain readable by users.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},error:{description:'Show an error checkbox. *<span style="color:orange">deprecated</span>*',table:{type:{summary:"boolean"},defaultValue:{summary:!1},category:"Deprecated"},control:"boolean"},nesting:{description:'Checkbox nesting if is true. *<span style="color:orange">deprecated</span>*',table:{type:{summary:"boolean"},defaultValue:{summary:!1},category:"Deprecated"},control:"boolean"}},args:{color:"emphasis",dataError:{active:!1,message:""},disabled:!1,error:!1,layout:"vertical",nesting:!1,options:p,readonly:!1}},e={render:s=>({components:{SolarisCheckboxGroup:a},setup(){return{args:s,inputElement:()=>{n("input")}}},template:`<div>
    <SolarisCheckboxGroup v-bind="{...args}" @input="inputElement"></SolarisCheckboxGroup>
    </div>`})};var o,r,t;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisCheckboxGroup
    },
    setup() {
      const inputElement = () => {
        action('input');
      };
      return {
        args,
        inputElement
      };
    },
    template: \`<div>
    <SolarisCheckboxGroup v-bind="{...args}" @input="inputElement"></SolarisCheckboxGroup>
    </div>\`
  })
}`,...(t=(r=e.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const v=["Group"];export{e as Group,v as __namedExportsOrder,x as default};
