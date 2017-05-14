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
            <Col md='4'>
              <Queue title='Antall i kø' source='https://tfk-livestats.firebaseio.com/minelev.json' refresh='10' />
            </Col>
            <Col md='4'>
              <Saksbehandling title='Antall behandlet' source='https://seneca-firebase-test.firebaseio.com/tfk-saksbehandling-elev-varsel.json' refresh='10' />
            </Col>
            <Col md='4'>
              <Total title='Antall totalt' source='https://logs.minelev.no/stats/total' refresh='10' />
            </Col>
          </Row>
          <Row>
            <Col md='4'>
              <Server title='Serverstatus' source='https://parser.rss.micro.t-fk.no/?rss=http://rss.uptimerobot.com/u445292-ef20245b7b4433e4e4ab5f34244338d6' refresh='10' />
            </Col>
            <Col md='8'>
              <Schools title='Antall pr skole' source='https://logs.minelev.no/stats/schools' refresh='10' />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
