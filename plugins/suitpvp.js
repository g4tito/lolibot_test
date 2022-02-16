/* 
    Modifikasi by https://github.com/unx21
    tanpa button :)
*/
let timeout = 60000
let poin = 1000
let poin_lose = 500
let handler = async (m, { conn, usedPrefix }) => {
  conn.suit = conn.suit ? conn.suit : {}
  if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.sender))) throw 'Todavia estas en el juego'
  if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya.. Contoh\n\n${usedPrefix}suit @${owner[0]}`, m.chat, { contextInfo: { mentionedJid: [owner[0] + '@s.whatsapp.net'] } })
  if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
  let id = 'suit_' + new Date() * 1
  let caption = `
      *「 PIEDRA PAPEL TIJERA 」*

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Hola @${m.mentionedJid[0].split`@`[0]}

Escriba "terima/ok/gas" para aceptar\nEscriba "tolak/gabisa/nanti" para rechazar
`.trim()
  conn.suit[id] = {
    chat: await conn.reply(m.chat, caption, m, { contextInfo: { mentionedJid: conn.parseMention(caption) } }),
    id: id,
    p: m.sender,
    p2: m.mentionedJid[0],
    status: 'wait',
    waktu: setTimeout(() => {
      if (conn.suit[id]) conn.reply(m.chat, `_Waktu suit habis_`, m)
      delete conn.suit[id]
    }, timeout), poin, poin_lose, timeout
  }
}
handler.help = ['suitpvp <@user>', 'suit2 <@users>']
handler.tags = ['games']
handler.command = /^suit(pvp|2)$/i
handler.limit = false
handler.group = true
handler.register = true

module.exports = handler
