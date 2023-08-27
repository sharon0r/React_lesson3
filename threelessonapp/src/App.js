import './App.css';
import Ticket from './components/Ticket'
import { useState } from "react";
function App() {
  let [num, setNum] = useState(21);
 const tickets = [
        { name: "oren", destination: "🇺🇸", seat: "14A", gender: "Mr" },
        { name: "orna", destination: "🇩🇪", seat: "10B", gender: "Mrs" },
        { name: "dana", destination: "🇮🇱", seat: "9B", gender: "Mrs" },
        { name: "david", destination: "🇹🇩", seat: "3B", gender: "Mrs" },
        { name: "shosha", destination: "🇹🇷", seat: "2B", gender: "Mrs" },
        { name: "orna", destination: "🇺🇸", seat: "14B", gender: "Mrs" },
 ];
 function increament() {
  num = num + 1;
  console.log(num);
  alert(num);
  setNum(num);/*befor use it , it was 21 and didn't increment . */
}
   const ticketList=tickets.map((t)=>{
    return (
        <div class="list">
          <Ticket ticket={t}/>
        </div>
    )
   });
 return (
  <div className="App">
      <div>
          <Ticket ticket={tickets[0]} user={user} />
          {ticketList}
      </div>
      
         <div>            <button onClick={increament}>click me</button>
            </div>
            <div>{num}</div>
   </div>
    );

 }
 export default App;
 