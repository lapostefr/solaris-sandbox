import{S as i}from"./VerticalStepper-BDHZf01o.js";import"./Icon-C-Sturzh.js";import"./vue.esm-bundler-BiAlgFmf.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const p=`[
  {
    title: string,
    desc: [
      {
        color: string,
        icon: string,
        text: string
      }
    ]
  }
]`,o=[{title:"Information du demandeur",desc:[{text:"Mme Laurette Beauchamps"}]},{title:"Pieces justificatives",desc:[{text:"Mme Laurette Beauchamps"},{text:"2 pieces justificatives",icon:"editing-paperclip",color:"cobalt"}]},{title:"Information du mandataire"},{title:"Récapitulatif"}],u={title:"Molecules/Vertical Stepper",argTypes:{current:{description:"Description slot of the tips",type:{summary:"string"}},steps:{description:"Steps of the vertical stepper.",table:{type:{summary:"array",detail:p}},type:{required:!0}}},args:{current:2,steps:o}},e={render:a=>({components:{SolarisVerticalStepper:i},setup(){return{args:a}},template:'<SolarisVerticalStepper v-model="args.current" :steps="args.steps" />'})};var t,r,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisVerticalStepper
    },
    setup() {
      return {
        args
      };
    },
    template: '<SolarisVerticalStepper v-model="args.current" :steps="args.steps" />'
  })
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const d=["VerticalStepper"];export{e as VerticalStepper,d as __namedExportsOrder,u as default};
