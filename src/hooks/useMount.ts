import { useEffect, useState } from 'react';

const useMount = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return loading;
};

export default useMount;