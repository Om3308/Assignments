import logo from './logo.svg';
import './App.css';
//import Employee from'./AssignmentOnFunctionalComponent/Employee';
//import StateChange from'./AssignmentOnState/ChangeStateEg';
import PropDemo from './AssignmentOnState/PropsChildren';
import CurrentDateWithEventBinding from './AssignmentOnState/CurrentTimeWithBinding';
import ListFruits from './AssignmentOnRendering/DisplayList';
import MultiplyNo from './AssignmentOnRendering/DisplayWithMultiplication';
import UseOfKey from './AssignmentOnRendering/UsekeyAttributeIndex';
import DisplayPersonList from './AssignmentOnRendering/PersonList';
import InlineStyling from './AssignmentsOnStyling/InlineStyling';
import Form from './ExtraAssignments/Form';
import UserForm from './ExtraAssignments/Form';
import EmployeeForm from './ExtraAssignments/EmployeeForm';
import ClockFunction from './ExtraAssignments/DigitalClock';

function App() {
  return (
    <div className="App">
      {/* <h1>I am in Assignment App</h1> */}

      {/* Assignment 3
      <Employee id="101" name="Vijay"/> */}

      {/* Assignment 4
      <Employee name="Jay" heroname="Batman"/>
      <Employee name="Ansh" heroname="SuperMan"/>
      <Employee name="Sara" heroname="Wonder Women"/> */}

      {/* <StateChange/> */}
      {/* <Count1/> */}
      {/* <PropDemo name="Omkar"/> */}
      {/* Assignment 7 (Show Current Date With State And Event Binding ) */}
      {/* <CurrentDateWithEventBinding/> */}

      {/* assignment on Rendering
      <ListFruits/>
      <MultiplyNo/>
      <UseOfKey/>
      <DisplayPersonList/> */}

      
      {/* AssignmentsOnStyling
      <InlineStyling/> */}
      {/* <UserForm/> */}

      {/* <EmployeeForm/> */}
      <ClockFunction/>


    </div>
  )
}
export default App;
