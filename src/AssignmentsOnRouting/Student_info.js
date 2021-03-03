import React from "react";
import { Link, Route } from "react-router-dom";
import Student from "./Student";

class Stud_info extends React.Component {
    state={
        sarray:[
           {
               id:1,
               name:'Abhishek'     
           },
           {
               id:2,
               name:'Ramni',
              
           },
           {
               id:3,
               name:'Tanvi',
           },
           {
               id:4,
               name:'Gaurav',       
           }
       ]
   } 
  
    render() {
        return (
            <div>
                <h1> list of Students </h1>
                <ul>
                {
                this.state.sarray.map(s=> (
                    
                     <li key={s.name}>{s}</li>
                     
                  )
                  )
                }
                </ul>
                <Route path='/Student/:id' component={<Student/>}></Route>
            </div>
        )
    }
 

}
export default Stud_info;