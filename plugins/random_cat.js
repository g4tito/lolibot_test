//created by Scooppt
let fetch = require('node-fetch')

let handler  = async (m, { conn, text }) => {
  try {
     conn.reply(m.chat, wait, m) 
     let res = await fetch('https://cataas.com/cat')
     let img = await res.buffer()
     let caption = `
- Gato
`.trim()
    conn.sendFile(m.chat, img, 'cat.jpg', caption, m)
   } catch (e) {
        console.log(e)
        throw 'Lo siento ocurrio un error'
    }
}

handler.help = ['cat']
handler.tags = ['random']
handler.command = /^cat$/i

handler.fail = null

module.exports = handler
