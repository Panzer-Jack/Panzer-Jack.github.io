export interface SiteIndexEntry {
  name: string
  url: string
  description: string
}

export function createSiteIndexEntry(name: string, url: string, description: string): SiteIndexEntry {
  return { name, url, description }
}

// 新增索引时，只需要在这个数组末尾追加一项。
export const siteIndexEntries: SiteIndexEntry[] = [
  createSiteIndexEntry('个人博客', 'https://blog.panzer-jack.cn', '老船长的主航道，文章与日志都从这里出发。'),
  createSiteIndexEntry('GitHub', 'https://github.com/Panzer-Jack', '代码仓库、实验项目和一些还没写完的想法。'),
  createSiteIndexEntry('RSS 订阅', 'https://panzer-jack.cn/rss.xml', '不想被平台算法打断时，可以直接订阅更新。'),
]
