import Head from 'next/head'
import Layout from '../components/Layout'
import Schools from '../components/Schools'

export default () => (
  <>
    <Head>
      <title>MinElev dashboard - statistikk</title>
    </Head>
    <Layout>
      <Schools title='Antall varsler pr skole' source='https://stats.logs.minelev.no/stats/schools/varsel' refresh='10' />
      <Schools title='Antall samtaler pr skole' source='https://stats.logs.minelev.no/stats/schools/samtale' refresh='10' />
      <Schools title='Antall notater pr skole' source='https://stats.logs.minelev.no/stats/schools/notat' refresh='10' />
      <Schools title='Antall bekreftelser om utplassering pr skole' source='https://stats.logs.minelev.no/stats/schools/category/yff-bekreftelse' refresh='10' />
      <Schools title='Antall tilbakemeldinger pr skole' source='https://stats.logs.minelev.no/stats/schools/category/yff-tilbakemelding' refresh='10' />
      <Schools title='Antall lokale læreplaner pr skole' source='https://stats.logs.minelev.no/stats/schools/category/yff-lokalplan' refresh='10' />
    </Layout>
  </>
)
