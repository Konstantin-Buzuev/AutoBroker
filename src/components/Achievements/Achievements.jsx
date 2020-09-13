import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Achievements.module.scss'

import { connect } from 'react-redux'

import { screen } from '../../data/resolution'

class Achievements extends React.Component {
  static propTypes = {
    resolution: PropTypes.number.isRequired,
    achievements: PropTypes.array.isRequired,
  }
  renderAchievements = () =>
    this.props.achievements.map((item, index) => (
      <div
        className={classNames(
          styles.achievement,
          this.props.resolution === screen.DESKTOP &&
            styles.achievement_desktop,
          this.props.resolution === screen.LAPTOP && styles.achievement_laptop,
          this.props.resolution === screen.TABLET && styles.achievement_tablet,
          this.props.resolution === screen.IPHONE && styles.achievement_iphone,
          this.props.resolution === screen.MOBILE && styles.achievement_mobile
        )}
        key={index}
      >
        <span
          className={classNames(
            styles.achievement__number,
            this.props.resolution === screen.DESKTOP &&
              styles.achievement__number_desktop,
            this.props.resolution === screen.LAPTOP &&
              styles.achievement__number_laptop,
            this.props.resolution === screen.TABLET &&
              styles.achievement__number_tablet,
            this.props.resolution === screen.IPHONE &&
              styles.achievement__number_iphone,
            this.props.resolution === screen.MOBILE &&
              styles.achievement__number_mobile
          )}
        >
          {item.number}
        </span>
        <div
          className={classNames(
            styles.achievement__description,
            this.props.resolution === screen.DESKTOP &&
              styles.achievement__description_desktop,
            this.props.resolution === screen.LAPTOP &&
              styles.achievement__description_laptop,
            this.props.resolution === screen.TABLET &&
              styles.achievement__description_tablet,
            this.props.resolution === screen.IPHONE &&
              styles.achievement__description_iphone,
            this.props.resolution === screen.MOBILE &&
              styles.achievement__description_mobile
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
          styles.wrapper,
          this.props.resolution === screen.DESKTOP &&
            styles.achievements_desktop,
          this.props.resolution === screen.LAPTOP && styles.wrapper_laptop,
          this.props.resolution === screen.TABLET && styles.wrapper_tablet,
          this.props.resolution === screen.IPHONE && styles.wrapper_iphone,
          this.props.resolution === screen.MOBILE && styles.wrapper_mobile
        )}
        children={this.renderAchievements()}
      ></div>
    )
  }
}
const mapStateToProps = ({ contentReducer }) => ({
  resolution: contentReducer.resolution,
  achievements: contentReducer.achievements,
})

export default connect(mapStateToProps)(Achievements)
