import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetOrders = (API) => {
  const [orders, setOrders] = useState([]);

  useEffect(async () => {
    const response = await axios.get(API);
    setOrders(response.data);
  }, []);
  return orders;
}

export default useGetOrders;