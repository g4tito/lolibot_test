let fs = require ('fs')
let handler = async (m, { conn, text }) => {
	let tumb = fs.readFileSync('./src/menu2.jpg')
    let list = await conn.prepareMessageFromContent(m.chat, {
    "listMessage": {
      "title": "TEST PRODUCT",
      "description": "Test",
      "buttonText": "",
      "listType": "PRODUCT_LIST",
      "productListInfo": {
        "productSections": [
          {
            "title": "Test_2",
            "products": [
              {
                 "productId": "4120139628109348"
              },
              {
              	"productId": "6431678466857362"
              },
              {
              	"productId": "4392524570816732"
              }
            ]
          }
        ],
        "headerImage": {
          "productId": "4120139628109348",
          "productId": "6431678466857362",
          "productId": "4392524570816732",
          "jpegThumbnail": tumb
        },
        "businessOwnerJid": "51940617554@s.whatsapp.net"
      },
      "footerText": "\nPowered by Gatito"
    }
  }, {quoted: m })
  conn.relayWAMessage(list, { waitForAck: true })
}

handler.customPrefix = /Test/i
handler.command = new RegExp

handler.fail = null
module.exports = handler
