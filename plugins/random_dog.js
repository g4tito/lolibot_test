//created by Scooppt
let fetch = require('node-fetch')

let handler  = async (m, { conn, text }) => {
  try {
    conn.reply(m.chat, wait, m) 
    let res = await fetch('https://random.dog/woof.json')
    let json = await res.json()
    if (json.status) throw json
    let caption = `
- Perro
`.trim()
    conn.sendFile(m.chat, json.url, 'dog.jpg', caption, m)
   } catch (e) {
        console.log(e)
        throw 'Lo siento ocurrio un error'
    }
}

handler.help = ['dog']
handler.tags = ['random']
handler.command = /^dog$/i

handler.fail = null

module.exports = handler
