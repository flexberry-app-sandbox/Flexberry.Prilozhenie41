docker build --no-cache -f SQL\Dockerfile.PostgreSql -t prilozhenie_41/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t prilozhenie_41/app ../..
