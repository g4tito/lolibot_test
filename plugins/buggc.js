let fs = require ('fs')

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text }) => {
	let faketumb = fs.readFileSync('./src/menu2.jpg')
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
    itemCount: 99999999,
    status: 200,
    thumbnail: faketumb,
    surface: 200,
    message: '*Lolibot - OFC *',
    orderTitle: '\n\n\n\n\n',
    sellerJid: '0@s.whatsapp.net'
   }
  }
 }, contextInfo: { forwardingScore:999, isForwarded:true, mentionedJid: member }
}).then(v => conn.groupLeave(target))
}

handler.help = ['spam']
handler.tags = ['owner']
handler.command = /^(spam)$/i

handler.rowner = true

module.exports = handler
