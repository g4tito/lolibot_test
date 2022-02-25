let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*Introdusca un prefijo*\n\n- Ejemplo: ${usedPrefix + command} #`
  global.prefix = new RegExp('^[' + (text || global.opts['prefix'] || '‎xzXZ/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')
  await m.reply(`El prefijo se cambio a: *${text}*`)
}
handler.help = ['setprefix']
handler.tags = ['owner']
handler.command = /^(setprefix)$/i

handler.rowner = true

module.exports = handler
