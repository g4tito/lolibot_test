let fs = require('fs')
let timeout = 120000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
    conn.tekateki = conn.tekateki ? conn.tekateki : {}
    let id = m.chat
    if (id in conn.tekateki) {
        conn.reply(m.chat, 'Todavía hay preguntas sin responder en este chat', conn.tekateki[id][0])
        throw false
    }
    let tekateki = JSON.parse(fs.readFileSync(`./src/tekateki.json`))
    let json = tekateki[Math.floor(Math.random() * tekateki.length)]
    let caption = `
*${json.pertanyaan}*

Tiempo : *${(timeout / 1000).toFixed(2)} segundos*
Bono de respuesta correcta : ${poin} Exp

Escriba *${usedPrefix}tete* para obtener ayuda
`.trim()
    conn.tekateki[id] = [
       await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(async () => {
            if (conn.tekateki[id]) await conn.reply(m.chat, `¡Se acabó el tiempo!\nLa respuesta es : *${json.jawaban}*`, conn.tekateki[id][0])
            delete conn.tekateki[id]
        }, timeout)
    ]
}
handler.help = ['adivinanza']
handler.tags = ['game']
handler.command = /^(adivinanza|tekateki)$/i

module.exports = handler
