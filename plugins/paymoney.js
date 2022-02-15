let { MessageType } = require('@adiwajshing/baileys')
let pajak = 0.02
let handler = async (m, { conn, text, usedPrefix }) => {
    if (!text) throw `Ejemplo de uso: ${usedPrefix}paymoney <@tag> <cantidad>`
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Etiqueta a alguien del grupo'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (isNaN(txt)) throw 'Solo numeros'
    let poin = parseInt(txt)
    let money = poin
    let pjk = Math.ceil(poin * pajak)
    money += pjk
    if (money < 1) throw 'Minimo uno de dinero para transferir'
    let users = global.DATABASE._data.users
    if (money > users[m.sender].money) throw 'Límite insuficiente para transferir'
    users[m.sender].money -= money
    users[who].money += poin

    m.reply(`(${-poin} Dinero) + (${-pjk} Dinero (Impuestos 2%)) = ( ${-money} Dinero)`)
    conn.fakeReply(m.chat, `+${poin} Dinero `, who, m.text)
}
handler.help = ['paymoney @user <cantidad>']
handler.tags = ['xp']
handler.command = /^paymoney$/
handler.rowner = false

module.exports = handler

