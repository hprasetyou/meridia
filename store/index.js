export const state = () => ({
  headerTheme: 'dark'
})

export const mutations = {
  SET_HEADER_THEME (state, headerTheme) {
    state.headerTheme = headerTheme
  }
}
