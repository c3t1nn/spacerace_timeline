# 🚀 Space Race Timeline

<div align="center">
  <img src="https://img.shields.io/badge/Version-2.0.0-blue.svg" alt="Version">
  <img src="https://img.shields.io/badge/License-MIT-green.svg" alt="License">
  <img src="https://img.shields.io/badge/Language-Russian%20%7C%20Turkish%20%7C%20English-orange.svg" alt="Languages">
  <img src="https://img.shields.io/badge/Events-19%20Historical%20Events-purple.svg" alt="Events">
</div>

<div align="center">
  <h3>
    <a href="#-русский">🇷🇺 Русский</a> | 
    <a href="#-türkçe">🇹🇷 Türkçe</a> | 
    <a href="#-english">🇺🇸 English</a>
  </h3>
</div>

---

## 🇷🇺 Русский

### О проекте
**Space Race Timeline** — интерактивное приложение временной шкалы, которое визуализирует все важные события космической гонки с 1955 по 1975 год с современными анимациями и дизайном macOS 2025.

### ✨ Особенности
- **19 Исторических Событий** — от программы Спутник до миссии Аполлон-Союз
- **Интерактивная Временная Шкала** — горизонтальная компоновка с автоскроллом
- **Автоматическое Воспроизведение** — автоматическое продвижение каждые 3 секунды
- **Ручная Навигация** — управление стрелками и кнопками
- **Многоязычная Поддержка** — полная поддержка турецкого и английского языков
- **Современный Дизайн** — нативные принципы дизайна macOS 2025
- **Эффекты Глассморфизма** — современный стеклянный вид
- **3D Анимации** — эффекты подъема и наведения карточек
- **Адаптивный Дизайн** — оптимизирован для всех размеров устройств

### 🎯 Исторические События
1. **🛰️ Программа Спутник** (1955) — планы первого искусственного спутника
2. **🛰️ Спутник-1** (1957) — первый в мире искусственный спутник
3. **🐕 Спутник-2 и Лайка** (1957) — первое живое существо в космосе
4. **🇺🇸 Эксплорер-1** (1958) — первый успешный спутник США
5. **🏛️ Основание НАСА** (1958) — Национальное управление по аэронавтике и космосу
6. **🌙 Луна-2** (1959) — первое столкновение с Луной
7. **📸 Луна-3** (1959) — обратная сторона Луны
8. **🐕 Корабль-Спутник-2** (1960) — первое безопасное возвращение
9. **👨‍🚀 Первый Пилотируемый Космический Полёт** (1961) — Юрий Гагарин
10. **🚀 Меркурий-Редстоун-3** (1961) — Алан Шепард
11. **🌍 Дружба-7** (1962) — Джон Гленн
12. **👩‍🚀 Восток-6** (1963) — Валентина Терешкова
13. **🚶‍♂️ Восход-2** (1965) — первый выход в открытый космос
14. **🚶‍♂️ Джемини-4** (1965) — Эд Уайт
15. **🌙 Луна-9** (1966) — первая мягкая посадка на Луну
16. **🌙 Аполлон-8** (1968) — первый пилотируемый облет Луны
17. **👨‍🚀 Аполлон-11** (1969) — первая посадка на Луну
18. **🏠 Салют-1** (1971) — первая космическая станция
19. **🤝 Аполлон-Союз** (1975) — первая совместная миссия

### 🚀 Технологии
- **HTML5** — семантическая разметка
- **CSS3** — современные стили и анимации (764 строки)
- **Vanilla JavaScript** — функции ES6+ (471 строка)
- **Google Fonts** — шрифты Orbitron и Inter
- **Local Storage** — сохранение языковых предпочтений
- **Web APIs** — RequestAnimationFrame, Touch Events

