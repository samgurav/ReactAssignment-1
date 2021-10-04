
  import React, { Component } from 'react'
  const regForName = RegExp(/^[A-Za-z]{2,10}$/);
  const regForUName = RegExp(/^[A-Za-z]{2,12}$/);
  const regForEmail = RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  const regForMobile = RegExp(/^[7-9][0-9]{9}$/);
  const regForPass = RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/);
  const regForPin = RegExp(/^[0-9]{6}$/);
export class ApplicationForm extends Component {
  constructor(props){
      super(props);
      this.state={
          fname:null,
          mname:null,
          lname:null,
          username:null,
          email:null,
          phoneno:null,
          pass:null,
          cpass:null,
          date:null,
          pincode:null,
          tenth:null,
          twelve:null,
          last:null,
        
          
          errors:{
              fname:'',
              mname:'',
              lname:'',
              username:'',
              email:'',
              phoneno:'',
              pass:'',
              cpass:'',
              pincode:'',
              date:'',
              tenth:'',
              twelve:'',
              last:'',
             
            

          }

      }
  }
  handler=(events)=>{
    const {name,value}=events.target;
    let errors=this.state.errors;
      switch(name){
        default:
        case 'fname':
            errors.fname= regForName.test(value)?'':'first name should be between 2 to 10 letters';
            break;
         case 'mname':
                errors.mname= regForName.test(value)?'':'middle name should be between 2 to 10 letters';
                break;
        case 'lname':
                    errors.lname= regForName.test(value)?'':'last name should be between 2 to 10 letters';
               break;
               case 'username':
                errors.username= regForUName.test(value)?'':'username should be between 2 to 12 letters';
           break;
           case 'email':
            errors.email= regForEmail.test(value)?'':'invalid email';
       break;
       case 'phoneno':
        errors.phoneno= regForMobile.test(value)?'':'please enter a valid phone number';
   break;
    case 'pass': errors.pass=regForPass.test(value)?'':'Password must be between 6 to 16 characters and must contain one number and one special character';
        break;
     case 'cpass': errors.cpass=this.state['pass'] === value?'':'Password do not match';
      break; 
      case 'date': errors.date=(value)? '': 'enter the date in proper format' ;
      break;
      case 'pincode':
        errors.pincode= regForPin.test(value)?'':'please enter a valid pincode';
   break;
   case 'tenth': errors.tenth=(value>=60)?'':'it should be greather than 60% ';
    break;
    case 'twelve': errors.twelve=(value>=60)?'':'it should be greather than 60% ';
    break;
    case 'last': errors.last=(value>=60)?'':'it should be greather than 60% ';
            break;
         
    }
    this.setState({errors,[name]:value},()=>{
        console.log(errors);
    })
  }
  formSubmit=(events)=>{
    events.preventDefault();
    if(this.validate(this.state.errors)){
        alert("Valid Form")
    }
    else
       alert("Invalid Form")

     
}

validate=(errors)=>{
let valid = true;
Object.values(errors).forEach((val)=> 
    val.length>0 && (valid = false));
    return valid;
    }

        
    render() {
        {
             console.log(this.values)}
        const {errors}=this.state;
    
        return (
            <>
          <div className="container">
              
                <div className="container-fluid" style={{marginTop:"20px"}}> 
             
                <form onSubmit={this.formSubmit} style={{background:"#E5E4E2", border:"2px solid black",padding:"20px"}}>
                <h2 style={{background:"#2B547E", color:'white' , height:"100px", textAlign:"center" ,padding:"50px"}}>Application Form</h2>

                <h3 className="form-control" style={{background:"#3A3B3C" ,color:"white"}}>Personal Details </h3>

                <div className="row "> 
                       
                       <div className="form-group col-lg-3 ">
                       <label >Choose</label>
                       <select className="form-control" required>
                   
                    <option>Mr.</option>
                    <option>Ms.</option>
                    <option>Miss</option>
                     </select>
                     </div>
                       
                <div className="form-group col-lg-3 ">
                <label >First Name</label>
                <input type="text" className="form-control" id="inputFname" name="fname" placeholder="First Name" onChange={this.handler} />
                {errors.fname.length>0 &&
                            <span style={{color:"red"}}>{errors.fname}</span>}
                </div>
                <div className="form-group col-lg-3 ">
                <label >Middle Name</label>
                <input type="text" className="form-control" id="inputMname" name="mname" placeholder="Middle Name" onChange={this.handler}/>
                {errors.mname.length>0 &&
                            <span style={{color:"red"}}>{errors.mname}</span>}
                </div>
                <div className="form-group col-lg-3 ">
                <label >Last Name</label>
                <input type="text" className="form-control" id="inputLname" name="lname" placeholder="Last Name" onChange={this.handler}/>
                {errors.lname.length>0 &&
                            <span style={{color:"red"}}>{errors.lname}</span>}
                </div>
                 </div> 
                 <div className="form-group row">
                     <label  className="col-lg-2 col-form-label">Username:</label>
                <div className="col-sm-10">
                            <input type="text" className="form-control" placeholder="Username" name="username" onChange={this.handler}/>
                            {errors.username.length>0 &&
                            <span style={{color:"red"}}>{errors.username}</span>}
                        </div>
                        
                    </div>
                    <div className="form-group row">
                    <label  className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                    <input type="email" className="form-control" id="inputEmail3" name="email" placeholder="Email" onChange={this.handler}/>
                    {errors.email.length>0 &&
                            <span style={{color:"red"}}>{errors.email}</span>}
                    </div>
                </div>
                <div className="form-group row">
                    <label  className="col-sm-2 col-form-label">Phone No:</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" name="phoneno"  placeholder="phone number" onChange={this.handler}/>
                    {errors.phoneno.length>0 &&
                            <span style={{color:"red"}}>{errors.phoneno}</span>}
                    </div>
                </div>
                    
                <div className="row">
                 <div className="col-lg-2 form-group">
                 <label >Password:</label>
                        </div>
                        <div className="col-lg-4 form-group" >
                        <input type="password"  name="pass"  className="form-control"  placeholder="Password" onChange={this.handler}/><br />
                        {errors.pass.length>0 &&
                            <span style={{color:"red"}}>{errors.pass}</span>}   
                        </div>
                        <div className="col-lg-2 form-group">
                 <label > Confirm Password:</label>
                        </div>
                        <div className="col-lg-4 form-group" >
                        <input type="password"  name="cpass" className="form-control"  placeholder="confirm password" onChange={this.handler}/>      
                        {errors.cpass.length>0 &&
                            <span style={{color:"red"}}>{errors.cpass}</span>}
                        </div>         
                    </div>
                    <div className="row "> 
                       <div className="form-group col-lg-4 ">
                       <label >Nearest Test Location:</label>
                    <select  className="form-control" required>
                    
                    <option>Mumbai</option>
                    <option>Pune</option>
                    <option>Raigad</option>
                     </select>
                       </div>
                       <div className="form-group col-lg-4 ">
                       <label >Date of Birth</label>
                       <input type="date" id="birthday" name="date" className="form-control" onChange={this.handler}/>
                       {errors.date.length>0 &&
                            <span style={{color:"red"}}>{errors.date}</span>}
                       </div>
                      
                   
             
                    <div className="form-group col-lg-4 ">
                       <label >Gender</label>
                    <select  className="form-control" required>
                
                    <option>Male</option>
                    <option>Female</option>
                     </select>
                       </div> 
                        </div> 
                    <div className="form-group row">
                    <label  className="col-sm-2 col-form-label">Address :</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" name="address" id="inputAddress"  placeholder="Address" required/>
                  
                    </div>
                    </div>
                    
                  

                    <div className="row">
                    <div className="form-group col-lg-3 ">
                       <label>Country</label>
                       <select  className="form-control" required>
                    
                    <option>India</option>
                     </select>
                     </div>
                       
                <div className="form-group col-lg-3 ">
                <label >State</label>
                <input type="text" className="form-control" placeholder="State" required/>
                </div>
                <div className="form-group col-lg-3 ">
                <label >City</label>
                <input type="text" className="form-control"  placeholder="City" required/>
                </div>
                <div className="form-group col-lg-3 ">
                <label >Pincode</label>
                <input type="text" className="form-control" name="pincode" placeholder="Pincode" onChange={this.handler}/>
                {errors.pincode.length>0 &&
                            <span style={{color:"red"}}>{errors.pincode}</span>}
                </div>
                </div>
               <h3 className="form-control" style={{background:"#3A3B3C" ,color:"white"}}>Educational Details </h3>
                   <div className="row">
                   <div className="form-group col-lg-4 ">
                <label >Highest Education</label>
                <input type="text" className="form-control"  placeholder="enter here" required/>
                </div>
                <div className="form-group col-lg-4 ">
                <label >Department</label>
                <input type="text" className="form-control" id="department" placeholder="department" required/>
                </div>
                <div className="form-group col-lg-4 ">
                       <label >Year of Passing</label>
                    <select id="inputyear" className="form-control" required>
                
                    <option>2020</option>
                    <option>2021</option>
                    <option>2022</option>
                     </select>
                       </div> 
                 </div> 
                 <div className="form-group row">
                    <label  className="col-sm-2 col-form-label">Work Experience :</label>
                    <div className="col-sm-10">
                    <input type="text" className="form-control" id="marks1"  placeholder="work experience" required/>
                    </div>
                    </div>
                    <div className="row">
                   <div className="form-group col-lg-4 ">
                <label >10th percentage</label>
                <input type="text" className="form-control" name="tenth" placeholder=" Enter Here" onChange={this.handler} />
                {errors.tenth.length>0 &&
                            <span style={{color:"red"}}>{errors.tenth}</span>}
                </div>
                <div className="form-group col-lg-4 ">
                <label >12th percentage</label>
                <input type="text" className="form-control" name='twelve' id="marks2" placeholder="Enter Here" onChange={this.handler}/>
                {errors.twelve.length>0 &&
                            <span style={{color:"red"}}>{errors.twelve}</span>}
                </div>
                <div className="form-group col-lg-4 ">
                <label >Graduation percentage</label>
                <input type="text" className="form-control" id="marks3" name="last" placeholder="Enter Here" onChange={this.handler}/>
                {errors.last.length>0 &&
                            <span style={{color:"red"}}>{errors.last}</span>}
                </div>
                 </div>    
               <div className="form-group row">
                <label   className="col-sm-2 col-form-label">Upload CV</label>
                <div className="col-sm-10">
                <input type="file" className="form-control-file" id="exampleFormControlFile1" name="file" required/>
              
            </div>
            </div>
                 <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Declaration</label>
                    <div className="col-sm-10">
                    <p type="text" className="form-control"  cols="5" style={{fontStyle:"bold", color:"black"}} readOnly>
                        I SAMIKSHA GURAV solemnly declare that the information in this form is truly stated and correct and I am competent to furnish as well as verify it with adequate details whenever requested for by Company.
                        
                    </p>
                    </div>
                </div>  

                     <div className="form-group row">
                  
                    <div className="col-sm-10">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck1" required/>
                        <label className="form-check-label" >
                              <b>  i agree the Terms and conditions</b>
                        </label>
                    </div>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10 " >
                    <button type="submit" className="btn btn-success" style={{ width:"200px"}}>Submit Application Form</button>
              <button type="reset" className="btn btn-success" style={{margin:"30px", width:"200px"}}>Reset</button>
                    </div>
                </div>  
                </form>
                </div>
                </div>
                  </>
        )
    }
}

export default ApplicationForm;

 