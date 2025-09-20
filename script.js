// Zufällige Räume generieren
function getRandomRoom() {
    const rooms = [
        '1.02', '1.03', '1.04', '1.05', '1.06', '1.07', '1.08',
        '2.01', '2.02', '2.03', '2.04', '2.05', '2.06', '2.07',
        '3.01', '3.02', '3.03', '3.04', '3.05', '3.06', '3.07',
        '4.01', '4.02', '4.03', '4.04', '4.05', '4.06', '4.07'
    ];
    return rooms[Math.floor(Math.random() * rooms.length)];
}

// Statistik aktualisieren
function updateStats() {
    const totalDevices = document.querySelectorAll('.device-card').length;
    const availableDevices = document.querySelectorAll('.status:not(.borrowed)').length;
    const borrowedDevices = document.querySelectorAll('.status.borrowed').length;
    
    document.getElementById('total-count').textContent = totalDevices;
    document.getElementById('available-count').textContent = availableDevices;
    document.getElementById('borrowed-count').textContent = borrowedDevices;
}

// Device Cards generieren
function generateDeviceCards() {
    const grid = document.getElementById('device-grid');
    
    for (let i = 1; i <= 900; i++) {
        const deviceCard = document.createElement('div');
        deviceCard.className = 'device-card';
        deviceCard.setAttribute('data-device', i);
        
        const room = getRandomRoom();
        
        deviceCard.innerHTML = `
            <div class="device-header">device${i}</div>
            <div class="device-title">Device ${i}</div>
            <div class="device-info">Raum ${room}</div>
            <div class="status" id="status-${i}">Status: verfügbar</div>
            <button class="action-button" id="button-${i}" onclick="toggleStatus(${i})">
                Ausleihen
            </button>
        `;
        
        grid.appendChild(deviceCard);
    }
    
    // Statistik initial aktualisieren
    updateStats();
}

// Status umschalten (verfügbar ⇄ ausgeliehen)
function toggleStatus(deviceNumber) {
    const statusElement = document.getElementById(`status-${deviceNumber}`);
    const buttonElement = document.getElementById(`button-${deviceNumber}`);
    
    if (statusElement.textContent === 'Status: verfügbar') {
        // Device ausleihen
        statusElement.textContent = 'Status: ausgeliehen';
        statusElement.classList.add('borrowed');
        buttonElement.textContent = 'Zurückgeben';
        buttonElement.className = 'action-button return';
        
        // Animation
        statusElement.parentElement.style.transform = 'scale(1.05)';
        setTimeout(() => {
            statusElement.parentElement.style.transform = 'scale(1)';
        }, 200);
        
        showNotification(`Device ${deviceNumber} wurde ausgeliehen!`, 'success');
    } else {
        // Device zurückgeben
        statusElement.textContent = 'Status: verfügbar';
        statusElement.classList.remove('borrowed');
        buttonElement.textContent = 'Ausleihen';
        buttonElement.className = 'action-button borrow';
        
        // Animation
        statusElement.parentElement.style.transform = 'scale(1.05)';
        setTimeout(() => {
            statusElement.parentElement.style.transform = 'scale(1)';
        }, 200);
        
        showNotification(`Device ${deviceNumber} wurde zurückgegeben!`, 'info');
    }
    
    // Statistik aktualisieren
    updateStats();
}

// Notification anzeigen
function showNotification(message, type) {
    // Entferne alte Notifications
    const oldNotifications = document.querySelectorAll('.notification');
    oldNotifications.forEach(n => n.remove());
    
    // Erstelle neue Notification
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Styles für Notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#28a745' : '#17a2b8'};
        color: white;
        padding: 12px 20px;
        border-radius: 6px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    
    // Animation CSS hinzufügen
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Auto-remove nach 3 Sekunden
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Suchfunktion
function searchDevices() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const cards = document.querySelectorAll('.device-card');
    let visibleCount = 0;
    
    cards.forEach(card => {
        const deviceNumber = card.getAttribute('data-device');
        const deviceTitle = card.querySelector('.device-title').textContent.toLowerCase();
        const deviceRoom = card.querySelector('.device-info').textContent.toLowerCase();
        
        if (deviceNumber.includes(searchTerm) || 
            deviceTitle.includes(searchTerm) || 
            deviceRoom.includes(searchTerm) || 
            searchTerm === '') {
            card.style.display = 'block';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });
    
    // Zeige Suchergebnisse in der Statistik
    if (searchTerm !== '') {
        const stats = document.querySelector('.stats');
        stats.innerHTML = `${visibleCount} Geräte gefunden für "${searchTerm}"`;
    } else {
        updateStats();
    }
}

// Alle als verfügbar/ausgeliehen markieren (für Demo/Testing)
function markAllAvailable() {
    const statusElements = document.querySelectorAll('.status.borrowed');
    statusElements.forEach(status => {
        const deviceId = status.id.split('-')[1];
        toggleStatus(parseInt(deviceId));
    });
}

function markAllBorrowed() {
    const statusElements = document.querySelectorAll('.status:not(.borrowed)');
    statusElements.forEach(status => {
        const deviceId = status.id.split('-')[1];
        toggleStatus(parseInt(deviceId));
    });
}

// Keyboard Shortcuts
document.addEventListener('keydown', function(e) {
    // Strg + F: Fokus auf Suchfeld
    if (e.ctrlKey && e.key === 'f') {
        e.preventDefault();
        document.getElementById('search').focus();
    }
    
    // ESC: Suchfeld leeren
    if (e.key === 'Escape') {
        const searchField = document.getElementById('search');
        searchField.value = '';
        searchDevices();
        searchField.blur();
    }
});

// Local Storage für persistente Daten
function saveDeviceStates() {
    const deviceStates = {};
    document.querySelectorAll('.device-card').forEach(card => {
        const deviceId = card.getAttribute('data-device');
        const status = card.querySelector('.status');
        deviceStates[deviceId] = status.classList.contains('borrowed');
    });
    localStorage.setItem('deviceStates', JSON.stringify(deviceStates));
}

function loadDeviceStates() {
    const savedStates = localStorage.getItem('deviceStates');
    if (savedStates) {
        const deviceStates = JSON.parse(savedStates);
        Object.keys(deviceStates).forEach(deviceId => {
            if (deviceStates[deviceId]) {
                // Device als ausgeliehen markieren
                const statusElement = document.getElementById(`status-${deviceId}`);
                const buttonElement = document.getElementById(`button-${deviceId}`);
                if (statusElement && buttonElement) {
                    statusElement.textContent = 'Status: ausgeliehen';
                    statusElement.classList.add('borrowed');
                    buttonElement.textContent = 'Zurückgeben';
                    buttonElement.className = 'action-button return';
                }
            }
        });
        updateStats();
    }
}

// Beim Laden der Seite
document.addEventListener('DOMContentLoaded', function() {
    generateDeviceCards();
    loadDeviceStates();
    
    // Auto-save bei Änderungen
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('action-button')) {
            setTimeout(saveDeviceStates, 100);
        }
    });
    
    console.log('🚀 Geräteverwaltung geladen!');
    console.log('💡 Shortcuts: Strg+F für Suche, ESC zum Leeren');
});