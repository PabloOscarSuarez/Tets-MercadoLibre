import styled from "styled-components";
import { palette } from "../../utils/palette";
import { fontSize } from "../../utils/fontSize";

const Header = styled.header`
  background-color: ${palette.yellow};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  padding: 32px;
  width: 70%;
  padding: 0;
`;

const Img = styled.img`
  height: 32px;
  align-self: center;
  padding-top: 4px;
`;

const Input = styled.input`
  width: 100%;
  height: 32px;
  border-radius: 4px;
  font-size: 1.1rem;
  border: 1px solid ${palette.lightGrey};
  color: ${palette.darkGrey};
  padding: 0.2rem;
  padding-left: 1rem;
  margin-left: 1rem;
`;

const Button = styled.button`
  background: ${palette.lightGrey};
  color: ${palette.grey};
  border: none;
  outline: none;
  font-size: ${fontSize.fs3};
  padding-top: 4px;
  width: 4%;
  cursor: pointer;
`;

export default { Header, Nav, Img, Input, Button };
