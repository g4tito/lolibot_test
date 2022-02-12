let handler = async (m, { conn, args }) => {
    const bonus = Math.floor(Math.random() * 300)
    if (!args[0]) throw 'Por favor, introduzca un número'
    if (!/\d/i.test(args[0])) throw 'Elije un numero del 0 a 9!'
    const bot = pickRandom(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'])
    const isWin = bot == args[0]
    conn.reply(m.chat, `
– *ADIVINA EL NÚMERO* –

Tu número : ${args[0]}
Nro del bot : ${bot}

*+${isWin ? bonus : 0}* Exp!
`.trim(), m)
    if (isWin) global.DATABASE.data.users[m.sender].exp += bonus * 1
}
handler.help = ['adv <0-9>']
handler.tags = ['game']
handler.command = /^adv/i

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
