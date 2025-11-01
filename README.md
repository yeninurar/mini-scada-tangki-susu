# Mini SCADA Web - Monitoring Tangki Susu Cimory

Sistem monitoring mini berbasis web untuk tangki susu di Cimory Dairyland.

## Fitur
- 📊 Monitoring realtime suhu (0-70°C)
- 📉 Monitoring level tangki (0-100%)
- 🚦 Indikator status (Normal/Warning/Danger)
- 📈 Visualisasi grafik historical data
- 🎮 Kontrol simulasi (Start/Stop/Reset)

## Tech Stack
- Backend: FastAPI + SQLite + WebSocket
- Frontend: React + Vite + TailwindCSS
- Charts: Recharts/Chart.js
- Docker & Docker Compose

## Quick Start
```bash
# Clone repository
git clone https://github.com/username/mini-scada-tangki-susu.git

# Start dengan Docker Compose
docker-compose up
