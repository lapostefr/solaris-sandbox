import{a as t}from"./chunk-MZXVCX43-DWuJqIWT.js";import{S as p}from"./OrderSummary-BgKQZNln.js";import{h as r,p as s}from"./price-CZsGkAVR.js";import"./v4-D8aEg3BZ.js";import"./vue.esm-bundler-DD7xIM0D.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./colissimo-B7reKzCB.js";const h={title:"Molecules/Order Summary",args:{button:"Button",buttonDivider:!0,displayCloseModalButton:!0,header:r,isLoading:!1,hiddenButton:!1,nextStepDisabled:!1,price:s,showMobileDetails:!1,StepBtnFullWidth:!1,stickyMobile:!1}},e={render:l=>({components:{SolarisOrderSummary:p},setup(){const i=t("Next Step"),m=t("Step Icon");return{args:l,elementNext:i,elementStep:m}},template:`
  <SolarisOrderSummary v-bind="args" @nextStep="elementNext" @stepIcon="elementStep">
    <template #logo>
      <SolarisLogo :type="'regular'" />
    </template>
    <template #checkbox>
      <SolarisCheckbox name="storybook" id="checkboxId">
        J’ai lu et j’accepte les Conditions Générales de Vente de La Boutique.
      </SolarisCheckbox>
    </template>
  </SolarisOrderSummary>
  `}),args:{button:"Button",buttonDivider:!0,displayCloseModalButton:!0,header:r,isLoading:!1,hiddenButton:!1,nextStepDisabled:!1,price:s,showMobileDetails:!1,StepBtnFullWidth:!1,stickyMobile:!1}};var n,a,o;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisOrderSummary
    },
    setup() {
      const elementNext = action('Next Step');
      const elementStep = action('Step Icon');
      return {
        args,
        elementNext,
        elementStep
      };
    },
    template: \`
  <SolarisOrderSummary v-bind="args" @nextStep="elementNext" @stepIcon="elementStep">
    <template #logo>
      <SolarisLogo :type="'regular'" />
    </template>
    <template #checkbox>
      <SolarisCheckbox name="storybook" id="checkboxId">
        J’ai lu et j’accepte les Conditions Générales de Vente de La Boutique.
      </SolarisCheckbox>
    </template>
  </SolarisOrderSummary>
  \`
  }),
  args: {
    button: 'Button',
    buttonDivider: true,
    // btnFullWidth: false,
    displayCloseModalButton: true,
    header: header,
    // image: image,
    isLoading: false,
    hiddenButton: false,
    nextStepDisabled: false,
    price: price,
    // showDetails: true,
    showMobileDetails: false,
    // steps: steps,
    StepBtnFullWidth: false,
    stickyMobile: false
    // titleTag: ''
  }
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const g=["OrderSummary"];export{e as OrderSummary,g as __namedExportsOrder,h as default};
