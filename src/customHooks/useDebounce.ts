import { useEffect, useState } from "react";

const useDebounce = (inputValue: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(inputValue);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue, delay]);

  return debouncedValue;
};

export default useDebounce;

// import { useEffect, useState } from "react";

// const useDebounce = <T>(inputValue: T, delay: number): T => {
//   const [debouncedValue, setDebouncedValue] = useState<T>(inputValue);

//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebouncedValue(inputValue);
//     }, delay);

//     return () => {
//       clearTimeout(handler);
//     };
//   }, [inputValue, delay]);

//   return debouncedValue;
// };

// export default useDebounce;

