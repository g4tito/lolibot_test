let handler = async (m, { text, args }) => {
  if (!args[0]) throw 'Ingrese la razon'
  let user = global.DATABASE.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  m.reply(`Hola ${conn.getName(m.sender)} ahora estas en AFK

*Razon* ${text ? ': ' + text : '_sin razon_'}`)
}
handler.help = ['afk [razon]']
handler.tags = ['main']
handler.command = /^afk$/i

module.exports = handler
