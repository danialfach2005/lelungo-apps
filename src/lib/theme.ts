export const THEME_STORAGE_KEY = 'lelungo-theme';

export const getThemeScript = () => `
  (function() {
    try {
      var storedTheme = localStorage.getItem('${THEME_STORAGE_KEY}');
      var systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      // Default to system if not set
      if (!storedTheme) {
        storedTheme = 'system';
      }

      var isDark = 
        storedTheme === 'dark' || 
        (storedTheme === 'system' && systemPrefersDark);

      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (e) {}
  })();
`;
