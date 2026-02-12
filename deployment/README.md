# OhCampus Counselor Platform - Deployment Package

## Contents
```
deployment/
├── frontend/          # React production build (static files)
├── backend/
│   ├── server.py      # FastAPI application
│   ├── requirements.txt
│   └── .env.example   # Environment variables template
├── nginx.conf         # Nginx configuration
├── ohcampus-backend.service  # Systemd service
├── deploy.sh          # Automated deployment script
└── README.md          # This file
```

## Server Requirements
- Ubuntu 20.04+ or similar Linux
- Python 3.9+
- Node.js 18+ (only for development)
- MongoDB 5.0+
- Nginx
- SSL certificate for counselor.ohcampus.com

## Quick Deployment

### 1. Upload files to server
```bash
scp -r deployment/* user@your-server:/tmp/ohcampus/
```

### 2. Run deployment script
```bash
cd /tmp/ohcampus
sudo ./deploy.sh
```

### 3. Configure environment
Edit `/var/www/counselor.ohcampus.com/backend/.env`:
```
MONGO_URL=mongodb://localhost:27017
DB_NAME=ohcampus_counselor
JWT_SECRET=your-secure-random-secret-key
CORS_ORIGINS=https://counselor.ohcampus.com
```

### 4. Setup SSL (Let's Encrypt)
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d counselor.ohcampus.com
```

### 5. Seed Database
```bash
curl -X POST https://counselor.ohcampus.com/api/seed
```

## Manual Deployment

### Frontend (Static Files)
Copy contents of `frontend/` to your web server's public directory.
Configure nginx to serve from this directory with `try_files $uri /index.html`.

### Backend (FastAPI)
1. Create virtual environment: `python3 -m venv venv`
2. Install dependencies: `pip install -r requirements.txt`
3. Create `.env` file with your configuration
4. Run: `uvicorn server:app --host 0.0.0.0 --port 8001`

## Default Credentials (After Seeding)
- **Admin:** admin@ohcampus.com / admin123
- **Counselor:** counselor@ohcampus.com / counselor123

## Troubleshooting

### Check backend status
```bash
sudo systemctl status ohcampus-backend
sudo journalctl -u ohcampus-backend -f
```

### Check nginx logs
```bash
sudo tail -f /var/log/nginx/error.log
```

### Test API
```bash
curl https://counselor.ohcampus.com/api/colleges
```
