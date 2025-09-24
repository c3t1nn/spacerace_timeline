# 🚀 Space Race Timeline

Interactive space race timeline project. Visualizes all important events of the space race from 1955-1975 with modern animations and native Mac feel.

## ✨ Özellikler

### 🎯 Temel Özellikler
- **19 Tarihi Olay**: Sputnik programından Apollo-Soyuz misyonuna kadar
- **İnteraktif Zaman Çizelgesi**: Yatay düzen, otomatik kaydırma
- **Otomatik Oynatma**: 3 saniye aralıklarla otomatik ilerleme
- **Manuel Navigasyon**: Ok tuşları ve butonlarla kontrol
- **Modal Detaylar**: Her olay için detaylı bilgi popup'ı

### 🎨 Görsel Tasarım
- **Glassmorphism Efektleri**: Modern cam görünümü
- **Gradient Animasyonlar**: Uzay temalı renk geçişleri
- **3D Transform Efektleri**: Kartların yükselme animasyonları
- **Hover Efektleri**: Etkileşimli görsel geri bildirimler
- **Responsive Tasarım**: Tüm cihaz boyutları için optimize

### 🎮 Etkileşim Özellikleri
- **Ses Dalgası Animasyonu**: Kartların sıralı yükselme efekti
- **Mevcut Olay Vurgulama**: Aktif olayın mavi parıltı efekti
- **Hero Bölümü Güncellemeleri**: Gerçek zamanlı içerik senkronizasyonu
- **Klavye Navigasyonu**: Tam klavye desteği
- **Touch Optimizasyonu**: Mobil cihazlar için dokunma desteği

## 🛠️ Teknik Detaylar

### Dosya Yapısı
```
spacerace_timeline/
├── index.html          # Ana HTML dosyası
├── styles.css          # CSS stilleri (764 satır)
├── script.js           # JavaScript işlevselliği (471 satır)
└── README.md           # Proje dokümantasyonu
```

### Teknoloji Stack
- **HTML5**: Semantik markup
- **CSS3**: Modern CSS özellikleri (Grid, Flexbox, Animations)
- **Vanilla JavaScript**: ES6+ özellikleri
- **Google Fonts**: Orbitron ve Inter fontları

### CSS Özellikleri
- **CSS Grid**: Ana layout sistemi
- **Flexbox**: Esnek bileşen düzeni
- **CSS Animations**: Hardware-accelerated animasyonlar
- **CSS Custom Properties**: Dinamik değişkenler
- **Backdrop Filter**: Glassmorphism efektleri

### JavaScript Özellikleri
- **ES6+ Syntax**: Modern JavaScript
- **Event Delegation**: Verimli olay yönetimi
- **RequestAnimationFrame**: Smooth animasyonlar
- **Debouncing**: Performans optimizasyonu
- **Accessibility**: ARIA desteği

## 🎨 Tasarım Sistemi

