import aviaTickets from '../../api/api';

const SET_FILTER = 'filter/SET_FILTER';
const SET_TICKETS = 'filter/SET_TICKETS';
const SET_FILTERED_TICKETS = 'filter/SET_FILTERED_TICKETS';
const SET_USER_ID = 'filter/SET_USER_ID';

const SET_THE_CHEAPEST = 'filter/SET_THE_CHEAPEST';
const SET_THE_FASTEST = 'filter/SET_THE_FASTEST';
// const SET_OPTIMAL = 'SET_OPTIMAL';

const initialState = {
  filter: {
    all: true,
    noTransfer: true,
    oneTransfer: true,
    twoTransfer: true,
    threeTransfer: true,
  },
  tickets: [],
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      if (
        !action.filter.all
        && action.filter.noTransfer
        && action.filter.oneTransfer
        && action.filter.twoTransfer
        && action.filter.threeTransfer
      ) {
        return {
          ...state,
          filter: {
            ...state.filter,
            ...action.filter,
            all: true,
          },
        };
      }
      if (
        action.filter.all
        && !action.filter.noTransfer
        || !action.filter.oneTransfer
        || !action.filter.twoTransfer
        || !action.filter.threeTransfer
      ) {
        return {
          ...state,
          filter: {
            ...state.filter,
            ...action.filter,
            all: false,
          },
        };
      }
      return {
        ...state,
        filter: {
          ...state.filter,
          ...action.filter,
        },
      };
    case SET_FILTERED_TICKETS:
      return {
        ...state,
        filteredTickets: [...action.filteredTickets],
      };
    case SET_TICKETS:
      return {
        ...state,
        tickets: [...state.tickets, ...action.tickets],
      };
    case SET_USER_ID:
      return {
        ...state,
        userId: action.userId,
      };
    case SET_THE_CHEAPEST:
      return {
        ...state,
        tickets: [...state.tickets.sort((prev, next) => prev.price - next.price)],
      };
    case SET_THE_FASTEST:
      return {
        ...state,
        tickets: [...state.tickets.sort((a, b) => {
          const durationCount = ticket => ticket.segments[0].duration + ticket.segments[1].duration;

          const durationA = durationCount(a);
          const durationB = durationCount(b);

          return durationA - durationB;
        })],
      };
    default:
      return state;
  }
};

const setTickets = tickets => ({ type: SET_TICKETS, tickets });

export const setFilter = filter => ({ type: SET_FILTER, filter });
export const setTheCheapest = () => ({ type: SET_THE_CHEAPEST });
export const setTheFastest = () => ({ type: SET_THE_FASTEST });

export const getAllTickets = () => dispatch => {

  const allData = async (userId) => aviaTickets.getTickets(userId)
    .then(res => {
      dispatch(setTickets(res.tickets));
      if (!res.stop) allData(userId);
    })
    .catch(err => {
      if (err.response.status === 500) {
        allData(userId);
      }
    });

  aviaTickets.getSearchId().then(res => allData(res.searchId)).catch(() => {});

};
export default filterReducer;