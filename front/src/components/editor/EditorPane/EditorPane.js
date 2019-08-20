import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind';
import styles from './EditorPane.scss'

import Codemirror from 'codemirror'

import 'codemirror/mode/markdown/markdown';

import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/css/css';
import 'codemirror/mode/shell/shell';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css'

const cx = classNames.bind(styles);



class EditorPane extends React.Component {

  editor = null;
  codemirror = null;
  cursor = null;


  initializeEditor = () =>{
    this.codemirror = Codemirror(this.editor, {
      mode : 'markdown',
      theme : 'monokai',
      lineNumbers: true,
      lineWrapping: true
    });
    this.codemirror.on('change', this.handleChangeMarkdown);
  }
  componentDidMount(){
    this.initializeEditor();



  }
  handleChange = (e) => {
    const { onChangeInput } = this.props;
    const { value, name} = e.target;
    onChangeInput({name, value});
  }
  handleChangeMarkdown = (doc) => {
    const { onChangeInput }= this.props;
    this.cursor = doc.getCursor();
    onChangeInput({
      name : 'markdown',
      value : doc.getValue()
    })
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.markdown !== this.props.markdown){
      const { codeMirror, cursor } = this;
      if(!codeMirror) return;
      codeMirror.setValue(this.props.markdown);
      if(!cursor) return;
      codeMirror.setCursor(cursor);
    }
  }
  render () {
    const { handleChange } = this;
    const { tags, title, markdown } = this.props;

    return (
      <div className={cx('editor-pane')}>
        <input
          className={cx('title')}
          placeholder="제목을 입력하세요"
          name="title"
          value={title}
          onChange={handleChange}
        />
      <div className={cx('code-editor')} ref={ref => this.editor=ref}></div>
        <div className={cx('tags')}>
          <div className={cx('description')}>테그</div>
          <input
            placeholder="태그를 입력하세요 (쉼표로 구분)"
            name="tags"
            value={tags}
            onChange={handleChange}
          />
        </div>
      </div>
    )
  }
}

export default EditorPane;
