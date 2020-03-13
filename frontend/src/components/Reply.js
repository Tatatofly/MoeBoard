import React from 'react'
import dateFormat from '../utils/dateFormat'

class Reply extends React.Component {
    
    render() {
      const { reply } = this.props
      const ReplyImage = ({image}) => {
        if(!image) {
          return null
        }
        // TODO: Link backend better with frontend, no static like this
        return(<div className='col-12 col-sm-2 col-md-2'><img src={'http://localhost:8080/images/' + image} alt='Post' className='img-thumbnail' /></div>)
      }
      return (
        <div className='container singleReply'>
          <p><strong>{dateFormat.postDate(reply.date)}</strong></p>
          <div className='row postRowAntiMargin'>
            <ReplyImage image={reply.image} />
            <p className='postText col-12 col-sm-9 col-md-9' >{reply.content}</p>
          </div>
        </div>
      )
    }
  }
  
  export default Reply