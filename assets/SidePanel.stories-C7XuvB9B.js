import{a as r}from"./chunk-MZXVCX43-DWuJqIWT.js";import{r as u}from"./vue.esm-bundler-DD7xIM0D.js";import"./v4-D8aEg3BZ.js";const p={title:"Organisms/Side Panel"},e={render:n=>({setup(){const i=u(!1),l=r("Toggle Side Panel")();return{args:n,elementToggle:l,showSidePanel:i,toggle:()=>{i.value=!i.value}}},template:`<div>
    <SolarisButton @click="toggle">Ouvrir le SidePanel</SolarisButton>
    <SolarisSidePanel v-model="showSidePanel" v-bind="args">
      <template v-slot:content>
        <div style="margin-bottom: 16px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        <div style="margin-bottom: 16px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </template>
      <template v-slot:actions>
        <SolarisButton
          @click="toggle"
          type="ghost"
          color="darkgrey"
          class="panel__cancel"
        >Annuler</SolarisButton
        >
        <SolarisButton
          @click="elementToggle"
          color="supernova"
          class="panel__validate"
        >Valider</SolarisButton
        >
      </template>
    </SolarisSidePanel>
  </div>`}),args:{size:"default",title:"Je suis le titre",focusTrap:!1}};var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (args: any) => ({
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
      <template v-slot:actions>
        <SolarisButton
          @click="toggle"
          type="ghost"
          color="darkgrey"
          class="panel__cancel"
        >Annuler</SolarisButton
        >
        <SolarisButton
          @click="elementToggle"
          color="supernova"
          class="panel__validate"
        >Valider</SolarisButton
        >
      </template>
    </SolarisSidePanel>
  </div>\`
  }),
  args: {
    size: 'default',
    title: 'Je suis le titre',
    focusTrap: false
  }
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const g=["SidePanel"];export{e as SidePanel,g as __namedExportsOrder,p as default};
