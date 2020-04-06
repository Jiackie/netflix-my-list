import { FETCH_ERROR,
  FETCH_PENDING,
  FETCH_SUCCESS,
  REMOVE_FROM_MY_LIST,
  ADD_TO_MY_LIST } from '../actions';

const initialState = {
  pending: false,
  list: [],
  recommendation: [],
  error: null
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ERROR: {
      return {
        ...state,
        pending: false,
        error: action.error
      };
    }

    case FETCH_PENDING: {
      return {
        ...state,
        pending:true
      };
    }

    case FETCH_SUCCESS: {
      return {
        ...state,
        pending: false,
        list: action.list,
        recommendation: action.recommendation
      };
    }

    case REMOVE_FROM_MY_LIST: {
      const remove_id = action.id;
      const remove_obj = state.list.filter(item => item.id === remove_id);
      return {
        ...state,
        list: state.list.filter(item => item.id !== remove_id),
        recommendation: [...state.recommendation, ...remove_obj]
      };
    }

    case ADD_TO_MY_LIST: {
      const add_id = action.id;
      const add_obj = state.recommendation.filter(item => item.id === add_id);
      return {
        ...state,
        recommendation: state.recommendation.filter(item => item.id !== add_id),
        list: [...state.list, ...add_obj]
      };
    }

    default:
      return state;
  }
}