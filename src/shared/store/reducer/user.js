export const INITIAL_STATE = {
  user: [],
  hasFilter: false,
  hasUser: false,

  loading: false,
  error: null,
}

export default function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'GET_USER_REQUESTED':
      return { ...state, loading: true, hasFilter: false }
    case 'GET_USER_SUCSESS':
      return {
        ...state,
        loading: false,

        user: action.user,

        hasFilter: false,
        hasUser: true,
      }
    case 'GET_USER_FAILED':
      return { ...state, loading: false, hasUser: false, error: action.message }

    case 'SEARCH_USER_REQUESTED':
      return { ...state, loading: true, hasFilter: true }
    case 'SEARCH_USER_SUCSESS':
      return {
        ...state,
        loading: false,

        user: action.user,

        hasFilter: true,
        hasUser: true,
      }
    case 'SEARCH_USER_FAILED':
      return { ...state, loading: false, hasUser: false, error: action.message }

    default:
      return state
  }
}
