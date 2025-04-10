import{a as i}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as m}from"./Accordion-t3unZdjP.js";import{S as d}from"./Collapse-BNiXmgF_.js";import{r as n}from"./vue.esm-bundler-BiAlgFmf.js";import"./v4-CQkTLCs1.js";import"./Icon-C-Sturzh.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const h={title:"Molecules/Accordion",argTypes:{compact:{description:"Size compact for the accordion.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},disabled:{description:"Enable/disable the accordion.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:"boolean"},hasIntro:{description:"Displays the possible slot intro after the accordion title",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:"boolean"},icon:{description:"Choose icon at the top right when the accordion is close.",table:{type:{summary:"string"}},defaultValue:{summary:"arrow-bottom"}},isFocusable:{description:"Active focus on accordion.",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:"boolean"},isSeparator:{description:"Display separator.",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:"boolean"},openIcon:{description:"Choose icon at the top right when the accordion is open.",table:{type:{summary:"string"}}},value:{description:"Change the state of the accordion.",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:"boolean"}},args:{compact:!1,disabled:!1,hasIntro:!1,icon:"arrow-bottom",isFocusable:!1,isSeparator:!0,openIcon:"",value:!1}},e={render:c=>({components:{SolarisAccordion:m,SolarisCollapse:d},setup(){const o=n(!1),t=n(!1);return{args:c,expanded:o,expandedB:t,elementInput:a=>{i("Toggle Accordion")(a),o.value=!o.value},elementInputB:a=>{i("Toggle Accordion")(a),t.value=!t.value}}},template:`
    <div>
      <SolarisAccordion v-model="expanded" v-bind="args" @input="elementInput">
        <template v-slot:title>Accordion title</template>
        <template v-slot:intro>Accordion intro</template>
        <template v-slot:content>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </template>
      </SolarisAccordion>
      <SolarisAccordion v-model="expandedB" v-bind="args" @input="elementInputB">
        <template v-slot:title>Accordion title</template>
        <template v-slot:intro>Accordion intro</template>
        <template v-slot:content>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </template>
      </SolarisAccordion>
    </div>
    `}),args:{compact:!1,disabled:!1,hasIntro:!1,icon:"arrow-bottom",isFocusable:!1,isSeparator:!0,openIcon:"",value:!1}};var l,r,s;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisAccordion,
      SolarisCollapse
    },
    setup() {
      const expanded = ref(false);
      const expandedB = ref(false);
      const elementInput = (value: boolean) => {
        action('Toggle Accordion')(value);
        expanded.value = !expanded.value;
      };
      const elementInputB = (value: boolean) => {
        action('Toggle Accordion')(value);
        expandedB.value = !expandedB.value;
      };
      return {
        args,
        expanded,
        expandedB,
        elementInput,
        elementInputB
      };
    },
    template: \`
    <div>
      <SolarisAccordion v-model="expanded" v-bind="args" @input="elementInput">
        <template v-slot:title>Accordion title</template>
        <template v-slot:intro>Accordion intro</template>
        <template v-slot:content>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </template>
      </SolarisAccordion>
      <SolarisAccordion v-model="expandedB" v-bind="args" @input="elementInputB">
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
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const I=["Accordion"];export{e as Accordion,I as __namedExportsOrder,h as default};
