export const parseMessage = (msg) => {
    const encodedMessage = JSON.parse(msg).payload
    const messageId = JSON.parse(msg).messageId
    const decodedMessage = atob(encodedMessage)

    if (decodedMessage.length === 0) {
        return { newData: {}, messageId }
    }
    const newData = JSON.parse(decodedMessage)
    return { newData, messageId }
}

export const sleep = async (timeInMilliseconds) => {
    await new Promise((r) => setTimeout(r, timeInMilliseconds))
}
