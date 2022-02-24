let speed = require('performance-now')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, DevMode }) => {
    try {
        let timestamp = speed()
        let neww = performance.now()
        let latensi = speed() - timestamp
        m.reply(`🚀 *Velocidad:* ${latensi.toFixed(4)} _Segundos_`)
    } catch (e) {
        console.log(e)
        m.reply('Lo siento ocurrio un error')
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, 'Speed.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}
handler.help = ['ping', 'speed']
handler.tags = ['info', 'tools']

handler.command = /^(ping|speed)$/i
module.exports = handler
