import * as React from 'react'

import { FeedItem } from '../interfaces'

type ListDetailProps = {
  item: FeedItem
}

const ListDetail = ({ item: feedItem }: ListDetailProps) => (
  <div>
    <h1>Detail for {feedItem.name}</h1>
    <p>ID: {feedItem.id}</p>
  </div>
)

export default ListDetail
