import styled from "styled-components";

const StyledButtonContainer = styled.div`
  background: grey;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  grid-gap: 10px;
  /* position: relative;
  top: 50px;
  left: 20px;
  width: 300px; */
  width: 60%;
  height: 60%;
  padding: 5px;
  margin-left: 20px;

  /* @media only screen and (min-width: 768px) {
    width: 500px;
    height: 300px;
  }

  @media only screen and (min-width: 992px) {
    width: 700px;
    height: 400px;
  }
  @media only screen and (min-width: 1200px) {
    top: 80px;
    width: 60vw;
    height: 60vh;
  } */
`;

export default StyledButtonContainer;
