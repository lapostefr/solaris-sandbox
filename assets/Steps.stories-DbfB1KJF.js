import{a as o}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as f}from"./Steps-BNyjmbzz.js";import{r,w as d}from"./vue.esm-bundler-BiAlgFmf.js";import"./v4-CQkTLCs1.js";import"./Icon-C-Sturzh.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Tooltip-BdO2vyV2.js";import"./index-a4aneQim.js";import"./generateId-CVaf2GGW.js";const j={title:"Organisms/Steps",argTypes:{color:{description:"Color of the stepper",table:{type:{summary:"string"},defaultValue:{summary:"supernova"}},control:{type:"select"},options:["supernova","colissimo"]},goToStep:{action:"goToStep"},steps:{description:"List of steps",table:{type:{summary:"array"}}},version:{description:"Responsive behavior for the Stepper",table:{type:{summary:"string"},defaultValue:{summary:"responsive"}},control:{type:"select"},options:["small","large","responsive"]}},args:{color:"colissimo",steps:[{id:"step1",label:"Label 1"},{id:"step2",label:"Label 2"},{id:"step3",label:"Label 3"},{id:"step4",label:"Label 4"}],current:2,version:"small"}},s={render:e=>({components:{SolarisSteps:f},setup(){const t=r(e.current),p=r({current:1});d(()=>e,n=>{t.value=n.current,p.value={...e},delete p.value.current},{deep:!0,immediate:!0}),d(()=>t.value,n=>{o("modelChanged")(n)});const l=o("tooltipState"),i=o("goToStep"),c=r(e.steps.length),S=r(!1),u=r(!1);return{otherProps:p,args:e,currentStep:t,maxStep:c,prevDisabled:S,nextDisabled:u,goToStep:i,tooltipState:l,nextStep:()=>{t.value++,e.current=t},prevStep:()=>{t.value--,e.current=t}}},template:`
    <div style="padding: 30px 10px;">
      <SolarisSteps v-model="currentStep" v-bind="otherProps" @goToStep="goToStep" @state="tooltipState"/>
      <div style="display: flex; justify-content: center; padding-top: 30px;">
        <SolarisButton @click="prevStep" :disabled="currentStep <= 1" style="margin: 0 10px;">Etape précédente</SolarisButton>
        <SolarisButton @click="nextStep" :disabled="currentStep >= 4" style="margin: 0 10px;">Etape suivante</SolarisButton>
      </div>
    </div>`})},a={render:e=>({components:{SolarisSteps:f},setup(){const t=r(e.current);d(()=>e.current,n=>{t.value=n});const p=o("change"),l=o("tooltipState"),i=o("goToStep"),c=r(e.steps.length),S=r(!1),u=r(!1);return{args:e,currentStep:t,change:p,goToStep:i,tooltipState:l,maxStep:c,prevDisabled:S,nextDisabled:u,nextStep:()=>{t.value++,e.current=t},prevStep:()=>{t.value--,e.current=t}}},template:`
    <div style="padding: 30px 10px;">
      <SolarisSteps @change="change" @goToStep="goToStep" @state="tooltipState" v-bind="args" />
      <div style="display: flex; justify-content: center; padding-top: 30px;">
        <SolarisButton @click="prevStep" :disabled="currentStep <= 1" style="margin: 0 10px;">Etape précédente</SolarisButton>
        <SolarisButton @click="nextStep" :disabled="currentStep >= 4" style="margin: 0 10px;">Etape suivante</SolarisButton>
      </div>
    </div>`})};var v,m,g;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisSteps
    },
    setup() {
      // Extract Model
      const currentStep = ref(args.current);
      // Other props
      const otherProps = ref({
        current: 1
      });
      watch(
      // sync currentStep with controls
      () => args, value => {
        currentStep.value = value.current;
        otherProps.value = {
          ...args
        };
        delete (otherProps.value as any).current;
      }, {
        deep: true,
        immediate: true
      });
      // Output in actions panel
      watch(
      // model changed notification
      () => currentStep.value, newVal => {
        action('modelChanged')(newVal);
      });
      const tooltipState = action('tooltipState');
      const goToStep = action('goToStep');
      const maxStep = ref(args.steps.length);
      const prevDisabled = ref(false);
      const nextDisabled = ref(false);
      const nextStep = () => {
        currentStep.value++;
        args.current = currentStep;
      };
      const prevStep = () => {
        currentStep.value--;
        args.current = currentStep;
      };
      return {
        otherProps,
        args,
        currentStep,
        maxStep,
        prevDisabled,
        nextDisabled,
        goToStep,
        tooltipState,
        nextStep,
        prevStep
      };
    },
    template: \`
    <div style="padding: 30px 10px;">
      <SolarisSteps v-model="currentStep" v-bind="otherProps" @goToStep="goToStep" @state="tooltipState"/>
      <div style="display: flex; justify-content: center; padding-top: 30px;">
        <SolarisButton @click="prevStep" :disabled="currentStep <= 1" style="margin: 0 10px;">Etape précédente</SolarisButton>
        <SolarisButton @click="nextStep" :disabled="currentStep >= 4" style="margin: 0 10px;">Etape suivante</SolarisButton>
      </div>
    </div>\`
  })
}`,...(g=(m=s.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var x,y,b;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisSteps
    },
    setup() {
      // Model
      const currentStep = ref(args.current);
      watch(
      // sync currentStep with controls
      () => args.current, value => {
        currentStep.value = value;
      });
      // Output in actions panel
      const change = action('change');
      const tooltipState = action('tooltipState');
      const goToStep = action('goToStep');
      const maxStep = ref(args.steps.length);
      const prevDisabled = ref(false);
      const nextDisabled = ref(false);
      const nextStep = () => {
        currentStep.value++;
        args.current = currentStep;
      };
      const prevStep = () => {
        currentStep.value--;
        args.current = currentStep;
      };
      return {
        args,
        currentStep,
        change,
        goToStep,
        tooltipState,
        maxStep,
        prevDisabled,
        nextDisabled,
        nextStep,
        prevStep
      };
    },
    template: \`
    <div style="padding: 30px 10px;">
      <SolarisSteps @change="change" @goToStep="goToStep" @state="tooltipState" v-bind="args" />
      <div style="display: flex; justify-content: center; padding-top: 30px;">
        <SolarisButton @click="prevStep" :disabled="currentStep <= 1" style="margin: 0 10px;">Etape précédente</SolarisButton>
        <SolarisButton @click="nextStep" :disabled="currentStep >= 4" style="margin: 0 10px;">Etape suivante</SolarisButton>
      </div>
    </div>\`
  })
}`,...(b=(y=a.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const M=["StepperVModel","StepperWithProps"];export{s as StepperVModel,a as StepperWithProps,M as __namedExportsOrder,j as default};
