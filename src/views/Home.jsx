import { useEffect, useState } from "react"
import fetchData from "../utils/fetchData.js"

const Home= ()=>{
    const [books, setBooks]=useState([])
  
  useEffect(()=>{
    fetchData(setBooks)

  },[])

    return (<>
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {
            books.map((book)=>{

              return(<>
                <div key={books.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://res.cloudinary.com/dmkejs4bh/image/upload/v1702438733/maxresdefault_iqz3ue.jpg"/>
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{book.author}</h3>
                    <h2 className="text-white title-font text-lg font-medium">{book.name}</h2>
                    <p className="mt-1">{book.description}</p>
                  </div>
                </div>   
                  </>)
            })
          }
        </div>
      </div>
    </section>
    </>)
}

export default Home;
