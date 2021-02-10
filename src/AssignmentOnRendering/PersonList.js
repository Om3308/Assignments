function DisplayPersonList() {
    const persons=[
        {id: 1, name: 'Ansh', age: 22, skill: 'React'},
        {Id: 2, name: 'Jay', age: 25, skill: 'Java'},
        {id: 3, name: 'Sara', age: 23, skill: 'Angular'},
        ]
     const ListOfPersons=persons.map((person,index)=>
     <h2 key={person.Id}>
       I am {person.name}. I am {person.age} years old . I know {person.skill}
     </h2>)   
     return ListOfPersons  
    
}
export default DisplayPersonList;