import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { MdDone, MdDelete } from "react-icons/md";
import { useTodoDispatch } from "../TodoContext";

const Remove = css`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  &:active {
    color: #ff6b6b;
  }
  display: none;
`;

const TodoItemBlock = css`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = css`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = css`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

function TodoItem({ id, done, text }) {
  const dispatch = useTodoDispatch();
  const onToggle = () => dispatch({ type: "TOGGLE", id });
  const onRemove = () => dispatch({ type: "REMOVE", id });
  return (
    <div css={TodoItemBlock}>
      <div css={CheckCircle} done={done} onClick={onToggle}>
        {done && <MdDone />}
      </div>
      <div css={Text} done={done}>
        {text}
      </div>
      <div css={Remove} onClick={onRemove}>
        <MdDelete />
      </div>
    </div>
  );
}

export default React.memo(TodoItem);
