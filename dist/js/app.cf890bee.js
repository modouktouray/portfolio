(function(){var e={2039:function(e,i,t){"use strict";var n=t(9242),o=t(3396);const a={id:"app"},r=(0,o._)("path",{class:"st1",d:"M0,0h24v24H0V0z"},null,-1),s=(0,o._)("path",{class:"st2",d:"M3,18h18v-2H3V18z M3,13h18v-2H3V13z M3,6v2h18V6H3z"},null,-1),c=[r,s],l=(0,o._)("div",{class:"ocean"},[(0,o._)("div",{class:"wave"})],-1),g=["src"];function d(e,i,t,r,s,d){const u=(0,o.up)("Menu"),m=(0,o.up)("Home"),p=(0,o.up)("Me"),v=(0,o.up)("FindMe"),h=(0,o.up)("FooterCurve");return(0,o.wg)(),(0,o.iD)("div",a,[(0,o.Wm)(n.uT,{name:"menu-transition"},{default:(0,o.w5)((()=>[s.showMenu?((0,o.wg)(),(0,o.j4)(u,{key:0,class:"menu-bar",onClose:i[0]||(i[0]=e=>s.showMenu=!1)})):(0,o.kq)("",!0)])),_:1}),(0,o.Wm)(n.uT,{name:"hidden-div-transition"},{default:(0,o.w5)((()=>[s.showMenu?((0,o.wg)(),(0,o.iD)("div",{key:0,onClick:i[1]||(i[1]=e=>s.showMenu=!1),class:"hidden-div"})):(0,o.kq)("",!0)])),_:1}),((0,o.wg)(),(0,o.iD)("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 24 24",style:{"enable-background":"new 0 0 24 24"},"xml:space":"preserve",class:"menu",onClick:i[2]||(i[2]=e=>s.showMenu=!0)},c)),(0,o.Wm)(m,{id:"home",class:"section"}),(0,o.Wm)(p,{id:"me",class:"section"}),(0,o.Wm)(v,{id:"find-me"}),l,(0,o.Wm)(h,{class:"footer"}),(0,o.Wm)(n.uT,{name:"image-preview-transititon"},{default:(0,o.w5)((()=>[s.showImage?((0,o.wg)(),(0,o.iD)("div",{key:0,class:"image-preview-container",onClick:i[3]||(i[3]=e=>[s.showImage=!1,s.previewImageUrl=""])},[(0,o._)("img",{src:s.previewImageUrl,class:"image-preview"},null,8,g)])):(0,o.kq)("",!0)])),_:1})])}const u={id:"home"};function m(e,i,t,n,a,r){const s=(0,o.up)("Hero");return(0,o.wg)(),(0,o.iD)("div",u,[(0,o.Wm)(s,{class:"hero"})])}var p=t.p+"img/mkt.ced70c35.jpeg";const v=e=>((0,o.dD)("data-v-67d9e056"),e=e(),(0,o.Cn)(),e),h={class:"hero-text"},f={ref:"greeting",class:"text-white"},w={ref:"name",class:"text-white"},A=v((()=>(0,o._)("h3",null,"Software Developer",-1))),k=[A],b={class:"hero-image"};function M(e,i,t,n,a,r){return(0,o.wg)(),(0,o.iD)("main",null,[(0,o._)("div",h,[(0,o._)("h1",f,"Hi I'm",512),(0,o._)("h2",w,"Modou K.",512),(0,o._)("div",{ref:"profession",onClick:i[0]||(i[0]=(...e)=>r.goToMe&&r.goToMe(...e)),class:"title-wrapper"},k,512)]),(0,o._)("aside",b,[(0,o._)("img",{onMouseenter:i[1]||(i[1]=(...e)=>r.imagePopup&&r.imagePopup(...e)),onMouseleave:i[2]||(i[2]=(...e)=>r.imagePopdown&&r.imagePopdown(...e)),ref:"img",src:p,alt:"Portrait photo of MKT"},null,544)])])}var y=t(8455),x={name:"HeroComponent",mounted(){const e=this.$refs.greeting,i=this.$refs.name,t=this.$refs.profession,n=this.$refs.img,o=new y.TimelineLite,a=new y.TimelineLite;o.from(e,{y:-20,opacity:0,duration:.5,ease:"back.out(1.7)"}),o.from(i,{y:-20,opacity:0,duration:.5,ease:"back.out(1.7)"}),o.from(t,{y:-20,opacity:0,duration:.2,ease:"back.out(1.7)"}),a.from(n,{y:-80,opacity:0,duration:1,ease:"back.out(1.7)"})},methods:{imagePopup(){const e=this.$refs.img,i=new y.TimelineLite;i.to(e,{boxShadow:"0px 0px 15px 0px rgba(0,0,0,0.55)",scale:1.1})},imagePopdown(){const e=this.$refs.img,i=new y.TimelineLite;i.to(e,{scale:1})},goToMe(){document.getElementById("me").scrollIntoView({behavior:"smooth"})}}},O=t(89);const I=(0,O.Z)(x,[["render",M],["__scopeId","data-v-67d9e056"]]);var P=I,C={name:"HomeSection",components:{Hero:P}};const B=(0,O.Z)(C,[["render",m],["__scopeId","data-v-37722943"]]);var D=B;function H(e,i,t,n,a,r){const s=(0,o.up)("Description");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(s,{class:"description"})])}var U=t.p+"img/js.3fa95615.gif",W=t.p+"img/vue.f7fc640e.svg",K=t.p+"img/laravel.bd354bcc.svg",S="data:image/png;base64,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",T="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAH3UlEQVR4nO2df2ydVRnHP8+5t/fetmOR8GvDLVCcqKgBdIrgNui6BcGA29hGUOOiEokgiSirMzFaYipulYxkCShxJqBCmCMCMzObm+0KdIlBRxYqczJ0/JA5foyt7frzPY9/dJPe29K+59737bm7fT//3XOf8zyn7/ee877nvM85hYSEhISEhISEhISEhISEqYT4bsC4NLbOSom9VEUvxMocFZkj6DlALXA6UAOkgWOodAv6sgqvoDwvwt5gyOzmnvo3vf4NE1BeAty+NZuqyX1OVW9EmA/MKtGjAntE5BdBTh6iqb4vglZGSnkIsGJTKnXBGV9T9C6QmTFF+aeFm1nb0B6T/6LwL0BTa056g98IcsMkRBsU1a8G6xb9dhJihcJ4b0CfbZmkiw9QpSIPphv/3DBJ8SbEbw9Yvf2DxqT2Mdk/BOGg7en/EBuu7Z/UuGPgtQcYk7rRSxuU81K1uVWTHncMvAqg8Elfsa2ywlfskXgVQNDzC4oU1RYrps4OmbNE5BagK6bY80C9P4Sk/YaXmoKCn9t1ixpPfgjggdSanV2qPBxD8Bx3bDud9bwdg+/Q+H4Kyoz8YI3+utAgyJnfAb2xRM9mp8fi1wHfAkx5ykoAo3y5sCzVGywHqj00Z1LwfA8oQOWbpnFHjzWp+xikO1Wly1S1xXez4qS8BABBZLVRu5o0qPpuTvyU1RA0FUkE8EwigGe83gPs2oa6KPyY7+38F1A4q3ZGd2XH8zMEHAZeQHgc0/+gzCt9lp70gPCkgXOBBpQNBNl/aFtmaalOEwGKZyYim7Ute2spThIBSsMgbNC27DXFOij9HtD49Gkp+peoYTFwMcpsYDqQKtn3qYFB+KVu40K5mh7XysULcOe2WpOqaoT+7yrUMgUmTeNwLtWZ78DAj10rFjcErWmdY1Lpv4D+kOEcnQSVW7Uzf3U3DO4CrNlxgVG7G7jIuW5lM4M3Mp93reQmQFNrzlh5AjjTNdCUwHCdexUX477gNoSPuQYpW0wQ7YselcXOTQhtefvWLCrfdw1QxvTyk4bDBWWlvneYpTtqz3GpEFqAVC6zGDjDuUlliiLPgPz/2U23kgXOLtlxeugTLuahBVCRL7i3pnwxor/KK5iemUMUiWqi8QgAfMaxKWWLQEeQe+rRvMIhIvqByaUu1uEEuKOjGuHDRbWn/Hg5GOKLNDXZkwWqCMjKiPx/1MU4nAC545dQfq8vi6HTWhZyT8PBvNL2zEqEiyOK4bSnIZQAJhBvKYQR0YXQbKvNXFoaDoz8QluZhkhzhLGm6bbwqwNhf9VO3aoM6EU4rKrPiZrt1lQ9wk/nHyk0UkVoz21E9QORRq+eVgPdoRbmQgmgorMl/kz2Q4huMtY8OWQHX2La0ddoWjlQqtP3WiMcvvjZdaBRjf3vEgTZsKahBDDIjBgXO4+B3mWPvG8DD8wdtBPbl4x2UM1TuY2gN8USIJUKve8gXA+Ib8Vzj01zHc2LXovJ/yi0PbOEQVnP6Mzs6Eh3d4c2DWcm2ffuzMWhsFM1u5TmebGknwOoYnimZgZW6yBYiMpNKB+JK94JjsoV4ZOJQwqgJY/FBezXfrOce0dffO0kw1uZZcC1qFwGzAROKypKO0Bw4sOkbQV4xcU47FOQ86u2cRiwapdwb8M7hV/ortzXeVObKH1/sEek08U63D1AOSTR/YDuZ93iF/L8P0sNPdmHQU/99Sa1f3MxDyWAoK9G1IUHrKnKm/RoKzl6sluAhVEE8I4aJwHCLUUIfy+qMQWosoO7F7yR34Lcj6iUiw9Kti96ASz61+Lak48Ytoz8rDtz54HeGYXvMuGAXOG25yxcD6hOPweUPEcysD+vIGVXURmLfCd53LVCOAGa6rspvHhFMGTt63kFIp8t1WdZIfYR1yrhX8iIlD4MmXThBGV2yT7LhydkwaDT+A8OAoi1f3J1HoJK2XzXhaFxYrPRhBYgsMEfGc6RT8gnQPmSzO8vaogOPwT97OrDCn8oJkgF04WyVK7q3zKx6dg4JWYprC82UIURgD6ENReVcvHBNTVxbUO7Ck+WEvAU5R1gP8pm4NtIarZcObBK6ntfLdWx8zO4BuYWMcGnYjzbbWKs1El937+9xY8Q9+zolvpD1nADMOoda4I7xe0PuHvRbovMF/TZiNsz5Sh+j9jahZ1B9dOXichyYBPwEnEdK1PBeD0xaoJ9ufFTBveSZJekZxIBPJMI4JlKFUBRWrBSx2DmTJCbgaO+GzUWlfQyZCT3y1X9J1Yn+wA26q5MF8ij41XyQWX2AGtGnb7IfwceI9r0mkioTAHMGH/XWQi+z8oeA98CxJSWaL8yqkgyKxj+jxvvUmWizvhzxvc94D/Ax2Pw+w1tyx5HZAO2qgszuAzGOH0xfTx0Em1ceJ4JZ34A4nzARUTR35IrB7zv+Pc7BFk2E0G6S3FEkGQQAX5PT68f2IfKJk/R4zgQ3BnfN2HI9N2GcHBiw0jZQ21fIgDAcCqfXg+8PqFxNDyPNdfLXAYnKd64eBcAQBYM7GVILge2xxjmOEgztv/yKN7lRkXZTUy0LXsNwreABiD0bsOxkSOgHag8hvb9XuoZtSnEN2UnwEm0g2qGcp9G9RKG5wrnA+8HORu0BqgCOYboMSzdCG8j+iKWFxEOAHtZMLBPZIqfZpeQkJCQkJCQkJCQkJCQUFb8D68HOOtEGUKSAAAAAElFTkSuQmCC",Q=t.p+"img/figma.14e7d0c1.svg",V=t.p+"img/machine-learning.ba860475.png";const z=e=>((0,o.dD)("data-v-8eeea7ce"),e=e(),(0,o.Cn)(),e),R=z((()=>(0,o._)("h2",{class:"text-white"},"A little about me",-1))),L=(0,o.Uk)(" Inquisitive, energetic computer science specialist skilled in leadership, with a good foundation in math, logic, and cross-platform coding. I am a Full-stack Developer experienced in building responsive web apps while keeping the aesthetic integrity. Experienced participating in the complete product development lifecycle of successfully launched applications. Seeking to leverage solid skills in collaboration, communication, and development as a programmer/researcher to contribute to the development of technology in my region . Proficient in semantic "),J=(0,o.Uk)(" and modern frameworks like "),E=(0,o.Uk)(" . Always puts effort in making User Interface beautiful and practical with tools like "),q=(0,o.Uk)(" . "),F=z((()=>(0,o._)("p",null," In my free time I work on cool projects while experimenting with new technologies especially in the field of AI. Currently I'm working on OCR a document, form, or invoice with Tesseract, OpenCV, and Python. ",-1))),j=(0,o.uE)('<li data-v-8eeea7ce><img src="'+U+'" alt="javascipt" data-v-8eeea7ce></li><li data-v-8eeea7ce><img src="'+W+'" alt="vuejs" data-v-8eeea7ce></li><li data-v-8eeea7ce><img src="'+K+'" alt="Laravel" data-v-8eeea7ce></li><li data-v-8eeea7ce><img src="'+S+'" alt="Java" data-v-8eeea7ce></li><li data-v-8eeea7ce><img src="'+T+'" alt="python" data-v-8eeea7ce></li><li data-v-8eeea7ce><img src="'+Q+'" alt="figma" data-v-8eeea7ce></li><li data-v-8eeea7ce><img src="'+V+'" alt="figma" data-v-8eeea7ce></li>',7),G=["href"],X=z((()=>(0,o._)("button",null,"Resume",-1))),Z=[X];function N(e,i,t,n,a,r){return(0,o.wg)(),(0,o.iD)("article",null,[R,(0,o._)("p",null,[L,(0,o._)("span",{ref:"reactive",onMouseenter:i[0]||(i[0]=(...e)=>r.reactiveHighlight&&r.reactiveHighlight(...e)),onMouseleave:i[1]||(i[1]=(...e)=>r.reactiveHighlightRemove&&r.reactiveHighlightRemove(...e))},"HTML, CSS, JavaScript",544),J,(0,o._)("span",{ref:"gdesign",onMouseenter:i[2]||(i[2]=(...e)=>r.gHighlight&&r.gHighlight(...e)),onMouseleave:i[3]||(i[3]=(...e)=>r.gHighlightRemove&&r.gHighlightRemove(...e))},"Laravel and Vuejs",544),E,(0,o._)("span",{ref:"uidesign",onMouseenter:i[4]||(i[4]=(...e)=>r.uiHighlight&&r.uiHighlight(...e)),onMouseleave:i[5]||(i[5]=(...e)=>r.uiHighlightRemove&&r.uiHighlightRemove(...e))},"Figma",544),q]),F,(0,o._)("ul",null,[j,(0,o._)("li",null,[(0,o._)("a",{href:a.pdf,download:""},Z,8,G)])])])}var Y={name:"DescriptionComponent",data(){return{pdf:"../assets/cv.pdf"}},methods:{reactiveHighlight(){const e=new y.TimelineLite,{reactive:i}=this.$refs;e.to(i,{backgroundColor:"#1a1a1a",color:"white"})},reactiveHighlightRemove(){const e=new y.TimelineLite,{reactive:i}=this.$refs;e.to(i,{backgroundColor:"#141414",color:"#8d8d8d"})},uiHighlight(){const e=new y.TimelineLite,{uidesign:i}=this.$refs;e.to(i,{backgroundColor:"#1a1a1a",color:"white"})},uiHighlightRemove(){const e=new y.TimelineLite,{uidesign:i}=this.$refs;e.to(i,{backgroundColor:"#141414",color:"#8d8d8d"})},gHighlight(){const e=new y.TimelineLite,{gdesign:i}=this.$refs;e.to(i,{backgroundColor:"#1a1a1a",color:"white"})},gHighlightRemove(){const e=new y.TimelineLite,{gdesign:i}=this.$refs;e.to(i,{backgroundColor:"#141414",color:"#8d8d8d"})}}};const _=(0,O.Z)(Y,[["render",N],["__scopeId","data-v-8eeea7ce"]]);var $=_,ee={name:"MeSection",components:{Description:$}};const ie=(0,O.Z)(ee,[["render",H],["__scopeId","data-v-aa228704"]]);var te=ie;const ne=e=>((0,o.dD)("data-v-11a579e1"),e=e(),(0,o.Cn)(),e),oe={class:"main-container"},ae=ne((()=>(0,o._)("h1",{class:"text-white"},"Find Me",-1))),re={class:"find-me-container"},se={class:"icons text-white"};function ce(e,i,t,n,a,r){const s=(0,o.up)("FindMeIcons");return(0,o.wg)(),(0,o.iD)("div",oe,[ae,(0,o._)("div",re,[(0,o._)("img",{ref:"img",src:p,alt:"Portrait photo of Ayushman",onMouseenter:i[0]||(i[0]=(...e)=>r.imagePopup&&r.imagePopup(...e)),onMouseleave:i[1]||(i[1]=(...e)=>r.imagePopdown&&r.imagePopdown(...e))},null,544),(0,o._)("div",se,[(0,o.Wm)(s,{class:"email",title:"email",content:"touraymodouk11@gmail.com.com"}),(0,o.Wm)(s,{title:"github",content:"Modou K Touray",link:"https://github.com/mktcyber"}),(0,o.Wm)(s,{title:"instagram",content:"engineerktouray",link:"http://instagram.com/engineerktouray"}),(0,o.Wm)(s,{title:"linkedin",content:"Modou K Touray",link:"https://www.linkedin.com/in/modou-k-touray-304786162/"})])])])}var le=t(7139);const ge=e=>((0,o.dD)("data-v-68d0334f"),e=e(),(0,o.Cn)(),e),de={class:"find-me-icons-header"},ue=["src","alt"],me=ge((()=>(0,o._)("div",{class:"horizontal-divider"},null,-1)));function pe(e,i,n,a,r,s){return(0,o.wg)(),(0,o.iD)("div",{class:"find-me-icons-main-container",onClick:i[0]||(i[0]=(...e)=>s.openLink&&s.openLink(...e))},[(0,o._)("div",de,[(0,o._)("img",{src:t(3636)(`./${n.title}-white.svg`),alt:n.title},null,8,ue),me,(0,o._)("strong",null,(0,le.zw)(n.title),1)]),(0,o._)("p",null,(0,le.zw)(n.content),1)])}var ve={name:"FindMeIcons",props:{title:{type:String,required:!0},content:{type:String,required:!0},link:{type:String,required:!1}},methods:{openLink(){"email"!==this.title&&window.open(this.link,"_blank","noopener")}}};const he=(0,O.Z)(ve,[["render",pe],["__scopeId","data-v-68d0334f"]]);var fe=he,we={name:"FindMe",components:{FindMeIcons:fe},methods:{imagePopup(){const e=this.$refs.img,i=new y.TimelineLite;i.to(e,{boxShadow:"0px 0px 15px 0px rgba(0,0,0,0.55)",scale:1.1})},imagePopdown(){const e=this.$refs.img,i=new y.TimelineLite;i.to(e,{scale:1})}}};const Ae=(0,O.Z)(we,[["render",ce],["__scopeId","data-v-11a579e1"]]);var ke=Ae;const be=e=>((0,o.dD)("data-v-432f2343"),e=e(),(0,o.Cn)(),e),Me=be((()=>(0,o._)("footer",null,[(0,o._)("h1",null,"MKT"),(0,o._)("div",{class:"vertical-divider"}),(0,o._)("h1",null,"Modou K Touray")],-1))),ye=[Me];function xe(e,i,t,n,a,r){return(0,o.wg)(),(0,o.iD)("div",null,ye)}var Oe={name:"FooterCurve"};const Ie=(0,O.Z)(Oe,[["render",xe],["__scopeId","data-v-432f2343"]]);var Pe=Ie,Ce=t.p+"img/close.eba184c4.svg";function Be(e,i,t,n,a,r){return(0,o.wg)(),(0,o.iD)("nav",null,[(0,o._)("img",{class:"close",src:Ce,onClick:i[0]||(i[0]=i=>e.$emit("close")),alt:"close menu"}),(0,o._)("ul",{onClick:i[3]||(i[3]=i=>e.$emit("close"))},[(0,o._)("li",null,[(0,o._)("a",{onClick:i[1]||(i[1]=e=>r.openURL("me"))},"About Me")]),(0,o._)("li",null,[(0,o._)("a",{onClick:i[2]||(i[2]=e=>r.openURL("find-me"))},"Find Me")])])])}var De={name:"MenuComponent",methods:{openURL(e){document.getElementById(e).scrollIntoView({behavior:"smooth"})}}};const He=(0,O.Z)(De,[["render",Be],["__scopeId","data-v-253cf221"]]);var Ue=He,We={name:"App",components:{Home:D,Menu:Ue,Me:te,FindMe:ke,FooterCurve:Pe},data(){return{showMenu:!1,showImage:!1,previewImageUrl:"",previewImageTitle:""}},methods:{scrollToTop(){document.getElementById("app").scrollIntoView({behavior:"smooth"})},imagePreview(e,i){this.previewImageUrl=e,this.previewImageTitle=i}},metaInfo:{title:"MKT - Portfolio",meta:[{name:"theme-color",content:"#59ff9c"},{name:"description",content:"Portfolio website of Modou K Touray"}]}};const Ke=(0,O.Z)(We,[["render",d]]);var Se=Ke;t(8937);(0,n.ri)(Se).mount("#app")},3636:function(e,i,t){var n={"./behance-white.svg":5558,"./deviantart-white.svg":8233,"./dribbble-white.svg":7151,"./email-white.svg":5150,"./github-white.svg":2023,"./instagram-white.svg":8724,"./linkedin-white.svg":2646,"./medium-white.svg":7412};function o(e){var i=a(e);return t(i)}function a(e){if(!t.o(n,e)){var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=a,e.exports=o,o.id=3636},5558:function(e,i,t){"use strict";e.exports=t.p+"img/behance-white.da5b450e.svg"},8233:function(e,i,t){"use strict";e.exports=t.p+"img/deviantart-white.c9d623ce.svg"},7151:function(e,i,t){"use strict";e.exports=t.p+"img/dribbble-white.8a030ee4.svg"},5150:function(e,i,t){"use strict";e.exports=t.p+"img/email-white.a1a84e0d.svg"},2023:function(e,i,t){"use strict";e.exports=t.p+"img/github-white.1e77ddcf.svg"},8724:function(e,i,t){"use strict";e.exports=t.p+"img/instagram-white.091d426f.svg"},2646:function(e,i,t){"use strict";e.exports=t.p+"img/linkedin-white.003cdbd6.svg"},7412:function(e,i,t){"use strict";e.exports=t.p+"img/medium-white.686ec922.svg"}},i={};function t(n){var o=i[n];if(void 0!==o)return o.exports;var a=i[n]={exports:{}};return e[n].call(a.exports,a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(i,n,o,a){if(!n){var r=1/0;for(g=0;g<e.length;g++){n=e[g][0],o=e[g][1],a=e[g][2];for(var s=!0,c=0;c<n.length;c++)(!1&a||r>=a)&&Object.keys(t.O).every((function(e){return t.O[e](n[c])}))?n.splice(c--,1):(s=!1,a<r&&(r=a));if(s){e.splice(g--,1);var l=o();void 0!==l&&(i=l)}}return i}a=a||0;for(var g=e.length;g>0&&e[g-1][2]>a;g--)e[g]=e[g-1];e[g]=[n,o,a]}}(),function(){t.n=function(e){var i=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(i,{a:i}),i}}(),function(){t.d=function(e,i){for(var n in i)t.o(i,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:i[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/portfolio/"}(),function(){var e={143:0};t.O.j=function(i){return 0===e[i]};var i=function(i,n){var o,a,r=n[0],s=n[1],c=n[2],l=0;if(r.some((function(i){return 0!==e[i]}))){for(o in s)t.o(s,o)&&(t.m[o]=s[o]);if(c)var g=c(t)}for(i&&i(n);l<r.length;l++)a=r[l],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(g)},n=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];n.forEach(i.bind(null,0)),n.push=i.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(2039)}));n=t.O(n)})();
//# sourceMappingURL=app.cf890bee.js.map