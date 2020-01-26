import React from 'react'

class PostForm extends React.Component {

    state = {
        title: '',
        content: ''
    }
    
    render() {
      const newPost = (event) => {
        event.preventDefault()
        this.props.onSubmit(this.state)
        this.setState({
            title: '',
            content: ''
        })
      }
      return (
        <div className='container postform'>
            <form onSubmit={newPost} className='col-12'>
                <input type='text' value={this.state.title} onChange={e => this.setState({title: e.target.value})} placeholder='Title' className='col-12'></input>
                <textarea type='text' value={this.state.content} onChange={e => this.setState({content: e.target.value})} placeholder='Content...' className='col-12'></textarea><br />
                <button type="submit" className='col-2'>Post</button>
            </form>
        </div>
      )
    }
  }
  
  export default PostForm