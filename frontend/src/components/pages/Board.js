import React from 'react'
import ListPosts from '../ListPosts'
import PostForm from '../PostForm'
import postGetterService from '../../services/postGetter'
import newPostService from '../../services/newPost'

class Board extends React.Component {
    constructor(props) {
      super(props)
      this._isMounted = false
      this.state = {
        posts: []
      }
    }
    
    componentDidMount() {
      this._isMounted = true
      postGetterService.getAll().then(post =>
        this.setState(state => {
          const posts = [post]
          return {
            posts
          }
        })
      )
    }

    componentWillUnmount() {
      this._isMounted = false
   }
  
    newPost = data => {
      newPostService.postNew(data)
        .then(this.setState({posts: []}))
        .then(postGetterService.getAll().then(post =>
          this.setState(state => {
            const posts = [post]
            return {
              posts
            }
          })
        )
      )
    } 
  
    render() {
      const Posts = () => (
        <div>
          <PostForm onSubmit={data => this.newPost(data)}/>
          <hr />
          <ListPosts postArray={this.state.posts} />
        </div>
      )
  
      return (
        <div>
          <Posts />
        </div>
      )
    }
  }
  export default Board
