let handler  = async (m, { conn, args, text }) => {
  let groups = conn.chats.all().filter(v => v.jid.endsWith('g.us') && !v.read_only && v.message).map(v => v.jid)
  if (!args[0]) throw 'Por favor, introduzca un texto'
  for (let id of groups) conn.sendMessage(id, `${text}`, m.mtype, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "៹࣪ 🍥 ₊∙ Anuncio - grupos ₊˚ˑ༄", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": false} } } })
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

