let yts = require('yt-search')
let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) return m.reply(`*Ingrese el texto para buscar*\n\n- Ejemplo: ${usedPrefix + command} Bobicraft`)
  let results = await yts(text)
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'video': return `
*${v.title}*
- Link: ${v.url}
- Duración: ${v.timestamp}
- Subido: ${v.ago}
- Visitas: ${v.views} 
      `.trim()
      case 'channel': return `
— *CANAL* —

*Nombre:* ${v.name}
*Link:* ${v.url})
*Subs:* ${v.subCountLabel} Subscriptores
*Videos* ${v.videoCount} Total
`.trim()
    }
  }).filter(v => v).join('\n\n╶\n\n')
  m.reply(teks)
}
handler.help = ['ytsearch']
handler.tags = ['tools']
handler.command = /^(yts|ytsearch)$/i

module.exports = handler
