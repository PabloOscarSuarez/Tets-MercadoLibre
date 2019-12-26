import styled from "styled-components";
import { palette } from "../../utils/palette";

const Container = styled.div`
  width: 70%;
`;

const Divider = styled.hr`
  width: 98%;
  border: 0.5px solid ${palette.lightGrey};
`;

export default { Container, Divider };
