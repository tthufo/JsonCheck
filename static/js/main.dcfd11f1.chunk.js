(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var i=n(1),r=n(0),l=n.n(r),o=n(4),a=n.n(o),s=(n(15),n(16),n(5)),c=n(6),d=n(9),u=n(8),h=(n(19),["text_question","text_answer","checkbox_question","checkbox_input_box","checkbox_answer","list_question","list_input_box","select_question","select_input_box","select_answer","table_header","table_cell"]);var g=function(e){var t=e.data;return console.log(t),Object(i.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column"},children:[Object(i.jsx)("div",{style:{width:"40%",margin:"25px",display:"flex",justifyContent:"center"},children:Object(i.jsx)("div",{style:{width:"auto",padding:10,fontSize:22,border:"1px dashed black"},children:"Page No: ".concat(t[0].page," | Errors found: ").concat(t.length)})}),t&&t.map((function(e){return Object(i.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[Object(i.jsx)("div",{style:{fontWeight:"bold",margin:6,textAlign:"left",width:"30%"},children:Object(i.jsxs)("div",{style:{flexDirection:"column"},children:[Object(i.jsx)("div",{children:"Item No: ".concat(e.item+1)}),Object(i.jsx)("div",{children:"ID: ".concat(e.id)})]})}),Object(i.jsx)("div",{style:{fontStyle:"italic",margin:6,textAlign:"left",width:"70%",height:"100%"},children:e.error&&e.error.map((function(e){return Object(i.jsx)("div",{style:{marginBottom:10},children:e})}))})]})}))]})},p=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(s.a)(this,n),(i=t.call(this,e)).handleFile=function(e){var t=e.target.files[0].name;i.setState({name:t});var n=new FileReader;n.readAsText(e.target.files[0],"UTF-8");var r=[];n.onload=function(e){var t=JSON.parse(e.target.result),n=i.uniqueId(t);t.map((function(e){var t=[];e.fields.map((function(i,r){var l=[];if(1==function(e,t){for(var n=[],i=0;i<e.length;i++)t==e[i]&&n.push(t);return n.length>1}(n,i.id)&&0!=i.id.split(" ").join("").length&&l.push("Duplicated id: "+i.id),0==i.id.split(" ").join("").length&&l.push("Unique id: Empty"),h.includes(i.label)||l.push("Label error: "+(0==i.label.split(" ").join("").length?"Empty":i.label)),4!=i.box.length)l.push("Bounding box error, box length: "+i.box.length),t.push({id:i.id,page:e.page,item:r,error:l});else{var o=i.box[0],a=i.box[1],s=i.box[2],c=i.box[3];a>c&&o>s?l.push("Wrong bounding value: top > bottom \xe8n left > right"):a>c&&o<s?l.push("Wrong boudning box value: top > bottom"):a<c&&o>s&&l.push("Wrong bounding box value: left > right"),t.push({id:i.id,page:e.page,item:r,error:l})}})),r.push(t.filter((function(e){return 0!=e.error.length})))})),i.setState({data:r})}},i.state={name:"",password:"",pagetwodata:"",error:!1,data:[]},i}return Object(c.a)(n,[{key:"uniqueId",value:function(e){var t=[];return e.map((function(e){e.fields.map((function(e){t.push(e.id)}))})),t}},{key:"getE",value:function(e){var t=0;return e.map((function(e){t+=e.length})),t}},{key:"render",value:function(){var e=this.state,t=e.data,n=e.name;console.log(t.filter((function(e){return 0!=e.length})));var l=t.filter((function(e){return 0!=e.length}));return Object(i.jsxs)(r.Fragment,{children:[Object(i.jsx)("div",{style:{fontSize:20,color:"green",margin:10},children:"JSON CHECK"}),Object(i.jsxs)("div",{style:{padding:30},children:[Object(i.jsxs)("div",{style:{flex:1,display:"flex",justifyContent:"flex-start"},children:[Object(i.jsx)("input",{style:{width:100},type:"file",accept:".json",title:"sfdsfdsf",value:this.state.pagetwodata,onChange:this.handleFile.bind(this)}),Object(i.jsx)("div",{style:{marginRight:10},children:n}),Object(i.jsx)("div",{children:0!=l.length&&"| Total Errors: ".concat(this.getE(l))})]}),0!=l.length&&l.map((function(e){return Object(i.jsx)(g,{data:e})})),0==l.length&&""!=n.length&&Object(i.jsx)("h1",{style:{color:"green"},children:"No Error Found"})]})]})}}]),n}(r.Component);var f=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(p,{})})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,l=t.getLCP,o=t.getTTFB;n(e),i(e),r(e),l(e),o(e)}))};a.a.render(Object(i.jsx)(l.a.StrictMode,{children:Object(i.jsx)(f,{})}),document.getElementById("root")),b()}},[[20,1,2]]]);
//# sourceMappingURL=main.dcfd11f1.chunk.js.map