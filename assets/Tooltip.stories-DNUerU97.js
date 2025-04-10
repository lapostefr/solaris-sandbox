import{a as s}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{T as p,S as c,C as m}from"./Tooltip-BdO2vyV2.js";import"./v4-CQkTLCs1.js";import"./vue.esm-bundler-BiAlgFmf.js";import"./index-a4aneQim.js";import"./generateId-CVaf2GGW.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const d=["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"],y=["hover","clickToOpen","clickToToggle","focusOnly"],u=["default","long","empty-border","empty-no-arrow","empty"],f={slotTrigger:{description:`Use the slot nammed *trigger* for the tooltip trigger element with the ARIA attributes exposed by the slot.*(cf. Show code)*. 
  - ariaControls: tooltip ID
  - ariaDescribedby: tooltip ID 
  - ariaExpanded: open/closed status`,table:{category:"Slots"}},slotTooltip:{description:"Use the *tooltip* slot to place the contents of the tooltip.",table:{category:"Slots"}}},l=Object.values(p),w={title:"Atoms/Tooltip",argTypes:{displayElement:{description:"CSS technique to display the element.",defaultValue:{summary:"inline-flex"}},forceShow:{description:"Forces the display of the tooltip.",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},forcePlacement:{description:"Forcing initial placement to avoid dynamic placement.",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},isManual:{description:"Manually control the interaction that triggers the tooltip display.",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},offset:{description:"Spacing between trigger and tooltip.",defaultValue:{summary:"8"}},placement:{description:"Specifies the direction of the tooltip.<br/>*Control doesn't work because Tooltip generated after DOM loading, please use Docs section for testing.*",table:{type:{summary:"string"},defaultValue:{summary:"top"}},control:{type:"select"},options:d},tooltipStyle:{description:"Tooltip style (default offers a wide format and quiet applies a minimal style).<br/>*Mettez l'option vide pour tester les props deprecated.*",table:{type:{summary:l.toString()}},control:{type:"select"},options:["",...l]},trigger:{description:"Type of effect for the display of the tooltip.",table:{type:{summary:"string"},defaultValue:{summary:"hover"}},control:{type:"select"},options:y},color:{description:"The color of the tooltip.",table:{defaultValue:{summary:"default"},category:"Deprecated"},control:{type:"select"},options:["default","quiet"]},long:{description:"Changes the appearance of the tooltip.",table:{type:{summary:"boolean"},category:"Deprecated"},defaultValue:{summary:"false"},control:{type:"boolean"}},type:{description:"Type of Tooltip.",table:{type:{summary:"string"},defaultValue:{summary:"default"},category:"Deprecated"},control:{type:"select"},options:u},...f}},n=(e='v-bind="args"')=>`
  <div style="height: 400px; background: #F5F5F5; display: flex; align-items: center; justify-content: center;" @click="clickElement">
    <SolarisTooltip ${e}>
      <template #tooltip>
        <div>Tooltip info</div>
      </template>
      <template #trigger="{ ariaControls, ariaExpanded, ariaDescribedby }">
        <SolarisButton
          :aria-controls="ariaControls"
          :aria-expanded="ariaExpanded"
          :aria-describedby="ariaDescribedby"
        >
          Tooltip Trigger
        </SolarisButton>
      </template>
    </SolarisTooltip>
  </div>
`,t={render:e=>({components:{SolarisTooltip:c},setup(){const o=s("click");return{args:e,clickElement:o}},template:n()}),args:{color:m.default,displayElement:"inline-flex",forceShow:!1,isManual:!1,long:!1,offset:8,placement:"top",tooltipStyle:"",trigger:"clickToToggle",type:"long"}};t.parameters={docs:{source:{code:n(Object.entries(t.args).map(([e,o])=>typeof o=="string"?` ${e}="${o}"`:` :${e}="${o}"`).join(""))},description:{story:"The Tooltip component uses slots to customize its content. See the *Show code* to see how ARIA elements are used."}}};var a,r,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisTooltip
    },
    setup() {
      const clickElement = action('click');
      return {
        args,
        clickElement
      };
    },
    template: generateTemplate()
  }),
  args: {
    color: Colors.default,
    displayElement: 'inline-flex',
    forceShow: false,
    isManual: false,
    long: false,
    offset: 8,
    placement: 'top',
    tooltipStyle: '' as TooltipStyle,
    trigger: 'clickToToggle',
    type: 'long'
  }
}`,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const E=["Tooltip"];export{t as Tooltip,E as __namedExportsOrder,w as default};
