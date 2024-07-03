import{a as r}from"./chunk-MZXVCX43-DWuJqIWT.js";import{S as u}from"./FileUploader-Q327LISK.js";import"./v4-D8aEg3BZ.js";import"./vue.esm-bundler-DD7xIM0D.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const c="[ string ]",g=`[
  {
    id: string
    name: string
    progress: number
    loaded: boolean
  }
]`,e=[],v={title:"Organisms/File Uploader",argTypes:{digiposte:{description:"The Digiposte button",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:{type:"boolean"}},error:{description:"Displays a notification in the event of an error. ",table:{type:{summary:"boolean"}},defaultValue:{summary:!1},control:{type:"boolean"}},extension:{description:"The type of extension that is accepted.",table:{type:{summary:"array",detail:c}}},filelist:{description:"List of files.",table:{type:{summary:"array",detail:g}},required:!0},id:{description:"The File Uploader id.",table:{type:{summary:"string"}},required:!0},label:{description:"The label of button.",table:{type:{summary:"string"},defaultValue:{summary:"Parcourir"}}},subtitle:{description:"The subtitle of dropzone.",table:{type:{summary:"string"},defaultValue:{summary:""}}},name:{description:"The File Uploader name.",table:{type:{summary:"string"}},required:!0},titleError:{description:"The Notification Title Error.",table:{type:{summary:"string"}}},textError:{description:"The Notification Title Error.",table:{type:{summary:"string"}}},buttonType:{description:"The kind of button.",table:{type:{summary:"string"}},defaultValue:{summary:"primary"},control:{type:"select"},options:["primary","secondary","ghost"]},buttonColor:{description:"The background color of the button.",table:{type:{summary:"string"}},defaultValue:{summary:"supernova"},control:{type:"select"},options:["supernova","default","cobalt","darkgrey","white","danger"]}},args:{digiposte:!0,error:!1,extension:[".jpg",".pdf"],filelist:e,id:"monId",label:"Parcourir",subtitle:"",name:"name",titleError:"Vous avez téléchargé un document non valide",textError:"Lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",buttonType:"primary",buttonColor:"supernova"}},t={render:s=>({components:{SolarisFileUploader:u},setup(){const l=r("add"),d=r("digiposte"),m=r("remove");return{args:s,addElement:l,removeElement:m,addFile:p=>{for(const o of p)e.push({id:o.name,name:o.name,progress:0,loaded:!1});setTimeout(()=>{e[e.length-1].progress=50},500),setTimeout(()=>{e[e.length-1].progress=100,setTimeout(()=>{e[e.length-1].loaded=!0},800)},1e3)},digiposteClick:d}},template:'<SolarisFileUploader v-bind="args" @addFile="addFile($event); addElement" @digiposteClick="digiposteClick" @removeFile="removeElement" />'})};var i,n,a;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisFileUploader
    },
    setup() {
      const addElement = action('add');
      const digiposteClick = action('digiposte');
      const removeElement = action('remove');
      const addFile = (files: any) => {
        for (const file of files) {
          filelist.push({
            id: file.name,
            name: file.name,
            progress: 0,
            loaded: false
          });
        }
        setTimeout(() => {
          filelist[filelist.length - 1].progress = 50;
        }, 500);
        setTimeout(() => {
          filelist[filelist.length - 1].progress = 100;
          setTimeout(() => {
            filelist[filelist.length - 1].loaded = true;
          }, 800);
        }, 1000);
      };
      return {
        args,
        addElement,
        removeElement,
        addFile,
        digiposteClick
      };
    },
    template: \`<SolarisFileUploader v-bind="args" @addFile="addFile($event); addElement" @digiposteClick="digiposteClick" @removeFile="removeElement" />\`
  })
}`,...(a=(n=t.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const E=["FileUploader"];export{t as FileUploader,E as __namedExportsOrder,v as default};
