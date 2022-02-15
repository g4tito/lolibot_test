const {
  MessageType
} = require("@adiwajshing/baileys");
const { createHash } = require('crypto')
let fs = require('fs')
let fetch = require('node-fetch')
let Reg = /(.*)([.|])([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix }) {
  let user = global.DATABASE._data.users[m.sender]
  if (user.registered === true) throw `*Ya estas registrado*, quieres volver a registrarte?\nUse ${usedPrefix}unreg <codigo>`
  if (!Reg.test(text)) throw `*Registro no valido*\n- Ejemplo: ${usedPrefix}reg <nombre>.<edad>\n\nNo se olvide del punto`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'El nombre no puede estar vacio'
  if (!age) throw 'La edad no puede estar vacia'
  user.name = name
  user.age = parseInt(age)
  user.regTime = + new Date
  user.registered = true
  let snnro = m.sender.split("@")[0]
  let sn = createHash('md5').update(snnro).digest('hex')
  let reuser = './src/avatar_contact.png'
  try {
    reuser = await conn.getProfilePicture(m.sender)
  } catch (e) {
  	
  } finally {
  let repp = await(await fetch(reuser)).buffer()
  retext = `
  *✅ Registro exitoso*

 • Nombre: ${name}
 • Edad: ${age} años
 • Codigo: ${sn}

  `.trim()
  py =  await conn.prepareMessage(m.chat, repp, MessageType.image)
gbutsan = [
{buttonId: `/menu`, buttonText: {displayText: '🍟 MENU'}, type: 1},
{buttonId: `/owner`, buttonText: {displayText: '🍧 CREADOR'}, type: 1}
]
gbuttonan = {
imageMessage: py.message.imageMessage,
contentText: retext,
footerText: `Lolibot - OFC`,
buttons: gbutsan,
headerType: 4
}
conn.sendMessage(m.chat, gbuttonan, MessageType.buttonsMessage, { quoted: m })
}
conn.sendMessage(m.sender, `Codigo de registro: ${sn}`, MessageType.text, { quoted: m })
}
handler.help = ['daftar', 'reg', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['exp']

handler.command = /^(daftar|reg(ister)?)$/i

module.exports = handler

