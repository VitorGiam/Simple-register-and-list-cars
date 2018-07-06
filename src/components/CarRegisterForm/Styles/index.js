import styled, { css } from "styled-components";

const btn = (light, dark) => css`
  white-space: nowrap;
  display: inline-block;
  border-radius: 5px;
  padding: 5px 15px;
  font-size: 16px;
  color: white;

  background-image: linear-gradient(${light}, ${dark});
  border: 1px solid ${dark};
  &:hover {
    background-image: linear-gradient(${light}, ${dark});
    &[disabled] {
      background-image: linear-gradient(${light}, ${dark});
    }
  }
  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
const btnDefault = css`
  ${btn("#ffffff", "#d5d5d5")} color: #555;
`;
const btnPrimary = btn("#4f93ce", "#285f8f");

export default styled.div`
  font-family: sans-serif;
  form,
  div.form {
    padding: 20px;
    margin: 10px auto;
    text-align: left;
    width: 70%;
    border: 1px solid #ccc;

    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    font-size: 15px;
    & > div {
      display: flex;
      margin: 5px;
      & > label {
        color: #333;
        width: 10%;
        min-width: 60px;
        line-height: 32px;
        padding: 5px 5px;
      }
      & > input,
      & > textarea {
        flex: 1;
        padding: 5px 5px;
        margin-left: 15px;
        border: 1px solid #ccc;
        border-radius: 3px;
      }
      & > span {
        margin: 10px;
        line-height: 32px;
        padding: 3px 5px;
        color: #800;
        font-weight: bold;
      }
    }
    & > .buttons {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      padding: 20px;
    }
  }
  button {
    margin: 0 10px;
    &[type="submit"] {
      ${btnPrimary};
    }
    &[type="button"] {
      ${btnDefault};
    }
  }
`;
