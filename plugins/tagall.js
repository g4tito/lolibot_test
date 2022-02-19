let handler = async(m, { conn, text, participants }) => {
  let teks = `══✪〘 *Mencionar todos* 〙✪══

• *Mensaje:* ${text ? text : '_No hay_'}\n\n`
		      	for (let mem of participants) {
		            teks += `- @${mem.id.split('@')[0]}\n`
				}
                teks += `*Total:* ${participants.length}`
                conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <texto>']
handler.tags = ['group']
handler.command = /^(tagall)$/i

handler.group = true
handler.admin = true

module.exports = handler
