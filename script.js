// ===== LANGUAGE SYSTEM =====
const translations = {
    tr: {
        title: "Uzay Yarışı Zaman Çizelgesi",
        playPause: "Oynat/Duraklat",
        reset: "Sıfırla",
        changeLanguage: "Dil Değiştir",
        progress: "İlerleme"
    },
    en: {
        title: "Space Race Timeline",
        playPause: "Play/Pause",
        reset: "Reset",
        changeLanguage: "Change Language",
        progress: "Progress"
    }
};

// ===== SPACE RACE TIMELINE DATA =====
const spaceRaceEvents = [
    {
        year: 1955,
        title: {
            tr: "Sputnik Program Başlangıcı",
            en: "Sputnik Program Begins"
        },
        description: {
            tr: "Sovyetler Birliği, dünyanın ilk yapay uydusunu fırlatma planlarını açıkladı.",
            en: "The Soviet Union announced plans to launch the world's first artificial satellite."
        },
        icon: "🛰️",
        flag: "🇷🇺",
        details: {
            tr: "Sovyetler Birliği, uzay yarışının başlangıcını işaret eden Sputnik programını başlattı.",
            en: "The Soviet Union launched the Sputnik program, marking the beginning of the space race."
        },
        stats: {
            tr: {
                "Ülke": "Sovyetler Birliği",
                "Program": "Sputnik",
                "Durum": "Planlama Aşaması"
            },
            en: {
                "Country": "Soviet Union",
                "Program": "Sputnik",
                "Status": "Planning Phase"
            }
        },
        special: false
    },
    {
        year: 1957,
        title: {
            tr: "Sputnik 1 Fırlatıldı",
            en: "Sputnik 1 Launched"
        },
        description: {
            tr: "Dünyanın ilk yapay uydusu Sputnik 1, 4 Ekim'de başarıyla fırlatıldı.",
            en: "The world's first artificial satellite Sputnik 1 was successfully launched on October 4th."
        },
        icon: "🛰️",
        flag: "🇷🇺",
        details: {
            tr: "Sputnik 1, 83.6 kg ağırlığında, 98 dakikada bir Dünya'nın etrafında dönen ilk yapay uydu oldu.",
            en: "Sputnik 1, weighing 83.6 kg, became the first artificial satellite to orbit Earth every 98 minutes."
        },
        stats: {
            tr: {
                "Ağırlık": "83.6 kg",
                "Yörünge Süresi": "98 dakika",
                "Çap": "58 cm"
            },
            en: {
                "Weight": "83.6 kg",
                "Orbital Period": "98 minutes",
                "Diameter": "58 cm"
            }
        },
        special: false
    },
    {
        year: 1957,
        title: {
            tr: "Sputnik 2 ve Laika",
            en: "Sputnik 2 and Laika"
        },
        description: {
            tr: "İlk canlı organizma (köpek Laika) uzaya gönderildi.",
            en: "The first living organism (dog Laika) was sent to space."
        },
        icon: "🐕",
        flag: "🇷🇺",
        details: {
            tr: "Laika, uzayda yaşayan ilk canlı organizma oldu. Bu, insanlı uzay uçuşları için önemli bir adımdı.",
            en: "Laika became the first living organism to survive in space. This was an important step for human spaceflight."
        },
        stats: {
            tr: {
                "Canlı": "Laika (Köpek)",
                "Süre": "7 gün",
                "Sonuç": "Başarılı"
            },
            en: {
                "Animal": "Laika (Dog)",
                "Duration": "7 days",
                "Result": "Successful"
            }
        },
        special: false
    },
    {
        year: 1958,
        title: {
            tr: "Explorer 1 Fırlatıldı",
            en: "Explorer 1 Launched"
        },
        description: {
            tr: "ABD'nin ilk başarılı uydusu Explorer 1 fırlatıldı.",
            en: "The United States' first successful satellite Explorer 1 was launched."
        },
        icon: "🇺🇸",
        flag: "🇺🇸",
        details: {
            tr: "ABD, uzay yarışında geri kalmamak için Explorer 1'i başarıyla fırlattı.",
            en: "The United States successfully launched Explorer 1 to not fall behind in the space race."
        },
        stats: {
            tr: {
                "Ülke": "ABD",
                "Ağırlık": "13.97 kg",
                "Yörünge": "Düşük Dünya Yörüngesi"
            },
            en: {
                "Country": "USA",
                "Weight": "13.97 kg",
                "Orbit": "Low Earth Orbit"
            }
        },
        special: false
    },
    {
        year: 1958,
        title: {
            tr: "NASA Kuruldu",
            en: "NASA Founded"
        },
        description: {
            tr: "Ulusal Havacılık ve Uzay Dairesi (NASA) kuruldu.",
            en: "The National Aeronautics and Space Administration (NASA) was established."
        },
        icon: "🏛️",
        flag: "🇺🇸",
        details: {
            tr: "NASA, ABD'nin uzay programını koordine etmek için kuruldu.",
            en: "NASA was established to coordinate the United States' space program."
        },
        stats: {
            tr: {
                "Kuruluş": "29 Temmuz 1958",
                "Merkez": "Washington DC",
                "Amaç": "Uzay Araştırmaları"
            },
            en: {
                "Founded": "July 29, 1958",
                "Headquarters": "Washington DC",
                "Purpose": "Space Research"
            }
        },
        special: false
    },
    {
        year: 1959,
        title: {
            tr: "Luna 2 - Ay'a İlk Çarpma",
            en: "Luna 2 - First Moon Impact"
        },
        description: {
            tr: "Sovyet Luna 2 uzay aracı Ay'a çarpan ilk insan yapımı nesne oldu.",
            en: "Soviet Luna 2 spacecraft became the first human-made object to impact the Moon."
        },
        icon: "🌙",
        flag: "🇷🇺",
        details: {
            tr: "Luna 2, Ay'ın yüzeyine çarpan ilk insan yapımı nesne oldu.",
            en: "Luna 2 became the first human-made object to impact the lunar surface."
        },
        stats: {
            tr: {
                "Hedef": "Ay",
                "Sonuç": "Başarılı Çarpma",
                "Tarih": "13 Eylül 1959"
            },
            en: {
                "Target": "Moon",
                "Result": "Successful Impact",
                "Date": "September 13, 1959"
            }
        },
        special: false
    },
    {
        year: 1959,
        title: {
            tr: "Luna 3 - Ay'ın Görünmeyen Yüzü",
            en: "Luna 3 - Far Side of the Moon"
        },
        description: {
            tr: "Luna 3, Ay'ın görünmeyen yüzünün ilk fotoğraflarını çekti.",
            en: "Luna 3 took the first photographs of the Moon's far side."
        },
        icon: "📸",
        flag: "🇷🇺",
        details: {
            tr: "İlk kez Ay'ın görünmeyen yüzü fotoğraflandı.",
            en: "For the first time, the far side of the Moon was photographed."
        },
        stats: {
            tr: {
                "Fotoğraf": "29 adet",
                "Kalite": "Düşük çözünürlük",
                "Tarih": "7 Ekim 1959"
            },
            en: {
                "Photos": "29 images",
                "Quality": "Low resolution",
                "Date": "October 7, 1959"
            }
        },
        special: false
    },
    {
        year: 1960,
        title: {
            tr: "Korabl-Sputnik 2",
            en: "Korabl-Sputnik 2"
        },
        description: {
            tr: "İlk canlılar (köpekler) uzaydan güvenle döndü.",
            en: "First living creatures (dogs) returned safely from space."
        },
        icon: "🐕",
        flag: "🇷🇺",
        details: {
            tr: "Belka ve Strelka adlı köpekler uzaydan güvenle dönen ilk canlılar oldu.",
            en: "Dogs Belka and Strelka became the first living creatures to return safely from space."
        },
        stats: {
            tr: {
                "Canlılar": "Belka ve Strelka",
                "Süre": "1 gün",
                "Sonuç": "Başarılı Dönüş"
            },
            en: {
                "Animals": "Belka and Strelka",
                "Duration": "1 day",
                "Result": "Successful Return"
            }
        },
        special: false
    },
    {
        year: 1961,
        title: {
            tr: "İlk İnsanlı Uzay Uçuşu",
            en: "First Human Spaceflight"
        },
        description: {
            tr: "Yuri Gagarin, Vostok 1 ile uzaya çıkan ilk insan oldu.",
            en: "Yuri Gagarin became the first human to travel to space aboard Vostok 1."
        },
        icon: "👨‍🚀",
        flag: "🇷🇺",
        details: {
            tr: "Yuri Gagarin, Vostok 1 uzay aracıyla Dünya'nın yörüngesinde 108 dakika süren tarihi uçuşunu gerçekleştirdi.",
            en: "Yuri Gagarin completed his historic 108-minute flight in Earth's orbit aboard the Vostok 1 spacecraft."
        },
        stats: {
            tr: {
                "Astronot": "Yuri Gagarin",
                "Süre": "108 dakika",
                "Yükseklik": "327 km"
            },
            en: {
                "Astronaut": "Yuri Gagarin",
                "Duration": "108 minutes",
                "Altitude": "327 km"
            }
        },
        special: true
    },
    {
        year: 1961,
        title: {
            tr: "Mercury-Redstone 3",
            en: "Mercury-Redstone 3"
        },
        description: {
            tr: "Alan Shepard, ABD'nin ilk insanlı uzay uçuşunu gerçekleştirdi.",
            en: "Alan Shepard performed the United States' first human spaceflight."
        },
        icon: "🚀",
        flag: "🇺🇸",
        details: {
            tr: "Alan Shepard, Freedom 7 kapsülüyle 15 dakikalık suborbital uçuş gerçekleştirdi.",
            en: "Alan Shepard completed a 15-minute suborbital flight in the Freedom 7 capsule."
        },
        stats: {
            tr: {
                "Astronot": "Alan Shepard",
                "Süre": "15 dakika",
                "Yükseklik": "187 km"
            },
            en: {
                "Astronaut": "Alan Shepard",
                "Duration": "15 minutes",
                "Altitude": "187 km"
            }
        },
        special: false
    },
    {
        year: 1962,
        title: {
            tr: "Friendship 7 - John Glenn",
            en: "Friendship 7 - John Glenn"
        },
        description: {
            tr: "John Glenn, ABD'nin ilk orbital uçuşunu gerçekleştirdi.",
            en: "John Glenn performed the United States' first orbital flight."
        },
        icon: "🌍",
        flag: "🇺🇸",
        details: {
            tr: "John Glenn, Friendship 7 ile Dünya'nın etrafında 3 tur attı.",
            en: "John Glenn completed 3 orbits around Earth in Friendship 7."
        },
        stats: {
            tr: {
                "Astronot": "John Glenn",
                "Tur Sayısı": "3 tur",
                "Süre": "4 saat 55 dakika"
            },
            en: {
                "Astronaut": "John Glenn",
                "Orbits": "3 orbits",
                "Duration": "4 hours 55 minutes"
            }
        },
        special: false
    },
    {
        year: 1963,
        title: {
            tr: "Vostok 6 - Valentina Tereshkova",
            en: "Vostok 6 - Valentina Tereshkova"
        },
        description: {
            tr: "Valentina Tereshkova, uzaya çıkan ilk kadın oldu.",
            en: "Valentina Tereshkova became the first woman to travel to space."
        },
        icon: "👩‍🚀",
        flag: "🇷🇺",
        details: {
            tr: "Valentina Tereshkova, Vostok 6 ile uzaya çıkan ilk kadın astronot oldu.",
            en: "Valentina Tereshkova became the first female astronaut to travel to space aboard Vostok 6."
        },
        stats: {
            tr: {
                "Astronot": "Valentina Tereshkova",
                "Süre": "3 gün",
                "Tur Sayısı": "48 tur"
            },
            en: {
                "Astronaut": "Valentina Tereshkova",
                "Duration": "3 days",
                "Orbits": "48 orbits"
            }
        },
        special: false
    },
    {
        year: 1965,
        title: {
            tr: "Voskhod 2 - İlk Uzay Yürüyüşü",
            en: "Voskhod 2 - First Spacewalk"
        },
        description: {
            tr: "Alexei Leonov, ilk uzay yürüyüşünü gerçekleştirdi.",
            en: "Alexei Leonov performed the first spacewalk in history."
        },
        icon: "🚶‍♂️",
        flag: "🇷🇺",
        details: {
            tr: "Alexei Leonov, Voskhod 2'den çıkarak 12 dakika süren ilk uzay yürüyüşünü yaptı.",
            en: "Alexei Leonov exited Voskhod 2 and performed the first spacewalk lasting 12 minutes."
        },
        stats: {
            tr: {
                "Astronot": "Alexei Leonov",
                "Süre": "12 dakika",
                "Mesafe": "5.3 metre"
            },
            en: {
                "Astronaut": "Alexei Leonov",
                "Duration": "12 minutes",
                "Distance": "5.3 meters"
            }
        },
        special: false
    },
    {
        year: 1965,
        title: {
            tr: "Gemini 4 - Ed White",
            en: "Gemini 4 - Ed White"
        },
        description: {
            tr: "Ed White, ABD'nin ilk uzay yürüyüşünü gerçekleştirdi.",
            en: "Ed White performed the United States' first spacewalk."
        },
        icon: "🚶‍♂️",
        flag: "🇺🇸",
        details: {
            tr: "Ed White, Gemini 4'ten çıkarak 20 dakika süren uzay yürüyüşü yaptı.",
            en: "Ed White exited Gemini 4 and performed a 20-minute spacewalk."
        },
        stats: {
            tr: {
                "Astronot": "Ed White",
                "Süre": "20 dakika",
                "Gemini": "4"
            },
            en: {
                "Astronaut": "Ed White",
                "Duration": "20 minutes",
                "Mission": "Gemini 4"
            }
        },
        special: false
    },
    {
        year: 1966,
        title: {
            tr: "Luna 9 - Ay'a İlk Yumuşak İniş",
            en: "Luna 9 - First Soft Moon Landing"
        },
        description: {
            tr: "Luna 9, Ay'a yumuşak iniş yapan ilk uzay aracı oldu.",
            en: "Luna 9 became the first spacecraft to make a soft landing on the Moon."
        },
        icon: "🌙",
        flag: "🇷🇺",
        details: {
            tr: "Luna 9, Ay'ın yüzeyine yumuşak iniş yapan ilk uzay aracı oldu.",
            en: "Luna 9 became the first spacecraft to make a soft landing on the lunar surface."
        },
        stats: {
            tr: {
                "Hedef": "Ay",
                "İniş": "Yumuşak",
                "Tarih": "3 Şubat 1966"
            },
            en: {
                "Target": "Moon",
                "Landing": "Soft",
                "Date": "February 3, 1966"
            }
        },
        special: false
    },
    {
        year: 1968,
        title: {
            tr: "Apollo 8 - Ay'ın Etrafında Tur",
            en: "Apollo 8 - First Manned Moon Orbit"
        },
        description: {
            tr: "Apollo 8, Ay'ın etrafında tur atan ilk insanlı uzay aracı oldu.",
            en: "Apollo 8 became the first manned spacecraft to orbit the Moon."
        },
        icon: "🌙",
        flag: "🇺🇸",
        details: {
            tr: "Frank Borman, James Lovell ve William Anders, Ay'ın etrafında 10 tur attı.",
            en: "Frank Borman, James Lovell and William Anders completed 10 orbits around the Moon."
        },
        stats: {
            tr: {
                "Astronotlar": "3 kişi",
                "Tur Sayısı": "10 tur",
                "Süre": "6 gün"
            },
            en: {
                "Astronauts": "3 people",
                "Orbits": "10 orbits",
                "Duration": "6 days"
            }
        },
        special: false
    },
    {
        year: 1969,
        title: {
            tr: "Apollo 11 - Ay'a İlk İniş",
            en: "Apollo 11 - First Moon Landing"
        },
        description: {
            tr: "Neil Armstrong ve Buzz Aldrin, Ay'a ayak basan ilk insanlar oldu.",
            en: "Neil Armstrong and Buzz Aldrin became the first humans to set foot on the Moon."
        },
        icon: "👨‍🚀",
        flag: "🇺🇸",
        details: {
            tr: "Neil Armstrong ve Buzz Aldrin, Ay'ın yüzeyine ayak basan ilk insanlar oldu.",
            en: "Neil Armstrong and Buzz Aldrin became the first humans to set foot on the lunar surface."
        },
        stats: {
            tr: {
                "Astronotlar": "Neil Armstrong, Buzz Aldrin",
                "Süre": "21 saat 36 dakika",
                "Tarih": "20 Temmuz 1969"
            },
            en: {
                "Astronauts": "Neil Armstrong, Buzz Aldrin",
                "Duration": "21 hours 36 minutes",
                "Date": "July 20, 1969"
            }
        },
        special: true
    },
    {
        year: 1971,
        title: {
            tr: "Salyut 1 - İlk Uzay İstasyonu",
            en: "Salyut 1 - First Space Station"
        },
        description: {
            tr: "Salyut 1, dünyanın ilk uzay istasyonu olarak fırlatıldı.",
            en: "Salyut 1 was launched as the world's first space station."
        },
        icon: "🏠",
        flag: "🇷🇺",
        details: {
            tr: "Salyut 1, uzayda kalıcı yaşam için ilk uzay istasyonu oldu.",
            en: "Salyut 1 became the first space station for permanent living in space."
        },
        stats: {
            tr: {
                "İstasyon": "Salyut 1",
                "Süre": "175 gün",
                "Mürettebat": "3 kişi"
            },
            en: {
                "Station": "Salyut 1",
                "Duration": "175 days",
                "Crew": "3 people"
            }
        },
        special: false
    },
    {
        year: 1975,
        title: {
            tr: "Apollo-Soyuz Test Projesi",
            en: "Apollo-Soyuz Test Project"
        },
        description: {
            tr: "ABD ve Sovyetler Birliği'nin ilk ortak uzay görevi.",
            en: "The first joint space mission between the United States and the Soviet Union."
        },
        icon: "🤝",
        flag: "🌍",
        details: {
            tr: "Apollo ve Soyuz uzay araçları uzayda kenetlendi, soğuk savaş döneminde işbirliği sembolü oldu.",
            en: "Apollo and Soyuz spacecraft docked in space, becoming a symbol of cooperation during the Cold War."
        },
        stats: {
            tr: {
                "Ülkeler": "ABD ve Sovyetler Birliği",
                "Süre": "2 gün",
                "Kenetlenme": "Başarılı"
            },
            en: {
                "Countries": "USA and Soviet Union",
                "Duration": "2 days",
                "Docking": "Successful"
            }
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
let currentLanguage = localStorage.getItem('spacerace_language') || 'tr';
let langBtn = null;
let langIcon = null;

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
    langBtn = document.getElementById('langBtn');
    langIcon = document.getElementById('langIcon');
    
    // Initialize language
    updateLanguageUI();
}

// ===== LANGUAGE SYSTEM FUNCTIONS =====
function updateLanguageUI() {
    if (langIcon) {
        langIcon.textContent = currentLanguage === 'tr' ? '🇹🇷' : '🇺🇸';
    }
    
    // Update document title
    document.title = translations[currentLanguage].title;
    
    // Update navbar title
    const navbarTitle = document.querySelector('.logo h1');
    if (navbarTitle) {
        navbarTitle.textContent = translations[currentLanguage].title;
    }
    
    // Update button titles
    const playBtn = document.getElementById('playPauseBtn');
    const resetBtn = document.getElementById('resetBtn');
    const langBtn = document.getElementById('langBtn');
    
    if (playBtn) playBtn.title = translations[currentLanguage].playPause;
    if (resetBtn) resetBtn.title = translations[currentLanguage].reset;
    if (langBtn) langBtn.title = translations[currentLanguage].changeLanguage;
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'tr' ? 'en' : 'tr';
    localStorage.setItem('spacerace_language', currentLanguage);
    updateLanguageUI();
    updateHeroContent();
    updateTimelineCards();
}

function updateTimelineCards() {
    const cards = document.querySelectorAll('.event-card');
    cards.forEach((card, index) => {
        const event = spaceRaceEvents[index];
        const titleElement = card.querySelector('.event-title');
        const descriptionElement = card.querySelector('.event-description');
        
        if (titleElement) {
            titleElement.textContent = typeof event.title === 'object' ? event.title[currentLanguage] : event.title;
        }
        if (descriptionElement) {
            descriptionElement.textContent = typeof event.description === 'object' ? event.description[currentLanguage] : event.description;
        }
    });
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
    
    const title = typeof event.title === 'object' ? event.title[currentLanguage] : event.title;
    const description = typeof event.description === 'object' ? event.description[currentLanguage] : event.description;
    
    card.innerHTML = `
        <div class="event-icon">${event.icon}</div>
        <div class="event-year">${event.year}</div>
        <div class="event-title">${title}</div>
        <div class="event-description">${description}</div>
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
        
        const title = typeof event.title === 'object' ? event.title[currentLanguage] : event.title;
        const details = typeof event.details === 'object' ? event.details[currentLanguage] : event.details;
        
        heroTitle.textContent = title;
        heroDescription.textContent = details;
        heroFlag.textContent = event.flag;
        
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 200);
    
    // Update stats
    const statsContainer = document.querySelector('.event-stats');
    if (statsContainer) {
        const currentStats = typeof event.stats === 'object' && event.stats[currentLanguage] ? event.stats[currentLanguage] : event.stats;
        const stats = Object.entries(currentStats).slice(0, 2);
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
        
        const title = typeof event.title === 'object' ? event.title[currentLanguage] : event.title;
        const details = typeof event.details === 'object' ? event.details[currentLanguage] : event.details;
        
        heroTitle.textContent = title;
        heroDescription.textContent = details; // Aynı bilgiyi göster
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
    
    // Language button
    if (langBtn) {
        langBtn.addEventListener('click', toggleLanguage);
    }
    
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
