let fetch = require('node-fetch')

let timeout = 120000
let poin = 4999
let src
let handler = async (m, { conn, usedPrefix }) => {
    conn.tekateki = conn.tekateki ? conn.tekateki : {}
    let id = m.chat
    if (id in conn.tekateki) {
        conn.reply(m.chat, 'Todavía hay preguntas sin responder en este chat', conn.tekateki[id][0])
        throw false
    }
    if (!src) src = await (await fetch(global.API('https://raw.githubusercontent.com', '/BochilTeam/database/master/games/tekateki.json'))).json()
    let json = src[Math.floor(Math.random() * src.length)]
    if (!json) throw json
    let caption = ` 
*${json.soal.trim()}?* 
Tiempo : ${(timeout / 1000).toFixed(2)} segundos
Escriba *${usedPrefix}hah* para obtener ayuda
Bono de respuesta correcta : ${poin} Exp
`.trim()
    conn.tekateki[id] = [
        await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tekateki[id]) conn.reply(m.chat, `¡Se acabó el tiempo!\nLa respuesta es : *${json.jawaban}*`, conn.tekateki[id][0])
            delete conn.tekateki[id]
        }, timeout)
    ]
}
handler.help = ['tekateki']
handler.tags = ['game']
handler.command = /^(adivinanza|tekateki)$/i

module.exports = handler
