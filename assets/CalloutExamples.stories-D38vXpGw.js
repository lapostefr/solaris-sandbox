import{a as H}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{b as v,C as t,a as l,S as o}from"./Callout-BLmiSFEB.js";import{p as N,b as R,a as _}from"./argTypes-BiehChnM.js";import"./v4-CQkTLCs1.js";import"./vue.esm-bundler-BiAlgFmf.js";import"./Button-CxIFeNFW.js";import"./Icon-C-Sturzh.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Loader-DHIAU4Qg.js";import"./Collapse-BNiXmgF_.js";import"./Picture-BofBnaNi.js";import"./iframe-Tb9yYTcJ.js";import"../sb-preview/runtime.js";import"./generateId-CVaf2GGW.js";const e="Body text lorem ipsum dolor sit amet consectetur scelerisque scelerisque elit sagittis.",n="CalloutColored",r="Callout alt",i={calloutAllAvailableElements:{description:e,icon:"action-tips",pictureBodyRight:N,pictureHeader:R,title:"Titre"},calloutDefaultType:{description:e,title:"Callout default"},calloutClosableType:{description:e,componentType:v.closable,title:"Callout closable"},calloutCollapsibleType:{componentType:v.collapsible,description:e,title:"Callout collapsible"},calloutColored:[{componentStyle:t.brandAccent,componentStyleBackground:l.colored,description:e,title:n},{componentStyle:t.brandDefault,componentStyleBackground:l.colored,description:e,title:n},{componentStyle:t.neutral,componentStyleBackground:l.colored,description:e,title:n},{componentStyle:t.additionalPink,componentStyleBackground:l.colored,description:e,title:n},{componentStyle:t.additionalPurple,componentStyleBackground:l.colored,description:e,title:n},{componentStyle:t.additionalTurquoise,componentStyleBackground:l.colored,description:e,title:n}],calloutAlt:[{componentStyle:t.brandAccent,componentStyleBackground:l.alt,description:e,title:r},{componentStyle:t.brandDefault,componentStyleBackground:l.alt,description:e,title:r},{componentStyle:t.neutral,componentStyleBackground:l.alt,description:e,title:r},{componentStyle:t.additionalPink,componentStyleBackground:l.alt,description:e,title:r},{componentStyle:t.additionalPurple,componentStyleBackground:l.alt,description:e,title:r},{componentStyle:t.additionalTurquoise,componentStyleBackground:l.alt,description:e,title:r}]},Z={title:"Molecules/Callout/Examples",component:o,argTypes:_,parameters:{docs:{description:{component:"The **callout component** can be used to highlight information such as an advice."}}}},s={render:a=>({components:{SolarisCallout:o},setup(){return{args:a}},template:`
    <div style="padding: var(--size-32) var(--size-12); background-color: var(--neutral-lighter);">
        <SolarisCallout style="max-width: 343px;" v-bind="args">
          <template #head>
            <div class="slot" style="margin: 0; max-width: 53px; height: 24px; min-height: 0;">slot</div>
          </template>
          <template #body>
            <div class="slot" style="margin: 0;">slot</div>
          </template>
          <template #footer>
            <SolarisButton size="small" type="secondary" color="darkgrey">Button</SolarisButton>
          </template>
        </SolarisCallout>
    </div>`})};s.args=i.calloutAllAvailableElements;s.parameters={docs:{source:{code:`
<div style="padding: var(--size-32) var(--size-12); background-color: var(--neutral-lighter);">
  <SolarisCallout
    style="max-width: 343px;"
    title="Titre"
    description="Body text lorem ipsum dolor sit amet consectetur scelerisque scelerisque elit sagittis."
    pictureBodyRight='{ "alt": "Mon image", "url": "@/components/organisms/TileNew/mocks/colissimo.svg" }'
    pictureHeader='{ "alt": "Mon image", "url": "@/components/organisms/TileNew/mocks/colissimo.svg" }'
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
  </SolarisCallout>
<div/">`}}};const d={render:a=>({components:{SolarisCallout:o},setup(){return{args:a}},template:`
    <div style="padding: var(--size-32) var(--size-12); background-color: var(--neutral-lighter);">
        <SolarisCallout style="max-width: 343px;" v-bind="args" />
    </div>`})};d.args=i.calloutDefaultType;const p={render:a=>({components:{SolarisCallout:o},setup(){const y=H("close");return{args:a,elementClose:y}},template:`
    <div style="padding: var(--size-32) var(--size-12); background-color: var(--neutral-lighter);">
        <SolarisCallout style="max-width: 343px;" v-bind="args" @close="elementClose" />
    </div>`})};p.args=i.calloutClosableType;const c={render:a=>({components:{SolarisCallout:o},setup(){const y=H("collapse");return{args:a,elementCollapse:y}},template:`
    <div style="padding: var(--size-32) var(--size-12); background-color: var(--neutral-lighter);">
        <SolarisCallout style="width: 343px;" v-bind="args" @collapse="elementCollapse" />
    </div>`})};c.args=i.calloutCollapsibleType;const m={render:()=>({components:{SolarisCallout:o},data:()=>({data:i.calloutColored}),template:`
    <div style="display: flex; flex-wrap: wrap; gap: var(--size-16);">
        <SolarisCallout 
          style="width: 343px;"
          v-for="(variant, index) in data"
          v-bind="variant" 
        />
    </div>`})},u={render:()=>({components:{SolarisCallout:o},data:()=>({data:i.calloutAlt}),template:`
    <div style="display: flex; flex-wrap: wrap; gap: var(--size-16);">
        <SolarisCallout 
          style="width: 343px;"
          v-for="(variant, index) in data"
          v-bind="variant" 
        />
    </div>`})};var g,S,C;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisCallout
    },
    setup() {
      return {
        args
      };
    },
    template: \`
    <div style="padding: var(--size-32) var(--size-12); background-color: var(--neutral-lighter);">
        <SolarisCallout style="max-width: 343px;" v-bind="args">
          <template #head>
            <div class="slot" style="margin: 0; max-width: 53px; height: 24px; min-height: 0;">slot</div>
          </template>
          <template #body>
            <div class="slot" style="margin: 0;">slot</div>
          </template>
          <template #footer>
            <SolarisButton size="small" type="secondary" color="darkgrey">Button</SolarisButton>
          </template>
        </SolarisCallout>
    </div>\`
  })
}`,...(C=(S=s.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var b,x,h;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisCallout
    },
    setup() {
      return {
        args
      };
    },
    template: \`
    <div style="padding: var(--size-32) var(--size-12); background-color: var(--neutral-lighter);">
        <SolarisCallout style="max-width: 343px;" v-bind="args" />
    </div>\`
  })
}`,...(h=(x=d.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var k,B,f;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisCallout
    },
    setup() {
      const elementClose = action('close');
      return {
        args,
        elementClose
      };
    },
    template: \`
    <div style="padding: var(--size-32) var(--size-12); background-color: var(--neutral-lighter);">
        <SolarisCallout style="max-width: 343px;" v-bind="args" @close="elementClose" />
    </div>\`
  })
}`,...(f=(B=p.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};var w,z,T;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisCallout
    },
    setup() {
      const elementCollapse = action('collapse');
      return {
        args,
        elementCollapse
      };
    },
    template: \`
    <div style="padding: var(--size-32) var(--size-12); background-color: var(--neutral-lighter);">
        <SolarisCallout style="width: 343px;" v-bind="args" @collapse="elementCollapse" />
    </div>\`
  })
}`,...(T=(z=c.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var A,q,D;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => ({
    components: {
      SolarisCallout
    },
    data: () => ({
      data: data.calloutColored
    }),
    template: \`
    <div style="display: flex; flex-wrap: wrap; gap: var(--size-16);">
        <SolarisCallout 
          style="width: 343px;"
          v-for="(variant, index) in data"
          v-bind="variant" 
        />
    </div>\`
  })
}`,...(D=(q=m.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var E,P,M;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => ({
    components: {
      SolarisCallout
    },
    data: () => ({
      data: data.calloutAlt
    }),
    template: \`
    <div style="display: flex; flex-wrap: wrap; gap: var(--size-16);">
        <SolarisCallout 
          style="width: 343px;"
          v-for="(variant, index) in data"
          v-bind="variant" 
        />
    </div>\`
  })
}`,...(M=(P=u.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};const $=["AllAvailableElements","DefaultType","ClosableType","CollapsibleType","ColoredStyleBackground","AltStyleBackground"];export{s as AllAvailableElements,u as AltStyleBackground,p as ClosableType,c as CollapsibleType,m as ColoredStyleBackground,d as DefaultType,$ as __namedExportsOrder,Z as default};
