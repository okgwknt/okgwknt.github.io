(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[277],{2167:function(e,n,t){"use strict";var r=t(3848);n.default=void 0;var i,a=(i=t(7294))&&i.__esModule?i:{default:i},o=t(1063),s=t(4651),c=t(7426);var l={};function u(e,n,t,r){if(e&&o.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(i?"%"+i:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,i=s.useRouter(),f=a.default.useMemo((function(){var n=o.resolveHref(i,e.href,!0),t=r(n,2),a=t[0],s=t[1];return{href:a,as:e.as?o.resolveHref(i,e.as):s||a}}),[i,e.href,e.as]),d=f.href,m=f.as,h=e.children,p=e.replace,x=e.shallow,v=e.scroll,g=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var j=(n=a.default.Children.only(h))&&"object"===typeof n&&n.ref,b=c.useIntersection({rootMargin:"200px"}),k=r(b,2),w=k[0],y=k[1],N=a.default.useCallback((function(e){w(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,w]);a.default.useEffect((function(){var e=y&&t&&o.isLocalURL(d),n="undefined"!==typeof g?g:i&&i.locale,r=l[d+"%"+m+(n?"%"+n:"")];e&&!r&&u(i,d,m,{locale:n})}),[m,d,y,g,t,i]);var E={ref:N,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,i,a,s,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(t))&&(e.preventDefault(),null==s&&r.indexOf("#")>=0&&(s=!1),n[i?"replace":"push"](t,r,{shallow:a,locale:c,scroll:s}))}(e,i,d,m,p,x,v,g)},onMouseEnter:function(e){o.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),u(i,d,m,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var _="undefined"!==typeof g?g:i&&i.locale,I=i&&i.isLocaleDomain&&o.getDomainLocale(m,_,i&&i.locales,i&&i.domainLocales);E.href=I||o.addBasePath(o.addLocale(m,_,i&&i.defaultLocale))}return a.default.cloneElement(n,E)};n.default=f},7426:function(e,n,t){"use strict";var r=t(3848);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!o,c=i.useRef(),l=i.useState(!1),u=r(l,2),f=u[0],d=u[1],m=i.useCallback((function(e){c.current&&(c.current(),c.current=void 0),t||f||e&&e.tagName&&(c.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=s.get(n);if(t)return t;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return s.set(n,t={id:n,observer:i,elements:r}),t}(t),i=r.id,a=r.observer,o=r.elements;return o.set(e,n),a.observe(e),function(){o.delete(e),a.unobserve(e),0===o.size&&(a.disconnect(),s.delete(i))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return i.useEffect((function(){if(!o&&!f){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),[m,f]};var i=t(7294),a=t(3447),o="undefined"!==typeof IntersectionObserver;var s=new Map},3270:function(e,n,t){"use strict";t.d(n,{m:function(){return a}});var r=t(5893),i=function(e){var n=e.link,t=e.name,i=e.imageName;return(0,r.jsx)("a",{href:n,target:"_blank",rel:"noreferrer noopener",children:(0,r.jsx)("img",{src:i,alt:t,className:"max-h-6 max-w-6 my-10 mx-7 opacity-25 transition duration-500 ease-out transform hover:translate-x-3 hover:opacity-100"})})},a=function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"",children:[(0,r.jsx)(i,{imageName:"./images/GitHub.png",link:"https://github.com/okgwknt",name:"Github"}),(0,r.jsx)(i,{imageName:"./images/Instgram.png",link:"https://www.instagram.com/okgwknt_/",name:"Instgram"}),(0,r.jsx)(i,{imageName:"./images/Twitter.png",link:"https://twitter.com/okgwknt",name:"Twitter"}),(0,r.jsx)(i,{imageName:"./images/Facebook.png",link:"https://www.facebook.com/profile.php?id=100054552007076",name:"Facebook"})]})})}},7819:function(e,n,t){"use strict";t.d(n,{h:function(){return o}});var r=t(5893),i=t(1664),a=function(e){var n=e.title,t=e.link;return(0,r.jsx)("div",{className:"mt-4",children:(0,r.jsx)("div",{className:"text-xl text-gray-400 mr-8 ",children:(0,r.jsx)(i.default,{href:t,children:n})})})},o=function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"fixed bg-white w-full flex justify-end ",children:[(0,r.jsx)(a,{title:"Home",link:"./"}),(0,r.jsx)(a,{title:"Profile",link:"./profile"}),(0,r.jsx)(a,{title:"Product",link:"./product"})]})})}},2712:function(e,n,t){"use strict";t.d(n,{V:function(){return i}});var r=t(5893),i=function(e){var n=e.title;return(0,r.jsx)("h1",{className:"mb-8 text-5xl text-gray-600",children:n})}},7693:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}});var r=t(5893),i=t(3270),a=function(e){var n=e.title,t=e.children;return(0,r.jsxs)("section",{className:"mb-6 text-gray-600",children:[(0,r.jsx)("h1",{className:"mb-2  text-3xl ",children:n}),(0,r.jsx)("div",{className:"",children:t})]})},o=function(e){var n=e.children;return(0,r.jsx)("p",{className:"text-xl",children:n})},s=t(7819),c=t(2712),l=function(){return(0,r.jsxs)("div",{children:[(0,r.jsx)(s.h,{}),(0,r.jsx)("div",{className:"fixed bottom-1",children:(0,r.jsx)(i.m,{})}),(0,r.jsx)("main",{className:"pt-20 w-4/5 mx-auto",children:(0,r.jsxs)("div",{className:"pl-5",children:[(0,r.jsx)(c.V,{title:"Profile"}),(0,r.jsx)(a,{title:"Kanta Okugawa",children:(0,r.jsxs)(o,{children:["\u5965\u5ddd\u839e\u591a",(0,r.jsx)("br",{}),"Ritsumeikan University",(0,r.jsx)("br",{}),"Collage of Information Science and Engineering",(0,r.jsx)("br",{}),"Security and Networks Cource",(0,r.jsx)("br",{}),"A junior(Third year)",(0,r.jsx)("br",{}),"Birthday: 2000/12/26, Hometown: Japan, Height: 173cm, Weight: 60kg, Body Temperature: 309.45K"]})}),(0,r.jsx)(a,{title:"History",children:(0,r.jsx)(o,{children:"I was born in Osaka in 2000. "})}),(0,r.jsx)(a,{title:"Skill",children:(0,r.jsx)(o,{children:"C language, Swift, Java, (JavaScript), (Go), Git, GitHub, Network, World Wide Web, Security"})}),(0,r.jsx)(a,{title:"Qualification",children:(0,r.jsxs)(o,{children:["\u666e\u901a\u81ea\u52d5\u8eca\u514d\u8a31",(0,r.jsx)("br",{}),"Fundamental Information Technology Engineer(\u57fa\u672c\u60c5\u5831\u6280\u8853\u8005)",(0,r.jsx)("br",{}),"Applied Information Technology Engineer(\u5fdc\u7528\u60c5\u5831\u6280\u8853\u8005)"]})}),(0,r.jsx)(a,{title:"Favorite",children:(0,r.jsx)(o,{children:"THE BLUE HEARTS / IU / Dramas / Anime / TV show / Movie / Music etc. more"})})]})})]})}},2697:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return t(7693)}])},1664:function(e,n,t){e.exports=t(2167)}},function(e){e.O(0,[774,888,179],(function(){return n=2697,e(e.s=n);var n}));var n=e.O();_N_E=n}]);