export const usePreventLeave = () => {
  const listener = e => {
    e.preventDefault();
    // this line actually makes the prompt popup before closing the window
    e.returnValue = "";
  };
  const enablePrevent = () => {
    window.addEventListener("beforeunload", listener);
  };
  const disablePrevent = () => {
    window.removeEventListener("beforeunload", listener);
  };
  return { enablePrevent, disablePrevent };
};
