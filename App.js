import React, { Fragment } from 'react'
import AppStatusBar from './configs/statusBar'
import {AppContaiberTabs} from './stack'

export default class App extends React.Component {
  render() {
    return (
      <Fragment>
        <AppStatusBar />
        <AppContaiberTabs />
      </Fragment>
    )
  }
}
