import { call, put, takeLatest } from 'redux-saga/effects'

import { getGithubUser } from '../../../services/api'

function* getUser({ search }) {
  try {
    const user = yield call(getGithubUser, search)

    yield put({
      type: 'SEARCH_USER_SUCSESS',
      user: user.data,
    })
  } catch (error) {
    yield put({
      type: 'SEARCH_USER_FAILED',
      message: error.message,
    })
  }
}

export default function* watchUser() {
  yield takeLatest('SEARCH_USER_REQUESTED', getUser)
}
