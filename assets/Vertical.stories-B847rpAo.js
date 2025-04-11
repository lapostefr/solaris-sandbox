import{c as o,t as r,d as p}from"./legend-C47_wCHE.js";import{S as d,T as m,E as c}from"./TileNew-C9TFt0n0.js";import{a as n}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./imageDefaultSource-CMm1GdPE.js";import"./imageOtherSources-BRif1MR3.js";import"./Card-BxpWIW-N.js";import"./vue.esm-bundler-BiAlgFmf.js";import"./Icon-C-Sturzh.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Badge-D_m-TE_A.js";import"./types-BTVVhIqi.js";import"./Picture-BofBnaNi.js";import"./iframe-Tb9yYTcJ.js";import"../sb-preview/runtime.js";import"./Collapse-BNiXmgF_.js";import"./Button-CxIFeNFW.js";import"./Loader-DHIAU4Qg.js";import"./v4-CQkTLCs1.js";const F={title:"Organisms/Tile (New)",argTypes:o},e={render:a=>({components:{SolarisTileNew:d},setup(){const s=n("cardClicked");return{args:a,cardClicked:s}},template:`<section class="demo">
      <SolarisTileNew
        ref="myTile"
        v-bind="args"
        @cardClicked="cardClicked">
        <template #tileLegendAdditional>
            <p style="margin: 0; padding:0;">Description for all tiles.</p>
          </template> 
        <template #tileBody>
          <div class="slot">Slot - tileBody</div>
        </template>
        <template #tileFooter>
          <div style="margin-top: auto;margin-bottom: auto;" class="slot">Slot - tileFooter</div>
        </template>
        <template #tileExtra>
          <div class="slot">
            <h3>Slot - tileExtra</h3>
            <p>Remplissez le avec des composants de votre choix. Il n'existera pas dans le DOM s'il est vide</p>
          </div>
        </template>
      </SolarisTileNew>
    </section>`}),args:{gridClass:!0,legend:r,nested:!1,options:p,setItemClass:"lp-col lp-col--sm-2-2 lp-col--md-3",tileGap:m.s,type:c.SelectableMultiple}};var t,l,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisTileNew
    },
    setup() {
      const cardClicked = action('cardClicked');
      return {
        args,
        cardClicked
      };
    },
    template: \`<section class="demo">
      <SolarisTileNew
        ref="myTile"
        v-bind="args"
        @cardClicked="cardClicked">
        <template #tileLegendAdditional>
            <p style="margin: 0; padding:0;">Description for all tiles.</p>
          </template> 
        <template #tileBody>
          <div class="slot">Slot - tileBody</div>
        </template>
        <template #tileFooter>
          <div style="margin-top: auto;margin-bottom: auto;" class="slot">Slot - tileFooter</div>
        </template>
        <template #tileExtra>
          <div class="slot">
            <h3>Slot - tileExtra</h3>
            <p>Remplissez le avec des composants de votre choix. Il n'existera pas dans le DOM s'il est vide</p>
          </div>
        </template>
      </SolarisTileNew>
    </section>\`
  }),
  args: {
    gridClass: true,
    legend: tileLegend,
    nested: false,
    options: tileOptionsVertical,
    setItemClass: 'lp-col lp-col--sm-2-2 lp-col--md-3',
    tileGap: TileGap.s,
    type: ElementType.SelectableMultiple
  }
}`,...(i=(l=e.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const G=["Vertical"];export{e as Vertical,G as __namedExportsOrder,F as default};
