import React from "react"

class Crud1 extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: 'Simple Crud App',
            datas: [],
            act: 0,
            index: '',
         
        }
        
    }

    fSubmit = (e) => {
        e.preventDefault();

        console.log('try');

        let datas = this.state.datas;
        let name = this.refs.name.value;
        let email = this.refs.email.value;
       const validEmail= new RegExp(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/);
        if (this.state.act === 0) {
            let data = { name, email }
            datas.push(data);

        }
        else {
            let index = this.state.index;
            datas[index].name = name;
            if(validEmail.test(email)==true)
            {
            datas[index].email = email;
            }
            else{
                document.getElementById('email').innerHTML="Please enter Valid Email ";
            }
        }
        this.setState({
            datas: datas,
            act: 0
        })

        this.refs.myForm.reset();
        this.refs.name.focus();
    }
    fRemove = (i) => {
        let datas = this.state.datas;
        datas.splice(i, 1);
        this.setState({
            datas: datas
        });
        this.refs.myForm.reset();
        this.refs.name.focus();
    }
    
    render() {
        let datas = this.state.datas;
        return (
            <div className="App">
                <h2>{this.state.title}</h2>
                <form ref="myForm" className="myForm">
                    <table style={{ border: "1px solid black" }}>
                        <tr>
                            <th>
                                <label> Name : </label></th>
                            <td>
                                <input type="text" ref="name" placeholder="your name" />
                            </td></tr>
                        <tr>
                            <th>
                                <label> Email :</label>
                            </th><td>
                                <input  id="email" type="text" ref="email" placeholder="your email" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button onClick={(e) => this.fSubmit(e)}>submit </button>
                            </td>
                         </tr>
                    </table>
                </form>
                <br></br>
                <table Border="1" style={{ textAlign: "center" }} >
                    <thead>
                        <tr style={{ backgroundColor: "lightgrey" }}>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            datas.map((d, i) =>
                                <tr key={i}>
                                    <td> {i + 1}</td> <td> {d.name}</td> <td> {d.email}</td>
                                    <td><button onClick={() => this.fRemove(i)} > Remove </button> </td>
                                </tr>
                            )}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default Crud1;