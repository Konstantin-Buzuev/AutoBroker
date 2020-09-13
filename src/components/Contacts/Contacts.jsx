import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Contacts.module.scss'

import { connect } from 'react-redux'

import { screen } from '../../data/resolution'

class Contacts extends React.Component {
  static propTypes = {
    phone: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    resolution: PropTypes.number.isRequired,
  }

  render() {
    return (
      <div
        className={classNames(
          styles.contacts,
          this.props.resolution === screen.DESKTOP && styles.contacts_desktop,
          this.props.resolution === screen.LAPTOP && styles.contacts_laptop,
          this.props.resolution === screen.TABLET && styles.contacts_tablet
        )}
      >
        <span
          className={classNames(
            styles.contacts__phone,
            (this.props.resolution === screen.DESKTOP ||
              this.props.resolution === screen.LAPTOP ||
              this.props.resolution === screen.TABLET) &&
              styles.contacts__phone_left,
            (this.props.resolution === screen.IPHONE ||
              this.props.resolution === screen.MOBILE) &&
              styles.contacts__phone_center
          )}
          children={this.props.phone}
        ></span>
        <span
          className={classNames(
            styles.contacts__address,
            (this.props.resolution === screen.DESKTOP ||
              this.props.resolution === screen.LAPTOP ||
              this.props.resolution === screen.TABLET ||
              this.props.resolution === screen.IPHONE) &&
              styles.contacts__address_left,
            this.props.resolution === screen.MOBILE &&
              styles.contacts__address_center,
            (this.props.resolution === screen.TABLET ||
              this.props.resolution === screen.IPHONE ||
              this.props.resolution === screen.MOBILE) &&
              styles.contacts__address_small
          )}
          children={this.props.address}
        ></span>
      </div>
    )
  }
}
const mapStateToProps = ({ contentReducer }) => ({
  resolution: contentReducer.resolution,
  address: contentReducer.address,
  phone: contentReducer.phone,
})

export default connect(mapStateToProps)(Contacts)
