@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo Инициализация git репозитория...
if not exist .git (
    git init
)

echo Добавление remote репозитория...
git remote remove origin 2>nul
git remote add origin https://github.com/DIONik2611/Akz.git

echo Добавление всех файлов...
git add .

echo Создание commit...
git commit -m "Обновление цветовой схемы: замена зеленой темы на фиолетовую" 2>nul || git commit -m "Update color scheme"

echo Отправка на GitHub...
git branch -M main
git push -u origin main

echo Готово!
pause

