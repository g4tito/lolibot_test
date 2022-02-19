//created by Scooppt
let fetch = require('node-fetch')

let handler  = async (m, { conn, text }) => {
 try {
    conn.reply(m.chat, wait, m) 
    let res = await fetch('https://some-random-api.ml/img/pikachu')
    let json = await res.json()
    if (json.status) throw json
    let caption = `
- Pikachu
`.trim()
    conn.sendFile(m.chat, json.link, '', caption, m)
   } catch (e) {
        console.log(e)
        throw 'Lo siento ocurrio un error'
    }
}

handler.help = ['pikachu']
handler.tags = ['random']
handler.command = /^pikachu$/i

handler.fail = null

module.exports = handler
