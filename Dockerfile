FROM recompose-base:latest

# Copy package files
COPY package*.json ./

# Install dependencies (including dev dependencies for testing)
RUN npm ci

# Copy source code and config files
COPY client/ ./client/
COPY server/ ./server/
COPY data/ ./data/
COPY vite.config.ts ./
COPY jest.config.js ./
COPY tsconfig.json ./
COPY playwright.config.ts ./
COPY components.json ./

# The base image already has scripts at /scripts/
# Set working directory
WORKDIR /app

# Default command
CMD ["/bin/sh", "/scripts/run-tests.sh"]


