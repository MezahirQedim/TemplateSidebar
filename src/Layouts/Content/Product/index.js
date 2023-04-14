import React from "react";
import Info from "./Info";
import { Link, Route, Routes } from "react-router-dom";

const Product = () => {
  const [product, setProduct] = React.useState([]);
  // const [id, setId] = React.useState(1)
  const [show, setShow] = React.useState(false)
  const [productInfo, setProductInfo] = React.useState({})

  // React.useEffect(() => {
  //   fetch("https://fakestoreapi.com/products/")


  //   .then(
  //     (res) => res.json()
  //   )
  //   .then(product => console.log(product))
  // }, []);

  const requestEmpolyee = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    if (res.ok && res.status === 200) {
      const data = await res.json();
      setProduct(data);
    }
  };




  const ProductInfo = async (id) => {
    setShow(true)
    const link = "https://fakestoreapi.com/products/" + id 
    const res = await fetch(link);
    if (res.ok && res.status === 200) {
      const data = await res.json();
       console.log("========", data)
       setProductInfo(data)
    }

  }


  console.log(productInfo)




  React.useEffect(() => {
    requestEmpolyee();
  }, []);



  return (
    <div>
      {/* <Routes>
        <Route  path="/product/info" element={<Info  show={show}  setShow={setShow} id={id}/>} />

      </Routes> */}

      
      <Info  show={show}   setShow={setShow} />

      <div class="row m-2">
      {product.map((item, index) => (
        <div class="col-4">
          <div class="card">
            <div className="card_img">
              	<img src={item.image} class="card-img-top" alt="..."/>
            </div>
            <div class="card-body">
              <h5 class="card-title">Product</h5>
              <p class="card-text">
                {item.title}
              </p>
              <button 
                className="btn btn-primary" 
                // onClick={() => {
                //   setId(item.id)
                //   setShow(true)
                //   }}

                onClick={() => ProductInfo(item.id)}
                  
                >
                  Info

              </button>
            </div>
          </div>
        </div>
      ))}
    </div>

    </div>
    
  );
};

export default Product;
