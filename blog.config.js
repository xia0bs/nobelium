const BLOG = {
  title: 'Yanng',
  author: 'Yanng',
  email: 'y719398840@gmail.com',
  link: 'yanng.cn',
  description: '',
  lang: 'zh-CN', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES']
  appearance: 'auto', // ['light', 'dark', 'auto'],
  font: 'sans-serif', // ['sans-serif', 'serif']
  lightBackground: '#ffffff', // use hex value, don't forget '#' e.g #fffefc
  darkBackground: '#18181B', // use hex value, don't forget '#'
  path: '', // leave this empty unless you want to deploy Nobelium in a folder
  since: 2023, // If leave this empty, current year will be used.
  postsPerPage: 7,
  sortByDate: true,
  showAbout: false,
  showArchive: true,
  autoCollapsedNavBar: true, // The automatically collapsed navigation bar
  ogImageGenerateURL: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/94e0c14d-e3fc-47c3-ba7c-28f8d4183bca/FBFD8590-29EF-49BC-ACE7-13E2B02D3A6D.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220206T065941Z&X-Amz-Expires=86400&X-Amz-Signature=61155275513f3221c04d921e85ff0f74cd5d06a1dc4baa399203fc917a19f094&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22FBFD8590-29EF-49BC-ACE7-13E2B02D3A6D.jpeg%22&x-id=GetObject', // The link to generate OG image, don't end with a slash
  socialLink: '',
  seo: {
    keywords: ['Blog', 'Website', 'Notion'],
    googleSiteVerification: '' // Remove the value or replace it with your own google site verification code
  },
  notionPageId: process.env.NOTION_PAGE_ID, // DO NOT CHANGE THIS！！！
  notionAccessToken: process.env.NOTION_ACCESS_TOKEN, // Useful if you prefer not to make your database public
  analytics: {
    provider: '', // Currently we support Google Analytics and Ackee, please fill with 'ga' or 'ackee', leave it empty to disable it.
    ackeeConfig: {
      tracker: '', // e.g 'https://ackee.craigary.net/tracker.js'
      dataAckeeServer: '', // e.g https://ackee.craigary.net , don't end with a slash
      domainId: '' // e.g '0e2257a8-54d4-4847-91a1-0311ea48cc7b'
    },
    gaConfig: {
      measurementId: '' // e.g: G-XXXXXXXXXX
    }
  },
  comment: {
    // support provider: gitalk, utterances, cusdis
    provider: 'cusdis', // leave it empty if you don't need any comment plugin
    gitalkConfig: {
      repo: '', // The repository of store comments
      owner: '',
      admin: [],
      clientID: '',
      clientSecret: '',
      distractionFreeMode: false
    },
    utterancesConfig: {
      repo: ''
    },
    cusdisConfig: {
      appId: 'bb379c36-9967-4ded-bf43-9135c1b1f641', // data-app-id
      host: 'https://cusdis.com', // data-host, change this if you're using self-hosted version
      scriptSrc: 'https://cusdis.com/js/cusdis.es.js' // change this if you're using self-hosted version
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
// export default BLOG
module.exports = BLOG
