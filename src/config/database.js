module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'bancotest',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};

// estou usuando este banco em docker com o coando
// docker run --name postgresbarber -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
// para criar migrations
// yarn sequelize migration:create --name=create-users
// para subir a migratiom
// yarn sequelize db:migrate
// para desativar a migration
// yarn sequelize db:migrate:undu ou :unduall para todas
