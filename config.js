export const API_KEY = '67c15cd0b27a2183471b46f64ed213c1'; // OpenWeatherMap API Key

export const CONFIG = {
    WEATHER_API_BASE: 'https://api.openweathermap.org/data/2.5',
    UNITS: 'metric',
    LANG: 'ru',
    CACHE_DURATION: 300000, // 5 минут
    REFRESH_INTERVAL: 600000, // 10 минут
    DEFAULT_CITY: 'Stuttgart', // Город по умолчанию
    
    // Иконки погоды
    WEATHER_ICONS: {
        '01d': 'sun',
        '01n': 'moon',
        '02d': 'cloud-sun',
        '02n': 'cloud-moon',
        '03d': 'cloud',
        '03n': 'cloud',
        '04d': 'cloud',
        '04n': 'cloud',
        '09d': 'cloud-showers-heavy',
        '09n': 'cloud-showers-heavy',
        '10d': 'cloud-sun-rain',
        '10n': 'cloud-moon-rain',
        '11d': 'bolt',
        '11n': 'bolt',
        '13d': 'snowflake',
        '13n': 'snowflake',
        '50d': 'smog',
        '50n': 'smog'
    },
    
    // Сообщения о погоде
    WEATHER_MESSAGES: {
        Clear: [
            'Отличная погода для прогулки!',
            'Наслаждайтесь солнечным днем!',
            'Идеальное время для пикника!'
        ],
        Clouds: [
            'Небольшая облачность не помешает вашим планам',
            'Приятная погода для прогулки',
            'Облака создают уютную атмосферу'
        ],
        Rain: [
            'Не забудьте зонтик!',
            'Отличное время для чашки горячего чая',
            'Дождь - это музыка природы'
        ],
        Snow: [
            'Время лепить снеговика!',
            'Прекрасная погода для зимних развлечений',
            'Не забудьте теплую одежду!'
        ],
        Thunderstorm: [
            'Лучше остаться дома',
            'Будьте осторожны!',
            'Время для уютного вечера дома'
        ],
        Drizzle: [
            'Легкий дождик освежает',
            'Приятная погода для прогулки',
            'Возьмите с собой зонтик'
        ],
        Mist: [
            'Будьте внимательны на дороге',
            'Туманное утро добавляет загадочности',
            'Снизьте скорость на дороге'
        ]
    },
    
    // Фазы луны
    MOON_PHASES: [
        { name: 'Новолуние', icon: 'moon' },
        { name: 'Растущий серп', icon: 'moon' },
        { name: 'Первая четверть', icon: 'moon-first-quarter' },
        { name: 'Растущая луна', icon: 'moon-waxing-gibbous' },
        { name: 'Полнолуние', icon: 'moon-full' },
        { name: 'Убывающая луна', icon: 'moon-waning-gibbous' },
        { name: 'Последняя четверть', icon: 'moon-last-quarter' },
        { name: 'Убывающий серп', icon: 'moon-waning-crescent' }
    ]
};