let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  conn.reply(m.chat, wait, m) 
  let res = await fetch('https://api.waifu.pics/sfw/waifu')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Lo siento ocurrio un error'
  conn.sendFile(m.chat, json.url, '', '*WAIFU*', m)
}
handler.help = ['waifu']
handler.tags = ['random']
handler.command = /^(waifu)$/i

module.exports = handler
