#!/bin/bash
set -e

echo "=== OhCampus Counselor Platform Deployment ==="
echo ""

# Configuration
DEPLOY_DIR="/var/www/counselor.ohcampus.com"
BACKEND_DIR="$DEPLOY_DIR/backend"
FRONTEND_DIR="$DEPLOY_DIR/frontend"

# Create directories
echo "1. Creating directories..."
sudo mkdir -p $BACKEND_DIR
sudo mkdir -p $FRONTEND_DIR

# Deploy Frontend
echo "2. Deploying frontend..."
sudo cp -r frontend/* $FRONTEND_DIR/
sudo chown -R www-data:www-data $FRONTEND_DIR

# Deploy Backend
echo "3. Deploying backend..."
sudo cp backend/server.py $BACKEND_DIR/
sudo cp backend/requirements.txt $BACKEND_DIR/

# Create Python virtual environment
echo "4. Setting up Python environment..."
cd $BACKEND_DIR
sudo python3 -m venv venv
sudo $BACKEND_DIR/venv/bin/pip install -r requirements.txt

# Create .env file (IMPORTANT: Edit this with your actual values!)
if [ ! -f "$BACKEND_DIR/.env" ]; then
    echo "5. Creating .env file (EDIT THIS!)..."
    sudo cp /path/to/deployment/backend/.env.example $BACKEND_DIR/.env
    echo "⚠️  IMPORTANT: Edit $BACKEND_DIR/.env with your actual values!"
fi

sudo chown -R www-data:www-data $BACKEND_DIR

# Install systemd service
echo "6. Installing systemd service..."
sudo cp ohcampus-backend.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable ohcampus-backend
sudo systemctl start ohcampus-backend

# Install nginx config
echo "7. Configuring nginx..."
sudo cp nginx.conf /etc/nginx/sites-available/counselor.ohcampus.com
sudo ln -sf /etc/nginx/sites-available/counselor.ohcampus.com /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx

echo ""
echo "=== Deployment Complete ==="
echo ""
echo "Next steps:"
echo "1. Edit $BACKEND_DIR/.env with your MongoDB URL and JWT secret"
echo "2. Configure SSL certificates in nginx.conf"
echo "3. Seed the database: curl -X POST https://counselor.ohcampus.com/api/seed"
echo "4. Test: https://counselor.ohcampus.com"
