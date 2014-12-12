# How to initalize a project using sequelize

### Make a new directory
```bash
mkdir NAME_OF_DIRECTORY
```

### Change in to the directory
```bash
cd NAME_OF_DIRECTORY
```

### Create the Database
```bash
createdb NAME_OF_THE_DATABASE
```

### Initialize with npm 
```bash
npm init
```

### Install Postgres and Sequelize with npm
```bash
npm install --save pg sequelize
```

### Initialize Sequelize
```bash
sequelize init
```

### Change your config file...
to look like this

```bash
{
  "development": {
    "database": "NAME_OF_DATABASE"
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "database": "NAME_OF_DATABASE"
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "database": "NAME_OF_DATABASE"
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
```

### Add table to the database

```bash
sequelize model:create --name NAME_OF_TABLE --attributes "LIST_OF_ATTRIBUTES"
```

### Run the migration
```bash
sequelize db:migrate
```
