import{a as m}from"./chunk-MZXVCX43-DWuJqIWT.js";import{S as u}from"./SwitchOptions-DrOnSELJ.js";import{r as d,w as h}from"./vue.esm-bundler-DD7xIM0D.js";import"./v4-D8aEg3BZ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const a=`{
  id: string,
  label: string,
  value: string,
  disabled?: boolean
}`,f="option1",b="option 1",g="Valeur de l'option 1",l={id:f,label:b,value:g},w="option2",v="option 2",y="Valeur de l'option 2",r={id:w,label:v,value:y},$={title:"Atoms/Switch Options",argTypes:{color:{description:"Type of switch",table:{type:{summary:["supernova","emphasis","quiet"]},defaultValue:{summary:"emphasis"}},control:{type:"select"},options:["supernova","emphasis","quiet"]},compact:{description:"Size compact for the switch.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},disabled:{description:"Disabled the switch.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},icon:{description:"Optionnal icon for the switch.",table:{type:{summary:"string"}}},left:{description:"Options for the left element.",table:{type:{summary:"object",detail:a}},required:!0},name:{description:"Name of the switch.",table:{type:{summary:"string"}},required:!0},right:{description:"Options for the right element.",table:{type:{summary:"object",detail:a}},required:!0},value:{description:"Value for the selected item (value of left or right element).",table:{type:{summary:"string"}}}},args:{color:"emphasis",compact:!1,disabled:!1,left:l,icon:"action-check-switch",name:"switchOptions",right:r,value:"Valeur de l'option 2"}},e={render:t=>({components:{SolarisSwitchOptions:u},setup(){const o=d(t.value),c=()=>m("change");return h(()=>t.value,p=>{o.value=p}),{args:t,changeSwitch:c,model:o}},template:'<SolarisSwitchOptions @input="changeSwitch" v-model="model" v-bind="args" />'}),args:{color:"emphasis",compact:!1,disabled:!1,left:l,icon:"action-check-switch",name:"switchOptions",right:r,value:"Valeur de l'option 2"}};var n,i,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisSwitchOptions
    },
    setup() {
      const model = ref(args.value);
      const changeSwitch = () => action('change');
      watch(() => args.value, val => {
        model.value = val;
      });
      return {
        args,
        changeSwitch,
        model
      };
    },
    template: \`<SolarisSwitchOptions @input="changeSwitch" v-model="model" v-bind="args" />\`
  }),
  args: {
    color: 'emphasis',
    compact: false,
    disabled: false,
    left: left,
    icon: 'action-check-switch',
    name: 'switchOptions',
    right: right,
    value: \`Valeur de l'option 2\`
  }
}`,...(s=(i=e.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const j=["SwitchOptions"];export{e as SwitchOptions,j as __namedExportsOrder,$ as default};
