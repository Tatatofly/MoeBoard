import React from 'react'
import SingleLink from './SingleLink'

class LinkContent extends React.Component {

  formatLinks(linkContent) {
    let booler = false
    let linksObj = linkContent.map(entry => {
      booler = !booler
      if(booler) {
        return entry
      } else {
        return <SingleLink linkContent={entry} key={entry} />
      }
    })
    return linksObj
  }

  render() {
    const { linkContent } = this.props
		if(linkContent) {
			return(
        <span>
          {this.formatLinks(linkContent)}
          <br />
        </span>
        )
		}
		return null
  }
}
export default LinkContent