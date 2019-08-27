import React from 'react'

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
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    const {name, type} = e.target;
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
    const { tags, title, markdown, commentCheck, privateCheck } = this.props;

    return (
      <div className={cx('editor-pane')}>
        <div className={cx('title-box')}>
          <div className={cx('option-box')}>
            <div className={cx('dropdown')}>
              <button className={cx('drop-btn')}>게시판선택</button>
              <div className={cx('dropdown-content')}>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
            <div className={cx('comment-able')}>
              댓글 작성 허용
              <input type="checkbox"
                     name="commentCheck"
                     checked={commentCheck}
                     onChange={handleChange}
              />
            </div>
            <div className={cx('comment-able')}>
              비밀글
              <input type="checkbox"
                     name="privateCheck"
                     checked={privateCheck}
                     onChange={handleChange}
              />
            </div>
          </div>
          <input
            className={cx('title')}
            placeholder="제목을 입력하세요"
            name="title"
            value={title}
            onChange={handleChange}
          />
        </div>
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
