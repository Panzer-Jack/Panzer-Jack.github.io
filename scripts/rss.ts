import type { FeedOptions, Item } from 'feed'
import { dirname } from 'node:path'
import { Feed } from 'feed'
import fs from 'fs-extra'
import { siteIndexEntries } from '../src/data/siteIndex'

const DOMAIN = 'https://panzer-jack.cn'
const AUTHOR = {
  name: 'Panzer-Jack',
  email: 'panzer_jack@panzer-jack.cn',
  link: DOMAIN,
}

async function run() {
  await buildIndexRSS()
}

async function buildIndexRSS() {
  const buildDate = new Date()
  const options: FeedOptions = {
    title: '老船长PZ_Jack の 航海索引',
    description: 'Panzer-Jack 的网站索引订阅流',
    id: `${DOMAIN}/`,
    link: `${DOMAIN}/`,
    copyright: `CC BY-NC-SA 4.0 2026 © Panzer-Jack`,
    feedLinks: {
      json: `${DOMAIN}/rss.json`,
      atom: `${DOMAIN}/rss.atom`,
      rss: `${DOMAIN}/rss.xml`,
    },
    updated: buildDate,
  }

  const items = siteIndexEntries
    .filter(entry => !isFeedSelfLink(entry.url))
    .map((entry, index) => {
      const date = new Date(buildDate)
      date.setSeconds(date.getSeconds() - index)

      return {
        title: entry.name,
        id: entry.url,
        link: entry.url,
        date,
        description: entry.description,
        content: createItemContent(entry.name, entry.url, entry.description),
        author: [AUTHOR],
      } satisfies Item
    })

  await writeFeed('rss', options, items)
}

function isFeedSelfLink(url: string) {
  return url === `${DOMAIN}/rss.xml`
    || url === `${DOMAIN}/rss.atom`
    || url === `${DOMAIN}/rss.json`
}

function createItemContent(name: string, url: string, description: string) {
  return [
    `<p>${description}</p>`,
    `<p><a href="${url}" target="_blank" rel="noopener noreferrer">前往 ${name}</a></p>`,
  ].join('')
}

async function writeFeed(name: string, options: FeedOptions, items: Item[]) {
  options.author = AUTHOR
  options.favicon = 'https://blog.panzer-jack.cn/avatar.png'

  const feed = new Feed(options)

  items.forEach(item => feed.addItem(item))

  await fs.ensureDir(dirname(`./dist/${name}`))
  await fs.writeFile(`./dist/${name}.xml`, feed.rss2(), 'utf-8')
  await fs.writeFile(`./dist/${name}.atom`, feed.atom1(), 'utf-8')
  await fs.writeFile(`./dist/${name}.json`, feed.json1(), 'utf-8')
}

run()
