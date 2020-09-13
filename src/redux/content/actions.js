import { SET_VIEW, TOGGLE_MENU } from '../types'

import { screen } from '../../data/resolution'

export const setView = (width) => {
  let resolution =
    width >= screen.DESKTOP
      ? screen.DESKTOP
      : width >= screen.LAPTOP
      ? screen.LAPTOP
      : width >= screen.TABLET
      ? screen.TABLET
      : width >= screen.IPHONE
      ? screen.IPHONE
      : screen.MOBILE
  return {
    type: SET_VIEW,
    payload: resolution,
  }
}

export const toggleMenu = () => {
  return {
    type: TOGGLE_MENU,
  }
}
