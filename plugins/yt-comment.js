let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*Ingrese un texto*\n\n- Ejemplo: ${usedPrefix + command} Like =)`
  conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/youtube-comment', {
    avatar: await conn.getProfilePicture(m.sender).catch(_ => ''),
    comment: text,
    username: conn.getName(m.sender)
  }), 'yt-comment.png', '*Aquí está tu comentario*', m)
}

handler.help = ['ytcomment']
handler.tags = ['nulis']

handler.command = /^(ytcomment|comentario)$/i

module.exports = handler
