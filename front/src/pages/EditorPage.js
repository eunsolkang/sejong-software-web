import React from 'react'

import EditorTemplate from 'components/editor/EditorTemplate'
import EditorHeaderContainer from 'containers/editor/EditorHeaderContainer';
import EditorPaneContainer from 'containers/editor/EditorPaneContainer'
import PreviewPaneContainer from 'containers/editor/PreviewPaneContainer'
import AddVoteModalContainer from 'containers/modal/AddVoteModalContainer'

const EditorPage = (props) => {
  return (
    <EditorTemplate
      header={<EditorHeaderContainer/>}
      editor={<EditorPaneContainer/>}
      preview={<PreviewPaneContainer/>}
      modal={<AddVoteModalContainer/>}
    >
    </EditorTemplate>
  )
}

export default EditorPage
