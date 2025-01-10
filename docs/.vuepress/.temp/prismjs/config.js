import "/home/isaac/GitHub/docs.ncatbot.xyz/node_modules/@vuepress/highlighter-helper/lib/client/styles/base.css"
import "/home/isaac/GitHub/docs.ncatbot.xyz/node_modules/@vuepress/plugin-prismjs/lib/client/styles/nord.css"
import "/home/isaac/GitHub/docs.ncatbot.xyz/node_modules/@vuepress/highlighter-helper/lib/client/styles/line-numbers.css"
import "/home/isaac/GitHub/docs.ncatbot.xyz/node_modules/@vuepress/highlighter-helper/lib/client/styles/notation-highlight.css"
import "/home/isaac/GitHub/docs.ncatbot.xyz/node_modules/@vuepress/highlighter-helper/lib/client/styles/collapsed-lines.css"
import { setupCollapsedLines } from "/home/isaac/GitHub/docs.ncatbot.xyz/node_modules/@vuepress/highlighter-helper/lib/client/index.js"

export default {
  setup() {
    setupCollapsedLines()
  }
}
