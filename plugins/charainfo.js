let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
  if (!text) throw `Introduce el nombre de un personaje!`
  let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/character', { q: text }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let { name, alternative_names, url, image_url, type } = json.results[0]
let charaingfo = `•  *Nombre:* ${name}
•  *Apodo:* ${alternative_names}
•  *Link:* ${url}
•  *Característica*: ${type}`

  conn.sendFile(m.chat, image_url, '', charaingfo, m)
}
handler.help = ['personaje <nombre>']
handler.tags = ['internet']
handler.command = /^(personaje|character)$/i

module.exports = handler
