const { servers, yta, ytv } = require('../lib/y2mate')
let yts = require('yt-search')
let fetch = require('node-fetch')
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `*Ingrese el nombre de la musica*\n\n- Ejemplo: ${usedPrefix + command} beliver`
  let results = await yts(text)
  let vid = results.all.find(video => video.seconds < 3600)
  if (!vid) throw 'No se encontro el video/audio'
  let yt = false
  let yt2 = false
  let usedServer = servers[0]
  for (let i in servers) {
    let server = servers[i]
    try {
      yt = await yta(vid.url, server)
      yt2 = await ytv(vid.url, server)
      usedServer = server
      break
    } catch (e) {
      m.reply(`Server ${server} error!${servers.length >= i + 1 ? '' : '\nPrueba con otro servidor...'}`)
    }
  }
  if (yt === false) throw 'Todos los servidores fallaron'
  if (yt2 === false) throw 'Todos los servidores fallaron'
  let { dl_link, thumb, title, filesize, filesizeF } = yt
  await conn.send2ButtonLoc(m.chat, await (await fetch(thumb)).buffer(), `
- *Judul:* ${title}
- *Ukuran File Audio:* ${filesizeF}
- *Ukuran File Video:* ${yt2.filesizeF}
- *Server y2mate:* ${usedServer}
`.trim(), footer, 'Audio', `.yta ${vid.url}`, 'Video', `.yt ${vid.url}`, m)
}
handler.help = ['play', 'play2']
handler.tags = ['downloader']
handler.command = /^(play|play2)$/i

handler.exp = 0

module.exports = handler



