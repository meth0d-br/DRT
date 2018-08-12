import appConstants from '../constants/appConstants';

const initialState = {
  ages: [
    {
      start: 2,
      end: 4
    },
    {
      start: 5,
      end: 7
    },
    {
      start: 8,
      end: 10
    },
    {
      start: 11,
      end: 13
    }
  ],
  locations: [
    {
      description: '',
      id: ''
    },
  ],
  meta: {
    ages: {
      age: 0,
      selected: 0,
      tabValue: 0
    },
    language: 'en',
    location: '',
    mural: {
      active: 'muralThree',
      selected: 'muralOne'
    }
  },
  murals: [
    {
      description: 'Mural One',
      id: 'muralOne',
      url: 'http://via.placeholder.com/200x100'
    },
    {
      description: 'Mural Two',
      id: 'muralTwo',
      url: 'http://via.placeholder.com/200x100'
    },
    {
      description: 'Mural Three',
      id: 'muralThree',
      url: 'http://via.placeholder.com/200x100'
    },
    {
      description: 'Mural Four',
      id: 'muralFour',
      url: 'http://via.placeholder.com/200x100'
    },
    {
      description: 'Mural Five',
      id: 'muralFive',
      url: 'http://via.placeholder.com/200x100'
    },
    {
      description: 'Mural Six',
      id: 'muralSix',
      url: 'http://via.placeholder.com/200x100'
    },
    {
      description: 'Mural Seven',
      id: 'muralSeven',
      url: 'http://via.placeholder.com/200x100'
    },
    {
      description: 'Mural Eight',
      id: 'muralEight',
      url: 'http://via.placeholder.com/200x100'
    }
  ],
  questions: [
    {
      ages: 0,
      answers: [
        {
          answer: '',
          correct: false,
          id: '',
          responder: ''
        }
      ],
      id: 1,
      mural: 'muralThree',
      pregunta: '',
      question: ''
    }
  ]
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case appConstants.ADMIN_AGES_TAB_VALUE:

      state.meta.ages.tabValue = action.data;

      return Object.assign(
        {},
        state
      );

    case appConstants.ADMIN_MURAL_SELECTED:

      state.meta.mural.selected = action.data;

      return Object.assign(
        {},
        state
      );

    default:
      return state
  }
}

export default appReducer;
