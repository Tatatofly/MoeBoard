import React from 'react'
import replyGetterService from '../services/replyGetter'
import dateFormat from '../utils/dateFormat'
import Replies from './Replies'
import DeleteButton from './DeleteButton'
import PostImage from './PostImage'
import { Link } from 'react-router-dom'

class Post extends React.Component {
constructor(props) {
    super(props)
    this._isMounted = false
    this.state = {
      replies: []
    }
  }
  
  componentDidMount() {
    this._isMounted = true
    replyGetterService.getAllFromPost(this.props.post._id).then(reply =>
      this.setState(state => {
        const replies = [reply]
        return {
          replies
        }
      })
    )
  }

  componentWillUnmount() {
    this._isMounted = false
 } 
    
    render() {
      const { post, limitReplies } = this.props
      if(this.state.replies.length > 0) {
        let reps = this.state.replies[0]
        return (
          <div className='container singlePost'>
            <div className='clearfix'>
              <Link to={`/p/${post._id}`} className='link-nodecor'>
                <h4 className='float-left'>{post.title}</h4>
              </Link>
              <Link to={`/p/${post._id}`} className='link-nodecor'>
                <h6 className='float-right'>{post._id}</h6>
              </Link>
              <DeleteButton postPage={limitReplies} id={post._id} isReply={false} />
            </div>
            <p><strong>{dateFormat.postDate(post.date)}</strong></p>
            <div className='row postRowAntiMargin'>
              <PostImage image={post.image} />
              <p className='postText col-12 col-sm-8 col-md-8' >{post.content}</p>
            </div>
            <Replies replies={reps} limit={limitReplies} />
            <br />
          </div>
        )
      }
      return(
        <div>Loading...</div>
      )
    }
  }
  
  export default Post