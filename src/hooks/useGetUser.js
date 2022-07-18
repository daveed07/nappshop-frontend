import { useEffect, useState } from "react";
import axios from "axios";
import { store } from "../redux/store";

// create a hook that gets an user by id store user in redux
const useGetUser = (API, id) => {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    axios
      .get(`${API}/${id}`)
      .then((response) => {
        store.dispatch({
          type: "SIGN_UP",
          payload: response.data,
        });
        setResponse(response);
      })
      .catch((error) => {
        setResponse(error);
      }
      );
  }, [API, id]);

  return response;
}

export default useGetUser;