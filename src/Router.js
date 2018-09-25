import React from 'react';
import { Actions, Router, Scene } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 20 }}>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Login Page" />
        </Scene>
        <Scene key="main">
          <Scene
          rightTitle="Add"
          onRight={() => { Actions.employeeCreate(); }}
          key="employeeList"
          component={EmployeeList}
          title="Employees Page"
          initial
          />
          <Scene key="employeeCreate" component={EmployeeCreate} title="Add Employee" />
          <Scene key="employeeEdit" component={EmployeeEdit} title="Edit Employee" />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
