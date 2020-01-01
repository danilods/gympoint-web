export function createStudentRequest(student) {
  return {
    type: '@student/CREATE_STUDENT_REQUEST',
    payload: { student }
  };
}

export function updateStudentRequest(studentId, student) {
  return {
    type: '@student/UPDATE_STUDENT_REQUEST',
    payload: { studentId, student }
  };
}

export function deleteStudentRequest(studentId) {
  return {
    type: '@student/DELETE_STUDENT_REQUEST',
    payload: { studentId }
  };
}

export function studentSuccess() {
  return {
    type: '@student/STUDENT_SUCCESS'
  };
}

export function studentFailure() {
  return {
    type: '@student/STUDENT_REQUEST_FAILURE'
  };
}
