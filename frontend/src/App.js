import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'
import Board from './components/pages/Board'
import Thread from './components/pages/Thread'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Link to='/' className='link-nodecor'>
            <h1>MoeBoard</h1>
          </Link>
          <Route path='/' exact component={Board} />
          <Route path='/p/:id' component={Thread} />
        </div>
      </Router>
    )
  }
}
export default App