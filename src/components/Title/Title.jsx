import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './Title.module.scss'

import { connect } from 'react-redux'

import { screen } from '../../data/resolution'

class Contacts extends React.Component {
  static propTypes = {
    resolution: PropTypes.number.isRequired,
    mainTitleUp: PropTypes.string.isRequired,
    mainTitleDown: PropTypes.string.isRequired,
  }

  render() {
    return (
      <h1
        className={classNames(
          styles.title,
          this.props.resolution === screen.DESKTOP && styles.title_desktop,
          this.props.resolution === screen.LAPTOP && styles.title_laptop,
          this.props.resolution === screen.TABLET && styles.title_tablet,
          this.props.resolution === screen.IPHONE && styles.title_iphone,
          this.props.resolution === screen.MOBILE && styles.title_mobile
        )}
      >
        {this.props.mainTitleUp}
        <br />
        {this.props.mainTitleDown}
      </h1>
    )
  }
}
const mapStateToProps = ({ contentReducer }) => ({
  resolution: contentReducer.resolution,
  mainTitleUp: contentReducer.mainTitleUp,
  mainTitleDown: contentReducer.mainTitleDown,
})

export default connect(mapStateToProps)(Contacts)
