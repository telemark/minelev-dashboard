'use strict'

const axios = require('axios')
const servers = require('../lib/data/servers.json')

function parseStatus (data) {
  const parsed = data.items.map(item => {
    return {
      server: item.title.split(' ')[0],
      status: /UP/.test(item.title) ? 'UP' : 'DOWN',
      title: item.title,
      link: item.link,
      updated: item.pubDate
    }
  })
  // Makes list of servers unique. Only keeps latest
  return parsed.reduce((a, b) => {
    if (!a.map(item => item.server).includes(b.server)) {
      a.push(b)
    }
    return a
  }, [])
}

module.exports = async feed => {
  const results = await axios(feed)
  const serverIds = servers.map(server => server.id)
  return parseStatus(results.data).filter(status => serverIds.includes(status.server))
}
