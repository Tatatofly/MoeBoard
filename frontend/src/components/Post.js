import React from 'react'
import replyGetterService from '../services/replyGetter'
import dateFormat from '../utils/dateFormat'
import Reply from './Reply'

class Post extends React.Component {
constructor(props) {
    super(props)
    this.state = {
      replies: []
    }
  }
  
  componentDidMount() {
    replyGetterService.getAllFromPost(this.props.post._id).then(reply =>
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
      const PostImage = ({image}) => {
        if(!image) {
          return null
        }
        // TODO: Link backend better with frontend, no static like this
        return(<img src={'http://localhost:8080/images/' + image} alt='Post' className='img-thumbnail' />)
      }
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
          <p><strong>{dateFormat.postDate(post.date)}</strong></p>
          <p>{post.content}</p>
          <ReplyObj replies={this.state.replies} />
          <br />
        </div>
      )
      }
      return (
        <div className='container singlePost'>
          <h4>{post.title}</h4>
          <p><strong>{dateFormat.postDate(post.date)}</strong></p>
          <div className='row postRowAntiMargin'>
            <PostImage image={post.image} />
            <p className='postText' >{post.content}</p>
          </div>
          <i>Ei vastauksia</i>
          <br />
        </div>
      )
    }
  }
  
  export default Post