# azgh • Geräte-Website (Vorlage)

Dies ist ein fertiges, statisches Template für Ihre GitHub Pages-Seite **youssefazgh.github.io/azgh** im Aufbau ähnlich zur Referenzseite. 
Die QR-Codes sind **nicht** in der Website eingebettet – stattdessen liegen sie als PNGs separat bei.

## Struktur
```
/index.html
/device.html
/assets/css/styles.css
/assets/js/app.js
/data/devices.json
```
- `index.html`: Übersicht aller Geräte (suchbar).
- `device.html`: Detailseite, aufrufbar per `?id=XYZ` (z. B. `device.html?id=042`).
- `data/devices.json`: Datenquelle (aktuell 900 Platzhaltergeräte).
- `assets/*`: Styling & Logik.

## Deep Links / QR-Ziele
Jedes Gerät hat bereits eine eindeutige Seite unter:
```
https://youssefazgh.github.io/azgh/device.html?id=XYZ
```
(z. B. `...id=001`, `...id=002`, …, `...id=900`).  
**Alle generierten QR-Codes** verweisen genau auf diesen individuellen Link.

## Deployment (GitHub Pages)
1. Laden Sie den Inhalt dieses Ordners in das Repository `azgh/azgh.github.io` hoch (Root).
2. Aktivieren Sie GitHub Pages (falls noch nicht aktiv) – Quelle: Branch `main` / Root. 
3. Öffnen Sie `https://youssefazgh.github.io/azgh/`.

## QR-Codes
Im separaten ZIP **azgh_qr_codes.zip** finden Sie PNG-Dateien `device-XYZ.png`.
- Auflösung: 256×256 px
- Inhalt: `https://youssefazgh.github.io/azgh/device.html?id=XYZ`

## Anpassen
Bearbeiten Sie `data/devices.json` (Name, Ort, Beschreibung, Status). Die Seiten lesen die Daten zur Laufzeit ein.
