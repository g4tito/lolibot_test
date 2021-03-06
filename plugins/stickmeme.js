const uploadImage = require('../lib/uploadImage')
const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
let handler = async (m, { conn, text, usedPrefix, command }) => {

    let [atas, bawah] = text.split`|`
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw `*Etiqueta una imagen & ingrese un texto*\n\n- Ejemplo: ${usedPrefix + command} Hola|xd`
    conn.reply(m.chat, wait, m)
    if (!/image\/(jpe?g|png)/.test(mime)) throw `Formato *${mime}* no soportado`
    let img = await q.download()
    let url = await uploadImage(img)
    m.reply(wait)
    meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas ? atas : '')}/${encodeURIComponent(bawah ? bawah : '')}.png?background=${url}`
    stiker = await sticker(false, meme, global.packname, global.author)
    if (stiker) await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
        quoted: m
    })

}
handler.help = ['stikermeme']
handler.tags = ['sticker']
handler.command = /^(stickermeme|smeme|stickmeme)$/i

handler.limit = true

module.exports = handler
