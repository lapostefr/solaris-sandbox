import{a as t}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as d}from"./SidePanel-RFA8_9M6.js";import{S as u}from"./Modal-BV4-zrH4.js";import{r as o}from"./vue.esm-bundler-BiAlgFmf.js";import"./v4-CQkTLCs1.js";import"./Icon-C-Sturzh.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./closeOnFocusOut-D0QTlgAv.js";import"./index-a4aneQim.js";import"./Button-CxIFeNFW.js";import"./Loader-DHIAU4Qg.js";const w={title:"Organisms/Side Panel",argTypes:{disableClickOutside:{description:"Disables closing of the side panel when clicked outside it.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:{type:"boolean"}},size:{description:"The size of the Side Panel",table:{type:{summary:"string"},defaultValue:{summary:"default"}},control:{type:"select"},options:["small","medium","compact","default","large"]},title:{description:"The Side Panel title",table:{type:{summary:"string"}}},focusTrap:{description:"Enable/Disable Focus Trap.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:{type:"boolean"}}},args:{disableClickOutside:!1,size:"default",title:"Je suis le titre",focusTrap:!1}},l={render:r=>({components:{SolarisModal:u,SolarisSidePanel:d},setup(){const a=o(!1),e=o(!1);return{args:r,toggleSidePanel:()=>{t("Toggle Side Panel")(),e.value=!e.value},closeModal:()=>{t("Toggle Modal")(),a.value=!1},showModalAndSidepanel:()=>{e.value=!0,a.value=!0},isVisibleModal:a,showSidePanel:e}},template:`<div>
    <SolarisButton @click="showModalAndSidepanel">Ouvrir le SidePanel</SolarisButton>
    <SolarisModal :show-modal="isVisibleModal" title="Je suis le titre" @close="closeModal">
      <template v-slot:content>Lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</template>
      <template v-slot:actions>
          <SolarisButton
            @click="closeModal"
            type="ghost"
            color="darkgrey"
            class="panel__cancel">
              Annuler
          </SolarisButton>
          <SolarisButton
            color="supernova"
            class="panel__validate">
              Valider
          </SolarisButton>
      </template>
    </SolarisModal>

    <SolarisSidePanel v-model="showSidePanel" v-bind="args">
        <template v-slot:content>
          <div style="margin-bottom: 16px;">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
          </div>
        </template>
        <template v-slot:actions>
          <SolarisButton
            @click="toggleSidePanel"
            type="ghost"
            color="darkgrey"
            class="panel__cancel">
              Annuler
          </SolarisButton>
          <SolarisButton
            color="supernova"
            class="panel__validate">
              Valider
          </SolarisButton>
        </template>
      </SolarisSidePanel>
    </div>`}),args:{disableClickOutside:!1,size:"default",title:"Je suis le titre",focusTrap:!1}};var i,s,n;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisModal,
      SolarisSidePanel
    },
    setup() {
      const isVisibleModal = ref(false);
      const showSidePanel = ref(false);
      const showModalAndSidepanel = () => {
        showSidePanel.value = true;
        isVisibleModal.value = true;
      };
      const toggleSidePanel = () => {
        action('Toggle Side Panel')();
        showSidePanel.value = !showSidePanel.value;
      };
      const closeModal = () => {
        action('Toggle Modal')();
        isVisibleModal.value = false;
      };
      return {
        args,
        toggleSidePanel,
        closeModal,
        showModalAndSidepanel,
        isVisibleModal,
        showSidePanel
      };
    },
    template: \`<div>
    <SolarisButton @click="showModalAndSidepanel">Ouvrir le SidePanel</SolarisButton>
    <SolarisModal :show-modal="isVisibleModal" title="Je suis le titre" @close="closeModal">
      <template v-slot:content>Lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</template>
      <template v-slot:actions>
          <SolarisButton
            @click="closeModal"
            type="ghost"
            color="darkgrey"
            class="panel__cancel">
              Annuler
          </SolarisButton>
          <SolarisButton
            color="supernova"
            class="panel__validate">
              Valider
          </SolarisButton>
      </template>
    </SolarisModal>

    <SolarisSidePanel v-model="showSidePanel" v-bind="args">
        <template v-slot:content>
          <div style="margin-bottom: 16px;">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
          </div>
        </template>
        <template v-slot:actions>
          <SolarisButton
            @click="toggleSidePanel"
            type="ghost"
            color="darkgrey"
            class="panel__cancel">
              Annuler
          </SolarisButton>
          <SolarisButton
            color="supernova"
            class="panel__validate">
              Valider
          </SolarisButton>
        </template>
      </SolarisSidePanel>
    </div>\`
  }),
  args: {
    disableClickOutside: false,
    size: 'default',
    title: 'Je suis le titre',
    focusTrap: false
  }
}`,...(n=(s=l.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const k=["MultipleElevatedContaint"];export{l as MultipleElevatedContaint,k as __namedExportsOrder,w as default};
