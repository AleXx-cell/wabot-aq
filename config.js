global.owner = ['18183333333'] // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://invalidentry¡!.li',
  xteam: 'https://invalidentry.li'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://invalidentry.li': 'd90a9e986e18778b'
}
global.packname = 'I hope you\'re fine'
global.author = 'AleXx'



let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
