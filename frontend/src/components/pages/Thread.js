import React from 'react'
import Post from '../Post'
import postGetterService from '../../services/postGetter'

class Thread extends React.Component {
  constructor(props) {
    super(props)
    this._isMounted = false
    this.state = {
      replies: []
    }
  }
    
  componentDidMount() {
    this._isMounted = true
    const { id } = this.props.match.params
    postGetterService.getSingle(id).then(post =>
      this.setState(post)
    )
  }

  componentWillUnmount() {
    this._isMounted = false
 }
  
  render() {
    const PostObj = () => (
      <div>
        <h1>MoeBoard</h1>
        <hr />
        <div className='posts'>
          <Post post={this.state} />
        </div>
      </div>
    )
    return (
      <div className='container'>
        <PostObj />
      </div>
    )
  }
}
  export default Thread