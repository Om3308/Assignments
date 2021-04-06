import React from "react";
import { connect } from 'react-redux';
import buycake from "./CakeActions";

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of Cakes :-{props.numberofCakes}</h2>
      <button onClick={props.buycake}>BUY_CAKE</button>
    </div>
  );
}
const mapToStateProps = (state) => {
  return {
    numberofCakes: state.cake.numberofCakes,
  };
};

const mapDispatchToProps=(dispatch)=>{
return{
    buycake:()=>dispatch(buycake())
}
}

export default connect(mapToStateProps,mapDispatchToProps)(CakeContainer)