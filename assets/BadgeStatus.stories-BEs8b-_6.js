import{S as c}from"./BadgeStatus-VVmzDj3c.js";import{B as a,a as s,b as p,c as o}from"./types-BTVVhIqi.js";import"./vue.esm-bundler-BiAlgFmf.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const r=Object.values(a),l=Object.values(s),m=Object.values(p),g=Object.values(o),n=g.filter(t=>t==="medium"||t==="small"),h={title:"Atoms/Badge/Badge Status",component:c,argTypes:{componentStyle:{description:"The colors of the text and background for the badge.",table:{type:{summary:l.join(" | ")},defaultValue:{summary:s.neutral}},control:{type:"select"},options:l},tag:{description:"Defines the type of HTML tag used for the component.",table:{type:{summary:r.join(" | ")},defaultValue:{summary:a.span}},control:{type:"select"},options:r},size:{description:"The size for the badge.",table:{type:{summary:n.join(" | ")},defaultValue:{summary:o.medium}},control:{type:"select"},options:n},title:{description:"Add a title to the bullet if the text is empty.",table:{type:{summary:"string"}},control:"text"},color:{description:'The colors for the badge *<span style="color:orange">deprecated</span>*.<br/>**Use componentStyle instead.**',table:{type:{summary:"string"},category:"Deprecated"},control:{type:"select"},options:m}},args:{componentStyle:s.neutral,tag:a.span,size:o.medium,title:"title",color:p.quiet}},e={render:t=>({components:{SolarisBadgeStatus:c},setup(){return{args:t}},template:'<SolarisBadgeStatus v-bind="args">Label status</SolarisBadgeStatus>'})};var i,d,u;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisBadgeStatus
    },
    setup() {
      return {
        args
      };
    },
    template: '<SolarisBadgeStatus v-bind="args">Label status</SolarisBadgeStatus>'
  })
}`,...(u=(d=e.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const B=["StatusLight"];export{e as StatusLight,B as __namedExportsOrder,h as default};
