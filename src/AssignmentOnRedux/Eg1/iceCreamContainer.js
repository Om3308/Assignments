import React from "react";
import { connect } from 'react-redux';
import buyIcecream from './iceCremActions';

function IceCreamContainer(props) {
  return (
    <div>
      <h2>Number of icecream :-{props.numoficecream}</h2>
      <button onClick={props.buyIcecream}>BUY_ICECREM</button>
    </div>
  );
}
const mapToStateProps = (state) => {
  return {
    numoficecream: state.icecream.numoficecream,
  };
};

const mapDispatchToProps=(dispatch)=>{
return{
    buycake:()=>dispatch(buyIcecream())
}
}

export default connect(mapToStateProps,mapDispatchToProps)(IceCreamContainer)