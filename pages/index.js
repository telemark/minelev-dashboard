import Head from 'next/head'
import Row from '../components/Row'
import Queue from '../components/Queue'
import Total from '../components/Total'
import Undertjenester from '../components/Undertjenester'
import Layout from '../components/Layout'

import config from '../config'

const Index = () => {
  return (
    <>
      <Head>
        <title>MinElev dashboard</title>
      </Head>
      <Layout>
        <Row>
          <div>
            <Queue title='Antall i kø' source={`${config.LOGS_STATS}/stats/queue`} refresh='10' />
          </div>
          <div>
            <Total title='Antall varsler' source={`${config.LOGS_STATS}/stats/total/varsel`} refresh='10' />
          </div>
          <div>
            <Total title='Antall samtaler' source={`${config.LOGS_STATS}/stats/total/samtale`} refresh='10' />
          </div>
          <div>
            <Total title='Antall notater' source={`${config.LOGS_STATS}/stats/total/notat`} refresh='10' />
          </div>
        </Row>
        <Row>
          <div>
            <Total title='Antall bekreftelser' source={`${config.LOGS_STATS}/stats/total/yff/yff-bekreftelse`} refresh='10' />
          </div>
          <div>
            <Total title='Antall tilbakemeldinger' source={`${config.LOGS_STATS}/stats/total/yff/yff-tilbakemelding`} refresh='10' />
          </div>
          <div>
            <Total title='Antall lokale læreplaner' source={`${config.LOGS_STATS}/stats/total/yff/yff-lokalplan`} refresh='10' />
          </div>
          <div>
            <Total title='Antall kopi pr epost' source={`${config.LOGS_STATS}/stats/email`} refresh='10' />
          </div>
        </Row>
        <Undertjenester source={`${config.ROBOT_STATS}/stats/minelev`} refresh='10' />
        <style jsx>
          {`
            div {
              flex-grow: 1;
              margin: 5px 10px 5px 10px;
            }
          `}
        </style>
      </Layout>
    </>
  )
}

export default Index
