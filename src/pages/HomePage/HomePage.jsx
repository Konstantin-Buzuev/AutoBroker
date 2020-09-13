import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setView } from '../../redux/content/actions'

import Header from '../../components/Header/Header'
import Menu from '../../components/Menu/Menu'
import styles from './HomePage.module.scss'

import ReactResizeDetector from 'react-resize-detector'

class HomePage extends React.Component {
  static propTypes = {
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
          <Menu />
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

export default connect(null, mapDispatchToProps)(HomePage)
