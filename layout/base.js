import React, { Component } from 'react'
import Head from 'next/head'


export default class Base extends Component {
  render() {
    return (
      <>
        <Head>
          <link rel="stylesheet" href="../static/css/bootstrap.min.css" crossOrigin="anonymous" />
        </Head>
        <div className="container">
        {
          this.props.children
        }
        </div>
      </>
    )
  }
}
