let isOnline = require('is-online');

 let handler  = async (m, { command, conn, text }) => {

(async () => {
	console.log(await isOnline());
})();

}
handler.help = ['internet']
handler.tags = ['info']

handler.command = /^(internet)$/i

module.exports = handler