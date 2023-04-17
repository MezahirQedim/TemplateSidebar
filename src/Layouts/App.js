import Home from "./Content/Home";
import Product from "./Content/Product";
import Service from "./Content/Service";
import Sidebar from "./Sidebar.js";
import { Route, Routes  } from "react-router-dom";


function App() {

  const TABS = [
    {
      title: "Home",
      path: "/home",
      component: <Home/>,
      icon: "bi bi-house"
    },
    {
      title: "Service",
      path: "/service",
      component: <Service/>,
      icon: "bi bi-android"

    },
    {
      title: "Product",
      path: "/product",
      component: <Product/>,
      icon: "bi bi-android"
    }
  ]





  return (
    <div className="App">
     <div className="d-flex">
      {/* Sidebar */}
        <div >
            <Sidebar  TABS= {TABS} />
        </div>

        {/* Content */}
        <div>
          <Routes>
            {TABS.map((item) => (

              <Route path={item.path} element={item.component}/>
            ))}
          
          </Routes>


        </div>

      </div>
      
    </div>
  );
}

export default App;
