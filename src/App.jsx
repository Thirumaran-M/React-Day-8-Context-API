import { useState, createContext, useContext } from 'react'
import './App.css'
//import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Card from './Card';

export const shopCtx = createContext(null);

function App() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [data, setData] = useState({
    "products": [
      {
        "id": 1,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "quantity": 1,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        "images": [
          "https://i.dummyjson.com/data/products/1/1.jpg",
          "https://i.dummyjson.com/data/products/1/2.jpg",
          "https://i.dummyjson.com/data/products/1/3.jpg",
          "https://i.dummyjson.com/data/products/1/4.jpg",
          "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        ]
      },
      {
        "id": 2,
        "title": "iPhone X",
        "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        "price": 899,
        "discountPercentage": 17.94,
        "rating": 4.44,
        "stock": 34,
        "quantity": 1,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        "images": [
          "https://i.dummyjson.com/data/products/2/1.jpg",
          "https://i.dummyjson.com/data/products/2/2.jpg",
          "https://i.dummyjson.com/data/products/2/3.jpg",
          "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
        ]
      },
      {
        "id": 3,
        "title": "Samsung Universe 9",
        "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
        "price": 1249,
        "discountPercentage": 15.46,
        "rating": 4.09,
        "stock": 36,
        "quantity": 1,
        "brand": "Samsung",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
        "images": [
          "https://i.dummyjson.com/data/products/3/1.jpg"
        ]
      },
      {
        "id": 4,
        "title": "OPPOF19",
        "description": "OPPO F19 is officially announced on April 2021.",
        "price": 280,
        "discountPercentage": 17.91,
        "rating": 4.3,
        "stock": 123,
        "quantity": 1,
        "brand": "OPPO",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
        "images": [
          "https://i.dummyjson.com/data/products/4/1.jpg",
          "https://i.dummyjson.com/data/products/4/2.jpg",
          "https://i.dummyjson.com/data/products/4/3.jpg",
          "https://i.dummyjson.com/data/products/4/4.jpg",
          "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
        ]
      },
      {
        "id": 5,
        "title": "Huawei P30",
        "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        "price": 499,
        "discountPercentage": 10.58,
        "rating": 4.09,
        "stock": 32,
        "quantity": 1,
        "brand": "Huawei",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
        "images": [
          "https://i.dummyjson.com/data/products/5/1.jpg",
          "https://i.dummyjson.com/data/products/5/2.jpg",
          "https://i.dummyjson.com/data/products/5/3.jpg"
        ]
      }
    ]
  });



  const addQty = (item) => {
    setData({
      ...data,
      products: data.products.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      )
    });
  }

  const removeQty = (item) => {
    setData({
      ...data,
      products: data.products.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity > 1 ? i.quantity - 1 : i.quantity } : i
      )
    });
  }
  

  const removeItem = (item) => {
    setData({
      ...data,
      products: data.products.filter((i) => i.id !== item.id)
    });
  }

  const getTotalItems = () => {
    return data.products.length;
  }

  const getTotalQuantity = () => {
    return data.products.reduce((total, product) => total + product.quantity, 0);
  }

  const getTotalAmount = () => {
    return data.products.reduce((total, product) => total + (product.price * product.quantity), 0);
  }

  return (
    <>
      <div className="card">
        <div className="row">
          <div className="col-md-8 cart">
            <div className="title">
              <div className="row">
                <div className="col"><h4><b>Shopping Cart</b></h4></div>
                <div className="col align-self-center text-right text-muted">{getTotalItems()} items</div>
              </div>
            </div>
            {data.products.map((ele, index) => {
              return (
                <shopCtx.Provider value={{ addQty, removeQty, removeItem, ele }}>
                  <Card index={index} />
                </shopCtx.Provider>
              )
            })}
            <div className="back-to-shop"><a href="#">&larr;</a><span className="text-muted">Back to shop</span></div>
          </div>
          <div className="col-md-4 summary">
            <div><h5><b>Summary</b></h5></div>
            <hr />
            <div className="row">
              <div className="col" style={{ paddingLeft: 0 }}>TOTAL UNITS {getTotalQuantity()}</div>
              <div className="col text-right">&euro; {getTotalAmount()}</div>
            </div>
            <form>
              <p>SHIPPING</p>
              <select><option className="text-muted">Free-Delivery</option></select>
            </form>
            <div className="row" style={{ borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0' }}>
              <div className="col">TOTAL PRICE</div>
              <div className="col text-right">&euro; {getTotalAmount()}</div>
            </div>
            <button className="btn">CHECKOUT</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
