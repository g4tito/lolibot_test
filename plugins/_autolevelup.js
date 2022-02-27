let { MessageType, mentionedJid } = require("@adiwajshing/baileys");
let { spawn } = require('child_process')
let levelling = require('../lib/levelling')
module.exports = {
  before(m) {
    let user = global.DATABASE._data.users[m.sender]
    if (!user.autolevelup) return !0
    if (m.sender === conn.user.jid) return
    let before = user.level * 1
    while (levelling.canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
      let d = new Date(new Date + 3600000)
      let locale = 'id'
      let time = d.toLocaleTimeString(locale, {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      })
      let username = global.DATABASE._data.users[m.sender].name
      let name = username ? username : this.getName(m.sender)
      let lvlnow = user.level
      let teks = `⠀⠀⠀⠀⠀⠀⠀${name} subiste de nivel`
      let str = `
Hola ${m.sender.split("@s.whatsapp.net")[0]} subiste de nivel

» 🆙 Nivel: ${before} ➯ ${lvlnow} 
» ⏰ Hora: ${time}

Cuando mas interactues con la bot mayor sera tu nivel
`.trim()
      if (global.support.convert || global.support.magick || global.support.gm) {
        let fontLevel = 'src/level_c.otf'
        let fontTexts = 'src/texts.otf'
        let xtsx = 'src/lvlup_template.jpg'
        let bufs = []
        let anotations = '+1385+260' // gapake else if kadang error
        if (lvlnow > 2) anotations = '+1370+260'
        if (lvlnow > 10) anotations = '+1330+260'
        if (lvlnow > 50) anotations = '+1310+260'
        if (lvlnow > 100) anotations = '+1260+260'
       
        const [_spawnprocess, ..._spawnargs] = [...(global.support.gm ? ['gm'] : global.support.magick ? ['magick'] : []),
          'convert',
          xtsx,
          '-font',
          fontTexts,
          '-fill',
          '#0F3E6A',
          '-size',
          '1024x784',
          '-pointsize',
          '68',
          '-interline-spacing',
          '-7.5',
          '-annotate',
          '+153+200',
          teks,
          //original together
          '-font',
          fontLevel,
          '-fill',
          '#0A2A48',
          '-size',
          '1024x784',
          '-pointsize',
          '140',
          '-interline-spacing',
          '-1.2',
          '-annotate',
          anotations,
          lvlnow,
          '-append',
          'jpg:-'
        ]
        spawn(_spawnprocess, _spawnargs)
          .on('error', e => {
            throw e
          })
          .on('close', () => {
            _thumbb = Buffer.concat(bufs)
            this.sendMessage(m.chat, Buffer.concat(bufs), MessageType.image, { quoted: m, caption: str, thumbnail: Buffer.concat(bufs), contextInfo: { mentionedJid: [m.sender] } })
            
          })
          .stdout.on('data', chunk => bufs.push(chunk))

      } else {
        m.reply(str, m.chat, {
          contextInfo: {
            mentionedJid: [m.sender]
          }
        })
      }
    }

    return true
  }
}
