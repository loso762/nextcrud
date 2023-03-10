import React from 'react'
import Head from 'next/head'

function HeadMeta ({title}) {
  return (
    <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  )
}

export default HeadMeta