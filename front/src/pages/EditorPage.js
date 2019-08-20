import React from 'react'
import PropTypes from 'prop-types'
import EditorTemplate from 'components/editor/EditorTemplate'
import EditorHeaderContainer from 'containers/editor/EditorHeaderContainer';
import EditorPaneContainer from 'containers/editor/EditorPaneContainer'
import PreviewPaneContainer from 'containers/editor/PreviewPaneContainer'

const EditorPage = (props) => {
  return (
    <EditorTemplate
      header={<EditorHeaderContainer/>}
      editor={<EditorPaneContainer/>}
      preview={<PreviewPaneContainer/>}/>
  )
}

export default EditorPage
