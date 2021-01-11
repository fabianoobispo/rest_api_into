module.exports = {
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: '',
  database: 'api',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};

/*
banco em postgres
module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gerenciadoreventos',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
}; */
// estou usuando este banco em docker com o coando
// docker run --name gerenciadoreventos -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
// para criar migrations
// yarn sequelize migration:create --name=create-users
// para subir a migratiom
// yarn sequelize db:migrate
// para desativar a migration
// yarn sequelize db:migrate:undo ou :undoall para todas
