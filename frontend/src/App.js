import React from 'react';
import Post from './components/Post'
import postGetterService from './services/postGetter'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content: 'Loading...'
    }
  }
  
  componentDidMount() {
    postGetterService.getFirst().then(post =>
      this.setState({ 
        content: post.content
      })
    )
  }

  render() {
    const Posts = () => (
      <div>
        <Post content={this.state.content} />
      </div>
    )

    return (
      <div>
        <Posts/>
      </div>
    );
    }
}
export default App