// ACTIONS
export function getUser(search = 'klayverxd') {
  console.log('getUser action', search)
  return {
    type: `${search ? 'SEARCH_USER_REQUESTED' : 'GET_USER_REQUESTED'}`,
    search: search,
  }
}
