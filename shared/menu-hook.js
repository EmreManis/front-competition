import { useState, useCallback } from "react";

const useActive = ( initialActive = 0) => {
  const [changeActive, setChangeActive] = useState(initialActive);
  
  const activeHandler = useCallback((id) => {
    console.log(id)
    setChangeActive(id);
  }, []);

  return [changeActive, activeHandler];
};

export default useActive;
