let rainbowRed = 0;
let rainbowBlue = 0;
let rainbowGreen = 0;

const rainbow = (tick) => {
    switch(tick) {
        case 0:
            rainbowRed = 255/255
            rainbowGreen = 0/255
            rainbowBlue = 0/255
            break;

        case 1:
            rainbowRed = 255/255
            rainbowGreen = 127/255
            rainbowBlue = 0/255
            break;

        case 2:
            rainbowRed = 255/255
            rainbowGreen = 255/255
            rainbowBlue = 0/255
            break;

        case 3:
            rainbowRed = 127/255
            rainbowGreen = 255/255
            rainbowBlue = 0/255
            break;

        case 4:
            rainbowRed = 0/255
            rainbowGreen = 255/255
            rainbowBlue = 0/255
            break;

        case 5:
            rainbowRed = 0/255
            rainbowGreen = 255/255
            rainbowBlue = 127/255
            break;

        case 6:
            rainbowRed = 0/255
            rainbowGreen = 255/255
            rainbowBlue = 255/255
            break;

        case 7:
            rainbowRed = 0/255
            rainbowGreen = 127/255
            rainbowBlue = 255/255
            break;

        case 8:
            rainbowRed = 0/255
            rainbowGreen = 0/255
            rainbowBlue = 255/255
            break;

        case 9:
            rainbowRed = 127/255
            rainbowGreen = 0/255
            rainbowBlue = 255/255
            break;

        case 10:
            rainbowRed = 255/255
            rainbowGreen = 0/255
            rainbowBlue = 255/255
            break;

        case 11:
            rainbowRed = 255/255
            rainbowGreen = 0/255
            rainbowBlue = 127/255
            break;   
    }
}

const getRed = () => {
    return rainbowRed;
}

const getGreen = () => {
    return rainbowGreen;
}

const getBlue = () => {
    return rainbowBlue;
}

export { rainbow, getRed, getGreen, getBlue }