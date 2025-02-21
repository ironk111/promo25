// theme-switcher.js

// Función para cargar el tema guardado en localStorage
const loadTheme = () => {
    const savedTheme = localStorage.getItem('theme') || 'light'; // Por defecto 'light'
    document.documentElement.setAttribute('data-bs-theme', savedTheme);
  
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    if (themeToggleBtn) {
      themeToggleBtn.textContent = savedTheme === 'light' ? 'Modo oscuro' : 'Modo claro';
    }
  };
  
  // Cambiar tema al hacer clic en el botón
  document.addEventListener('DOMContentLoaded', () => {
    loadTheme();
  
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
        // Aplicar el nuevo tema
        document.documentElement.setAttribute('data-bs-theme', newTheme);
  
        // Guardar el tema en localStorage
        localStorage.setItem('theme', newTheme);
  
        // Cambiar el texto del botón
        themeToggleBtn.textContent = newTheme === 'light' ? 'Modo oscuro' : 'Modo claro';
      });
    }
  });
  