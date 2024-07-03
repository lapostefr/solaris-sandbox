import{a as i}from"./chunk-MZXVCX43-DWuJqIWT.js";import{b as m,a as c}from"./details-Dlf24xuS.js";import{S as d}from"./Checkbox-BuH0GgKy.js";import{r as u,w as p}from"./vue.esm-bundler-DD7xIM0D.js";import"./v4-D8aEg3BZ.js";import"./generateId-DPOzJEtM.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const b=["emphasis","default","quiet","error"],E={title:"Atoms/Checkbox/Default",argTypes:{aria:{description:"The aria attributes.",table:{type:{summary:"object",detail:m}},control:"object"},color:{description:"The color of the checkbox.",table:{type:{summary:["emphasis","default","quiet","error"]},defaultValue:{summary:"emphasis"}},control:{type:"select"},options:b},dataError:{description:"Active error and display the error message.",table:{type:{summary:"object",detail:c}},control:{type:"object"}},disabled:{description:"Shows that the group is disabled.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},id:{description:"The checkbox id",table:{type:{summary:"string"}},required:!0},indeterminate:{description:"Indeterminate status",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},name:{description:"The checkbox name",table:{type:{summary:"string"}},required:!0},readonly:{description:"The label must remain readable by users.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},value:{description:"The checkbox value",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},error:{description:'Show an error checkbox. <span style="color:orange">deprecated</span>*',table:{type:{summary:"boolean"},defaultValue:{summary:!1},category:"Deprecated"},control:"boolean"}},args:{aria:{label:"name"},color:"emphasis",dataError:{active:!1,message:""},disabled:!1,error:!1,id:"monId",indeterminate:!1,name:"name",readonly:!1,value:!1}},e={render:a=>({components:{SolarisCheckbox:d},setup(){const r=u(a.value),s=i("input");return p(()=>a.value,l=>{r.value=l}),{args:a,inputElement:s,checkboxdata:r}},template:`<div>
    <SolarisCheckbox v-model="checkboxdata" v-bind="args" @input="inputElement" >My super checkbox</SolarisCheckbox>
    </div>`}),args:{aria:{label:"name"},color:"emphasis",dataError:{active:!1,message:""},disabled:!1,error:!1,id:"monId",indeterminate:!1,name:"name",readonly:!1,value:!1}};var t,o,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisCheckbox
    },
    setup() {
      const checkboxdata = ref(args.value);
      const inputElement = action('input');
      watch(() => args.value, (value: boolean) => {
        checkboxdata.value = value;
      });
      return {
        args,
        inputElement,
        checkboxdata
      };
    },
    template: \`<div>
    <SolarisCheckbox v-model="checkboxdata" v-bind="args" @input="inputElement" >My super checkbox</SolarisCheckbox>
    </div>\`
  }),
  args: {
    aria: {
      label: 'name'
    },
    color: 'emphasis',
    dataError: {
      active: false,
      message: ''
    },
    disabled: false,
    error: false,
    id: 'monId',
    indeterminate: false,
    name: 'name',
    readonly: false,
    value: false
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const S=["Default"];export{e as Default,S as __namedExportsOrder,E as default};
