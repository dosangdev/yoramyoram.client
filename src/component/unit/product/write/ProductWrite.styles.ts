import styled from "@emotion/styled";
import { Select } from "antd";

export const Wrapper = styled.section`
  max-width: 1300px;
  padding: 150px 0;
  margin: 0 auto;
`;
export const Title = styled.h3`
  font-size: 35px;
  color: #306415;
  font-family: "Noto Sans KR";
  font-weight: 500;
  margin-bottom: 50px;
`;
export const Form = styled.form``;
export const HalfWrapper = styled.div`
  display: flex;
  margin-bottom: 40px;
  gap: 50px;
`;

export const HalfBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const SelectWrap = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
`;

export const SelectBox = styled(Select)`
  :where(.css-dev-only-do-not-override-9ntgx0).ant-select-single:not(
      .ant-select-customize-input
    )
    .ant-select-selector {
    height: 40px !important;
    border: 1px solid #306415 !important;
    background-color: transparent !important;
  }
  :where(.css-dev-only-do-not-override-9ntgx0).ant-select-single
    .ant-select-selector
    .ant-select-selection-item {
    line-height: 40px;
  }
`;

export const OptionBox = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`;
export const Label = styled.label`
  font-size: 16px;
  color: #306415;
  font-weight: 500;
  margin-bottom: 10px;
`;
export const Input = styled.input`
  border: none;
  border-bottom: 1px solid #306415;
  padding: 10px;
  background-color: transparent;
  outline: none;
  &::placeholder {
    color: #a2a2a2;
    font-weight: 400;
  }
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const Option = styled.option``;
export const PhotoWrapper = styled.div``;
export const PhotoBox = styled.div``;
export const Upload = styled.input``;
export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;
export const Cancel = styled.button`
  width: 10%;
  font-size: 18px;
  padding: 10px 0;
  border: 1px solid #b7b7b7;
  background-color: transparent;
  cursor: pointer;
`;
export const Submit = styled.button`
  width: 10%;
  font-size: 18px;
  background-color: #306415;
  border: none;
  color: #fcfbfa;
  padding: 10px 0;
  cursor: pointer;
`;

/// TAG ///

export const WholeBox = styled.div``;

export const TagBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  border-bottom: 1px solid #306415;

  &:focus-within {
    border-color: #306415;
  }
`;

export const TagItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px;
  padding: 5px;
  background-color: #306415;
  border-radius: 5px;
  color: white;
  font-size: 13px;
`;

export const Text = styled.span``;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15px;
  height: 15px;
  margin-left: 5px;
  background-color: transparent;
  border-radius: 50%;
  color: #f2f2f2;
  border: none;
  cursor: pointer;
`;

export const TagInput = styled.input`
  display: inline-flex;
  min-width: 150px;
  background: transparent;
  border: none;
  outline: none;
  cursor: text;
  padding: 10px;
  &::placeholder {
    color: #a2a2a2;
    font-weight: 400;
  }
`;