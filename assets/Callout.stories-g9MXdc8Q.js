import{a as t}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{r as p}from"./vue.esm-bundler-BiAlgFmf.js";import{S as a,C as c,a as d,b as u,c as g}from"./Callout-BLmiSFEB.js";import{a as y,p as C,b as v}from"./argTypes-BiehChnM.js";import"./v4-CQkTLCs1.js";import"./Button-CxIFeNFW.js";import"./Icon-C-Sturzh.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Loader-DHIAU4Qg.js";import"./Collapse-BNiXmgF_.js";import"./Picture-BofBnaNi.js";import"./iframe-Tb9yYTcJ.js";import"../sb-preview/runtime.js";import"./generateId-CVaf2GGW.js";const N={title:"Molecules/Callout",component:a,argTypes:y,args:{ariaLabel:"Masquer le message",componentStyle:c.brandAccent,componentStyleBackground:d.default,componentType:u.default,description:"Body text lorem ipsum dolor sit amet consectetur scelerisque scelerisque elit sagittis.",icon:"action-tips",pictureBodyRight:C,pictureHeader:v,showBorderLeft:!0,showContainerBorder:!0,title:"Titre",titleTag:g.h3}},e={render:r=>({components:{SolarisCallout:a},setup(){const i=p(!0),n=t("close"),m=t("collapse");return{args:r,isOpenCollapseModel:i,elementClose:n,elementCollapse:m}},template:`
    <div style="padding: var(--size-32) var(--size-12); background-color: var(--neutral-lighter);">
      <SolarisCallout 
        v-bind="args" 
        v-model="isOpenCollapseModel" 
        @close="elementClose"
        @collapse="elementCollapse"
      >
          <template #head>
            <div class="slot" style="margin: 0; width: 53px; height: 24px; min-height: 0;">slot</div>
          </template>
          <template #body>
            <div class="slot" style="margin: 0;">slot</div>
          </template>
          <template #footer>
            <SolarisButton size="small" type="secondary" color="darkgrey">Button</SolarisButton>
         </template>
      </SolarisCallout>
    </div>`}),parameters:{docs:{source:{code:`
<SolarisCallout
  title="Titre"
  description="Body text lorem ipsum dolor sit amet consectetur scelerisque scelerisque elit sagittis."
  pictureBodyRight='{ "alt": "Mon image", "url": "@/components/organisms/TileNew/mocks/colissimo.svg" }'
  pictureHeader='{ "alt": "Mon image", "url": "@/components/organisms/TileNew/mocks/colissimo.svg" }'
  ariaLabel="Masquer le message"
  componentStyle="brand-accent"
  componentStyleBackground="default"
  componentType="default"
>
  <template #head>
    <div class="slot">slot</div>
  </template>
  <template #body>
    <div class="slot">slot</div>
  </template>
  <template #footer>
    <SolarisButton size="small" type="secondary" color="darkgrey">Button</SolarisButton>
  </template>
</SolarisCallout>`}}}};var o,l,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisCallout
    },
    setup() {
      const isOpenCollapseModel = ref(true);
      const elementClose = action('close');
      const elementCollapse = action('collapse');
      return {
        args,
        isOpenCollapseModel,
        elementClose,
        elementCollapse
      };
    },
    template: \`
    <div style="padding: var(--size-32) var(--size-12); background-color: var(--neutral-lighter);">
      <SolarisCallout 
        v-bind="args" 
        v-model="isOpenCollapseModel" 
        @close="elementClose"
        @collapse="elementCollapse"
      >
          <template #head>
            <div class="slot" style="margin: 0; width: 53px; height: 24px; min-height: 0;">slot</div>
          </template>
          <template #body>
            <div class="slot" style="margin: 0;">slot</div>
          </template>
          <template #footer>
            <SolarisButton size="small" type="secondary" color="darkgrey">Button</SolarisButton>
         </template>
      </SolarisCallout>
    </div>\`
  }),
  parameters: {
    docs: {
      source: {
        code: \`
<SolarisCallout
  title="Titre"
  description="Body text lorem ipsum dolor sit amet consectetur scelerisque scelerisque elit sagittis."
  pictureBodyRight='{ "alt": "Mon image", "url": "@/components/organisms/TileNew/mocks/colissimo.svg" }'
  pictureHeader='{ "alt": "Mon image", "url": "@/components/organisms/TileNew/mocks/colissimo.svg" }'
  ariaLabel="Masquer le message"
  componentStyle="brand-accent"
  componentStyleBackground="default"
  componentType="default"
>
  <template #head>
    <div class="slot">slot</div>
  </template>
  <template #body>
    <div class="slot">slot</div>
  </template>
  <template #footer>
    <SolarisButton size="small" type="secondary" color="darkgrey">Button</SolarisButton>
  </template>
</SolarisCallout>\`
      }
    }
  }
}`,...(s=(l=e.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const H=["Callout"];export{e as Callout,H as __namedExportsOrder,N as default};
