import styled from "styled-components";
import { palette } from "../../utils/palette";

const Container = styled.div`
  width: 70%;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const Divider = styled.hr`
  align-self: center;
  width: 98%;
  border: 0.5px solid ${palette.lightGrey};
  margin: 0;
`;

export default { Container, Divider };
