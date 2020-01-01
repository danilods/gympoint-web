import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';

import {
  updateEnrollmentRequest,
  enrollmentFailure,
  enrollmentSuccess
} from './actions';

export function* createEnrollment({ payload }) {
  try {
    const { enrollment } = payload;

    yield call(api.post, 'enrollments', enrollment);

    yield put(enrollmentSuccess());
    toast.success('Registro criado com sucesso!');
  } catch (err) {
    toast.error('Erro ao criar registro. Confira os dados!');
    yield put(enrollmentFailure());
  }
}

export function* updateEnrollment({ payload }) {
  try {
    const { enrollment, id, studentId } = payload;

    const response = yield call(
      api.put,
      `enrollments/${id}/${studentId}`,
      enrollment
    );

    toast.success('Registro atualizado com sucesso!');

    yield put(updateEnrollmentRequest(response.data));
  } catch (err) {
    toast.error('Erro ao atualizar registro. Confira os dados!');
    yield put(enrollmentFailure());
  }
}

export function* deleteEnrollment({ payload }) {
  try {
    const { studentId } = payload;

    yield call(api.delete, `enrollments/${studentId}`);

    toast.success('Registro removido com sucesso!');
  } catch (err) {
    toast.error('Erro ao excluir registro. Confira os dados!');
    yield put(enrollmentFailure());
  }
}

export default all([
  takeLatest('@student/CREATE_ENROLLMENT_REQUEST', createEnrollment),
  takeLatest('@student/UPDATE_ENROLLMENT_REQUEST', updateEnrollment),
  takeLatest('@student/DELETE_ENROLLMENT_REQUEST', deleteEnrollment)
]);
