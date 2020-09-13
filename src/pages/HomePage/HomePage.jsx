import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setView } from '../../redux/content/actions'
import { screen } from '../../data/resolution'

import Header from '../../components/Header/Header'
import Menu from '../../components/Menu/Menu'
import Title from '../../components/Title/Title'
import Achievements from '../../components/Achievements/Achievements'

import styles from './HomePage.module.scss'

import ReactResizeDetector from 'react-resize-detector'

class HomePage extends React.Component {
  static propTypes = {
    resolution: PropTypes.number.isRequired,
    setView: PropTypes.func.isRequired,
  }
  _onResize = (width) => {
    this.props.setView(width)
  }

  render() {
    return (
      <ReactResizeDetector
        handleWidth
        onResize={(width) => {
          this._onResize(width)
        }}
      >
        <div className={classNames(styles.container)}>
          <Header />
          {(this.props.resolution === screen.DESKTOP ||
            this.props.resolution === screen.LAPTOP) && <Menu />}
          <Title />
          <Achievements />
        </div>
      </ReactResizeDetector>
    )
  }
}
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setView,
    },
    dispatch
  )
const mapStateToProps = ({ contentReducer }) => ({
  resolution: contentReducer.resolution,
})
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
