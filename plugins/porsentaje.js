let handler = async (m, { conn, command, text }) => {
  if (!text) throw `Mensione a alguien para ver su porsentaje de  *${command.replace('es', '').toUpperCase()}*`
  conn.reply(m.chat, `
*${text}* es *${Math.floor(Math.random() * 101)}*% ${command.replace('es', '').toUpperCase()}
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
handler.help = ['gay', 'inteligente', 'hermoso', 'hermosa', 'lesbiana', 'pajero', 'pajera', 'furro', 'furra'].map(v => 'es' + v + '')
handler.tags = ['fun']
handler.command = /^es(gay|inteligente|hermoso|hermosa|lesbiana|pajero|pajera|furro|furra)/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
