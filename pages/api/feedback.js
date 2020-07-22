const axios = require('axios')

const token = process.env.TELEGRAM_BOT_TOKEN
const telegramUserId = process.env.TELEGRAM_USER_ID

function sendMessage(tgToken, chatId, text) {
    const baseUrl = `https://api.telegram.org/bot${tgToken}/sendMessage`
    const params = {chat_id: chatId, text}
    console.log(params)
    return new Promise(resolve => {
        axios
            .get(baseUrl, {params})
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
        note = "Hey there! Simple response!", emotion = null
    } = request.body
    const messageText =
        `Emotion: ${emotion}\nMessage: ${note}`
    sendMessage(token, telegramUserId, messageText).then(
        () => response.status(200).send(`Thank you for your feedback!`))
}