# Super Mario Quiz

A Next.js quiz app themed around Super Mario, built with styled-components.

## Features

- Client-side quiz flow with loading and results screens
- Styled-components theming and global styles
- Responsive layout for mobile and desktop

## Tech Stack

- Next.js
- React
- styled-components

## Requirements

- Node.js 18+ (recommended)
- Yarn 1.x

## Setup

```bash
yarn install
```

## Development

```bash
yarn dev
```

The app runs at <http://localhost:3000>

## Production

```bash
yarn build
yarn start
```

## Scripts

- `yarn dev` - Run the development server (webpack)
- `yarn build` - Build for production
- `yarn start` - Start the production server
- `yarn lint` - Run ESLint

## Data

Quiz data lives in `db.json`.

## Notes

- This project uses `styled-components` v6 with `@emotion/is-prop-valid` to avoid invalid DOM props.
- A `resolutions` pin is used for `postcss` to address a known security advisory.
