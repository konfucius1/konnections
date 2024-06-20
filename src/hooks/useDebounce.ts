/* eslint-disable @typescript-eslint/no-explicit-any */
export default function debounce(
  func: (...args: any[]) => void,
  wait: number = 0,
): (...args: any[]) => void {
  let timeoutID: NodeJS.Timeout | null = null;

  return function (this: any, ...args: any[]): void {
    if (timeoutID !== null) {
      clearTimeout(timeoutID);
    }

    timeoutID = setTimeout(() => {
      timeoutID = null;
      func.apply(this, args);
    }, wait);
  };
}
