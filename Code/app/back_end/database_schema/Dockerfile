FROM mysql:latest

ENV MYSQL_DATABASE=word_predictor_schema \
    MYSQL_ROOT_PASSWORD=root_1

ADD init.sql /database_schema

EXPOSE 3306