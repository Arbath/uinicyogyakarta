# UINIC Yogyakarta Website 🎉

UINIC (Universal Informatics Competition) Yogyakarta adalah platform web untuk event informatika tahunan yang diselenggarakan di Yogyakarta. Website ini dibangun menggunakan Django framework, Tailwind CSS, dan MySQL database.

## 🚀 Fitur Utama

- Manajemen event dan kompetisi
- Pendaftaran peserta
- Dashboard admin
- Integrasi Google Forms dan Google Maps

## ⚙️ Tech Stack

- **Backend**: Django 4.2
- **Frontend**: Tailwind CSS
- **Database**: MySQL
- **Authentication**: Django Authentication System
- **Deployment**: Pythonanywhere

## 📋 Prasyarat

Sebelum menjalankan project ini, pastikan sistem Anda telah memiliki:

- Python 3.10
- Node.js & NPM
- MySQL Server
- pip (Python package manager)

## 🛠️ Instalasi


1. Buat virtual environment
```bash
python -m venv venv
```

2. Aktifkan virtual environment
```bash
source venv/bin/activate  # Linux/Mac
# atau
venv\Scripts\activate  # Windows
```

3. Clone repository
```bash
git clone https://github.com/ArbathAbdurrahman/uinicyogyakarta.git
cd uinic-yogyakarta
```

4. Install dependencies
```bash
pip install -r requirements.txt
npm install
```

5. Setup database
```bash
# Buat database MySQL
mysql -u root -p
CREATE DATABASE dbuinic;

# Migrate database
python manage.py migrate
```

6. Buat file .env
```bash
cp .env.example .env
# Edit file .env sesuai konfigurasi lokal
```

7. Jalankan development server
```bash
python manage.py runserver
```

## 🎨 Kompilasi Tailwind CSS

```bash
# Development
npm run watch

# Production
npm run build
```

## 👥 Kontribusi

1. Fork repository ini
2. Buat branch baru (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📝 Lisensi

Distributed under the MIT License. See `LICENSE` for more information.

## 📧 Kontak 

[@arbath_21](https://www.instagram.com/arbath_21/)

## Pengembang

Project Manager - [@arbath_21](https://www.instagram.com/arbath_21/)
Developer - [@arbath_21](https://www.instagram.com/arbath_21/)
Project Link: [https://github.com/ArbathAbdurrahman/uinicyogyakarta](https://github.com/ArbathAbdurrahman/uinicyogyakarta)

## 🙏 Acknowledgments

* Django Documentation
* Tailwind CSS
* Contributor Covenant
* Semua kontributor yang telah membantu project ini

---
Made with ❤️ for UINIC Yogyakarta
