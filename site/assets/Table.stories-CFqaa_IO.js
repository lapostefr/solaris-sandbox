import{a as l}from"./chunk-MZXVCX43-DWuJqIWT.js";import{S as i}from"./Table-BJhkQ-v2.js";import{r as c}from"./vue.esm-bundler-DD7xIM0D.js";import"./v4-D8aEg3BZ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const d=`{
    [key: string]: string | number
  } & {
    _options: [
      {
        col: number
        checked?: boolean
      }
    ]
}`,p=`{
  id: string
  content: string
}`,m=`{
  text: string
  value: string
  align?: 'start' | 'middle' | 'end'
  checkbox?: 'checked' | 'unchecked' | 'indeterminate'
  sortable?: boolean
}`,b=[{text:"Dessert",align:"start",value:"name",checkbox:"checked",sortable:!0},{text:"Calories",value:"calories"},{text:"Fat (g)",value:"fat",sortable:!0},{text:"Carbs (g)",value:"carbs",align:"middle"},{text:"Protein (g)",value:"protein",align:"end"},{text:"Iron (%)",value:"iron"}],u=[{name:"Frozen Yogurt",calories:159,fat:6,carbs:24,protein:4,iron:"1%",_options:[{col:0,checked:!1}]},{name:"Ice cream sandwich",calories:237,fat:9,carbs:37,protein:4.3,iron:"1%",_options:[{col:0,checked:!0}]},{name:"Eclair",calories:262,fat:16,carbs:23,protein:6,iron:"7%",_options:[{col:0,checked:!1}]},{name:"Cupcake",calories:305,fat:3.7,carbs:67,protein:4.3,iron:"8%",_options:[{col:0,checked:!0}]},{name:"Gingerbread",calories:356,fat:16,carbs:49,protein:3.9,iron:"16%",_options:[{col:0,checked:!1}]},{name:"Jelly bean",calories:375,fat:0,carbs:94,protein:0,iron:"0%",_options:[{col:0,checked:!1}]},{name:"Lollipop",calories:392,fat:.2,carbs:98,protein:0,iron:"2%",_options:[{col:0,checked:!1}]},{name:"Honeycomb",calories:408,fat:3.2,carbs:87,protein:6.5,iron:"45%",_options:[{col:0,checked:!1}]},{name:"Donut",calories:452,fat:25,carbs:51,protein:4.9,iron:"22%",_options:[{col:0,checked:!1}]},{name:"KitKat",calories:518,fat:26,carbs:65,protein:7,iron:"6%",_options:[{col:0,checked:!1}]}],v={title:"Organisms/Table",argTypes:{alternateBackground:{description:"Allow scrolling to see all the contents of the table.",table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},content:{description:"Data for the tbody tag.",table:{type:{summary:"Array",detail:d}}},description:{description:"A11y : Description for this Table component.",table:{type:{summary:"Object",detail:p}}},headers:{description:"Data for the thead tag",table:{type:{summary:"Array",detail:m}}},id:{description:"To identify the Table component in the page.",table:{type:{summary:"string"}}},mobileScroll:{description:"Allow scrolling to see all the contents of the table.",table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:"boolean"},rowsQty:{description:"Quantity of rows displayed in a slide.",table:{type:{summary:"number"}}},title:{description:"A11y : Title for this Table component.",table:{type:{summary:"string"}}}}},e={render:t=>({components:{SolarisTable:i},setup(){const r=c(t.value??null),s=l("Check Row");return{args:t,selectedTile:r,elementCheck:s}},template:`<div class="demo__zone" style="margin: 0 auto; padding: 10px; max-width: 1200px;">
    <div class="demo__show">
      <SolarisTable v-bind="args" @checkRow="elementCheck">
        <template #tableTop>
          <SolarisButton>Button</SolarisButton>
        </template>
        <template #calories="slotProps">
          <SolarisBadge v-if="slotProps.content.values.id !== 'calories-2'" icon="action-check" color="green" default="Badge">{{ slotProps.content.values.text }}</SolarisBadge>
        </template>
      </SolarisTable>
    </div>

    <pre class="demo">
      <b>BodyList</b> = {
        cellName: string
        values: Values
        options: Option[]
      }
    </pre>

    <pre class="demo">
      <b>BodyOptions</b> = [Option]
    </pre>

    <pre class="demo">
      <b>CheckRowData</b> = {
        row: number
        col: number
        data: Values
      }
    </pre>

    <pre class="demo">
      <b>Description</b> = {
        id: string
        content: string
      }
    </pre>

    <pre class="demo">
      <b>Option</b> = {
        col: number
        checked?: boolean
      }
    </pre>

    <pre class="demo">
      <b>Thead</b> = {
        text: string
        value: string
        align?: 'start' | 'middle' | 'end'
        checkbox?: 'checked' | 'unchecked' | 'indeterminate'
        sortable?: boolean
      }
    </pre>

    <pre class="demo">
      <b>Values</b> = {
        id: string
        text: string | number
        type: string
        checked: boolean
      }
    </pre>
  </div>`}),args:{alternateBackground:!1,content:u,description:{id:"tableau",tag:"div",content:"<span>contenu de ma description</span>"},headers:b,id:"montableau",mobileScroll:!0,rowsQty:3,title:"Titre pour exemple"}};var n,o,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisTable
    },
    setup() {
      const selectedTile = ref(args.value ?? null);
      const elementCheck = action('Check Row');
      return {
        args,
        selectedTile,
        elementCheck
      };
    },
    template: \`<div class="demo__zone" style="margin: 0 auto; padding: 10px; max-width: 1200px;">
    <div class="demo__show">
      <SolarisTable v-bind="args" @checkRow="elementCheck">
        <template #tableTop>
          <SolarisButton>Button</SolarisButton>
        </template>
        <template #calories="slotProps">
          <SolarisBadge v-if="slotProps.content.values.id !== 'calories-2'" icon="action-check" color="green" default="Badge">{{ slotProps.content.values.text }}</SolarisBadge>
        </template>
      </SolarisTable>
    </div>

    <pre class="demo">
      <b>BodyList</b> = {
        cellName: string
        values: Values
        options: Option[]
      }
    </pre>

    <pre class="demo">
      <b>BodyOptions</b> = [Option]
    </pre>

    <pre class="demo">
      <b>CheckRowData</b> = {
        row: number
        col: number
        data: Values
      }
    </pre>

    <pre class="demo">
      <b>Description</b> = {
        id: string
        content: string
      }
    </pre>

    <pre class="demo">
      <b>Option</b> = {
        col: number
        checked?: boolean
      }
    </pre>

    <pre class="demo">
      <b>Thead</b> = {
        text: string
        value: string
        align?: 'start' | 'middle' | 'end'
        checkbox?: 'checked' | 'unchecked' | 'indeterminate'
        sortable?: boolean
      }
    </pre>

    <pre class="demo">
      <b>Values</b> = {
        id: string
        text: string | number
        type: string
        checked: boolean
      }
    </pre>
  </div>\`
  }),
  args: {
    alternateBackground: false,
    content: desserts,
    description: {
      id: 'tableau',
      tag: 'div',
      content: \`<span>contenu de ma description</span>\`
    },
    headers: headers,
    id: 'montableau',
    mobileScroll: true,
    rowsQty: 3,
    title: 'Titre pour exemple'
  }
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const x=["Table"];export{e as Table,x as __namedExportsOrder,v as default};
