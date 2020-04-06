import React from 'react'
import Reply from './Reply'

class Replies extends React.Component {
constructor(props) {
    super(props)
    this._isMounted = false
  }
  
  componentDidMount() {
    this._isMounted = true
  }

  componentWillUnmount() {
    this._isMounted = false
 } 
    
    render() {
      const { replies, limit } = this.props
      if(replies.length > 0) {
        if(limit && replies.length > 3) {
          return (
            <div>
              <small><i>{replies.length} vastausta</i></small>
                {replies.slice(replies.length-3, replies.length).map(reply => (
                  <Reply key={reply._id} reply={reply} limit={limit} />
                ))}
            </div>
          )
        }
        return (
          <div>
            <small><i>{replies.length} vastausta</i></small>
              {replies.map(reply => (
                <Reply key={reply._id} reply={reply} limit={limit} />
              ))}
          </div>
        )
      }
      return (
        <small><i>Ei vastauksia</i></small>
      )
    }
  }
  
  export default Replies