import { all } from 'redux-saga/effects';
import auth from './auth/sagas';
import user from './user/sagas';
import student from './students/sagas';
import plan from './plans/sagas';
import enrollment from './enrollments/sagas';
import helpers from './helpersOrders/sagas';

export default function* rootSaga() {
  return yield all([auth, user, student, plan, enrollment, helpers]);
}
