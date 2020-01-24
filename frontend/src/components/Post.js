import React from 'react'

class Post extends React.Component {
    
    render() {
      const { content } = this.props
      return (
        <div>
          {content}
        </div>
      )
    }
  }
  
  export default Post