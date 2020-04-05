import React from 'react'
import config from '../utils/config'

class ReplyImage extends React.Component {
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
    const { image } = this.props
      if(!image) {
        return null
			}
			
		return (
			<div className='col-12 col-sm-2 col-md-2'>
                <img src={config.backendURL + '/images/' + image} alt='Reply' className='img-thumbnail' />
            </div>
      )
    }
  }
  
  export default ReplyImage