"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[217],{217:function(n,t,e){e.r(t),e.d(t,{default:function(){return f}});var r=e(885),c=e(791),i=e(871),o=e(184),u=function(n){var t=n.reviews;return(0,o.jsx)("div",{children:t.length>0?(0,o.jsx)("ul",{children:t.map((function(n){var t=n.id,e=n.author,r=n.content;return(0,o.jsxs)("li",{children:[(0,o.jsxs)("h2",{children:["Auuthor: ",e]}),(0,o.jsx)("p",{children:r})]},t)}))}):(0,o.jsx)("p",{children:"Sorry we don't have any information about this"})})},a=e(90),f=function(){var n=(0,c.useState)([]),t=(0,r.Z)(n,2),e=t[0],f=t[1],h=(0,i.UO)().id;return(0,c.useEffect)((function(){(0,a.Xn)(h).then(f)}),[h]),(0,o.jsx)(u,{reviews:e})}},90:function(n,t,e){e.d(t,{KL:function(){return f},Me:function(){return u},T:function(){return o},Xn:function(){return a},_k:function(){return i}});var r="https://api.themoviedb.org/3/",c="407c6c5ac7b97eafb7da884568d7dfc2",i=function(){return fetch("".concat(r,"trending/movie/day?api_key=").concat(c)).then((function(n){return n.json()})).then((function(n){return n.results.map((function(n){return{id:n.id,title:n.title}}))}))},o=function(n){return fetch("".concat(r,"movie/").concat(n,"?api_key=").concat(c)).then((function(n){return n.json()})).then((function(n){return{title:n.title,popularity:n.popularity,overview:n.overview,genres:n.genres.flatMap((function(n){return n.name})).join(", "),poster_path:n.poster_path}}))},u=function(n){return fetch("".concat(r,"movie/").concat(n,"/credits?api_key=").concat(c)).then((function(n){return n.json()})).then((function(n){return n.cast.map((function(n){return{id:n.id,name:n.name,character:n.character,profile_path:n.profile_path?n.profile_path:""}}))}))},a=function(n){return fetch("".concat(r,"movie/").concat(n,"/reviews?api_key=").concat(c)).then((function(n){return n.json()})).then((function(n){return n.results.map((function(n){return{id:n.id,author:n.author,content:n.content}}))}))},f=function(n){return fetch("".concat(r,"search/movie?api_key=").concat(c,"&query=").concat(n)).then((function(n){return n.json()})).then((function(n){return n.results.map((function(n){return{id:n.id,title:n.title}}))}))}}}]);
//# sourceMappingURL=217.c6a20b33.chunk.js.map