import {
  SET_VIEW_DESKTOP,
  SET_VIEW_LAPTOP,
  SET_VIEW_TABLET,
  SET_VIEW_IPHONE,
  SET_VIEW_MOBILE,
} from '../types'

import { screen } from '../../data/resolution'

const initialState = {
  resolution: screen.DESKTOP,
}

export default function resolutionReducer(state = initialState, action) {
  switch (action.type) {
    case SET_VIEW_DESKTOP:
    case SET_VIEW_LAPTOP:
    case SET_VIEW_TABLET:
    case SET_VIEW_IPHONE:
    case SET_VIEW_MOBILE: {
      return {
        ...state,
        resolution: action.payload,
      }
    }
    default:
      return state
  }
}
