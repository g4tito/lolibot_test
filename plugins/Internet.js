let isOnline = require('is-online');

 let handler  = async (m, { command, conn, text }) => {

isOnline().then(online => {
    if (online) {
        m.reply('📶 Internet: Con conexión')
    } else {
        m.reply('📶 Internet: Sin conexión')
    }
});


}
handler.help = ['internet']
handler.tags = ['info']

handler.command = /^(internet)$/i

handler.internet = true

module.exports = handler