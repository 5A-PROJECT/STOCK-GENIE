# STOCK GENIE - 5A PROJECT

## Requirements

- NodeJs
- [NAVER OpenAPI ID](https://github.com/naver/naver-openapi-guide)
- Django Key
- Python 3.6+
- VCC Build Tools (Windows)

## Documents

1. [ERD](https://www.notion.so/5A-Backend-ERD-13c916b766a0432cbab2c143851fe987)
2. [API Document](https://www.notion.so/API-c3f5d3b189df4a67bae39e330a34a487)
3. [Minutes](https://www.notion.so/f96e5709316f43f0aa67c3a5bd0e2a8e)
4. [Information & QnA](https://www.notion.so/5a5468c55f124daea044525777c9e740)

## Backend

### LOAD Config

```python
python -m pip install -r requirements.txt
python manage.py makemigrations
python maange.py migrate
python manage.py loaddata predict/fixtures/stockinfo-data.json
```

명령어 입력시 DB에 데이터 들어감 (en: Insert data into application via application)

## Frontend

### START Server

```bash
cd backend/frontend/
npm install
npm start
```
