import react from "react"
function MemoDemo({name,Date}){
    return(
        <div>
            <p>Movie name is {name} Date is {Date}</p>
        </div>
    )

}
export default react.memo(MemoDemo);