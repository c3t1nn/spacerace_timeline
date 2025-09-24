// ===== SPACE RACE TIMELINE DATA =====
const spaceRaceEvents = [
    {
        year: 1955,
        title: "Sputnik Program Başlangıcı",
        description: "Sovyetler Birliği, dünyanın ilk yapay uydusunu fırlatma planlarını açıkladı.",
        icon: "🛰️",
        flag: "🇷🇺",
        details: "Sovyetler Birliği, uzay yarışının başlangıcını işaret eden Sputnik programını başlattı.",
        stats: {
            "Ülke": "Sovyetler Birliği",
            "Program": "Sputnik",
            "Durum": "Planlama Aşaması"
        },
        special: false
    },
    {
        year: 1957,
        title: "Sputnik 1 Fırlatıldı",
        description: "Dünyanın ilk yapay uydusu Sputnik 1, 4 Ekim'de başarıyla fırlatıldı.",
        icon: "🛰️",
        flag: "🇷🇺",
        details: "Sputnik 1, 83.6 kg ağırlığında, 98 dakikada bir Dünya'nın etrafında dönen ilk yapay uydu oldu.",
        stats: {
            "Ağırlık": "83.6 kg",
            "Yörünge Süresi": "98 dakika",
            "Çap": "58 cm"
        },
        special: false
    },
    {
        year: 1957,
        title: "Sputnik 2 ve Laika",
        description: "İlk canlı organizma (köpek Laika) uzaya gönderildi.",
        icon: "🐕",
        flag: "🇷🇺",
        details: "Laika, uzayda yaşayan ilk canlı organizma oldu. Bu, insanlı uzay uçuşları için önemli bir adımdı.",
        stats: {
            "Canlı": "Laika (Köpek)",
            "Süre": "7 gün",
            "Sonuç": "Başarılı"
        },
        special: false
    },
    {
        year: 1958,
        title: "Explorer 1 Fırlatıldı",
        description: "ABD'nin ilk başarılı uydusu Explorer 1 fırlatıldı.",
        icon: "🇺🇸",
        flag: "🇺🇸",
        details: "ABD, uzay yarışında geri kalmamak için Explorer 1'i başarıyla fırlattı.",
        stats: {
            "Ülke": "ABD",
            "Ağırlık": "13.97 kg",
            "Yörünge": "Düşük Dünya Yörüngesi"
        },
        special: false
    },
    {
        year: 1958,
        title: "NASA Kuruldu",
        description: "Ulusal Havacılık ve Uzay Dairesi (NASA) kuruldu.",
        icon: "🏛️",
        flag: "🇺🇸",
        details: "NASA, ABD'nin uzay programını koordine etmek için kuruldu.",
        stats: {
            "Kuruluş": "29 Temmuz 1958",
            "Merkez": "Washington DC",
            "Amaç": "Uzay Araştırmaları"
        },
        special: false
    },
    {
        year: 1959,
        title: "Luna 2 - Ay'a İlk Çarpma",
        description: "Sovyet Luna 2 uzay aracı Ay'a çarpan ilk insan yapımı nesne oldu.",
        icon: "🌙",
        flag: "🇷🇺",
        details: "Luna 2, Ay'ın yüzeyine çarpan ilk insan yapımı nesne oldu.",
        stats: {
            "Hedef": "Ay",
            "Sonuç": "Başarılı Çarpma",
            "Tarih": "13 Eylül 1959"
        },
        special: false
    },
    {
        year: 1959,
        title: "Luna 3 - Ay'ın Görünmeyen Yüzü",
        description: "Luna 3, Ay'ın görünmeyen yüzünün ilk fotoğraflarını çekti.",
        icon: "📸",
        flag: "🇷🇺",
        details: "İlk kez Ay'ın görünmeyen yüzü fotoğraflandı.",
        stats: {
            "Fotoğraf": "29 adet",
            "Kalite": "Düşük çözünürlük",
            "Tarih": "7 Ekim 1959"
        },
        special: false
    },
    {
        year: 1960,
        title: "Korabl-Sputnik 2",
        description: "İlk canlılar (köpekler) uzaydan güvenle döndü.",
        icon: "🐕",
        flag: "🇷🇺",
        details: "Belka ve Strelka adlı köpekler uzaydan güvenle dönen ilk canlılar oldu.",
        stats: {
            "Canlılar": "Belka ve Strelka",
            "Süre": "1 gün",
            "Sonuç": "Başarılı Dönüş"
        },
        special: false
    },
    {
        year: 1961,
        title: "İlk İnsanlı Uzay Uçuşu",
        description: "Yuri Gagarin, Vostok 1 ile uzaya çıkan ilk insan oldu.",
        icon: "👨‍🚀",
        flag: "🇷🇺",
        details: "Yuri Gagarin, Vostok 1 uzay aracıyla Dünya'nın yörüngesinde 108 dakika süren tarihi uçuşunu gerçekleştirdi.",
        stats: {
            "Astronot": "Yuri Gagarin",
            "Süre": "108 dakika",
            "Yükseklik": "327 km"
        },
        special: true
    },
    {
        year: 1961,
        title: "Mercury-Redstone 3",
        description: "Alan Shepard, ABD'nin ilk insanlı uzay uçuşunu gerçekleştirdi.",
        icon: "🚀",
        flag: "🇺🇸",
        details: "Alan Shepard, Freedom 7 kapsülüyle 15 dakikalık suborbital uçuş gerçekleştirdi.",
        stats: {
            "Astronot": "Alan Shepard",
            "Süre": "15 dakika",
            "Yükseklik": "187 km"
        },
        special: false
    },
    {
        year: 1962,
        title: "Friendship 7 - John Glenn",
        description: "John Glenn, ABD'nin ilk orbital uçuşunu gerçekleştirdi.",
        icon: "🌍",
        flag: "🇺🇸",
        details: "John Glenn, Friendship 7 ile Dünya'nın etrafında 3 tur attı.",
        stats: {
            "Astronot": "John Glenn",
            "Tur Sayısı": "3 tur",
            "Süre": "4 saat 55 dakika"
        },
        special: false
    },
    {
        year: 1963,
        title: "Vostok 6 - Valentina Tereshkova",
        description: "Valentina Tereshkova, uzaya çıkan ilk kadın oldu.",
        icon: "👩‍🚀",
        flag: "🇷🇺",
        details: "Valentina Tereshkova, Vostok 6 ile uzaya çıkan ilk kadın astronot oldu.",
        stats: {
            "Astronot": "Valentina Tereshkova",
            "Süre": "3 gün",
            "Tur Sayısı": "48 tur"
        },
        special: false
    },
    {
        year: 1965,
        title: "Voskhod 2 - İlk Uzay Yürüyüşü",
        description: "Alexei Leonov, ilk uzay yürüyüşünü gerçekleştirdi.",
        icon: "🚶‍♂️",
        flag: "🇷🇺",
        details: "Alexei Leonov, Voskhod 2'den çıkarak 12 dakika süren ilk uzay yürüyüşünü yaptı.",
        stats: {
            "Astronot": "Alexei Leonov",
            "Süre": "12 dakika",
            "Mesafe": "5.3 metre"
        },
        special: false
    },
    {
        year: 1965,
        title: "Gemini 4 - Ed White",
        description: "Ed White, ABD'nin ilk uzay yürüyüşünü gerçekleştirdi.",
        icon: "🚶‍♂️",
        flag: "🇺🇸",
        details: "Ed White, Gemini 4'ten çıkarak 20 dakika süren uzay yürüyüşü yaptı.",
        stats: {
            "Astronot": "Ed White",
            "Süre": "20 dakika",
            "Gemini": "4"
        },
        special: false
    },
    {
        year: 1966,
        title: "Luna 9 - Ay'a İlk Yumuşak İniş",
        description: "Luna 9, Ay'a yumuşak iniş yapan ilk uzay aracı oldu.",
        icon: "🌙",
        flag: "🇷🇺",
        details: "Luna 9, Ay'ın yüzeyine yumuşak iniş yapan ilk uzay aracı oldu.",
        stats: {
            "Hedef": "Ay",
            "İniş": "Yumuşak",
            "Tarih": "3 Şubat 1966"
        },
        special: false
    },
    {
        year: 1968,
        title: "Apollo 8 - Ay'ın Etrafında Tur",
        description: "Apollo 8, Ay'ın etrafında tur atan ilk insanlı uzay aracı oldu.",
        icon: "🌙",
        flag: "🇺🇸",
        details: "Frank Borman, James Lovell ve William Anders, Ay'ın etrafında 10 tur attı.",
        stats: {
            "Astronotlar": "3 kişi",
            "Tur Sayısı": "10 tur",
            "Süre": "6 gün"
        },
        special: false
    },
    {
        year: 1969,
        title: "Apollo 11 - Ay'a İlk İniş",
        description: "Neil Armstrong ve Buzz Aldrin, Ay'a ayak basan ilk insanlar oldu.",
        icon: "👨‍🚀",
        flag: "🇺🇸",
        details: "Neil Armstrong ve Buzz Aldrin, Ay'ın yüzeyine ayak basan ilk insanlar oldu.",
        stats: {
            "Astronotlar": "Neil Armstrong, Buzz Aldrin",
            "Süre": "21 saat 36 dakika",
            "Tarih": "20 Temmuz 1969"
        },
        special: true
    },
    {
        year: 1971,
        title: "Salyut 1 - İlk Uzay İstasyonu",
        description: "Salyut 1, dünyanın ilk uzay istasyonu olarak fırlatıldı.",
        icon: "🏠",
        flag: "🇷🇺",
        details: "Salyut 1, uzayda kalıcı yaşam için ilk uzay istasyonu oldu.",
        stats: {
            "İstasyon": "Salyut 1",
            "Süre": "175 gün",
            "Mürettebat": "3 kişi"
        },
        special: false
    },
    {
        year: 1975,
        title: "Apollo-Soyuz Test Projesi",
        description: "ABD ve Sovyetler Birliği'nin ilk ortak uzay görevi.",
        icon: "🤝",
        flag: "🌍",
        details: "Apollo ve Soyuz uzay araçları uzayda kenetlendi, soğuk savaş döneminde işbirliği sembolü oldu.",
        stats: {
            "Ülkeler": "ABD ve Sovyetler Birliği",
            "Süre": "2 gün",
            "Kenetlenme": "Başarılı"
        },
        special: false
    }
];

