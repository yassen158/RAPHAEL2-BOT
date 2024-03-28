import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['201507620437', 'yassen', true],
] //Number of owners

global.mods = ['201507620437','201507620437'] 
global.prems = ['201507620437','201507620437']


global.APIs = { // API Prefix
  fgmods: 'https://api-fgmods.ddns.net'
}

global.APIKeys = { // Apikey : 42x5rO7o \\
  'https://api-fgmods.ddns.net': '42x5rO7o'
}

// Sticker WM
global.ownername = 'yassen'
global.botname = 'كارل بــوت'
global.premium = 'false'
global.packname = 'كارل بــوت'
global.author = 'yassen'


global.wait = '*[■■■■■■■■■□] 90%*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌'
global.xmoji = '🔥'


global.multiplier = 69 
global.maxwarn = '3' // máxima advertencias //

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
