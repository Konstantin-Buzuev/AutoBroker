import {
  SET_VIEW_DESKTOP,
  SET_VIEW_LAPTOP,
  SET_VIEW_TABLET,
  SET_VIEW_IPHONE,
  SET_VIEW_MOBILE,
} from '../types'

import { screen } from '../../data/resolution'

export const setViewDesktop = () => ({
  type: SET_VIEW_DESKTOP,
  payload: screen.DESKTOP,
})

export const setViewLaptop = () => ({
  type: SET_VIEW_LAPTOP,
  payload: screen.LAPTOP,
})

export const setViewTablet = () => ({
  type: SET_VIEW_TABLET,
  payload: screen.TABLET,
})

export const setViewIphone = () => ({
  type: SET_VIEW_IPHONE,
  payload: screen.IPHONE,
})

export const setViewMobile = () => ({
  type: SET_VIEW_MOBILE,
  payload: screen.MOBILE,
})
