import{a as p}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as m}from"./Notifications-BV5oUaOZ.js";import{S as u}from"./Notification-D_XdS5r2.js";import{r as i}from"./vue.esm-bundler-BiAlgFmf.js";import{L as d}from"./types-CX4OQ2kf.js";import"./v4-CQkTLCs1.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Icon-C-Sturzh.js";import"./Collapse-BNiXmgF_.js";import"./generateId-CVaf2GGW.js";import"./useTips-CORXmiXO.js";const f=["transparent","quiet","informational","success","alert","error"],y=["toast","inline","banner"],b=`[
  {
    url: string
    label: string
  }
]`,g=["top-left","top-center","top-right","bottom-left","bottom-center","bottom-right"],h=["p","h2","h3","h4","h5","h6"],v={alertFormat:{description:"Format of the alert for **Inline type**. A single available value : block",table:{type:{summary:"string"}}},animate:{description:"Active animation for the notification for **Toast type**.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},color:{description:"The color of the notification.",table:{type:{summary:"string"},defaultValue:{summary:"success"}},control:{type:"select"},options:f},description:{description:"Description slot of the tips.",type:{summary:"string"}},duration:{description:"The duration for the notification for **Toast type**.",table:{type:{summary:"number"}}},icon:{description:"The icon at the left of the notification.",table:{type:{summary:"string"}}},id:{description:"The id of the notification.",table:{type:{summary:"string | number"}}},isClosable:{description:"Is closable ? showing/hidding curse.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},isCollapse:{description:"Collapsible like accordion if is true for **Inline type**.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},links:{description:"List of links.",table:{type:{summary:"array",detail:b}}},toastPosition:{description:"The position of the toast notification",table:{type:{summary:"string"},defaultValue:{summary:"top-center"}},control:{type:"select"},options:g},role:{description:"Define an Accessibility Role.",table:{type:{summary:"string | null"},defaultValue:{summary:"null"}}},show:{description:"Collapse is open if is true for **Inline type**.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},descriptionTag:{description:"The tag of the notification text.",table:{type:{summary:["div","p"]},defaultValue:{summary:"div"}},control:{type:"select"},options:["div","p"]},title:{description:"The Notification Title.",table:{type:{summary:"string"}}},titleLevel:{description:"The size of the titre.",table:{type:{summary:["h2","h3","h4","h5","h6","p"]},defaultValue:{summary:"h3"}},control:{type:"select"},options:h},type:{description:"The type of the notification.",table:{type:{summary:"string"},defaultValue:{summary:"toast"}},control:{type:"select"},options:y},closable:{description:'*Make notification closable. This prop is deprecated, use isClosable. <span style="color:orange">deprecated</span>*',table:{type:{summary:"boolean"},category:"Deprecated",defaultValue:{summary:"true"}},control:"boolean"},text:{description:'*The Notification Text. This prop is deprecated, use description. <span style="color:orange">deprecated</span>*',table:{type:{summary:"string"},category:"Deprecated"}},close:{description:"Event triggered at the closing of the notification",table:{category:"Events"},action:"close"},collapse:{description:"Event triggered at the collapsing of the notification",table:{category:"Events"},action:"collapse"}},l=[{url:"#",label:"Envoyer un courrier"},{url:"#",label:"Envoyer un courrier",target:d.BLANK}],w={title:"Molecules/Notification",argTypes:v,args:{animate:!0,alertFormat:"",color:"informational",description:"Lorem ipsum dolor",duration:3e3,icon:"",id:1,isClosable:!0,isCollapse:!0,links:l,role:"dialog",show:!0,descriptionTag:"div",title:"Titre de notification",titleLevel:"p",type:"inline",toastPosition:"top-center",closable:!0,text:"Old text"}},t={render:e=>({components:{SolarisNotification:u,SolarisNotifications:m},setup(){const r=i(!1),n=i(e.show),c=p("close");return{args:e,isVisible:r,isCollapse:n,elementClose:c}},template:`
    <div>
      <SolarisButton @click="isVisible = !isVisible">Toggle 1</SolarisButton>

      <SolarisNotifications style="margin-top: 30px;" :toastPosition="args.toastPosition" :type="args.type" @close="elementClose">
          <SolarisNotification v-model:isVisible="isVisible" v-model:isCollapse="isCollapse" v-bind="{...args, id: '1'}"/>
      </SolarisNotifications>
    </div>
  `}),args:{animate:!0,alertFormat:"",color:"success",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla sollicitudin Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla sollicitudin",duration:3e3,icon:"",id:1,isClosable:!0,isCollapse:!0,links:l,role:"dialog",descriptionTag:"div",title:"Titre de notification",titleLevel:"p",type:"inline",toastPosition:"top-center",closable:!0,text:"Old text"}};var o,s,a;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisNotification,
      SolarisNotifications
    },
    setup() {
      const isVisible = ref(false);
      const isCollapse = ref(args.show);
      const elementClose = action('close');
      return {
        args,
        isVisible,
        isCollapse,
        elementClose
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
    color: 'success',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla sollicitudin Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla sollicitudin',
    duration: 3000,
    icon: '',
    id: 1,
    isClosable: true,
    isCollapse: true,
    links,
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
}`,...(a=(s=t.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const B=["Notification"];export{t as Notification,B as __namedExportsOrder,w as default};
