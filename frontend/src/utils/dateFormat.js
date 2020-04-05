const postDate = (date) => {
    const postDate = new Date(date)
    let formatedDate = postDate.getDate()
    formatedDate += '.'
    formatedDate += postDate.getMonth() + 1 // Kuukaudet alkaa nollasta. Siis 0 - 11
    formatedDate += '.'
    formatedDate += postDate.getFullYear()
    formatedDate += ' - '
    formatedDate += postDate.getHours()
    formatedDate += ':'
    if(postDate.getMinutes() < 10) {
        formatedDate += 0
    }
    formatedDate += postDate.getMinutes()
    return formatedDate
}

export default { postDate }

