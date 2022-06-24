import styled, { css } from 'styled-components';
import sizes from '@constants/fontSizes';

const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${props => props.login && css`
    padding-top: 128px;
  `}

  ${props => props.signup && css`
    padding-top: 64px;

    @media (max-width: 768px) {
      padding-top: 128px;
    }
  `}

  .alert {
    font-size: ${sizes.small};
    color: red;
    margin-bottom: 16px;
  }

  h1 {
    margin-bottom: 24px;
  }

  p {
    margin-bottom: 34px;
  }

  a {
    margin-bottom: 16px;
  }
`;

export default StyledLogin;