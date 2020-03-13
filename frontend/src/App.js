import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'
import Board from './components/pages/Board'
import Thread from './components/pages/Thread'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Board} />
          <Route path="/p/:id" component={Thread} />
        </div>
      </Router>
    )
  }
}
export default App