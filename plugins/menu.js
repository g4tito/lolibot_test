const {
  MessageType
} = require("@adiwajshing/baileys");
let fetch = require('node-fetch')
let fs = require('fs')
let path = require('path')
let levelling = require('../lib/levelling')
let tags = {
  'main': 'MENU',
  'rpg': 'EPIC RPG',
  'game': 'JUEGOS',
  'xp': 'EXP & LIMITE',
  'sticker': 'STICKER',
  'kerang': 'Kerang Ajaib',
  'quotes': 'CITAS',
  'admin': 'ADMIN',
  'group': 'GRUPO',
  'premium': 'PREMIUN',
  'internet': 'INTERNET',
  'anonymous': 'CHAT ANONIMO',
  'nulis': 'LOGO MAKER',
  'downloader': 'DESCARGA',
  'tools': 'AJUSTES',
  'fun': 'DIVERCION',
  'database': 'DATABASE',
  'vote': 'VOTACION',
  'absen': 'Absen',
  'quran': 'Al Qur\'an',
  'jadibot': 'JADI BOT',
  'owner': 'CREADOR',
  'host': 'HOST',
  'advanced': 'AVANZADO',
  'info': 'INFO',
  '': 'SIN CATEGORIA',
}
const defaultMenu = {
  before: `
Hola %name, %ucapan!

*៹࣪ 🧃₊∙ BOT INFO ₊°›››*

• *Nombre* : _%me_
• *Prefix* : _< Multiprefijo >_
• *Navegador* : _${conn.browserDescription[1]}_
• *Servidor* : _${conn.browserDescription[0]}_
• *Version* : _${conn.browserDescription[2]}_

• *Fecha* : _%week %weton, %date_
• *Fecha islamica* : _%dateIslamic_
• *Hora* : _%time_

• *Tiempo activo* : _%uptime (%muptime)_
• *Registrados* : _%rtotalreg de %totalreg_

%readmore`.trimStart(),
  header: '╭─❑ *%category*',
  body: '│∙ %cmd %islimit %isPremium',
  footer: '└──❑\n',
  after: `
*%npmname@^%version*
${'```%npmdesc```'}
`,
}
let handler = async (m, { conn, usedPrefix: _p }) => {
  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let name = conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves','Viernes','Sábado'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.DATABASE._data.users).length
    let rtotalreg = Object.values(global.DATABASE._data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      ucapan: ucapan(),
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      name, weton, week, date, dateIslamic, time, totalreg, rtotalreg,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
     let tumb = fs.readFileSync('./src/menu.jpg')
     let tumbb = fs.readFileSync('./src/menu2.png')
     conn.sendMessage(m.chat, { contentText: text.trim(), footerText: 'Lolibot - OFC', buttons: [{buttonId: '/ping', buttonText: {displayText: '👾 PING'}, type: 1},{buttonId: '/owner' , buttonText: {displayText: '🍧 CREADOR'}, type: 1}], "headerType": "DOCUMENT", "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc", "mimetype": "application/vnd.ms-excel", "title": "Dibuat Oleh: Arifi Razzaq", "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=", "fileLength": 999999999999, "pageCount": 999999999, "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=", "fileName": "𝕷𝖔𝖑𝖎𝖇𝖔𝖙 - 𝕺𝖋𝖎𝖈𝖎𝖆𝖑™.⁖⃟•᭄", "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=", "directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC", "mediaKeyTimestamp": "1634472176", "jpegThumbnail": tumb 
            }}, MessageType.buttonsMessage, { quoted: m, thumbnail: tumbb, contextInfo: { forwardingScore: 750, isForwarded: true, externalAdReply: { title: `あなたは私のすべてです`, body: `Macielly ? D‵ Gatito`, thumbnail: tumbb, mediaType:"2", previewType: "VIDEO", mediaUrl: ""
            }
            }
            })
  } catch (e) {
    conn.reply(m.chat, 'Lo siento, ocurrió un error al mostrar el menú', m)
    throw e
  }
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = (new Date().getUTCHours() + 7) % 24
  res = "Woi. Pagi"
  if (time >= 4) {
    res = "Espero que tenga un lindo dia"
  }
  if (time >= 12) {
    res = "Espero que tenga un lindo tarde"
  }
  if (time >= 15) {
    res = "Espero que tenga un linda noche"
  }
  if (time >= 19) {
    res = "Espero que tenga un linda noche"
  }
  return res
}
