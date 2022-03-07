let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/sfw/megumin')
  conn.reply(m.chat, wait, m)
  if (!res.ok) throw await `${res.status} ${res.statusText}`
  let json = await res.json()
  if (!json.url) throw 'Lo siento ocurrio un error!'
  conn.sendFile(m.chat, json.url, '', '*MEGUMIN*', m )
}
handler.help = ['megumin']
handler.tags = ['random']
handler.command = /^(megumin)$/i

module.exports = handler
