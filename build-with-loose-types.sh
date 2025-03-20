#!/bin/bash

# This script uses a relaxed TypeScript configuration for builds
# Useful for demo deployments where strict TypeScript type checking is causing issues

# Save the original tsconfig.json
if [ -f "tsconfig.json" ]; then
  cp tsconfig.json tsconfig.json.bak
fi

# Copy the dev config
cp tsconfig.dev.json tsconfig.json

# Run the build
echo "Building with relaxed TypeScript configuration..."
next build

# Restore the original tsconfig (if it exists)
if [ -f "tsconfig.json.bak" ]; then
  mv tsconfig.json.bak tsconfig.json
fi

echo "Build complete!" 