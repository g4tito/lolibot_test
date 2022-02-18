let handler  = async (m, { conn }) => {
let name = conn.getName(m.sender)
const ownernum = "51940617554@s.whatsapp.net"
let teks = `
@${ownernum.split("@s.whatsapp.net")[0]}
`.trim()
conn.reply(m.chat, teks, m, { contextInfo: { mentionedJid: [ownernum] }})
}
handler.customPrefix = /Test/
handler.command = new RegExp

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
