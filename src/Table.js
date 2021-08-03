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
const [country,setCountry] = useState([]);
const [checked, setChecked] = useState(false)

useEffect(() => {
  setChecked(true)
  
  
}, [country])


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

  if(checked && country.length!=0){
    return( <table className='center'>
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
    {data.map(user => {country.map(singlecountry => {
      if(user.Country===singlecountry){
        <tr>
        <td>{user.Player}</td>
        <td>{user.Age}</td>
        <td>{user.Country}</td>
        <td>{user.Position}</td>
        <td>{user.Team}</td>

    </tr>
      }})})}
    </tbody>
</table>

    )
  }


   return(
        <div>

<Slider defaultValue={0} onChange={onChangeAge} />

{
  value.allow ? 
  <table className='center'>
                <tr>
                    {/* <th><button type ="button" onClick={() => requestSort("Player")}
                    > Player </button></th> */}
                    <th>Player</th>
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
{/* handleAllChecked =(event) =>{
  let countries = this.state.countries
  countries.forEach(countries => countries.isChecked = event.target.Checked)
  this.setState({countries : countries})
}

handleCheckChieldELement = (event) =>{
  let countries = this.state.countries
  countries.(country).forEach(country => {
    
  });
} */}

            
            <h2 className='page-heading'>Table</h2>
            
            <input type={"checkbox"} id='country' name ={"country"} value = "USA" onClick = {(e) => {e.target.checked ? setCountry(preCountry =>([
              ...preCountry,
              e.target.value
            ])): setCountry(preCountry =>{
            
             return preCountry.filter(data=>(data !== e.target.value))
            })} } />
            <lable form ="country">USA</lable><br/>



            <input type={"checkbox"} id='country' name ={"country"} value = "India" onClick = {(e) => {e.target.checked ? setCountry(preCountry =>([
              ...preCountry,
              e.target.value
            ])): setCountry(preCountry =>{
            
             return preCountry.filter(data=>(data !== e.target.value))
            })} } />

            <lable form ="country">India</lable><br/>
            <input type={"checkbox"} id='country' name ={"country"} value = "England" onClick = {(e) => {e.target.checked ? setCountry(preCountry =>([
              ...preCountry,
              e.target.value
            ])): setCountry(preCountry =>{
            
             return preCountry.filter(data=>(data !== e.target.value))
            })} } />
            <lable form ="country">England</lable><br/>
            
            </div>
   )
             
}
            
            
            
           
   
 
            
           

 export default Table
 

           