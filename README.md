# qa-automation-playground-
Suite de pruebas automatizadas con Playwright y TypeScript sobre
varios sitios de práctica: flujos E2E, retos de interfaz,
responsive, APIs y mocking.
## Qué cubre
- SauceDemo: login parametrizado, carrito y checkout
- the-internet y demoqa: iframes, alertas, uploads, tablas
- playwright.dev: comportamiento en desktop y móvil
- Automation Exercise: tests de API
- demo.playwright.dev: mocking de red
## Estructura
- `pages/`: Page Objects
- `api-clients/`: clientes de API
- `tests/`: tests (`tests/data/`: datos de prueba)
- `config/urls.ts`: URLs de los sitios
## Instalación
1. `git clone https://github.com/TU-USUARIO/qa-automation-playground.git`
2. `cd qa-automation-playground`
3. `npm ci`
4. `npx playwright install`
5. `cp .env.example .env` y completa los valores
## Cómo correr los tests
- Toda la suite: `npx playwright test`
- Solo APIs: `npx playwright test --project=api`
- Modo UI: `npx playwright test --ui`
- Reporte: `npx playwright show-report`
By: Vanessa Piragine V.
