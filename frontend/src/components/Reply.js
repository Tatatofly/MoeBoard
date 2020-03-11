import React from 'react'
import dateFormat from '../utils/dateFormat'

class Reply extends React.Component {
    
    render() {
      const { reply } = this.props
      return (
        <div className='container singleReply'>
          <p><strong>{dateFormat.postDate(reply.date)}</strong></p>
          <p>{reply.content}</p>
        </div>
      )
    }
  }
  
  export default Reply