// ===== GLOBAL VARIABLES =====
let currentEventIndex = 8; // Start with Yuri Gagarin (index 8)
let isPlaying = false;
let playInterval = null;
let timelineContainer = null;
let heroYear = null;
let heroTitle = null;
let heroDescription = null;
let heroFlag = null;
let progressFill = null;
let progressText = null;

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    initializeElements();
    createTimeline();
    setupEventListeners();
    updateHeroContent();
    updateProgress();
    startSoundWaveAnimation();
    initDeepSpaceAnimations();
});

// ===== DEEP SPACE ANIMATIONS =====
function initDeepSpaceAnimations() {
    // Subtle star drift animations
    const stars1 = document.querySelector('.stars-1');
    const stars2 = document.querySelector('.stars-2');
    const stars3 = document.querySelector('.stars-3');
    
    if (stars1) {
        stars1.style.animation = 'starDrift1 60s linear infinite';
    }
    if (stars2) {
        stars2.style.animation = 'starDrift2 80s linear infinite';
    }
    if (stars3) {
        stars3.style.animation = 'starDrift3 100s linear infinite';
    }
}

function initializeElements() {
    timelineContainer = document.getElementById('timelineEvents');
    heroYear = document.getElementById('heroYear');
    heroTitle = document.getElementById('heroTitle');
    heroDescription = document.getElementById('heroDescription');
    heroFlag = document.getElementById('heroFlag');
    progressFill = document.getElementById('progressFill');
    progressText = document.getElementById('progressText');
}

