import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import ListPosts from './components/ListPosts'
import postGetterService from './services/postGetter'


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
        const posts = [...state.posts]
        posts.push(post)
        return {
          posts
        }
      })
    )
  }

  render() {
    const Posts = () => (
      <div>
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