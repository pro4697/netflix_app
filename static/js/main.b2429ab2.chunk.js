(this.webpackJsonpnetflix_app=this.webpackJsonpnetflix_app||[]).push([[0],{40:function(e,t,a){e.exports=a.p+"static/media/netflix_logo.e9706859.png"},41:function(e,t,a){e.exports=a(74)},46:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){},55:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(35),c=a.n(o),l=(a(46),a(7)),i=a(1);a(47);var s=function(e){return console.log(e),r.a.createElement("div",{className:"about__container"},r.a.createElement("span",null,"\uc900\ube44\uc911\uc785\ub2c8\ub2e4..."),r.a.createElement("span",null,"- \uc724\uae30\ucc2c -"))},m=a(21),u=a.n(m),p=a(36),v=a(13),d=a(14),_=a(16),g=a(15);a(49),a(20);var f=function(e){var t=e.title,a=e._date,n=e.overview,o=e.poster,c=e.backdrop,i=e.vote,s=e.genres,m=a.split("-");return r.a.createElement("div",{className:"movie"},r.a.createElement(l.b,{to:{pathname:"/movie-detail",state:{title:t,date:m,overview:n,poster:o,backdrop:c,vote:i,genres:s}}},r.a.createElement("div",{className:"movie__poster",style:{backgroundImage:"url(".concat(o,")")}}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},t),r.a.createElement("div",{className:"movie__year"},m[0]),r.a.createElement("div",{className:"movie__star"},r.a.createElement("i",{className:"fa fa-star"}),i))))},E=(a(55),a(9)),b=a.n(E),h="https://api.themoviedb.org/3",k="aef59e66e0a35709a7f0c493826379b3",N=function(){return b.a.get("".concat(h,"/movie/now_playing?api_key=").concat(k,"&language=ko-KR"))},y=function(){return b.a.get("".concat(h,"/movie/upcoming?api_key=").concat(k,"&language=ko-KR"))},w=function(){return b.a.get("".concat(h,"/movie/popular?api_key=").concat(k,"&language=ko-KR"))},x=a(17),j=a(18);function O(){var e=Object(x.a)(["\n  width: 100%;\n"]);return O=function(){return e},e}function R(){var e=Object(x.a)(["\n  font-size: 16px;\n  padding-bottom: 5px;\n  margin: 25px;\n  font-weight: 600;\n  color: white;\n  border-bottom: 1px solid grey;\n"]);return R=function(){return e},e}function C(){var e=Object(x.a)(["\n  display: inline-block;\n  width: 100%;\n  overflow: hidden;\n"]);return C=function(){return e},e}var P=j.a.div(C()),I=j.a.span(R()),K=j.a.div(O()),L=function(e){var t=e.title,a=e.children;return r.a.createElement(P,null,r.a.createElement(I,null,t),r.a.createElement(K,null,a))},D="https://image.tmdb.org/t/p/w500",J=function(e){Object(_.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,nowPlaying:[],topRated:[],upComing:[]},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(p.a)(u.a.mark((function e(){var t,a,n,r,o,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:return t=e.sent,a=t.data.results,e.next=6,w();case 6:return n=e.sent,r=n.data.results,e.next=10,y();case 10:o=e.sent,c=o.data.results,console.log({nowPlaying:a}),console.log({topRated:r}),console.log({upComing:c}),this.setState({nowPlaying:a,topRated:r,upComing:c,isLoading:!1});case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.nowPlaying,n=e.topRated,o=e.upComing;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},r.a.createElement("i",{className:"fa fa-spinner fa-spin"}))):r.a.createElement(r.a.Fragment,null,a&&a.length>0&&r.a.createElement(L,{title:"Now Playing"},r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(f,{key:e.id,title:e.title,_date:e.release_date,overview:e.overview,poster:D+e.poster_path,backdrop:D+e.backdrop_path,vote:e.vote_average,genres:e.genre_ids})})))),n&&n.length>0&&r.a.createElement(L,{title:"Top Rated"},r.a.createElement("div",{className:"movies"},n.map((function(e){return r.a.createElement(f,{key:e.id,title:e.title,_date:e.release_date,overview:e.overview,poster:D+e.poster_path,backdrop:D+e.backdrop_path,vote:e.vote_average,genres:e.genre_ids})})))),o&&o.length>0&&r.a.createElement(L,{title:"Up Coming"},r.a.createElement("div",{className:"movies"},o.map((function(e){return r.a.createElement(f,{key:e.id,title:e.title,_date:e.release_date,overview:e.overview,poster:D+e.poster_path,backdrop:D+e.backdrop_path,vote:e.vote_average,genres:e.genre_ids})}))))))}}]),a}(r.a.Component),M=(a(72),a(40)),z=a.n(M);var A=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"nav__top"},r.a.createElement(l.b,{to:"/"},r.a.createElement("div",{className:"nav__top__logo"},r.a.createElement("img",{src:z.a,alt:"logo",className:"nav__top__logo"})))),r.a.createElement("div",{className:"nav__bottom"},r.a.createElement("div",{className:"nav__bottom__content"},r.a.createElement(l.b,{to:"/"},r.a.createElement("i",{className:"fa fa-film"}))),r.a.createElement("div",{className:"nav__bottom__content"},r.a.createElement(l.b,{to:"/about"},r.a.createElement("i",{className:"fa fa-tv"}))),r.a.createElement("div",{className:"nav__bottom__content"},r.a.createElement(l.b,{to:"/about"},r.a.createElement("i",{className:"fa fa-search"})))))},B=(a(73),function(e){Object(_.a)(a,e);var t=Object(g.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?r.a.createElement("div",{className:"detail"},r.a.createElement("div",{className:"detail__backdrop",style:{backgroundImage:"url(".concat(e.state.backdrop,")")}}),r.a.createElement("br",null),r.a.createElement("div",{className:"detail__description"},e.state.title,r.a.createElement("br",null),e.state.overview)):null}}]),a}(r.a.Component));var F=function(){return r.a.createElement(l.a,null,r.a.createElement(A,null),r.a.createElement(i.a,{path:"/",exact:!0,component:J}),r.a.createElement(i.a,{path:"/about",component:s}),r.a.createElement(i.a,{path:"/movie-detail",component:B}))};c.a.render(r.a.createElement(F,null),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.b2429ab2.chunk.js.map