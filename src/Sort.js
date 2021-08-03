import React, { useState, useEffect, useMemo} from 'react';
import {  Slider  } from 'antd';
import 'antd/dist/antd.css';
const data = [
    {
      Player: "Joe Gomez",
      Age: 19,
      Country: "USA",
      Position: "CB",
      Team: "Liverpool"
    },
    {
      Player: "Mats Hummels",
       Age: 20,
      Country: "USA",
      Position: "GK",
      Team: "Liverpool"
    },
    {
      Player: "Christopher Nkunku",
       Age: 20,
      Country: "England",
      Position: "CB",
      Team: "Liverpool"
    },
    {
      Player: "Dries Mertens",
       Age: 21,
      Country: "England",
      Position: "CB",
      Team: "Liverpool"
    },
    {
      Player: "Jadon Sancho",
       Age: 22,
      Country: "England",
      Position: "CF",
      Team: "Liverpool"
    },
    {
      Player: "Thomas Partey",
       Age: 23,
      Country: "India",
      Position: "CF",
      Team: "Bayern"
    },
    {
      Player: "Luis Muriel",
       Age: 27,
      Country: "England",
      Position: "CF",
      Team: "Bayern"
    },
    {
      Player: "Serge Gnabry",
       Age: 28,
      Country: "India",
      Position: "GK",
      Team: "Bayern"
    }
  ]
  

function Table(){


  // ```````````````````sortfunction start````````````````
const [state, setstate] = useState([]);

const[value, setValue] = useState({
  val:0,
  allow:false
})

function onChangeAge(data){
  console.log(data);
  setValue(preData => (
    {...preData,
      val:data,
    allow:true}
  ));

  setstate([]);

}

useEffect(() => {
  

  data.map(d => {
    if(d.Age === value.val){
      setstate(preData => ([
        ...state,
        d
      ]))
    }
  })
  

}, [value])


// ```````````````````sortfunction end````````````````

  

const useSortableData = (items, config = null) => {
const [sortConfig, setSortConfig] = useState(config);
// const { items, requestSort, sortConfig } = useSortableData(data);

// const getClassNamesFor = Player => {
//   if (!sortConfig) {
//     return;
//   }
//   return sortConfig.key === Player ? sortConfig.direction : undefined;
// };


const sortedItems = useMemo(() => {

  let sortableItems = [...items];
  if (sortConfig !== null) {
    sortableItems.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? -1 : 1;

      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? 1 : -1;

      }
      return 0;
    });
  }
  return sortableItems;
},[items, sortConfig]);
  
  const requestSort = key => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };
  return {items, requestSort };

};

// const[sorting, setSorting]=useState([data]);

// const sortAscending = () => {
//   let sortedData = sorting.sort((a, b) => a - b)
//   setData(sortedData)
// }
// const sortDescending = () => {
//   let sortedData = data.sort((a, b) => b - a)
//   setSorting(sortedData)
// }

// const columns = [
//   {dataField:'Player', text:'Player'},
//   {dataField:'Age', text:'Age'},
//   {dataField:'Country', text:'Country'},
//   {dataField:'Position', text:'Position'},
//   {dataField:'Team', text:'Team'},

// ]

   return(
        <div>

<Slider defaultValue={0} onChange={onChangeAge} />
{
  value.allow ? 
  <table className='center'>
                <tr>
                    <th><button type ="button" onClick={() => requestSort("Player")}
                    > Player </button></th>
                    {/* <th>Player</th> */}
                    <th>Age</th>
                    <th>Country</th>
                    <th>Position</th>
                    <th>Team</th>
                   

                </tr>
                <tbody>
                {state.map(user => {return(
                    
                    <tr>
                    <td>{user.Player}</td>
                    <td>{user.Age}</td>
                    <td>{user.Country}</td>
                    <td>{user.Position}</td>
                    <td>{user.Team}</td>
                   
                

                </tr>
                
                 )})}
                </tbody>
            </table>
            :
            <table className='center'>
                <tr>
                    {/* <th><button type ="button" onClick={() => requestSort("Player")}
                    className = {getClassNamesFor("Player")}> Player </button></th> */}
                    <th>Player</th>
                    <th>Age</th>
                    <th>Country</th>
                    <th>Position</th>
                    <th>Team</th>
                   

                </tr>
                <tbody>
                {data.map(user => {return(
                    
                    <tr>
                    <td>{user.Player}</td>
                    <td>{user.Age}</td>
                    <td>{user.Country}</td>
                    <td>{user.Position}</td>
                    <td>{user.Team}</td>
                   
                

                </tr>
                
                 )})}
                </tbody>
            </table>
          


}

            
            <h2 className='page-heading'>Table</h2>
            


            </div>
   )
             
}
            
            
            
           
   
 
            
           

 export default Table
 

           