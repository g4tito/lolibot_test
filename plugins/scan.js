// Thanks to TOXIC-DEVIL
// https://github.com/TOXIC-DEVIL

let handler = async (m, { conn, args }) => {
    if (!args || !args[0] || args.length === 0) throw 'Ingrese un numero para escanear!'
    if (args[0].startsWith('0')) throw 'Ingrese el código de país!'
    let user = await conn.isOnWhatsApp(args[0])
    let exists = user && user.exists ? true : false
    if (exists) {
        let sameGroup = [], isInDatabase = false
        let chat = conn.chats.all().filter(v => v.jid.endsWith('g.us') && !v.read_only)
        for (let gc of chat) {
            let participants = gc && gc.metadata && gc.metadata.participants ? gc.metadata.participants : []
            if (participants.some(v => v.jid === user.jid)) sameGroup.push(gc.jid)
        }
        if (user.jid in global.DATABASE._data.users) isInDatabase = true
        let str = ` 
\t\t ･ 【 *NUMBER INFO* 】 ･
• Nombre: ${conn.getName(user.jid)}
• Número: ${splitM(user.jid)}
• Tag: ${toM(user.jid)}
• Api: wa.me/${splitM(user.jid)}
• Jid: ${user.jid}
• Whatsapp Bussines: ${user.isBusiness ? 'Si' : 'No'}
• Database: ${isInDatabase ? 'Si' : 'No'}
• Grupos Bot: ${sameGroup.length}  Total
`.trim()
        m.reply(str, m.chat, { 
            contextInfo: { 
                mentionedJid: conn.parseMention(str)
            }
        })
    } else throw 'Usuario no encontrado!'
}
    
handler.help = ['scan'].map(v => v + '')
handler.tags = ['tools']
handler.command = /^scan$/i

module.exports = handler

function splitM(jid) {
    return jid.split('@')[0]
}

function toM(jid) {
    return '@' + splitM(jid)
}