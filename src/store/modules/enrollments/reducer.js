import produce from 'immer';

const INITIAL_STATE = {
  loading: false
};

export default function student(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@student/CREATE_ENROLLMENT_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@student/UPDATE_ENROLLMENT_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@student/DELETE_ENROLLMENT_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@student/ENROLLMENT_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@student/ENROLLMENT_REQUEST_FAILURE': {
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
