let limit = 30
let fetch = require('node-fetch')
const { servers, ytv } = require('../lib/y2mate')
let handler = async (m, { conn, args, usedPrefix, command, isPrems, isOwner }) => {
  if (!args || !args[0]) return m.reply(`*Introdusca un link de un video de youtube*\n\n- Ejemplo:  ${usedPrefix + command} https://youtu.be/5DH20WZenDA`)
  let chat = global.DATABASE._data.chats[m.chat]
  let server = (args[1] || servers[0]).toLowerCase()
  let { dl_link, thumb, title, filesize, filesizeF} = await ytv(args[0], servers.includes(server) ? server : servers[0])
  let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
  conn.sendFile(m.chat, thumb, 'thumbnail.jpg', `
*< + DESCARGA DE VIDEO +/>*

- 📝Título: ${title}
- 📦Tamaño: ${filesizeF}

*Link de descarga:*
_${dl_link}_
`.trim(), m)
  if (isLimit) return m.reply('El video es muy largo, la descarga se cancelo')
  let _thumb = {}
  try { _thumb = { thumbnail: await (await fetch(thumb)).buffer() } }
  catch (e) { }
  if (!isLimit) conn.sendFile(m.chat, dl_link, title + '.mp4', `
*${title}*
`.trim(), m, false, {
  ..._thumb,
  asDocument: chat.useDocument
})
}
handler.help = ['ytv','mp4'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(ytv|mp4)?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

