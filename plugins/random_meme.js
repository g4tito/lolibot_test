//created by Scooppt
let fetch = require('node-fetch')

let handler  = async (m, { conn, text }) => {
 try {
    conn.reply(m.chat, wait, m) 
    let res = await fetch('https://meme-api.herokuapp.com/gimme')
    let json = await res.json()
    if (json.status) throw json
    let caption = `
- Reddit
Autor: ${json.author} Subreddit: ${json.subreddit}
${json.postLink}
`.trim()
    conn.sendFile(m.chat, json.url, 'test.jpg', caption, m)
   } catch (e) {
        console.log(e)
        throw 'Lo siento ocurrio un error'
    }
}

handler.help = ['meme']
handler.tags = ['random']
handler.command = /^meme$/i

handler.fail = null

module.exports = handler
