import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Students from '../pages/Students';
import StudentsForm from '../pages/Students/Form';

import Plans from '../pages/Plans';
import Enrollments from '../pages/Enrollments';
import Helpers from '../pages/Helpers';

import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" exact component={SignUp} />
      <Route path="/dashboard" exact component={Dashboard} isPrivate />
      <Route path="/students" exact component={Students} isPrivate />
      <Route path="/students-create" exact component={StudentsForm} isPrivate />

      <Route path="/plans" exact component={Plans} isPrivate />
      <Route path="/enrollments" exact component={Enrollments} isPrivate />
      <Route path="/helpers" exact component={Helpers} isPrivate />

      <Route path="/profile" exact component={Profile} isPrivate />
    </Switch>
  );
}
