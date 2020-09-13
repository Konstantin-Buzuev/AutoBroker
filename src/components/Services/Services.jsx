import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Services.module.scss'

import { connect } from 'react-redux'

import { screen } from '../../data/resolution'

class Services extends React.Component {
  static propTypes = {
    resolution: PropTypes.number.isRequired,
    services: PropTypes.array.isRequired,
  }
  renderServices = () =>
    this.props.services.map((item, index) => (
      <div
        className={classNames(
          styles.service,
          this.props.resolution === screen.DESKTOP && styles.service_desktop,
          this.props.resolution === screen.LAPTOP && styles.service_laptop,
          this.props.resolution === screen.TABLET && styles.service_tablet,
          this.props.resolution === screen.IPHONE && styles.service_iphone,
          this.props.resolution === screen.MOBILE && styles.service_mobile
        )}
        key={index}
      >
        <div
          className={classNames(
            styles.service__icon,
            this.props.resolution === screen.DESKTOP &&
              styles.service__icon_desktop,
            this.props.resolution === screen.LAPTOP &&
              styles.service__icon_laptop,
            this.props.resolution === screen.TABLET &&
              styles.service__icon_tablet,
            this.props.resolution === screen.IPHONE &&
              styles.service__icon_iphone,
            this.props.resolution === screen.MOBILE &&
              styles.service__icon_mobile
          )}
        ></div>
        <div
          className={classNames(
            styles.service__description,
            this.props.resolution === screen.DESKTOP &&
              styles.service__description_desktop,
            this.props.resolution === screen.LAPTOP &&
              styles.service__description_laptop,
            this.props.resolution === screen.TABLET &&
              styles.service__description_tablet,
            this.props.resolution === screen.IPHONE &&
              styles.service__description_iphone,
            this.props.resolution === screen.MOBILE &&
              styles.service__description_mobile
          )}
        >
          {item.description}
        </div>
      </div>
    ))

  render() {
    return (
      <div
        className={classNames(
          styles.services,
          this.props.resolution === screen.DESKTOP && styles.services_desktop,
          this.props.resolution === screen.LAPTOP && styles.services_laptop,
          this.props.resolution === screen.TABLET && styles.services_tablet,
          this.props.resolution === screen.IPHONE && styles.services_iphone,
          this.props.resolution === screen.MOBILE && styles.services_mobile
        )}
      >
        <div
          className={classNames(
            styles.wrapper,
            this.props.resolution === screen.DESKTOP && styles.wrapper_desktop,
            this.props.resolution === screen.LAPTOP && styles.wrapper_laptop,
            this.props.resolution === screen.TABLET && styles.wrapper_tablet,
            this.props.resolution === screen.IPHONE && styles.wrapper_iphone,
            this.props.resolution === screen.MOBILE && styles.wrapper_mobile
          )}
          children={this.renderServices()}
        ></div>
        {(this.props.resolution === screen.TABLET ||
          this.props.resolution === screen.IPHONE ||
          this.props.resolution === screen.MOBILE) && (
          <div
            className={classNames(
              styles.image,
              this.props.resolution === screen.TABLET && styles.image_tablet,
              this.props.resolution === screen.IPHONE && styles.image_iphone,
              this.props.resolution === screen.MOBILE && styles.image_mobile
            )}
          ></div>
        )}
      </div>
    )
  }
}
const mapStateToProps = ({ contentReducer }) => ({
  resolution: contentReducer.resolution,
  services: contentReducer.services,
})

export default connect(mapStateToProps)(Services)
