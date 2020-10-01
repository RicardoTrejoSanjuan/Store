<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

# API - Store

## Environment Variables

The following environment variables are required

```
export MDB_USER=testuser
export MDB_PASS=4APWK5m^CuT8
export MDB_HOST=guiltyspark.qsbai.mongodb.net
export MDB_DATABASE=RoomieTest
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

Api is running at <a href="http://localhost:3001">http://localhost:3001</a>


## Endpoints 

### Get

http://localhost:3001/product

### Create

http://localhost:3001/product/create

```Request
{
    "NameProduct": "Name",
    "Category": "Limpieza",
    "Description": "Description",
    "ProductQuantity": 10,
    "Status": true
}
```

### Remove

http://localhost:3001/product/delete/:idproduct

### Edith 

http://localhost:3001/product/update/:idproduct

```Request
{
    "NameProduct": "piña",
    "Category": "Limpieza",
    "Description": "jugos",
    "ProductQuantity": 15,
    "Status": true
}
```
