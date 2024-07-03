import{S as l}from"./Burger-Uikx_KDN.js";import{r as m,w as p}from"./vue.esm-bundler-DD7xIM0D.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const S={title:"Atoms/Burger",argTypes:{},args:{}},e={render:r=>({components:{SolarisBurger:l},setup(){return{args:r}},template:`<div style="margin: 0 auto; width: 320px; height: 100vh;">
    <SolarisBurger v-bind="args" v-on="args" />
  </div>`}),args:{}},a={render:r=>({components:{SolarisBurger:l},setup(){const n=m(r.value);return p(()=>r.value,d=>{n.value=d}),{args:r,model:n}},template:`<div style="margin: 0 auto; width: 320px; height: 100vh;">
    <SolarisBurger v-bind="args" v-on="args" />
  </div>`}),args:{value:!1}};var t,s,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisBurger
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div style="margin: 0 auto; width: 320px; height: 100vh;">
    <SolarisBurger v-bind="args" v-on="args" />
  </div>\`
  }),
  args: {}
}`,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var i,u,g;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisBurger
    },
    setup() {
      const model = ref(args.value);
      watch(() => args.value, (value: boolean) => {
        model.value = value;
      });
      return {
        args,
        model
      };
    },
    template: \`<div style="margin: 0 auto; width: 320px; height: 100vh;">
    <SolarisBurger v-bind="args" v-on="args" />
  </div>\`
  }),
  args: {
    value: false
  }
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const y=["StaticStory","AnimatedStory"];export{a as AnimatedStory,e as StaticStory,y as __namedExportsOrder,S as default};
