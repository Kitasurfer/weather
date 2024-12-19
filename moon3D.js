export class Moon3D {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setSize(200, 200);
        this.container.appendChild(this.renderer.domElement);

        // Настройка камеры
        this.camera.position.z = 2;

        // Создание луны
        this.createMoon();

        // Добавление освещения
        this.addLighting();

        // Запуск анимации
        this.animate();
    }

    createMoon() {
        // Загрузка текстур
        const textureLoader = new THREE.TextureLoader();
        
        // Основная текстура поверхности луны
        const moonTexture = textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/moon_1024.jpg');
        
        // Текстура рельефа (нормали)
        const normalTexture = textureLoader.load('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/moon_normal.jpg');

        // Создание геометрии и материала
        const geometry = new THREE.SphereGeometry(1, 64, 64);
        const material = new THREE.MeshPhongMaterial({
            map: moonTexture,
            normalMap: normalTexture,
            normalScale: new THREE.Vector2(0.5, 0.5)
        });

        // Создание меша
        this.moon = new THREE.Mesh(geometry, material);
        this.scene.add(this.moon);
    }

    addLighting() {
        // Основной свет (солнце)
        this.sunLight = new THREE.DirectionalLight(0xffffff, 1);
        this.sunLight.position.set(5, 0, 2);
        this.scene.add(this.sunLight);

        // Рассеянный свет
        const ambientLight = new THREE.AmbientLight(0x333333);
        this.scene.add(ambientLight);
    }

    updatePhase(phase) {
        // Нормализация фазы (0-1)
        const normalizedPhase = phase % 1;
        
        // Вычисление угла освещения
        const angle = normalizedPhase * Math.PI * 2;
        
        // Обновление положения источника света
        this.sunLight.position.x = Math.cos(angle) * 5;
        this.sunLight.position.z = Math.sin(angle) * 5;
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        // Медленное вращение луны
        this.moon.rotation.y += 0.001;

        this.renderer.render(this.scene, this.camera);
    }

    // Метод для обновления размера при изменении размера контейнера
    resize() {
        const width = this.container.clientWidth;
        const height = this.container.clientHeight;
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(width, height);
    }
}
