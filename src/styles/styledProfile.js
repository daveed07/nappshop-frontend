import styled from 'styled-components';

const StyledProfile = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  justify-content: center;
  padding: 0 4%;
  padding-top: 64px;
  padding-bottom: 64px;
  gap: 48px;
  text-align: center;

  .profile-edit {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .profile-details p {
    margin-top: 16px;
  }

  button {
    max-width: 200px;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    padding-top: 96px;
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