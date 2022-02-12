let handler  = async (m, { conn, text }) => {
  let groups = conn.chats.all().filter(v => v.jid.endsWith('g.us') && !v.read_only && v.message).map(v => v.jid)
  let content = (/bcgc|anuncio/i.test(text) ? text : text + '\n\n' + readMore + '∙ 「 anuncio 」 ∙')
  for (let id of groups) conn.sendMessage(id, content, m.mtype, m.msg.contextInfo ? {
    contextInfo: m.msg.contextInfo
  } : {})
  conn.reply(m.chat, `El anuncio se envio a ${groups.length} grupos`, m)
}
handler.help = ['anuncio','bcgc'].map(v => v + ' <texto>')
handler.tags = ['owner']
handler.command = /^(anuncio|bcgc)$/i
handler.owner = true

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

