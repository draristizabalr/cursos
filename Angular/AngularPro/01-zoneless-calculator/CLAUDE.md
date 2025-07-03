# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a zoneless Angular 20 calculator application demonstrating modern Angular features including signal-based state management, standalone components, and zoneless change detection. The app is built with TypeScript and styled with Tailwind CSS.

## Common Commands

### Development
- `npm start` or `ng serve` - Start development server on http://localhost:4200
- `ng serve --open` - Start dev server and open browser automatically
- `npm run watch` - Build in watch mode for development

### Building
- `npm run build` - Production build (outputs to dist/)
- `ng build --configuration development` - Development build

### Testing
- `npm test` - Run unit tests once (no watch, no progress)
- `npm run test:coverage` - Run tests with coverage report
- `ng test` - Run tests in watch mode with progress

### Code Generation
- `ng generate component component-name` - Generate new component
- `ng generate service service-name` - Generate new service

## Architecture

### Core Architecture Features
- **Zoneless Change Detection**: Uses `provideZonelessChangeDetection()` instead of Zone.js
- **Standalone Components**: All components are standalone, no NgModules
- **Signal-based State**: Uses Angular signals for reactive state management
- **Path Aliases**: TypeScript paths configured with `@/*` pointing to `src/app/*`

### Project Structure
```
src/app/
├── calculator/
│   ├── components/
│   │   ├── calculator/           # Main calculator logic component
│   │   └── calculator-button/    # Reusable button component
│   ├── services/
│   │   └── calculator.service.ts # Core calculator business logic
│   └── views/
│       └── calculator-view/      # Route-level view component
├── app.config.ts                 # Application configuration
├── app.routes.ts                 # Route definitions
└── app.ts                        # Root component
```

### Key Design Patterns

**Signal-Based Service**: `CalculatorService` uses signals for reactive state:
- `resultText` - Current display value
- `subResultText` - Previous operand 
- `lastOperator` - Last selected operator

**Component Communication**: 
- Calculator service injected into components using `inject()`
- Button component uses `output()` for click events
- Calculator component uses `computed()` to derive reactive values

**Keyboard Support**: Calculator component handles keyboard events via host listener `(document:keyup)` with key mapping for calculator operations.

**Lazy Loading**: Routes use `loadComponent()` for code splitting.

## Development Notes

### Styling Framework
- Uses Tailwind CSS 4.x with PostCSS
- Component styles can use both CSS files and Tailwind classes
- Host bindings used for conditional styling in calculator-button component

### Testing Setup
- Karma + Jasmine for unit tests
- Custom karma config at `karma.config.ts`
- Test files follow `*.spec.ts` naming convention

### TypeScript Configuration
- Strict mode enabled with comprehensive compiler options
- Angular compiler options enforce strict templates and injection parameters
- Uses ES2022 target with module preservation

### State Management
The calculator uses a service-based approach with signals rather than a state management library. All calculator logic is centralized in `CalculatorService.constructNumber()` method which handles:
- Number input validation and formatting
- Operator precedence and chaining
- Special operations (clear, backspace, percentage, sign toggle)
- Decimal point validation
- Calculation execution

When adding features or fixing bugs, ensure the signal-based reactivity is maintained and component communication follows the established patterns.