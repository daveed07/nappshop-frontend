import styled from 'styled-components';

const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 64px;
  text-align: center;

  .profile-edit {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 768px) {
    padding-top: 96px;
  }

  h1 {
    margin-bottom: 24px;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .profile-edit, .profile-details {
    margin-top: 24px;
  }
`;

export default StyledProfile;