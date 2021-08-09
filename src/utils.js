const generateRandomColor = () => `#${Math.floor(Math.random()*(0xFFFFFF << 0)).toString(16)}`;

/**
 * Calculates the contrast of the background based off of the hex RGB values.
 * 
 * Each color is weighted based on the intensity of the color. 
 * 
 * Intensity is calculated by converting RGB to gray, then comparing this to a median value between 0 - 256.
 * We choose 180 as the gamma curve on monitors causes "middle" gray to appear higher than 128.
 * 
 * @param {string} background A hex string representing the background
 * @returns A dark text color if the background is too bright, else a light text color
 */
const getForegroundColor = background => {
    const red = parseInt(background.substring(1, 3), 16);
    const green = parseInt(background.substring(3, 5), 16);
    const blue = parseInt(background.substring(6, 8), 16);

    return (((red * 0.299) + (green * 0.587) + (blue * 0.114)) > 180) ? `#333333` : `#FFFFFF`;
}

export { generateRandomColor, getForegroundColor };