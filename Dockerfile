# Explicitly specify a Directus version to use on Railway
FROM directus/directus:10.10.4

USER root
RUN corepack enable
USER node

# Installing contributed/custom extensions through npm on Railway
RUN pnpm install directus-extension-computed-interface && pnpm install directus-extension-upsert && pnpm install directus-extension-wpslug-interface && pnpm install pg && pnpm install directus-extension-api-docs && pnpm install directus-extension-api-viewer

# Uncomment this if you would like to install contributed/custom extensions through the extensions folder on Railway
COPY ./extensions /directus/extensions

COPY ./directus.config.js /directus/config.js