import React from 'react'

class ReplyForm extends React.Component {
  constructor(props) {
    super(props)
    this.onFileChange = this.onFileChange.bind(this)
    this.state = {
        content: '',
        postFile: ''
    }
  }


  onFileChange(event) {
    this.setState({ postFile: event.target.files[0] })
  }
    
    render() {
      const newReply = (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append('content', this.state.content)
        formData.append('postFile', this.state.postFile)
        this.props.onSubmit(formData)
        this.setState({
            content: '',
            postFile: ''
        })
      }

      return (
        <div className='container postform'>
          <form onSubmit={newReply} className='col-12' encType='multipart/form-data'>
            <textarea type='text' value={this.state.content} onChange={e => this.setState({content: e.target.value})} placeholder='Content...' className='col-12'></textarea><br />
            <input type='file' name='postFile' onChange={this.onFileChange}  className='inputFile'/><br/>
            <button type='submit' className='col-2'>Reply</button>
          </form>
        </div>
      )
    }
  }
  
  export default ReplyForm