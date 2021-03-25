const colors = {
    blue1: "#25b4de",
    blue2: "#005066",
    blue3: "#004052",
    blue4: "#00303d",
    blue5: "#002029", 
    white: "#FFF",
    lightGray: "#f8f9fa",
    gray: "#dedddc",
    gray2: "#bab8b6",
    darkGray: "#343a40",
    black: "#212529",
}

const LightTheme = {
    pageBackground: colors.gray,
    cardBackground: colors.white,
    toggleBackground: colors.blue1,
    toggleColor: colors.white,
    separatorBackground: colors.lightGray,
    inputBackground: colors.white,
    inputTextColor: colors.black,
    inputPlaceholderColor: colors.gray2,
    buttonBackground:colors.blue1,
    buttonTextBackground:colors.white,
    headerTextColor:colors.black,
};

const DarkTheme = {
    pageBackground: colors.blue5,
    cardBackground: colors.blue4,
    toggleBackground: colors.blue3,
    toggleColor: colors.blue1,
    separatorBackground: colors.blue3,
    inputBackground: colors.blue2,
    inputTextColor: colors.white,
    inputPlaceholderColor: colors.gray,
    buttonBackground:colors.blue1,
    buttonTextBackground:colors.white,
    headerTextColor:colors.white,
}

const themes = {
    light: LightTheme,
    dark: DarkTheme,
}

export default themes;