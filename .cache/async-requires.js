// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-js": () => import("/Users/yash/Desktop/Coding/Portfolio/src/templates/blog.js" /* webpackChunkName: "component---src-templates-blog-js" */),
  "component---cache-dev-404-page-js": () => import("/Users/yash/Desktop/Coding/Portfolio/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-about-js": () => import("/Users/yash/Desktop/Coding/Portfolio/src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-blog-js": () => import("/Users/yash/Desktop/Coding/Portfolio/src/pages/blog.js" /* webpackChunkName: "component---src-pages-blog-js" */),
  "component---src-pages-contact-js": () => import("/Users/yash/Desktop/Coding/Portfolio/src/pages/contact.js" /* webpackChunkName: "component---src-pages-contact-js" */),
  "component---src-pages-index-js": () => import("/Users/yash/Desktop/Coding/Portfolio/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/yash/Desktop/Coding/Portfolio/.cache/data.json")

