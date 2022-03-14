let R = Math.random
let Fl = Math.floor
let toM = a => '@' + a.split('@')[0]

let handler = async (m, { conn, command, text, groupMetadata }) => {
    let ps = groupMetadata.participants.map(v => v.jid)
    let a = ps[Fl(R() * ps.length)]
    let b
    do b = ps[Fl(R() * ps.length)]
    while (b === a)
    let c
    do c = ps[Fl(R() * ps.length)]
    while (b === a)
    let d
    do d = ps[Fl(R() * ps.length)]
    while (b === a)
    let e
    do e = ps[Fl(R() * ps.length)]
    while (b === a)
    let f
    do f = ps[Fl(R() * ps.length)]
    while (b === a)
    let g
    do g = ps[Fl(R() * ps.length)]
    while (b === a)
    let h
    do h = ps[Fl(R() * ps.length)]
    while (b === a)
    let i
    do i = ps[Fl(R() * ps.length)]
    while (b === a)
    let j
    do j = ps[Fl(R() * ps.length)]
    while (b === a)

var top = 'INDEFINIDO'
       if (command.includes('gay')) {
       top = '🏳‍🌈 TOP 10 GAYS/LESBIANAS DEL GRUPO 🏳‍🌈'
} else if (command.includes('furr@s')) {
       top = '🦊 TOP 10 FURROS/AS DEL GRUPO 🦊'
} else if (command.includes('pajer@s')) {
       top = '💦 TOP 10 PAJEROS/AS DEL GRUPO 💦'
} else if (command.includes('otakus')) {
	   top = '🏵️ TOP 10 OTAKUS DEL GRUPO 🏵️'
} else if (command.includes('lindos')) {
       top = '🤩 TOP 10 LINDOS/AS DEL GRUPO 🤩'
}

let _top = `
*${top}*
    
• 1. ${toM(a)}
• 2. ${toM(b)}
• 3. ${toM(c)}
• 4. ${toM(d)}
• 5. ${toM(e)}
• 6. ${toM(f)}
• 7. ${toM(g)}
• 8. ${toM(h)}
• 9. ${toM(i)}
• 10. ${toM(j)}
`.trim()
m.reply(_top, null, {
        contextInfo: {
            mentionedJid: [a, b, c, d, e, f, g, h, i, j]
        }
    })

}
handler.help = ['gays', 'pajer@s', 'furr@s', 'otakus'].map(v => 'top' + v + '')
handler.tags = ['fun']
handler.command = /^top(gays|pajer@s|furr@s|otakus|lindos)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
