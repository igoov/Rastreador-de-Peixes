// Dados dos peixes (adicionada a propriedade 'mapKey' para mapeamento)
const fishData = [
    // Peixes de Rio
    { name: "Peixe-sol", bundle: "river", bundleName: "Peixes de Rio", location: "Rios", time: "6:00 - 19:00", season: "Primavera e Verão", weather: "Qualquer clima", method: "Vara de pescar", difficulty: "Fácil", mapKey: "rios" },
    { name: "Bagre", bundle: "river", bundleName: "Peixes de Rio", location: "Rios / Lago do Bosque Secreto", time: "Qualquer hora", season: "Primavera e Outono", weather: "Apenas chuva", method: "Vara de pescar", difficulty: "Médio", mapKey: "rios_bosque" },
    { name: "Alocine", bundle: "river", bundleName: "Peixes de Rio", location: "Rios", time: "Qualquer hora", season: "Primavera, Verão e Outono", weather: "Apenas chuva", method: "Vara de pescar", difficulty: "Médio", mapKey: "rios" },
    { name: "Salmão híbrido", bundle: "river", bundleName: "Peixes de Rio", location: "Rios", time: "6:00 - 19:00", season: "Outono e Inverno", weather: "Qualquer clima", method: "Vara de pescar", difficulty: "Médio", mapKey: "rios" },
    
    // Peixes de Lago
    { name: "Achigã", bundle: "lake", bundleName: "Peixes de Lago", location: "Lagos da Montanha", time: "6:00 - 19:00", season: "Todas as estações", weather: "Qualquer clima", method: "Vara de pescar", difficulty: "Médio", mapKey: "lago_montanha" },
    { name: "Carpa", bundle: "lake", bundleName: "Peixes de Lago", location: "Lagos / Esgotos", time: "Qualquer hora", season: "Primavera, Verão e Outono", weather: "Qualquer clima", method: "Vara de pescar", difficulty: "Fácil", mapKey: "lago_esgoto" },
    { name: "Peixe-gato-cabeçudo", bundle: "lake", bundleName: "Peixes de Lago", location: "Lagos da Montanha", time: "Qualquer hora", season: "Todas as estações", weather: "Qualquer clima", method: "Vara de pescar", difficulty: "Fácil", mapKey: "lago_montanha" },
    { name: "Esturjão", bundle: "lake", bundleName: "Peixes de Lago", location: "Lagos da Montanha", time: "6:00 - 19:00", season: "Verão e Inverno", weather: "Qualquer clima", method: "Vara de pescar", difficulty: "Difícil", mapKey: "lago_montanha" },
    
    // Peixes de Oceano
    { name: "Sardinha", bundle: "ocean", bundleName: "Peixes de Oceano", location: "Oceano", time: "6:00 - 19:00", season: "Primavera, Outono e Inverno", weather: "Qualquer clima", method: "Vara de pescar", difficulty: "Fácil", mapKey: "oceano" },
    { name: "Atum", bundle: "ocean", bundleName: "Peixes de Oceano", location: "Oceano", time: "6:00 - 19:00", season: "Verão e Inverno", weather: "Qualquer clima", method: "Vara de pescar", difficulty: "Difícil", mapKey: "oceano" },
    { name: "Cioba", bundle: "ocean", bundleName: "Peixes de Oceano", location: "Oceano", time: "6:00 - 19:00", season: "Verão e Outono", weather: "Apenas chuva", method: "Vara de pescar", difficulty: "Médio", mapKey: "oceano" },
    { name: "Tilápia", bundle: "ocean", bundleName: "Peixes de Oceano", location: "Oceano", time: "6:00 - 14:00", season: "Verão e Outono", weather: "Qualquer clima", method: "Vara de pescar", difficulty: "Médio", mapKey: "oceano" },
    
    // Pesca Noturna
    { name: "Picão-verde", bundle: "night", bundleName: "Pesca Noturna", location: "Rios", time: "12:00 - 2:00", season: "Outono", weather: "Apenas chuva", method: "Vara de pescar", difficulty: "Difícil", mapKey: "rios" },
    { name: "Brema", bundle: "night", bundleName: "Pesca Noturna", location: "Rios", time: "18:00 - 2:00", season: "Todas as estações", weather: "Qualquer clima", method: "Vara de pescar", difficulty: "Fácil", mapKey: "rios" },
    { name: "Enguia", bundle: "night", bundleName: "Pesca Noturna", location: "Oceano", time: "16:00 - 2:00", season: "Primavera e Outono", weather: "Apenas chuva", method: "Vara de pescar", difficulty: "Médio", mapKey: "oceano" },
    
    // Covos
    { name: "Lagosta", bundle: "crab", bundleName: "Covos", location: "Oceano", time: "Qualquer hora", season: "Todas as estações", weather: "Qualquer clima", method: "Covo com isca", difficulty: "Fácil", mapKey: "oceano" },
    { name: "Lagostim", bundle: "crab", bundleName: "Covos", location: "Água doce", time: "Qualquer hora", season: "Todas as estações", weather: "Qualquer clima", method: "Covo com isca", difficulty: "Fácil", mapKey: "agua_doce" },
    { name: "Caranguejo", bundle: "crab", bundleName: "Covos", location: "Oceano / Minas", time: "Qualquer hora", season: "Todas as estações", weather: "Qualquer clima", method: "Covo / Drop", difficulty: "Fácil", mapKey: "oceano_minas" },
    { name: "Berbigão", bundle: "crab", bundleName: "Covos", location: "Praia (coleta)", time: "Qualquer hora", season: "Todas as estações", weather: "Qualquer clima", method: "Covo / Coleta", difficulty: "Fácil", mapKey: "praia" },
    { name: "Mexilhão", bundle: "crab", bundleName: "Covos", location: "Praia (coleta)", time: "Qualquer hora", season: "Todas as estações", weather: "Qualquer clima", method: "Covo / Coleta", difficulty: "Fácil", mapKey: "praia" },
    { name: "Camarão", bundle: "crab", bundleName: "Covos", location: "Oceano", time: "Qualquer hora", season: "Todas as estações", weather: "Qualquer clima", method: "Covo com isca", difficulty: "Fácil", mapKey: "oceano" },
    { name: "Lesma", bundle: "crab", bundleName: "Covos", location: "Água doce", time: "Qualquer hora", season: "Todas as estações", weather: "Qualquer clima", method: "Covo com isca", difficulty: "Fácil", mapKey: "agua_doce" },
    { name: "Caramujo", bundle: "crab", bundleName: "Covos", location: "Água doce", time: "Qualquer hora", season: "Todas as estações", weather: "Qualquer clima", method: "Covo com isca", difficulty: "Fácil", mapKey: "agua_doce" },
    { name: "Ostra", bundle: "crab", bundleName: "Covos", location: "Praia (coleta)", time: "Qualquer hora", season: "Todas as estações", weather: "Qualquer clima", method: "Covo / Coleta", difficulty: "Fácil", mapKey: "praia" },
    
    // Peixes Especializados
    { name: "Baiacu", bundle: "specialty", bundleName: "Peixes Especializados", location: "Oceano", time: "12:00 - 16:00", season: "Verão", weather: "Qualquer clima", method: "Vara de pescar", difficulty: "Difícil", mapKey: "oceano" },
    { name: "Peixe-fantasma", bundle: "specialty", bundleName: "Peixes Especializados", location: "Minas (20, 60, 100)", time: "Qualquer hora", season: "Todas as estações", weather: "Qualquer clima", method: "Vara / Drop", difficulty: "Médio", mapKey: "minas" },
    { name: "Areinha", bundle: "specialty", bundleName: "Peixes Especializados", location: "Deserto Calico", time: "6:00 - 22:00", season: "Todas as estações", weather: "Qualquer clima", method: "Vara de pescar", difficulty: "Difícil", mapKey: "deserto" },
    { name: "Madeirão", bundle: "specialty", bundleName: "Peixes Especializados", location: "Bosque Secreto", time: "Qualquer hora", season: "Todas as estações", weather: "Qualquer clima", method: "Vara de pescar", difficulty: "Difícil", mapKey: "bosque_secreto" }
];

