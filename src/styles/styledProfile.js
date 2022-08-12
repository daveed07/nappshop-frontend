import styled from 'styled-components';
import colors from '@constants/colors';

const StyledProfile = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: auto;
  padding: 0 4%;
  padding-top: 12px;
  padding-bottom: 12px;

  .wrapper {
    width: 80%;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 48px;
    text-align: center;
  }

  .profile-container {
    min-width: 320px;
    padding: 42px;
    border: 1px solid ${colors.greyLight};
    border-radius: 4px;
  }

  .profile-edit {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .profile-edit .input-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  .profile-edit .button-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }

  .profile-details p {
    margin-top: 16px;
    text-align: left;
  }

  span {
    font-weight: 400;
  }

  button {
    max-width: 200px;
  }

  figure {
    position: relative;
  }

  .image-overlay {
    display: none;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
  }

  label {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  figure:hover .image-overlay {
    display: block;
  }

  @media (max-width: 992px) {
    .wrapper {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 0;
    padding-right: 0;
    .wrapper {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      padding-top: 96px;
      gap: 0;
    }
    .profile-container {
      width: 100%;
    }
  }

  h1 {
    margin-bottom: 24px;
  }

  .profile-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .profile-edit, .profile-details {
    margin-top: 24px;
  }
`;

export default StyledProfile;