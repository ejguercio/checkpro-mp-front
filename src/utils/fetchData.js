const fetchData = async (setBooks) => {
    try {
        const response = await fetch("http://localhost:8000/books")
        if (!response.ok) throw Error(`Error: ${response.statusText}`)
        const data = await response.json()
        console.log(data)
        setBooks(data)

    } catch (error) {
        console.error(error)
    }
}
export default fetchData
