const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-posts-js": hot(preferDefault(require("C:\\Users\\BJameson\\Desktop\\Classprojects\\portfolio\\src\\templates\\blog-posts.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("C:\\Users\\BJameson\\Desktop\\Classprojects\\portfolio\\.cache\\dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("C:\\Users\\BJameson\\Desktop\\Classprojects\\portfolio\\src\\Pages\\About.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("C:\\Users\\BJameson\\Desktop\\Classprojects\\portfolio\\src\\Pages\\Blog.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Users\\BJameson\\Desktop\\Classprojects\\portfolio\\src\\Pages\\index.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("C:\\Users\\BJameson\\Desktop\\Classprojects\\portfolio\\src\\Pages\\Projects.js"))),
  "component---src-pages-resume-js": hot(preferDefault(require("C:\\Users\\BJameson\\Desktop\\Classprojects\\portfolio\\src\\Pages\\Resume.js")))
}

