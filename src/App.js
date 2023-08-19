import {useState,useEffect} from 'react';
import './App.css';

function App() {
  const [name, setname] = useState("");
  const [datetime, setdatetime] = useState("");
  const [description, setdescription] = useState("");
  const [transaction, settransaction] = useState([])
 
  useEffect(() => {

  fetchuserdata().then(data=>settransaction(data));
   
  }, [])



  const fetchuserdata= async()=>{
  
    const respone=await fetch('http://localhost:3001/api') // Add .json() to parse the response
    return await respone.json();

    
  }



  
const dataget=(ev)=>{
  ev.preventDefault();
  const price =name.split(' ')[0];
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name:name.substring(price.length+1),description,datetime,price })
};


fetch('http://localhost:3001/api', requestOptions) // Corrected the URL
    .then(response => response.json())
    .then(data => {
      // Handle the response data if needed
      fetchuserdata(); // Fetch updated user data after submission
      setname("");
      setdatetime("");
      setdescription("");
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
let balance=0;
for(const trans of transaction ){
  balance=balance+trans.price;
}

  return (
    <div className="container">
      <h2>{balance}<span>$</span> </h2>
     
 <div className="transactions">
  <div className="transaction2">
  <div className="right">
  <input type="text" value={name} onChange={ev=>setname(ev.target.value)} placeholder={'+300 apple TV device'}   />
  <input type="Datetime-local" onChange={ev=>setdatetime(ev.target.value)} value={datetime} />
  </div>
  <div className="left">
<input type="text" value={description} onChange={ev=>setdescription(ev.target.value)} placeholder={'description'} />
<button style={{width:'693px',padding:'5px 0px'}} onClick={dataget}>
  Add transaction
</button>
  </div>
  
  </div>
 
 </div>


 <div className="transactionsmain">



 {
  transaction.map(data=>(
<div className="transaction">
  <div className="right">
  <div>{data.name}</div>
    <div style={{fontSize:'14px',color:'grey'}}>{data.description}</div>

  </div>
  <div className="left">
  <div>{data.datetime}</div>
<div  style={{fontSize:'14px',color:'grey'}}>{data.price}</div>
  </div>
</div>

  ))
 }

 </div>

    </div>
  );
}

export default App;
