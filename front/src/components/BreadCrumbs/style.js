import styled from "styled-components";
import { globalMargin } from "../../utils/globalMargin";
import { fontSize } from "../../utils/fontSize";
import { palette } from "../../utils/palette";

const Container = styled.div`
  width: 70%;
`;
const BreadCrumbs = styled.ul`
  padding: 0;
  margin: ${globalMargin.marginSmall} 0;
  font-size: ${fontSize.fs1};
  color: ${palette.grey};
  display: -webkit-box;
  background-color: unset;

  li:last-child {
    font-weight: bold;
  }
  li:nth-child(n + 2) {
    ::before {
      margin: 0 4px;
      content: ">";
    }
  }
`;

const Crumb = styled.li`
  list-style: none;
`;

export default { Container, BreadCrumbs, Crumb };