// Coordenadas das áreas de pesca no mapa (x, y, largura, altura) em porcentagem
const mapCoordinates = {
    rios: [[48, 45, 20, 25], [60, 25, 15, 20]],
    lago_montanha: [[65, 10, 20, 15]],
    oceano: [[70, 65, 25, 25]],
    praia: [[70, 65, 25, 25]],
    bosque_secreto: [[3, 50, 10, 15]],
    minas: [[78, 5, 5, 5]],
    deserto: [[15, 5, 25, 30]],
    esgotos: [[50, 68, 15, 5]],
    rios_bosque: [[48, 45, 20, 25], [60, 25, 15, 20], [3, 50, 10, 15]],
    lago_esgoto: [[65, 10, 20, 15], [50, 68, 15, 5]],
    oceano_minas: [[70, 65, 25, 25], [78, 5, 5, 5]],
    agua_doce: [[48, 45, 20, 25], [60, 25, 15, 20], [65, 10, 20, 15]]
};

// Estado da aplicação
let caughtFish = JSON.parse(localStorage.getItem('caughtFish')) || [];
let currentFilter = 'all';
let searchTerm = '';
let advancedFilters = { location: '', weather: '', season: '', difficulty: '', status: '' };

// Elementos DOM
const fishGrid = document.getElementById('fishGrid');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const filterButtons = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('searchInput');
const advancedFiltersBtn = document.getElementById('advancedFiltersBtn');
const advancedFiltersModal = document.getElementById('advancedFiltersModal');
const closeModal = document.querySelector('.close');
const locationFilter = document.getElementById('locationFilter');
const weatherFilter = document.getElementById('weatherFilter');
const seasonFilter = document.getElementById('seasonFilter');
const difficultyFilter = document.getElementById('difficultyFilter');
const statusFilter = document.getElementById('statusFilter');
const clearFiltersBtn = document.getElementById('clearFilters');
const applyFiltersBtn = document.getElementById('applyFilters');
const mapModal = document.getElementById('mapModal');
const mapModalTitle = document.getElementById('mapModalTitle');
const closeMapModal = document.getElementById('closeMapModal');
const mapCanvas = document.getElementById('mapCanvas');
const ctx = mapCanvas.getContext('2d');

