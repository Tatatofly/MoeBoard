import React from 'react'

class ColorText extends React.Component {

  render() {
    const { content, textClassName } = this.props
		if(content) {
			return(
        <span className={textClassName}>
          {content + '\n'}
        </span>
        )
		}
		return null
  }
}
export default ColorText