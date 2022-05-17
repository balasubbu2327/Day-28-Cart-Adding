
import "./App.css";
import { useState } from "react";


function App() {
  const [cart,setCart]=useState([])
  const [productlist,setProductlist]=useState([{
    id:1,
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    name: "Fancy Product",
    rating: "",
    price: "$40.00 - $80.00",
    isDisabled:false,
   },
  { id:2,
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    name: "Special Item",
    rating: "⭐⭐⭐⭐⭐",
    price: "$40.00 - $80.00",
    isDisabled: false,
  },
  {
    id:3,
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    name: "Sale Item",
    rating: "",
    price: "$50.00 $25.00",
    isDisabled: false,
  },
  {
    id:4,
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    name: "Popular Item",
    rating: "⭐⭐⭐⭐⭐",
    price: "$40.00",
    isDisabled: false,
  },
  {
    id:5,
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    name: "Fancy Product",
    rating: "",
    price: "$40.00 - $80.00",
    isDisabled: false,
  },
  {
    id:6,
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    name: "Sale Item",
    rating: "",
    price: "$50.00 $25.00",
    isDisabled: false,
  },
  { id:7,
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    name: "Special Item",
    rating: "⭐⭐⭐⭐⭐",
    price: "$40.00 - $80.00",
    isDisabled: false,
  },
  {
    id:8,
    image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    name: "Popular Item",
    rating: "⭐⭐⭐⭐⭐",
    price: "$40.00",
    isDisabled: false,
  },])
  //const [isDisabled, setIsDisabled] = useState(false);
  let addtocard=(element,id)=>{
    let temp=productlist
    temp[id].isDisabled=true
  setCart([...cart,element])
  setProductlist(temp)
  
  }
  const removefromCart = (element)=>{
  
    //setcartlist ([...cartlist.slice(index + 1)]);
    setCart(cart.filter((e)=> e!==element));
    console.log(cart)
   //let index= cart.findIndex((object)=>object.id===element.id);
   let index= element.id-1
   let temp=productlist
   temp[index].isDisabled=false
  setProductlist(temp)
   
  }
  return (
    <div className="App">
    <div className="container">
    <div className="row">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <button
            className="btn btn-outline-primary "
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <i className="fa fa-shopping-cart px-2" aria-hidden="true"></i>Cart
            <span className="badge bg-dark text-white ms-1 rounded-pill m-2">
              {cart.length}
            </span>
          </button>
        </nav>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Product Added List
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
               <ul className="list-group">
               {cart.map((element, index)=>
                <li className="list-group-item " key={index}>
                 <span className="data">{element.id} </span> <span className="data">{element.name}</span><span className="data">{element.price}</span>
                   <button type="button" className="close"onClick={()=>removefromCart(element)}> <span aria-hidden="true">&times;</span>
                  </button>
                 </li> )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {productlist.map((element, index) => (
          <div className="col-lg-3 col-md-4  cardcol" key={index}>
            <div className="card h-100">
              <img src={element.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{element.name}</h5>
                <p className="card-text"> {element.rating}</p>
                <p className="card-text"> {element.price}</p>
                <button disabled={element.isDisabled} className="btn btn-outline-primary " onClick={()=>addtocard(element,index)}>
                Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default App;
