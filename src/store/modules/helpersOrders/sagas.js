import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';

import {
  updateStudentRequest,
  studentFailure,
  studentSuccess
} from './actions';

export function* createStudent({ payload }) {
  try {
    const { student } = payload;

    console.tron.error(student);

    yield call(api.post, 'students-create', student);

    yield put(studentSuccess());
    toast.success('Registro criado com sucesso!');
  } catch (err) {
    toast.error('Erro ao criar registro. Confira os dados!');
    yield put(studentFailure());
  }
}

export function* updateStudent({ payload }) {
  try {
    const { student, studentId } = payload;

    const response = yield call(api.put, `students/${studentId}`, student);

    toast.success('Registro atualizado com sucesso!');

    yield put(updateStudentRequest(response.data));
  } catch (err) {
    toast.error('Erro ao atualizar registro. Confira os dados!');
    yield put(studentFailure());
  }
}

export function* deleteStudent({ payload }) {
  try {
    const { studentId } = payload;

    yield call(api.delete, `students/${studentId}`);

    toast.success('Registro removido com sucesso!');
  } catch (err) {
    toast.error('Erro ao excluir registro. Confira os dados!');
    yield put(studentFailure());
  }
}

export default all([
  takeLatest('@student/CREATE_STUDENT_REQUEST', createStudent),
  takeLatest('@student/UPDATE_STUDENT_REQUEST', updateStudent),
  takeLatest('@student/DELETE_STUDENT_REQUEST', deleteStudent)
]);
