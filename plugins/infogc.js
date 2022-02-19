let handler = async (m, { conn, participants, groupMetadata, text }) => {

    const getGroupAdmins = (participants) => {
        admins = []
        for (let i of participants) {
            i.isAdmin ? admins.push(i.jid) : ''
        }
        return admins
    }

    let pp = './src/avatar_contact.png'
    try {
        pp = await conn.getProfilePicture(m.chat)
    } catch (e) {
    } finally {
        let { isBanned, welcome, detect, antiToxic, sWelcome, sBye, sPromote, sDemote, antiLink, expired, descUpdate } = global.DATABASE._data.chats[m.chat]
        let Delete = global.DATABASE._data.chats[m.chat].delete
        const groupAdmins = getGroupAdmins(participants)
        let listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.split`@`[0]}`).join('\n')

        if (text) return m.reply(msToDate(expired - new Date() * 1))

        let caption = `— *INFORMACION DEL GRUPO* —\n
• *ID:* 
${groupMetadata.id}

• *Nombre:* 
${groupMetadata.subject}

• *Descripción:* 
${groupMetadata.desc}

• *Miembros:*
${participants.length} total

• *Creador:* 
@${m.chat.split`-`[0]}

• *Administradores/as:*
${listAdmin}

• *Configuración:*
${isBanned ? '✅' : '❌'} - Baneado
${welcome ? '✅' : '❌'} - Bienvenida
${detect ? '✅' : '❌'} - Detect
${Delete ? '❌' : '✅'} - Delete
${antiLink ? '✅' : '❌'} - Anti Link
${antiToxic ? '✅' : '❌'} - Anti Toxic

• *Configuración de mensaje:*
- Bienvenida: ${sWelcome}
- Despedida: ${sBye}
- Promote: ${sPromote}
- Demote: ${sDemote}

*left:*
${msToDate(expired - new Date() * 1)}
`.trim()
        let mentionedJid = groupAdmins.concat([`${m.chat.split`-`[0]}@s.whatsapp.net`])
        conn.sendFile(m.key.remoteJid, pp, 'pp.jpg', caption, m, 0, { contextInfo: { mentionedJid } })
    }
}
handler.help = ['infogroup']
handler.tags = ['group']
handler.command = /^(gro?upinfo|info(gro?up|gc))$/i

handler.group = true

module.exports = handler

function msToDate(ms) {
    temp = ms
    days = Math.floor(ms / (24 * 60 * 60 * 1000));
    daysms = ms % (24 * 60 * 60 * 1000);
    hours = Math.floor((daysms) / (60 * 60 * 1000));
    hoursms = ms % (60 * 60 * 1000);
    minutes = Math.floor((hoursms) / (60 * 1000));
    minutesms = ms % (60 * 1000);
    sec = Math.floor((minutesms) / (1000));
    return days + " Dias " + hours + " Horas " + minutes + " minutos";
    // +minutes+":"+sec;
}