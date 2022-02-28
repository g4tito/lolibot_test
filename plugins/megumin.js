let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/sfw/megumin')
  if (!res.ok) throw await `${res.status} ${res.statusText}`
  let json = await res.json()
  if (!json.url) throw 'Lo siento ocurrio un error!'
  conn.sendFile(m.chat, json.url, '', '*MEGUMIN*', m, 0, { thumbnail: await (await fetch(json.url)).buffer() })
}
handler.help = ['megumin']
handler.tags = ['random']
handler.command = /^(megumin)$/i

module.exports = handler