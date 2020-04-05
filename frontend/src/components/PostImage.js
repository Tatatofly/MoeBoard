import React from 'react'
import config from '../utils/config'

class PostImage extends React.Component {
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
			<div className='col-12 col-sm-3 col-md-3'>
				<img src={config.backendURL + '/images/' + image} alt='Post' className='img-thumbnail' />
			</div>
      )
    }
  }
  
  export default PostImage