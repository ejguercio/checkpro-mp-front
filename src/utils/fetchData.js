const URL_BASE = "http://localhost:8000/"
const fetchData = async (setBooks) => {
    try {
        const response = await fetch(`https://checkpro-mp-back.vercel.app/products`)
        if (!response.ok) throw Error(`Error: ${response.statusText}`)
        const data = await response.json()
        console.log(data)
        setBooks(data)

    } catch (error) {
        console.error(error.message)
    }
}
export default fetchData
