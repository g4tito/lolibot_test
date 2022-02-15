const { createHash } = require('crypto')
let handler = async function (m, { args }) {
  if (!args[0]) throw 'Ingrese el codigo que se le dio al momento de registrarse'
  let user = global.DATABASE._data.users[m.sender]
  let snnro = m.sender.split("@")[0]
  let sn = createHash('md5').update(snnro).digest('hex')
  if (snnro !== sn) throw 'Codigo incorrecto'
  user.registered = false
  m.reply(`Se elimino el registro con exito!`)
}
handler.help = ['', 'ister'].map(v => 'unreg' + v + ' <codigo>')
handler.tags = ['exp']

handler.command = /^unreg(ister)?$/i
handler.register = true

module.exports = handler

