const postDate = (date) => {
    const postDate = new Date(date)
    let formatedDate = postDate.getDate()
    formatedDate += '.'
    formatedDate += postDate.getMonth()
    formatedDate += '.'
    formatedDate += postDate.getFullYear()
    formatedDate += ' - '
    formatedDate += postDate.getHours()
    formatedDate += ':'
    formatedDate += postDate.getMinutes()
    return formatedDate
}

export default { postDate }

