const axios = require('axios')

const token = process.env.TELEGRAM_BOT_TOKEN
const telegramUserId = process.env.TELEGRAM_USER_ID

function sendMessage(botToken, chatId, text) {
    const baseUrl = `https://api.telegram.org/bot${botToken}/sendMessage`
    return new Promise(resolve => {
        axios
            .get(baseUrl, {chat_id: chatId, text})
            .then(resp => {
                console.log(resp.data)
                resolve()
            })
            .catch(e => {
                console.error('Telegram error', e.response.data)
                resolve()
                })
        }
    )
}

module.exports = (request, response) => {
    const {
        phone = "Hey there! Simple response!"
    } = request.body
    console.log(request.body)
    const messageText = `Phone: ${phone}`
    console.log(messageText)
    sendMessage(token, telegramUserId, messageText).then(
        () => response.status(200).send(`Thank you for your feedback!`))
}