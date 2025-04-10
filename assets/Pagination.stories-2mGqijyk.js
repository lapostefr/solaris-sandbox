import{a as m}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as p}from"./Pagination-SUU5_Awh.js";import{r as u,w as l}from"./vue.esm-bundler-BiAlgFmf.js";import"./v4-CQkTLCs1.js";import"./Icon-C-Sturzh.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const f={title:"Molecules/Pagination",argTypes:{labelPrefix:{description:"Add a prefix to page number in the aria-label.",table:{type:{summary:"string"}}},pageParam:{description:"The page parameter.",table:{type:{summary:"string"},defaultValue:{summary:"page"}}},perPage:{description:"Number of items per page.",table:{type:{summary:"number"}},required:!0},total:{description:"Total number of items.",table:{type:{summary:"number"}}},url:{description:"Add an url to the link (works if withLinks is active).",table:{type:{summary:"string"}}},modelValue:{description:"Choose the highlighted link.",table:{type:{summary:"number"}},required:!0},withLinks:{description:"Active the url for each link.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"}},args:{labelPrefix:"",pageParam:"",perPage:5,total:1815,url:"https://www.laposte.local/pp/c/timbresmarianne?page=1&test=2",modelValue:1,withLinks:!1}},r={render:e=>({components:{SolarisPagination:p},setup(){const a=u(e.modelValue),s=m("input");return l(()=>e.modelValue,t=>{t!==a.value&&(a.value=t)}),l(a,t=>{e.modelValue=t}),{args:e,currentPage:a,elementChange:s}},template:'<SolarisPagination v-model="currentPage" v-bind="args" @input="elementChange"/>'}),args:{labelPrefix:"",pageParam:"",perPage:5,total:1815,url:"https://www.laposte.local/pp/c/timbresmarianne?page=1&test=2",modelValue:1,withLinks:!1}};var n,i,o;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisPagination
    },
    setup() {
      const currentPage = ref(args.modelValue);
      const elementChange = action('input');
      watch(() => args.modelValue, val => {
        if (val !== currentPage.value) {
          currentPage.value = val;
        }
      });
      watch(currentPage, val => {
        args.modelValue = val;
      });
      return {
        args,
        currentPage,
        elementChange
      };
    },
    template: '<SolarisPagination v-model="currentPage" v-bind="args" @input="elementChange"/>'
  }),
  args: {
    labelPrefix: '',
    pageParam: '',
    perPage: 5,
    total: 1815,
    url: 'https://www.laposte.local/pp/c/timbresmarianne?page=1&test=2',
    modelValue: 1,
    withLinks: false
  }
}`,...(o=(i=r.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const w=["Pagination"];export{r as Pagination,w as __namedExportsOrder,f as default};
