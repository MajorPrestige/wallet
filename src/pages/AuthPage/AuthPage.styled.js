import styled from "styled-components";

import { device } from "styles/Media.variables";
import Elipse1 from "images/auth/Ellipse1.png";
import Elipse2 from "images/auth/Ellipse2.png";

export const StyledAuthForm = styled.div`
  min-height: 100vh;

  @media ${device.tabletBefore} {
    background-color: #ffffff;
  }

  @media ${device.tablet} {
    background: top 0% right 0% no-repeat url(${Elipse2}),
      bottom 0% left 0% no-repeat url(${Elipse1}), #e7eaf2;
  }

  @media ${device.desktop} {
    display: flex;
    align-items: center;
  }
`;

export const AuthHero = styled.div`
  @media ${device.tablet} {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 60px;
    padding-bottom: 50px;
  }

  @media ${device.desktop} {
    width: 100vw;
    height: 100vh;
    flex-direction: column;
  }
`;
