import React from 'react'
import Post from '../Post'
import ReplyForm from '../ReplyForm'
import postGetterService from '../../services/postGetter'
import newReplyService from '../../services/newPost'

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
    if (this._isMounted) {
      postGetterService.getSingle(id).then(post =>
        this.setState(post)
      )
    }
  }

  componentWillUnmount() {
    this._isMounted = false
 }

  newReply = data => {
    const { id } = this.props.match.params
    newReplyService.replyNew(data, id)
      .then(this.setState({replies: []}))
      .then(postGetterService.getSingle(id).then(post =>
        this.setState(post)
      )
    )
  }
  
  render() {
    const PostObj = () => (
      <div>
        <ReplyForm onSubmit={data => this.newReply(data)}/>
        <hr />
        <div className='posts'>
          <Post post={this.state} />
        </div>
      </div>
    )
    return (
      <div>
        <PostObj />
      </div>
    )
  }
}
  export default Thread