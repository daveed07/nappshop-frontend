import styled from 'styled-components';
import colors from '@constants/colors';

const StyledMenu = styled.div`
  min-width: 320px;
  height: calc(100vh - 84px);
  position: fixed;
  top: 84px;
  right: 0;
  z-index: 1;
  padding: 32px 32px;
  background: ${colors.white};
  border: 1px solid ${colors.greyLight};

  li {
    margin-bottom: 24px;
  }

  @media (max-width: 768px) {
    width: 100%;

    ul {
      margin-top: 48px;
    }
  }
`;

export default StyledMenu;