### Renk Paleti
- **Primary Blue**: #4a9eff (Uzay mavisi)
- **Secondary Blue**: #00d4ff (Cyan vurgu)
- **Gold**: #ffd700 (Özel olaylar)
- **Background**: Dark gradient (#0a0a0a to #16213e)

### Tipografi
- **Orbitron**: Futuristik font (başlıklar ve UI)
- **Inter**: Temiz, okunabilir font (metin içeriği)
- **Font Weights**: 300, 400, 500, 600, 700, 900

### Animasyonlar
- **Cubic-bezier Easing**: Organik animasyon eğrileri
- **Staggered Timing**: Sıralı animasyon gecikmeleri
- **3D Transforms**: Derinlik hissi veren efektler
- **Pulse Effects**: Vurgu animasyonları

## 📱 Responsive Tasarım

### Desktop (1200px+)
- Grid layout ile yan yana hero bölümü
- Tam yatay zaman çizelgesi görünümü
- Büyük kartlar (280px genişlik)

### Tablet (768px-1199px)
- Ayarlanmış grid oranları
- Orta boyut kartlar
- Touch optimizasyonu

### Mobile (480px-767px)
- Tek sütun hero layout
- Kompakt kartlar (200px genişlik)
- Touch navigasyon

### Small Mobile (<480px)
- Minimal layout
- Küçük kartlar (150px genişlik)
- Temel kontroller

## 🎮 Kullanım

### Temel Navigasyon
- **Sol/Sağ Ok Tuşları**: Olaylar arası gezinme
- **Space Bar**: Oynat/Duraklat
- **Escape**: Modal kapatma
- **Enter/Space**: Kart seçimi

### Oynatma Kontrolleri
- **▶️ Butonu**: Otomatik oynatma başlatma
- **⏸️ Butonu**: Oynatmayı duraklatma
- **🔄 Butonu**: Zaman çizelgesini sıfırlama

### Modal Sistemi
- **Kart Tıklama**: Detaylı bilgi popup'ı
- **Dış Tıklama**: Modal kapatma
- **Escape Tuşu**: Modal kapatma

## 🚀 Kurulum

1. **Projeyi İndirin**
   ```bash
   git clone [repository-url]
   cd uzay-yarisi-v2
   ```

2. **Dosyaları Açın**
   - `index.html` dosyasını web tarayıcısında açın
   - Veya yerel sunucu kullanın:
   ```bash
   python -m http.server 8000
   # http://localhost:8000 adresine gidin
   ```

3. **Gereksinimler**
   - Modern web tarayıcısı (Chrome, Firefox, Safari, Edge)
   - İnternet bağlantısı (Google Fonts için)

## 🎯 Performans

### Optimizasyonlar
- **Hardware Acceleration**: CSS transform animasyonları
- **Efficient Selectors**: Optimize CSS seçicileri
- **Event Delegation**: Verimli olay yönetimi
- **Debounced Resize**: Performanslı yeniden boyutlandırma

### Browser Desteği
- **Modern Browsers**: Chrome 60+, Firefox 55+, Safari 12+, Edge 79+
- **CSS Grid**: Tam grid layout desteği
- **Flexbox**: Kapsamlı flexbox kullanımı
- **CSS Custom Properties**: Modern CSS özellikleri

## ♿ Erişilebilirlik

### Özellikler
- **Semantic HTML**: Uygun başlık yapısı ve landmark'lar
- **Keyboard Navigation**: Tam klavye erişilebilirliği
- **Focus Management**: Uygun focus yönetimi
- **Screen Reader Support**: Açıklayıcı metin içeriği
- **Color Contrast**: WCAG uyumlu renk kombinasyonları

### ARIA Desteği
- **Role Attributes**: Uygun rol tanımlamaları
- **Aria Labels**: Açıklayıcı etiketler
- **Tabindex**: Klavye navigasyonu
- **Live Regions**: Dinamik içerik güncellemeleri

## 🔧 Geliştirme

### Proje Yapısı
- **Modular JavaScript**: Ayrı fonksiyonlar
- **CSS Architecture**: Bileşen bazlı organizasyon
- **HTML Semantics**: Temiz, erişilebilir markup

### Özelleştirme
- **CSS Variables**: Kolay renk değişiklikleri
- **Event Data**: Yeni olaylar ekleme
- **Animation Timing**: Animasyon sürelerini ayarlama

## 📊 İstatistikler

- **Toplam Kod**: 1,328 satır
- **HTML**: 93 satır
- **CSS**: 764 satır
- **JavaScript**: 471 satır
- **Olay Sayısı**: 19 tarihi olay
- **Responsive Breakpoint**: 4 farklı boyut
- **Animasyon**: 15+ farklı animasyon

## 🎨 Tasarım İlhamı

- **Native Mac Feel**: macOS tasarım dilinden ilham
- **Space Theme**: Uzay ve bilim kurgu estetiği
- **Glassmorphism**: Modern cam efektleri
- **Smooth Animations**: Apple tarzı akıcı animasyonlar

## 🚀 Gelecek Özellikler

- **Ses Efektleri**: Uzay temalı ses efektleri
- **3D Animasyonlar**: WebGL tabanlı 3D efektler
- **Çoklu Dil**: İngilizce ve Türkçe dil desteği
- **Dark/Light Mode**: Tema değiştirme
- **PWA Desteği**: Progressive Web App özellikleri

## 📝 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için LICENSE dosyasına bakın.

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📞 İletişim

- **Proje**: Uzay Yarışı v2
- **Geliştirici**: AI Assistant
- **Tarih**: 2025
- **Versiyon**: 2.0.0

---

**🚀 Space Race Timeline - Modern, interactive space history experience!**
