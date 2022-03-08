let fs = require ('fs');
let { MessageType } = require("@adiwajshing/baileys");
let handler = async (m, { conn, text }) => {
let tumb = fs.readFileSync('./src/menu2.jpg')
conn.sendMessage(m.chat, `Test`, MessageType.SendPaymentMessage)
}

handler.customPrefix = /Test/i
handler.command = new RegExp

handler.fail = null
module.exports = handler
