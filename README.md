# 🗺️ GGR472 Project - Toronto Living Guide (Winter 2024)
By Yiwen Xie, Zhiyi Yuan, Huailun Jiang**  
🔗 Live Map: file:///Users/xieyiwen/Desktop/GitHub/GGR472-Group-project-1/index.html

---

## 📌 Overview
The **Toronto Living Guide Web Map** is designed to help newcomers explore Toronto’s urban infrastructure, including **affordable housing sites, police stations, health services, and subway lines**. Users can interact with the map by toggling layers, clicking on features for details, and even planning routes.

---

## 📁 Repository Contents

📌 **HTML Files**
- `index.html` → Main web map page (includes navbar, legend, filters, and interactive map).
- `about.html` → About page with project background, data sources.
- `toronto.html` → Help you to know more about Toronto City.

📌 **CSS File**
- `style.css` → Styling rules for the entire web map, including layout, colors, and typography.

📌 **JavaScript Files (Inside `/scripts` Folder)**
- `script.js` → Initializes the map, controls interactivity, and manages data loading.

📌 **Documentation**
- `README.md` → This file, describing the project structure, features, and usage.

---

## 🚀 How to Use

### 🔎 **Visualize**
#### ✅ Showing & Hiding Layers
- Use the **filter map view bar** to toggle different layers on or off.

#### ✅ Want More Info?
- Click on a map feature (e.g., subway stations, health services) to view additional details through pop-up.

#### ✅ Affordable Housing Buffer Zone
- Clicking on an **affordable housing site** generates a **1km buffer** highlighting **nearby services (subway stations, police facilities, health services, etc.)**.

---

## 🎨 Features

### 📍 **Design**
#### **1️⃣ Map Page**
- **Navbar:** Includes **map title**, links to "About" page, links to "Toornto" page and a **search bar** for locations.
- **Sidebar:** Contains **checkboxes to toggle layers** for easy customization.
- **Legend Box:** Displays the meaning of **colors & symbols** used in the map.
- **Filter Panel:** Allows users to filter specific datasets.

#### **2️⃣ About Page**
- Provides **project background**, data sources, and related links.

---

### 🛠️ **Interactivity**
- **✅ Layer Control:** Toggle layers on/off via checkboxes.
- **✅ Pop-ups:** Clicking on features reveals **detailed information**.
- **✅ Search Functionality:** **Locate specific places** with the **search bar**.
- **✅ Dynamic Buffer Zone:** **Automatically creates a 1km buffer** for housing sites.
- **✅ Export Feature:** Save the customized map **as an image (PNG format)**.

---