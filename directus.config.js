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
    STORAGE_CLOUDINARY_CLOUD_NAME: env.STORAGE_CLOUDINARY_CLOUD_NAME || "",
    STORAGE_CLOUDINARY_API_KEY: env.STORAGE_CLOUDINARY_API_KEY || "",
    STORAGE_CLOUDINARY_API_SECRET: env.STORAGE_CLOUDINARY_API_SECRET || "",
    STORAGE_CLOUDINARY_ACCESS_MODE:
      env.STORAGE_CLOUDINARY_ACCESS_MODE || "public",
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
