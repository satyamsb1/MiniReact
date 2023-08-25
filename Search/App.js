import {useState} from "react"
import React from "react";
import ReactDom from "react-dom/client";
// const App = () =>{

//     const list = [
//         "Banana",
//         "Apple",
//         "Orange",
//         "Mango",
//         "Pineapple",
//         "Watermelon"
//       ];

//       const [filterList, setFilterList] = useState(list);

//       const search = (event)=>{
//         if(event.target.value === "")
//         {
//             setFilterList(list);
//             return;
//         }
//         const filteredValue = list.filter(
//             (item) => item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
//         );
//         setFilterList(filteredValue);
//       }
      
//     return(
//        <div className="app">
//         <div>
//             Search: <input name= "query" type="text" onChange={search}/>
//         </div>
//         {
//             filterList.map((item, index)=>(
//                 <div key={index}>{item}</div>
//             ))
//         }
//        </div>
//     );
// }

// const root = ReactDom.createRoot(document.getElementById("root"));
// root.render(<App />);

const App = () =>{
    const [count, setCount] = useState(0);
    return(
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={()=> {
                    setCount(count+1);
                }}> + </button>
                <button onClick={()=> {
                setCount(count-1);
            }}> - </button>
            </div>
            
        </div>
        
    );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);