# 🏫 Geräteverwaltung - Hochschule Bochum

Eine moderne Webanwendung zur Verwaltung von Geräten der Hochschule Bochum.

## 📋 Features

- **900 Geräte**: Device 1 bis Device 900
- **Echtzeit-Status**: Verfügbar ⇄ Ausgeliehen mit einem Klick
- **Suchfunktion**: Suche nach Geräte-Nummer oder Raum
- **Responsive Design**: Funktioniert auf Desktop, Tablet und Mobile
- **Live-Statistiken**: Übersicht über verfügbare/ausgeliehene Geräte
- **Persistente Daten**: Status wird im Browser gespeichert
- **Keyboard Shortcuts**: Strg+F für Suche, ESC zum Leeren

## 🚀 Installation auf GitHub Pages

### Schritt 1: Repository erstellen
1. Gehe zu [github.com](https://github.com)
2. Klicke auf "New repository"
3. Name: `geraete-verwaltung` oder `device-management`
4. ✅ Hake "Add a README file" an
5. Klicke "Create repository"

### Schritt 2: Dateien hochladen
1. Klicke in deinem Repository auf "Add file" → "Upload files"
2. Lade diese 4 Dateien hoch:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`

### Schritt 3: GitHub Pages aktivieren
1. Gehe zu Settings (in deinem Repository)
2. Scrolle zu "Pages"
3. Unter "Source" wähle "Deploy from a branch"
4. Branch: "main"
5. Folder: "/ (root)"
6. Klicke "Save"

### Schritt 4: Deine Website ist online! 🎉
Nach ein paar Minuten ist deine Website erreichbar unter:
```
https://DEIN-USERNAME.github.io/REPOSITORY-NAME
```

## 💻 Lokale Entwicklung

```bash
# Repository klonen
git clone https://github.com/DEIN-USERNAME/REPOSITORY-NAME.git

# In Ordner wechseln
cd REPOSITORY-NAME

# index.html im Browser öffnen
```

## 🎮 Verwendung

### Basis-Funktionen
- **Gerät ausleihen**: Klicke auf "Ausleihen" Button (wird rot)
- **Gerät zurückgeben**: Klicke auf "Zurückgeben" Button (wird grün)
- **Suchen**: Tippe in die Suchleiste (z.B. "Device 42" oder "Raum 1.05")

### Keyboard Shortcuts
- `Strg + F`: Fokus auf Suchfeld
- `ESC`: Suchfeld leeren

### Browser Support
- ✅ Chrome (empfohlen)
- ✅ Firefox
- ✅ Safari
- ✅ Edge

## 🎨 Anpassungen

### Farben ändern
In `styles.css` die CSS-Variablen anpassen:
```css
:root {
  --primary-color: #dc3545;  /* Rot der Hochschule */
  --success-color: #28a745;  /* Grün für verfügbar */
}
```

### Mehr Geräte hinzufügen
In `script.js` die Schleife anpassen:
```javascript
// Für Device 1-1500
for (let i = 1; i <= 1500; i++) {
```

### Räume anpassen
In `script.js` das `rooms` Array erweitern:
```javascript
const rooms = [
    '1.02', '1.03', '1.04',  // Deine Räume hier
];
```

## 📱 Screenshots

### Desktop
![Desktop View](https://via.placeholder.com/800x400/dc3545/ffffff?text=Desktop+View)

### Mobile
![Mobile View](https://via.placeholder.com/400x800/dc3545/ffffff?text=Mobile+View)

## 🔧 Technische Details

### Struktur
```
/
├── index.html      # Haupt-HTML-Datei
├── styles.css      # Alle CSS-Styles
├── script.js       # JavaScript-Funktionalität
└── README.md       # Diese Dokumentation
```

### Dependencies
- **Keine!** Reine HTML/CSS/JavaScript
- Funktioniert offline nach dem ersten Laden

## 🤝 Beitragen

1. Fork das Repository
2. Erstelle einen Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Committe deine Änderungen (`git commit -m 'Add AmazingFeature'`)
4. Pushe zum Branch (`git push origin feature/AmazingFeature`)
5. Öffne einen Pull Request

## 📄 Lizenz

Dieses Projekt steht unter der MIT Lizenz - siehe [LICENSE](LICENSE) für Details.

## 👥 Team

- **Entwicklung**: Hochschule Bochum IT-Team
- **Design**: Basierend auf dem offiziellen BO-Design

## 🆘 Support

Bei Fragen oder Problemen:
1. Erstelle ein [Issue](https://github.com/DEIN-USERNAME/REPOSITORY-NAME/issues)
2. Oder kontaktiere das IT-Team der Hochschule Bochum

---

Made with ❤️ for Hochschule Bochum