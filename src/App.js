
import  './MyCss.css';
import Abhi from './Abhi.js';


function App()
{

  // cons is constant you can't change this
  const allowedState = 
  [
    { MyCar: "BMW", Owner : "BMW Group" },
    { MyCar: "TESLA", Owner : "ELON MUSK " },
    { MyCar: "TATA", Owner : "RATAN TATA " },
   
  ];
  return(
    <div className="abhi">
       <h1>
         <b>------------------This is MAP_Function------------------</b>
         </h1>
      <h2>
        Select Tag from the Dropdown
        </h2>
      <select>
              {allowedState.map((i, index) => (
                <option key={i.id}>{i.MyCar}</option>
              ))}
      </select>
     
      <h1>  OL Tag (Ordered List)</h1>
      <ol>
              {
              allowedState.map((i, index) =>
               (
                <li key={i.id}>{i.MyCar}</li>
              )
              )
              }
      </ol>

      <h1>UL Tag (Unordered List)</h1>
      <ul>
              {allowedState.map((i, index) => (
                <li >{i.MyCar}</li>
              ))}
      </ul>

      <h1>Table</h1>
      <table className="MyTable">

                <tr>
                    <td>Sr No</td> 
                    <td>Name</td>
                    <td>Owner Name</td>
                </tr>
                
            {allowedState.map((i, index) => (
                  <tr>
                <td key={i.id}>{index+1}</td>
                <td key={i.id}>{i.MyCar}</td>
                <td key={i.id}>{i.Owner}</td>
                </tr>
              ))}
      </table>
  <Abhi/> 
    </div>
  );
}

export default App;