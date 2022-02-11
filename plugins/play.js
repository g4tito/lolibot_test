let limit = 30
let { MessageType, 
  WAMessage,
  proto,
  generateWAMessageFromContent
} = require('@adiwajshing/baileys')
let yts = require('yt-search')
const { servers, yta, ytv } = require('../lib/y2mate')
let handler = async (m, { conn, command, text, usedPrefix, isPrems, isOwner, DevMode }) => {
  conn.play = conn.play ? conn.play : {}
  if (m.chat in conn.play) throw 'Todavía hay quienes están buscando en youtube en este chat... esperen a que termine'
  else conn.play[m.chat] = true
  try {
      try {
          if (!text) throw `*Ingrese el nombre de la música*\n\n- Ejemplo : ${usedPrefix + command} beliver`
          let results = await yts(text)
          let vid = results.all.find(video => video.seconds < 3600)
          if (!vid) throw 'No se encontró el video/audio'
          let { dl_link, thumb, title, filesize, filesizeF} = await (/2$/.test(command) ? ytv : yta)(vid.url, 'id4')
          let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
          
          let konrasel = `*──「 Descarga de Youtube 」──*

• *🎵 Titulo* : ${title}
• *👾 Link* : ${vid.url}

• *🔊 Tamaño del audio* : ${filesizeF}
• *📽 Tamaño del video* : ${yt2.filesizeF}`
          const template = generateWAMessageFromContent(m.key.remoteJid, proto.Message.fromObject({
      templateMessage: {
          hydratedTemplate: {
              locationMessage: { jpegThumbnail: await (await fetch(thumb)).buffer()},
              hydratedContentText: konrasel.trim(),
              hydratedFooterText: `Selecciona una opción`,
              hydratedButtons: [{
                index: 0,
                 urlButton: {
                      displayText: '🌏 Url YouTube',
                      url: `${vid.url}`
                  }
              }, {
                 quickReplyButton: {
                      displayText: `🎵 Audio`,
                      id: `/yta ${vid.url}`
                  }
              }, {
                 quickReplyButton: {
                      displayText: `📽 Video`,
                      id: `/ytv ${vid.url}`
                  }
              }, {
                  quickReplyButton: {
                      displayText: `🔎 YT Search ${text}`,
                      id: `/yts ${text}`
                  },
                  selectedIndex: 1
              }]
          }
      }
  }), { userJid: m.participant || m.key.remoteJid, quoted: m });
  return await conn.relayMessage(
      m.key.remoteJid,
      template.message,
      { messageId: template.key.id }
  )

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
handler.help = ['play'].map(v => v + ' <texto>')
handler.tags = ['downloader']
handler.command = /^play?$/i

handler.exp = 0
handler.limit = false

module.exports = handler

