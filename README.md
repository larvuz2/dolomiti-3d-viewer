# Dolomiti 3D Viewer

An interactive 3D viewer for Tre Cime di Lavaredo in the Dolomites, built with [Cesium](https://cesium.com/) and [Mapbox](https://www.mapbox.com/).

## Features

- 3D terrain visualization using Cesium World Terrain
- High-resolution satellite imagery from Mapbox
- Automatic camera positioning over Tre Cime di Lavaredo
- Smooth terrain navigation
- Realistic lighting effects

## Prerequisites

- Node.js and npm installed
- Cesium Ion account (for terrain data)
- Mapbox account (for satellite imagery)

## Setup

1. Clone the repository:
```bash
git clone https://github.com/larvuz2/dolomiti-3d-viewer.git
cd dolomiti-3d-viewer
```

2. Install dependencies:
```bash
npm install
```

3. Update tokens in `src/main.js`:
- Replace `Cesium.Ion.defaultAccessToken` with your Cesium Ion token
- Replace `mapboxToken` with your Mapbox access token

## Development

Run the development server:
```bash
npx vite --open
```

## Production Build

Create a production build:
```bash
npx vite build
```

The build output will be in the `dist/` directory.

## License

MIT

## Credits

- [Cesium](https://cesium.com/) - 3D mapping platform
- [Mapbox](https://www.mapbox.com/) - Satellite imagery provider 