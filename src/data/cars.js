const engine = Object.freeze({
  PETROL: 'бензиновый',
  DIESEL: 'дизель',
})

const transmission = Object.freeze({
  AUTOMATIC: 'автомат',
  MANUAL: 'ручная',
})

const body = Object.freeze({
  SEDAN: 'cедан',
  WAGON: 'универсал',
  HATCHBACK: 'хэтчбек',
  COUPE: 'купе',
  LIMOUSINE: 'лимузин',
  MINIBUS: 'микроавтобус',
  MINIVAN: 'минивэн',
  HARDTOP: 'хардтоп',
  TOWNCAR: 'таункар',
  COMBI: 'комби',
  LIFTBACK: 'лифтбэк',
  FASTBACK: 'фастбэк',
  CONVERTIBLE: 'кабриолет',
  ROADSTER: 'родстер',
  PHAETON: 'фаэтон',
  LANDO: 'ландо',
  BROUGHAM: 'брогам',
  TARGA: 'тарга',
  SPIDER: 'спайдер',
  SWINGPACK: 'шутингбрейк',
  PICKUP: 'пикап',
  VAN: 'фургон',
})

const drive = Object.freeze({
  FRONT: 'передний',
  REAR: 'задний',
  AWD: 'полный',
})

module.exports = {
  engine,
  transmission,
  body,
  drive,
}
