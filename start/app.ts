import eventCrawler from '../jobs/crawl_event_cronjob.js'
const isAceCommand = process.argv.some((arg) => arg.includes('ace'))
if (!isAceCommand) {
    console.log('Backend is running...')
    eventCrawler()
}
