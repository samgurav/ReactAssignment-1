import React, { Component } from 'react'

const products=[  
  {"id": 1,"pname":"mobile","price":18000,"quantity":1,"images": "https://static.digit.in/default/36b13ef36655eae101b44c7e0f14d79eb63a8935.jpeg?tr="},
  {"id": 2,"pname":"laptop","price":54000,"quantity":1,"images": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"},
  {"id": 3,"pname":"TV","price":32000,"quantity":1,"images": "https://images.samsung.com/is/image/samsung/in-full-hd-tv-te50fa-ua43te50fakxxl-frontblack-231881877?$720_576_PNG$"},
  {"id": 4,"pname":"washing machine","price":14000,"quantity":1,"images": "https://media.croma.com/image/upload/v1615898731/Croma%20Assets/Large%20Appliances/Washers%20and%20Dryers/Images/233534_wrvcp3.png"},
  {"id": 5,"pname":"mobile","price":14000,"quantity":1,"images": "https://static.digit.in/default/9b801f10ae31faae1bc2777e55f45550922706aa.jpeg?tr=w-1200"},
  {"id": 6,"pname":"Laptop","price":43000,"quantity":1,"images": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"},
  {"id": 7,"pname":"Tab","price":45000,"quantity":1,"images": "https://www.lenovo.com/medias/lenovo-tablet-m10-hero-1-.png?context=bWFzdGVyfHJvb3R8NjI0MTF8aW1hZ2UvcG5nfGgyMi9oMmIvOTk4ODM0NjQ0NTg1NC5wbmd8MDYxMDlmYTE0M2YxZDMyM2VjYTUyMThjNDQwM2VlNzgyYTQ5ZTM0OTVlZmM4OWI3OTc0ZjA1NjI4YjYwNTQxZQ"},
  {"id": 8,"pname":"washing machine","price":23450,"quantity":1,"images": "https://media.croma.com/image/upload/v1615898731/Croma%20Assets/Large%20Appliances/Washers%20and%20Dryers/Images/233534_wrvcp3.png"},
  {"id": 9,"pname":"laptop","price":34000,"quantity":1,"images": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"},
  {"id": 10,"pname":"washing machine","price":73560,"quantity":1,"images": "https://media.croma.com/image/upload/v1615898731/Croma%20Assets/Large%20Appliances/Washers%20and%20Dryers/Images/233534_wrvcp3.png"},
  {"id": 11,"pname":"mobile","price":45000,"quantity":1,"images": "https://i.gadgets360cdn.com/products/large/1559020725_635_moto_z4.jpg"},
  {"id": 12,"pname":"laptop","price":34250,"quantity":1,"images": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"},
  {"id": 13,"pname":"mobile","price":18000,"quantity":1,"images": "https://static.digit.in/default/36b13ef36655eae101b44c7e0f14d79eb63a8935.jpeg?tr="},
  {"id": 14,"pname":"laptop","price":54000,"quantity":1,"images": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"},
  {"id": 15,"pname":"TV","price":32000,"quantity":1,"images": "https://images.samsung.com/is/image/samsung/in-full-hd-tv-te50fa-ua43te50fakxxl-frontblack-231881877?$720_576_PNG$"},
  {"id": 16,"pname":"washing machine","price":14000,"quantity":1,"images": "https://media.croma.com/image/upload/v1615898731/Croma%20Assets/Large%20Appliances/Washers%20and%20Dryers/Images/233534_wrvcp3.png"},
  {"id": 17,"pname":"mobile","price":14000,"quantity":1,"images": "https://static.digit.in/default/9b801f10ae31faae1bc2777e55f45550922706aa.jpeg?tr=w-1200"},
  {"id": 18,"pname":"Laptop","price":43000,"quantity":1,"images": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"},
  {"id": 19,"pname":"Tab","price":45000,"quantity":1,"images": "https://www.lenovo.com/medias/lenovo-tablet-m10-hero-1-.png?context=bWFzdGVyfHJvb3R8NjI0MTF8aW1hZ2UvcG5nfGgyMi9oMmIvOTk4ODM0NjQ0NTg1NC5wbmd8MDYxMDlmYTE0M2YxZDMyM2VjYTUyMThjNDQwM2VlNzgyYTQ5ZTM0OTVlZmM4OWI3OTc0ZjA1NjI4YjYwNTQxZQ"},
  {"id": 20,"pname":"washing machine","price":23450,"quantity":1,"images": "https://media.croma.com/image/upload/v1615898731/Croma%20Assets/Large%20Appliances/Washers%20and%20Dryers/Images/233534_wrvcp3.png"},
  {"id": 21,"pname":"laptop","price":34000,"quantity":1,"images": "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"}
 
]

export class Product2 extends Component {
    constructor(props){
        super(props);
        this.state={
          proData:[],
          cart:JSON.parse(localStorage.getItem('mycart')),
        
           total:0,
           length:0
        };

    }
   

  componentDidMount(){
     if((localStorage.getItem('mycart')!==undefined)&& (localStorage.getItem('quantity')!==undefined)){
      //let arr=JSON.parse(localStorage.getItem('mycart')); 
         let qty=JSON.parse(localStorage.getItem('quantity')); 
      //  this.setState({total:arr.length});
     

    //   this.setState({total:qty.reduce((a, b) => {  return a + b;})
    //  })
    }
  }


    addcart=( id,quantity)=>{
          
        if((localStorage.getItem('mycart')!==undefined)&&(localStorage.getItem('mycart')!==undefined)){
                let arr=JSON.parse(localStorage.getItem('mycart'));
                let qty=JSON.parse(localStorage.getItem('quantity'));
               let i=arr.indexOf(id);
                if(arr.includes(id)){
              qty[i]=qty[i]+1;
                  localStorage.setItem('quantity',JSON.stringify(qty));
                  alert(" quantity is added")
                  this.setState({length:this.state.length+1});
                  console.log(id,qty[i]);
                }
                else{
                    arr.push(id)
                    localStorage.setItem('mycart',JSON.stringify(arr));
                    qty.push(quantity);
                    localStorage.setItem('quantity',JSON.stringify(qty));
                    this.setState({length:this.state.length+1});
                    alert("Product add to cart");
                }
            }
        
        else{
            let arr=[]
            let qty=[]
            qty.push( quantity);
            localStorage.setItem('quantity',JSON.stringify(qty));
            arr.push(id);
            localStorage.setItem('mycart',JSON.stringify(arr));
            this.setState({length:this.state.length+1});
            alert("product added to cart");

        }
    
    }

    displayCart=(event)=>{
      event.preventDefault()
      console.log(this.state.cart)
      if(localStorage.getItem('mycart') !== null){
      document.getElementById("table").style.visibility = "visible";}
      else{
        document.getElementById("table").style.visibility = "hidden";}
       
    }
  

   
    render() {
      return (
        <>
        <div className="container-fluid">
        <nav className="nav" key={Math.random()}>
        <a key={Math.random()} className="nav-link " href=" ">Home</a>
        <a key={Math.random()} className="nav-link" href=" ">About</a>
        <a key={Math.random()} className="nav-link" href=" " >Cart <span /* className="p-2 bg-danger text-white rounded-circle" */>{this.state.total}</span></a>
        <a key={Math.random()} className="nav-link " href=" ">Disabled</a>
        </nav>
          <h1 key={Math.random()}>Products</h1>
          <div className="row container-fluid m-auto "style={{background:'#C5C5C5'}}  key={Math.random()}>
              {products.map(pro=>
                <div className="card-body block col-sm-4  " key={Math.random()}>
                  <img className="card-img-top" height="200px" width="200px" src={pro.images}  alt=" not found" key={Math.random()}></img>
                  <p className="card-title" key={Math.random()}>{pro.pname}</p>
                  <p className="card-text" key={Math.random()}>
                    Price : <span style={{color:"blue",fontSize:"large",fontWeight:"bold"}} key={Math.random()}>${pro.price}</span>
                  </p>
                  <div className="text-center">
                                   <button className="btn btn-success mr-100 " style={{marging:'100px'}} onClick={()=>this.addcart(pro.id,pro.quantity)}>ADD TO CART</button> </div>
                                              </div>)}
          </div>
          <div key={Math.random()} className="table-responsivem container" id="carttable" style={{visibility:"visible"}}>
                  <table key={Math.random()} className="table table-hover table-bordered table-dark" border={3}>
                  <thead key="thead" >
                      <tr className="bg-danger" key={Math.random()}>
                          <th key={Math.random()}>Product Id</th>
                          <th key={Math.random()}>Product Name</th>
                          <th key={Math.random()}>Product Quantity</th>
                          <th key={Math.random()}>Price per Prodcut</th>
                          <th key={Math.random()}>Total Price</th>
                      </tr>
                  </thead>
                <tbody key="tbody">
                  
                  {this.state.cart.map((pro)=>
                    (this.state.proData.map((d)=>((pro.id === d.id)?
                              <tr key={Math.random()} className="">
                               <td key={Math.random()}>{pro.id}</td>
                               <td key={Math.random()}>{d.pname}</td>
                               <td key={Math.random()}>{pro.quantity}</td>
                               <td key={Math.random()}>{d.price}</td>
                               <td key={Math.random()}>{d.price*pro.quantity}</td>
                              </tr>: null))))}
                </tbody>
                </table>
            </div>
    
            </div>
        </>
      )
  }

}

export default Product2;
