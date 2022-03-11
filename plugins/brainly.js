const brainly = require('brainly-scraper-v2')
let handler = async function (m, { text }) {
  if (!text) throw 'Soalnya?'
  let res = await brainly(text)
  let answer = res.data.map((v, i) => `_*PREGUNTA ${i + 1}*_\n${v.pertanyaan}\n${v.jawaban.map((v,i) => `*RESPUESTA ${i + 1}*\n${v.text}`).join('\n')}`).join('\n\n────────────────\n\n')
  m.reply(answer)
}
handler.help = ['brainly']
handler.tags = ['internet']

handler.command = /^(brainly)$/i

module.exports = handler
