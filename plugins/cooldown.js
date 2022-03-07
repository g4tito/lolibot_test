const cooldowns = {
    lastadventure: {
        name: 'adventure',
        cooldown: require('./adventure').cooldown
    },
    lastclaim: {
        name: 'claim',
        cooldown: require('./daily').cooldown
    },
    lastweekly: {
        name: 'weekly',
        cooldown: require('./weekly').cooldown
    },
    lastmonthly: {
        name: 'monthly',
        cooldown: require('./monthly').cooldown
    }
}
let handler = async (m, { conn, usedPrefix }) => {
    const user = global.DATABASE._data.users[m.sender]
    let str = `
*—「 🕖 Cooldown 」—*
${Object.entries(cooldowns).map(([d, { name, cooldown }]) => `*Próximo ${name}:* ${new Date() - user[d] >= cooldown ? '✅' : '❌'}`).join('\n')}
`.trim()
    conn.sendButton(m.chat, str, `Lolibot- OFC`, null, [
        ['Inventario 🎒', usedPrefix + 'inv'],
        ['Perfil 👤', usedPrefix + 'profile']
    ], { quoted: m })
}
handler.help = ['cd', 'cooldown']
handler.tags = ['rpg']
handler.command = /^(cd|cooldown)$/i
module.exports = handler
