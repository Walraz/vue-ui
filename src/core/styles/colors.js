import { shade, tint } from 'polished'

const colors = {
  // primary: 'rgb(12, 47, 251)',
  primary: 'rgba(159, 38, 255, 1.00)',
  darkColor: '#111',
  lightColor: '#fff',
  success: 'rgba(19, 206, 102, 1.00)',
  info: 'rgba(33, 150, 243, 1.00)',
  warning: 'rgba(255, 193, 7, 1.00)',
  alert: 'rgba(255, 82, 82, 1.00)',
}

export default theme => {
  const themeColors = Object.assign(colors, theme)
  return {
    ...themeColors,
    primaryTint: tint(0.8, themeColors.primary),
    primaryShade: shade(0.8, themeColors.primary),
    primaryLight: tint(0.05, themeColors.primary),

    successDark: shade(0.8, themeColors.success),
    successDarker: shade(0.6, themeColors.success),

    infoDark: shade(0.8, themeColors.info),
    infoDarker: shade(0.6, themeColors.info),

    warningDark: shade(0.8, themeColors.warning),
    warningDarker: shade(0.6, themeColors.warning),

    alertDark: shade(0.8, themeColors.alert),
    alertDarker: shade(0.6, themeColors.alert),

    dark: opacity =>
      opacity ? `rgba(0,0,0,${opacity})` : themeColors.darkColor,
    light: opacity =>
      opacity ? `rgba(255,255,255,${opacity})` : themeColors.lightColor,
  }
}
