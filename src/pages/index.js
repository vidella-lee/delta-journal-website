import React from 'react'
import Login from '../components/Login'
import Home from '../components/Home'
import App from 'grommet/components/App'

import 'semantic-ui-css/semantic.min.css'
import 'grommet/grommet.min.css'
import '../scss/theme-override-modern-1.css';
import '../scss/main.scss'

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Home />
      </div>
    )
  }
}
