import{a as r}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{r as d}from"./vue.esm-bundler-BiAlgFmf.js";import{S as i,C as m,I as p,L as c,a as g}from"./SegmentedControl-Dzparpsw.js";import{a as u}from"./argTypes-COPYiQ5w.js";import{a as b}from"./type-CS7yfaSO.js";import"./v4-CQkTLCs1.js";import"./Badge-D_m-TE_A.js";import"./Icon-C-Sturzh.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./types-BTVVhIqi.js";import"./Message-MlHtBEps.js";import"./Shadow-ZXaEhb3j.js";import"./Button-CxIFeNFW.js";import"./Loader-DHIAU4Qg.js";const S=[{icon:"misc-ghost",id:"option1-id",label:"Label 1",value:"option-1"},{icon:"misc-ghost",id:"option2-id",label:"Label 2",value:"option-2"},{disabled:!0,icon:"misc-ghost",id:"option3-id",label:"Label 3",value:"option-3"},{id:"option4-id",label:"Label 4",value:"option-4"},{badgeNumber:"2",id:"option5-id",label:"Label 5",value:"option-5"}],x={title:"Atoms/Segmented Control",component:i,argTypes:u,args:{componentStyle:m.primary,dataError:{active:!1,message:""},disabled:!1,fullContainer:!1,iconPosition:p.iconLeft,id:"id-sc",label:"Segmented control heading",labelPosition:c.outside,mandatory:!1,message:"Info Message",name:"name-sc",options:S,overflowScroll:!0,shadowBgColor:b.NeutralSoft,size:g.medium}},o={render:l=>({components:{SolarisSegmentedControl:i},setup(){const n=d("option-1"),s=r("update:modelValue");return{args:l,model:n,onUpdateModel:s}},template:`
    <SolarisSegmentedControl v-model="model" v-bind="args" @update:modelValue="onUpdateModel">
        <template #customIcon-3>
          <span class="slot" style="height: var(--size-20); margin: 0; padding: 0; width: auto; min-height: 0;">slot</span>
        </template>
    </solarisSegmentedControl>
    `})};o.parameters={docs:{source:{code:`
<SolarisSegmentedControl
  id="id-sc"
  name="name-sc"
  :options='[{"icon": "misc-ghost", "id":"option1-id","label":"Label 1","value":"option-1"},{"icon": "misc-ghost", "id":"option2-id","label":"Label 2","value":"option-2"},{"disabled": "true", "icon": "misc-ghost","id":"option3-id","label":"Label 3","value":"option-3"}, {"id":"option4-id","label":"Label 4","value":"option-4"}, {"badgeNumber":"2", "id":"option4-id", "label":"Label 5","value":"option-5"}]'>
    <template #customIcon-3>
        <span class="slot" style="margin: 0; padding: 0; width: auto; min-height: 0;">slot</span>
    </template>
</solarisSegmentedControl>`}}};var e,t,a;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisSegmentedControl
    },
    setup() {
      const model = ref('option-1');
      const onUpdateModel = action('update:modelValue');
      return {
        args,
        model,
        onUpdateModel
      };
    },
    template: \`
    <SolarisSegmentedControl v-model="model" v-bind="args" @update:modelValue="onUpdateModel">
        <template #customIcon-3>
          <span class="slot" style="height: var(--size-20); margin: 0; padding: 0; width: auto; min-height: 0;">slot</span>
        </template>
    </solarisSegmentedControl>
    \`
  })
}`,...(a=(t=o.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const E=["SegmentedControl"];export{o as SegmentedControl,E as __namedExportsOrder,x as default};
