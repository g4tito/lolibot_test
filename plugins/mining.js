let handler = async (m, { conn, usedPrefix }) => {
	
	let user = global.DATABASE._data.users[m.sender]
	let pickaxe = global.DATABASE._data.users[m.sender].pickaxe
	let pdurability = global.DATABASE._data.users[m.sender].pickaxedurability
    let __waktur = (new Date - global.DATABASE._data.users[m.sender].lastmining)
    let _waktur = (600000 - __waktur)
    let waktur = clockString(_waktur)
    let hasil = (pickaxe == 1 ? Math.floor(Math.random() * 8) : '' || pickaxe == 2 ? Math.floor(Math.random() * 13) : '' || pickaxe == 3 ? Math.floor(Math.random() * 17) : '' || pickaxe == 4 ? Math.floor(Math.random() * 20) : '' || pickaxe == 5 ? Math.floor(Math.random() * 25) : '' )
    let hasiiil = (pickaxe == 1 ? Math.floor(Math.random() * 20) : '' || pickaxe == 2 ? Math.floor(Math.random() * 30) : '' || pickaxe == 3 ? Math.floor(Math.random() * 40) : '' || pickaxe == 4 ? Math.floor(Math.random() * 50) : '' || pickaxe == 5 ? Math.floor(Math.random() * 60) : '' )
    let hasiil = (pickaxe == 1 ? Math.ceil(Math.random() * 500) : '' || pickaxe == 2 ? Math.ceil(Math.random() * 400) : '' || pickaxe == 3 ? Math.ceil(Math.random() * 300) : '' || pickaxe == 4 ? Math.ceil(Math.random() * 250) : '' || pickaxe == 5 ? Math.ceil(Math.random() * 200) : '' )
    let konz = Math.floor(Math.random() * 100)
    let goa = (pickRandom(['una cueva', 'un volcan', 'jupiter', 'saturno']))
    let selesai = (pickRandom(['huuh', 'Selesai Juga', 'Kayaknya Sampah', 'Kayaknya Bagus', 'Perlu Upgrade pickaxe nih biar hasilnya bagus', 'Trash!', 'GG', 'Banyak Batu doang', 'Iron nya dikit', 'Diamond nya dikit', 'Bjir banyak Diamond', 'Bjir banyak Iron']))
     
    if (pickaxe > 0) {
    if (global.DATABASE._data.users[m.sender].pickaxedurability > 99) {
    if (new Date - global.DATABASE._data.users[m.sender].lastmining > 600000) {
       
global.DATABASE._data.users[m.sender].lastmining = new Date * 1
global.DATABASE._data.users[m.sender].diamond += hasil * 1 
global.DATABASE._data.users[m.sender].iron += hasiiil * 1 
global.DATABASE._data.users[m.sender].batu += hasiil * 1 
global.DATABASE._data.users[m.sender].pickaxedurability -= konz * 1

          setTimeout(() => {
          	m.reply(`Minaste en ${goa} y obtienes:
          
- Diamante: ${hasil}
- Hiero: ${hasiiil}
- Piedra: ${hasiil}`)
          }, 0)
          
            } else m.reply(`Te quedaste sin energía vuelve dentro de *${waktur}* minutos`)
         } else m.reply(`Sube el nivel a tu pico, escribiendo ${usedPrefix}shop buy pico`)
     } else m.reply(`Todavía no tienes un pico, compralo escribiendo ${usedPrefix}shop buy pico`)
 }

handler.help = ['mining']
handler.tags = ['rpg']

handler.command = /^(mining|minar)$/i
handler.disabled = false

module.exports = handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}