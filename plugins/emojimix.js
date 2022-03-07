let fetch = require('node-fetch')
let {fetchJson} = require("../lib/myfunc")
let fs = require("fs")

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
if (!args[0]) throw `*Ingrese el emoji*\n\n- Ejemplo: ${usedPrefix + command} 🐷+😣`
conn.reply(m.chat, wait, m)
   	let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await conn.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
}
handler.help = ['emojimix']
handler.tags = ['sticker']
handler.command = /^(emojimix|emix)$/i

module.exports = handler
