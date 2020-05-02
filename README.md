# STOCK GENIE - 5A PROJECT

## Requirements

- NodeJs
- [NAVER OpenAPI ID](https://github.com/naver/naver-openapi-guide)
- Django Key
- Python 3.6+ 
- VCC Build Tools (Windows)

## Backend

### LOAD Config

```python
python -m pip install -r requirements.txt
python -m pip install python-decouple
python manage.py makemigrations
python maange.py migrate
python manage.py loaddata predict/fixtures/stockinfo-data.json
```
명령어 입력시 DB에 데이터 들어감  (en: Insert data into application via application)

## Frontend

### START Server

```bash
cd backend/frontend/
npm install
npm start
``` 
