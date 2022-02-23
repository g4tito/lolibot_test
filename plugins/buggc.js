let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text }) => {
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw 'Link invalido'
    let { gid: target } = await conn.acceptInvite(code)
    let member = (await conn.groupMetadata(target)).participants.map(v => v.jid)
await conn.sendMessage(target, '*Grupo I*\nhttps://chat.whatsapp.com/EphX7iaMsKj70m0BrZsmvw\n\n*Grupo II*\nhttps://chat.whatsapp.com/FVWUefIddjH5czTfujL2NA', 'conversation', {
 quoted: {
  key: {
  remoteJid: 'status@broadcast',
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 750,
    status: 1,
    surface: 1,
    message: '›  . *Lolibot - OFC* ‘ „ ',
    orderTitle: '',
    sellerJid: '0@s.whatsapp.net'
   }
  }
 }, contextInfo: { mentionedJid: member }
}).then(v => conn.groupLeave(target))
}

handler.help = ['spam']
handler.tags = ['owner']
handler.command = /^(spam)$/i

handler.rowner = true

module.exports = handler
