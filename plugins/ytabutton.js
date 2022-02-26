let limit = 30
const { servers, yta } = require('../lib/y2mate')
let handler = async (m, { conn, args, usedPrefix, command, isPrems, isOwner }) => {
  if (!args || !args[0]) return m.reply('Error, link invalido')
  m.reply('↓ ‧ _Descargando audio, espere.._')
  let chat = global.DATABASE._data.chats[m.chat]
  let server = (args[1] || servers[0]).toLowerCase()
  let { dl_link, thumb, title, filesize, filesizeF} = await yta(args[0], servers.includes(server) ? server : servers[0])
  let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
  if (isLimit) return m.reply('El audio es muy largo, la descarga se cancelo')
  if (!isLimit) conn.sendFile(m.chat, dl_link, title + '.mp3', `
*${title}*
`.trim(), m, null, {
  asDocument: chat.useDocument
})
}
handler.command = /^(ytab)$/i
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

