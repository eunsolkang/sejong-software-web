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

import Toggle from 'react-toggle'
import Button from 'components/common/Button'

const cx = classNames.bind(styles);



class EditorPane extends React.Component {

  editor = null;
  codemirror = null;
  cursor = null;


  initializeEditor = () =>{
    this.codemirror = Codemirror(this.editor, {
      mode : 'markdown',
      theme : 'minimal-mistakes-jekyll',
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
    console.log(e.target.type);
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
    const { tags, title, markdown, commentCheck, privateCheck, anonCheck, onChangeMenu, boardPick, boards, power, onCreateVote } = this.props;
    const boardList = boards && boards.map(
      (board) => {
        const {name, is_admin, ix, parent_name} = board.toJS();
        if(parent_name === 'etc'){
          const navlist = boards && boards.map(
            (boardlist) => {

              if(name === boardlist.toJS().parent_name){
                if(power === boardlist.toJS().is_admin){
                  return (
                    <a
                      name={boardlist.toJS().name}
                      id={boardlist.toJS().ix}
                      onClick={onChangeMenu}
                      exact
                      className={cx('dropdown-content-right')}
                      key={boardlist.toJS().ix}
                    >
                    {boardlist.toJS().name}
                  </a>
                  )
                }

              }
            }
          )
          return (
            <div className={cx('dropdown-content-index')}>
              <div
                className={cx('dropdown-content-box')}
                name={name}
                key={ix}
                id={ix}
              >
              {name}
              </div>
              <div className={cx('dropdown-content-down')}>
                {navlist}
              </div>
            </div>

          )
        }

      }
    );
    return (
      <div className={cx('editor-pane')}>
        <div className={cx('title-box')}>

          <div className={cx('dropdown')}>
            <button className={cx('drop-btn')}>{boardPick}</button>
            <div className={cx('dropdown-content')}>
              {boardList}
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
      <div className={cx('option-box')}>
        <div className={cx('comment-able')}>
          <label>
            <span>댓글 허용</span>
            <Toggle
              name="commentCheck"
              type="checkbox"
              cheked={commentCheck}
              defaultChecked={commentCheck}
              onChange={handleChange}
            />

          </label>
        </div>
        <div className={cx('comment-able')}>
          <label>
            <span>비밀글</span>
            <Toggle
              name="privateCheck"
              type="checkbox"
              cheked={privateCheck}
              defaultChecked={privateCheck}
              onChange={handleChange}

              />
          </label>
        </div>
        <div className={cx('comment-able')}>
          <label>
            <span>익명</span>
            <Toggle
              name="anonCheck"
              type="checkbox"
              cheked={anonCheck}
              defaultChecked={anonCheck}
              onChange={handleChange}

              />
          </label>
        </div>
        <div className={cx('comment-able')}>
          <Button onClick={onCreateVote}>투표추가</Button>
        </div>

      </div>
      </div>
    )
  }
}

export default EditorPane;
