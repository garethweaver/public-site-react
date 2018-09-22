import React from 'react'
import Helmet from 'react-helmet'
import {Link} from 'gatsby'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <Helmet>
      <title>G4r0th W4aver - Front-end Web Designer &amp; Developer</title>
      <body class="page-folio" />
    </Helmet>
    <div className="FolioDetail wrap">
      <div className="inner">
        <div className="folio-text folio-block">
          <div className="four-oh-four">
            <h1>404 :(</h1>
            <p>You just hit a route that doesn't exist&hellip; the sadness. It's probably best to start again.</p>
            <Link to="/" className="logo MenuItem">
              Head home
            </Link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage