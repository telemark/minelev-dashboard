'use strict'

import React from 'react'
import Container from 'muicss/lib/react/container'
import Row from 'muicss/lib/react/row'
import Col from 'muicss/lib/react/col'
import Head from '../components/head'
import Queue from '../components/Queue'
import Saksbehandling from '../components/Saksbehandling'

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Head />
        <Container fluid>
          <h1 className='mui--text-title'>MinElev Dashboard</h1>
          <Row>
            <Col md='6'>
              <Queue title='Antall i kø' source='https://tfk-livestats.firebaseio.com/minelev.json' refresh='10' />
            </Col>
            <Col md='6'>
              <Saksbehandling title='Antall behandlet' source='https://seneca-firebase-test.firebaseio.com/tfk-saksbehandling-elev-varsel.json' refresh='10' />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
