import React from 'react'
import postDeletor from '../services/postDeletor'
import Button from 'react-bootstrap/Button'

class DeleteButton extends React.Component {

  deleteHandler(id, isReply, e) {
    e.preventDefault()
    if(isReply) {
      postDeletor.deleteReply(id)
        .then(window.location.reload())
    } else {
      postDeletor.deletePost(id)
        .then(window.location.assign("/"))
    }
  }
    
  render() {
		const { postPage, id, isReply } = this.props
		if(!postPage) {
			return <Button onClick={this.deleteHandler.bind(this, id, isReply)} variant="danger" size="sm" className="float-right mr-3">Delete</Button>
		}
		return null
  }
}
export default DeleteButton