let handler = m => m
handler.before = async function (m) {
  this.suit = this.suit ? this.suit : {}
  if (global.DATABASE._data.users[m.sender].suit < 0) global.DATABASE._data.users[m.sender].suit = 0
  let room = Object.values(this.suit).find(room => room.id && room.status && [room.p, room.p2].includes(m.sender))
  if (room) {
    let win = ''
    let tie = false
    if (m.sender == room.p2 && /^(S|s)/i.test(m.text) && m.isGroup && room.status == 'wait') {
      if (/^(N|n)/i.test(m.text)) {
        this.reply(m.chat, `@${room.p2.split`@`[0]} rechazó el desafío`, m, { contextInfo: { mentionedJid: [room.p2] } })
        delete this.suit[room.id]
        return !0
      }
      room.status = 'play'
      room.asal = m.chat
      clearTimeout(room.waktu)
      //delete room[room.id].waktu
      m.reply(`– *JUEGO PIEDRA PPT* –

Jugador1: @${room.p.split`@`[0]}
Juagdor2: @${room.p2.split`@`[0]}

El juego ha sido enviado al chat privado

*Seleccionen una opcion:*
wa.me/${conn.user.jid.split`@`[0]}`, m.chat, {
        contextInfo: {
          mentionedJid: [room.p, room.p2]
        }
      })

      if (!room.pilih) this.reply(room.p, `– *JUEGO PPT* –

Ganador: +${room.poin} de dinero
Perdedor: -${room.poin_lose} de dinero

*Elija una opción:*
✊🏻 - Piedra
🖐🏻 - Papel
✌🏻 - Tijera`, m)
      if (!room.pilih2) this.reply(room.p2, `– *JUEGO PPT* –

Ganador: +${room.poin} de dinero
Perdedor: -${room.poin_lose} de dinero

*Elija una opción:*
✊🏻 - Piedra
🖐🏻 - Papel
✌🏻 - Tijera`, m)
      room.waktu_milih = setTimeout(() => {
        if (!room.pilih && !room.pilih2) this.reply(m.chat, `El jugador no tiene intención de jugar, se canselo el juego`)
        else if (!room.pilih || !room.pilih2) {
          win = !room.pilih ? room.p2 : room.p
          this.reply(m.chat, `@${(room.pilih ? room.p2 : room.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
          global.DATABASE._data.users[win == room.p ? room.p : room.p2].money += room.poin
          global.DATABASE._data.users[win == room.p ? room.p2 : room.p].money -= room.poin_lose
        }
        delete this.suit[room.id]
        return !0
      }, room.timeout)
    }
    let jwb = m.sender == room.p
    let jwb2 = m.sender == room.p2
    let g = /tijera/i
    let b = /piedra/i
    let k = /papel/i
    let reg = /^(tijera|piedra|papel)/i
    if (jwb && reg.test(m.text) && !room.pilih && !m.isGroup) {
      room.pilih = reg.exec(m.text.toLowerCase())[0]
      room.text = m.text
      m.reply(`Has elegido ${m.text} ${!room.pilih2 ? `\n\nEsperando a que el oponente elija` : ''}`)
      if (!room.pilih2) this.reply(room.p2, 'Tu oponente ya elegido, ahora es tu turno', 0)
    }
    if (jwb2 && reg.test(m.text) && !room.pilih2 && !m.isGroup) {
      room.pilih2 = reg.exec(m.text.toLowerCase())[0]
      room.text2 = m.text
      m.reply(`Has elegido ${m.text} ${!room.pilih ? `\n\nEsperando a que el oponente elija` : ''}`)
      if (!room.pilih) this.reply(room.p, 'Tu oponente ya elegido, ahora es tu turno', 0)
    }
    let stage = room.pilih
    let stage2 = room.pilih2
    if (room.pilih && room.pilih2) {
      clearTimeout(room.waktu_milih)
      if (b.test(stage) && g.test(stage2)) win = room.p
      else if (b.test(stage) && k.test(stage2)) win = room.p2
      else if (g.test(stage) && k.test(stage2)) win = room.p
      else if (g.test(stage) && b.test(stage2)) win = room.p2
      else if (k.test(stage) && b.test(stage2)) win = room.p
      else if (k.test(stage) && g.test(stage2)) win = room.p2
      else if (stage == stage2) tie = true
      this.reply(room.asal, `
– *INFO DEL JUEGO PPT* –

@${room.p.split`@`[0]} (${room.text}) ${tie ? '' : room.p == win ? ` Ganaste!!\n+${room.poin} de dinero` : ` Ganaste!!\n-${room.poin_lose} de dinero`}

@${room.p2.split`@`[0]} (${room.text2}) ${tie ? '' : room.p2 == win ? ` Perdiste\n+${room.poin} de dinero` : ` Perdiste\n-${room.poin_lose} de dinero`}
`.trim(), m, { contextInfo: { mentionedJid: [room.p, room.p2] } })
      if (!tie) {
        global.DATABASE._data.users[win == room.p ? room.p : room.p2].money += room.poin
        global.DATABASE._data.users[win == room.p ? room.p2 : room.p].money -= room.poin_lose

      }
      delete this.suit[room.id]
    }
  }
  return !0
}
handler.exp = 0
module.exports = handler

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}
