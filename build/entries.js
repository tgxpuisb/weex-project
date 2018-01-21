const path = require('path')
const glob = require('glob')

module.exports = function getEntries (globPath) {
    let cutPath = globPath.replace(/\*[\s\S]+$/, '')
    return glob.sync(globPath).reduce((pre, cur) => {
        let pathName = path.dirname(cur).replace(new RegExp('^' + cutPath), '')
        pre[pathName] = cur
        return pre
    }, {})
}