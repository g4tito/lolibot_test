let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/sfw/neko')
  conn.reply(m.chat, wait, m)
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Lo siento ocurrio un error!'
  conn.sendFile(m.chat, json.url, '', '*NEKO*', m)
}
handler.help = ['neko']
handler.tags = ['random']
handler.command = /^neko$/i

module.exports = handler
