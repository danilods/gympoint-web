import produce from 'immer';

const INITIAL_STATE = {
  loading: false
};

export default function student(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@student/CREATE_STUDENT_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@student/UPDATE_STUDENT_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@student/DELETE_STUDENT_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@student/STUDENT_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@student/STUDENT_REQUEST_FAILURE': {
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
