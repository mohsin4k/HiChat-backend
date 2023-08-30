aws s3 sync s3://hichat-env-files/develop .
unzip env-file.zip
cp .env.develop .env
del .env.develop
setlocal
setlocal
set "REDIS_HOST=redis://%ELASTICACHE_ENDPOINT%:6379"
powershell -Command "(gc .env) -replace '^REDIS_HOST=.*$','REDIS_HOST=%REDIS_HOST%' | Out-File .env"
del .env
rename .env.develop .env
Compress-Archive .\env -DestinationPath env-file.zip
aws --region us-east-1 s3 cp env-file.zip s3://chattyapp-env-files/develop/
del /Q env-file.zip
