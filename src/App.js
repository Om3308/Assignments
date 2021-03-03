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
import RenderChildren from './AssignmentsOnFragments,Component/RenderChildren';
import ClickCounts from './AssignmentsOnFragments,Component/ClickCounts';
import MouseOver from './AssignmentsOnFragments,Component/MouseOver';
import PortalCompDemo from './AssignmentsOnFragments,Component/PortalCompDemo';
import MemoMovieName from './AssignmentsOnFragments,Component/MemoMovieName';
import PortalAssignmentDemo from './AssignmentsOnFragments,Component/portalAssignment';
import RenderProp from './AssignmentsOnFragments,Component/RenderProp';
import ClickRender from'./AssignmentsOnFragments,Component/ClickRender';
import MouseRender from'./AssignmentsOnFragments,Component/MouseRender';
import Crud1 from './AssignmentCrudApplications/Crud1';
import Stud_info from './AssignmentsOnRouting/Student_info';
import CrudExample from './AssignmentCrudApplications/CrudExample';
import Login from './AssignmentCrudApplications/Login';
import Management from './AssignmentCrudApplications/Management';

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
      {/* <ClockFunction/> */}
      
      {/* <RenderChildren name="Raj" id="10"> <h2>These is example of render Children</h2></RenderChildren>
      <RenderChildren name="Sonali" id="21"> <button> Click me</button></RenderChildren>
      <RenderChildren name="Pragati" id="22"> <h2> i love react</h2></RenderChildren> */}

      {/* <ClickCounts/>
      <MouseOver/> */}
      {/* <PortalCompDemo/> */}
      {/* <MemoMovieName name="RajVeer" Date="23/12/2014"/> */}
      {/* <PortalAssignmentDemo/> */}
     
      {/* <RenderProp render={(count,increment)=>{
        <ClickRender count={count} increment={increment}/>
      }}/> */}

      {/* <RenderProp render={(count,increment)=>{
        <MouseRender count={count} increment={increment}/>
      }}/> */}

      {/* <Crud1/> */}
      {/* <Assignment1/> */}
      {/* <Stud_info/> */}
    {/* <CrudExample/> */}
    <Management/>
    </div>
  )
}
export default App;
