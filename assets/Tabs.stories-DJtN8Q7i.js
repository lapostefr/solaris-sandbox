import{a as b}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{T as t,a as i,b as s,S as g}from"./Tabs-BG6JGG48.js";import{a}from"./type-CS7yfaSO.js";import"./v4-CQkTLCs1.js";import"./vue.esm-bundler-BiAlgFmf.js";import"./Shadow-ZXaEhb3j.js";import"./Button-CxIFeNFW.js";import"./Icon-C-Sturzh.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Loader-DHIAU4Qg.js";const o=Object.values(t),n=Object.values(i),r=Object.values(s),l=Object.values(a),h=[{icon:"action-messenger",id:"item_1",title:"Lorem Ipsum - Tab 1"},{icon:"action-messenger",id:"item_1B",title:"Lorem Ipsum - Tab 1B",disabled:!0},{icon:"arrow-large-up-right",id:"item_2",title:"Lorem Ipsum - Tab 2"},{icon:"package-express-stamp",id:"item_3",title:"Lorem Ipsum - Tab 3"}],v={slotButtonSide:{description:`Dynamic slots for adding content before or after tab text. Slots name follows the format :
    - tabId_tab-left_tabItemId
    - tabId_tab-right_tabItemId`,table:{category:"Slots"}},slotPanel:{description:`Dynamic slot for displaying panel content. The slot name follows the format :
      - tabId_tabItemId`,table:{category:"Slots"}}},D={title:"Molecules/Tabs",argTypes:{defaultSelection:{description:"Which tab is selected onload",table:{type:{summary:"string"}}},fullContainer:{description:"Make tabs occupy the entire width of the component.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},overflowScroll:{description:"Use the width of the component (false) or activate the scroll (true)",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},iconPosition:{description:"Position of the tab icon",table:{type:{summary:n.join(" | ")},defaultValue:{summary:i.left}},control:{type:"select"},options:n},id:{description:"To identify the Tabs component in the page",table:{type:{summary:"string"}}},items:{description:"List of buttons to control the panels",table:{type:{summary:"Array<TabItems>",detail:`[{
            id: string
            disabled?: boolean
            iconName?: string
            label: string
          }]
          `}}},panelPadding:{description:"Size of panel horizontal padding",table:{type:{summary:r.join(" | ")},defaultValue:{summary:s.medium}},control:{type:"select"},options:r},shadowBgColor:{description:"Size of panel horizontal padding",table:{type:{summary:l.join(" | ")},defaultValue:{summary:a.NeutralSoft}},control:{type:"select"},options:l},showDivider:{description:"Insert border under tabs items",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},size:{description:"Identify the overlist design",table:{type:{summary:o.join(" | ")},defaultValue:{summary:t.medium}},control:{type:"select"},options:o},tabsLabel:{description:"Define aria-label for the component",table:{type:{summary:"string"}}},...v},args:{defaultSelection:"item_2",fullContainer:!1,id:"BetaTabs",iconPosition:i.left,items:h,overflowScroll:!0,panelPadding:s.medium,shadowBgColor:a.NeutralSoft,showDivider:!0,size:t.small,tabsLabel:"Liste d'onglets"}},e={render:c=>({components:{SolarisTabs:g},setup(){const d=b("@selected");return{args:c,storySelect:d}},template:`
      <div class="demo demo--horizontal-padding">
        <SolarisTabs v-bind="args" @selected="storySelect">
          <template v-slot:BetaTabs_item_1="slotProps">
            <picture>
              <source media="(min-width: 1200px)" srcset="https://picsum.photos/1000/300.webp" />
              <source media="(min-width: 700px)" srcset="https://picsum.photos/600/250.webp" />
              <source media="(max-width: 350px)" srcset="https://picsum.photos/300/200.webp" />
              <img style="max-width: 100%;" src="https://picsum.photos/800/400.webp" alt="Description de l'image" />
            </picture>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et
              nibh finibus, pulvinar ipsum ac, vulputate urna. Integer vulputate sit
              amet urna vel lobortis. Fusce posuere egestas ipsum vitae fringilla. Donec
              euismod vel nisl quis molestie. Cras in lobortis ligula. Aenean tincidunt
              sagittis urna, eget semper odio feugiat vel. In commodo malesuada dapibus.
              Aenean et imperdiet orci. Maecenas aliquet nunc sit amet enim mattis tristique.
            </p>

          </template>

          <template v-slot:BetaTabs_item_2="slotProps">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et
              nibh finibus, pulvinar ipsum ac, vulputate urna. Integer vulputate sit
              amet urna vel lobortis. Fusce posuere egestas ipsum vitae fringilla. Donec
              euismod vel nisl quis molestie. Cras in lobortis ligula. Aenean tincidunt
              sagittis urna, eget semper odio feugiat vel. In commodo malesuada dapibus.
              Aenean et imperdiet orci. Maecenas aliquet nunc sit amet enim mattis tristique.
            </p>

            <picture>
              <source media="(min-width: 1200px)" srcset="https://picsum.photos/1000/300.webp" />
              <source media="(min-width: 700px)" srcset="https://picsum.photos/600/250.webp" />
              <source media="(max-width: 350px)" srcset="https://picsum.photos/300/200.webp" />
              <img style="max-width: 100%;" src="https://picsum.photos/800/400.webp" alt="Description de l'image" />
            </picture>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et
              nibh finibus, pulvinar ipsum ac, vulputate urna. Integer vulputate sit
              amet urna vel lobortis. Fusce posuere egestas ipsum vitae fringilla. Donec
              euismod vel nisl quis molestie. Cras in lobortis ligula. Aenean tincidunt
              sagittis urna, eget semper odio feugiat vel. In commodo malesuada dapibus.
              Aenean et imperdiet orci. Maecenas aliquet nunc sit amet enim mattis tristique.
            </p>
          </template>

          <template v-slot:BetaTabs_item_3="slotProps">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et
              nibh finibus, pulvinar ipsum ac, vulputate urna. Integer vulputate sit
              amet urna vel lobortis. Fusce posuere egestas ipsum vitae fringilla. Donec
              euismod vel nisl quis molestie. Cras in lobortis ligula. Aenean tincidunt
              sagittis urna, eget semper odio feugiat vel. In commodo malesuada dapibus.
              Aenean et imperdiet orci. Maecenas aliquet nunc sit amet enim mattis tristique.
            </p>
          </template>
        </SolarisTabs>
      </div>
    `})};var u,m,p;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisTabs
    },
    setup() {
      const storySelect = action('@selected');
      return {
        args,
        storySelect
      };
    },
    template: \`
      <div class="demo demo--horizontal-padding">
        <SolarisTabs v-bind="args" @selected="storySelect">
          <template v-slot:BetaTabs_item_1="slotProps">
            <picture>
              <source media="(min-width: 1200px)" srcset="https://picsum.photos/1000/300.webp" />
              <source media="(min-width: 700px)" srcset="https://picsum.photos/600/250.webp" />
              <source media="(max-width: 350px)" srcset="https://picsum.photos/300/200.webp" />
              <img style="max-width: 100%;" src="https://picsum.photos/800/400.webp" alt="Description de l'image" />
            </picture>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et
              nibh finibus, pulvinar ipsum ac, vulputate urna. Integer vulputate sit
              amet urna vel lobortis. Fusce posuere egestas ipsum vitae fringilla. Donec
              euismod vel nisl quis molestie. Cras in lobortis ligula. Aenean tincidunt
              sagittis urna, eget semper odio feugiat vel. In commodo malesuada dapibus.
              Aenean et imperdiet orci. Maecenas aliquet nunc sit amet enim mattis tristique.
            </p>

          </template>

          <template v-slot:BetaTabs_item_2="slotProps">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et
              nibh finibus, pulvinar ipsum ac, vulputate urna. Integer vulputate sit
              amet urna vel lobortis. Fusce posuere egestas ipsum vitae fringilla. Donec
              euismod vel nisl quis molestie. Cras in lobortis ligula. Aenean tincidunt
              sagittis urna, eget semper odio feugiat vel. In commodo malesuada dapibus.
              Aenean et imperdiet orci. Maecenas aliquet nunc sit amet enim mattis tristique.
            </p>

            <picture>
              <source media="(min-width: 1200px)" srcset="https://picsum.photos/1000/300.webp" />
              <source media="(min-width: 700px)" srcset="https://picsum.photos/600/250.webp" />
              <source media="(max-width: 350px)" srcset="https://picsum.photos/300/200.webp" />
              <img style="max-width: 100%;" src="https://picsum.photos/800/400.webp" alt="Description de l'image" />
            </picture>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et
              nibh finibus, pulvinar ipsum ac, vulputate urna. Integer vulputate sit
              amet urna vel lobortis. Fusce posuere egestas ipsum vitae fringilla. Donec
              euismod vel nisl quis molestie. Cras in lobortis ligula. Aenean tincidunt
              sagittis urna, eget semper odio feugiat vel. In commodo malesuada dapibus.
              Aenean et imperdiet orci. Maecenas aliquet nunc sit amet enim mattis tristique.
            </p>
          </template>

          <template v-slot:BetaTabs_item_3="slotProps">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et
              nibh finibus, pulvinar ipsum ac, vulputate urna. Integer vulputate sit
              amet urna vel lobortis. Fusce posuere egestas ipsum vitae fringilla. Donec
              euismod vel nisl quis molestie. Cras in lobortis ligula. Aenean tincidunt
              sagittis urna, eget semper odio feugiat vel. In commodo malesuada dapibus.
              Aenean et imperdiet orci. Maecenas aliquet nunc sit amet enim mattis tristique.
            </p>
          </template>
        </SolarisTabs>
      </div>
    \`
  })
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const P=["Tabs"];export{e as Tabs,P as __namedExportsOrder,D as default};
