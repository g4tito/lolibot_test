//made by Anshul
const uploadImage = require('../lib/uploadImage')
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')
const effects = ['jail', 'gay', 'glass', 'wasted' ,'triggered']

let handler = async (m, { conn, usedPrefix, text }) => {
    let effect = text.trim().toLowerCase()
  if (!effects.includes(effect)) throw `
*Etiqueta una imagen con el comando*
• ${usedPrefix}stickmaker <efecto>

*Ejemplo:* ${usedPrefix}stickmaker jail

*Lista de efectos:*
${effects.map(effect => `- ${effect}`).join('\n')}
`.trim()
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Etiqueta una imagen!'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Formato *${mime}* no soportado`
  let img = await q.download()
  let url = await uploadImage(img)
  let apiUrl = global.API('https://some-random-api.ml/canvas/', encodeURIComponent(effect), {
    avatar: url
  })
try {
    let stiker = await sticker(null, apiUrl, global.packname, global.author)
    await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
  } catch (e) {
    m.reply('Ocurrió un error al crear el sticker, se envió como imagen en su lugar')
    await conn.sendFile(m.chat, apiUrl, 'image.png', null, m)
  }
}

handler.help = ['stickmaker']
handler.tags = ['sticker']
handler.command = /^(stickmaker)$/i
handler.limit = true
handler.group = false
handler.register = true
module.exports = handler