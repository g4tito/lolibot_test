let fs = require ('fs');
let { MessageType } = require("@adiwajshing/baileys");
let handler = async (m, { conn, text }) => {
let tumb = fs.readFileSync('./src/menu2.jpg')
conn.sendMessage(m.chat, { contentText: 'Text', footerText: '', buttons: [{buttonId: '.shop', buttonText: {displayText: 'Tienda ⛺'}, type: 1}], "headerType": "DOCUMENT", "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc", "mimetype": "application/vnd.ms-excel", "title": "◖🎒 INVENTARIO 🎒◗", "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=", "fileLength": 99999999999, "pageCount": 25791, "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=", "fileName": "◖🎒 INVENTARIO 🎒◗", "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=", "directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC", "mediaKeyTimestamp": "1634472176", "jpegThumbnail": false 
            }}, MessageType.buttonsMessage, { quoted: m, thumbnail: false, contextInfo: { mentionedJid: [m.sender], forwardingScore: 750, isForwarded: true
            }
            })
}

handler.customPrefix = /Test/i
handler.command = new RegExp

handler.fail = null
module.exports = handler
