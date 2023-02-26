module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cfooi102i3mo4bujgbdg-a.ohio-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'shopgm_4q8l'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', '1PAhKp9VNtunw3SE8YlvX9pPuOTGcSzs'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
