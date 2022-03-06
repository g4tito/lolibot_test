const uploadImage = require('../lib/uploadImage') 
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
 try {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Etiqueta una imagen!'
  conn.reply(m.chat, wait, m)
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Formato *${mime}* no soportado`
  let img = await q.download()
  let url = await uploadImage(img)
  let wanted = `https://some-random-api.ml/canvas/pansexual?url=${url}`
  let stiker = await sticker(null, wanted, global.packname, global.author)
  conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
 } catch (e) {
   m.reply('Ocurrió un error al crear el sticker')
  }
}
handler.help = ['pansexual']
handler.tags = ['sticker']
handler.command = /^(spansexual|pansexual)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
