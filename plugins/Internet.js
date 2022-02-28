var internetAvailable = require("internet-available");

 let handler  = async (m, { command, conn, text }) => {
internetAvailable({
    timeout: 5000,
    retries: 5
}).then(() => {
    m.reply("✅ Con internet");
}).catch(() => {
    m.reply("❎ Sin internet");
});

}
handler.help = ['internet']
handler.tags = ['info']

handler.command = /^(internet)$/i

module.exports = handler