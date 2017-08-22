'use strict'

import React from 'react'
import Row from 'muicss/lib/react/row'
import Col from 'muicss/lib/react/col'
import Card from './Card'
const getData = require('../lib/get-data')

function updateData (response) {
  const data = response.length > 0 ? response[0] : false
  return {
    svarutDone: data && data.distribution && data.distribution.done ? data.distribution.done.count : 0,
    svarutError: data && data.distribution && data.distribution.errors ? data.distribution.errors.count : 0,
    archiveDone: data && data.archive && data.archive.done ? data.archive.done.count : 0,
    archiveError: data && data.archive && data.archive.errors ? data.archive.errors.count : 0,
    pdfArchiveDone: data && data.pdf && data.pdf.archive && data.pdf.archive.jobs ? data.pdf.archive.jobs.count : 0,
    pdfArchiveError: data && data.pdf && data.pdf.archive && data.pdf.archive.errors ? data.pdf.archive.errors.count : 0,
    pdfDistributionDone: data && data.pdf && data.pdf.distribution && data.pdf.distribution.jobs ? data.pdf.distribution.jobs.count : 0,
    pdfDistributionError: data && data.pdf && data.pdf.distribution && data.pdf.distribution.errors ? data.pdf.archive.distribution.count : 0
  }
}

export default class Status extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: updateData([])
    }
    this.tick = this.tick.bind(this)
  }

  async componentDidMount () {
    const data = await getData(this.props.source)
    this.setState({data: updateData(data)})
    this.timer = setInterval(this.tick, parseInt(this.props.refresh || '1', 10) * 1000 * 60)
  }

  async tick () {
    const data = await getData(this.props.source)
    this.setState({data: updateData(data)})
  }

  render () {
    return (
      <div>
        <Row>
          <Col md='3'>
            <Card title='SvarUt' number={this.state.data.svarutDone} />
          </Col>
          <Col md='3'>
            <Card title='SvarUt feil' number={this.state.data.svarutError} />
          </Col>
          <Col md='3'>
            <Card title='Arkivert' number={this.state.data.archiveDone} />
          </Col>
          <Col md='3'>
            <Card title='Arkivert feil' number={this.state.data.archiveError} />
          </Col>
        </Row>
        <Row>
          <Col md='3'>
            <Card title='pdf arkiv' number={this.state.data.pdfArchiveDone} />
          </Col>
          <Col md='3'>
            <Card title='pdf arkiv feil' number={this.state.data.pdfArchiveError} />
          </Col>
          <Col md='3'>
            <Card title='pdf svarut' number={this.state.data.pdfDistributionDone} />
          </Col>
          <Col md='3'>
            <Card title='pdf svarut feil' number={this.state.data.pdfDistributionError} />
          </Col>
        </Row>
      </div>
    )
  }
}
