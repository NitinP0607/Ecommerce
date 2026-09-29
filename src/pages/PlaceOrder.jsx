import React, { use, useState } from "react";
import Title from "../components/Title";
import CartTotal from "./../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import { useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
    const { navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, deliveryFee, products } = useContext(ShopContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onchangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((data) => ({ ...data, [name]: value }));
  };


  const onsubmitHandler = async(event)=>{
    event.preventDefault()
    try {
      let orderItems= []
      for (const items in cartItems){
        for (const item in cartItems[items]){
          if(cartItems[items][item]>0){
            const itemInfo = structuredClone(products.find(product=> product._id===items))
            if(itemInfo){
              itemInfo.size = item
              itemInfo.quantity = cartItems[items][item]
              orderItems.push(itemInfo)
            }
          }
        }
      }

      let orderData = {
        address:formData,
        items:orderItems,
        amount:getCartAmount() + deliveryFee
      }
      switch(method){
        //API CALLS for COD
        case 'cod':
          const response = await axios.post(backendUrl + '/api/order/place', orderData, {headers:{token}})
          console.log(response.data)
          if(response.data.success){
            setCartItems({})
            toast.success('Order Placed')
            navigate('/orders')
          }
          else{
            toast.error(response.data.message)
          }
          break;

          default:
            break;
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={onsubmitHandler} className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 minh-[80vh]">
      {/* Left Side */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            onChange={onchangeHandler}
            name="firstName"
            value={formData.firstName}
            type="text"
            required
            placeholder="First Name"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
          <input
            onChange={onchangeHandler}
            name="lastName"
            value={formData.lastName}
            type="text"
            placeholder="Last Name"
            required
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
        </div>
        <input
          onChange={onchangeHandler}
          name="email"
          value={formData.email}
          type="Email"
          placeholder="Email Address"
          required
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
        />
        <input
          onChange={onchangeHandler}
          name="street"
          value={formData.street}
          type="text"
          placeholder="Street"
          required
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
        />
        <div className="flex gap-3">
          <input
            onChange={onchangeHandler}
            name="city"
            value={formData.city}
            type="text"
            placeholder="City"
            required
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
          <input
            onChange={onchangeHandler}
            name="state"
            value={formData.state}
            type="text"
            placeholder="State"
            required
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
        </div>
        <div className="flex gap-3">
          <input
            onChange={onchangeHandler}
            name="zipcode"
            value={formData.zipcode}
            type="number"
            placeholder="Zipcode"
            required
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
          <input
            onChange={onchangeHandler}
            name="country"
            value={formData.country}
            type="text"
            placeholder="Country"
            required
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
        </div>
        <input
          onChange={onchangeHandler}
          name="phone"
          value={formData.phone}
          type="number"
          placeholder="Phone"
          required
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
        />
      </div>

      {/* Right Side */}

      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          {/* Payment Method Selection */}
          <div className="flex gap-3 flex-col lg:flex-row">
            <div
              onClick={() => setMethod("stripe")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${method === "stripe" ? "bg-green-400" : ""}`}
              ></p>
              <img src={assets.stripe_logo} className="h-5 mx-4" alt="" />
            </div>
            <div
              onClick={() => setMethod("razorpay")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${method === "razorpay" ? "bg-green-400" : ""}`}
              ></p>
              <img src={assets.razorpay_logo} className="h-5 mx-4" alt="" />
            </div>
            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${method === "cod" ? "bg-green-400" : ""}`}
              ></p>
              <p className="text-gray-500 text-sm font-medium mx-4">
                Cash on Delivery
              </p>
            </div>
          </div>

          <div className="w-full text-end mt-8">
            <button type="submit"
              
              className="bg-black text-white py-3 px-16 text-sm cursor-pointer"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
