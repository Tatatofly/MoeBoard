import React from 'react'

class Reply extends React.Component {
    
    render() {
      const { reply } = this.props
      return (
        <div className='container singleReply'>
          <p><strong>{reply.date}</strong> - {reply.content}</p>
        </div>
      )
    }
  }
  
  export default Reply