(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2167:function(e,n,t){"use strict";var r=t(3848);n.default=void 0;var a,i=(a=t(7294))&&a.__esModule?a:{default:a},o=t(1063),s=t(4651),c=t(7426);var l={};function u(e,n,t,r){if(e&&o.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(a?"%"+a:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,a=s.useRouter(),f=i.default.useMemo((function(){var n=o.resolveHref(a,e.href,!0),t=r(n,2),i=t[0],s=t[1];return{href:i,as:e.as?o.resolveHref(a,e.as):s||i}}),[a,e.href,e.as]),d=f.href,m=f.as,p=e.children,h=e.replace,v=e.shallow,g=e.scroll,x=e.locale;"string"===typeof p&&(p=i.default.createElement("a",null,p));var k=(n=i.default.Children.only(p))&&"object"===typeof n&&n.ref,w=c.useIntersection({rootMargin:"200px"}),b=r(w,2),j=b[0],y=b[1],N=i.default.useCallback((function(e){j(e),k&&("function"===typeof k?k(e):"object"===typeof k&&(k.current=e))}),[k,j]);i.default.useEffect((function(){var e=y&&t&&o.isLocalURL(d),n="undefined"!==typeof x?x:a&&a.locale,r=l[d+"%"+m+(n?"%"+n:"")];e&&!r&&u(a,d,m,{locale:n})}),[m,d,y,x,t,a]);var _={ref:N,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,a,i,s,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(t))&&(e.preventDefault(),null==s&&r.indexOf("#")>=0&&(s=!1),n[a?"replace":"push"](t,r,{shallow:i,locale:c,scroll:s}))}(e,a,d,m,h,v,g,x)},onMouseEnter:function(e){o.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),u(a,d,m,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var E="undefined"!==typeof x?x:a&&a.locale,L=a&&a.isLocaleDomain&&o.getDomainLocale(m,E,a&&a.locales,a&&a.domainLocales);_.href=L||o.addBasePath(o.addLocale(m,E,a&&a.defaultLocale))}return i.default.cloneElement(n,_)};n.default=f},7426:function(e,n,t){"use strict";var r=t(3848);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!o,c=a.useRef(),l=a.useState(!1),u=r(l,2),f=u[0],d=u[1],m=a.useCallback((function(e){c.current&&(c.current(),c.current=void 0),t||f||e&&e.tagName&&(c.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=s.get(n);if(t)return t;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return s.set(n,t={id:n,observer:a,elements:r}),t}(t),a=r.id,i=r.observer,o=r.elements;return o.set(e,n),i.observe(e),function(){o.delete(e),i.unobserve(e),0===o.size&&(i.disconnect(),s.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return a.useEffect((function(){if(!o&&!f){var e=i.requestIdleCallback((function(){return d(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[f]),[m,f]};var a=t(7294),i=t(3447),o="undefined"!==typeof IntersectionObserver;var s=new Map},3270:function(e,n,t){"use strict";t.d(n,{m:function(){return i}});var r=t(5893),a=function(e){var n=e.link,t=e.name,a=e.imageName;return(0,r.jsx)("a",{href:n,target:"_blank",rel:"noreferrer noopener",children:(0,r.jsx)("img",{src:a,alt:t,className:"max-h-6 max-w-6 my-10 mx-7 opacity-25 transition duration-500 ease-out transform hover:translate-x-3 hover:opacity-100"})})},i=function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"",children:[(0,r.jsx)(a,{imageName:"./images/GitHub.png",link:"https://github.com/okgwknt",name:"Github"}),(0,r.jsx)(a,{imageName:"./images/Instgram.png",link:"https://www.instagram.com/okgwknt_/",name:"Instgram"}),(0,r.jsx)(a,{imageName:"./images/Twitter.png",link:"https://twitter.com/okgwknt",name:"Twitter"}),(0,r.jsx)(a,{imageName:"./images/Facebook.png",link:"https://www.facebook.com/profile.php?id=100054552007076",name:"Facebook"}),(0,r.jsx)(a,{imageName:"./images/LinkedIn.png",link:"https://www.linkedin.com/in/okgwknt",name:"LinkedIn"})]})})}},7819:function(e,n,t){"use strict";t.d(n,{h:function(){return o}});var r=t(5893),a=t(1664),i=function(e){var n=e.title,t=e.link;return(0,r.jsx)("div",{className:"mt-4",children:(0,r.jsx)("div",{className:"text-xl text-gray-400 mr-8 ",children:(0,r.jsx)(a.default,{href:t,children:n})})})},o=function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"fixed bg-white w-full flex justify-end ",children:[(0,r.jsx)(i,{title:"Home",link:"./"}),(0,r.jsx)(i,{title:"Profile",link:"./profile"}),(0,r.jsx)(i,{title:"Product",link:"./product"})]})})}},6839:function(e,n,t){"use strict";t.r(n);var r=t(5893),a=t(3270),i=t(7819);n.default=function(){return(0,r.jsx)("div",{children:(0,r.jsxs)("div",{className:"h-screen",children:[(0,r.jsx)(i.h,{}),(0,r.jsx)("div",{className:"fixed bottom-1",children:(0,r.jsx)(a.m,{})}),(0,r.jsx)("div",{className:"h-full w-4/5 mx-auto text-center table",children:(0,r.jsx)("h1",{className:" table-cell align-middle text-2xl",children:"OKUGAWA KANTA PORTFOLIO SITE beta"})})]})})}},5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6839)}])},1664:function(e,n,t){e.exports=t(2167)}},function(e){e.O(0,[774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);