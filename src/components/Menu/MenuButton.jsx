import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './MenuButton.module.scss'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { toggleMenu } from '../../redux/content/actions'

import { screen } from '../../data/resolution'

class Menu extends React.Component {
  static propTypes = {
    resolution: PropTypes.number.isRequired,
    menuShow: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired,
  }

  onClick = () => {
    if (
      this.props.resolution === screen.DESKTOP ||
      this.props.resolution === screen.LAPTOP
    )
      this.props.toggleMenu()
  }

  render() {
    return (
      <>
        <div
          className={classNames(
            styles.button,
            this.props.resolution === screen.MOBILE && styles.button_mobile
          )}
          onClick={this.onClick}
        >
          <span
            className={classNames(
              styles.button__line,
              styles.button__line_top,
              this.props.menuShow && styles.button__cross_top
            )}
          ></span>
          <span
            className={classNames(
              styles.button__line,
              styles.button__line_center,
              this.props.menuShow && styles.button__cross_center
            )}
          ></span>
          <span
            className={classNames(
              styles.button__line,
              styles.button__line_bottom,
              this.props.menuShow && styles.button__cross_bottom
            )}
          ></span>
        </div>
      </>
    )
  }
}
const mapStateToProps = ({ contentReducer }) => ({
  resolution: contentReducer.resolution,
  menuShow: contentReducer.menuShow,
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      toggleMenu,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
