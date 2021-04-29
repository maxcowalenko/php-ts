# PHP Technical Specification

## Quick start

### Docker
```bash
git clone https://github.com/maxcowalenko/php-ts.git
cd php-ts
docker-compose up -d
docker-compose exec -T db bash -c 'mysqladmin -uroot -p"notSecureChangeMe" create php-ts && mysql php-ts -uroot -p"notSecureChangeMe"' < dump.sql
```
