import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import SiteHeader from './site-header/site-header'
import SiteFooter from './site-footer/site-footer'
import Modal from './modal/modal'
import '../style/screen.sass'

class Layout extends Component {

  render() {
    return (
      <>
        <Helmet>
          <html lang="en" />
          <meta name="description" content="I&#39;m a front-end web designer and developer. I&#39;m always happy to have a chat about websites, hosting, technology or rugby. Why not send me a message?" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Gareth Weaver - Front-end Web Designer &amp;amp; Developer" />
          <meta property="og:url" content="https://www.garethweaver.com" />
          <meta property="og:image" content="https://www.garethweaver.com/images/img-og.jpg" />
          <meta property="og:description" content="I&#39;m a front-end web designer and developer from the UK currently based in London. I&#39;m always happy to have a chat about websites, hosting, technology or rugby. Why not send me a message?" />
        </Helmet>
        <SiteHeader />
        {this.props.children}
        <SiteFooter />
        <CSSTransition
          in={this.props.modal}
          unmountOnExit
          timeout={400}
          classNames="a-modal">
            <Modal />
        </CSSTransition>
      </>
    )
  }

}

const mapStateToProps = state => {
  return {
    modal: state.modal,
  }
}

export default connect(mapStateToProps)(Layout)
