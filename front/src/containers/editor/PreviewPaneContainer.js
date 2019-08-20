import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PreviewPane from 'components/editor/PreviewPane';

class PreviewPaneContainer extends React.Component {
  render () {
    const { markdown, title } = this.props;
    console.log(markdown);
    return (
      <PreviewPane title={title} markdown={markdown}/>
    )
  }
}

export default connect(
  (state) => ({
    title : state.editor.get('title'),
    markdown : state.editor.get('markdown')
  })
)(PreviewPaneContainer);
