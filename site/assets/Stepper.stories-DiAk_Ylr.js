import{S as p}from"./Stepper-CQk314sn.js";import{r as o}from"./vue.esm-bundler-DD7xIM0D.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const i=`[
  { 
    label: string,
    id: string,
    disabled: booelan
  }
]`,l=[{label:"Vos services",id:"step1",disabled:!1},{label:"Bénéficiaire",id:"step2",disabled:!1},{label:"Personne(s) à contacter",id:"step3",disabled:!0},{label:"Souscripteur",id:"step4",disabled:!1},{label:"Récapitulatif",id:"step5",disabled:!1},{label:"Paiement",id:"step6",disabled:!1},{label:"Confirmation",id:"step7",disabled:!1}],u={title:"Molecules/Stepper",argTypes:{modelValue:{description:"The Stepper current.",table:{type:{summary:"number"}}},size:{description:"Choose the size of the text.",table:{type:{summary:"string"},defaultValue:{summary:"normal"}},control:{type:"select"},options:["normal","small"]},steps:{description:"Steps of a stepper.",table:{type:{summary:"object",detail:i}},required:!0}},args:{modelValue:6,size:"normal",steps:l}},e={render:t=>({components:{SolarisStepper:p},setup(){const n=o(t.modelValue);return{args:t,currentStepper:n}},template:`<div style="height: 100vh;">
      <SolarisStepper v-model="currentStepper" v-bind="args"/>
    </div>`}),args:{modelValue:6,size:"normal",steps:l}};var r,s,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisStepper
    },
    setup() {
      const currentStepper = ref(args.modelValue);
      return {
        args,
        currentStepper
      };
    },
    template: \`<div style="height: 100vh;">
      <SolarisStepper v-model="currentStepper" v-bind="args"/>
    </div>\`
  }),
  args: {
    modelValue: 6,
    size: 'normal',
    steps: steps
  }
}`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const b=["Stepper"];export{e as Stepper,b as __namedExportsOrder,u as default};
