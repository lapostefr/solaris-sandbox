import{a as s}from"./chunk-MZXVCX43-DWuJqIWT.js";import{S as i,a as c}from"./Collapse-B74F9Pzu.js";import{r as m}from"./vue.esm-bundler-DD7xIM0D.js";import"./v4-D8aEg3BZ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const y={title:"Molecules/Accordion",argTypes:{compact:{description:"Size compact for the accordion.",table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},disabled:{description:"Enable/disable the accordion.",table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},hasIntro:{description:"Displays the possible slot intro after the accordion title",table:{type:{summary:"boolean"}},defaultValue:{summary:!1},control:"boolean"},icon:{description:"Choose icon at the top right when the accordion is close.",table:{type:{summary:"string"}},defaultValue:{summary:"arrow-bottom"}},isFocusable:{description:"Active focus on accordion.",table:{type:{summary:"boolean"}},defaultValue:{summary:!1},control:"boolean"},isSeparator:{description:"Display separator.",table:{type:{summary:"boolean"}},defaultValue:{summary:!1},control:"boolean"},openIcon:{description:"Choose icon at the top right when the accordion is open.",table:{type:{summary:"string"}}},value:{description:"Change the state of the accordion.",table:{type:{summary:"boolean"}},defaultValue:{summary:!1},control:"boolean"}},args:{compact:!1,disabled:!1,hasIntro:!1,icon:"arrow-bottom",isFocusable:!1,isSeparator:!0,openIcon:"",value:!1}},e={render:r=>({components:{SolarisAccordion:i,SolarisCollapse:c},setup(){const o=m(!1);return{args:r,expanded:o,elementInput:l=>{s("Toggle Accordion")(l),o.value=!o.value}}},template:`
    <div>
      <SolarisAccordion v-model="expanded" v-bind="args">
        <template v-slot:title>Accordion title</template>
        <template v-slot:intro>Accordion intro</template>
        <template v-slot:content>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </template>
      </SolarisAccordion>
    </div>
    `}),args:{compact:!1,disabled:!1,hasIntro:!1,icon:"arrow-bottom",isFocusable:!1,isSeparator:!0,openIcon:"",value:!1}};var a,t,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisAccordion,
      SolarisCollapse
    },
    setup() {
      const expanded = ref(false);
      const elementInput = (value: boolean) => {
        action('Toggle Accordion')(value);
        expanded.value = !expanded.value;
      };
      return {
        args,
        expanded,
        elementInput
      };
    },
    template: \`
    <div>
      <SolarisAccordion v-model="expanded" v-bind="args">
        <template v-slot:title>Accordion title</template>
        <template v-slot:intro>Accordion intro</template>
        <template v-slot:content>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </template>
      </SolarisAccordion>
    </div>
    \`
  }),
  args: {
    compact: false,
    disabled: false,
    hasIntro: false,
    icon: 'arrow-bottom',
    isFocusable: false,
    isSeparator: true,
    openIcon: '',
    value: false
  }
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};const g=["Accordion"];export{e as Accordion,g as __namedExportsOrder,y as default};
