import{a as i}from"./chunk-MZXVCX43-DWuJqIWT.js";import{S as r}from"./Tooltip-BpK83N0p.js";import"./v4-D8aEg3BZ.js";import"./vue.esm-bundler-DD7xIM0D.js";import"./index-ADTFLffw.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const s=["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"],p=["hover","clickToOpen","clickToToggle","focus"],c=["default","long","empty-border","empty-no-arrow","empty"],T={title:"Atoms/Tooltip",argTypes:{color:{description:"The color of the tooltip.",table:{defaultValue:{summary:"default"}},control:{type:"select"},options:["default","spotlight"]},displayElement:{description:"CSS technique to display the element.",defaultValue:{summary:"inline-flex"}},forceShow:{description:"Forces the display of the tooltip.",table:{type:{summary:"boolean"}},defaultValue:{summary:!1},control:{type:"boolean"}},isManual:{description:"Manual display.",table:{type:{summary:"boolean"}},defaultValue:{summary:!1},control:{type:"boolean"}},long:{description:"Changes the appearance of the tooltip.",table:{type:{summary:"boolean"}},defaultValue:{summary:!1},control:{type:"boolean"}},offset:{description:"Set the offset of the tooltip.",defaultValue:{summary:8}},placement:{description:"Control doesn't work because Tooltip generated after DOM loading, please use Docs section for testing",table:{type:{summary:"string"},defaultValue:{summary:"top"}},control:{type:"select"},options:s},trigger:{description:"Type of effect for the display of the tooltip.",table:{type:{summary:"string"},defaultValue:{summary:"hover"}},control:{type:"select"},options:p},type:{description:"Type of Tooltip.",table:{type:{summary:"string"},defaultValue:{summary:"default"}},control:{type:"select"},options:c}},args:{color:"default",displayElement:"inline-flex",forceShow:!1,isManual:!1,long:!1,offset:8,placement:"top",trigger:"clickToToggle",type:"long"}},e={render:n=>({components:{SolarisTooltip:r},setup(){const a=i("click");return{args:n,clickElement:a}},template:`
    <div style="height: 400px; background: #F5F5F5; display: flex; align-items: center; justify-content: center;" @click="clickElement">
      <SolarisTooltip v-bind="args">
        <template #tooltip>
        <div>Tooltip info</div>
        </template>
        <template #trigger>
        <SolarisButton>Tooltip Trigger</SolarisButton>
        </template>
      </SolarisTooltip>
    </div>
      `}),args:{color:"default",displayElement:"inline-flex",forceShow:!1,isManual:!1,long:!1,offset:8,placement:"top",trigger:"clickToToggle",type:"long"}};var t,o,l;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
    template: \`
    <div style="height: 400px; background: #F5F5F5; display: flex; align-items: center; justify-content: center;" @click="clickElement">
      <SolarisTooltip v-bind="args">
        <template #tooltip>
        <div>Tooltip info</div>
        </template>
        <template #trigger>
        <SolarisButton>Tooltip Trigger</SolarisButton>
        </template>
      </SolarisTooltip>
    </div>
      \`
  }),
  args: {
    color: 'default',
    displayElement: 'inline-flex',
    forceShow: false,
    isManual: false,
    long: false,
    offset: 8,
    placement: 'top',
    trigger: 'clickToToggle',
    type: 'long'
  }
}`,...(l=(o=e.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const h=["Tooltip"];export{e as Tooltip,h as __namedExportsOrder,T as default};
