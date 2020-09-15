import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Slider.module.scss'
import Carousel from 'react-elastic-carousel'
import { connect } from 'react-redux'

import { screen } from '../../data/resolution'

class Slider extends React.Component {
  static propTypes = {
    resolution: PropTypes.number.isRequired,
    carsAmount: PropTypes.number.isRequired,
    sliderHeader: PropTypes.string.isRequired,
    cards: PropTypes.array.isRequired,
    sliderButtonText: PropTypes.string.isRequired,
    slideButtonText: PropTypes.string.isRequired,
  }
  buttonClick = async (e) => {
    if (e.target.classList.contains(classNames(styles.activeOne))) {
      e.target.classList.remove(classNames(styles.activeOne))
      e.target.classList.add(classNames(styles.activeTwo))
    } else {
      e.target.classList.add(classNames(styles.activeOne))
      e.target.classList.remove(classNames(styles.activeTwo))
    }
  }
  handleNumber = (price) => {
    if (price) {
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    }
    return '0'
  }
  renderCards = () =>
    this.props.cards.map((item, index) => (
      <div
        className={classNames(
          styles.slide,
          this.props.resolution === screen.DESKTOP && styles.slide_desktop,
          this.props.resolution === screen.LAPTOP && styles.slide_laptop,
          this.props.resolution === screen.TABLET && styles.slide_tablet,
          this.props.resolution === screen.IPHONE && styles.slide_iphone,
          this.props.resolution === screen.MOBILE && styles.slide_mobile
        )}
        key={index}
      >
        <div
          className={classNames(
            styles.slide__image,
            this.props.resolution === screen.DESKTOP &&
              styles.slide__image_desktop,
            this.props.resolution === screen.LAPTOP &&
              styles.slide__image_laptop,
            this.props.resolution === screen.TABLET &&
              styles.slide__image_tablet,
            this.props.resolution === screen.IPHONE &&
              styles.slide__image_iphone,
            this.props.resolution === screen.MOBILE &&
              styles.slide__image_mobile
          )}
        ></div>
        <div
          className={classNames(
            styles.slide__details,
            this.props.resolution === screen.DESKTOP &&
              styles.slide__details_desktop,
            this.props.resolution === screen.LAPTOP &&
              styles.slide__details_laptop,
            this.props.resolution === screen.TABLET &&
              styles.slide__details_tablet,
            this.props.resolution === screen.IPHONE &&
              styles.slide__details_iphone,
            this.props.resolution === screen.MOBILE &&
              styles.slide__details_mobile
          )}
        >
          <span
            className={classNames(
              styles.slide__model,
              this.props.resolution === screen.DESKTOP &&
                styles.slide__model_desktop,
              this.props.resolution === screen.LAPTOP &&
                styles.slide__model_laptop,
              this.props.resolution === screen.TABLET &&
                styles.slide__model_tablet,
              this.props.resolution === screen.IPHONE &&
                styles.slide__model_iphone,
              this.props.resolution === screen.MOBILE &&
                styles.slide__model_mobile
            )}
          >
            {item.model}
          </span>
          <span
            className={classNames(
              styles.slide__price,
              this.props.resolution === screen.DESKTOP &&
                styles.slide__price_desktop,
              this.props.resolution === screen.LAPTOP &&
                styles.slide__price_laptop,
              this.props.resolution === screen.TABLET &&
                styles.slide__price_tablet,
              this.props.resolution === screen.IPHONE &&
                styles.slide__price_iphone,
              this.props.resolution === screen.MOBILE &&
                styles.slide__price_mobile
            )}
          >
            {this.handleNumber(item.price) + ' ₽'}
          </span>
          <div
            className={classNames(
              styles.slide__credit,
              this.props.resolution === screen.DESKTOP &&
                styles.slide__credit_desktop,
              this.props.resolution === screen.LAPTOP &&
                styles.slide__credit_laptop,
              this.props.resolution === screen.TABLET &&
                styles.slide__credit_tablet,
              this.props.resolution === screen.IPHONE &&
                styles.slide__credit_iphone,
              this.props.resolution === screen.MOBILE &&
                styles.slide__credit_mobile
            )}
          >
            {`в кредит от ${this.handleNumber(item.price)} ₽`}
          </div>
          <ul
            className={classNames(
              styles.slide__list,
              this.props.resolution === screen.DESKTOP &&
                styles.slide__list_desktop,
              this.props.resolution === screen.LAPTOP &&
                styles.slide__list_laptop,
              this.props.resolution === screen.TABLET &&
                styles.slide__list_tablet,
              this.props.resolution === screen.IPHONE &&
                styles.slide__list_iphone,
              this.props.resolution === screen.MOBILE &&
                styles.slide__list_mobile
            )}
          >
            <li>{`Год выпуска: ${item.year}`}</li>
            <li>{`Пробег: ${this.handleNumber(item.mileage)} км`}</li>
            <li>{`Двигатель: ${item.engine}, ${item.power} л/с`}</li>
            <li>{`КПП: ${item.transmission}`}</li>
            <li>{`Кузов: ${item.body}`}</li>
            <li>{`Привод: ${item.drive}`}</li>
          </ul>
          <div
            className={classNames(
              styles.slide__button,
              this.props.resolution === screen.DESKTOP &&
                styles.slide__button_desktop,
              this.props.resolution === screen.LAPTOP &&
                styles.slide__button_laptop,
              this.props.resolution === screen.TABLET &&
                styles.slide__button_tablet,
              this.props.resolution === screen.IPHONE &&
                styles.slide__button_iphone,
              this.props.resolution === screen.MOBILE &&
                styles.slide__button_mobile
            )}
            onClick={(e) => {
              this.buttonClick(e)
            }}
          >
            {this.props.slideButtonText}
          </div>
        </div>
      </div>
    ))
  render() {
    let slidesPerScreen = 1 // Mobile, Iphone and Tablet
    if (
      this.props.resolution === screen.DESKTOP ||
      this.props.resolution === screen.LAPTOP
    ) {
      slidesPerScreen++
    }
    console.log(slidesPerScreen)
    return (
      <div
        className={classNames(
          styles.slider,
          this.props.resolution === screen.DESKTOP && styles.slider_desktop,
          this.props.resolution === screen.LAPTOP && styles.slider_laptop,
          this.props.resolution === screen.TABLET && styles.slider_tablet,
          this.props.resolution === screen.IPHONE && styles.slider_iphone,
          this.props.resolution === screen.MOBILE && styles.slider_mobile
        )}
      >
        <h2
          className={classNames(
            styles.slider__header,
            this.props.resolution === screen.DESKTOP &&
              styles.slider__header_desktop,
            this.props.resolution === screen.LAPTOP &&
              styles.slider__header_laptop,
            this.props.resolution === screen.TABLET &&
              styles.slider__header_tablet,
            this.props.resolution === screen.IPHONE &&
              styles.slider__header_iphone,
            this.props.resolution === screen.MOBILE &&
              styles.slider__header_mobile
          )}
        >
          {this.props.carsAmount + this.props.sliderHeader}
        </h2>
        <Carousel
          children={this.renderCards()}
          className=""
          style={{}}
          verticalMode={false}
          pagination={true}
          transitionMs={400}
          itemsToShow={
            this.props.resolution === screen.DESKTOP ||
            this.props.resolution === screen.LAPTOP
              ? 2
              : 1
          }
          itemsToScroll={
            this.props.resolution === screen.DESKTOP ||
            this.props.resolution === screen.LAPTOP
              ? 2
              : 1
          }
          showArrows={false}
          renderPagination={({ pages, activePage, onClick }) => {
            return (
              <div className={classNames(styles.pagination)}>
                {pages.map((page) => {
                  const isActivePage = activePage === page
                  return (
                    <button
                      tabIndex="0"
                      key={page}
                      onClick={() => onClick(page)}
                      className={classNames(
                        styles.pagination__bullet,
                        this.props.resolution === screen.DESKTOP &&
                          styles.pagination__bullet_desktop,
                        this.props.resolution === screen.LAPTOP &&
                          styles.pagination__bullet_laptop,
                        this.props.resolution === screen.TABLET &&
                          styles.pagination__bullet_tablet,
                        this.props.resolution === screen.IPHONE &&
                          styles.pagination__bullet_iphone,
                        this.props.resolution === screen.MOBILE &&
                          styles.pagination__bullet_mobile,
                        this.props.resolution === screen.DESKTOP &&
                          isActivePage &&
                          styles.pagination__bullet_desktop_active,
                        this.props.resolution === screen.LAPTOP &&
                          isActivePage &&
                          styles.pagination__bullet_laptop_active,
                        this.props.resolution === screen.TABLET &&
                          isActivePage &&
                          styles.pagination__bullet_tablet_active,
                        this.props.resolution === screen.IPHONE &&
                          isActivePage &&
                          styles.pagination__bullet_iphone_active,
                        this.props.resolution === screen.MOBILE &&
                          isActivePage &&
                          styles.pagination__bullet_mobile_active
                      )}
                      active={isActivePage.toString()}
                      type="button"
                    ></button>
                  )
                })}
              </div>
            )
          }}
        />

        <div
          className={classNames(
            styles.slider__button,
            this.props.resolution === screen.DESKTOP &&
              styles.slider__button_desktop,
            this.props.resolution === screen.LAPTOP &&
              styles.slider__button_laptop,
            this.props.resolution === screen.TABLET &&
              styles.slider__button_tablet,
            this.props.resolution === screen.IPHONE &&
              styles.slider__button_iphone,
            this.props.resolution === screen.MOBILE &&
              styles.slider__button_mobile
          )}
          onClick={(e) => {
            this.buttonClick(e)
          }}
        >
          {this.props.sliderButtonText}
        </div>
      </div>
    )
  }
}
const mapStateToProps = ({ contentReducer }) => ({
  resolution: contentReducer.resolution,
  carsAmount: contentReducer.carsAmount,
  cards: contentReducer.cards,
  sliderHeader: contentReducer.sliderHeader,
  sliderButtonText: contentReducer.sliderButtonText,
  slideButtonText: contentReducer.slideButtonText,
})

export default connect(mapStateToProps)(Slider)
