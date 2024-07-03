import{a as n}from"./chunk-MZXVCX43-DWuJqIWT.js";import{S as d}from"./Popover-lWsRqz4G.js";import"./v4-D8aEg3BZ.js";import"./focusTrap-CkRmwrmc.js";import"./index-ADTFLffw.js";import"./vue.esm-bundler-DD7xIM0D.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const y={title:"Molecules/Popover",argTypes:{cancelButton:{description:"Text of the cancel button.",table:{type:{summary:"string"}}},content:{description:"Main text of the popover.",table:{type:{summary:"string"}}},direction:{description:"Direction of the arrow.",table:{type:{summary:["Top Left","Top Middle","Top Right","Bottom Left","Bottom Middle","Bottom Right","Left Top","Left Middle","Left Bottom","Right Top","Right Middle","Right Bottom"].join(" | ")}},control:{type:"select"},options:["Top Left","Top Middle","Top Right","Bottom Left","Bottom Middle","Bottom Right","Left Top","Left Middle","Left Bottom","Right Top","Right Middle","Right Bottom"],defaultValue:{summary:"Right Bottom"}},showPopover:{description:"Show or hide popover.",table:{type:{summary:"boolean"}},control:"boolean"},type:{description:"Type of the validate button.",table:{type:{summary:"string"}}},title:{description:"Text of the Popover title.",table:{type:{summary:"string"}}},validateButton:{description:"Text of the validate button",table:{type:{summary:"string"}}}},args:{cancelButton:"Cancel",content:"Lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",direction:"Top Left",showPopover:!0,title:"Title",type:"transactional",validateButton:"Validate"}},t={render:e=>({components:{SolarisPopover:d},setup(){const l=()=>{n("changed"),o()},s=()=>{n("cancel"),e.showPopover=!1},o=()=>{e.showPopover=!e.showPopover};return{args:e,elementChanged:l,elementCancel:s,toggle:o}},template:`
    <div style="padding: 50px; background:#d2d2d1; height: 100vh;">
     <SolarisButton  style="margin-bottom: 10px;" @click="toggle">Ouvrir la popover</SolarisButton>
      <SolarisPopover v-model="args.value" v-bind="args" @changed="elementChanged" @cancel="elementCancel" />
    </div>
    `}),args:{cancelButton:"Cancel",content:"Lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",direction:"Top Left",showPopover:!0,title:"Title",type:"transactional",validateButton:"Validate"}};var a,i,r;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisPopover
    },
    setup() {
      const elementChanged = () => {
        action('changed');
        toggle();
      };
      const elementCancel = () => {
        action('cancel');
        args.showPopover = false;
      };
      const toggle = () => {
        args.showPopover = !args.showPopover;
      };
      return {
        args,
        elementChanged,
        elementCancel,
        toggle
      };
    },
    template: \`
    <div style="padding: 50px; background:#d2d2d1; height: 100vh;">
     <SolarisButton  style="margin-bottom: 10px;" @click="toggle">Ouvrir la popover</SolarisButton>
      <SolarisPopover v-model="args.value" v-bind="args" @changed="elementChanged" @cancel="elementCancel" />
    </div>
    \`
  }),
  args: {
    cancelButton: 'Cancel',
    content: 'Lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    direction: 'Top Left',
    showPopover: true,
    title: 'Title',
    type: 'transactional',
    validateButton: 'Validate'
  }
}`,...(r=(i=t.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const f=["Popover"];export{t as Popover,f as __namedExportsOrder,y as default};
