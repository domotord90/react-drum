import styled from "styled-components";

const StyledDrumContainer = styled.div`
  background: rgba(0, 0, 0, 0.9);
  border-left: 5px solid rgb(101, 67, 33);
  border-right: 5px solid rgb(101, 67, 33);
  border-radius: 5px;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 767px) {
    width: 500px;
    height: 50vh;
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    width: 1000px;
    height: 70vh;
  }

  @media only screen and (min-width: 992px) {
    width: 1800px;
    height: 80vh;
  }
  @media only screen and (min-width: 1200px) {
    width: 90vw;
    height: 90vh;
  }
`;

export default StyledDrumContainer;
