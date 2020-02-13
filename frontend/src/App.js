import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import ListPosts from './components/ListPosts'
import PostForm from './components/PostForm'
import postGetterService from './services/postGetter'
import newPostService from './services/newPost'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }
  
  componentDidMount() {
    postGetterService.getAll().then(post =>
      this.setState(state => {
        const posts = [post]
        return {
          posts
        }
      })
    )
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
        <h1>MoeBoard</h1>
        <PostForm onSubmit={data => this.newPost(data)}/>
        <hr />
        <ListPosts postArray={this.state.posts} />
      </div>
    )

    return (
      <div className='container'>
        <Posts />
      </div>
    )
  }
}
export default App