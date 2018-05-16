import React, { Component } from 'react'

class BaseContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { data: [] }
  }

  componentDidMount() {
    const url = this.props.url
    const request = new XMLHttpRequest()
    request.open('GET', url)

    request.onload = () => {
      if (request.status !== 200) return
      const data = JSON.parse(request.responseText)
      this.setState({ data: data.results })
    }

    request.send()
  }

  render() {
    const components = this.state.data.map((datum) => {
      return <this.props.componentToRender datum={datum}/>
    })
    return (
      <div>
        <h2>{this.props.title}</h2>
        {components}
      </div>
    )
  }
}

export default BaseContainer
