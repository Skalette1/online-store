import '@/shared/ui/productCard/product.css'
import { productCart } from '../../moks/moks'


export const ProductCard = () => {
  return (
    <div className='card-container'> 
        <div className="">
        {productCart.map((item, id) => (
            <ul key={id} className='card'>
                <img src={item.img} alt="" />
                <li>{item.name}</li>
                <span>{item.description}</span>
                <li>{item.price}</li>
                {item.gramms.map((gramm) => (
                    <ul key={gramm.id} className='gramms'>
                        <li>{gramm.gramm1}</li>
                        <li>{gramm.gramm2}</li>
                        <li>{gramm.gramm3}</li>
                        <li>{gramm.gramm4}</li>
                    </ul>
                ))}
            </ul> 
        ))}
        </div>
    </div>
  )
}
