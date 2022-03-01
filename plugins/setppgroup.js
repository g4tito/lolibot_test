let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image/.test(mime)) {
        let img = await q.download()
        if (!img) throw 'Etiqueta una imagen!'
        await conn.updateProfilePicture(m.chat, img)
    } else throw `Etiqueta un imagen con el comando ${usedPrefix + command}`
}
handler.help = ['setppgroup']
handler.tags = ['group']

handler.command = /^(setppgroup|setppgp|setppgc)$/i

handler.group = true
handler.admin = true
handler.botAdmin = true

module.exports = handler