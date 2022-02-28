let isOnline = require('is-online');

 let handler  = async (m, { command, conn, text }) => {

(async () => {
	let net = await isOnline()
})();
m.reply(`${net}`)
}
handler.help = ['internet']
handler.tags = ['info']

handler.command = /^(internet)$/i

module.exports = handler