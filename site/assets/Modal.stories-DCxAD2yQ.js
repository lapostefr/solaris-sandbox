import{a as o}from"./chunk-MZXVCX43-DWuJqIWT.js";import"./v4-D8aEg3BZ.js";const c={title:"Organisms/Modal/Default",args:{arialabel:"Je suis une modale",closable:!0,colorBorderTop:"supernova",focusTrap:!0,mobileFull:!1,showModal:!0,showTitle:!0,size:"default",title:"Je suis le titre",titleLevel:"h1",padding:"default"}},e={render:l=>({setup(){const s=o("Toggled modal"),r=o("Changed");return{args:l,elementToggle:s,elementChanged:r,toggle:()=>{l.showModal=!l.showModal}}},template:`<div>
    <SolarisButton @click="toggle">Ouvrir la modale</SolarisButton>
    <SolarisModal v-model="args.showModal" @close="toggle" v-bind="args" @toggledModal="elementChanged">
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
    </div>`}),args:{arialabel:"Je suis une modale",colorBorderTop:"supernova",disableClickOutside:!1,focusTrap:!0,mobileFull:!1,showModal:!0,showTitle:!0,size:"default",title:"Je suis le titre",titleLevel:"h1",padding:"default",closable:!0}};var t,a,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (args: any) => ({
    setup() {
      const elementToggle = action('Toggled modal');
      const elementChanged = action('Changed');
      const toggle = () => {
        args.showModal = !args.showModal;
      };
      return {
        args,
        elementToggle,
        elementChanged,
        toggle
      };
    },
    template: \`<div>
    <SolarisButton @click="toggle">Ouvrir la modale</SolarisButton>
    <SolarisModal v-model="args.showModal" @close="toggle" v-bind="args" @toggledModal="elementChanged">
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
    showModal: true,
    showTitle: true,
    size: 'default',
    title: 'Je suis le titre',
    titleLevel: 'h1',
    padding: 'default',
    // |-- Deprecated
    closable: true
    // Deprecated --|
  }
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const g=["Default"];export{e as Default,g as __namedExportsOrder,c as default};
