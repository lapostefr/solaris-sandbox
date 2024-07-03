import{S as c}from"./Notification-D3cD3czk.js";import{l}from"./links-D8sZcjfB.js";import{r as o}from"./vue.esm-bundler-DD7xIM0D.js";import"./generateId-DPOzJEtM.js";import"./useTips-lvOtqsXa.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const b={title:"Molecules/Notification",args:{animate:!0,alertFormat:"",color:"informational",description:"Lorem ipsum dolor",duration:3e3,icon:"",id:1,isClosable:!0,isCollapse:!0,links:l,role:"dialog",show:!0,descriptionTag:"div",title:"Titre de notification",titleLevel:"p",type:"inline",toastPosition:"top-center",closable:!0,text:"Old text"}},i={render:t=>({components:{SolarisNotification:c},setup(){const r=o(!1),a=o(t.show);return{args:t,isVisible:r,isCollapse:a}},template:`
    <div>
      <SolarisButton @click="isVisible = !isVisible">Toggle 1</SolarisButton>

      <SolarisNotifications style="margin-top: 30px;" :toastPosition="args.toastPosition" :type="args.type" @close="elementClose">
          <SolarisNotification v-model:isVisible="isVisible" v-model:isCollapse="isCollapse" v-bind="{...args, id: '1'}"/>
      </SolarisNotifications>
    </div>
  `}),args:{animate:!0,alertFormat:"",color:"informational",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla sollicitudin Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla sollicitudin",duration:3e3,icon:"",id:1,isClosable:!0,isCollapse:!0,links:l,role:"dialog",descriptionTag:"div",title:"Titre de notification",titleLevel:"p",type:"inline",toastPosition:"top-center",closable:!0,text:"Old text"}};var e,s,n;i.parameters={...i.parameters,docs:{...(e=i.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisNotification
    },
    setup() {
      const isVisible = ref(false);
      const isCollapse = ref(args.show);
      return {
        args,
        isVisible,
        isCollapse
      };
    },
    template: \`
    <div>
      <SolarisButton @click="isVisible = !isVisible">Toggle 1</SolarisButton>

      <SolarisNotifications style="margin-top: 30px;" :toastPosition="args.toastPosition" :type="args.type" @close="elementClose">
          <SolarisNotification v-model:isVisible="isVisible" v-model:isCollapse="isCollapse" v-bind="{...args, id: '1'}"/>
      </SolarisNotifications>
    </div>
  \`
  }),
  args: {
    animate: true,
    alertFormat: '',
    color: 'informational',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla sollicitudin Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla sollicitudin',
    duration: 3000,
    icon: '',
    id: 1,
    isClosable: true,
    isCollapse: true,
    links: links,
    role: 'dialog',
    descriptionTag: 'div',
    title: 'Titre de notification',
    titleLevel: 'p',
    type: 'inline',
    toastPosition: 'top-center',
    // |-- Deprecated
    closable: true,
    text: 'Old text'
    // Deprecated --|
  }
}`,...(n=(s=i.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const v=["Notification"];export{i as Notification,v as __namedExportsOrder,b as default};
