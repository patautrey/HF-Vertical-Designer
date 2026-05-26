# HF Vertical Designer

The **HF Vertical Designer** is a browser‑based modeling tool for portable and fixed HF vertical antennas.  
It evaluates antenna geometry, transformer selection, feedline behavior, SWR, ERP, and radiation patterns  
across all major HF bands (80m–6m).

This project is inspired by the field‑proven work of Walt (K4OGO) and the Coastal Waves & Wires methodology.

## 📁 Project Structure

HF-Vertical-Designer/
│
├── index.html                     # Main calculator UI + engine
│
├── docs/                          # Documentation &  reference
│   ├── quickstart.html
│   ├── user-manual.html
│   ├── rybakov-guide.html
│   ├── efhw-guide.html
│   ├── unun-transformers.html
│   └── theory.html
│
├── tools/                         # Mini calculators & utilities
│   ├── wire-length-calculator.html
│   ├── feedline-loss-tool.html
│   └── height-foldover-tool.html
│
└── assets/                        # (Optional) shared CSS/JS/images

## 🚀 Features

### Antenna Modeling
- Straight, foldover, and helical geometry  
- Effective electrical height calculation  
- Counterpoise and radial system modeling  
- Transformer/UNUN selection (1:1, 4:1, 9:1, 49:1, 64:1)

### Band Capability Engine
- SWR (no tuner)  
- SWR (with tuner)  
- Band usability classification  
- ERP estimation per band

### Feedline Modeling
- LMR‑400, RG‑213, RG‑8X, RG‑58, ladder line  
- Loss interpolation between 30–50 MHz  
- Electrical length calculation

### Radiation Patterns
- Azimuth  
- Elevation  
- Donut projection (3D flattened)

## 📚 Documentation

All documentation lives in the `/docs` folder:

- Quick Start Guide  
- User Manual  
- Rybakov Guide  
- EFHW Guide  
- Transformer Guide  
- Theory of Operation

## 🧰 Tools

Mini calculators in `/tools`:

- Wire Length Calculator  
- Feedline Loss Tool  
- Height & Foldover Geometry Tool

## 🛠️ Technology

- Pure HTML/CSS/JavaScript  
- No frameworks required  
- Runs entirely in the browser  
- Easy to deploy on GitHub Pages or any static host

## 📦 Deployment

To deploy on GitHub Pages:

1. Push this repository to GitHub  
2. Go to **Settings → Pages**  
3. Select the `main` branch and `/root`  
4. Your site will be live in seconds

## 📝 License

This project is open for personal and educational use.  
Commercial use requires permission.

## ✨ Credits

- Field methodology inspired by Walt (K4OGO)  
- Modeling logic based on practical HF vertical experimentation  
- Designed and engineered with the help of Microsoft Copilot
