(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{90:function(e,t,s){},91:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s.n(a),n=s(12),l=s.n(n),r=s(13),i=s(8),o=s(39),d=s(93),m=s(94),u=s(1),j=function(e){var t=Object(a.useState)(""),s=Object(o.a)(t,2),c=s[0],n=s[1],l=e.chatId,r=e.creds,j=function(e){e.preventDefault();var t=c.trim();t.length>0&&Object(i.o)(r,l,{text:t}),n("")};return Object(u.jsxs)("form",{className:"message-form",onSubmit:j,children:[Object(u.jsx)("input",{className:"message-input",placeholder:"Send a message...",value:c,onChange:function(t){n(t.target.value),Object(i.l)(e,l)},onSubmit:j}),Object(u.jsxs)("label",{htmlFor:"upload-button",children:[Object(u.jsx)("span",{className:"image-button",children:Object(u.jsx)(d.a,{className:"picture-icon"})}),Object(u.jsx)("input",{type:"file",multiple:!1,id:"upload-button",style:{display:"none"},onChange:function(e){Object(i.o)(r,l,{files:e.target.files,text:""})}}),Object(u.jsx)("button",{type:"submit",className:"send-button",children:Object(u.jsx)(m.a,{className:"send-icon"})})]})]})};var b=function(e){var t,s=e.message;return(null===s||void 0===s||null===(t=s.attachments)||void 0===t?void 0:t.length)>0?Object(u.jsx)("img",{src:s.attachments[0].file,alt:"message-attachment",className:"message-image",style:{float:"right"}}):Object(u.jsx)("div",{className:"message",style:{float:"right",marginRight:"18px",color:"black",backgroundColor:"#FFDD05"},children:s.text})};var g=function(e){var t,s,a=e.lastMessage,c=e.message,n=!a||a.sender.username!=c.sender.username;return Object(u.jsxs)("div",{className:"message-row",children:[n&&Object(u.jsx)("div",{className:"message-avatar",style:{backgroundImage:"url(".concat(null===c||void 0===c||null===(t=c.sender)||void 0===t?void 0:t.avatar,")")}}),(null===c||void 0===c||null===(s=c.attachments)||void 0===s?void 0:s.length)>0?Object(u.jsx)("img",{src:c.attachments[0].file,alt:"message-attachment",className:"message-image",style:{marginLeft:n?"4px":"48px"}}):Object(u.jsx)("div",{className:"message",style:{float:"left",backgroundColor:"#CABCDC",marginLeft:n?"4px":"48px"},children:c.text})]})},h=function(e){var t=e.chats,s=e.activeChat,a=e.userName,c=e.messages,n=t&&t[s],l=function(e,t){return console.log(e.text,t),n.people.map((function(s,a){var c;return s.last_read==e.id&&Object(u.jsx)("div",{className:"read-receipt",style:{float:t?"right":"left",backgroundImage:"url(".concat(null===s||void 0===s||null===(c=s.person)||void 0===c?void 0:c.avatar,")")}},"read_".concat(a))}))};return n?Object(u.jsxs)("div",{className:"chat-feed",children:[function(){var e=Object.keys(c);return console.log(e),e.map((function(t,s){var n=c[t],r=0==s?null:e[s-1],i=a==n.sender.username;return Object(u.jsxs)("div",{style:{width:"100%"},children:[Object(u.jsx)("div",{className:"message-block",children:i?Object(u.jsx)(b,{message:n}):Object(u.jsx)(g,{message:n,lastMessage:c[r]})}),Object(u.jsx)("div",{className:"read-receipts",style:{marginRight:i?"18px":"0px",margineLeft:i?"0px":"68px"},children:l(n,i)})]},"msg_".concat(s))}))}(),Object(u.jsx)("div",{style:{height:"100px"}}),Object(u.jsx)("div",{className:"message-form-container",children:Object(u.jsx)(j,Object(r.a)(Object(r.a)({},e),{},{chatId:s}))})]}):"Loading..."},v=(s(90),function(){return Object(u.jsx)(i.d,{height:"100vh",projectID:"0793f727-d469-4f21-811e-0dbccce0ee9f",userName:"kevinyluo",userSecret:"joonie707",renderChatFeed:function(e){return Object(u.jsx)(h,Object(r.a)({},e))}})});l.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root"))}},[[91,1,2]]]);
//# sourceMappingURL=main.b61ee6c1.chunk.js.map