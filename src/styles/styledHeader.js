import styled from 'styled-components';
import sizes from '@constants/fontSizes';
import colors from '@constants/colors';

const StyledHeader = styled.header`
  height: 84px;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  padding: 0 2%;
  background: ${colors.white};
  border-bottom: 1px solid ${colors.greyLight};

  .cart-container {
    position: relative;
  }

  a {
    text-decoration: none;
    color: ${colors.black};
    font-weight: 600;
  }

  .quantity {
    width: 18px;
    height: 18px;
    position: absolute;
    top: -8px;
    right: -8px;
    background: ${colors.main};
    color: ${colors.white};
    font-size: ${sizes.small};
    font-weight: 600;
    border-radius: 50%;
    text-align: center;
  }

  .menu-container {
    display: none;
  }

  .cRFNmF, .klGUuZ {
    justify-content: flex-end;
  }

  @media (max-width: 768px) {
    width: 100%;
    position: fixed;
    z-index: 2;
    grid-template-columns: 1fr 1fr;
    background: ${colors.white};

    .menu-container {
      display: block;
    }
    .cRFNmF ul, .klGUuZ ul {
      gap: 0 16px;
  }
`;

export default StyledHeader;