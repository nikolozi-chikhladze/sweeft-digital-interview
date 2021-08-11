export const getWindowSize = () => {
    return {
      width: window.innerWidth, 
      height: window.innerHeight
    }
}

export const getMessage = (screen) => `Show on ${screen}`;