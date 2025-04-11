import{c as m,t as g,b as h}from"./legend-C47_wCHE.js";import{S as C,E as u}from"./TileNew-C9TFt0n0.js";import{a as t}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{r as i}from"./vue.esm-bundler-BiAlgFmf.js";import"./imageDefaultSource-CMm1GdPE.js";import"./imageOtherSources-BRif1MR3.js";import"./Card-BxpWIW-N.js";import"./Icon-C-Sturzh.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Badge-D_m-TE_A.js";import"./types-BTVVhIqi.js";import"./Picture-BofBnaNi.js";import"./iframe-Tb9yYTcJ.js";import"../sb-preview/runtime.js";import"./Collapse-BNiXmgF_.js";import"./Button-CxIFeNFW.js";import"./Loader-DHIAU4Qg.js";import"./v4-CQkTLCs1.js";const O={title:"Organisms/Tile (New)",argTypes:m},e={render:n=>({components:{SolarisTileNew:C},setup(){const r=t("cardClicked"),c=t("radioChanged"),d=t("checkboxChanged"),s=i("innerRadioSingle-B"),p=i();return{args:n,cardClicked:r,radioChanged:c,checkboxChanged:d,radioDefault:s,checkboxDefault:p}},template:`<section class="demo">
      <SolarisTileNew
        ref="myTile"
        v-model:checkbox="checkboxDefault"
        v-bind="args"
        @checkboxChanged="checkboxChanged"
        @cardClicked="cardClicked">
        <template #tileExtra>
          <SolarisTileNew
            @radioChanged="radioChanged"
            @cardClicked="cardClicked"
            v-model="radioDefault"
            v-bind="{
              options: [
                {
                  card: {
                    layout: 'horizontal',
                    title: {
                      content: 'Tile title'
                    },
                    bodyText: 'The type prop is Selectable single',
                  },
                  checked: false,
                  id: 'innerRadioSingle-A',
                  name: 'innerRadioSingle',
                  value: 'innerRadioSingle-A'
                  },
                {
                  card: {
                    layout: 'horizontal',
                    title: {
                      content: 'Tile title'
                    },
                    bodyText: 'The type prop is Selectable single',
                  },
                  checked: false,
                  id: 'innerRadioSingle-B',
                  name: 'innerRadioSingle',
                  value: 'innerRadioSingle-B'
                }
              ],
              setItemClass: 'lp-col--4',
              type: 'Selectable single'
            }"
          />
        </template>
      </SolarisTileNew>
    </section>`}),args:{gridClass:!0,legend:g,nested:!0,options:h,showMoreWhenSelected:!0,setItemClass:"lp-col--4 lp-col--sm-4-1 lp-col--md-8-2 lp-col--lg-6-3",type:u.SelectableMultiple}};var l,o,a;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisTileNew
    },
    setup() {
      const cardClicked = action('cardClicked');
      const radioChanged = action('radioChanged');
      const checkboxChanged = action('checkboxChanged');
      const radioDefault = ref('innerRadioSingle-B');
      const checkboxDefault = ref();
      return {
        args,
        cardClicked,
        radioChanged,
        checkboxChanged,
        radioDefault,
        checkboxDefault
      };
    },
    template: \`<section class="demo">
      <SolarisTileNew
        ref="myTile"
        v-model:checkbox="checkboxDefault"
        v-bind="args"
        @checkboxChanged="checkboxChanged"
        @cardClicked="cardClicked">
        <template #tileExtra>
          <SolarisTileNew
            @radioChanged="radioChanged"
            @cardClicked="cardClicked"
            v-model="radioDefault"
            v-bind="{
              options: [
                {
                  card: {
                    layout: 'horizontal',
                    title: {
                      content: 'Tile title'
                    },
                    bodyText: 'The type prop is Selectable single',
                  },
                  checked: false,
                  id: 'innerRadioSingle-A',
                  name: 'innerRadioSingle',
                  value: 'innerRadioSingle-A'
                  },
                {
                  card: {
                    layout: 'horizontal',
                    title: {
                      content: 'Tile title'
                    },
                    bodyText: 'The type prop is Selectable single',
                  },
                  checked: false,
                  id: 'innerRadioSingle-B',
                  name: 'innerRadioSingle',
                  value: 'innerRadioSingle-B'
                }
              ],
              setItemClass: 'lp-col--4',
              type: 'Selectable single'
            }"
          />
        </template>
      </SolarisTileNew>
    </section>\`
  }),
  args: {
    gridClass: true,
    legend: tileLegend,
    nested: true,
    options: tileOptionsNested,
    showMoreWhenSelected: true,
    setItemClass: 'lp-col--4 lp-col--sm-4-1 lp-col--md-8-2 lp-col--lg-6-3',
    type: ElementType.SelectableMultiple
  }
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const L=["Nested"];export{e as Nested,L as __namedExportsOrder,O as default};
