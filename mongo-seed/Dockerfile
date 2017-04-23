FROM mongo

COPY init.json /init.json

CMD mongoimport --host mongodb --db bookAPI --collection books --type json --file /init.json --jsonArray
