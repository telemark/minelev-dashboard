import { Component } from 'react'
import Row from '../components/Row'
import Queue from '../components/Queue'
import Total from '../components/Total'
import Undertjenester from '../components/Undertjenester'
import Layout from '../components/Layout'

export default class Index extends Component {
  render () {
    return (
      <Layout>
        <Row>
          <div>
            <Queue title='Antall i kø' source='https://logs.minelev.no/stats/queue' refresh='10' />
          </div>
          <div>
            <Total title='Antall varsler' source='https://logs.minelev.no/stats/total/varsel' refresh='10' />
          </div>
          <div>
            <Total title='Antall samtaler' source='https://logs.minelev.no/stats/total/samtale' refresh='10' />
          </div>
          <div>
            <Total title='Antall notater' source='https://logs.minelev.no/stats/total/notat' refresh='10' />
          </div>
        </Row>
        <Row>
          <div>
            <Total title='Antall bekreftelser' source='https://logs.minelev.no/stats/total/yff/yff-bekreftelse' refresh='10' />
          </div>
          <div>
            <Total title='Antall tilbakemeldinger' source='https://logs.minelev.no/stats/total/yff/yff-tilbakemelding' refresh='10' />
          </div>
          <div>
            <Total title='Antall lokale læreplaner' source='https://logs.minelev.no/stats/total/yff/yff-lokalplan' refresh='10' />
          </div>
        </Row>
        <Undertjenester source='https://stats.service.t-fk.no/stats/minelev' refresh='10' />
        <style jsx>
          {`
            div {
              flex-grow: 1;
              margin: 5px 10px 5px 10px;
            }
          `}
        </style>
      </Layout>
    )
  }
}
