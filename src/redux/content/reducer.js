import { SET_VIEW, TOGGLE_MENU } from '../types'

import { screen } from '../../data/resolution'
import { menu } from '../../data/menu'

const initialState = {
  phone: '8 (800) 550-88-20',
  address:
    'г. Самара, Улица Георгия Димитрова, автостоянка №26 (ориентир Московское шоссе, 205)',
  resolution: screen.DESKTOP,
  menuShow: false,
  menuItems: [
    {
      name: 'Каталог авто',
      type: menu.SECTION,
    },
    {
      name: 'Об Автоброкере',
      type: menu.SECTION,
    },
    {
      name: 'Контакты',
      type: menu.SECTION,
    },
    {
      name: 'Автокредит',
      type: menu.SECTION,
    },
    {
      name: 'Услуги',
      type: menu.SECTION,
    },
    {
      name: 'Срочная продажа',
      type: menu.SUBSECTION,
    },
    {
      name: 'Комиссионная продажа',
      type: menu.SUBSECTION,
    },
    {
      name: 'Предпродажная подготовка',
      type: menu.SUBSECTION,
    },
    {
      name: 'Оценить авто',
      type: menu.SUBSECTION,
    },
    {
      name: 'Обмен(trade-in)',
      type: menu.SUBSECTION,
    },
    {
      name: 'ОСАГО',
      type: menu.SUBSECTION,
    },
    {
      name: 'Продажа с гарантией и обеспечительным платежом',
      type: menu.SUBSECTION,
    },
    {
      name: 'Онлайн комиссия',
      type: menu.SUBSECTION,
    },
    {
      name: 'КАСКО',
      type: menu.SUBSECTION,
    },
  ],
  mainTitleUp: 'новый формат',
  mainTitleDown: 'продажи авто с пробегом',
  achievements: [
    {
      number: 150,
      description: '150 метров выставочного стенда по центральной улице Самары',
    },
    {
      number: 35,
      description:
        '35 менеджеров будут работать над продажей вашего автомобиля',
    },
    {
      number: 20,
      description:
        '20 банков-партнеров принимают заявки на оформление кредита для вашего автомобиля',
    },
  ],
}

export default function resolutionReducer(state = initialState, action) {
  switch (action.type) {
    case SET_VIEW: {
      return {
        ...state,
        resolution: action.payload,
      }
    }
    case TOGGLE_MENU:
      return {
        ...state,
        menuShow: !state.menuShow,
      }
    default:
      return state
  }
}
