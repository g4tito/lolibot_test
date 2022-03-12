const { pin } = require('../lib/scrape')

let handler = async (m, { conn, args, usedPrefix, command }) => {

    if (!args[0]) throw `*Ingrese un link de pinterest*\n\n- Ejemplo: ${usedPrefix + command} https://pin.it/xxxxx`
    if (!args[0].match(/https:\/\/.*pinterest.com\/pin|pin.it/gi)) throw 'Link invalido, Ingrese el enlace de un video de pinterest'

    pin(args[0]).then(async res => {
        let pin = JSON.stringify(res)
        let json = JSON.parse(pin)
        if (!json.status) throw 'Ocurrió un error al descargar el video!'
        conn.reply(m.chat, '↓ ‧ _Descargando video, espere..._', m)
        await conn.sendFile(m.chat, json.data.url, '', `*✅ Video descargado de pinterest*`, m)

    })

}
handler.help = ['pinterestvideo']
handler.tags = ['downloader']
handler.command = /^(pinterestvideo|pvideo)$/i

handler.limit = true

module.exports = handler
