@echo off
setlocal

rem Obtiene la ruta absoluta de la carpeta actual
for %%A in ("%cd%") do set "Carpeta=%%~fA"

rem Obtiene el nombre de la carpeta actual
for %%A in ("%Carpeta%") do set "NombreCarpeta=%%~nxA"

rem Crea el nombre del archivo ZIP
set "ArchivoZip=%Carpeta%\%NombreCarpeta%.zip"

rem Elimina el archivo ZIP existente (si lo hay)
if exist "%ArchivoZip%" del "%ArchivoZip%"

rem Comprime los archivos en la carpeta (excluyendo archivos .bat y la carpeta .git)
"%ProgramFiles%\7-Zip\7z.exe" a -tzip "%ArchivoZip%" "%Carpeta%\*" -xr!*.bat -xr!.git\*

echo Archivo ZIP "%ArchivoZip%" creado exitosamente.

endlocal
