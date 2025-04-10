import{a as s}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as p}from"./FileUploader-nO5-qzOU.js";import"./v4-CQkTLCs1.js";import"./vue.esm-bundler-BiAlgFmf.js";import"./Button-CxIFeNFW.js";import"./Icon-C-Sturzh.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Loader-DHIAU4Qg.js";import"./Notification-D_XdS5r2.js";import"./Collapse-BNiXmgF_.js";import"./types-CX4OQ2kf.js";import"./generateId-CVaf2GGW.js";import"./useTips-CORXmiXO.js";const m="[ string ]",u=`[
  {
    id: string
    name: string
    progress: number
    loaded: boolean
  }
]`,S={title:"Organisms/File Uploader",argTypes:{digiposte:{description:"The Digiposte button",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:{type:"boolean"}},error:{description:"Displays a notification in the event of an error. ",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},extension:{description:"The type of extension that is accepted.",table:{type:{summary:"array",detail:m}}},filelist:{description:"List of files.",table:{type:{summary:"array",detail:u}},required:!0},id:{description:"The File Uploader id.",table:{type:{summary:"string"}},required:!0},label:{description:"The label of button.",table:{type:{summary:"string"},defaultValue:{summary:"Parcourir"}}},subtitle:{description:"The subtitle of dropzone.",table:{type:{summary:"string"},defaultValue:{summary:""}}},name:{description:"The File Uploader name.",table:{type:{summary:"string"}},required:!0},titleError:{description:"The Notification Title Error.",table:{type:{summary:"string"}}},textError:{description:"The Notification Title Error.",table:{type:{summary:"string"}}},buttonType:{description:"The kind of button.",table:{type:{summary:"string"}},defaultValue:{summary:"primary"},control:{type:"select"},options:["primary","secondary","ghost"]},buttonColor:{description:"The background color of the button.",table:{type:{summary:"string"}},defaultValue:{summary:"supernova"},control:{type:"select"},options:["supernova","default","cobalt","darkgrey","white","danger"]}},args:{digiposte:!0,error:!1,extension:[".jpg",".pdf"],filelist:[],id:"monId",label:"Parcourir",subtitle:"",name:"name",titleError:"Vous avez téléchargé un document non valide",textError:"Lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",buttonType:"primary",buttonColor:"supernova"}},r={render:e=>({components:{SolarisFileUploader:p},setup(){const d=s("digiposte");return{args:e,addFile:t=>{for(const o of t){e.filelist.push({id:o.name,name:o.name,progress:0,loaded:!1});const i=e.filelist.length-1;setTimeout(()=>{e.filelist[i].progress=50},500),setTimeout(()=>{e.filelist[i].progress=100,setTimeout(()=>{e.filelist[i].loaded=!0,s("add")(e.filelist[i])},800)},1e3)}},removeFile:t=>{const o=e.filelist.findIndex(i=>i.id===t.id);e.filelist.splice(o,1),s("remove")(t)},digiposteClick:d}},template:'<SolarisFileUploader v-bind="args" @addFile="addFile" @digiposteClick="digiposteClick" @removeFile="removeFile" />'})};var l,a,n;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisFileUploader
    },
    setup() {
      const digiposteClick = action('digiposte');
      const addFile = (files: any) => {
        for (const file of files) {
          args.filelist.push({
            id: file.name,
            name: file.name,
            progress: 0,
            loaded: false
          });
          const index = args.filelist.length - 1;
          setTimeout(() => {
            args.filelist[index].progress = 50;
          }, 500);
          setTimeout(() => {
            args.filelist[index].progress = 100;
            setTimeout(() => {
              args.filelist[index].loaded = true;
              action('add')(args.filelist[index]);
            }, 800);
          }, 1000);
        }
      };
      const removeFile = (file: any) => {
        const index = args.filelist.findIndex((f: any) => f.id === file.id);
        args.filelist.splice(index, 1);
        action('remove')(file);
      };
      return {
        args,
        addFile,
        removeFile,
        digiposteClick
      };
    },
    template: '<SolarisFileUploader v-bind="args" @addFile="addFile" @digiposteClick="digiposteClick" @removeFile="removeFile" />'
  })
}`,...(n=(a=r.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const q=["FileUploader"];export{r as FileUploader,q as __namedExportsOrder,S as default};
