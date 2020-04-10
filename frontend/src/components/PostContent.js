import React from 'react'
import ColorText from './ColorText'
import LinkContent from './LinkContent'

class PostContent extends React.Component {

  formatTexts(text) {
    let texts = text.split('\n').map(line => {
      if(line.startsWith('>')) {
        return <ColorText content={line} textClassName={'greenText'} key={line} />
      } if(line.startsWith('<')) {
        return <ColorText content={line} textClassName={'blueText'} key={line} />
      } if(line.match(/(https?:\/\/[^\s]+)/g) !== null) { // TODO: Currently only one link per line bug, get better regex and apply links as array
        return <LinkContent preContent={line.split(/(https?:\/\/[^\s]+)/g)[0]} linkContent={line.split(/(https?:\/\/[^\s]+)/g)[1]} postContent={line.split(/(https?:\/\/[^\s]+)/g)[2]} key={line} />
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