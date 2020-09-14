import { SET_VIEW, TOGGLE_MENU } from '../types'

import { screen } from '../../data/resolution'
import { menu } from '../../data/menu'
import { engine, transmission, body, drive } from '../../data/cars'

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
  auxTitle: 'Продажа авто с пробегом в самаре',
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
  services: [
    {
      description: 'Ведется видеоконтроль и видеофиксация',
    },
    {
      description: 'Бесплатная стоянка',
    },
    {
      description: 'Охрана ЧОП',
    },
    {
      description:
        'Автомобили находятся друг от друга на безопасном расстоянии ',
    },
    {
      description: 'Персональный менеджер и техник',
    },
    {
      description: 'Мы несем полную материальную ответственность за автомобиль',
    },
  ],
  carsAmount: 298,
  sliderHeader: ' автомобилей в нашей базе',
  cars: [
    {
      model: 'LIFAN SOLANO',
      price: 1499000,
      credit: 12000,
      year: 2010,
      mileage: 110000,
      engine: engine.PETROL,
      power: 200,
      transmission: transmission.AUTOMATIC,
      body: body.SEDAN,
      drive: drive.FRONT,
    },
    {
      model: 'LIFAN SOLANO',
      price: 1499000,
      credit: 12000,
      year: 2010,
      mileage: 110000,
      engine: engine.PETROL,
      power: 200,
      transmission: transmission.AUTOMATIC,
      body: body.SEDAN,
      drive: drive.FRONT,
    },
    {
      model: 'LIFAN SOLANO',
      price: 1499000,
      credit: 12000,
      year: 2010,
      mileage: 110000,
      engine: engine.PETROL,
      power: 200,
      transmission: transmission.AUTOMATIC,
      body: body.SEDAN,
      drive: drive.FRONT,
    },
    {
      model: 'LIFAN SOLANO',
      price: 1499000,
      credit: 12000,
      year: 2010,
      mileage: 110000,
      engine: engine.PETROL,
      power: 200,
      transmission: transmission.AUTOMATIC,
      body: body.SEDAN,
      drive: drive.FRONT,
    },
    {
      model: 'LIFAN SOLANO',
      price: 1499000,
      credit: 12000,
      year: 2010,
      mileage: 110000,
      engine: engine.PETROL,
      power: 200,
      transmission: transmission.AUTOMATIC,
      body: body.SEDAN,
      drive: drive.FRONT,
    },
    {
      model: 'LIFAN SOLANO',
      price: 1499000,
      credit: 12000,
      year: 2010,
      mileage: 110000,
      engine: engine.PETROL,
      power: 200,
      transmission: transmission.AUTOMATIC,
      body: body.SEDAN,
      drive: drive.FRONT,
    },
    {
      model: 'LIFAN SOLANO',
      price: 1499000,
      credit: 12000,
      year: 2010,
      mileage: 110000,
      engine: engine.PETROL,
      power: 200,
      transmission: transmission.AUTOMATIC,
      body: body.SEDAN,
      drive: drive.FRONT,
    },
    {
      model: 'LIFAN SOLANO',
      price: 1499000,
      credit: 12000,
      year: 2010,
      mileage: 110000,
      engine: engine.PETROL,
      power: 200,
      transmission: transmission.AUTOMATIC,
      body: body.SEDAN,
      drive: drive.FRONT,
    },
  ],
  sliderButtonText: 'Смотреть все авто',
  slideButtonText: 'Подробнее',
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
