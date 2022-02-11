let handler = m => m

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
handler.before = async function (m, { user, isBotAdmin, isAdmin }) {
  if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink && isGroupLink) {
    await m.reply(`*──「 WhatsApp enlace detectado 」──*\n\nHola ${await this.getName(m.sender)} los enlaces no son permitidos adiós`)
    if (isAdmin) return m.reply('Menos mal que eres un administrador -_-')
    if (!isBotAdmin) return m.reply('Menos mal que no soy administradora')
    let linkGC = ('https://chat.whatsapp.com/' + await this.groupInviteCode(m.chat))
    let isLinkThisGc = new RegExp(linkGC, 'i')
    let isgclink = isLinkThisGc.test(m.text)
    if (isgclink) return m.reply('Menos mal que este enlace es del grupo :v')
    await this.groupRemove(m.chat, [m.sender])
  }
  return true
}

module.exports = handler