// ===== TIMELINE CREATION =====
function createTimeline() {
    spaceRaceEvents.forEach((event, index) => {
        const eventCard = createEventCard(event, index);
        timelineContainer.appendChild(eventCard);
    });
    
    // Set initial current event
    updateCurrentEvent();
}

function createEventCard(event, index) {
    const card = document.createElement('div');
    card.className = `event-card ${event.special ? 'special' : ''}`;
    card.dataset.index = index;
    
    // Add staggered animation delay
    card.style.animationDelay = `${index * 0.2}s`;
    
    card.innerHTML = `
        <div class="event-icon">${event.icon}</div>
        <div class="event-year">${event.year}</div>
        <div class="event-title">${event.title}</div>
        <div class="event-description">${event.description}</div>
    `;
    
    // Add event listeners
    card.addEventListener('click', () => selectEvent(index));
    card.addEventListener('mouseenter', () => updateHeroOnHover(event));
    card.addEventListener('mouseleave', () => updateHeroContent());
    
    return card;
}

// ===== EVENT SELECTION & NAVIGATION =====
function selectEvent(index) {
    currentEventIndex = index;
    updateCurrentEvent();
    updateHeroContent();
    updateProgress();
    scrollToEvent();
}

function updateCurrentEvent() {
    const cards = document.querySelectorAll('.event-card');
    cards.forEach((card, index) => {
        card.classList.toggle('current', index === currentEventIndex);
    });
}

