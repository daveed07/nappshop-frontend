import styled from 'styled-components';
import colors from "@constants/colors";

const StyledModal = styled.div`
  display: ${(props) => (props.open ? 'block' : 'none')};
  position: fixed;
  top: 16px;
  left: calc(50% - 160px);
  width: 320px;
  height: auto;
  background: ${colors.white};
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  z-index: 100;

  .modal-body {
    position: relative;
    padding: 24px;
  }

  svg {
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
    z-index: 1;
    &:hover {
      fill: ${colors.main};
    }
  }
`
export default StyledModal;