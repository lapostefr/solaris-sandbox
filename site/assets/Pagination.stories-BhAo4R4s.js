import{a as l}from"./chunk-MZXVCX43-DWuJqIWT.js";import{S as p}from"./Pagination-czKb1N5Z.js";import{r as m,w as u}from"./vue.esm-bundler-DD7xIM0D.js";import"./v4-D8aEg3BZ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const b={title:"Molecules/Pagination",argTypes:{pageParam:{description:"The page parameter.",table:{type:{summary:"string"},defaultValue:{summary:"page"}}},perPage:{description:"Number of items per page.",table:{type:{summary:"number"}},required:!0},total:{description:"Total number of items.",table:{type:{summary:"number"}}},url:{description:"Add an url to the link (works if withLinks is active).",table:{type:{summary:"string"}}},value:{description:"Choose the highlighted link.",table:{type:{summary:"number"}},required:!0},withLinks:{description:"Active the url for each link.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"}},args:{pageParam:"",perPage:5,total:1815,url:"https://www.laposte.local/pp/c/timbresmarianne?page=1&test=2",value:1,withLinks:!1}},e={render:a=>({components:{SolarisPagination:p},setup(){const t=m(a.value),i=()=>l("input");return u(()=>a.value,o=>{t.value=o}),{args:a,currentPage:t,elementChange:i}},template:'<SolarisPagination v-model="currentPage" v-bind="args" @input="elementChange"/>'}),args:{pageParam:"",perPage:5,total:1815,url:"https://www.laposte.local/pp/c/timbresmarianne?page=1&test=2",value:1,withLinks:!1}};var n,r,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisPagination
    },
    setup() {
      const currentPage = ref(args.value);
      const elementChange = () => action('input');
      watch(() => args.value, val => {
        currentPage.value = val;
      });
      return {
        args,
        currentPage,
        elementChange
      };
    },
    template: \`<SolarisPagination v-model="currentPage" v-bind="args" @input="elementChange"/>\`
  }),
  args: {
    pageParam: '',
    perPage: 5,
    total: 1815,
    url: 'https://www.laposte.local/pp/c/timbresmarianne?page=1&test=2',
    value: 1,
    withLinks: false
  }
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const v=["Pagination"];export{e as Pagination,v as __namedExportsOrder,b as default};
