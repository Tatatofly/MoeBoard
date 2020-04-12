import React from 'react'
import ColorText from './ColorText'
import LinkContent from './LinkContent'

const regex = /(https?:\/\/[^\s]+)/g

class PostContent extends React.Component {

  formatTexts(text) {
    let texts = text.split('\n').map(line => {
      if(line.startsWith('>')) {
        return <ColorText content={line} textClassName={'greenText'} key={line} />
      } if(line.startsWith('<')) {
        return <ColorText content={line} textClassName={'blueText'} key={line} />
      } if(line.match(regex) !== null) {
        return <LinkContent linkContent={line.split(regex)} key={line} />
      }
      return line + '\n'
    })
    return texts
  }
  

  render() {
    const { content, textClass } = this.props
		if(content) {
			return(
        <div className={textClass}>
          {this.formatTexts(content)}
        </div>
        )
		}
		return null
  }
}
export default PostContent