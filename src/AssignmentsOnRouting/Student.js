import React from "react";
class Student extends React.Component {
    render() {
      const { params } = this.props.match
      return (
        <div>
          <h1>Student id is </h1>
          <p>{params.id}</p>
        </div>
      )
    }
  }
  export default Student;