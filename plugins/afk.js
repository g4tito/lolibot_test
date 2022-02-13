let handler = async (m, { text }) => {
  let user = global.DATABASE.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  m.reply(`Hola ${conn.getName(m.sender)} ahora estas en AFK

*Razon* : ${text ? ': ' + text : ''}`)
}
handler.help = ['afk [razon]']
handler.tags = ['main']
handler.command = /^afk$/i

module.exports = handler
