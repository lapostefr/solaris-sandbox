import{a as r}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{r as c}from"./vue.esm-bundler-BiAlgFmf.js";import{a as g}from"./argTypes-COPYiQ5w.js";import{S as u}from"./SegmentedControl-Dzparpsw.js";import"./v4-CQkTLCs1.js";import"./type-CS7yfaSO.js";import"./Badge-D_m-TE_A.js";import"./Icon-C-Sturzh.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./types-BTVVhIqi.js";import"./Message-MlHtBEps.js";import"./Shadow-ZXaEhb3j.js";import"./Button-CxIFeNFW.js";import"./Loader-DHIAU4Qg.js";const b={allAvailableElements:{id:"id-all-elts",name:"name-all-elts",options:[{id:"option-all-1-id",icon:"misc-ghost",label:"Label 1",value:"option-1"},{id:"option-all-2-id",icon:"editing-birthday",label:"Label 2",value:"option-2"},{id:"option-all-3-id",label:"Label 3",value:"option-3"},{id:"option-all-4-id",icon:"editing-thumbs-up",label:"Label 4",value:"option-4"},{badgeNumber:"3",id:"option-all-5-id",label:"Label 5",value:"option-5"}]},slotCustomIcon:{id:"id-custom",name:"name-custom",options:[{checked:!0,id:"option-custom-1-id",label:"Label 1",value:"option-1"},{id:"option-custom-2-id",label:"Label 2",value:"option-2"},{id:"option-custom-3-id",label:"Label 3",value:"option-3"}]}},w={title:"Atoms/Segmented Control/Examples",argTypes:g,parameters:{docs:{description:{component:"The **Segmented Control** component presents a set of options from which the user can select just one. It offers the possibility of customizing the display in different ways (with icons, badge or slot)."}}}},o={render:t=>({components:{SolarisSegmentedControl:u},setup(){const l=c("option-3"),a=r("update:modelValue");return{args:t,model:l,onUpdateModel:a}},template:'<SolarisSegmentedControl v-model="model" v-bind="args" @update:modelValue="onUpdateModel" />'})};o.args=b.allAvailableElements;o.parameters={docs:{source:{code:`
<SolarisSegmentedControl
  id="id-custom"
  name="name-all-elts"
  :options='[{"id":"option-all-1-id", "icon": "misc-ghost", "label":"Label 1","value":"option-1"},{"id":"option-all-2-id", "icon": "editing-birthday", "label":"Label 2","value":"option-2"},{"id":"option-all-3-id","label":"Label 3","value":"option-3"}, {"id":"option-all-4-id", "icon": "editing-thumbs-up", "label":"Label 4","value":"option-4"}, {"badgeNumber": "3", "id":"option-all-5-id","label":"Label 5","value":"option-5"}]' />`}}};const e={render:t=>({components:{SolarisSegmentedControl:u},setup(){const l=c(void 0),a=r("update:modelValue");return{args:t,model:l,onUpdateModel:a}},template:`<SolarisSegmentedControl v-model="model" v-bind="args" @update:modelValue="onUpdateModel">
    <template #customIcon-1>
       <span class="slot sc__slot-icon">slot A</span>
    </template>
    <template #customIcon-2>
       <span class="slot sc__slot-icon">slot B</span>
    </template>
  </solarisSegmentedControl>`})};e.args=b.slotCustomIcon;e.parameters={docs:{description:{story:"Customized content can be inserted next to the item label. Use the customIcon slot followed by its index for a given location *(see show code)*."},source:{code:`
<SolarisSegmentedControl
  id="id-custom"
  name="name-custom"
  :options='[{"id":"option1-id","label":"Label 1","value":"option-1"},{"id":"option2-id","label":"Label 2","value":"option-2"},{"id":"option3-id","label":"Label 3","value":"option-3"}]'>
    <template #customIcon-1>
       <span class="slot sc__slot-icon">slot A</span>
    </template>
    <template #customIcon-2>
       <span class="slot sc__slot-icon">slot B</span>
    </template>
</solarisSegmentedControl>`}}};var n,s,i;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisSegmentedControl
    },
    setup() {
      const model = ref('option-3');
      const onUpdateModel = action('update:modelValue');
      return {
        args,
        model,
        onUpdateModel
      };
    },
    template: '<SolarisSegmentedControl v-model="model" v-bind="args" @update:modelValue="onUpdateModel" />'
  })
}`,...(i=(s=o.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var d,m,p;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisSegmentedControl
    },
    setup() {
      const model = ref(undefined);
      const onUpdateModel = action('update:modelValue');
      return {
        args,
        model,
        onUpdateModel
      };
    },
    template: \`<SolarisSegmentedControl v-model="model" v-bind="args" @update:modelValue="onUpdateModel">
    <template #customIcon-1>
       <span class="slot sc__slot-icon">slot A</span>
    </template>
    <template #customIcon-2>
       <span class="slot sc__slot-icon">slot B</span>
    </template>
  </solarisSegmentedControl>\`
  })
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const x=["AllAvailableElements","SlotCustomIcon"];export{o as AllAvailableElements,e as SlotCustomIcon,x as __namedExportsOrder,w as default};
