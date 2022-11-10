import React, {useState} from 'react'
import './Product.css'
import Plane from '../../assets/plane.png'
import {ProductsData} from '../../data/products'
import { useAutoAnimate } from '@formkit/auto-animate/react'

const Product = () => {
  const [menuProduct, setMenuProduct] = useState(ProductsData)

  const {parent} = useAutoAnimate()

  const filter = (type) => {
    setMenuProduct(ProductsData.filter((product) => product.type === type))
  }
  return (
    <div className="product flex flex-col items-center justify-center gap-8 py-0 px-8">
      <div className="product-top">

        <img className='absolute w-32 left-96 -top-20' src={Plane} alt="plane" />
        <span className='block font-bold text-3xl'>Our Feature Products</span>
    </div>

    <div className="products">
      <ul className="product-menu flex flex-col gap-8 font-medium text-xl cursor-pointer">
        <li onClick={()=>setMenuProduct(ProductsData)}>All</li>
        <li onClick={()=>filter("skin care")}>Skin Care</li>
        <li onClick={()=>filter("conditioner")}>Conditioners</li>
        <li onClick={()=>filter("foundation")}>Foundations</li>
      </ul>
    

      <div className="product-list grid grid-cols-auto-fill gap-6 h-96 overflow-y-scroll" ref={parent}>
        {
          menuProduct.map((products, i) => {
            return(
              <div className="productslist">

              <div className="p-right flex flex-col justify-between">
                    <div className="p-name flex flex-col gap-2">
                        <span className='text-xl font-semibold'>{products.name}</span>
                        <span className='text-xs'>{products.detail}</span>
                        <span className='font-semibold text-3xl'>{products.price}$</span>

                        <a className='border rounded-2xl border-black px-2 py-1 h-6 w-20 text-xs text-center' href="http://">Shop Now</a>
                    </div>

                    <img className='absolute left-40 bottom-0 top-12 block -rotate-12 w-20 h-36' src={products.img} alt="product" />
              </div>
              </div>
            )
          })
        }
      </div>
      </div>
    </div>
  )
}

export default Product