function UseOfKey() {
    const cars=["Hundai","Tata","Suzuki","Mahindra"]
    const carlist=cars.map((car,index)=>
    <h3 key={index}>
        index is {index}  and Car is {car}
    </h3>
    ) 
    return carlist;  
}
export default UseOfKey;