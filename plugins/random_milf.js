// wahai para para weaboo🗿
let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  conn.reply(m.chat, wait, m)
  conn.sendFile(m.chat, global.API('adiisus', '/api/randomimage/milf'), 'milf.jpg', '*MILF*', m)
}
handler.help = ['milf']
handler.tags = ['random']
handler.command = /^(milf)$/i
handler.limit = true
module.exports = handler