// Inicializar aplicação
document.addEventListener('DOMContentLoaded', function() {
    renderFish();
    updateProgress();
    setupEventListeners();

    // Garante que nenhum modal abra automaticamente
    advancedFiltersModal.style.display = 'none';
    mapModal.style.display = 'none';
});

// Configurar event listeners
function setupEventListeners() {
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentFilter = this.dataset.filter;
            renderFish();
        });
    });
    
    searchInput.addEventListener('input', function() {
        searchTerm = this.value.toLowerCase().trim();
        renderFish();
    });
    
    advancedFiltersBtn.addEventListener('click', () => advancedFiltersModal.style.display = 'block');
    closeModal.addEventListener('click', () => advancedFiltersModal.style.display = 'none');
    closeMapModal.addEventListener('click', () => mapModal.style.display = 'none');
    
    window.addEventListener('click', function(event) {
        if (event.target === advancedFiltersModal) advancedFiltersModal.style.display = 'none';
        if (event.target === mapModal) mapModal.style.display = 'none';
    });
    
    clearFiltersBtn.addEventListener('click', function() {
        locationFilter.value = ''; weatherFilter.value = ''; seasonFilter.value = '';
        difficultyFilter.value = ''; statusFilter.value = '';
        advancedFilters = { location: '', weather: '', season: '', difficulty: '', status: '' };
        renderFish();
    });
    
    applyFiltersBtn.addEventListener('click', function() {
        advancedFilters = {
            location: locationFilter.value.toLowerCase(), weather: weatherFilter.value.toLowerCase(),
            season: seasonFilter.value.toLowerCase(), difficulty: difficultyFilter.value.toLowerCase(),
            status: statusFilter.value
        };
        advancedFiltersModal.style.display = 'none';
        renderFish();
    });
}

// Renderizar peixes
function renderFish() {
    let filteredFish = fishData;

    if (currentFilter !== 'all') {
        filteredFish = fishData.filter(fish => fish.bundle.toLowerCase() === currentFilter.toLowerCase());
    }
    
    if (searchTerm) {
        filteredFish = filteredFish.filter(fish => 
            fish.name.toLowerCase().includes(searchTerm) ||
            fish.location.toLowerCase().includes(searchTerm) ||
            fish.bundleName.toLowerCase().includes(searchTerm)
        );
    }
    
    if (advancedFilters.location) filteredFish = filteredFish.filter(fish => fish.location.toLowerCase().includes(advancedFilters.location));
    if (advancedFilters.weather) filteredFish = filteredFish.filter(fish => fish.weather.toLowerCase().includes(advancedFilters.weather));
    if (advancedFilters.season) filteredFish = filteredFish.filter(fish => fish.season.toLowerCase().includes(advancedFilters.season));
    if (advancedFilters.difficulty) filteredFish = filteredFish.filter(fish => fish.difficulty.toLowerCase() === advancedFilters.difficulty); 
    if (advancedFilters.status) {
        if (advancedFilters.status === 'caught') filteredFish = filteredFish.filter(fish => caughtFish.includes(fish.name));
        else if (advancedFilters.status === 'not-caught') filteredFish = filteredFish.filter(fish => !caughtFish.includes(fish.name));
    }
    
    fishGrid.innerHTML = filteredFish.map(fish => createFishCard(fish)).join("");
    
    document.querySelectorAll(".catch-checkbox").forEach(checkbox => {
        checkbox.addEventListener("change", function() {
            toggleFishCaught(this.dataset.fishName, this.checked);
        });
    });

    document.querySelectorAll(".detail-row[data-location]").forEach(row => {
        row.addEventListener("click", function() {
            const fishName = this.dataset.fishName;
            const mapKey = this.dataset.mapKey;
            showMapForFish(fishName, mapKey);
        });
    });
}

