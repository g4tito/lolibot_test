/* 
    Modifikasi by https://github.com/unx21
    tanpa button :)
*/
let timeout = 60000
let poin = 1000
let poin_lose = 500
let handler = async (m, { conn, usedPrefix }) => {
  conn.suit = conn.suit ? conn.suit : {}
  if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.sender))) throw 'Todavia tienes un juego pendiente'
  if (!m.mentionedJid[0]) return m.reply(`Etiqueta a alguien del grupo\n\n*Ejemplo:* ${usedPrefix + command} @${owner[0]}`, m.chat, { contextInfo: { mentionedJid: [owner[0] + '@s.whatsapp.net'] } })
  if (Object.values(conn.suit).find(room => room.id.startsWith('suit') && [room.p, room.p2].includes(m.mentionedJid[0]))) throw `La persona a la que estás desafiando está jugando con otra persona`
  let id = 'suit_' + new Date() * 1
  let caption = `
– *JUEGO PIEDRA PAPEL O TIJERA* –

@${m.sender.split`@`[0]} desafía a @${m.mentionedJid[0].split`@`[0]}  para una partida de ppt

@${m.mentionedJid[0].split`@`[0]}  escribe *N/S*

*Nota:*
  • N : rechazar el desafío
  • S : aceptar el desafío
`.trim()
  conn.suit[id] = {
    chat: await conn.reply(m.chat, caption, m, { contextInfo: { mentionedJid: conn.parseMention(caption) } }),
    id: id,
    p: m.sender,
    p2: m.mentionedJid[0],
    status: 'wait',
    waktu: setTimeout(() => {
      if (conn.suit[id]) conn.reply(m.chat, `El tiempo de espera a terminado`, m)
      delete conn.suit[id]
    }, timeout), poin, poin_lose, timeout
  }
}
handler.help = ['suitpvp <@user>', 'ppt <@user>']
handler.tags = ['games']
handler.command = /^(ppt|suitpvp)$/i
handler.limit = false
handler.group = true
handler.register = true

module.exports = handler
