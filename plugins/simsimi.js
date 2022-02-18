let { Presence } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')

let handler  = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `*Ejemplo de uso:* ${usedPrefix + command} hola simi`
	fetch("https://api-sv2.simsimi.net/v2/?text=" + encodeURIComponent(text) + "&lc=es")
  .then(res => res.json())
  .then(batch => {
    conn.updatePresence(m.chat, Presence.composing)
  conn.reply(m.chat, `${batch.success}`, m)
  }) .catch(() => { conn.reply(m.chat, `Lo siento ocurrió un error :(`, m) })
}
handler.help = ['simi'].map(v => v + ' <texto>')
handler.tags = ['fun']
handler.command = /^((sim)?simi|simih)$/i

module.exports = handler