export function createPlanRequest(plan) {
  return {
    type: '@student/CREATE_PLAN_REQUEST',
    payload: { plan }
  };
}

export function updatePlanRequest(planId, plan) {
  return {
    type: '@student/UPDATE_PLAN_REQUEST',
    payload: { planId, plan }
  };
}

export function deletePlanRequest(planId) {
  return {
    type: '@student/DELETE_PLAN_REQUEST',
    payload: { planId }
  };
}

export function planSuccess() {
  return {
    type: '@student/PLAN_SUCCESS'
  };
}

export function planFailure() {
  return {
    type: '@student/PLAN_REQUEST_FAILURE'
  };
}
