let { MessageType, Presence } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text, participants, groupMetadata }) => {
	await conn.updatePresence(m.chat, Presence.composing) 
	let member = participants.map(u => u.jid)
	if(!text) {
		var sum = member.length
	} else {
		var sum = text
	}
	var total = 0
	var sider = []
	for(let i = 0; i < sum; i++) {
		let users = m.isGroup ? participants.find(u => u.jid == member[i]) : {}
		if((typeof global.DATABASE.data.users[member[i]] == 'undefined' || global.DATABASE.data.users[member[i]].chat == 0) && !users.isAdmin && !users.isSuperAdmin) { 
			if (typeof global.DATABASE.data.users[member[i]] !== 'undefined'){
				if(global.DATABASE.data.users[member[i]].whitelist == false){
					total++
					sider.push(member[i])
				}
			}else {
				total++
				sider.push(member[i])
			}
		}
	}
	if(total == 0) return conn.reply(m.chat, `*Este grupo no tiene fantasmas :D*`, m) 
	conn.reply(m.chat, `･ 【 *REVISIÓN DE INACTIVOS* 】 ･\n\n» 👥 Grupo: ${groupMetadata.subject}\n» 📨 Miembros: ${sum} Total\n\nManténgase activo en el grupo porque habrá limpieza de miembros todo el tiempo.\n\n*👻〝  Lista de Fantasmas 〞👻*\n\n${sider.map(v => '- @' + v.replace(/@.+/, '')).join('\n')}\n\n👻 Fantasmas: ${total} Total`, m,{ contextInfo: { mentionedJid: sider } })
}
handler.help = ['sider']
handler.tags = ['group']
handler.command = /^(sider|fantasmas)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = true
handler.fail = null
module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
