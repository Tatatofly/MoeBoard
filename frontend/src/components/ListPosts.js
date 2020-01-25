import React from 'react'
import Post from './Post'

class ListPosts extends React.Component {
    
    render() {
      const postArray = this.props.postArray
      if(postArray.length > 0) {
        const PostObj = ({postArray}) => (
          <div className='posts'>
            {postArray.map(post => (
              <Post key={post._id} content={post.content} title={post.title} date={post.date} />
            ))}
          </div>
        )
        return (
          <div>
            <PostObj postArray={postArray[0]} />
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