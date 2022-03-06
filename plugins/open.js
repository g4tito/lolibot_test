let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, command, args, text, usedPrefix, DevMode }) => {
  try {
    let bruh = `
*Ingrese la caja & la cantidad*

- Ejemplo: ${usedPrefix + command} comun 7

*Lista de cajas:*

- Comun
- Normal
- Mitico
- Legendario
`.trim()
    let _lmao = args[0]
    let Lmao = `
*Ingrese la cantidad de cajas que quieres abrir*

- Ejemplo: ${usedPrefix + command} comun 7
`.trim()
    let type = (args[0] || '').toLowerCase()
    let jumlah = (args[1] || '').toLowerCase()
    
    switch (type) {
        case 'comun':
            switch (jumlah) {
                    let _cm = `${Math.floor(Math.random() * 50)}`.trim()
                    let _cc = `${Math.floor(Math.random() * 2)}`.trim()
                    let _cp = `${Math.floor(Math.random() * 1)}`.trim()
                    let _ce = `${Math.floor(Math.random() * 100)}`.trim()
                    let _cu = `${Math.floor(Math.random() * 1)}`.trim()
                    let cm = (_cm * jumlah)
                    let cc = (_cc * jumlah)
                    let cp = (_cp * jumlah)
                    let ce = (_ce * jumlah)
                    let cu = (_cu * jumlah)
                    let Hcom = `
Has abierto ${jumlah < 2 ? 'una *Caja comun*' : `${jumlah} *Cajas comunes*`} y obtienes:\n${cm > 0 ? `\n- Dinero: ${cm}` : ''}${ce > 0 ? `\n- Exp: ${ce}` : ''}${cp > 0 ? `\n- Pocion: ${cp}` : ''}${cc > 0 ? `\n- Caja comun: ${cc}` : ''}${cu > 0 ? `\n- Caja normal: ${cu}` : ''}
`.trim()
                    if (global.DATABASE._data.users[m.sender].common >= 1) {
                        global.DATABASE._data.users[m.sender].common -= 1
                        global.DATABASE._data.users[m.sender].money += cm * 1
                        global.DATABASE._data.users[m.sender].exp += ce * 1
                        global.DATABASE._data.users[m.sender].potion += cp * 1
                        global.DATABASE._data.users[m.sender].uncommon += cu * 1
                        global.DATABASE._data.users[m.sender].common += cc * 1
                        conn.reply(m.chat, Hcom, m)
                    } else conn.reply(m.chat, 'No tienes suficiente cajas Comunes', m)
            }
            break
        case 'normal':
            switch (jumlah) {
                    let _ud = `${Math.floor(Math.random() * 2)}`.trim()
                    let _ue = `${Math.floor(Math.random() * 100)}`.trim()
                    let _um = `${Math.floor(Math.random() * 150)}`.trim()
                    let _up = `${Math.floor(Math.random() * 2)}`.trim()
                    let _umc = `${Math.floor(Math.random() * 1)}`.trim()
                    let _uu = `${Math.floor(Math.random() * 2)}`.trim()
                    let _uc = `${Math.floor(Math.random() * 3)}`.trim()
                    let ud = (_ud * jumlah)
                    let ue = (_ue * jumlah)
                    let um = (_um * jumlah)
                    let up = (_up * jumlah)
                    let umc = (_umc * jumlah)
                    let uu = (_uu * jumlah)
                    let uc = (_uc * jumlah)
                    let Hun = `
Has abierto ${jumlah < 2 ? 'una *Caja normal*' : `${jumlah} *Cajas normales*`} y obtienes:\n${um > 0 ? `\n- Dinero: ${um}` : ''}${ue > 0 ? `\n- Exp: ${ue}` : ''}${ud > 0 ? `\n- Diamante: ${ud}` : ''}${up > 0 ? `\n- Pocion: ${up}` : ''}${uc > 0 ? `\n- Caja comun: ${uc}` : ''}${uu > 0 ? `\n- Caja normal: ${uu}` : ''}
`.trim()
                    if (global.DATABASE._data.users[m.sender].uncommon >= 1) {
                        global.DATABASE._data.users[m.sender].uncommon -= 1
                        global.DATABASE._data.users[m.sender].money += um * 1
                        global.DATABASE._data.users[m.sender].diamond += ud * 1
                        global.DATABASE._data.users[m.sender].exp += ue * 1
                        global.DATABASE._data.users[m.sender].potion += up * 1
                        global.DATABASE._data.users[m.sender].common += uc * 1
                        global.DATABASE._data.users[m.sender].uncommon += uu * 1
                        conn.reply(m.chat, Hun, m)
                        if (umc > 0) {
                            m.reply(`*Felicidades obtienes un artículo raro*\n${umc} Caja mitica`)
                            global.DATABASE._data.users[m.sender].mythic += umc * 1
                        }
                    } else conn.reply(m.chat, 'No tienes suficiente cajas Normales', m)
            }
            break
        case 'mitico':
            switch (jumlah) {
             	   let mixx = pickRandom(['1', '0', '1', '0',  '1'])
                    let mizz = pickRandom(['1', '0', '1', '0'])
                    let _mm = `${Math.floor(Math.random() * 200)}`.trim()
                    let _mmm = `${Math.floor(Math.random() * mizz)}`.trim()
                    let _me = `${Math.floor(Math.random() * 250)}`.trim()
                    let _mp = `${Math.floor(Math.random() * 3)}`.trim()
                    let _mu = `${Math.floor(Math.random() * 3)}`.trim()
                    let _mc = `${Math.floor(Math.random() * 5)}`.trim()
                    let _ml = `${Math.floor(Math.random() * mixx)}`.trim()
                    let _md = `${Math.floor(Math.random() * 3)}`.trim()
                    let mm = (_mm * jumlah)
                    let mmm = (_mmm * jumlah)
                    let me = (_me * jumlah)
                    let mp = (_mp * jumlah)
                    let mu = (_mu * jumlah)
                    let mc = (_mc * jumlah)
                    let ml = (_ml * jumlah)
                    let md = (_md * jumlah)
                    let Mychat = `
Has abierto ${jumlah < 2 ? 'una *Caja mitica*' : `${jumlah} *Cajas miticas*`} y obtienes:\n${mm > 0 ? `\n- Dinero: ${mm}` : ''}${me > 0 ? `\n- Exp: ${me}` : ''}${md > 0 ? `\n- Diamante: ${md}` : ''}${mp > 0 ? `\n- Pocion: ${mp}` : ''}${mc > 0 ? `\n- Caja comun: ${mc}` : ''}${mu > 0 ? `\n- Caja normal: ${mu}` : ''}
`.trim()
                    if (global.DATABASE._data.users[m.sender].mythic >= 1) {
                        global.DATABASE._data.users[m.sender].mythic -= 1
                        global.DATABASE._data.users[m.sender].money += mm * 1
                        global.DATABASE._data.users[m.sender].diamond += md * 1
                        global.DATABASE._data.users[m.sender].exp += me * 1
                        global.DATABASE._data.users[m.sender].potion += mp * 1
                        global.DATABASE._data.users[m.sender].common += mc * 1
                        global.DATABASE._data.users[m.sender].uncommon += mu * 1
                        conn.reply(m.chat, Mychat, m)
                        if (mmm > 0) {
                            m.reply(`*Felicidades obtienes un artículo raro*\n${mmm} Caja mitica`)
                            global.DATABASE._data.users[m.sender].mythic += mmm * 1
                        }
                        if (ml > 0) {
                            m.reply(`*Felicidades obtienes un artículo épico*\n${ml} Caja legendaria`)
                            global.DATABASE._data.users[m.sender].legendary += ml * 1
                        }
                    } else conn.reply(m.chat, 'No tienes suficiente cajas Miticas', m)
            }
            break
        case 'legendario':
            switch (jumlah) {
            	    let lexx = pickRandom(['1', '0', '1', '0'])
                    let lezz = pickRandom(['0', '1', '0'])
                    let leyy = pickRandom(['0', '1', '0', '1', '0', '1'])
                    let _lm = `${Math.floor(Math.random() * 450)}`.trim()
                    let _le = `${Math.floor(Math.random() * 550)}`.trim()
                    let _lp = `${Math.floor(Math.random() * 5)}`.trim()
                    let _lu = `${Math.floor(Math.random() * 7)}`.trim()
                    let _lc = `${Math.floor(Math.random() * 10)}`.trim()
                    let _ll = `${Math.floor(Math.random() * lexx)}`.trim()
                    let _lpp = `${Math.floor(Math.random() * lezz)}`.trim()
                    let _ld = `${Math.floor(Math.random() * 5)}`.trim()
                    let _lmm = `${Math.floor(Math.random() * leyy)}`.trim()
                    let lm = (_lm * jumlah)
                    let le = (_le * jumlah)
                    let lp = (_lp * jumlah) 
                    let lu = (_lu * jumlah) 
                    let lc = (_lc * jumlah) 
                    let ll = (_ll * jumlah) 
                    let lpp = (_lpp * jumlah)       
                    let ld = (_ld * jumlah) 
                    let lmm = (_lmm * jumlah)
                    let Lechat = `
Has abierto ${jumlah < 2 ? 'una *Caja legendaria*' : `${jumlah} *Cajas legendarias*`} y obtienes:\n${lm > 0 ? `\n- Dinero: ${lm}` : ''}${le > 0 ? `\n- Exp: ${le}` : ''}${ld > 0 ? `\n- Diamante: ${ld}` : ''}${lp > 0 ? `\n- Pocion: ${lp}` : ''}${lc > 0 ? `\n- Caja comun: ${lc}` : ''}${lu > 0 ? `\n- Caja normal: ${lu}` : ''}
`.trim()  
                    if (global.DATABASE._data.users[m.sender].legendary >= 1) {
                        global.DATABASE._data.users[m.sender].legendary -= 1
                        global.DATABASE._data.users[m.sender].money += lm * 1
                        global.DATABASE._data.users[m.sender].diamond += ld * 1
                        global.DATABASE._data.users[m.sender].exp += le * 1
                        global.DATABASE._data.users[m.sender].potion += lp * 1
                        global.DATABASE._data.users[m.sender].common += lc * 1
                        global.DATABASE._data.users[m.sender].uncommon += lu * 1
                        conn.reply(m.chat, Lechat, m)
                        if (lmm > 0) {
                            m.reply(`*Felicidades obtienes un artículo raro*\n${lmm} Caja mitica`)
                            global.DATABASE._data.users[m.sender].mythic += lmm * 1
                        }
                        if (ll > 0 || lpp > 0) {
                             m.reply(`*Felicidades, obtienes un artículo épico*${ll > 0 ? `\n${ll} Caja legendaria` : ''}${lpp > 0 ? `\n${lpp} Caja de mascotas` : ''}`)
                            global.DATABASE._data.users[m.sender].legendary += ll * 1
                            global.DATABASE._data.users[m.sender].pet += lpp * 1
                        }
                    } else conn.reply(m.chat, 'No tienes suficiente cajas Legendarias', m)
            }
            break
        case 'pet':
            let _mknp = pickRandom([1, 2, 1, 5, 3, 2, 1, 2, 4, 1, 3, 5, 2, 4, 3])
            let mknp = (_mknp * 1)
            let kucing = global.DATABASE._data.users[m.sender].kucing
            let rubah = global.DATABASE._data.users[m.sender].rubah
            let kuda = global.DATABASE._data.users[m.sender].kuda
            let _pet = `${pickRandom(['gato', 'zorro', 'lobo'])}`.trim()
            if (global.DATABASE._data.users[m.sender].pet > 0) { 
                global.DATABASE._data.users[m.sender].pet -= 1
                if (_pet == 'gato' && kucing > 0) {
                    global.DATABASE._data.users[m.sender].potion += 2
                    global.DATABASE._data.users[m.sender].makananpet += mknp * 1
                    conn.reply(m.chat, `Ya tienes un ${_pet} como mascota, tu recompensa se reemplaza con 2 pociones${mknp > 0 ? ` y ${mknp} alimentos para mascotas` : ''}`, m)
                } else if (_pet == 'gato' && kucing == 0) {
                    global.DATABASE._data.users[m.sender].kucing += 1
                    global.DATABASE._data.users[m.sender].makananpet += mknp * 1
                    conn.reply(m.chat, `Felicidades obtienes una mascota ${_pet}${mknp > 0 ? ` y ${mknp} alimento para mascotas` : ''}`, m)
                } else if (_pet == 'zorro' && rubah > 0) {
                    global.DATABASE._data.users[m.sender].potion += 2
                    global.DATABASE._data.users[m.sender].makananpet += mknp * 1
                    conn.reply(m.chat, `Ya tienes un ${_pet} como mascota, tu recompensa se reemplaza con 2 pociones${mknp > 0 ? ` y ${mknp} alimento para mascotas` : ''}`, m)
                } else if (_pet == 'zorro' && rubah == 0) {
                    global.DATABASE._data.users[m.sender].rubah += 1
                    global.DATABASE._data.users[m.sender].makananpet += mknp * 1
                    conn.reply(m.chat, `Felicidades obtienes una mascota pet ${_pet}${mknp > 0 ? ` y ${mknp} alimento para mascotas` : ''}`, m)
                } else if (_pet == 'lobo' && kuda  > 0) {
                    global.DATABASE._data.users[m.sender].potion += 2
                    global.DATABASE._data.users[m.sender].makananpet += mknp * 1
                    conn.reply(m.chat, `Ya tienes un ${_pet} como mascota, tu recompensa se reemplaza con 2 pociones${mknp > 0 ? ` y ${mknp} alimento para mascotas` : ''}`, m)
                } else if (_pet == 'lobo' && kuda == 0) {
                    global.DATABASE._data.users[m.sender].kuda += 1
                    global.DATABASE._data.users[m.sender].makananpet += mknp * 1
                    conn.reply(m.chat, `Felicidades obtienes una mascota ${_pet}${mknp > 0 ? ` y ${mknp} alimento para mascotas` : ''}`, m)
                } else {
                    global.DATABASE._data.users[m.sender].makananpet += mknp * 1
                    m.reply(m.chat, pickRandom(['No tienes suerte, intenta abrir de nuevo', 'En esta caja no hay mascotas']) + '.\nSolo obtienes *' + mknp + '* alimentos para mascotas', m)
                }
            } else m.reply(m.chat, 'No tienes suficientes cajas de mascotas', m)
            break
        default:
            return conn.reply(m.chat, bruh, m)
    }
  } catch (e) {
      console.log(e)
      conn.reply(m.chat, bruh, m)
      if (DevMode) {
        for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
            conn.sendMessage(jid, 'Open.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
        }
    }
  }
}
handler.help = ['open <caja>']
handler.tags = ['rpg']
handler.command = /^(open|buka)$/i

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
