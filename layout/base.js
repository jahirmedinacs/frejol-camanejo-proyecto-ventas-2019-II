import React, { Component } from 'react'
import Head from 'next/head'


class Base extends Component {
  render() {
    return (
      <div>
        <Head>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
        </Head>
        {
          this.props.children
        }
      </div>
    )
  }
}

export default Base