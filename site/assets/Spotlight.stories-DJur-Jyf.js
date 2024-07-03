import{S as l}from"./Spotlight-CHa3bRQW.js";import"./vue.esm-bundler-DD7xIM0D.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const s=[{title:"Title 1",description:"Description 1 : Lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"},{title:"Title 2",description:"Description 2 : enean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes."},{title:"Title 3",description:"Description 3 : Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint. Sed quibusdam recusandae."},{title:"Title 4",description:"Description 4 : Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. "}],r=`[
  {
    title: string,
    description: string
  }
]`,a=["top","top-start","top-end","bottom","bottom-start","bottom-end","left","left-start","left-end","right","right-start","right-end"],m={title:"Molecules/Spotlight",argTypes:{forceShow:{description:"Is the spotlight is visible when the component is mounted",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},placement:{description:"Control doesn't work because Tooltip generated after DOM loading, please use Docs section for testing",table:{type:{summary:"string"},defaultValue:{summary:"top"}},control:{type:"select"},options:a},size:{description:"Choose the size of the spotlight",table:{type:{summary:"boolean"},defaultValue:{summary:"reponsive"}},control:{type:"select"},options:["responsive","compact"]},spotlights:{description:"Define all spotlights with title and description",table:{type:{summary:"array",detail:r}},required:!0}},args:{placement:"top",size:"responsive",spotlights:s,forceShow:!1}},t={render:n=>({components:{SolarisSpotlight:l},setup(){return{args:n}},template:`<div style="height: 750px; display: flex; align-items: center; justify-content: center;">
      <SolarisSpotlight v-bind="args"> 
        <template v-slot:trigger>
          <SolarisButton>Spotlight Trigger</SolarisButton>
        </template>
        <template v-slot:content>
          <div style="padding: 20px;">
            <div style="display: flex; justify-content: space-between;">
              <div style="display: flex; flex-direction: column;">
                <div style="margin-bottom: 20px;">Title</div>
                <div>Description</div>
              </div>
              <div style="display: flex; flex-direction: column;">
                <div style="margin-bottom: 20px;">Title</div>
                <div>Description</div>
              </div>
            </div>
          </div>
        </template>
      </SolarisSpotlight>
    </div>`}),args:{placement:"top",size:"responsive",spotlights:s,forceShow:!0,title:"Title"}};var e,i,o;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisSpotlight
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div style="height: 750px; display: flex; align-items: center; justify-content: center;">
      <SolarisSpotlight v-bind="args"> 
        <template v-slot:trigger>
          <SolarisButton>Spotlight Trigger</SolarisButton>
        </template>
        <template v-slot:content>
          <div style="padding: 20px;">
            <div style="display: flex; justify-content: space-between;">
              <div style="display: flex; flex-direction: column;">
                <div style="margin-bottom: 20px;">Title</div>
                <div>Description</div>
              </div>
              <div style="display: flex; flex-direction: column;">
                <div style="margin-bottom: 20px;">Title</div>
                <div>Description</div>
              </div>
            </div>
          </div>
        </template>
      </SolarisSpotlight>
    </div>\`
  }),
  args: {
    placement: 'top',
    size: 'responsive',
    spotlights: spotlights,
    forceShow: true,
    title: 'Title'
  }
}`,...(o=(i=t.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const u=["Spotlight"];export{t as Spotlight,u as __namedExportsOrder,m as default};
