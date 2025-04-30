FROM python:3.10.17-bullseye
WORKDIR /app
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt
COPY . /app/
EXPOSE 8080
CMD ["uvicorn", "spaceship.main:app", "--host=0.0.0.0", "--port=8080"]