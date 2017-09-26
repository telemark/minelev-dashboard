'use strict'

import React from 'react'
import Container from 'muicss/lib/react/container'
import Row from 'muicss/lib/react/row'
import Col from 'muicss/lib/react/col'
import Head from '../components/head'
import Queue from '../components/Queue'
import Total from '../components/Total'
import Undertjenester from '../components/Undertjenester'
import Navbar from '../components/Navbar'

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Head />
        <Container fluid>
          <Navbar />
          <Row>
            <Col md='4'>
              <Queue title='Antall i kø' source='https://logs.minelev.no/stats/queue' refresh='10' />
            </Col>
            <Col md='4'>
              <Total title='Antall varsler' source='https://logs.minelev.no/stats/total/varsel' refresh='10' />
            </Col>
            <Col md='4'>
              <Total title='Antall samtaler' source='https://logs.minelev.no/stats/total/samtale' refresh='10' />
            </Col>
          </Row>
          <Undertjenester source='https://stats.service.t-fk.no/stats/minelev' refresh='10' />
        </Container>
      </div>
    )
  }
}
