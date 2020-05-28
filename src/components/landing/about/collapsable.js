import React from 'react';
import { cx, css } from 'emotion';
import Collapse from '@kunukn/react-collapse';
import { AiFillCaretDown, AiFillCaretRight } from "react-icons/ai";

const activeCollapse = css`
  & .btn {    
    width: 100%;
    font-size: 20px;
    color: #fff;
    font-weight: 700;
    & .title-collapse {
      flex: 7;
      height: 50px;
      display: flex;
      align-items: center;
      background: #2b2b2b;
    }
    & .icon-collapse {
      background-color: #00c400 !important;
      color: #2b2b2b;
      &:hover {
        color: white !important;
      }
    }
  }
`;

const itemCollapse =css`
  padding: 0.5rem;
  & .btn {    
    width: 100%;
    font-size: 20px;
    color: #101010;
    font-weight: 700;
  }
`;

const collapseBtn = css`
  display: flex;
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  outline: 0;
  background-color: #dbdbdb;
  & .title-collapse {
    flex: 7;
    padding-left: 2rem;
    height: 50px;
    display: flex;
    align-items: center;
  }

  &:hover {
    background-color: #2b2b2b;
    color: white;
  }

  & .icon-collapse {
    flex: .5;
    height: 50px;
    display: flex;
    align-items: center;
    background: #2b2b2b;
    justify-content: space-around;
  }
`;

const CollapseCss = css`
  transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1);
`;

const Content = css`
  padding: 1rem 0.5rem;
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
  &.collapsing {
    transform: translateY(-10px);
  }
  &.collapsed {
    transform: translateY(-10px);
  }
  &.expanding {
    transform: translateX(0px);
  }
  &.expanded {
    transform: translateX(0px);
  }
`;

const createContent = (collapseState, content) => {
  return (
    <div className={`${Content} ${collapseState}`}>
      <p className="text">{content}</p>
    </div>
  );
}

const collapsable = ({collapse, toggle, setCollapse, index, title, content}) => {
  return (
    <div className={cx(itemCollapse, { [activeCollapse]: collapse.index === index })}>
      <button className={`btn ${collapseBtn}`} onClick={_ => toggle(index)}>
        <span className='title-collapse'>{title}</span> <span className='icon-collapse'> { collapse.index === index ? <AiFillCaretDown size="1.7rem" />: <AiFillCaretRight color="white" size="1.7rem" /> } </span>
      </button>
      <Collapse
        className={CollapseCss}
        isOpen={collapse.index === index}
        onChange={({ state }) => {
          setCollapse(prevState => ({
            ...prevState,
            item1: state
          }))
        }}
        onInit={({ state }) => {
          setCollapse(prevState => ({
            ...prevState,
            item1: state
          }))
        }}

        render={collapseState => createContent(collapseState, content)}
      />
    </div>
  )
}

export default collapsable

