import produce from 'immer';

const INITIAL_STATE = {
  loading: false
};

export default function plan(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@plan/CREATE_PLAN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@plan/UPDATE_PLAN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@plan/DELETE_PLAN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@plan/PLAN_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@plan/PLAN_REQUEST_FAILURE': {
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
