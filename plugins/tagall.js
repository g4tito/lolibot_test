let handler = async (m, { conn, text, participants, groupMetadata }) => {
  let users = participants.map(u => u.jid)
  m.reply(`══✪〘 *Mencionar todos* 〙✪══\n\n• *Grupo:* ${groupMetadata.subject}\n• *Total:* ${participants.length}\n• *Mensaje:* ${text ? text : '_No hay_'}\n\n`+ users.map(v => '@' + `- `v.replace(/@.+/, '')).join`\n`, null, {
    contextInfo: { mentionedJid: users }
  })
}
handler.help = ['tagall <texto>']
handler.tags = ['group']
handler.command = /^(tagall)$/i

handler.group = true
handler.admin = true

module.exports = handler
