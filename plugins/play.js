let limit = 30
let { MessageType } = require('@adiwajshing/baileys')
let yts = require('yt-search')
const { servers, yta, ytv } = require('../lib/y2mate')
let handler = async (m, { conn, usedPrefix, command, text, isPrems, isOwner, DevMode }) => {
  conn.play = conn.play ? conn.play : {}
  if (m.chat in conn.play) throw 'Todavía hay quienes están buscando en youtube en este chat... esperen a que termine'
  else conn.play[m.chat] = true
  try {
      try {
          if (!text) throw `*Ingrese el nombre de la música*\n\n- Ejemplo : ${usedPrefix + command} beliver`
          conn.reply(m.chat, wait, m) 
          let results = await yts(text)
          let vid = results.all.find(video => video.seconds < 3600)
          if (!vid) throw 'No se encontró edeo/Audio'
          let { dl_link, thumb, title, filesize, filesizeF} = await (/2$/.test(command) ? ytv : yta)(vid.url, 'id4')
          let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
          conn.sendFile(m.chat, thumb, 'thumbnail.jpg', `
*──「 Descarga de Youtube 」──*

• *🎵 Titulo* : ${title}
• *🔊 Tamaño* : ${filesizeF}
• *👾 Link* : ${vid.url}

${isLimit ? 'Pakai ': ''}- Link de descarga : _${dl_link}_
`.trim(), m)
          if (!isLimit) conn.sendFile(m.chat, dl_link, title + '.mp' + (3 + /2$/.test(command)), `
*Video descargado*

• *📽️ Titulo* : ${title}
`.trim(), m)
      } catch (e) {
          console.log(e)
          m.reply('error')
          if (DevMode) {
              for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                  conn.sendMessage(jid, 'Play.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
              }
          }
      }
  } finally {
    delete conn.play[m.chat]
  }
}
handler.help = ['play', 'play2'].map(v => v + ' <titulo>')
handler.tags = ['downloader']
handler.command = /^play2?$/i

handler.exp = 0
handler.limit = false

module.exports = handler

