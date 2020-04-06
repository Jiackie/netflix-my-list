export const FETCH_PENDING = 'FETCH_PENDING';
export const FETCH_ERROR = 'FETCH_ERROR';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const REMOVE_FROM_MY_LIST = "REMOVE_FROM_MY_LIST";
export const ADD_TO_MY_LIST = "ADD_TO_MY_LIST";


export function fetchPending() {
  return {
    type: FETCH_PENDING
  };
}

export function fetchError(error) {
  return {
    type: FETCH_ERROR,
    error: error
  };
}

export function fetchSuccess(list) {
  return {
    type: FETCH_SUCCESS,
    list: list.mylist,
    recommendation: list.recommendations
  };
}

export function fetchList() {
  return dispatch => {
    dispatch(fetchPending());
    fetch('https://4612cd5d-6a03-4ed3-b98d-572baf71b15b.mock.pstmn.io/netflix_mylist')
    .then(res => res.json())
    .then(res => {
      if (res.error) {
        throw(res.error);
      }

      dispatch(fetchSuccess(res));
      return res;
    })
    .catch(error => {
      dispatch(fetchError(error));
    })
  }
}

export function deleteMyList(id) {
  return {
    type: REMOVE_FROM_MY_LIST,
    id: id
  };
}

export function addToMyList(id) {
  return {
    type: ADD_TO_MY_LIST,
    id: id
  };
}