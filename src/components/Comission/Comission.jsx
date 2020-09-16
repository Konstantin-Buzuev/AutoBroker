import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Comission.module.scss'

import { connect } from 'react-redux'

import { screen } from '../../data/resolution'

class Services extends React.Component {
  static propTypes = {
    resolution: PropTypes.number.isRequired,
    comissionHeader: PropTypes.string.isRequired,
    comissionSlogan: PropTypes.string.isRequired,
    comissionListItems: PropTypes.array.isRequired,
    comissionOffer: PropTypes.array.isRequired,
  }
  renderList = () => {
    return this.props.comissionListItems.map((item) => (
      <li
        className={classNames(
          styles.information__listItem,
          this.props.resolution === screen.DESKTOP &&
            styles.information__listItem_desktop,
          this.props.resolution === screen.LAPTOP &&
            styles.information__listItem_laptop,
          this.props.resolution === screen.TABLET &&
            styles.information__listItem_tablet,
          this.props.resolution === screen.IPHONE &&
            styles.information__listItem_iphone,
          this.props.resolution === screen.MOBILE &&
            styles.information__listItem_mobile
        )}
      >
        {item}
      </li>
    ))
  }

  renderOffer = () => {
    return this.props.comissionOffer.map((item) => (
      <p
        className={classNames(
          styles.offer__text,
          this.props.resolution === screen.DESKTOP &&
            styles.offer__text_desktop,
          this.props.resolution === screen.LAPTOP && styles.offer__text_laptop,
          this.props.resolution === screen.TABLET && styles.offer__text_tablet,
          this.props.resolution === screen.IPHONE && styles.offer__text_iphone,
          this.props.resolution === screen.MOBILE && styles.offer__text_mobile
        )}
      >
        {item}
      </p>
    ))
  }
  render() {
    return (
      <div
        className={classNames(
          styles.wrapper,
          this.props.resolution === screen.DESKTOP && styles.wrapper_desktop,
          this.props.resolution === screen.LAPTOP && styles.wrapper_laptop,
          this.props.resolution === screen.TABLET && styles.wrapper_tablet,
          this.props.resolution === screen.IPHONE && styles.wrapper_iphone,
          this.props.resolution === screen.MOBILE && styles.wrapper_mobile
        )}
      >
        <div
          className={classNames(
            styles.information,
            this.props.resolution === screen.DESKTOP &&
              styles.information_desktop,
            this.props.resolution === screen.LAPTOP &&
              styles.information_laptop,
            this.props.resolution === screen.TABLET &&
              styles.information_tablet,
            this.props.resolution === screen.IPHONE &&
              styles.information_iphone,
            this.props.resolution === screen.MOBILE && styles.information_mobile
          )}
        >
          <div
            className={classNames(
              styles.information__imageBox,
              this.props.resolution === screen.DESKTOP &&
                styles.information__imageBox_desktop,
              this.props.resolution === screen.LAPTOP &&
                styles.information__imageBox_laptop,
              this.props.resolution === screen.TABLET &&
                styles.information__imageBox_tablet,
              this.props.resolution === screen.IPHONE &&
                styles.information__imageBox_iphone,
              this.props.resolution === screen.MOBILE &&
                styles.information__imageBox_mobile
            )}
          ></div>

          <div
            className={classNames(
              styles.information__container,
              this.props.resolution === screen.DESKTOP &&
                styles.information__container_desktop,
              this.props.resolution === screen.LAPTOP &&
                styles.information__container_laptop,
              this.props.resolution === screen.TABLET &&
                styles.information__container_tablet,
              this.props.resolution === screen.IPHONE &&
                styles.information__container_iphone,
              this.props.resolution === screen.MOBILE &&
                styles.information__container_mobile
            )}
          >
            <h2
              className={classNames(
                styles.information__title,
                this.props.resolution === screen.DESKTOP &&
                  styles.information__title_desktop,
                this.props.resolution === screen.LAPTOP &&
                  styles.information__title_laptop,
                this.props.resolution === screen.TABLET &&
                  styles.information__title_tablet,
                this.props.resolution === screen.IPHONE &&
                  styles.information__title_iphone,
                this.props.resolution === screen.MOBILE &&
                  styles.information__title_mobile
              )}
            >
              {this.props.comissionHeader}
            </h2>
            <h3
              className={classNames(
                styles.information__slogan,
                this.props.resolution === screen.DESKTOP &&
                  styles.information__slogan_desktop,
                this.props.resolution === screen.LAPTOP &&
                  styles.information__slogan_laptop,
                this.props.resolution === screen.TABLET &&
                  styles.information__slogan_tablet,
                this.props.resolution === screen.IPHONE &&
                  styles.information__slogan_iphone,
                this.props.resolution === screen.MOBILE &&
                  styles.information__slogan_mobile
              )}
            >
              {this.props.comissionSlogan}
            </h3>
            <ul>{this.renderList()}</ul>
          </div>
        </div>
        <div
          className={classNames(
            styles.offer,
            this.props.resolution === screen.DESKTOP && styles.offer_desktop,
            this.props.resolution === screen.LAPTOP && styles.offer_laptop,
            this.props.resolution === screen.TABLET && styles.offer_tablet,
            this.props.resolution === screen.IPHONE && styles.offer_iphone,
            this.props.resolution === screen.MOBILE && styles.offer_mobile
          )}
        >
          {this.renderOffer()}
        </div>
      </div>
    )
  }
}
const mapStateToProps = ({ contentReducer }) => ({
  resolution: contentReducer.resolution,
  comissionHeader: contentReducer.comissionHeader,
  comissionSlogan: contentReducer.comissionSlogan,
  comissionListItems: contentReducer.comissionListItems,
  comissionOffer: contentReducer.comissionOffer,
})

export default connect(mapStateToProps)(Services)
