// ACTIONS
export function getUser(search = 'klayverxd') {
  return {
    type: `${search ? 'SEARCH_USER_REQUESTED' : 'GET_USER_REQUESTED'}`,
    search: search,
  }
}