function scrollToEvent() {
    const cards = document.querySelectorAll('.event-card');
    if (cards[currentEventIndex]) {
        cards[currentEventIndex].scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center'
        });
    }
}

// ===== HERO SECTION UPDATES =====
function updateHeroContent() {
    const event = spaceRaceEvents[currentEventIndex];
    const heroContent = document.querySelector('.event-details');
    
    // Smooth transition
    heroContent.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
    heroContent.style.opacity = '0.8';
    heroContent.style.transform = 'translateY(5px)';
    
    setTimeout(() => {
        heroYear.textContent = event.year;
        heroTitle.textContent = event.title;
        heroDescription.textContent = event.details;
        heroFlag.textContent = event.flag;
        
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 200);
    
    // Update stats
    const statsContainer = document.querySelector('.event-stats');
    if (statsContainer) {
        const stats = Object.entries(event.stats).slice(0, 2);
        statsContainer.innerHTML = stats.map(([label, value]) => `
            <div class="stat">
                <span class="stat-label">${label}</span>
                <span class="stat-value">${value}</span>
            </div>
        `).join('');
    }
}

function updateHeroOnHover(event) {
    // Smooth transition with fade effect
    const heroContent = document.querySelector('.event-details');
    heroContent.style.opacity = '0.7';
    heroContent.style.transform = 'translateY(10px)';
    
    setTimeout(() => {
        heroYear.textContent = event.year;
        heroTitle.textContent = event.title;
        heroDescription.textContent = event.details; // Aynı bilgiyi göster
        heroFlag.textContent = event.flag;
        
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 150);
}

// ===== PLAYBACK CONTROLS =====
function setupEventListeners() {
    // Play/Pause button
    document.getElementById('playPauseBtn').addEventListener('click', togglePlayback);
    
    // Reset button
    document.getElementById('resetBtn').addEventListener('click', resetTimeline);
    
    // Navigation arrows
    document.getElementById('prevBtn').addEventListener('click', () => navigateEvent(-1));
    document.getElementById('nextBtn').addEventListener('click', () => navigateEvent(1));
    
    // Keyboard navigation
    document.addEventListener('keydown', handleKeyboardNavigation);
    
    // Modal close (disabled)
    // document.querySelector('.close-btn').addEventListener('click', closeModal);
    // document.getElementById('eventModal').addEventListener('click', (e) => {
    //     if (e.target.id === 'eventModal') closeModal();
    // });
}

function togglePlayback() {
    if (isPlaying) {
        pausePlayback();
    } else {
        startPlayback();
    }
}

function startPlayback() {
    isPlaying = true;
    document.getElementById('playPauseBtn').innerHTML = '<span class="play-icon">⏸️</span>';
    
    playInterval = setInterval(() => {
        navigateEvent(1);
    }, 3000);
}

function pausePlayback() {
    isPlaying = false;
    document.getElementById('playPauseBtn').innerHTML = '<span class="play-icon">▶️</span>';
    
    if (playInterval) {
        clearInterval(playInterval);
        playInterval = null;
    }
}

function resetTimeline() {
    pausePlayback();
    currentEventIndex = 0;
    updateCurrentEvent();
    updateHeroContent();
    updateProgress();
    scrollToEvent();
}

function navigateEvent(direction) {
    const newIndex = currentEventIndex + direction;
    
    if (newIndex >= 0 && newIndex < spaceRaceEvents.length) {
        currentEventIndex = newIndex;
        updateCurrentEvent();
        updateHeroContent();
        updateProgress();
        scrollToEvent();
    } else if (newIndex >= spaceRaceEvents.length) {
        // Loop back to start
        currentEventIndex = 0;
        updateCurrentEvent();
        updateHeroContent();
        updateProgress();
        scrollToEvent();
    } else if (newIndex < 0) {
        // Loop to end
        currentEventIndex = spaceRaceEvents.length - 1;
        updateCurrentEvent();
        updateHeroContent();
        updateProgress();
        scrollToEvent();
    }
}

// ===== PROGRESS TRACKING =====
function updateProgress() {
    const progress = ((currentEventIndex + 1) / spaceRaceEvents.length) * 100;
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `${Math.round(progress)}%`;
}

// ===== KEYBOARD NAVIGATION =====
function handleKeyboardNavigation(e) {
    switch(e.key) {
        case 'ArrowLeft':
            e.preventDefault();
            navigateEvent(-1);
            break;
        case 'ArrowRight':
            e.preventDefault();
            navigateEvent(1);
            break;
        case ' ':
            e.preventDefault();
            togglePlayback();
            break;
        case 'Escape':
            e.preventDefault();
            // closeModal(); // Disabled
            break;
    }
}

// ===== MODAL SYSTEM =====
function openModal(event) {
    const modal = document.getElementById('eventModal');
    const modalYear = document.getElementById('modalYear');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalDetails = document.getElementById('modalDetails');
    
    modalYear.textContent = event.year;
    modalTitle.textContent = event.title;
    modalDescription.textContent = event.details;
    
    // Create details HTML
    modalDetails.innerHTML = Object.entries(event.stats).map(([label, value]) => `
        <div class="detail-item">
            <span class="detail-label">${label}</span>
            <span class="detail-value">${value}</span>
        </div>
    `).join('');
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('eventModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// ===== SOUND WAVE ANIMATION =====
function startSoundWaveAnimation() {
    const cards = document.querySelectorAll('.event-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px) rotateX(15deg)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) rotateX(0deg)';
        }, index * 200);
    });
}

// ===== UTILITY FUNCTIONS =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===== RESPONSIVE HANDLING =====
function handleResize() {
    // Update timeline layout on resize
    const timelineWrapper = document.querySelector('.timeline-wrapper');
    if (window.innerWidth < 768) {
        timelineWrapper.style.height = '120px';
    } else if (window.innerWidth < 1200) {
        timelineWrapper.style.height = '150px';
    } else {
        timelineWrapper.style.height = '200px';
    }
}

window.addEventListener('resize', debounce(handleResize, 250));

// ===== ACCESSIBILITY ENHANCEMENTS =====
function enhanceAccessibility() {
    // Add ARIA labels
    const cards = document.querySelectorAll('.event-card');
    cards.forEach((card, index) => {
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.setAttribute('aria-label', `Event ${index + 1}: ${spaceRaceEvents[index].title}`);
    });
    
    // Add keyboard support for cards
    cards.forEach((card, index) => {
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                selectEvent(index);
            }
        });
    });
}

// Initialize accessibility enhancements
document.addEventListener('DOMContentLoaded', enhanceAccessibility);

// ===== PERFORMANCE OPTIMIZATIONS =====
function optimizePerformance() {
    // Use requestAnimationFrame for smooth animations
    let animationId;
    
    function animate() {
        // Update any continuous animations here
        animationId = requestAnimationFrame(animate);
    }
    
    // Start animation loop
    animate();
    
    // Cleanup on page unload
    window.addEventListener('beforeunload', () => {
        if (animationId) {
            cancelAnimationFrame(animationId);
        }
    });
}

// Initialize performance optimizations
document.addEventListener('DOMContentLoaded', optimizePerformance);

// ===== ERROR HANDLING =====
window.addEventListener('error', (e) => {
    console.error('Space Race Timeline Error:', e.error);
    // Graceful degradation - ensure basic functionality still works
});

// ===== EXPORT FOR TESTING =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        spaceRaceEvents,
        selectEvent,
        togglePlayback,
        navigateEvent
    };
}
