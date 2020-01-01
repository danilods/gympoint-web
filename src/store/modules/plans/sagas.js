import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';

import { updatePlanRequest, planSuccess, planFailure } from './actions';

export function* createPlan({ payload }) {
  try {
    const { plan } = payload;

    console.tron.error(plan);

    yield call(api.post, 'plans', plan);

    yield put(planSuccess());
    toast.success('Registro criado com sucesso!');
  } catch (err) {
    toast.error('Erro ao criar registro. Confira os dados!');
    yield put(planFailure());
  }
}

export function* updatePlan({ payload }) {
  try {
    const { plan, planId } = payload;

    const response = yield call(api.put, `plan/${planId}`, plan);

    toast.success('Registro atualizado com sucesso!');

    yield put(updatePlanRequest(response.data));
  } catch (err) {
    toast.error('Erro ao atualizar registro. Confira os dados!');
    yield put(planFailure());
  }
}

export function* deletePlan({ payload }) {
  try {
    const { planId } = payload;

    yield call(api.delete, `plan/${planId}`);

    toast.success('Registro removido com sucesso!');
  } catch (err) {
    toast.error('Erro ao excluir registro. Confira os dados!');
    yield put(planFailure());
  }
}

export default all([
  takeLatest('@student/CREATE_PLAN_REQUEST', createPlan),
  takeLatest('@student/UPDATE_PLAN_REQUEST', updatePlan),
  takeLatest('@student/DELETE_PLAN_REQUEST', deletePlan)
]);
