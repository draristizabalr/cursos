# Gemini Project Context: pokemon-ssr

## About This Project

This is an Angular application with Server-Side Rendering (SSR) enabled. The project appears to be a Pokédex-style application, displaying information about Pokémon. It uses Express for the server and TailwindCSS for styling.

## Technology Stack

- **Framework**: Angular 20.1.0
- **Server**: Express
- **Styling**: TailwindCSS
- **Package Manager**: bun/npm

## Key Commands

- **Install Dependencies**: `bun install` or `npm install`
- **Development Server**: `npm start` (runs `ng serve`)
- **Run Tests**: `npm test` (runs `ng test`)
- **Build for Production**: `npm run build` (this also runs a prerender script)
- **Run Production Server (SSR)**: `npm run serve:ssr:pokemon-ssr`

## Project Structure Overview

- `src/app/`: Contains the main application logic.
  - `src/app/pages/`: Main page components (e.g., pokemon list, pokemon detail).
  - `src/app/pokemons/`: Feature module for Pokémon-related components, services, and interfaces.
    - `src/app/pokemons/services/pokemons.service.ts`: Service for fetching Pokémon data.
    - `src/app/pokemons/interfaces/`: TypeScript interfaces for Pokémon data structures.
  - `src/app/shared/`: Shared components, like the navbar.
- `server.ts`: Entry point for the SSR server.
- `scripts/prerender-routes.js`: Script to generate static routes for prerendering.
