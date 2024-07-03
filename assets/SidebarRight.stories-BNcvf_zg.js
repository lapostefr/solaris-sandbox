import{a as t}from"./chunk-MZXVCX43-DWuJqIWT.js";import{S as u}from"./OrderSummary-BgKQZNln.js";import{S}from"./SummaryStep-Ct4UMpr2.js";import{S as c}from"./Modal-Bnzsy0Wb.js";import{a as y,i as r,s as n}from"./steps-CfakyPlm.js";import{h as l,p as i}from"./price-CZsGkAVR.js";import"./v4-D8aEg3BZ.js";import"./vue.esm-bundler-DD7xIM0D.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./focusTrap-CkRmwrmc.js";import"./index-ADTFLffw.js";import"./colissimo-B7reKzCB.js";const v={title:"Molecules/Order Summary",argTypes:y,args:{button:"Button",buttonDivider:!0,btnFullWidth:!1,displayCloseModalButton:!1,emptySpaceBottom:{active:!0},header:l,hasHeader:!1,image:r,isLoading:!1,hiddenButton:!1,nextStepDisabled:!1,price:i,showDetails:!0,showMobileDetails:!1,steps:n,StepBtnFullWidth:!1,stickyDesktop:"block",stickyMobile:!1,titleTag:""}},e={render:m=>({components:{SolarisOrderSummary:u,SolarisModal:c,SolarisSummaryStep:S},setup(){const p=t("Next Step"),d=t("Step Icon");return{args:m,elementNext:p,elementStep:d}},template:`<SolarisOrderSummaryLayout sidebar="right" :emptySpaceBottom="args.emptySpaceBottom">
    <SolarisOrderSummary v-bind="args" @nextStep="elementNext" @stepIcon="elementStep">
      <template #logo>
        <SolarisLogo :type="'regular'" />
      </template>
      <template #checkbox>
        <SolarisCheckbox name="storybook" id="checkboxId">
          J’ai lu et j’accepte les Conditions Générales de Vente de La
          Boutique.
        </SolarisCheckbox>
      </template>
    </SolarisOrderSummary>
  </SolarisOrderSummaryLayout>`}),args:{button:"Button",buttonDivider:!0,btnFullWidth:!1,displayCloseModalButton:!1,emptySpaceBottom:{active:!0},header:l,hasHeader:!1,image:r,isLoading:!1,hiddenButton:!1,nextStepDisabled:!1,price:i,showDetails:!0,showMobileDetails:!1,steps:n,StepBtnFullWidth:!1,stickyDesktop:"block",stickyMobile:!1,titleTag:""}};var a,o,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisOrderSummary,
      SolarisModal,
      SolarisSummaryStep
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
    template: \`<SolarisOrderSummaryLayout sidebar="right" :emptySpaceBottom="args.emptySpaceBottom">
    <SolarisOrderSummary v-bind="args" @nextStep="elementNext" @stepIcon="elementStep">
      <template #logo>
        <SolarisLogo :type="'regular'" />
      </template>
      <template #checkbox>
        <SolarisCheckbox name="storybook" id="checkboxId">
          J’ai lu et j’accepte les Conditions Générales de Vente de La
          Boutique.
        </SolarisCheckbox>
      </template>
    </SolarisOrderSummary>
  </SolarisOrderSummaryLayout>\`
  }),
  args: {
    button: 'Button',
    buttonDivider: true,
    btnFullWidth: false,
    displayCloseModalButton: false,
    emptySpaceBottom: {
      active: true
    },
    header: header,
    hasHeader: false,
    image: image,
    isLoading: false,
    hiddenButton: false,
    nextStepDisabled: false,
    price: price,
    showDetails: true,
    showMobileDetails: false,
    steps: steps,
    StepBtnFullWidth: false,
    stickyDesktop: 'block',
    stickyMobile: false,
    titleTag: ''
  }
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const N=["SidebarRight"];export{e as SidebarRight,N as __namedExportsOrder,v as default};
