import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import CodeBlock from './markdown/code-block'

import '../css/markdown.css'

const input = `
# Publish your Status Podcasts!

Follow the steps below to share your thoughts on The Status Network with others.

<br/>

## How can I publish my Status podcasts?
* Create a podcast channel on SoundCloud, iTunes, SimpleCast, or any platform supporting [RSS](https://en.wikipedia.org/wiki/RSS).
* Below are instructions for [SoundCloud](https://soundcloud.com/).
  - Create a channel and enable [RSS feed](https://help.soundcloud.com/hc/en-us/articles/115003570048-Setting-up-your-podcast-s-RSS-feed).
  - [Add tracks](https://help.soundcloud.com/hc/en-us/articles/115003451347) to your RSS feed.
  - Send the URL of your RSS Feed to \`jinho@status.im\` (e.g., http://feeds.soundcloud.com/users/soundcloud:users:741837922/sounds.rss).
  - The RSS should contain at least 1 episode.

<br/>

## I want to submit a pull request to add my podcasts

* Submit a pull request to this [repo](https://github.com/jinhojang6/status-podcast) and update your RSS as below.

\`\`\`js
# src/data/podcasts.js
# We use \`https://feeds-soundcloud-proxy.status.im/\` as a proxy server for SoundCloud

export const podcasts = [
  {
    category: 'general',
    name: 'Everything Status',
    link: 'https://feeds-soundcloud-proxy.status.im/users/soundcloud:users:741837922/sounds.rss',
    img:
      '{img URL}'
  },
  ...
\`\`\`

<br/>

## Known issues

Found an issue with playing HTML5 audio in the background on iOS


<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
`


class Upload extends Component {
  render() {
    return (
      <div style={{ textAlign: 'left', margin: '1rem !important'}} className="result-pane markdown">
        <ReactMarkdown 
          className="result"
          source={input}
          escapeHtml={false}
          renderers={{code: CodeBlock}}
        />
      </div>
    )
  }
}

export default Upload
