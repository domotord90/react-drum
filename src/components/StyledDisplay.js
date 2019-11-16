import styled from "styled-components";

const StyledDisplay = styled.input`
  background: aquamarine;
  width: 250px;
  border: 1px solid black;
  border-radius: 5px;
  align-self: flex-end;
  position: relative;
  right: 20px;
  top: 30px;
  height: 30px;
  font-weight: bold;
  text-align: right;
  padding-right: 5px;

  @media only screen and (max-width: 767px) {
    width: 200px;
  }

  @media only screen and (min-width: 768px) {
    width: 40vw;
  }

  @media only screen and (min-width: 1200px) {
    width: 30vw;
  }
`;

export default StyledDisplay;
