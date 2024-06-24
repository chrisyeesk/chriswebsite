server {
    listen 443 ssl;
    server_name chrisyeesk.com;

    ssl_certificate /etc/letsencrypt/live/chrisyeesk.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/chrisyeesk.com/privkey.pem;

    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers off;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-SHA:ECDHE-RSA-AES256-SHA;

    location / {
        proxy_pass http://localhost:3000; # Assuming Next.js is running on port 3000
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}