import React from 'react'
import Post from './Post'

class ListPosts extends React.Component {
    
    render() {
      const { postArray } = this.props
      if(postArray.length > 0) {
        return (
          <div className='posts'>
            {postArray[0].map(post => (
              <Post key={post._id} post={post} limitReplies={true} />
            ))}
          </div>
        )
      }
      return (
        <div>
          Loading posts...
        </div>
      )
    }
  }
  
  export default ListPosts