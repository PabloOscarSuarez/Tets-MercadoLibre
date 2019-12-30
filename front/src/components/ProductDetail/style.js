import styled from "styled-components";
import { globalMargin } from "../../utils/globalMargin";
import { palette } from "../../utils/palette";
import { fontSize } from "../../utils/fontSize";
import { fontWeight } from "../../utils/fontWeight";

const Container = styled.div`
  width: 70%;
  background-color: white;
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
  width: 100%;
`;

const Img = styled.img`
  width: 63%;
  margin-left: 50px;
`;

const ContentImg = styled.div`
  width: 76%;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  width: 24%;
`;

const Span = styled.span`
  font-size: ${fontSize.fs1};
`;

const Title = styled.h1`
  font-size: ${fontSize.fs4};
  margin-top: ${globalMargin.marginSmall};
  margin-bottom: ${globalMargin.marginBig};
`;

const Price = styled.h2`
  font-size: ${fontSize.fs5};
  font-weight: ${fontWeight.regular};
  margin-top: 0;
  margin-bottom: ${globalMargin.marginBig};
  position: relative;
`;

const Decimals = styled(Span)`
  position: absolute;
`;

const ButtonAddToCart = styled.button`
  font-size: ${fontSize.fs2};
  color: white;
  background-color: ${palette.blue};
  border: none;
  width: 90%;
  padding: ${globalMargin.marginSmall};
  cursor: pointer;
`;

const ContentSubtitleAndDescription = styled.div`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 76%;
  margin-top: 100px;
`;

const Subtitle = styled.h3`
  margin: 0;
  padding-bottom: ${globalMargin.marginBig};
  font-size: ${fontSize.fs3};
  font-weight: ${fontWeight.regular};
`;

const Description = styled.p`
  margin: 0;
  font-size: ${fontSize.fs2};
  color: ${palette.darkGrey};
`;

export default {
  Container,
  Content,
  ContentImgAndDetail,
  Img,
  ContentImg,
  Detail,
  Span,
  Title,
  Price,
  ButtonAddToCart,
  ContentSubtitleAndDescription,
  Subtitle,
  Description,
  Decimals
};
