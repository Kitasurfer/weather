import { Sun3D } from './sun3D.js';
import { Moon3D } from './moon3D.js';

class WeatherApp {
    constructor() {
        this.map = null;
        this.marker = null;
        this.weatherCache = new Map();
        this.forecastCache = new Map();
        this.setupDOMElements();
        this.setupEventListeners();
        this.initMap();
        this.initTheme();

        // Initialize 3D Sun and Moon
        this.sun3D = new Sun3D('sun3DContainer');
        this.moon3D = new Moon3D('moon3D');
    }

    setupDOMElements() {
        this.cityInput = document.getElementById('cityInput');
        this.searchBtn = document.getElementById('searchBtn');
        this.cityName = document.getElementById('cityName');
        this.currentDate = document.getElementById('currentDate');
        this.temp = document.getElementById('temp');
        this.weatherIcon = document.getElementById('weatherIcon');
        this.weatherDescription = document.getElementById('weatherDescription');
        this.windSpeed = document.getElementById('windSpeed');
        this.humidity = document.getElementById('humidity');
        this.pressure = document.getElementById('pressure');
        this.sunrise = document.getElementById('sunrise');
        this.sunset = document.getElementById('sunset');
        this.forecastContainer = document.getElementById('forecastContainer');
        this.loader = document.getElementById('loader');
        this.message = document.getElementById('message');
        this.themeToggle = document.getElementById('themeToggle');
        
        // Диагностика
        console.log('Theme toggle button:', this.themeToggle);
        if (!this.themeToggle) {
            console.error('Theme toggle button not found!');
        }
    }

    setupEventListeners() {
        this.searchBtn.addEventListener('click', () => this.searchWeather());
        this.cityInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.searchWeather();
            }
        });
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', () => this.toggleTheme());
            console.log('Theme toggle event listener added');
        } else {
            console.error('Cannot add event listener to theme toggle button');
        }
    }

    updateSunPosition(sunrise, sunset) {
        const now = new Date();
        const sunriseTime = new Date(sunrise * 1000);
        const sunsetTime = new Date(sunset * 1000);

        const dayStart = sunriseTime.getTime();
        const dayEnd = sunsetTime.getTime();
        const current = now.getTime();
        const totalDayDuration = dayEnd - dayStart;
        let progress = (current - dayStart) / totalDayDuration;
        progress = Math.max(0, Math.min(1, progress));

        this.sun3D.updatePosition(progress);

        if (this.sunrise && this.sunset) {
            this.sunrise.textContent = sunriseTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
            this.sunset.textContent = sunsetTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        }
    }

    async searchWeather() {
        const city = this.cityInput.value.trim();
        if (city) {
            await this.getWeatherByCity(city);
        }
    }

    async getWeatherByCity(city) {
        // Fetch weather data and update UI
    }

    toggleTheme() {
        const body = document.body;
        
        // Детальная отладка
        console.log('Current classes before toggle:', body.className);
        
        // Принудительное переключение
        if (body.classList.contains('dark-theme')) {
            body.classList.remove('dark-theme');
            console.log('Removing dark-theme');
        } else {
            body.classList.add('dark-theme');
            console.log('Adding dark-theme');
        }
        
        console.log('Current classes after toggle:', body.className);
        
        // Сохранение состояния
        const isDarkTheme = body.classList.contains('dark-theme');
        localStorage.setItem('darkTheme', isDarkTheme);
        
        // Принудительное обновление стилей
        this.updateThemeStyles(isDarkTheme);
    }

    updateThemeStyles(isDarkTheme) {
        const root = document.documentElement;
        
        if (isDarkTheme) {
            // Установка темных цветов
            root.style.setProperty('--background-color', '#2c3e50');
            root.style.setProperty('--text-color', '#ecf0f1');
            root.style.setProperty('--panel-background', 'rgba(44, 62, 80, 0.9)');
            document.body.style.background = 'var(--gradient-night)';
            console.log('Applied dark theme styles');
        } else {
            // Возврат светлых цветов
            root.style.setProperty('--background-color', '#ffffff');
            root.style.setProperty('--text-color', '#2c3e50');
            root.style.setProperty('--panel-background', 'rgba(255, 255, 255, 0.9)');
            document.body.style.background = 'var(--gradient-day)';
            console.log('Applied light theme styles');
        }
    }

    initTheme() {
        const savedTheme = localStorage.getItem('darkTheme');
        console.log('Saved theme on init:', savedTheme);
        
        const body = document.body;
        const isDarkTheme = savedTheme === 'true';
        
        if (isDarkTheme) {
            body.classList.add('dark-theme');
        } else {
            body.classList.remove('dark-theme');
        }
        
        this.updateThemeStyles(isDarkTheme);
    }
}

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    const app = new WeatherApp();
    app.getWeatherByCity(CONFIG.DEFAULT_CITY);
});
