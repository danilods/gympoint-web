export function createEnrollmentRequest(enrollment) {
  return {
    type: '@student/CREATE_ENROLLMENT_REQUEST',
    payload: { enrollment }
  };
}

export function updateEnrollmentRequest(id, studentId, enrollment) {
  return {
    type: '@student/UPDATE_ENROLLMENT_REQUEST',
    payload: { id, studentId, enrollment }
  };
}

export function deleteEnrollmentRequest(id) {
  return {
    type: '@student/DELETE_ENROLLMENT_REQUEST',
    payload: { id }
  };
}

export function enrollmentSuccess() {
  return {
    type: '@student/ENROLLMENT_SUCCESS'
  };
}

export function enrollmentFailure() {
  return {
    type: '@student/ENROLLMENT_REQUEST_FAILURE'
  };
}
