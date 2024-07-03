import{S as c}from"./Notification-D3cD3czk.js";import{l as e}from"./links-D8sZcjfB.js";import{r as i}from"./vue.esm-bundler-DD7xIM0D.js";import"./generateId-DPOzJEtM.js";import"./useTips-lvOtqsXa.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const d={base:{alertFormat:"block",color:"informational",id:1,links:[{url:"#",label:"link wording 1"},{url:"#",label:"link wording 2"}],title:"Notification title",type:"inline"},inline:{closable:{color:"success",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla sollicitudin sapien, vitae aliquet lacus convallis vitae. Morbi magna urna",id:1,links:e,isClosable:!1,title:"success notification",type:"inline"},collapse:{color:"error",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla sollicitudin sapien, vitae aliquet lacus convallis vitae. Morbi magna urna",id:2,isCollapse:!0,links:e,show:!0,title:"Error notification",type:"inline"}},toast:{closable:{animate:!0,color:"alert",description:"Disappears automatically. Can also be closed by user.",duration:3e3,icon:"action-information-warning",id:1,links:e,role:"dialog",title:"Notification title",type:"toast"},noClosable:{animate:!0,color:"quiet",description:"Disappears automatically. Can also be closed by user.",duration:3e3,icon:"action-information-warning",id:2,isClosable:!1,links:e,role:"dialog",title:"Notification title",type:"toast"}}},k={title:"Molecules/Notification/Examples",parameters:{previewTabs:{canvas:{hidden:!0}},viewMode:"docs",docs:{description:{component:"The **Notification component** allows you to have three types of notifications, Toast, Inline or Banner.<br> This section introduces you to the Toast and Inline types and shows you how to use this component."}}}},a={render:o=>({components:{SolarisNotification:c},setup(){const t=i(d.base),s=i(!0);return{args:o,data:t,isVisible:s}},template:`
        <SolarisNotification v-model:isVisible="isVisible" v-bind="data">
            <p class="slot" style="margin: 0 0 6px 0; color: #3c3c3c; font-size: 1.2rem; line-height: 1.6rem;">For the description of the notification, you can choose to use a slot or using the description prop.</p>  
        </SolarisNotification>
  `})},n={render:o=>({components:{SolarisNotification:c},setup(){const t=i(d.inline),s=i(!0),r=i(!0);return{args:o,data:t,isVisible:s,isVisibleB:r}},template:`
      <SolarisNotifications type="inline">
        <SolarisNotification v-model:isVisible="isVisible" v-bind="data.closable"/>
        <SolarisNotification v-model:isVisible="isVisibleB" v-bind="data.collapse"/>
      </SolarisNotifications>
  `})},l={render:o=>({components:{SolarisNotification:c},setup(){const t=i(d.toast),s=i(!0),r=i(!0);return{args:o,isVisible:s,isVisibleB:r,data:t}},template:`
    <div>
      <SolarisButton @click="isVisible = !isVisible">Toggle Toast 1</SolarisButton> 
      <SolarisButton @click="isVisibleB = !isVisibleB">Toggle Toast 2</SolarisButton> 

      <SolarisNotifications type="toast">
        <SolarisNotification v-model:isVisible="isVisible" v-bind="data.closable"/>
        <SolarisNotification v-model:isVisible="isVisibleB" v-bind="data.noClosable"/>
      </SolarisNotifications>
    </div>
  `})};var p,b,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisNotification
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
}`,...(u=(b=a.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var m,f,V;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisNotification
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
}`,...(V=(f=n.parameters)==null?void 0:f.docs)==null?void 0:V.source}}};var v,S,g;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisNotification
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
}`,...(g=(S=l.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};const x=["AllAvailableElements","Inline","Toast"];export{a as AllAvailableElements,n as Inline,l as Toast,x as __namedExportsOrder,k as default};
