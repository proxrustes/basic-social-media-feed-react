import React from 'react'
import Link from 'next/link'

import { FeedItem } from '../interfaces'

type Props = {
  data: FeedItem
}

const ListItem = ({ data }: Props) => (
  <div id= {String(data.id)}>
  <h1>data.name</h1>
  <p>data.body</p>
  <img src= {data.pictureLink}></img>
  <button>hui</button>
  </div>
)

export default ListItem
