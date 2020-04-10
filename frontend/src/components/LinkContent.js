import React from 'react'

class LinkContent extends React.Component {

  render() {
    const { preContent, linkContent, postContent } = this.props
		if(linkContent) {
			return(
        <span>
          {preContent} <a href={linkContent} target='blank'>{linkContent}</a> {postContent}
        </span>
        )
		}
		return null
  }
}
export default LinkContent