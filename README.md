# Horse Racing App

This application simulates a horse race in real time. Each program contains 20 horses and 6 rounds. Rounds contain 10 horses from previously generated 20. Each round have different distances. Each horse has own conditon and speed score. This scores effects the lap time of horse. When you click generate program button, Round 1 will be start automatically. You can skip, pause and start round. When round was completed, next round will be start in 10 seconds. You can check round results from results section.

## Project Views

![image](https://github.com/user-attachments/assets/703f27e5-c846-4f0d-a3ff-0036a2e66b48)
![image](https://github.com/user-attachments/assets/46ee0d4e-17ee-4525-bb3a-acff49f53ec8)
![image](https://github.com/user-attachments/assets/95c43934-a9f0-4852-89a6-b9b72cd732a8)
![image](https://github.com/user-attachments/assets/dc2769ad-16c7-4df1-ae54-23a7ff459338)
![image](https://github.com/user-attachments/assets/ec8320e6-2211-478c-9463-3a80e9097ed1)

## Tech Stack

 - [Vue3](https://vuejs.org)
 - [Vite](https://vitejs.dev/)
 - [PrimeVue](https://primevue.org/)
 - [Pinia](https://pinia.vuejs.org/)
 - [Vue-Router](https://router.vuejs.org/)
 - [Vitest](https://vitest.dev/)
 - [Playwrigh](https://playwright.dev/)
 - [Vue-i18n](https://vue-i18n.intlify.dev/)
 - [Tailwind CSS](https://tailwindcss.com/)

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
### Run on Docker

```sh
npm run docker
```

### Remove from Docker

```sh
npm run docker-remove
```

### Environment Variables

```sh
VITE_CONDITION_MIN=1
VITE_CONDITION_MAX=100
VITE_SPEED_MIN=200
VITE_SPEED_MAX=250
VITE_AUTO_ROUND_START_COUNTER=10
VITE_NUMBER_OF_HORSES_RACE=20
VITE_NUMBER_OF_HORSES_ROUND=10
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
