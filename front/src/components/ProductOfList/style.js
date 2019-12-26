import styled from "styled-components";
import { fontWeight } from "../../utils/fontWeight";
import { fontSize } from "../../utils/fontSize";
import { globalMargin } from "../../utils/globalMargin";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  cursor: pointer;
  font-size: ${fontSize.fs2};
  font-weight: 300;
  margin: ${globalMargin.marginSmall};
  padding-top: 16px;
  margin-right: 0;
  margin-bottom: ${globalMargin.marginSmall};
`;

const Content = styled.div`
  display: flex;
  max-width: 70%;
`;

const Img = styled.img`
  max-width: 180px;
  max-height: 180px;
  width: 180px;
  height: 180px;
  border-radius: 4px;
`;

const ContentDetailAndTitle = styled.div`
  margin-left: ${globalMargin.marginSmall};
`;

const Details = styled.div``;

const Price = styled.h1`
  display: inline-block;
  font: inherit;
  font-weight: ${fontWeight.regular};
  margin-bottom: ${globalMargin.marginBig};
  font-size: ${fontSize.fs2};
`;

const Title = styled.h2`
  font: inherit;
  font-weight: 400;
  margin: 0;
`;
const IconShipping = styled(Img)`
  width: 20px;
  height: 20px;
  max-width: 20px;
  max-height: 20px;
  margin-left: ${globalMargin.marginSmall};
  margin-top: 0;
`;

const Address = styled.span`
  justify-self: end;
  padding-top: ${globalMargin.marginBig};
  min-width: 120px;
  padding-right: 32px;
  font-size: ${fontSize.fs};
`;

export default {
  Container,
  Content,
  Img,
  ContentDetailAndTitle,
  Details,
  Price,
  Title,
  IconShipping,
  Address
};
