const i=`[
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
]`,o=[{title:"Information du demandeur",desc:[{text:"Mme Laurette Beauchamps"}]},{title:"Pieces justificatives",desc:[{text:"Mme Laurette Beauchamps"},{text:"2 pieces justificatives",icon:"editing-paperclip",color:"cobalt"}]},{title:"Information du mandataire"},{title:"Récapitulatif"}],l={title:"Molecules/Vertical Stepper",argTypes:{current:{description:"Description slot of the tips",type:{summary:"string"}},steps:{description:"Steps of the vertical stepper.",table:{type:{summary:"array",detail:i}},type:{required:!0}}},args:{current:2,steps:o}},e=(a,{argTypes:n})=>({props:Object.keys(n),watch:{current(p){const c=this;c.currentStep=p}},data:()=>({currentStep:a.current}),template:'<SolarisVerticalStepper v-model="currentStep" v-bind="$props" />'});var t,r,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`(args: any, {
  argTypes
}: {
  argTypes: any;
}) => ({
  props: Object.keys(argTypes),
  watch: {
    current(value: boolean) {
      const self = (this as any);
      self.currentStep = value;
    }
  },
  data: () => ({
    currentStep: args.current
  }),
  template: \`<SolarisVerticalStepper v-model="currentStep" v-bind="$props" />\`
})`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const u=["VerticalStepper"];export{e as VerticalStepper,u as __namedExportsOrder,l as default};
