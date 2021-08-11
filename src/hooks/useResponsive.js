import { useContext } from 'react';
import { WindowSizeContext } from '../contexts/WindowSizeContext';

export const useResponsive = () => {
    const {width, height} = useContext(WindowSizeContext);
    let screen = '';
    if (width >= 1280) {
        screen = 'desktop';
    } else if (width >= 960 && width < 1280) {
        screen = 'tablet';
    } else if (width >= 480 && width < 960) {
        screen = 'mobile'
    }
    return {
        width,
        height,
        screen,
    }
}