@echo off
echo === Subiendo cambios DMC Checklist ===
echo.

REM 1. Verificar estado
git status
echo.
pause

REM 2. Agregar todos los cambios
echo Agregando archivos...
git add .
echo ✓ Archivos agregados
echo.
pause

REM 3. Hacer commit
echo Creando commit...
git commit -m "feat: Dashboard básico, autenticación Firebase y logo temporal"
echo ✓ Commit creado
echo.
pause

REM 4. Subir a GitHub
echo Subiendo a GitHub...
git push origin main
echo.
echo ✓ Cambios subidos exitosamente
echo.
echo URL: https://github.com/guillermotugnoli21-star/dmc-checklist
echo.
pause