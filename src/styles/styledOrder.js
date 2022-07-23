import styled from 'styled-components';
import colors from '@constants/colors';

const StyledOrder = styled.div`
  text-align: left;
  padding: 24px;
  padding-bottom: ${props => props.toggle ? '24px' : '0'};
  border: 1px solid ${colors.greyLight};
  border-radius: 4px;

  .order-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: ${props => props.toggle ? '16px' : '0'};
  }
  
  .order-header-info {
    display: flex;
    justify-content: space-between;
    gap: 16px;
  }

  .order-item h1 {
    margin-bottom: 0;
  }

  .shipping-address {
    margin-bottom: 16px;
  }

  .order-items {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .order-item {
    display: flex;
    justify-content: space-between;
    border: 1px solid ${colors.greyLight};
    border-radius: 4px;
    padding: 16px;
  }

  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
  }
`
export default StyledOrder;