import React from "react";
import Info from "./Info";
import { Link, Route, Routes } from "react-router-dom";
import { Tooltip, Skeleton } from "antd";

const Product = () => {
  const [product, setProduct] = React.useState([]);
  // const [id, setId] = React.useState(1)
  const [show, setShow] = React.useState(false)
  const [productInfo, setProductInfo] = React.useState({})
  const [loading, setLoading] = React.useState(false)

  // React.useEffect(() => {
  //   fetch("https://fakestoreapi.com/products/")


  //   .then(
  //     (res) => res.json()
  //   )
  //   .then(product => console.log(product))
  // }, []);

  const requestEmpolyee = async () => {
    setLoading(true)
    const res = await fetch("https://fakestoreapi.com/products");
    if (res.ok && res.status === 200) {
      const data = await res.json();
      setProduct(data);
      setLoading(false)
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


      <Info show={show} setShow={setShow} />

      <div class="row m-2">
        {product.map((item, index) => (

          <div class="col-4 p-2">
            
            <div class="card">
              <div className="d-flex justify-content-center w-100 ">
                <div className="card_img d-flex align-items-center" style={{ width: "10rem", height: "12rem" }}>
                  {loading ? <Skeleton.Image active="active" /> 
                    :
                    <img src={item.image} style={{ width: "100%", height: "100%" }} class="card-img-top" alt="..." />}
                </div>
              </div>

              <div class="card-body">
                <h5 class="card-title">Product</h5>
                <p class="card-text" style={{ cursor: "pointer" }}>
                  {item.title.length > 10 ?
                    <Tooltip placement="top" title={item.title}>

                      {item.title.slice(0, 10)}...

                    </Tooltip>

                    :
                    item.title
                  }
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
