import{a as r}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as u}from"./SidePanel-RFA8_9M6.js";import{r as s}from"./vue.esm-bundler-BiAlgFmf.js";import"./v4-CQkTLCs1.js";import"./Icon-C-Sturzh.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./closeOnFocusOut-D0QTlgAv.js";import"./index-a4aneQim.js";const q={title:"Organisms/Side Panel",argTypes:{disableClickOutside:{description:"Disables closing of the side panel when clicked outside it.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:{type:"boolean"}},size:{description:"The size of the Side Panel",table:{type:{summary:"string"},defaultValue:{summary:"default"}},control:{type:"select"},options:["small","medium","compact","default","large"]},title:{description:"The Side Panel title",table:{type:{summary:"string"}}},focusTrap:{description:"Enable/Disable Focus Trap.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:{type:"boolean"}}},args:{disableClickOutside:!1,size:"default",title:"Je suis le titre"}},e={render:l=>({components:{SolarisSidePanel:u},setup(){const i=s(!1),n=r("Toggle Side Panel")();return{args:l,elementToggle:n,showSidePanel:i,toggle:()=>{i.value=!i.value}}},template:`<div>
    <SolarisButton @click="toggle">Ouvrir le SidePanel</SolarisButton>
    <SolarisSidePanel v-model="showSidePanel" v-bind="args">
      <template v-slot:content>
      <div style="margin-bottom: 16px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      <div style="margin-bottom: 16px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </template>
    </SolarisSidePanel>
  </div>`}),args:{size:"default",title:"Je suis le titre"}};var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisSidePanel
    },
    setup() {
      const showSidePanel = ref(false);
      const elementToggle = action('Toggle Side Panel')();
      const toggle = () => {
        showSidePanel.value = !showSidePanel.value;
      };
      return {
        args,
        elementToggle,
        showSidePanel,
        toggle
      };
    },
    template: \`<div>
    <SolarisButton @click="toggle">Ouvrir le SidePanel</SolarisButton>
    <SolarisSidePanel v-model="showSidePanel" v-bind="args">
      <template v-slot:content>
      <div style="margin-bottom: 16px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      <div style="margin-bottom: 16px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </template>
    </SolarisSidePanel>
  </div>\`
  }),
  args: {
    size: 'default',
    title: 'Je suis le titre'
  }
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const x=["SidePanelNoAction"];export{e as SidePanelNoAction,x as __namedExportsOrder,q as default};
