@echo off

REM Extract version number from package.json
FOR /F "tokens=* USEBACKQ" %%F IN (`node -p "require('./package.json').version"`) DO (
    SET VERSION=%%F
)

REM Build Docker image
docker build -t fsd-react-%VERSION% -f docker/Dockerfile .
