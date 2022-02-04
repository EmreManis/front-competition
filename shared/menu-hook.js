import { useState, useCallback } from "react";

const useActive = ( initialActive = 0) => {
  const [activeId, setChangeActive] = useState(initialActive);
  
  const activeHandler = useCallback((id) => {

    setChangeActive(id);
  }, []);

  return [activeId, activeHandler];
};

export default useActive;
