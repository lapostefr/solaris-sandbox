import{S as c}from"./Notifications-BV5oUaOZ.js";import{S as d}from"./Notification-D_XdS5r2.js";import{L as y}from"./types-CX4OQ2kf.js";import{r as i}from"./vue.esm-bundler-BiAlgFmf.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Icon-C-Sturzh.js";import"./Collapse-BNiXmgF_.js";import"./generateId-CVaf2GGW.js";import"./useTips-CORXmiXO.js";const e=[{url:"#",label:"Envoyer un courrier"},{url:"#",label:"Envoyer un courrier",target:y.BLANK}],p={base:{alertFormat:"block",color:"informational",id:1,links:[{url:"#",label:"link wording 1"},{url:"#",label:"link wording 2"}],title:"Notification title",type:"inline"},inline:{closable:{color:"success",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla sollicitudin sapien, vitae aliquet lacus convallis vitae. Morbi magna urna",id:1,links:e,isClosable:!1,title:"success notification",type:"inline"},collapse:{color:"error",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla sollicitudin sapien, vitae aliquet lacus convallis vitae. Morbi magna urna",id:2,isCollapse:!0,links:e,show:!0,title:"Error notification",type:"inline"}},toast:{closable:{animate:!0,color:"alert",description:"Disappears automatically. Can also be closed by user.",duration:3e3,icon:"action-information-warning",id:1,links:e,role:"dialog",title:"Notification title",type:"toast"},noClosable:{animate:!0,color:"quiet",description:"Disappears automatically. Can also be closed by user.",duration:3e3,icon:"action-information-warning",id:2,isClosable:!1,links:e,role:"dialog",title:"Notification title",type:"toast"}}},L={title:"Molecules/Notification/Examples",parameters:{previewTabs:{canvas:{hidden:!0}},viewMode:"docs",docs:{description:{component:"The **Notification component** allows you to have three types of notifications, Toast, Inline or Banner.<br> This section introduces you to the Toast and Inline types and shows you how to use this component."}}}},a={render:o=>({components:{SolarisNotification:d,SolarisNotifications:c},setup(){const t=i(p.base),s=i(!0);return{args:o,data:t,isVisible:s}},template:`
        <SolarisNotification v-model:isVisible="isVisible" v-bind="data">
            <p class="slot" style="margin: 0 0 6px 0; color: #3c3c3c; font-size: 1.2rem; line-height: 1.6rem;">For the description of the notification, you can choose to use a slot or using the description prop.</p>  
        </SolarisNotification>
  `})},n={render:o=>({components:{SolarisNotification:d,SolarisNotifications:c},setup(){const t=i(p.inline),s=i(!0),r=i(!0);return{args:o,data:t,isVisible:s,isVisibleB:r}},template:`
      <SolarisNotifications type="inline">
        <SolarisNotification v-model:isVisible="isVisible" v-bind="data.closable"/>
        <SolarisNotification v-model:isVisible="isVisibleB" v-bind="data.collapse"/>
      </SolarisNotifications>
  `})},l={render:o=>({components:{SolarisNotification:d,SolarisNotifications:c},setup(){const t=i(p.toast),s=i(!0),r=i(!0);return{args:o,isVisible:s,isVisibleB:r,data:t}},template:`
    <div>
      <SolarisButton @click="isVisible = !isVisible">Toggle Toast 1</SolarisButton> 
      <SolarisButton @click="isVisibleB = !isVisibleB">Toggle Toast 2</SolarisButton> 

      <SolarisNotifications type="toast">
        <SolarisNotification v-model:isVisible="isVisible" v-bind="data.closable"/>
        <SolarisNotification v-model:isVisible="isVisibleB" v-bind="data.noClosable"/>
      </SolarisNotifications>
    </div>
  `})};var u,b,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisNotification,
      SolarisNotifications
    },
    setup() {
      const data = ref(dataExamples.base);
      const isVisible = ref(true);
      return {
        args,
        data,
        isVisible
      };
    },
    template: \`
        <SolarisNotification v-model:isVisible="isVisible" v-bind="data">
            <p class="slot" style="margin: 0 0 6px 0; color: #3c3c3c; font-size: 1.2rem; line-height: 1.6rem;">For the description of the notification, you can choose to use a slot or using the description prop.</p>  
        </SolarisNotification>
  \`
  })
}`,...(m=(b=a.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};var f,V,S;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisNotification,
      SolarisNotifications
    },
    setup() {
      const data = ref(dataExamples.inline);
      const isVisible = ref(true);
      const isVisibleB = ref(true);
      return {
        args,
        data,
        isVisible,
        isVisibleB
      };
    },
    template: \`
      <SolarisNotifications type="inline">
        <SolarisNotification v-model:isVisible="isVisible" v-bind="data.closable"/>
        <SolarisNotification v-model:isVisible="isVisibleB" v-bind="data.collapse"/>
      </SolarisNotifications>
  \`
  })
}`,...(S=(V=n.parameters)==null?void 0:V.docs)==null?void 0:S.source}}};var v,g,N;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisNotification,
      SolarisNotifications
    },
    setup() {
      const data = ref(dataExamples.toast);
      const isVisible = ref(true);
      const isVisibleB = ref(true);
      return {
        args,
        isVisible,
        isVisibleB,
        data
      };
    },
    template: \`
    <div>
      <SolarisButton @click="isVisible = !isVisible">Toggle Toast 1</SolarisButton> 
      <SolarisButton @click="isVisibleB = !isVisibleB">Toggle Toast 2</SolarisButton> 

      <SolarisNotifications type="toast">
        <SolarisNotification v-model:isVisible="isVisible" v-bind="data.closable"/>
        <SolarisNotification v-model:isVisible="isVisibleB" v-bind="data.noClosable"/>
      </SolarisNotifications>
    </div>
  \`
  })
}`,...(N=(g=l.parameters)==null?void 0:g.docs)==null?void 0:N.source}}};const D=["AllAvailableElements","Inline","Toast"];export{a as AllAvailableElements,n as Inline,l as Toast,D as __namedExportsOrder,L as default};
