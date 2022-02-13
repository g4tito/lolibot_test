let { WAMessageProto } = require('@adiwajshing/baileys')
let handler = async (m, { command, usedPrefix, text }) => {
    let M = WAMessageProto.WebMessageInfo
    let which = command.replace(/\+|add/i, '')
    if (!m.quoted) throw `Etiquete un ${which}!`
    if (!text) throw `Utilize *${usedPrefix}list${which}* para ver la lista ${which}s`
    let msgs = global.DATABASE._data.msgs
    if (text in msgs) throw `'${text}' a sido añadido a la lista de ${which}s`
    msgs[text] = M.fromObject(await m.getQuotedObj()).toJSON()
    m.reply(`*Se agrego con exito como '${text}'*
    
Utilize ${usedPrefix}get${which} ${text} para enviar

Tambien puede escribir solo te texto`)
}
handler.help = ['vn', 'msg', 'video', 'gif', 'audio', 'img', 'sticker'].map(v => 'add' + v + ' <texto>')
handler.tags = ['database']
handler.command = /^(\+|add)(vn|msg|video|audio|img|stic?ker|gif)$/

module.exports = handler
