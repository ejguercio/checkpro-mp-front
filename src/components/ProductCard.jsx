import { useState } from "react";

const ProductCard=(product)=>{
    const [quantity, setQuantity] = useState(1);
    const quantityIncrement = () => product.stock > quantity
        ? setQuantity(quantity + 1)
        : null;
    const quantityDecrement = () => quantity > 1
        ? setQuantity(quantity - 1)
        : null;

        const checkout = () => {
            const url = "https://checkpro-mp-back.vercel.app/payment/create-order";
            const data = {
              ...product,
              quantity
            };
          
            fetch(url, {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(data)
            })
              .then(response => response.json())
              .then(response => {
                window.location.href=response.response.init_point
              })
              .catch(error => console.log({ error: error.message }));
          };

    return (
                <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a className="block relative h-80 rounded overflow-hidden">
                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={product.image}/>
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{`$${product.price}`}</h3>
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{`Stock: ${product.stock}`}</h3>
                    <h2 className="text-white title-font text-lg font-medium">{product.title}</h2>
                    <p className="mt-1">{product.description}</p>
                  </div>
                  <div className="flex justify-evenly">
                    <h4>Cantidad: {quantity}</h4>
                    <button onClick={quantityDecrement}>-</button>
                    <button onClick={quantityIncrement}>+</button>
                    <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                    onClick={checkout}
                    >              
                      Pagar Compra
                    </button>
                  </div>
                </div>   
    )
}

export default ProductCard;