### 🎨 Система Дизайна
- **Цветовая Палитра** — космический синий (#4a9eff), Циан (#00d4ff), Золотой (#ffd700)
- **Типографика** — Orbitron (заголовки), Inter (текст)
- **Анимации** — Cubic-bezier easing, 3D трансформации
- **Глассморфизм** — эффекты backdrop filter
- **Адаптивность** — 4 различных брейкпоинта

### 📱 Установка и Запуск
```bash
# Клонирование репозитория
git clone https://github.com/c3t1nn/spacerace_timeline.git

# Переход в директорию
cd spacerace_timeline

# ПРОСТОЙ СПОСОБ - Прямое открытие (рекомендуется)
open index.html

# ИЛИ запуск локального сервера
python3 -m http.server 3000
# Откройте: http://localhost:3000
```

### 🚀 Альтернативные Способы Запуска
```bash
# 1. Прямое открытие файла (самый простой способ)
open index.html

# 2. Python сервер на разных портах
python3 -m http.server 3000    # http://localhost:3000
python3 -m http.server 8080   # http://localhost:8080
python3 -m http.server 9000   # http://localhost:9000

# 3. Node.js сервер (если установлен)
npx http-server -p 3000

# 4. PHP сервер (если установлен)
php -S localhost:3000
```

### ⚠️ Важные Замечания
- **Порт 8000 может быть занят** - используйте 3000, 8080 или 9000
- **Проект работает без сервера** - просто откройте `index.html`
- **Никаких зависимостей** - чистый HTML/CSS/JS проект
- **Поддерживает все современные браузеры**

### 🎮 Как Использовать
1. **Переключение Языка** — кнопка 🇹🇷/🇺🇸 для выбора языка
2. **Навигация** — стрелки влево/вправо или кнопки
3. **Воспроизведение** — кнопка ▶️ для автовоспроизведения
4. **Сброс** — кнопка 🔄 для возврата к началу
5. **Выбор Карточки** — клик по карточкам временной шкалы для деталей

### ⌨️ Горячие Клавиши
- **Стрелки Влево/Вправо** — навигация между событиями
- **Пробел** — Воспроизведение/Пауза
- **Escape** — закрытие модального окна
- **Enter/Пробел** — выбор карточки

### 📊 Статистика
- **Общий Код** — 1,328 строк
- **HTML** — 93 строки
- **CSS** — 764 строки
- **JavaScript** — 471 строка
- **Количество Событий** — 19 исторических событий
- **Адаптивные Брейкпоинты** — 4 различных размера
- **Анимации** — 15+ различных анимаций

### 🌐 Поддерживаемые Языки
- 🇹🇷 **Турецкий** (по умолчанию)
- 🇺🇸 **Английский**

### 📄 Лицензия
Этот проект лицензирован под лицензией MIT — см. файл [LICENSE](LICENSE) для деталей.

### 👨‍💻 Автор
**c3t1nn** — [GitHub](https://github.com/c3t1nn)

---

<details>
<summary>🇹🇷 Türkçe</summary>

## 🇹🇷 Türkçe

### Proje Hakkında
**Space Race Timeline** — 1955-1975 yılları arasındaki uzay yarışının tüm önemli olaylarını modern animasyonlar ve macOS 2025 tasarım diliyle görselleştiren interaktif zaman çizelgesi uygulaması.

### ✨ Özellikler
- **19 Tarihi Olay** — Sputnik programından Apollo-Soyuz misyonuna kadar
- **İnteraktif Zaman Çizelgesi** — Yatay düzen, otomatik kaydırma
- **Otomatik Oynatma** — 3 saniye aralıklarla otomatik ilerleme
- **Manuel Navigasyon** — Ok tuşları ve butonlarla kontrol
- **Çok Dilli Destek** — Türkçe ve İngilizce tam destek
- **Modern Tasarım** — macOS 2025 yerel tasarım prensipleri
- **Glassmorphism Efektleri** — Modern cam görünümü
- **3D Animasyonlar** — Kartların yükselme ve hover efektleri
- **Responsive Tasarım** — Tüm cihaz boyutları için optimize

### 🎯 Tarihi Olaylar
1. **🛰️ Sputnik Programı** (1955) — İlk yapay uydu planları
2. **🛰️ Sputnik 1** (1957) — Dünyanın ilk yapay uydusu
3. **🐕 Sputnik 2 ve Laika** (1957) — İlk canlı organizma uzayda
4. **🇺🇸 Explorer 1** (1958) — ABD'nin ilk başarılı uydusu
5. **🏛️ NASA Kuruldu** (1958) — Ulusal Havacılık ve Uzay Dairesi
6. **🌙 Luna 2** (1959) — Ay'a ilk çarpma
7. **📸 Luna 3** (1959) — Ay'ın görünmeyen yüzü
8. **🐕 Korabl-Sputnik 2** (1960) — İlk güvenli dönüş
9. **👨‍🚀 İlk İnsanlı Uzay Uçuşu** (1961) — Yuri Gagarin
10. **🚀 Mercury-Redstone 3** (1961) — Alan Shepard
11. **🌍 Friendship 7** (1962) — John Glenn
12. **👩‍🚀 Vostok 6** (1963) — Valentina Tereshkova
13. **🚶‍♂️ Voskhod 2** (1965) — İlk uzay yürüyüşü
14. **🚶‍♂️ Gemini 4** (1965) — Ed White
15. **🌙 Luna 9** (1966) — Ay'a ilk yumuşak iniş
16. **🌙 Apollo 8** (1968) — Ay'ın etrafında tur
17. **👨‍🚀 Apollo 11** (1969) — Ay'a ilk iniş
18. **🏠 Salyut 1** (1971) — İlk uzay istasyonu
19. **🤝 Apollo-Soyuz** (1975) — İlk ortak misyon

### 🚀 Teknolojiler
- **HTML5** — Semantik markup
- **CSS3** — Modern stiller ve animasyonlar (764 satır)
- **Vanilla JavaScript** — ES6+ özellikleri (471 satır)
- **Google Fonts** — Orbitron ve Inter fontları
- **Local Storage** — Dil tercihi kaydetme
- **Web APIs** — RequestAnimationFrame, Touch Events

### 🎨 Tasarım Sistemi
- **Renk Paleti** — Uzay mavisi (#4a9eff), Cyan (#00d4ff), Altın (#ffd700)
- **Tipografi** — Orbitron (başlıklar), Inter (metin)
- **Animasyonlar** — Cubic-bezier easing, 3D transforms
- **Glassmorphism** — Backdrop filter efektleri
- **Responsive** — 4 farklı breakpoint

### 📱 Kurulum ve Çalıştırma
   ```bash
# Depoyu klonlama
git clone https://github.com/c3t1nn/spacerace_timeline.git

# Dizine geçme
cd spacerace_timeline

# KOLAY YÖNTEM - Doğrudan açma (önerilen)
open index.html

# VEYA yerel sunucu başlatma
python3 -m http.server 3000
# Açın: http://localhost:3000
```

### 🚀 Alternatif Çalıştırma Yöntemleri
   ```bash
# 1. Doğrudan dosya açma (en kolay yöntem)
open index.html

# 2. Python sunucusu farklı portlarda
python3 -m http.server 3000    # http://localhost:3000
python3 -m http.server 8080   # http://localhost:8080
python3 -m http.server 9000   # http://localhost:9000

# 3. Node.js sunucusu (kuruluysa)
npx http-server -p 3000

# 4. PHP sunucusu (kuruluysa)
php -S localhost:3000
```

### ⚠️ Önemli Notlar
- **Port 8000 kullanımda olabilir** - 3000, 8080 veya 9000 kullanın
- **Proje sunucu olmadan çalışır** - sadece `index.html` açın
- **Hiçbir bağımlılık yok** - temiz HTML/CSS/JS projesi
- **Tüm modern tarayıcıları destekler**

### 🎮 Nasıl Kullanılır
1. **Dil Değiştirme** — 🇹🇷/🇺🇸 butonuyla dil seçimi
2. **Navigasyon** — Sol/sağ ok tuşları veya butonlar
3. **Oynatma** — ▶️ butonuyla otomatik oynatma
4. **Sıfırlama** — 🔄 butonuyla başa dönme
5. **Kart Seçimi** — Timeline kartlarına tıklayarak detay

### ⌨️ Klavye Kısayolları
- **Sol/Sağ Ok** — Olaylar arası gezinme
- **Space Bar** — Oynat/Duraklat
- **Escape** — Modal kapatma
- **Enter/Space** — Kart seçimi

### 📊 İstatistikler
- **Toplam Kod** — 1,328 satır
- **HTML** — 93 satır
- **CSS** — 764 satır
- **JavaScript** — 471 satır
- **Olay Sayısı** — 19 tarihi olay
- **Responsive Breakpoint** — 4 farklı boyut
- **Animasyon** — 15+ farklı animasyon

### 🌐 Desteklenen Diller
- 🇹🇷 **Türkçe** (varsayılan)
- 🇺🇸 **İngilizce**

### 📄 Lisans
Bu proje MIT lisansı altında lisanslanmıştır — detaylar için [LICENSE](LICENSE) dosyasına bakın.

### 👨‍💻 Yazar
**c3t1nn** — [GitHub](https://github.com/c3t1nn)

---

<details>
<summary>🇺🇸 English</summary>

## 🇺🇸 English

### About the Project
**Space Race Timeline** — An interactive timeline application that visualizes all important events of the space race from 1955-1975 with modern animations and macOS 2025 design language.

### ✨ Features
- **19 Historical Events** — From Sputnik program to Apollo-Soyuz mission
- **Interactive Timeline** — Horizontal layout with auto-scroll
- **Auto Playback** — Automatic progression every 3 seconds
- **Manual Navigation** — Arrow keys and button controls
- **Multilingual Support** — Complete Turkish and English support
- **Modern Design** — Native macOS 2025 design principles
- **Glassmorphism Effects** — Modern glass appearance
- **3D Animations** — Card rise and hover effects
- **Responsive Design** — Optimized for all device sizes

### 🎯 Historical Events
1. **🛰️ Sputnik Program** (1955) — First artificial satellite plans
2. **🛰️ Sputnik 1** (1957) — World's first artificial satellite
3. **🐕 Sputnik 2 and Laika** (1957) — First living organism in space
4. **🇺🇸 Explorer 1** (1958) — USA's first successful satellite
5. **🏛️ NASA Founded** (1958) — National Aeronautics and Space Administration
6. **🌙 Luna 2** (1959) — First Moon impact
7. **📸 Luna 3** (1959) — Far side of the Moon
8. **🐕 Korabl-Sputnik 2** (1960) — First safe return
9. **👨‍🚀 First Human Spaceflight** (1961) — Yuri Gagarin
10. **🚀 Mercury-Redstone 3** (1961) — Alan Shepard
11. **🌍 Friendship 7** (1962) — John Glenn
12. **👩‍🚀 Vostok 6** (1963) — Valentina Tereshkova
13. **🚶‍♂️ Voskhod 2** (1965) — First spacewalk
14. **🚶‍♂️ Gemini 4** (1965) — Ed White
15. **🌙 Luna 9** (1966) — First soft Moon landing
16. **🌙 Apollo 8** (1968) — First manned Moon orbit
17. **👨‍🚀 Apollo 11** (1969) — First Moon landing
18. **🏠 Salyut 1** (1971) — First space station
19. **🤝 Apollo-Soyuz** (1975) — First joint mission

### 🚀 Technologies
- **HTML5** — Semantic markup
- **CSS3** — Modern styles and animations (764 lines)
- **Vanilla JavaScript** — ES6+ features (471 lines)
- **Google Fonts** — Orbitron and Inter fonts
- **Local Storage** — Language preference saving
- **Web APIs** — RequestAnimationFrame, Touch Events

### 🎨 Design System
- **Color Palette** — Space blue (#4a9eff), Cyan (#00d4ff), Gold (#ffd700)
- **Typography** — Orbitron (headings), Inter (text)
- **Animations** — Cubic-bezier easing, 3D transforms
- **Glassmorphism** — Backdrop filter effects
- **Responsive** — 4 different breakpoints

### 📱 Installation and Running
```bash
# Clone the repository
git clone https://github.com/c3t1nn/spacerace_timeline.git

# Navigate to directory
cd spacerace_timeline

# EASY METHOD - Direct opening (recommended)
open index.html

# OR start local server
python3 -m http.server 3000
# Open: http://localhost:3000
```

### 🚀 Alternative Running Methods
```bash
# 1. Direct file opening (easiest method)
open index.html

# 2. Python server on different ports
python3 -m http.server 3000    # http://localhost:3000
python3 -m http.server 8080   # http://localhost:8080
python3 -m http.server 9000   # http://localhost:9000

# 3. Node.js server (if installed)
npx http-server -p 3000

# 4. PHP server (if installed)
php -S localhost:3000
```

### ⚠️ Important Notes
- **Port 8000 might be occupied** - use 3000, 8080 or 9000
- **Project works without server** - just open `index.html`
- **No dependencies** - pure HTML/CSS/JS project
- **Supports all modern browsers**

### 🎮 How to Use
1. **Language Switch** — 🇹🇷/🇺🇸 button for language selection
2. **Navigation** — Left/right arrow keys or buttons
3. **Playback** — ▶️ button for auto-play
4. **Reset** — 🔄 button to return to beginning
5. **Card Selection** — Click timeline cards for details

### ⌨️ Keyboard Shortcuts
- **Left/Right Arrow** — Navigate between events
- **Space Bar** — Play/Pause
- **Escape** — Close modal
- **Enter/Space** — Select card

### 📊 Statistics
- **Total Code** — 1,328 lines
- **HTML** — 93 lines
- **CSS** — 764 lines
- **JavaScript** — 471 lines
- **Event Count** — 19 historical events
- **Responsive Breakpoints** — 4 different sizes
- **Animations** — 15+ different animations

### 🌐 Supported Languages
- 🇹🇷 **Turkish** (default)
- 🇺🇸 **English**

### 📄 License
This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

### 👨‍💻 Author
**c3t1nn** — [GitHub](https://github.com/c3t1nn)

</details>

---

<div align="center">
  <h3>🌟 Star this repository if you like it!</h3>
  <p>Made with ❤️ by c3t1nn</p>
</div>