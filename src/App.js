/* eslint-disable no-unused-vars */
import React,{Component} from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
// //import Employee from'./AssignmentOnFunctionalComponent/Employee';
// //import StateChange from'./AssignmentOnState/ChangeStateEg';
// import PropDemo from './AssignmentOnState/PropsChildren';
// import CurrentDateWithEventBinding from './AssignmentOnState/CurrentTimeWithBinding';
// import ListFruits from './AssignmentOnRendering/DisplayList';
// import MultiplyNo from './AssignmentOnRendering/DisplayWithMultiplication';
// import UseOfKey from './AssignmentOnRendering/UsekeyAttributeIndex';
// import DisplayPersonList from './AssignmentOnRendering/PersonList';
// import InlineStyling from './AssignmentsOnStyling/InlineStyling';
// import Form from './ExtraAssignments/Form';
// import UserForm from './ExtraAssignments/Form';
// import EmployeeForm from './ExtraAssignments/EmployeeForm';
// import ClockFunction from './ExtraAssignments/DigitalClock';
// import RenderChildren from './AssignmentsOnFragments,Component/RenderChildren';
// import ClickCounts from './AssignmentsOnFragments,Component/ClickCounts';
// import MouseOver from './AssignmentsOnFragments,Component/MouseOver';
// import PortalCompDemo from './AssignmentsOnFragments,Component/PortalCompDemo';
// import MemoMovieName from './AssignmentsOnFragments,Component/MemoMovieName';
// import PortalAssignmentDemo from './AssignmentsOnFragments,Component/portalAssignment';
// import RenderProp from './AssignmentsOnFragments,Component/RenderProp';
// import ClickRender from'./AssignmentsOnFragments,Component/ClickRender';
// import MouseRender from'./AssignmentsOnFragments,Component/MouseRender';
// import Crud1 from './AssignmentCrudApplications/Crud1';
// import Stud_info from './AssignmentsOnRouting/Student_info';
// import CrudExample from './AssignmentCrudApplications/CrudExample';

//import Management from "./AssignmentCrudApplications/Management";
// import ReadMoreDemo from './AssignmentsOnHooks/ReadMoreAndReadLessUseState';
// import IncrementAfterOnesecUseEffect from './AssignmentsOnHooks/IncrementAfterOnesecUseEffect';
// import HookDemo from './AssignmentsOnHooks/createlist';
// import UseReducerDemo from './AssignmentsOnHooks/UseReducerDemo';
// import UseReducerDemoComplexState from './AssignmentsOnHooks/UseReducerDemoComplexState';
// import SimpleForm from './AssignmentsOnHooks/Form';
//  import Assignment3 from './AssignmentsOnRouting/Assignment3';
// import TOdoDemo from './AssignmentsOnHooks/Todo';
// import TodoApp from './AssignmentsOnHooks/Todo';
// import Employee from "./AssignmentCrudApplications/Employee";
import CakeMain from "./AssignmentOnRedux/Eg1/CakeMain";
import MainCrud from "./AssignmentCrudApplications/CrudUsingStateAndProp/MainCrud";


function  App () {
 
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
        {/* <UserForm/> */}
        {/* <Management/> */}
        {/* <ReadMoreDemo/> */}
        {/* <IncrementAfterOnesecUseEffect/> */}
        {/* <HookDemo/> */}
        {/* <UseReducerDemo/> */}
        {/* <UseReducerDemoComplexState/> */}

        {/* Custom Hook With Form */}
        {/* <SimpleForm/>  */}
        {/* <Assignment3/> */}
        {/* <TodoApp/> */}

        {/* <BrowserRouter>
          <Switch>
            <Route path="/" component={UserForm} />
            <Route path="./Admin.js" component={Admin} />
            <Route path="./Employee.js" component={Employee} />
          </Switch>
        </BrowserRouter> */}
        {/* <CakeMain/> */}
        <MainCrud/>
        
    </div>
  );

}
export default App;
