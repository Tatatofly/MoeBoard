import React from 'react'

class SingleLink extends React.Component {

  render() {
    const { linkContent } = this.props
		if(linkContent) {
			return(<a href={linkContent} target='blank'>{linkContent}</a>)
		}
		return null
  }
}
export default SingleLink