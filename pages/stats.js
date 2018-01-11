import Layout from '../components/Layout'
import Schools from '../components/Schools'

export default () => (
  <Layout>
    <Schools title='Antall varsler pr skole' source='https://logs.minelev.no/stats/schools/varsel' refresh='10' />
    <Schools title='Antall samtaler pr skole' source='https://logs.minelev.no/stats/schools/samtale' refresh='10' />
    <Schools title='Antall bekreftelser om utplassering pr skole' source='https://logs.minelev.no/stats/schools/yff-bekreftelse' refresh='10' />
    <Schools title='Antall tilbakemeldinger pr skole' source='https://logs.minelev.no/stats/schools/yff-tilbakemelding' refresh='10' />
    <Schools title='Antall lokale læreplaner pr skole' source='https://logs.minelev.no/stats/schools/yff-lokalplan' refresh='10' />
  </Layout>
)
