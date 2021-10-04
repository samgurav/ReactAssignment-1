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
export class Product1 extends Component {
    constructor(props){
        super(props);
        this.state={
         
           total:0,
           length:0
        };

    }

  componentDidMount(){
     if((localStorage.getItem('mycart')!==undefined)&& (localStorage.getItem('mycart')!==undefined)){
         let arr=JSON.parse(localStorage.getItem('mycart'));
         let qty=JSON.parse(localStorage.getItem('quantity')); 
         this.setState({total:arr.length});
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
                  console.log(qty[i]);
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
  
    // handleIncrement = () => {
    //   this.setState(prevState => {
    //     return {
    //       count: ++prevState.count
    //     }
    //   })
    // }
  
    // handleDecrement = () => {
    //   this.setState(prevState => {
    //     return {
    //       count: --prevState.count
    //     }
    //   })
    // }
  
    // componentDidUpdate() {
    //   localStorage.setItem('mycart', JSON.stringify(this.state))  
    // }
  
    // componentDidMount() {
    //   const data = localStorage.getItem('quantity')
    //   if(data) {
    //     this.setState(prevState => {
    //       return JSON.parse(data)
    //     })
    //   }
    // }
  
   
    render() {
        return (
            <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">

  
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="index.html">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="index.html"  >Cart <button > {this.state.total}</button></a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="index.html">Disabled</a>
      </li>
    </ul>
  </div>
</nav>
                    <div className=" row container-fluid ">
                          {products.map(( data,id)=>
                      <div className="col-sm-4" key={id}>
                          <div className="card-coloums">
                              <div className="card"style={{marginBottom:'10px'}}>
                                <div className="card-body " style={{backgroundColor:"#C5C5C5"}}>
                                    <img className="card-img-top " width="300px" height="300px" alt="img"  src={`${data.images}` }></img>
                                    <p className="card-title "style={{fontSize:"25px" , textAlign:"center"}}><b>Name: {data.pname}</b></p>
                                    <p style={{textAlign:"center"}}>ID: {data.id}</p>
                                    <p style={{textAlign:"center"}}>Price: <span style={{color:"red"}}>{data.price}</span> <br/>   </p>
                                    <p style={{textAlign:"center"}}>Quantitiy: <span style={{color:"red"}}>{data.quantity}</span> <br/>   </p>
                                     {/* <div id="quantity">
              
                <button onClick={this.handleIncrement}>+</button>
                <h2>quantity:{this.state.count}</h2>
                <button onClick={this.handleDecrement}>-</button>
             </div>  
     */}
  
 
                                   <div className="text-center">
                                   <button className="btn btn-success mr-100 " style={{marging:'100px'}} onClick={()=>this.addcart(data.id,data.quantity)} >ADD TO CART</button>
                                   </div>
                              </div>


                              </div>

                      </div>
                      </div>

                 
                   
                   
                )}
            </div>
            </div>
        )
    }
}

export default Product1;
