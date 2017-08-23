'use strict'

import React from 'react'
import Row from 'muicss/lib/react/row'
import Col from 'muicss/lib/react/col'
import Card from './Card'
import ErrorCard from './ErrorCard'
const getData = require('../lib/get-data')

export default class Status extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: false
    }
    this.tick = this.tick.bind(this)
  }

  async componentDidMount () {
    const response = await getData(this.props.source)
    const data = response.length > 0 ? response[0] : false
    this.setState({data: data})
    this.timer = setInterval(this.tick, parseInt(this.props.refresh || '1', 10) * 1000 * 60)
  }

  async tick () {
    const response = await getData(this.props.source)
    const data = response.length > 0 ? response[0] : false
    this.setState({data: data})
  }

  render () {
    return (
      <div>
        <Row>
          <Col md='4'>
            <ErrorCard title='Kø feil' number={this.state.data !== false ? this.state.data.queue.errors.count : 0} />
          </Col>
          <Col md='4'>
            <ErrorCard title='SvarUt feil' number={this.state.data !== false ? this.state.data.distribution.errors.count : 0} />
          </Col>
          <Col md='4'>
            <ErrorCard title='Arkivert feil' number={this.state.data !== false ? this.state.data.archive.errors.count : 0} />
          </Col>
        </Row>
        <Row>
          <Col md='4'>
            <Card title='Behandlet' number={this.state.data !== false ? this.state.data.queue.done.count : 0} />
          </Col>
          <Col md='4'>
            <Card title='SvarUt' number={this.state.data !== false ? this.state.data.distribution.done.count : 0} />
          </Col>
          <Col md='4'>
            <Card title='Arkivert' number={this.state.data !== false ? this.state.data.archive.done.count : 0} />
          </Col>
        </Row>
      </div>
    )
  }
}
