import React, { useState } from "react";
function ReadMoreAndReadLessUseState({ children, maxcharcount = 20 }) {
  const text = children;
  const [istruncated, setistruncated] = useState(true);
  const resultString = istruncated ? text.slice(0, maxcharcount) : text;
  function toggletruncated() {
    setistruncated(!istruncated);
  }
  return (
    <p className="has-text-left">
      <div>
        {resultString}
        <span onClick={toggletruncated} className="btn btn-primary">
          {istruncated ? "Read More" : "Read Less"}
        </span>
      </div>
    </p>
  );
}
function ReadMoreDemo(props) {
  return (
    <div className="content">
      <ReadMoreAndReadLessUseState maxcharcount={20}>
        Class Component are cabpable to defining the state properties and
        lifecycle methods,but functional Component were unable to use lifecycle
        methods.
      </ReadMoreAndReadLessUseState>
    </div>
  );
}
export default ReadMoreDemo;
