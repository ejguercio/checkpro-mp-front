import { useEffect, useState } from "react"
import fetchData from "../utils/fetchData.js"

const Home= ()=>{
    const [products, setProducts]=useState([])
  
  useEffect(()=>{
    fetchData(setProducts)
  },[])

    return (<>
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {
            products.map((product)=>{

              return(<>
                <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-80 rounded overflow-hidden">
                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={product.image}/>
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product.condition}</h3>
                    <h2 className="text-white title-font text-lg font-medium">{product.title}</h2>
                    <p className="mt-1">{product.description}</p>
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
