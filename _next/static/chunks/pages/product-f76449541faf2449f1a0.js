(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[345],{2167:function(e,t,n){"use strict";var r=n(3848);t.default=void 0;var a,i=(a=n(7294))&&a.__esModule?a:{default:a},o=n(1063),s=n(4651),c=n(7426);var l={};function u(e,t,n,r){if(e&&o.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(a?"%"+a:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,a=s.useRouter(),f=i.default.useMemo((function(){var t=o.resolveHref(a,e.href,!0),n=r(t,2),i=n[0],s=n[1];return{href:i,as:e.as?o.resolveHref(a,e.as):s||i}}),[a,e.href,e.as]),d=f.href,m=f.as,p=e.children,v=e.replace,h=e.shallow,g=e.scroll,x=e.locale;"string"===typeof p&&(p=i.default.createElement("a",null,p));var k=(t=i.default.Children.only(p))&&"object"===typeof t&&t.ref,w=c.useIntersection({rootMargin:"200px"}),j=r(w,2),b=j[0],y=j[1],N=i.default.useCallback((function(e){b(e),k&&("function"===typeof k?k(e):"object"===typeof k&&(k.current=e))}),[k,b]);i.default.useEffect((function(){var e=y&&n&&o.isLocalURL(d),t="undefined"!==typeof x?x:a&&a.locale,r=l[d+"%"+m+(t?"%"+t:"")];e&&!r&&u(a,d,m,{locale:t})}),[m,d,y,x,n,a]);var _={ref:N,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,i,s,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(n))&&(e.preventDefault(),null==s&&r.indexOf("#")>=0&&(s=!1),t[a?"replace":"push"](n,r,{shallow:i,locale:c,scroll:s}))}(e,a,d,m,v,h,g,x)},onMouseEnter:function(e){o.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(a,d,m,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof x?x:a&&a.locale,L=a&&a.isLocaleDomain&&o.getDomainLocale(m,E,a&&a.locales,a&&a.domainLocales);_.href=L||o.addBasePath(o.addLocale(m,E,a&&a.defaultLocale))}return i.default.cloneElement(t,_)};t.default=f},7426:function(e,t,n){"use strict";var r=n(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!o,c=a.useRef(),l=a.useState(!1),u=r(l,2),f=u[0],d=u[1],m=a.useCallback((function(e){c.current&&(c.current(),c.current=void 0),n||f||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,i=r.observer,o=r.elements;return o.set(e,t),i.observe(e),function(){o.delete(e),i.unobserve(e),0===o.size&&(i.disconnect(),s.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return a.useEffect((function(){if(!o&&!f){var e=i.requestIdleCallback((function(){return d(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[f]),[m,f]};var a=n(7294),i=n(3447),o="undefined"!==typeof IntersectionObserver;var s=new Map},3270:function(e,t,n){"use strict";n.d(t,{m:function(){return i}});var r=n(5893),a=function(e){var t=e.link,n=e.name,a=e.imageName;return(0,r.jsx)("a",{href:t,target:"_blank",rel:"noreferrer noopener",children:(0,r.jsx)("img",{src:a,alt:n,className:"max-h-6 max-w-6 my-10 mx-7 opacity-25 transition duration-500 ease-out transform hover:translate-x-3 hover:opacity-100"})})},i=function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"",children:[(0,r.jsx)(a,{imageName:"./images/GitHub.png",link:"https://github.com/okgwknt",name:"Github"}),(0,r.jsx)(a,{imageName:"./images/Instgram.png",link:"https://www.instagram.com/okgwknt_/",name:"Instgram"}),(0,r.jsx)(a,{imageName:"./images/Twitter.png",link:"https://twitter.com/okgwknt",name:"Twitter"}),(0,r.jsx)(a,{imageName:"./images/Facebook.png",link:"https://www.facebook.com/profile.php?id=100054552007076",name:"Facebook"}),(0,r.jsx)(a,{imageName:"./images/LinkedIn.png",link:"https://www.linkedin.com/in/okgwknt",name:"LinkedIn"})]})})}},7819:function(e,t,n){"use strict";n.d(t,{h:function(){return o}});var r=n(5893),a=n(1664),i=function(e){var t=e.title,n=e.link;return(0,r.jsx)("div",{className:"mt-4",children:(0,r.jsx)("div",{className:"text-xl text-gray-400 mr-8 ",children:(0,r.jsx)(a.default,{href:n,children:t})})})},o=function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"fixed bg-white w-full flex justify-end ",children:[(0,r.jsx)(i,{title:"Home",link:"./"}),(0,r.jsx)(i,{title:"Profile",link:"./profile"}),(0,r.jsx)(i,{title:"Product",link:"./product"})]})})}},2712:function(e,t,n){"use strict";n.d(t,{V:function(){return a}});var r=n(5893),a=function(e){var t=e.title;return(0,r.jsx)("h1",{className:"mb-8 text-5xl text-gray-600",children:t})}},8752:function(e,t,n){"use strict";n.r(t);var r=n(5893),a=n(3270),i=n(7819),o=n(2712);t.default=function(){return(0,r.jsxs)("div",{children:[(0,r.jsx)(i.h,{}),(0,r.jsx)("div",{className:"fixed bottom-1",children:(0,r.jsx)(a.m,{})}),(0,r.jsx)("main",{className:"pt-20 w-4/5 mx-auto",children:(0,r.jsx)("div",{className:"pl-5",children:(0,r.jsx)(o.V,{title:"Product"})})})]})}},4548:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product",function(){return n(8752)}])},1664:function(e,t,n){e.exports=n(2167)}},function(e){e.O(0,[774,888,179],(function(){return t=4548,e(e.s=t);var t}));var t=e.O();_N_E=t}]);