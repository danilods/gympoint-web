import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import student from './students/reducer';
import plan from './plans/reducer';
import enrollment from './enrollments/reducer';
import helpers from './helpersOrders/reducer';

export default combineReducers({
  auth,
  user,
  student,
  plan,
  enrollment,
  helpers
});
