import styled from 'styled-components';
import colors from "@constants/colors";

const StyledModal = styled.div`
  display: ${(props) => (props.open ? 'block' : 'none')};
  position: fixed;
  top: 16px;
  left: calc(50% - 150px);
  width: 300px;
  height: auto;
  background: ${colors.white};
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  z-index: 100;
  padding: 8px 16px 16px 16px;

  .modal-header {
    margin-bottom: 4px;
    text-align: right;
  }

  svg {
    cursor: pointer;
  }
`
export default StyledModal;