let fetch = require('node-fetch')

let handler = async(m, { conn, args, usedPrefix, command }) => {
    if (args.length == 0) return conn.reply(m.chat, `*Elige una categoría de anime*\n\n- Ejemplo: ${usedPrefix + command} random\n\n*Lista de categorías:*\n\n- Random\n- Waifu\n- Husbu\n- Neko`, m)
    if (args[0] == 'random' || args[0] == 'waifu' || args[0] == 'husbu' || args[0] == 'neko') {

        fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/' + args[0] + '.txt')
            .then(res => res.text())
            .then(body => {
                let randomnime = body.split('\n')
                let randomnimex = randomnime[Math.floor(Math.random() * randomnime.length)]
                conn.sendFile(m.chat, randomnimex, '', '*7w7*', m)
            })
            .catch(() => {
                conn.reply(m.chat, 'Lo siento ocurrio un error!', m)
            })
    } else {
        conn.reply(m.chat, `*Elige una categoría correcta*\n\n- Ejemplo: ${usedPrefix + command} random\n\n*Lista de categorías:*\n\n- Random\n- Waifu\n- Husbu\n- Neko`, m)
    }

}

handler.help = ['anime']
handler.tags = ['internet']
handler.command = /^(anime)$/i

handler.fail = null
handler.limit = false

module.exports = handler