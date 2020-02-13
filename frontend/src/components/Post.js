import React from 'react'
import replyGetterService from '../services/replyGetter'
import Reply from './Reply'

class Post extends React.Component {
constructor(props) {
    super(props)
    this.state = {
      replies: []
    }
  }
  
  componentDidMount() {
    replyGetterService.getAll().then(reply =>
      this.setState(state => {
        const replies = reply
        return {
          replies
        }
      })
    )
  }
    
    render() {
      const { post } = this.props
      const replyArray = post.replies
      if(replyArray.length > 0) {
        const ReplyObj = ({replies}) => (
          <div className='posts'>
            {replies.map(reply => (
              <Reply key={reply._id} reply={reply}/>
            ))}
          </div>
        )
      return (
        <div className='container singlePost'>
          <h4>{post.title}</h4>
          <p><strong>{post.date}</strong> - {post.content}</p>
          <ReplyObj replies={this.state.replies} />
          <br />
        </div>
      )
      }
      return (
        <div className='container singlePost'>
          <h4>{post.title}</h4>
          <p><strong>{post.date}</strong> - {post.content}</p>
          <i>Ei vastauksia</i>
          <br />
        </div>
      )
    }
  }
  
  export default Post