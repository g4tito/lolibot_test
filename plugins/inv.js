let fs = require('fs')
let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => {
    let healt = global.DATABASE._data.users[m.sender].healt
    let armor = global.DATABASE._data.users[m.sender].armor
    let warn = global.DATABASE._data.users[m.sender].warn
    let pet = global.DATABASE._data.users[m.sender].pet
    let kucing = global.DATABASE._data.users[m.sender].kucing
    let _kucing = global.DATABASE._data.users[m.sender].anakkucing
    let rubah = global.DATABASE._data.users[m.sender].rubah
    let _rubah = global.DATABASE._data.users[m.sender].anakrubah
    let kuda = global.DATABASE._data.users[m.sender].kuda
    let _kuda = global.DATABASE._data.users[m.sender].anakkuda
    let diamond = global.DATABASE._data.users[m.sender].diamond
    let potion = global.DATABASE._data.users[m.sender].potion
    let common = global.DATABASE._data.users[m.sender].common
    let makananpet = global.DATABASE._data.users[m.sender].makananpet
    let uncommon = global.DATABASE._data.users[m.sender].uncommon
    let mythic = global.DATABASE._data.users[m.sender].mythic
    let legendary = global.DATABASE._data.users[m.sender].legendary
    let level = global.DATABASE._data.users[m.sender].level
    let money = global.DATABASE._data.users[m.sender].money
    let exp = global.DATABASE._data.users[m.sender].exp
    let sampah = global.DATABASE._data.users[m.sender].sampah
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let math = max - xp
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]
    let sortedmoney = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].money - a[1].money)
    let sortedlevel = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].level - a[1].level)
    let sorteddiamond = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].diamond - a[1].diamond)
    let sortedpotion = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].potion - a[1].potion)
    let sortedsampah = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].sampah - a[1].sampah)
    let sortedcommon = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].common - a[1].common)
    let sorteduncommon = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].uncommon - a[1].uncommon)
    let sortedmythic = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].mythic - a[1].mythic)
    let sortedlegendary = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].legendary - a[1].legendary)
    let usersmoney = sortedmoney.map(v => v[0])
    let usersdiamond = sorteddiamond.map(v => v[0])
    let userspotion = sortedpotion.map(v => v[0])
    let userssampah = sortedsampah.map(v => v[0])
    let userslevel = sortedlevel.map(v => v[0])
    let userscommon = sortedcommon.map(v => v[0])
    let usersuncommon = sorteduncommon.map(v => v[0])
    let usersmythic = sortedmythic.map(v => v[0])
    let userslegendary = sortedlegendary.map(v => v[0])
    let invt = fs.readFileSync('./src/inventario.jpg')
    let str = `
Inventario de *${name.vnmae || name.notify || name.name || ('+' + name.jid.split`@`[0])}*

♥️ Vida: *${healt}*
👕 Armadura: *${armor == 0 ? 'No tiene' : '' || armor == 1 ? 'Armadura de cuero' : '' || armor == 2 ? 'Armadura de hierro' : '' || armor == 3 ? 'Armadura de oro' : '' || armor == 4 ? 'Armadura de diamante' : '' || armor == 5 ? 'Armadura de netherite' : ''}*
💵 Dinero: *${money}*
📈 Nivel: *${level}*
✨ Exp: *${exp}*

*Inventario*
💎 Diamante: *${diamond}*
🧪 Poción: *${potion}*
🗑️ Basura: *${sampah}*
🥫 Alimentos para mascotas: *${makananpet}*
Total inv: *${diamond + potion + sampah + makananpet}* items

${readMore}
*📦 Cajas*
Comun: *${common}*
Normal: *${uncommon}*
Mitico: *${mythic}*
Legendario: *${legendary}*
Mascota: *${pet}*

*Mascotas*
🦊 Zorro: *${rubah == 0 ? 'No tiene' : '' || rubah == 1 ? 'Nivel 1' : '' || rubah == 2 ? 'Nivel 2' : '' || rubah == 3 ? 'Nivel 3' : '' || rubah == 4 ? 'Nivel 4' : '' || rubah == 5 ? 'Nivel maximo' : ''}*
🐺 Lobo: *${kuda == 0 ? 'No tiene' : '' || kuda == 1 ? 'Nivel 1' : '' || kuda == 2 ? 'Nivel 2' : '' || kuda == 3 ? 'Nivel 3' : '' || kuda == 4 ? 'Nivel 4' : '' || kuda == 5 ? 'Nivel maximo' : ''}*
🐱 Gato: *${kucing == 0 ? 'No tiene' : '' || kucing == 1 ? 'Nivel 1' : '' || kucing == 2 ? 'Nivel 2' : '' || kucing == 3 ? 'Nivel 3' : '' || kucing == 4 ? 'Nivel 4' : '' || kucing == 5 ? 'Nivel maximo' : ''}*

*Progreso*

╭────────────────
│Nivel *${level}* al nivel *${level + 1}*
│Exp *${exp}* -> *${max}*
│[${math <= 0 ? `Use *${usedPrefix}levelup* para subir de nivel` : `${math} Exp restante para subir de nivel`}]
╰────────────────
╭────────────────
│🦊 Zorro ${rubah == 0 ? 'No tiene' : '' || rubah > 0 && rubah < 5 ? `Nivel *${rubah}* al nivel *${rubah + 1}*\n│Exp *${_rubah}* -> *${rubah * 100}*` : '' || rubah == 5 ? '*Nivel maximo*' : ''}
╰────────────────
╭────────────────
│🐺 Lobo ${kuda == 0 ? 'No tiene' : '' || kuda > 0 && kuda < 5 ? `Nivel *${kuda}* al nivel *${kuda + 1}*\n│Exp *${_kuda}* -> *${kuda * 100}*` : '' || kuda == 5 ? '*Nivel maximo*' : ''}
╰────────────────
╭────────────────
│🐱 Gato ${kucing == 0 ? 'No tiene' : '' || kucing > 0 && kucing < 5 ? `Nivel *${kucing}* al nivel *${kucing + 1}*\n│Exp *${_kucing}* -> *${kucing * 100}*` : '' || kucing == 5 ? '*Nivel maximo*' : ''}
╰────────────────

*Logros*
1.Top Nivel *${userslevel.indexOf(m.sender) + 1}* de *${userslevel.length}*
2.Top Dinero *${usersmoney.indexOf(m.sender) + 1}* de *${usersmoney.length}*
3.Top Diamante *${usersdiamond.indexOf(m.sender) + 1}* de *${usersdiamond.length}*
4.Top Pocion *${userspotion.indexOf(m.sender) + 1}* de *${userspotion.length}*
5.Top Caja comun *${userscommon.indexOf(m.sender) + 1}* de *${userscommon.length}*
6.Top Caja normal *${usersuncommon.indexOf(m.sender) + 1}* de *${usersuncommon.length}*
7.Top Caja mitico *${usersmythic.indexOf(m.sender) + 1}* de *${usersmythic.length}*
8.Top Caja legendario *${userslegendary.indexOf(m.sender) + 1}* de *${userslegendary.length}*
9.Top Basura *${userssampah.indexOf(m.sender) + 1}* de *${userssampah.length}*

Advertencia: *${warn}*
Baneado: *No*
`.trim()
    conn.reply(m.chat, str, text, { quoted: m, contextInfo: { externalAdReply:{title: `\t\t\t\tINVENTARIO`, previewType:"PHOTO",thumbnail: invt, sourceUrl:``}}})
}
handler.help = ['inventory', 'inv']
handler.tags = ['rpg']
handler.command = /^(inv(entory)?|bal|level(ing)?|money|e?xp)$/i
module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
