import styled from "styled-components";
import { globalMargin } from "../../utils/globalMargin";

const Container = styled.div`
  width: 70%;
`;

const Content = styled.div`
  margin: ${globalMargin.marginBig};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ContentImgAndDetail = styled.div`
  display: flex;
`;

const Img = styled.img``;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
`;

const Span = styled.span``;

const Title = styled.h1``;

const Price = styled.h2``;

const ButtonAddToCart = styled.button``;

const ContentSubtitleAndDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Subtitle = styled.h3``;

const Description = styled.p``;

export default {
  Container,
  Content,
  ContentImgAndDetail,
  Img,
  Detail,
  Span,
  Title,
  Price,
  ButtonAddToCart,
  ContentSubtitleAndDescription,
  Subtitle,
  Description
};
