let { MessageType } = require("@adiwajshing/baileys")
let fetch = require('node-fetch')
let handler = async (m, { text }) => {
    if (!text) throw 'Cari apa?'
    let res = await fetch(global.API('https://api.github.com', '/search/repositories', {
        q: text
    }))
    let json = await res.json()
    if (res.status !== 200) throw json
    let str = json.items.map((repo, index) => {
        return `
${1 + index}. *${repo.full_name}*${repo.fork ? ' (fork)' : ''}
_${repo.html_url}_

_Dibuat pada *${formatDate(repo.created_at)}*_
_Terakhir update pada *${formatDate(repo.updated_at)}*_
👁  ${repo.watchers}   🍴  ${repo.forks}   ⭐  ${repo.stargazers_count}
${repo.open_issues} Issue${repo.description ? `
*Deskripsi:*\n${repo.description}` : ''}
*Clone:* \`\`\`$ git clone ${repo.clone_url}\`\`\`
`.trim()
    }).join('\n\n')
//conn.sendMessage(m.chat, await (await fetch("https://avatars.githubusercontent.com/u/84881966?v=0")).buffer(), MessageType.image, { quoted: m, caption: str })
m.reply(`${json.items.map.owner.avatar_url}`)
}
handler.help = ['githubsearch'].map(v => v + '')
handler.tags = ['tools']

handler.command = /^(githubsearch)$/i

module.exports = handler

function formatDate(n, locale = 'es') {
    let d = new Date(n)
    return d.toLocaleDateString(locale, {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
  }
