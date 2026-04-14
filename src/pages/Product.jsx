import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';

const Product = () => {
  const {productId} = useParams();
  const {products,currency} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image,setImage] = useState('');
  const [size, setSize] = useState('');


  const fetchProductData = async ()=>{
    products.map((item)=>{
      if(item._id === productId){
        setProductData(item);
        setImage(item.image[0]);
        return null;
      } 
    })
  }

  useEffect(()=>{
    fetchProductData();

  }, [productId])




  return productData ?(
    <div className='border-t-2 pt-10  transition-opacity ease-in duration-500 opacity-100'>
      {/* Product Data */}
      <div className='flex gap-12 flex-col sm:flex-row'>

        {/* Product Images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item,index)=>(
                <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img src={image} className='w-full h-auto' alt="" />
          </div>
        </div>
        {/* Product Information */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img className='w-3 5' src={assets.star_icon} alt="" />
            <img className='w-3 5' src={assets.star_icon} alt="" />
            <img className='w-3 5' src={assets.star_icon} alt="" />
            <img className='w-3 5' src={assets.star_icon} alt="" />
            <img className='w-3 5' src={assets.star_dull_icon} alt="" />
            <p className='pl-2'>(122)</p>

          </div>
          <p className='mt-5 text-2xl font-medium' >{currency} {productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className='flex gap-2'>
              {
                productData.sizes.map((item,index)=>(
                  <button onClick={()=>setSize(item)} key={index} className={`cursor-pointer border-none py-2 px-4 ${item === size ? "bg-gray-300 text-black" :" "}`}>{item}</button>  
                ))
              }
            </div>
          </div>
          <button className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original Product</p>
            <p>Cash on Delivery is available for this product</p>
            <p>Easy Retrun Exchange Policy within 48 hrs</p>
          </div>
        </div>
      </div>
      {/* {Description and review Section } */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border py-3 px-5 text-sm'>Description</b>
          <p className='border py-3 px-5 text-sm'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border py-4 px-6 text-sm text-gray-500'>
          <p className='px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat perferendis dolorem possimus recusandae excepturi! Rem iusto amet voluptas vero quia quae magni, voluptates voluptate illum molestias vel, provident possimus. Pariatur voluptatibus ex ipsum quas facere alias esse amet, cumque non possimus. Aut earum rerum reiciendis explicabo labore optio suscipit neque minima totam voluptate, eius mollitia corporis placeat iure laboriosam et minus tempora exercitationem ratione. Maxime temporibus dolore veritatis esse a maiores, incidunt culpa ex mollitia quidem amet! Perspiciatis molestias unde, quasi assumenda expedita magnam veniam? Nobis numquam explicabo deleniti, totam ipsam architecto molestiae quod vitae, assumenda, quo tenetur tempore doloribus.</p>
          <p className='px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore unde magnam odio, laborum asperiores animi mollitia minima praesentium, hic quaerat aliquid repudiandae accusantium nemo. Laudantium natus repellat rem saepe et nam architecto modi labore, tempora necessitatibus velit. Et commodi magnam dolorem sapiente! Consequuntur, nam dolorum! Accusantium totam sit vitae, quae ipsum expedita odit modi iusto placeat veniam nihil esse necessitatibus odio non! Labore, ipsa inventore? Vero perspiciatis reprehenderit blanditiis itaque recusandae quibusdam pariatur doloribus voluptatem numquam sunt odit, aliquam harum, corrupti porro, labore temporibus laboriosam ipsum aut non impedit consequuntur fuga amet! Fugiat fugit ipsum quis sequi nisi aliquam optio.</p>
        </div>
      </div>
      {/* Display Related Products */}
      
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product
