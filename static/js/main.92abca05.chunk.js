(this.webpackJsonpnetflix_app=this.webpackJsonpnetflix_app||[]).push([[0],{45:function(e,t,a){e.exports=a.p+"static/media/netflix_logo.dd14e5ae.png"},48:function(e,t,a){e.exports=a(84)},53:function(e,t,a){},55:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(41),i=a.n(c),o=a(4),l=a(2),s=a(15);a(53);var m=function(e){return console.log(e),r.a.createElement("div",{className:"about__container"},r.a.createElement("span",null,"\uc900\ube44\uc911\uc785\ub2c8\ub2e4..."),r.a.createElement("span",null,"- Kichan Yoon -"))},u=a(16),p=a.n(u),d=a(20),v=a(21),g=a(22),_=a(25),f=a(23),E=a(47),b=a(31),h=(a(55),a(5)),w=a(7);var x=function(e){var t=e.id,a=e.title,n=e._date,c=e.overview,i=e.poster,l=e.backdrop,s=e.vote,m=n.split("-");return r.a.createElement("div",{className:"movie"},r.a.createElement(o.b,{to:{pathname:"/movie-detail",state:{id:t,title:a,date:m,overview:c,poster:i,backdrop:l,vote:s}}},"https://image.tmdb.org/t/p/w500null"!==i?r.a.createElement("div",{className:"movie__poster",style:{backgroundImage:"url(".concat(i,")")}}):null,r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},a),r.a.createElement("div",{className:"movie__year"},m[0]),r.a.createElement("div",{className:"movie__vote"},r.a.createElement(h.a,{icon:w.e,className:"movie__star"}),s))))};a(62);var y=function(e){var t=e.id,a=e.title,n=e._date,c=e.overview,i=e.poster,l=e.backdrop,s=e.vote,m=n.split("-");return r.a.createElement("div",{className:"panel__container"},"https://image.tmdb.org/t/p/w500null"!==l?r.a.createElement("div",{className:"panel__backdrop",style:{backgroundImage:"url(".concat(l,")")}}):null,r.a.createElement("div",{className:"panel__content"},"https://image.tmdb.org/t/p/w500null"!==i?r.a.createElement("div",{className:"panel__poster",style:{backgroundImage:"url(".concat(i,")")}}):null,r.a.createElement("div",{className:"panel__data"},r.a.createElement("div",{className:"panel__title"},a.slice(0,40)),r.a.createElement("div",{className:"panel__vote"},r.a.createElement(h.a,{icon:w.e,className:"panel__star"}),r.a.createElement("span",null," ",s," / 10")),r.a.createElement("div",{className:"panel__overview"},c.slice(0,50),"..."),r.a.createElement(o.b,{to:{pathname:"/movie-detail",state:{id:t,title:a,date:m,overview:c,poster:i,backdrop:l,vote:s}}},r.a.createElement("div",{className:"panel__button"},"View Detail")))))},k=a(12),N=a(13);function j(){var e=Object(k.a)(["\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 100px);\n  grid-gap: 35px;\n  padding-top: 20px;\n  padding-right: 80px;\n  margin-bottom: 40px;\n  margin-left: 5px;\n  width: 100%;\n\n  @media screen and (max-width: 768px) {\n    display: inline-flex;\n    grid-gap: 0;\n    padding-left: 5px;\n    margin-bottom: 20px;\n    margin-left: 0;\n    white-space: nowrap;\n    overflow-x: auto;\n    -ms-overflow-style: none; /* IE and Edge */\n    scrollbar-width: none; /* Firefox */\n    &::-webkit-scrollbar {\n      display: none; /* Chrome, Safari, Opera*/\n    }\n  }\n"]);return j=function(){return e},e}function O(){var e=Object(k.a)(["\n  font-size: 16px;\n  letter-spacing: 2px;\n  padding-bottom: 5px;\n  margin: 25px;\n  font-weight: 600;\n  color: white;\n  border-bottom: 1px solid grey;\n"]);return O=function(){return e},e}function C(){var e=Object(k.a)(["\n  display: block;\n  margin-top: 25px;\n  width: 100%;\n"]);return C=function(){return e},e}var I=N.a.div(C()),R=N.a.span(O()),z=N.a.div(j()),K=function(e){var t=e.title,a=e.children;return r.a.createElement(I,null,r.a.createElement(R,null,t),r.a.createElement(z,null,a))};a(63);var P=function(){return r.a.createElement("div",{className:"nav__bottom"},r.a.createElement("div",{className:"nav__bottom__content"},r.a.createElement(o.b,{to:"/"},r.a.createElement(h.a,{icon:w.c,className:"nav__icon"}))),r.a.createElement("div",{className:"nav__bottom__content"},r.a.createElement(o.b,{to:"/about"},r.a.createElement(h.a,{icon:w.f,className:"nav__icon"}))),r.a.createElement("div",{className:"nav__bottom__content"},r.a.createElement(o.b,{to:"/about"},r.a.createElement(h.a,{icon:w.d,className:"nav__icon"}))))};function S(){var e=Object(k.a)(["\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 300;\n  color: white;\n"]);return S=function(){return e},e}var D=N.a.div(S()),L=function(){return r.a.createElement(D,null,r.a.createElement(h.a,{icon:w.b,size:"3x",spin:!0}))},A=a(11),B=a.n(A),J="https://api.themoviedb.org/3",M="aef59e66e0a35709a7f0c493826379b3",T=function(){return B.a.get("".concat(J,"/movie/now_playing?api_key=").concat(M,"&language=ko-KR"))},F=function(){return B.a.get("".concat(J,"/movie/now_playing?api_key=").concat(M))},U=function(){return B.a.get("".concat(J,"/movie/upcoming?api_key=").concat(M,"&language=ko-KR"))},V=function(){return B.a.get("".concat(J,"/movie/upcoming?api_key=").concat(M))},X=function(){return B.a.get("".concat(J,"/movie/popular?api_key=").concat(M,"&language=ko-KR"))},Y=function(){return B.a.get("".concat(J,"/movie/popular?api_key=").concat(M))},q=function(e){return B.a.get("".concat(J,"/movie/").concat(e,"?api_key=").concat(M,"&language=ko-KR"))},G=function(e){return B.a.get("".concat(J,"/movie/").concat(e,"/videos?api_key=").concat(M,"&append_to_response=videos"))},H=(a(80),[new b.b,new b.a(2600,"NEXT")]),Q="https://image.tmdb.org/t/p/w500";function W(e){return e.map((function(e){return r.a.createElement(x,{key:e.id,id:e.id,title:e.title,_date:e.release_date,overview:e.overview,poster:Q+e.poster_path,backdrop:Q+e.backdrop_path,vote:e.vote_average})}))}function Z(e,t){for(var a=0;a<e.length;a++)e[a].overview.length<10&&(e[a].overview=t[a].overview)}var $=function(e){Object(_.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,nowPlaying:[],topRated:[],upComing:[]},e}return Object(g.a)(a,[{key:"componentDidMount",value:function(){var e=Object(d.a)(p.a.mark((function e(){var t,a,n,r,c,i,o,l,s,m,u,d;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:return t=e.sent,a=t.data.results,e.next=6,F();case 6:return n=e.sent,r=n.data.results,Z(a,r),e.next=11,X();case 11:return c=e.sent,i=c.data.results,e.next=15,Y();case 15:return o=e.sent,l=o.data.results,Z(i,l),e.next=20,U();case 20:return s=e.sent,m=s.data.results,e.next=24,V();case 24:u=e.sent,d=u.data.results,Z(m,d),this.setState({nowPlaying:a,topRated:i,upComing:m,isLoading:!1});case 28:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.nowPlaying,n=e.topRated,c=e.upComing;return t?r.a.createElement(L,null):r.a.createElement(s.b.div,{className:"container",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},a&&a.length>0&&r.a.createElement(E.a,{className:"flicking",circular:!0,zIndex:0,duration:400,collectStatistics:!1,plugins:H},a.map((function(e){return r.a.createElement(y,{key:e.id,id:e.id,title:e.title,_date:e.release_date,overview:e.overview,poster:Q+e.poster_path,backdrop:Q+e.backdrop_path,vote:e.vote_average})}))),a&&a.length>0&&r.a.createElement(K,{title:"Now Playing"},W(a)),n&&n.length>0&&r.a.createElement(K,{title:"Top Rated"},W(n)),c&&c.length>0&&r.a.createElement(K,{title:"UpComing"},W(c)),r.a.createElement(P,null))}}]),a}(r.a.Component),ee=(a(81),a(45)),te=a.n(ee);var ae=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"nav__top"},r.a.createElement(o.b,{to:"/"},r.a.createElement("div",{className:"nav__top__logo"},r.a.createElement("img",{src:te.a,alt:"logo",className:"nav__top__logo"})))))},ne=a(46);function re(){var e=Object(k.a)(["\n  width: 100%;\n  display: block;\n  font-size: 15px;\n  text-decoration: none;\n  letter-spacing: 2px;\n  // margin-left: 10px;\n  color: white;\n  margin-top: 5px;\n  margin-bottom: 7px;\n  @media screen and (max-width: 768px) {\n    font-size: 13px;\n  }\n"]);return re=function(){return e},e}function ce(){var e=Object(k.a)(["\n  font-size: 15px;\n  letter-spacing: 2px;\n  padding-bottom: 2px;\n  margin-top: 25px;\n  margin-left: -4px;\n  text-align: left;\n  font-weight: 600;\n  color: white;\n  border-bottom: 1px solid grey;\n  @media screen and (max-width: 768px) {\n    font-size: 13px;\n  }\n"]);return ce=function(){return e},e}function ie(){var e=Object(k.a)(["\n  display: block;\n  margin-top: 25px;\n  padding: 0;\n  width: 100%;\n"]);return ie=function(){return e},e}var oe=N.a.div(ie()),le=N.a.span(ce()),se=N.a.div(re()),me=function(e){var t=e.title,a=e.children;return r.a.createElement(oe,null,r.a.createElement(le,null,t),r.a.createElement(se,null,a))},ue=(a(82),{in:{opacity:1,y:0},out:{opacity:0,y:"10vh"}}),pe=function(e){Object(_.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={genres:[],runtime:null,results:[]},e}return Object(g.a)(a,[{key:"componentDidMount",value:function(){var e=Object(d.a)(p.a.mark((function e(){var t,a,n,r,c,i,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void 0===(t=this.props.location).state&&(document.location.href="/"),e.next=4,q(t.state.id);case 4:return a=e.sent,n=a.data,r=n.genres,c=n.runtime,e.next=10,G(t.state.id);case 10:i=e.sent,o=i.data.results,console.log(o),this.setState({genres:r,runtime:c,results:o});case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,t=e.location,a=e.history,n=this.state,c=n.genres,i=n.runtime,l=n.results;if(t.state){for(var m=t.state.overview.split(". "),u=0;u<m.length-1;u++)m[u]+=".";return r.a.createElement(s.b.div,{initial:"out",animate:"in",exit:"out",variants:ue},r.a.createElement("div",{className:"detail"},r.a.createElement(o.b,{to:"",onClick:function(){a.goBack()}},r.a.createElement("div",{className:"nav__container"},r.a.createElement(h.a,{icon:w.a,className:"nav__backbtn"}))),"https://image.tmdb.org/t/p/w500null"!==t.state.backdrop?r.a.createElement("div",{className:"detail__backdrop",style:{backgroundImage:"url(".concat(t.state.backdrop,")")}}):null,r.a.createElement("br",null),r.a.createElement("div",{className:"detail__container"},"https://image.tmdb.org/t/p/w500null"!==t.state.poster?r.a.createElement("div",{className:"detail__poster",style:{backgroundImage:"url(".concat(t.state.poster,")")}}):null,r.a.createElement("div",{className:"detail__info"},r.a.createElement("div",{className:"detail__title"},t.state.title),r.a.createElement("div",{className:"detail__title star"},r.a.createElement(h.a,{icon:w.e,className:"panel__star"}),r.a.createElement("span",null," ",t.state.vote," / 10")),r.a.createElement("div",{className:"detail__description"},r.a.createElement(me,{title:"\uac1c\ubd09"},"".concat(t.state.date[0],". ").concat(t.state.date[1],". ").concat(t.state.date[2],".")),r.a.createElement(me,{title:"\uc7a5\ub974"},c.map((function(e){return"".concat(e.name," ")}))),r.a.createElement(me,{title:"\uc2dc\uac04"},i,"\ubd84"),r.a.createElement(me,{title:"\uc904\uac70\ub9ac"},m.map((function(e){return r.a.createElement("p",null,e)}))),r.a.createElement(me,{title:"\ucd94\ucc9c \uc601\uc0c1"},l.map((function(e){return r.a.createElement("a",{href:"https://www.youtube.com/watch?v=".concat(e.key)},r.a.createElement(h.a,{icon:ne.a,className:"youtube"})," ",r.a.createElement("a",{class:"detail__videoName"},e.name))}))))))))}return null}}]),a}(r.a.Component);a(83);var de=function(){return r.a.createElement(o.a,null,r.a.createElement(ae,null),r.a.createElement(s.a,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:$}),r.a.createElement(l.a,{path:"/about",component:m}),r.a.createElement(l.a,{path:"/movie-detail",component:pe}))))};i.a.render(r.a.createElement(de,null),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.92abca05.chunk.js.map