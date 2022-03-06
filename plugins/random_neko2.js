let fetch = require("node-fetch")
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn}) => {
  try {
  let res = await fetch('https://neko-love.xyz/api/v1/neko')
  conn.reply(m.chat, wait, m)
  let json = await res.json()
  let { 
url
} = json
conn.sendFile(m.chat, url, '', '*NEKO*', m)
 } catch (e) {
  }
}
handler.help = ['neko2']
handler.tags = ['random']
handler.command = /^(neko2)$/i
handler.register = true

module.exports = handler
