# 🌳 Smart Apple Orchard Management System

## Overview
A comprehensive solution for automated orchard management utilizing AI-powered image analysis, blockchain technology, and autonomous UAV drones.

## 🚀 Features

### **Autonomous UAV Drone System**
* High-resolution RGB camera monitoring
* Multispectral and thermal imaging
* GPS-guided precision navigation
* LiDAR-based obstacle detection
* Real-time data transmission

### **Advanced AI Image Analysis**
* Early pest detection using Fine Tuned Yolov8 models
* Disease identification in fruits, flowers, and leaves
* Yield prediction

### **IoT Integration**
* Soil health monitoring
* Weather station data integration
* Real-time environmental tracking

### **AI Voice Assistant**
* Multilingual support
* RAG-powered intelligent responses
* Voice and text input capabilities
* Farm management suggestions

### **Blockchain-Enabled Marketing**
* Virtual orchard tours
* Product traceability
* Transparent supply chain
* Digital certification

## 🛠️ Tech Stack

### Frontend
* React + Vite
* TailwindCSS

### Backend
* Flask (Python)
* Express.js (Node.js)
* Supbase (PostgreSQL)
* Pinecone/Chroma DB (Vector Storage)

### AI/ML
* PyTorch
* OpenCV
* YOLOv8 & Microsoft Resnet90
* Weights & Biases (Model training)

### Blockchain
* Ethereum blokchain (Sepolia Testent)
* Hardhat with ethers.js 

## 📋 Prerequisites
* Python 3.10.12
* Node.js 16+
* PostgreSQL 13+

## 🔧 Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/4darsh-Dev/iiituna_orchardeyes.git
cd iiituna_orchardeyes
```

### 2. Set up Python environment
```bash
python -m venv myenv
source myenv/bin/activate  # On Windows: .\myenv\Scripts\activate
pip install -r requirements.txt
```

### 3. Install frontend dependencies
```bash
cd frontend
npm i
```

### 4. Install mobile app dependencies
```bash
cd mobile-app
npm i
```

### 5. Set up environment variables
```bash
cp .env.example .env
# Update .env with your configurations
```


## 🚀 Running the Application

### 1. Start backend services
```bash
# Start Flask server
python run.py

# Start Express server
node app.js
```

### 2. Launch frontend application
```bash
cd frontend
npm run dev
```

## 📞 Support
For support, email **vkadarsh.maurya@gmail.com**