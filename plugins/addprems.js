const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn, text }) => {
let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Etiquete a alguien del grupo!'
  // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.DATABASE._data.chats[m.chat].premium = true
  var nomor = m.sender
    m.reply(`*✅ Premium añadido*

• *Nunero* : wa.me/${nomor.split("@s.whatsapp.net")[0]}
• *Expira* : 30 dias

Gracias por ser usuario Premium!`)
  // } else m.reply('Ada nomor host disini...')
}
handler.help = ['addprem <nro>']
handler.tags = ['owner']
handler.command = /^(addprems|addprem)$/i
handler.rowner = true

module.exports = handler
