
export default function getData ( type, page = 1 ) {
    const url = `${process.env.VUE_APP_API_URL}${type}?page=${page}`
    return fetch(url)
        .then( res =>  res.json())
        .then( data => {
            const { results, count } = data
            return { results, count }
        })
}