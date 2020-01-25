import React from 'react'

class Post extends React.Component {
    
    render() {
      const { title, content, date } = this.props
      return (
        <div className='container singlePost'>
          <h4>{title}</h4>
          <p><strong>{date}</strong> - {content}</p>
          <br />
        </div>
      )
    }
  }
  
  export default Post