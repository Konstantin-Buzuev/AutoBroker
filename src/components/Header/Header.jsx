import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Header.module.scss'
import { connect } from 'react-redux'

import { screen } from '../../data/resolution'
import Contacts from '../Contacts/Contacts'
import MenuButton from '../Menu/MenuButton'

class Header extends React.Component {
  static propTypes = {
    resolution: PropTypes.number.isRequired,
  }

  render() {
    return (
      <header
        className={classNames(
          styles.header,
          this.props.resolution === screen.DESKTOP && styles.header_desktop,
          this.props.resolution === screen.LAPTOP && styles.header_laptop,
          this.props.resolution === screen.TABLET && styles.header_tablet,
          this.props.resolution === screen.IPHONE && styles.header_iphone,
          this.props.resolution === screen.MOBILE && styles.header_mobile
        )}
      >
        <MenuButton />
        <div
          className={classNames(
            styles.header__logo,
            (this.props.resolution === screen.DESKTOP ||
              this.props.resolution === screen.LAPTOP) &&
              styles.header__logo_big,
            (this.props.resolution === screen.TABLET ||
              this.props.resolution === screen.IPHONE) &&
              styles.header__logo_small,
            this.props.resolution === screen.MOBILE && styles.header__logo_wide,
            this.props.resolution === screen.DESKTOP &&
              styles.header__logo_desktop,
            this.props.resolution === screen.LAPTOP &&
              styles.header__logo_laptop,
            this.props.resolution === screen.TABLET &&
              styles.header__logo_tablet
          )}
        ></div>
        <Contacts />
      </header>
    )
  }
}
const mapStateToProps = ({ contentReducer }) => ({
  resolution: contentReducer.resolution,
})

export default connect(mapStateToProps)(Header)
