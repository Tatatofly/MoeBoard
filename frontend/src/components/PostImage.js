import React from 'react'
import Image from 'react-bootstrap/Image'
import config from '../utils/config'

class PostImage extends React.Component {
constructor(props) {
    super(props)
    this._isMounted = false
    this.imgBig = false
    this.state = {
      parentClass: 'postFile col-12 col-sm-3 col-md-3'
    }
  }
  
  componentDidMount() {
    this._isMounted = true
  }

  componentWillUnmount() {
    this._isMounted = false
 }

  imageClickHandle() {
    this.imgBig = !this.imgBig
    if(this.imgBig) {
      this.setState(() => {
        return {parentClass: 'postFile col-12'}
      })
    } else {
      this.setState(() => {
        return {parentClass: 'postFile col-12 col-sm-3 col-md-3'}
      })
    }
  }
    
  render() {
    const { image } = this.props
      if(!image) {
        return null
			}
			
		return (
			<div className={this.state.parentClass}>
        <Image src={config.backendURL + '/images/' + image} alt={'Post '+image.substring(0,75)} onClick={this.imageClickHandle.bind(this)} fluid /><br />
        <small><i>{image.substring(0,75)}</i></small>
			</div>
      )
    }
  }
  
  export default PostImage