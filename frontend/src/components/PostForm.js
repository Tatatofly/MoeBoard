import React from 'react'

class PostForm extends React.Component {
  constructor(props) {
    super(props)
    this.onFileChange = this.onFileChange.bind(this)
    this.state = {
        title: '',
        content: '',
        postFile: ''
    }
  }

  onFileChange(event) {
    this.setState({ postFile: event.target.files[0] })
  }
    
    render() {
      const newPost = (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append('title', this.state.title)
        formData.append('content', this.state.content)
        formData.append('postFile', this.state.postFile)
        this.props.onSubmit(formData)
        this.setState({
            title: '',
            content: '',
            postFile: ''
        })
      }
      return (
        <div className='container postform'>
            <form onSubmit={newPost} className='col-12' encType='multipart/form-data'>
                <input type='text' value={this.state.title} onChange={e => this.setState({title: e.target.value})} placeholder='Title' className='col-12 inputTitle'></input>
                <textarea type='text' value={this.state.content} onChange={e => this.setState({content: e.target.value})} placeholder='Content...' className='col-12'></textarea><br />
                <input type='file' name='postFile' onChange={this.onFileChange}  className='inputFile'/><br/>
                <button type='submit' className='col-2'>Post</button>
            </form>
        </div>
      )
    }
  }
  
  export default PostForm