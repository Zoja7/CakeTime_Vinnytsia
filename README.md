# CakeTime_Vinnytsia - Лендінг для кондитерської

Адаптивний односторінковий лендінг для кондитерської з авторськими тортами. Створено з використанням сучасних веб-технологій та дотриманням принципів мінімалістичного дизайну.

## Особливості

- Адаптивний дизайн (mobile-first)
- Анімації та інтерактивні елементи
- Валідація форми замовлення
- Модальні вікна для деталей продуктів
- Оптимізовані зображення
- Семантична HTML-структура

## Технології

- HTML5
- CSS3 (Grid, Flexbox, CSS Variables)
- JavaScript (ES6+)
- Google Fonts (Playfair Display, Inter)

## Встановлення

1. Клонуйте репозиторій:
```bash
git clone https://github.com/yourusername/caketime-vinnytsia.git
```

2. Перейдіть до директорії проекту:
```bash
cd caketime-vinnytsia
```

3. Створіть директорію для зображень:
```bash
mkdir images
```

4. Додайте необхідні зображення в директорію `images`:
- hero-cake.jpg (фото для hero-секції)
- classic-cake.jpg
- fruit-cake.jpg
- caramel-cake.jpg

## Структура проекту

```
caketime-vinnytsia/
├── index.html
├── styles.css
├── script.js
├── README.md
└── images/
    ├── hero-cake.jpg
    ├── classic-cake.jpg
    ├── fruit-cake.jpg
    └── caramel-cake.jpg
```

## Налаштування

### Зображення
- Рекомендований розмір для hero-зображення: 1920x1080px
- Рекомендований розмір для зображень тортів: 800x600px
- Формат: JPG або WebP
- Оптимізуйте зображення для веб

### Кольори
Кольори можна налаштувати в CSS-змінних (файл `styles.css`):
```css
:root {
    --neutral-100: #FFF9F5;
    --neutral-200: #F5F5F5;
    /* ... інші кольори ... */
}
```

## Розробка

Для локального розробки використовуйте будь-який веб-сервер. Наприклад, Python:
```bash
python -m http.server 8000
```

## Ліцензія

MIT License. Дивіться файл `LICENSE` для деталей. 