(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n(1),r=n.n(a),l=n(3),o=n.n(l),s=(n(13),n(14),n(4)),d=n(5),u=n(7),c=n(6),h=["text_question","text_answer","checkbox_question","checkbox_input_box","checkbox_answer","list_question","list_input_box","select_question","select_input_box","select_answer","table_header","table_cell"];function p(e,t){for(var n=[],i=0;i<e.length;i++)t==e[i]&&n.push(t);return n.length>1}var g=function(e){var t=e.data;return Object(i.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"column"},children:[Object(i.jsx)("div",{style:{width:"40%",margin:"25px",display:"flex",justifyContent:"center"},children:Object(i.jsx)("div",{style:{width:"auto",padding:10,fontSize:22,border:"1px dashed black"},children:"Page No: ".concat(t[0].page," | Errors found: ").concat(t.length)})}),t&&t.map((function(e){return Object(i.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[Object(i.jsx)("div",{style:{fontWeight:"bold",margin:6,textAlign:"left",width:"30%"},children:Object(i.jsxs)("div",{style:{flexDirection:"column"},children:[Object(i.jsx)("div",{children:"Item No: ".concat(e.item+1)}),Object(i.jsx)("div",{children:"ID: ".concat(e.id)})]})}),Object(i.jsx)("div",{style:{fontStyle:"italic",margin:6,textAlign:"left",width:"70%",height:"100%"},children:e.error&&e.error.map((function(e){return Object(i.jsx)("div",{style:{marginBottom:10},children:e})}))})]})}))]})},b=function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(e){var i;return Object(s.a)(this,n),(i=t.call(this,e)).handleFile=function(e){var t=e.target.files[0].name;i.setState({name:t});var n=new FileReader;n.readAsText(e.target.files[0],"UTF-8");var a=[];n.onload=function(e){try{var t=JSON.parse(e.target.result),n=i.uniqueId(t);t.map((function(e){var t=[];e.fields.map((function(i,a){var r=[];if(1==p(n,i.id)&&0!=i.id.split(" ").join("").length&&r.push("Duplicated id: "+i.id),0==i.id.split(" ").join("").length&&r.push("Unique id: Empty"),h.includes(i.label)||r.push("Label error: "+(0==i.label.split(" ").join("").length?"Empty":i.label)),4!=i.box.length)r.push("Bounding box error, box length: "+i.box.length),t.push({id:i.id,page:e.page,item:a,error:r});else{var l=i.box[0];parseFloat(l)<=0&&r.push("Invalid bounding value left: "+l);var o=i.box[1];parseFloat(o)<=0&&r.push("Invalid bounding value top: "+o);var s=i.box[2];parseFloat(s)<=0&&r.push("Invalid bounding value right: "+s);var d=i.box[3];parseFloat(d)<=0&&r.push("Invalid bounding value bottom: "+d),o>d&&l>s?r.push("Wrong bounding value: top > bottom \xe8n left > right"):o>d&&l<s?r.push("Wrong boudning box value: top > bottom"):o<d&&l>s&&r.push("Wrong bounding box value: left > right"),t.push({id:i.id,page:e.page,item:a,error:r})}})),a.push(t.filter((function(e){return 0!=e.error.length})))}))}catch(e){alert(e)}i.setState({data:a})}},i.handleFileDrag=function(e){var t=e.dataTransfer.files,n=t[0].name;i.setState({name:n});var a=new FileReader;a.readAsText(t[0],"UTF-8");var r=[];a.onload=function(e){try{var t=JSON.parse(e.target.result),n=i.uniqueId(t);t.map((function(e){var t=[];e.fields.map((function(i,a){var r=[];if(1==p(n,i.id)&&0!=i.id.split(" ").join("").length&&r.push("Duplicated id: "+i.id),0==i.id.split(" ").join("").length&&r.push("Unique id: Empty"),h.includes(i.label)||r.push("Label error: "+(0==i.label.split(" ").join("").length?"Empty":i.label)),4!=i.box.length)r.push("Bounding box error, box length: "+i.box.length),t.push({id:i.id,page:e.page,item:a,error:r});else{var l=i.box[0];parseFloat(l)<=0&&r.push("Invalid bounding value left: "+l);var o=i.box[1];parseFloat(o)<=0&&r.push("Invalid bounding value top: "+o);var s=i.box[2];parseFloat(s)<=0&&r.push("Invalid bounding value right: "+s);var d=i.box[3];parseFloat(d)<=0&&r.push("Invalid bounding value bottom: "+d),o>d&&l>s?r.push("Wrong bounding value: top > bottom \xe8n left > right"):o>d&&l<s?r.push("Wrong boudning box value: top > bottom"):o<d&&l>s&&r.push("Wrong bounding box value: left > right"),t.push({id:i.id,page:e.page,item:a,error:r})}})),r.push(t.filter((function(e){return 0!=e.error.length})))}))}catch(e){alert(e)}i.setState({data:r})}},i.state={name:"",password:"",pagetwodata:"",error:!1,data:[]},i}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=document.getElementById("drop_zone");e.addEventListener("dragover",this.handleDragOver.bind(this),!1),e.addEventListener("drop",this.handleFileSelect.bind(this),!1)}},{key:"uniqueId",value:function(e){var t=[];return e.map((function(e){e.fields.map((function(e){t.push(e.id)}))})),t}},{key:"getE",value:function(e){var t=0;return e.map((function(e){t+=e.length})),t}},{key:"handleFileSelect",value:function(e){e.stopPropagation(),e.preventDefault();e.dataTransfer.files;this.handleFileDrag(e)}},{key:"handleDragOver",value:function(e){e.stopPropagation(),e.preventDefault(),e.dataTransfer.dropEffect="copy"}},{key:"render",value:function(){var e=this.state,t=e.data,n=e.name,r=t.filter((function(e){return 0!=e.length}));return Object(i.jsxs)(a.Fragment,{children:[Object(i.jsx)("div",{style:{fontSize:20,color:"green",margin:10},children:"JSON CHECK"}),Object(i.jsxs)("div",{style:{padding:30},children:[Object(i.jsxs)("div",{style:{flex:1,display:"flex",justifyContent:"flex-start"},children:[Object(i.jsx)("input",{style:{width:100},id:"drop_zone",type:"file",accept:".json",title:" ",value:this.state.pagetwodata,onChange:this.handleFile.bind(this)}),Object(i.jsx)("div",{style:{marginRight:10},children:n}),Object(i.jsx)("div",{children:0!=r.length&&"| Total Errors: ".concat(this.getE(r))})]}),0!=r.length&&r.map((function(e){return Object(i.jsx)(g,{data:e})})),0==r.length&&""!=n.length&&Object(i.jsx)("h1",{style:{color:"green"},children:"No Error Found"})]})]})}}]),n}(a.Component);var v=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(b,{})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,r=t.getLCP,l=t.getTTFB;n(e),i(e),a(e),r(e),l(e)}))};o.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(v,{})}),document.getElementById("root")),f()}},[[15,1,2]]]);
//# sourceMappingURL=main.2179eef1.chunk.js.map