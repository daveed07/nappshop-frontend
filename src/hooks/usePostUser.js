import { useEffect, useState } from 'react';
import axios from 'axios';
import useGetUser from './useGetUser';

// create a hook that registers the user, send data through the body and receive the response, receive body data from parameters
const usePostUser = (API, body) => {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    axios
      .post(API, body)
      .then((response) => {
        setResponse(response);
        useGetUser(API, response.data.id);
      })
      .catch((error) => {
        setResponse(error);
      }
      );
  }, [API, body]);

  return response;
}

export default usePostUser;