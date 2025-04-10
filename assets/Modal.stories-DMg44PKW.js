import{a as i}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as d}from"./Modal-BV4-zrH4.js";import{a as n}from"./argsTypeModal-CuWBmXn4.js";import{r as m}from"./vue.esm-bundler-BiAlgFmf.js";import"./v4-CQkTLCs1.js";import"./Button-CxIFeNFW.js";import"./Icon-C-Sturzh.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Loader-DHIAU4Qg.js";import"./closeOnFocusOut-D0QTlgAv.js";import"./index-a4aneQim.js";const k={title:"Organisms/Modal/Default",argTypes:n,args:{arialabel:"Je suis une modale",closable:!0,colorBorderTop:"supernova",focusTrap:!0,mobileFull:!1,showTitle:!0,size:"default",title:"Je suis le titre",titleLevel:"h1",padding:"default"}},l={render:o=>({components:{SolarisModal:d},setup(){const e=m(o.showModal),t=i("Toggled modal",e.value);return{args:o,elementToggle:t,toggle:()=>{e.value=!e.value,t()},modalModel:e}},template:`<div>
    <SolarisButton @click="toggle">Ouvrir la modale</SolarisButton>
    <SolarisModal v-model="modalModel" @close="toggle(modalModel)" v-bind="args" @toggle="toggle">
      <template v-slot:content>Lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</template>
      <template v-slot:actions>
        <SolarisButton
          @click="toggle"
          type="ghost"
          color="darkgrey"
          class="panel__cancel"
        >Annuler</SolarisButton
        >
        <SolarisButton
          @click="toggle"
          color="supernova"
          class="panel__validate"
        >Valider</SolarisButton
        >
      </template>
    </SolarisModal>
    </div>`}),args:{arialabel:"Je suis une modale",colorBorderTop:"supernova",disableClickOutside:!1,focusTrap:!0,mobileFull:!1,showTitle:!0,size:"default",title:"Je suis le titre",titleLevel:"h1",padding:"default",closable:!0}};var a,r,s;l.parameters={...l.parameters,docs:{...(a=l.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisModal
    },
    setup() {
      const modalModel = ref(args.showModal);
      const elementToggle = action('Toggled modal', modalModel.value);
      const toggle = () => {
        modalModel.value = !modalModel.value;
        elementToggle();
      };
      return {
        args,
        elementToggle,
        toggle,
        modalModel
      };
    },
    template: \`<div>
    <SolarisButton @click="toggle">Ouvrir la modale</SolarisButton>
    <SolarisModal v-model="modalModel" @close="toggle(modalModel)" v-bind="args" @toggle="toggle">
      <template v-slot:content>Lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</template>
      <template v-slot:actions>
        <SolarisButton
          @click="toggle"
          type="ghost"
          color="darkgrey"
          class="panel__cancel"
        >Annuler</SolarisButton
        >
        <SolarisButton
          @click="toggle"
          color="supernova"
          class="panel__validate"
        >Valider</SolarisButton
        >
      </template>
    </SolarisModal>
    </div>\`
  }),
  args: {
    arialabel: 'Je suis une modale',
    colorBorderTop: 'supernova',
    disableClickOutside: false,
    focusTrap: true,
    mobileFull: false,
    showTitle: true,
    size: 'default',
    title: 'Je suis le titre',
    titleLevel: 'h1',
    padding: 'default',
    // |-- Deprecated
    closable: true
    // Deprecated --|
  }
}`,...(s=(r=l.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const _=["Default"];export{l as Default,_ as __namedExportsOrder,k as default};
