import{r,w as u}from"./vue.esm-bundler-BiAlgFmf.js";const i={title:"Organisms/Style Switcher",argTypes:{},args:{}},s={render:e=>({setup(){const o=r(e.show),w=r(e.show2),h=r(e.show3);return u(()=>e.value,c=>{o.value=c}),{args:e,show:o,show2:w,show3:h}},template:`
    <div>
      <SolarisStyleSwitcher />
    </div>
    `}),args:{show:!0,show2:!0,show3:!0}};var t,n,a;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (args: any) => ({
    setup() {
      const show = ref(args.show);
      const show2 = ref(args.show2);
      const show3 = ref(args.show3);
      watch(() => args.value, (value: boolean) => {
        show.value = value;
      });
      return {
        args,
        show,
        show2,
        show3
      };
    },
    template: \`
    <div>
      <SolarisStyleSwitcher />
    </div>
    \`
  }),
  args: {
    show: true,
    show2: true,
    show3: true
  }
}`,...(a=(n=s.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const S=["StyleSwitcher"];export{s as StyleSwitcher,S as __namedExportsOrder,i as default};