// Criar card de peixe
function createFishCard(fish) {
    const isCaught = caughtFish.includes(fish.name);
    const difficultyIcon = getDifficultyIcon(fish.difficulty);
    
    return `
        <div class="fish-card ${isCaught ? 'caught' : ''}">
            <div class="fish-header">
                <h3 class="fish-name">${fish.name}</h3>
                <input type="checkbox" class="catch-checkbox" data-fish-name="${fish.name}" ${isCaught ? 'checked' : ''}>
            </div>
            <div class="fish-details">
                <div class="detail-row" data-location="true" data-fish-name="${fish.name}" data-map-key="${fish.mapKey}">
                    <span class="detail-icon">📍</span>
                    <span class="detail-text"><strong>Local:</strong> ${fish.location}</span>
                </div>
                <div class="detail-row"><span class="detail-icon">🕐</span><span class="detail-text"><strong>Horário:</strong> ${fish.time}</span></div>
                <div class="detail-row"><span class="detail-icon">🌸</span><span class="detail-text"><strong>Estação:</strong> ${fish.season}</span></div>
                <div class="detail-row"><span class="detail-icon">🌦️</span><span class="detail-text"><strong>Clima:</strong> ${fish.weather}</span></div>
                <div class="detail-row"><span class="detail-icon">🎣</span><span class="detail-text"><strong>Método:</strong> ${fish.method}</span></div>
                <div class="detail-row"><span class="detail-icon">${difficultyIcon}</span><span class="detail-text"><strong>Dificuldade:</strong> ${fish.difficulty}</span></div>
            </div>
            <div class="bundle-tag ${fish.bundle}">${fish.bundleName}</div>
        </div>
    `;
}

// Mostrar mapa
function showMapForFish(fishName, mapKey) {
    mapModalTitle.textContent = `Locais de Pesca para: ${fishName}`;
    
    const image = document.getElementById('mapImage');
    mapCanvas.width = image.clientWidth;
    mapCanvas.height = image.clientHeight;

    ctx.clearRect(0, 0, mapCanvas.width, mapCanvas.height);
    
    const locations = mapCoordinates[mapKey];
    if (!locations) return;

    ctx.fillStyle = 'rgba(255, 235, 59, 0.5)';
    ctx.strokeStyle = 'rgba(255, 100, 0, 0.9)';
    ctx.lineWidth = 3;

    locations.forEach(coords => {
        const [x, y, w, h] = coords;
        const rectX = (x / 100) * mapCanvas.width;
        const rectY = (y / 100) * mapCanvas.height;
        const rectW = (w / 100) * mapCanvas.width;
        const rectH = (h / 100) * mapCanvas.height;
        
        ctx.fillRect(rectX, rectY, rectW, rectH);
        ctx.strokeRect(rectX, rectY, rectW, rectH);
    });

    mapModal.style.display = 'block';
}

// Ícone de dificuldade
function getDifficultyIcon(difficulty) {
    switch(difficulty) {
        case 'Fácil': return '🟢';
        case 'Médio': return '🟡';
        case 'Difícil': return '🔴';
        default: return '⚪';
    }
}

// Alternar status de peixe capturado
function toggleFishCaught(fishName, isCaught) {
    if (isCaught) {
        if (!caughtFish.includes(fishName)) caughtFish.push(fishName);
    } else {
        caughtFish = caughtFish.filter(name => name !== fishName);
    }
    
    localStorage.setItem('caughtFish', JSON.stringify(caughtFish));
    updateProgress();
    const card = document.querySelector(`.catch-checkbox[data-fish-name="${fishName}"]`).closest('.fish-card');
    if (card) {
        if (isCaught) card.classList.add('caught');
        else card.classList.remove('caught');
    }
}

// Atualizar barra de progresso
function updateProgress() {
    const totalFish = fishData.length;
    const caughtCount = caughtFish.length;
    const percentage = totalFish > 0 ? (caughtCount / totalFish) * 100 : 0;
    
    progressFill.style.width = `${percentage}%`;
    progressText.textContent = `${caughtCount}/${totalFish} peixes coletados`;
}
