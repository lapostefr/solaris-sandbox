import{a as l}from"./chunk-MZXVCX43-DWuJqIWT.js";import{S as n}from"./Switch-BYecdc26.js";import"./v4-D8aEg3BZ.js";import"./vue.esm-bundler-DD7xIM0D.js";import"./generateId-DPOzJEtM.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const i=`{
  active: boolean,
  message: string
}`,b={title:"Atoms/Switch",argTypes:{color:{description:"Type of switch.",table:{type:{summary:["emphasis","default","quiet"]},defaultValue:{summary:"emphasis"}},control:{type:"select"},options:["emphasis","default","quiet"]},dataError:{description:"Active error and display the error message.",table:{type:{summary:"object",detail:i}},control:{type:"object"}},disabled:{description:"Disabled the switch.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},fullSpace:{description:"The switch occupies the entire line.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},icon:{description:"The switch icon.",table:{type:{summary:"string"},defaultValue:{summary:"action-check-switch"}}},id:{description:"The switch id.",table:{type:{summary:"string"}},required:!0},label:{description:"The switch label.",table:{type:{summary:"string"}}},reverse:{description:"Change order of the switch and the label.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},small:{description:"Choose small size for the switch.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},value:{description:"Activate the switch.",table:{type:{summary:"boolean"}},control:"boolean",required:!0}},args:{color:"emphasis",dataError:{active:!1,message:""},disabled:!1,fullSpace:!1,icon:"action-check-switch",id:"monId",label:"Label",reverse:!1,small:!1,value:!0}},e={render:r=>({components:{SolarisSwitch:n},setup(){const o=l("change");return{args:r,actionInput:o}},template:'<SolarisSwitch @input="actionInput" v-bind="args"/>'}),args:{color:"emphasis",dataError:{active:!1,message:""},disabled:!1,fullSpace:!1,icon:"action-check-switch",id:"monId",label:"Label",reverse:!1,small:!1,value:!0}};var a,t,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisSwitch
    },
    setup() {
      const actionInput = action('change');
      return {
        args,
        actionInput
      };
    },
    template: \`<SolarisSwitch @input="actionInput" v-bind="args"/>\`
  }),
  args: {
    color: 'emphasis',
    dataError: {
      active: false,
      message: ''
    },
    disabled: false,
    fullSpace: false,
    icon: 'action-check-switch',
    id: 'monId',
    label: 'Label',
    reverse: false,
    small: false,
    value: true
  }
}`,...(s=(t=e.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const f=["Switch"];export{e as Switch,f as __namedExportsOrder,b as default};
