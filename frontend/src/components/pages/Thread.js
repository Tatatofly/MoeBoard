import React from 'react'
import Post from '../Post'
import ReplyForm from '../ReplyForm'
import postGetterService from '../../services/postGetter'
import newReplyService from '../../services/newPost'

class Thread extends React.Component {
  constructor(props) {
    super(props)
    this._isMounted = false
    this.state = {}
  }
    
  componentDidMount() {
    this._isMounted = true
    const { id } = this.props.match.params
    this._isMounted && postGetterService.getSingle(id).then(post =>
        this.setState(post)
      )
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
    return (
      <div>
        <ReplyForm onSubmit={data => this.newReply(data)}/>
        <hr />
        <div className='posts'>
          <Post key={this.state._id} post={this.state} limitReplies={false} />
        </div>
      </div>
    )
  }
}
  export default Thread