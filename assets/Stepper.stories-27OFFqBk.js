import{a}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as s,a as l}from"./Stepper-DMCtJY48.js";import{r as m}from"./vue.esm-bundler-BiAlgFmf.js";import"./v4-CQkTLCs1.js";import"./Icon-C-Sturzh.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-a4aneQim.js";const S=`[
  {
    description?: string,
    id?: string,
    label: string
  }
]`,o=Object.values(s),y={goToStep:{description:"Triggered by selecting a previous step.<br/>Sends step index.",table:{category:"Events",type:{summary:"number"}},action:"goToStep"}},D={title:"Organisms/Stepper",component:l,argTypes:{ariaLabel:{description:"Define Stepper aria-label.",table:{type:{summary:"string"},defaultValue:{summary:"Étapes"}}},componentType:{description:"Stepper styling and visual appeal.",table:{type:{summary:o.join(" | ")},defaultValue:{summary:s.responsive}},control:{type:"select"},options:o},current:{description:"Index of the current step",table:{type:{summary:"number"}}},id:{description:"Stepper id.",table:{type:{summary:"string"},required:!0}},showProgressDetail:{description:"Displays the “Etape x sur x” label in full and responsive.",table:{type:{summary:"boolean"}},control:"boolean",defaultValue:{summary:!0}},steps:{description:"List of steps.",table:{type:{summary:"array",detail:S},required:!0}},...y},args:{ariaLabel:"Étapes",current:2,componentType:s.responsive,id:"stepper-id",showProgressDetail:!0,steps:[{description:"Description 1",id:"step1",label:"Short name 1"},{description:"Description 2",id:"step2",label:"Short name 2"},{description:"Description 3",id:"step3",label:"Short name 3"},{description:"Description 4",id:"step4",label:"Short name 4"}]}},e={render:t=>({components:{SolarisStepper:l},setup(){const r=m(t.current),u=t.steps.length,c=a("update:currentValue"),d=a("goToStep");return{args:t,currentValue:r,elementUpdateValue:c,elementGoToStep:d,stepPrevious:()=>{r.value--},stepNext:()=>{r.value++},maxStep:u}},template:`
    <div style="padding: 30px 10px; background-color: #F6F6F6;">
      <SolarisStepper   
        v-bind="args"
        :current="currentValue"
        @goToStep="elementGoToStep" />

      <div style="display: flex; justify-content: center; padding-top: 30px;">
        <SolarisButton 
          @click="stepPrevious()" 
          color="default"
          :disabled="currentValue === 0" style="margin: 0 10px;">
            Etape précédente
        </SolarisButton>
        <SolarisButton 
          @click="stepNext()" 
          :disabled="currentValue >= maxStep - 1" 
          color="default"
          style="margin: 0 10px;">
            Etape suivante
        </SolarisButton>
      </div>
    </div>`})};var p,n,i;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisStepper
    },
    setup() {
      const currentValue = ref(args.current);
      const maxStep = args.steps.length;
      const elementUpdateValue = action('update:currentValue');
      const elementGoToStep = action('goToStep');
      const stepPrevious = () => {
        currentValue.value--;
      };
      const stepNext = () => {
        currentValue.value++;
      };
      return {
        args,
        currentValue,
        elementUpdateValue,
        elementGoToStep,
        stepPrevious,
        stepNext,
        maxStep
      };
    },
    template: \`
    <div style="padding: 30px 10px; background-color: #F6F6F6;">
      <SolarisStepper   
        v-bind="args"
        :current="currentValue"
        @goToStep="elementGoToStep" />

      <div style="display: flex; justify-content: center; padding-top: 30px;">
        <SolarisButton 
          @click="stepPrevious()" 
          color="default"
          :disabled="currentValue === 0" style="margin: 0 10px;">
            Etape précédente
        </SolarisButton>
        <SolarisButton 
          @click="stepNext()" 
          :disabled="currentValue >= maxStep - 1" 
          color="default"
          style="margin: 0 10px;">
            Etape suivante
        </SolarisButton>
      </div>
    </div>\`
  })
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const P=["Stepper"];export{e as Stepper,P as __namedExportsOrder,D as default};
