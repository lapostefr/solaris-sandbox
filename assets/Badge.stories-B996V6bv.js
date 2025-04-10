import{S as u}from"./Badge-D_m-TE_A.js";import{d,e as o,B as a,c as i}from"./types-BTVVhIqi.js";import"./vue.esm-bundler-BiAlgFmf.js";import"./Icon-C-Sturzh.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const g=["pink","grey","yellow","green","purple","maroon","dark-blue","dodger-blue","success","promo","supernova","neutral","cobalt","info"],s=Object.values(d),r=Object.values(o),n=Object.values(a),m=Object.values(i),y=m.filter(e=>e==="medium"||e==="small"),T={title:"Atoms/Badge/Badge",argTypes:{componentStyle:{description:"The colors of the text and background for the badge.",table:{type:{summary:s.join(" | ")}},control:{type:"select"},options:["",...s]},componentType:{description:"The different badge layouts.",table:{type:{summary:r.join(" | ")},defaultValue:{summary:o.square}},control:{type:"select"},options:r},icon:{description:"Optional icon before the text.",table:{type:{summary:"string"}},control:"text"},size:{description:`The size for the badge.
        
        Deprecated size values :

      - default: use "medium" instead.
      - compact: use "small" instead.`,table:{type:{summary:y.join(" | ")},defaultValue:{summary:"default"}},control:{type:"select"},options:m},strong:{description:"Applies an accentuated style to the badge.",table:{type:{summary:"boolean"}},control:"boolean"},tag:{description:"Defines the type of HTML tag used for the component.",table:{type:{summary:n.join(" | ")},defaultValue:{summary:a.span}},control:{type:"select"},options:n},color:{description:'The colors for the badge *<span style="color:orange">deprecated</span>*.<br/>**Use componentStyle instead.**<br/>*To test, set the empty option of prop componentStyle.*',table:{table:{type:{summary:"string"}},defaultValue:{summary:"cobalt"},category:"Deprecated"},control:{type:"select"},options:g}},args:{componentStyle:d.neutral,componentType:o.square,icon:"misc-ghost",size:i.medium,strong:!1,tag:a.span,color:"cobalt"}},t={render:e=>({components:{SolarisBadge:u},setup(){return{args:e}},template:'<SolarisBadge v-bind="args">2 Badge label</SolarisBadge>'})};var l,p,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisBadge
    },
    setup() {
      return {
        args
      };
    },
    template: '<SolarisBadge v-bind="args">2 Badge label</SolarisBadge>'
  })
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const j=["Badge"];export{t as Badge,j as __namedExportsOrder,T as default};
