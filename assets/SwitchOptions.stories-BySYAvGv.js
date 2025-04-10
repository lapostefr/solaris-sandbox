import{a as m}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as u}from"./SwitchOptions-jGBksH-1.js";import{r as d,w as h}from"./vue.esm-bundler-BiAlgFmf.js";import"./v4-CQkTLCs1.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const a=`{
  id: string,
  label: string,
  value: string,
  disabled?: boolean
}`,f="option1",g="option 1",b="Valeur de l'option 1",r={id:f,label:g,value:b},w="option2",v="option 2",y="Valeur de l'option 2",n={id:w,label:v,value:y},k={title:"Atoms/Switch Options",argTypes:{color:{description:"Type of switch",table:{type:{summary:["supernova","emphasis","quiet"].join(" | ")},defaultValue:{summary:"emphasis"}},control:{type:"select"},options:["supernova","emphasis","quiet"]},compact:{description:"Size compact for the switch.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},disabled:{description:"Disabled the switch.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},icon:{description:"Optionnal icon for the switch.",table:{type:{summary:"string"}}},left:{description:"Options for the left element.",table:{type:{summary:"object",detail:a}},required:!0},name:{description:"Name of the switch.",table:{type:{summary:"string"}},required:!0},right:{description:"Options for the right element.",table:{type:{summary:"object",detail:a}},required:!0},value:{description:"Value for the selected item (value of left or right element).",table:{type:{summary:"string"}}}},args:{color:"emphasis",compact:!1,disabled:!1,left:r,icon:"action-check-switch",name:"switchOptions",right:n,value:"Valeur de l'option 2"}},e={render:t=>({components:{SolarisSwitchOptions:u},setup(){const o=d(t.value),c=m("change");return h(()=>t.value,p=>{o.value=p}),{args:t,changeSwitch:c,model:o}},template:'<SolarisSwitchOptions @input="changeSwitch" v-model="model" v-bind="args" />'}),args:{color:"emphasis",compact:!1,disabled:!1,left:r,icon:"action-check-switch",name:"switchOptions",right:n,value:"Valeur de l'option 2"}};var i,s,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisSwitchOptions
    },
    setup() {
      const model = ref(args.value);
      const changeSwitch = action('change');
      watch(() => args.value, val => {
        model.value = val;
      });
      return {
        args,
        changeSwitch,
        model
      };
    },
    template: '<SolarisSwitchOptions @input="changeSwitch" v-model="model" v-bind="args" />'
  }),
  args: {
    color: 'emphasis',
    compact: false,
    disabled: false,
    left: left,
    icon: 'action-check-switch',
    name: 'switchOptions',
    right: right,
    value: 'Valeur de l\\'option 2'
  }
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const $=["SwitchOptions"];export{e as SwitchOptions,$ as __namedExportsOrder,k as default};
