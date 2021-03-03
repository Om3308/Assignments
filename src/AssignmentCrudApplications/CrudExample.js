import React, { Component } from "react";

class CrudExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "simple CRUD operation",
      datas: [],
      act: 0,
      index: "",
    };
  }

  fSubmit = (e) => {
    e.preventDefault();

    console.log("try");
    console.log(this.refs);

    let datas = this.state.datas;
    let id = this.refs.id.value;
    let name = this.refs.name.value;
    let address=this.refs.address.value;


    if (this.state.act === 0) {
      let data = { id, name };
      datas.push(data);
    } else {
      let index = this.state.index;
      datas[index].id = id;
      datas[index].name =name;
      datas[index].address =address;
    }
    this.setState({
      datas: datas,
      act: 0,
    });

    this.refs.myForm.reset();
    this.refs.id.focus();
  };

  fRemove = (i) => {
    let datas = this.state.datas;
    datas.splice(i, 1);
    this.setState({
      datas: datas,
    });

    this.refs.myForm.reset();
    this.refs.id.focus();
  };

  fEdit = (i) => {
    let data = this.state.datas[i];
    this.refs.id.value = data.id;
    this.refs.name.value = data.name;

    this.setState({
      act: 1,
      index: i,
    });

    this.refs.id.focus();
  };
  componentDidMount() {
    this.refs.id.focus();
  }
  render() {
    let datas = this.state.datas;
    return (
      <div className="App">
        <h2>{this.state.title}</h2>
        <form ref="myForm" className="myForm">
          <h2 align="left">Create Employee Record : </h2>
          <table>
            <tr>
              <th>
                <label> Id : </label>
              </th>
              <td>
                <input type="text" ref="id" placeholder="Employee name" />
              </td>
            </tr>
            <tr>
              <th>
                <label> name :</label>
              </th>
              <td>
                <input type="text" ref="name" placeholder="your name" />
              </td>
            </tr>
            <tr>
              <td> </td>
              <td>
                <button
                  onClick={(e) => this.fSubmit(e)}
                  className="btn btn-primary"
                >
                  submit{" "}
                </button>
              </td>
            </tr>
          </table>
        </form>
        <br></br>

        <table>
        <h2 align="left">Student Data </h2>
          {datas.map((data, i) => (
            <tbody>
              <tr key={i}>
                <td> {i + 1}</td> <td> {data.id}</td> <td> {data.name}</td>
                <td>
                  <button
                    onClick={() => this.fRemove(i)}
                    className="btn btn-danger"
                  >
                    remove{" "}
                  </button>{" "}
                </td>
                <td>
                  {" "}
                  <button
                    onClick={() => this.fEdit(i)}
                    className="btn btn-success"
                  >
                    edit{" "}
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    );
  }
}

export default CrudExample;
