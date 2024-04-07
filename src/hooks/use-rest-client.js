import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

import { STRAPI_URL } from 'src/config-global';

axios.defaults.baseURL = STRAPI_URL;

const useRestClient = ({ url, method, body = null, headers = null, auth = true, skip = false }) => {
  const { data: session } = useSession();
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const headersParam = auth ? { ...headers, Authorization: `Bearer ${session?.jwt}` } : headers;

  const fetchData = (params) => {
    axios
      .request(params)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (!skip)
      fetchData({
        url,
        method,
        body,
        headers: headersParam,
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [method, url, body, headers]);

  return { data, error, loading };
};

export default useRestClient;
