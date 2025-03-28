# GGR472 Project - T.O. Life Map: Toronto Living Guide 🗺️🌆  
**By Huailun Jiang, Yiwen Xie, Kevin Yuan**  
Course: GGR472 | Instructor: Professor Lendsey Smith  

🔗 **Live Web Map:** [https://kevinyuanzy.github.io/GGR472-Group-project](https://kevinyuanzy.github.io/GGR472-Group-project)

---

## 📌 Overview  

**T.O. Life Map** is an interactive web-based mapping tool developed for the GGR472 course. The project is designed to provide newcomers to Toronto with a spatial guide to key urban infrastructure and resources. It focuses on critical aspects of city life, including affordable housing, public health services, policing, and homicide hotspots.  

Users can interactively explore these datasets through map layers, search tools, pop-ups, and filtering functions. The aim is to offer a user-friendly, visually intuitive platform for understanding spatial inequality and urban accessibility across Toronto.  

---

## 🧱 Repository Structure  

📁 **HTML Files**  
- `index.html` → Main web map interface with navbar, legend, filters, and interactive map.  
- `about.html` → Project background, objectives, and data source references.  
- `toronto.html` → Contextual introduction to the City of Toronto.  

🎨 **CSS File**  
- `style.css` → Stylesheet for overall layout, color scheme, and typography.  

📜 **JavaScript Files (`/scripts` folder)**  
- `script.js` → Initializes the map, loads layers, manages user interaction, and handles spatial logic.  

📝 **Documentation**  
- `README.md` → This file, with project description, usage guide, and structure overview.

---

## 🚀 How to Use  

### 🔎 **Visualize Urban Data**  
- ✅ **Toggle Layers**: Use the sidebar filter panel to show or hide specific map layers.  
- ✅ **Feature Pop-ups**: Click on a map feature (e.g., subway station, health facility) for detailed information.  
- ✅ **Affordable Housing Buffer Zone**: Clicking on an affordable housing site triggers a **1km buffer zone**, visualizing nearby key services (e.g., subway, police, health centers).  

### 🧭 **Navigation Tools**  
- 🔍 **Search Bar**: Locate specific places using the top navigation bar.  
- 🖼️ **Export Map**: Download your customized map as a PNG image for personal use or sharing.

---

## 🎨 Features  

### 🗺️ **Map Interface Design**  
- **Navbar**: Includes map title, page links, and location search bar.  
- **Sidebar**: Layer selection via checkboxes for flexible exploration.  
- **Legend Box**: Visual reference for map symbols and colors.  
- **Filter Panel**: Dynamic filtering by category or dataset.

### 🛠️ **Interactive Elements**  
- ✅ Real-time layer control and visualization  
- ✅ Clickable pop-ups with attribute data  
- ✅ Buffer zone generation for proximity analysis  
- ✅ Export map as image  

---

## 📊 Data Sources  

- [Toronto Open Data Portal](https://open.toronto.ca/) – Affordable housing, subway, health, and police datasets  
- Toronto Police Services – Crime and homicide data  
- Toronto Public Health – Community health service locations  

---

## 🔧 Built With  

- **Leaflet.js** – Interactive mapping library  
- **HTML/CSS/JavaScript** – Core frontend technologies  
- **GeoJSON** – Spatial data format  
- **GitHub Pages** – Web hosting platform  

---

## 🖼️ Preview  

![T.O. Life Map Screenshot](./screenshots/map-preview.png)  
*Example view showing active layers, pop-ups, and buffer zone.*

---

## 📬 Get Involved  

Explore Toronto like never before with the **T.O. Life Map**!  
Have feedback, ideas, or want to collaborate? We’d love to hear from you.  
