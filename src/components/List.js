import React from 'react';
import ListDetails from './ListDetails';

const empData=[
  
    {id:'01',name:'Samiksha Gurav',age:23,dept:'Software',location:'Mumbai'},
    {id:'02',name:'Manthan Thakur',age:24,dept:'Finance',location:'Pune'},
    {id:'03',name:'Diya Mahto',age:22,dept:'HR',location:'Banglore'},
    {id:'04',name:'Sakshi Gurav',age:42,dept:'Admin',location:'Pune'},
    {id:'05',name:'Rutuja Patil',age:22,dept:'Software',location:'Indore'},
    {id:'06',name:'Janhavi Ugale ',age:24,dept:'Software',location:'Mumbai'},
    {id:'07',name:'Shraddha patil',age:40,dept:'Sales',location:'Indore'},
    {id:'08',name:'Pratik Deshmukh',age:24,dept:'Sales',location:'Pune'},
    {id:'09',name:'Sudeep Patil',age:24,dept:'HR',location:'Puen'},
    {id:'10',name:'Siya patil',age:35,dept:'Software',location:'Pune'},
    {id:'11',name:'Tejas Naik',age:30,dept:'Admin',location:'Chennai'},
    {id:'12',name:'Sumit Naik',age:26,dept:'Finance',location:'Pune'},
    {id:'13',name:'Sarvesh Naik',age:23,dept:'HR',location:'Banglore'},
    {id:'14',name:'Swati Mishra',age:29,dept:'Software',location:'Mumbai'},
    {id:'15',name:'Vrunda Bhoir',age:55,dept:'Sales',location:'Pune'},
    {id:'16',name:'Vinay Patil',age:45,dept:'Admin',location:'Mumbai'},
    {id:'17',name:'Neha Raut',age:50,dept:'Finance',location:'Banglore'},
    {id:'18',name:'Nilima Shinde',age:33,dept:'Admin',location:'Nagpur'},
    {id:'19',name:'Tejal Supe',age:44,dept:'Finance',location:'Chennai'},
    {id:'20',name:'Vaishnavi Mokal',age:38,dept:'HR',location:'Pune'},
]
export default function List(props) {
    return (
     <ListDetails e1={empData}/>
   
    )
}

