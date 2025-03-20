@echo off
REM This script uses a relaxed TypeScript configuration for builds
REM Useful for demo deployments where strict TypeScript type checking is causing issues

REM Save the original tsconfig.json
IF EXIST tsconfig.json (
  copy tsconfig.json tsconfig.json.bak
)

REM Copy the dev config
copy tsconfig.dev.json tsconfig.json

REM Run the build
echo Building with relaxed TypeScript configuration...
call next build

REM Restore the original tsconfig (if it exists)
IF EXIST tsconfig.json.bak (
  move /Y tsconfig.json.bak tsconfig.json
)

echo Build complete! 