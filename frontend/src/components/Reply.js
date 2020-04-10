import React from 'react'
import dateFormat from '../utils/dateFormat'
import DeleteButton from './DeleteButton'
import ReplyImage from './ReplyImage'
import PostContent from './PostContent'
import { Link } from 'react-router-dom'

class Reply extends React.Component {
    
    render() {
      const { reply, limit } = this.props
      return (
        <div className='container singleReply'>
          <div className='clearfix'>
            <p className='float-left'><strong>{dateFormat.postDate(reply.date)}</strong></p>
            <Link to={`/p/${reply.post}#${reply._id}`} className='link-nodecor'>
              <h6 className='float-right'>{reply._id}</h6>
            </Link>
            <DeleteButton postPage={limit} id={reply._id} isReply={true} />
          </div>
          <div className='row postRowAntiMargin'>
            <ReplyImage image={reply.image} />
            <PostContent content={reply.content} textClass={'postText col-12 col-sm-12 col-md-9'} />
          </div>
        </div>
      )
    }
  }
  
  export default Reply