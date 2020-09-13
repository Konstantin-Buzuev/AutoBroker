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
          this.props.resolution === screen.TABLET && styles.contacts_tablet,
          this.props.resolution === screen.IPHONE && styles.contacts_iphone,
          this.props.resolution === screen.MOBILE && styles.contacts_mobile
        )}
      >
        <span
          className={classNames(
            styles.contacts__phone,
            this.props.resolution === screen.DESKTOP &&
              styles.contacts__phone_desktop,
            this.props.resolution === screen.LAPTOP &&
              styles.contacts__phone_laptop,
            this.props.resolution === screen.TABLET &&
              styles.contacts__phone_tablet,
            this.props.resolution === screen.IPHONE &&
              styles.contacts__phone_iphone,
            this.props.resolution === screen.MOBILE &&
              styles.contacts__phone_mobile
          )}
          children={this.props.phone}
        ></span>
        <span
          className={classNames(
            styles.contacts__address,
            this.props.resolution === screen.DESKTOP &&
              styles.contacts__address_desktop,
            this.props.resolution === screen.LAPTOP &&
              styles.contacts__address_laptop,
            this.props.resolution === screen.TABLET &&
              styles.contacts__address_tablet,
            this.props.resolution === screen.IPHONE &&
              styles.contacts__address_iphone,
            this.props.resolution === screen.MOBILE &&
              styles.contacts__address_mobile
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
