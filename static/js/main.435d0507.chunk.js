(this.webpackJsonpnetflix_app=this.webpackJsonpnetflix_app||[]).push([[0],{45:function(e,t,a){e.exports=a.p+"static/media/netflix_logo.dd14e5ae.png"},47:function(e,t,a){e.exports=a(82)},52:function(e,t,a){},54:function(e,t,a){},61:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(41),l=a.n(r),o=a(5),i=a(2),s=a(13);a(52);var m=function(e){return console.log(e),c.a.createElement("div",{className:"about__container"},c.a.createElement("span",null,"\uc900\ube44\uc911\uc785\ub2c8\ub2e4..."),c.a.createElement("span",null,"- Kichan Yoon -"))},u=a(14),v=a.n(u),p=a(18),d=a(19),_=a(20),E=a(23),g=a(21),f=a(46),b=a(31),N=(a(54),a(10)),h=a(8);var y=function(e){var t=e.id,a=e.title,n=e._date,r=e.overview,l=e.poster,i=e.backdrop,s=e.vote,m=n.split("-");return c.a.createElement("div",{className:"movie"},c.a.createElement(o.b,{to:{pathname:"/movie-detail",state:{id:t,title:a,date:m,overview:r,poster:l,backdrop:i,vote:s}}},c.a.createElement("div",{className:"movie__poster",style:{backgroundImage:"url(".concat(l,")")}}),c.a.createElement("div",{className:"movie__data"},c.a.createElement("h3",{className:"movie__title"},a),c.a.createElement("div",{className:"movie__year"},m[0]),c.a.createElement("div",{className:"movie__vote"},c.a.createElement(N.a,{icon:h.d,className:"movie__star"}),s))))};a(61);var k=function(e){var t=e.id,a=e.title,n=e._date,r=e.overview,l=e.poster,i=e.backdrop,s=e.vote,m=n.split("-");return c.a.createElement("div",{className:"panel__container"},c.a.createElement("div",{className:"panel__backdrop",style:{backgroundImage:"url(".concat(i,")")}}),c.a.createElement("div",{className:"panel__content"},c.a.createElement("div",{className:"panel__poster",style:{backgroundImage:"url(".concat(l,")")}}),c.a.createElement("div",{className:"panel__data"},c.a.createElement("div",{className:"panel__title"},a.slice(0,40)),c.a.createElement("div",{className:"panel__vote"},c.a.createElement(N.a,{icon:h.d,className:"panel__star"}),c.a.createElement("span",null," ",s," / 10")),c.a.createElement("div",{className:"panel__overview"},r.slice(0,50),"..."),c.a.createElement(o.b,{to:{pathname:"/movie-detail",state:{id:t,title:a,date:m,overview:r,poster:l,backdrop:i,vote:s}}},c.a.createElement("div",{className:"panel__button"},"View Detail")))))},w=a(24),x=a(25);function j(){var e=Object(w.a)(["\n  width: 100%;\n"]);return j=function(){return e},e}function O(){var e=Object(w.a)(["\n  font-size: 16px;\n  letter-spacing: 2px;\n  padding-bottom: 5px;\n  margin: 25px;\n  font-weight: 600;\n  color: white;\n  border-bottom: 1px solid grey;\n"]);return O=function(){return e},e}function R(){var e=Object(w.a)(["\n  display: block;\n  margin-top: 25px;\n  width: 100%;\n"]);return R=function(){return e},e}var C=x.a.div(R()),I=x.a.span(O()),K=x.a.div(j()),P=function(e){var t=e.title,a=e.children;return c.a.createElement(C,null,c.a.createElement(I,null,t),c.a.createElement(K,null,a))},D=a(11),L=a.n(D),S="https://api.themoviedb.org/3",z="aef59e66e0a35709a7f0c493826379b3",A=function(){return L.a.get("".concat(S,"/movie/now_playing?api_key=").concat(z,"&language=ko-KR"))},B=function(){return L.a.get("".concat(S,"/movie/now_playing?api_key=").concat(z))},J=function(){return L.a.get("".concat(S,"/movie/upcoming?api_key=").concat(z,"&language=ko-KR"))},M=function(){return L.a.get("".concat(S,"/movie/upcoming?api_key=").concat(z))},T=function(){return L.a.get("".concat(S,"/movie/popular?api_key=").concat(z,"&language=ko-KR"))},U=function(){return L.a.get("".concat(S,"/movie/popular?api_key=").concat(z))},V=function(e){return L.a.get("".concat(S,"/movie/").concat(e,"?api_key=").concat(z,"&language=ko-KR"))},X=(a(78),[new b.b,new b.a(2600,"NEXT")]),Y="https://image.tmdb.org/t/p/w500";function q(e){return e.map((function(e){return c.a.createElement(y,{key:e.id,id:e.id,title:e.title,_date:e.release_date,overview:e.overview,poster:Y+e.poster_path,backdrop:Y+e.backdrop_path,vote:e.vote_average})}))}function F(e,t){for(var a=0;a<e.length;a++)e[a].overview.length<10&&(e[a].overview=t[a].overview)}var G=function(e){Object(E.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={isLoading:!0,nowPlaying:[],topRated:[],upComing:[]},e}return Object(_.a)(a,[{key:"componentDidMount",value:function(){var e=Object(p.a)(v.a.mark((function e(){var t,a,n,c,r,l,o,i,s,m,u,p;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:return t=e.sent,a=t.data.results,e.next=6,B();case 6:return n=e.sent,c=n.data.results,F(a,c),e.next=11,T();case 11:return r=e.sent,l=r.data.results,e.next=15,U();case 15:return o=e.sent,i=o.data.results,F(l,i),e.next=20,J();case 20:return s=e.sent,m=s.data.results,e.next=24,M();case 24:u=e.sent,p=u.data.results,F(m,p),this.setState({nowPlaying:a,topRated:l,upComing:m,isLoading:!1});case 28:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.nowPlaying,n=e.topRated,r=e.upComing;e.genres;return t?c.a.createElement("div",{className:"loader"},c.a.createElement("span",{className:"loader__text"},c.a.createElement("i",{className:"fa fa-spinner fa-spin"}))):c.a.createElement(s.b.div,{className:"container",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},a&&a.length>0&&c.a.createElement(f.a,{className:"flicking",circular:!0,zIndex:0,duration:400,collectStatistics:!1,plugins:X},a.map((function(e){return c.a.createElement(k,{key:e.id,id:e.id,title:e.title,_date:e.release_date,overview:e.overview,poster:Y+e.poster_path,backdrop:Y+e.backdrop_path,vote:e.vote_average})}))),a&&a.length>0&&c.a.createElement(P,{title:"Now Playing"},c.a.createElement("div",{className:"movies"},q(a))),n&&n.length>0&&c.a.createElement(P,{title:"Top Rated"},c.a.createElement("div",{className:"movies"},q(n))),r&&r.length>0&&c.a.createElement(P,{title:"UpComing"},c.a.createElement("div",{className:"movies"},q(r))))}}]),a}(c.a.Component),H=(a(79),a(45)),Q=a.n(H);var W=function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"nav__top"},c.a.createElement(o.b,{to:"/"},c.a.createElement("div",{className:"nav__top__logo"},c.a.createElement("img",{src:Q.a,alt:"logo",className:"nav__top__logo"})))),c.a.createElement("div",{className:"nav__bottom"},c.a.createElement("div",{className:"nav__bottom__content"},c.a.createElement(o.b,{to:"/"},c.a.createElement(N.a,{icon:h.b,className:"nav__icon"}))),c.a.createElement("div",{className:"nav__bottom__content"},c.a.createElement(o.b,{to:"/about"},c.a.createElement(N.a,{icon:h.e,className:"nav__icon"}))),c.a.createElement("div",{className:"nav__bottom__content"},c.a.createElement(o.b,{to:"/about"},c.a.createElement(N.a,{icon:h.c,className:"nav__icon"})))))},Z=(a(80),function(e){Object(E.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={genres:[]},e}return Object(_.a)(a,[{key:"componentDidMount",value:function(){var e=Object(p.a)(v.a.mark((function e(){var t,a,n,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,a=t.location,t.history,void 0===a.state&&(document.location.href="/"),e.next=4,V(a.state.id);case 4:n=e.sent,c=n.data.genres,this.setState({genres:c});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,t=e.location,a=e.history,n=this.state.genres;if(t.state){for(var r=t.state.overview.split(". "),l=0;l<r.length-1;l++)r[l]+=".";return c.a.createElement(s.b.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},c.a.createElement("div",{className:"detail"},c.a.createElement(o.b,{to:"",onClick:function(){a.goBack()}},c.a.createElement("div",{className:"nav__container"},c.a.createElement(N.a,{icon:h.a,className:"nav__backbtn"}))),c.a.createElement("div",{className:"detail__backdrop",style:{backgroundImage:"url(".concat(t.state.backdrop,")")}}),c.a.createElement("br",null),c.a.createElement("div",{className:"detail__top-box"},c.a.createElement("div",{className:"detail__poster",style:{backgroundImage:"url(".concat(t.state.poster,")")}}),c.a.createElement("div",{className:"detail__info"},c.a.createElement("div",{className:"detail__title"},t.state.title),c.a.createElement("div",{className:"detail__title star"},c.a.createElement(N.a,{icon:h.d,className:"panel__star"}),c.a.createElement("span",null," ",t.state.vote," / 10")),c.a.createElement("div",{className:"detail__description"},c.a.createElement("div",{className:"detail__title year"},"".concat(t.state.date[0],". ").concat(t.state.date[1],". ").concat(t.state.date[2])),c.a.createElement("div",{className:"detail__title genres"},n.map((function(e){return"".concat(e.name," ")}))),c.a.createElement("div",{className:"detail__overview"},r.map((function(e){return c.a.createElement("p",null,e)})),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null)))))))}return null}}]),a}(c.a.Component));a(81);var $=function(){return c.a.createElement(o.a,null,c.a.createElement(W,null),c.a.createElement(s.a,null,c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/",component:G}),c.a.createElement(i.a,{path:"/about",component:m}),c.a.createElement(i.a,{path:"/movie-detail",component:Z}))))};l.a.render(c.a.createElement($,null),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.435d0507.chunk.js.map