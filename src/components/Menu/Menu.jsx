import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Menu.module.scss'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { toggleMenu } from '../../redux/content/actions'

import { menu } from '../../data/menu'

class Menu extends React.Component {
  static propTypes = {
    resolution: PropTypes.number.isRequired,
    menuShow: PropTypes.bool.isRequired,
    menuItems: PropTypes.array.isRequired,
  }

  renderMenuItems = () =>
    this.props.menuItems.map((item, index) => (
      <div
        className={classNames(
          styles.menu__item,
          item.type === menu.SECTION && styles.menu__item_section,
          item.type === menu.SUBSECTION && styles.menu__item_subsection
        )}
        key={index}
      >
        {item.name}
      </div>
    ))

  render() {
    return (
      <>
        <div
          className={classNames(
            styles.menu,
            !this.props.menuShow && styles.menu_hide
          )}
        >
          <div
            className={classNames(
              styles.menu__wrapper,
              !this.props.menuShow && styles.menu__wrapper_hide
            )}
            children={this.renderMenuItems()}
          ></div>
        </div>
      </>
    )
  }
}
const mapStateToProps = ({ contentReducer }) => ({
  resolution: contentReducer.resolution,
  menuShow: contentReducer.menuShow,
  menuItems: contentReducer.menuItems,
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      toggleMenu,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
