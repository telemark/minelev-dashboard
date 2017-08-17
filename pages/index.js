'use strict'

import React from 'react'
import Container from 'muicss/lib/react/container'
import Row from 'muicss/lib/react/row'
import Col from 'muicss/lib/react/col'
import Head from '../components/head'
import Queue from '../components/Queue'
import Saksbehandling from '../components/Saksbehandling'
import Server from '../components/Server'
import Schools from '../components/Schools'
import Total from '../components/Total'

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Head />
        <Container fluid>
          <h1 className='mui--text-title'>MinElev Dashboard</h1>
          <Row>
            <Col md='3'>
              <Queue title='Antall i kø' source='https://logs.minelev.no/stats/queue' refresh='10' />
            </Col>
            <Col md='3'>
              <Saksbehandling title='Antall behandlet' source='https://seneca-firebase-test.firebaseio.com/tfk-saksbehandling-elev-varsel.json' refresh='10' />
            </Col>
            <Col md='3'>
              <Total title='Antall varsler' source='https://logs.minelev.no/stats/total/varsel' refresh='10' />
            </Col>
            <Col md='3'>
              <Total title='Antall samtaler' source='https://logs.minelev.no/stats/total/samtale' refresh='10' />
            </Col>
          </Row>
          <Row>
            <Col md='12'>
              <Schools title='Antall varsler pr skole' source='https://logs.minelev.no/stats/schools/varsel' refresh='10' />
            </Col>
          </Row>
          <Row>
            <Col md='12'>
              <Schools title='Antall samtaler pr skole' source='https://logs.minelev.no/stats/schools/samtale' refresh='10' />
            </Col>
          </Row>
          <Row>
            <Col md='12'>
              <Server title='Serverstatus' source='https://parser.rss.micro.t-fk.no/?rss=http://rss.uptimerobot.com/u445292-ef20245b7b4433e4e4ab5f34244338d6' refresh='10' />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
