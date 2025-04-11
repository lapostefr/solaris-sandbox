import{a as t}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as n,t as p,a as m}from"./legend-C47_wCHE.js";import{S as g,T as h,E as x}from"./TileNew-C9TFt0n0.js";import{r as C}from"./vue.esm-bundler-BiAlgFmf.js";import"./v4-CQkTLCs1.js";import"./imageDefaultSource-CMm1GdPE.js";import"./imageOtherSources-BRif1MR3.js";import"./Card-BxpWIW-N.js";import"./Icon-C-Sturzh.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Badge-D_m-TE_A.js";import"./types-BTVVhIqi.js";import"./Picture-BofBnaNi.js";import"./iframe-Tb9yYTcJ.js";import"../sb-preview/runtime.js";import"./Collapse-BNiXmgF_.js";import"./Button-CxIFeNFW.js";import"./Loader-DHIAU4Qg.js";const L={title:"Organisms/Tile (New)",argTypes:n},e={render:i=>({components:{SolarisTileNew:g},setup(){const s=t("cardClicked"),r=t("radioChanged"),c=t("checkboxChanged"),d=C();return{args:i,cardClicked:s,radioChanged:r,checkboxChanged:c,checkboxDefault:d}},template:`<section class="demo">
      <SolarisTileNew
        ref="myTile"
        v-bind="args"
        v-model:checkbox="checkboxDefault"
        @cardClicked="cardClicked"
        @radioChanged="radioChanged"
        @checkboxChanged="checkboxChanged">
        <template #tileLegendAdditional>
            <p style="margin: 0; padding:0;">Description for all tiles.</p>
          </template> 
        <template #tileBody>
          <div class="slot">Slot - tileBodyyy</div>
        </template>
        <template #tileFooter="{ index }">
          <div 
            v-if="index === 1"
            class="slot" 
            style="margin-block: 16px;">
              Slot - tileFooter
          </div>
        </template>
        <template #tileExtra="{ index }">
          <div class="slot">
            <h3>Slot - tileExtra</h3>
            <p>Remplissez le avec des composants de votre choix. Il n'existera pas dans le DOM s'il est vide</p>
          </div>
        </template>
      </SolarisTileNew>
    </section>`}),args:{gridClass:!1,legend:p,nested:!1,options:m,showSelectionButton:!0,setItemClass:"lp-col--4 lp-col--sm-4-1 lp-col--md-8-2 lp-col--lg-6-3",tileGap:h.s,type:x.SelectableMultiple}};var l,o,a;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisTileNew
    },
    setup() {
      const cardClicked = action('cardClicked');
      const radioChanged = action('radioChanged');
      const checkboxChanged = action('checkboxChanged');
      const checkboxDefault = ref();
      return {
        args,
        cardClicked,
        radioChanged,
        checkboxChanged,
        checkboxDefault
      };
    },
    template: \`<section class="demo">
      <SolarisTileNew
        ref="myTile"
        v-bind="args"
        v-model:checkbox="checkboxDefault"
        @cardClicked="cardClicked"
        @radioChanged="radioChanged"
        @checkboxChanged="checkboxChanged">
        <template #tileLegendAdditional>
            <p style="margin: 0; padding:0;">Description for all tiles.</p>
          </template> 
        <template #tileBody>
          <div class="slot">Slot - tileBodyyy</div>
        </template>
        <template #tileFooter="{ index }">
          <div 
            v-if="index === 1"
            class="slot" 
            style="margin-block: 16px;">
              Slot - tileFooter
          </div>
        </template>
        <template #tileExtra="{ index }">
          <div class="slot">
            <h3>Slot - tileExtra</h3>
            <p>Remplissez le avec des composants de votre choix. Il n'existera pas dans le DOM s'il est vide</p>
          </div>
        </template>
      </SolarisTileNew>
    </section>\`
  }),
  args: {
    gridClass: false,
    legend: tileLegend,
    nested: false,
    options: tileOptions,
    showSelectionButton: true,
    setItemClass: 'lp-col--4 lp-col--sm-4-1 lp-col--md-8-2 lp-col--lg-6-3',
    tileGap: TileGap.s,
    type: ElementType.SelectableMultiple
  }
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const M=["Horizontal"];export{e as Horizontal,M as __namedExportsOrder,L as default};
