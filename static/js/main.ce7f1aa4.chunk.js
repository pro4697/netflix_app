(this.webpackJsonpnetflix_app=this.webpackJsonpnetflix_app||[]).push([[0],{33:function(e,t,a){e.exports=a.p+"static/media/netflix_logo.e9706859.png"},34:function(e,t,a){e.exports=a(68)},39:function(e,t,a){},40:function(e,t,a){},59:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(31),o=a.n(c),s=(a(39),a(7)),l=a(1);a(40);var i=function(e){return console.log(e),r.a.createElement("div",{className:"about__container"},r.a.createElement("span",null,"\uc900\ube44\uc911\uc785\ub2c8\ub2e4..."),r.a.createElement("span",null,"- \uc724\uae30\ucc2c -"))},m=a(10),u=a.n(m),v=a(17),p=a(11),d=a(12),_=a(14),f=a(13),E=a(18),g=a.n(E);a(59),a(16);var b=function(e){var t=e.title,a=e._date,n=e.overview,c=e.poster,o=e.backdrop,l=e.vote,i=e.genres,m=a.split("-");return r.a.createElement("div",{className:"movie"},r.a.createElement(s.b,{to:{pathname:"/movie-detail",state:{title:t,date:m,overview:n,poster:c,backdrop:o,vote:l,genres:i}}},r.a.createElement("div",{className:"movie__poster",style:{backgroundImage:"url(".concat(c,")")}}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},/[a-zA-Z]/.test(t)?t.length>16?t.slice(0,16)+"...":t.slice(0,16)+"":t.length>7?t.slice(0,7)+"...":t.slice(0,7)+""),r.a.createElement("div",{className:"movie__year"},m[0]),r.a.createElement("div",{className:"movie__star"},r.a.createElement("i",{className:"fa fa-star"}),l))))},h=(a(65),"aef59e66e0a35709a7f0c493826379b3"),N="https://api.themoviedb.org/3",k="https://image.tmdb.org/t/p/w500",y=function(e){Object(_.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,results:[],genres:[]},e.getTopRated=Object(v.a)(u.a.mark((function t(){var a,n,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="".concat(N,"/movie/popular?api_key=").concat(h,"&language=ko-KR"),t.next=3,g.a.get(a);case 3:n=t.sent,r=n.data.results,e.setState({results:r,isLoading:!1}),console.log({results:r});case 7:case"end":return t.stop()}}),t)}))),e.getGenre=Object(v.a)(u.a.mark((function t(){var a,n,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="".concat(N,"/genre/movie/list?api_key=").concat(h,"&language=ko-KR"),t.next=3,g.a.get(a);case 3:n=t.sent,r=n.data.genres,e.setState({genres:r}),console.log({genres:r});case 7:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getTopRated()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.results;e.genres;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},r.a.createElement("i",{className:"fa fa-spinner fa-spin"}))):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(b,{key:e.id,title:e.title,_date:e.release_date,overview:e.overview,poster:k+e.poster_path,backdrop:k+e.backdrop_path,vote:e.vote_average,genres:e.genre_ids})}))))}}]),a}(r.a.Component),w=(a(66),a(33)),x=a.n(w);var j=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"nav__top"},r.a.createElement(s.b,{to:"/"},r.a.createElement("div",{className:"nav__top__logo"},r.a.createElement("img",{src:x.a,alt:"logo",className:"nav__top__logo"})))),r.a.createElement("div",{className:"nav__bottom"},r.a.createElement("div",{className:"nav__bottom__content"},r.a.createElement(s.b,{to:"/"},r.a.createElement("i",{className:"fa fa-film"}))),r.a.createElement("div",{className:"nav__bottom__content"},r.a.createElement(s.b,{to:"/about"},r.a.createElement("i",{className:"fa fa-tv"}))),r.a.createElement("div",{className:"nav__bottom__content"},r.a.createElement(s.b,{to:"/about"},r.a.createElement("i",{className:"fa fa-search"})))))},O=(a(67),function(e){Object(_.a)(a,e);var t=Object(f.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?r.a.createElement("div",{className:"detail"},r.a.createElement("div",{className:"detail__backdrop",style:{backgroundImage:"url(".concat(e.state.backdrop,")")}}),r.a.createElement("br",null),r.a.createElement("div",{className:"detail__description"},e.state.title,r.a.createElement("br",null),e.state.overview)):null}}]),a}(r.a.Component));var R=function(){return r.a.createElement(s.a,null,r.a.createElement(j,null),r.a.createElement(l.a,{path:"/",exact:!0,component:y}),r.a.createElement(l.a,{path:"/about",component:i}),r.a.createElement(l.a,{path:"/movie-detail",component:O}))};o.a.render(r.a.createElement(R,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.ce7f1aa4.chunk.js.map