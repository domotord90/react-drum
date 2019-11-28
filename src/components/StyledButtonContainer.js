import styled from "styled-components";

const StyledButtonContainer = styled.div`
  background: grey;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  grid-gap: 10px;
  width: 60%;
  height: 70%;
  padding: 5px;
  margin-left: 20px;

  @media screen and (orientation: landscape) {
    height: 80%;
  }
`;

export default StyledButtonContainer;
