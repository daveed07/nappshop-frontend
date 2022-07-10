import styled from 'styled-components';
import colors from "@constants/colors";

const StyledCartItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;

  p {
    margin-top: 8px;
  }

  .actions {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 4px;
  };

  .quantity {
    display: flex;
    align-items: center;
    gap: 4px;
  };

  input {
    width: 40px;
    height: 40px;
    padding: 0;
    text-align: center;
    border: 1px solid ${colors.greyLight};
    border-radius: 4px;

    ::placeholder {
      color: ${colors.black};
    };

    ::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    };
  };

  button {
    width: 40px;
    height: 40px;
    border: 1px solid ${colors.greyLight};
    border-radius: 4px;

    &:hover {
      background: ${colors.greyLight};
    };
  };

  @media (max-width: 768px) {
    gap: 12px;
    .description {
      display: none;
    };
  };
`;

export default StyledCartItem;