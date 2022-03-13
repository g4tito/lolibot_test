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
*RESULTADO NRO ${1 + index}*. 

*• 📦 Link:* ${repo.html_url}
*• 🏵️ Creador:* ${repo.owner.login}
*• 🐣 Nombre:* ${repo.name}
*• 📅 Creado el:* ${formatDate(repo.created_at)}
*• ⏰ Última actualización:* ${formatDate(repo.updated_at)}
*• 👁 Visitas:* ${repo.watchers}
*• 🍴 Bifurcado:* ${repo.forks}
*• ⭐ Estrellas:* ${repo.stargazers_count}
*• 🧩 Issues:* ${repo.open_issues}
*• 🎐 Descripción:* ${repo.description ? `${repo.description}` : 'Sin Descripción'}
*• ♻️ Clone:* ${repo.clone_url}
`.trim()
    }).join('\n\n')
conn.sendMessage(m.chat, await (await fetch(json.items[0].owner.avatar_url)).buffer(), MessageType.image, { quoted: m, caption: str })
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
      year: 'numeric'
    })
  }
