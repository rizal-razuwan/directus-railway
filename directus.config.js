module.exports = function (env) {
  return {
    // User inputs from railway starter button
    ADMIN_EMAIL: env.ADMIN_EMAIL,
    ADMIN_PASSWORD: env.ADMIN_PASSWORD,
    KEY: env.KEY,
    SECRET: env.SECRET,

    // Reference: https://docs.railway.app/deploy/exposing-your-app
    PORT: env.PORT,
    PUBLIC_URL: `http://0.0.0.0:${env.PORT}`,
    // Reference: https://docs.railway.app/develop/variables#railway-provided-variables

    // Database variables from Railway PostgreSQL Plugin
    // Reference: https://docs.railway.app/plugins/postgresql
    EXTENSIONS_AUTO_RELOAD: true,
    CORS_ENABLED: true,
    STORAGE_LOCATIONS: "local",
    STORAGE_LOCAL_ROOT: "./uploads",
    DB_CLIENT: "pg",
    DB_HOST: env.PGHOST,
    DB_PORT: env.PGPORT,
    DB_DATABASE: env.PGDATABASE,
    DB_USER: env.PGUSER,
    DB_PASSWORD: env.PGPASSWORD,
    WEBSOCKETS_ENABLED: false,
    EXTENSION_AUTORELOAD: true,
    MESSENGER_STORE: "redis",
    SYNCHRONIZATION_STORE: "redis",
    REDIS_HOST: env.REDISHOST,
    REDIS_PORT: env.REDISPASSWORD,
    CACHE_ENABLED: env.CACHE_ENABLED,
    CACHE_STORE: "redis",
    REDIS_USERNAME: env.REDISPASSWORD,
    REDIS_PASSWORD: env.REDISPASSWORD,
  };
};
