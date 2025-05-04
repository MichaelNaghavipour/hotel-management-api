# Room Occupancy API

A Node.js (Express, TypeScript) API for managing hotel room occupancy, travel groups, and travellers. Includes E2E API tests with Playwright.

## Setup

```bash
npm install
```

## Run in Development

```bash
npm run dev
```

## Build and Start

```bash
npm run build
npm start
```

## Health Check

GET http://localhost:3000/health

## Run Unit Tests

```bash
npm test:unit
```

## Run E2E Tests (Playwright)

```bash
npm run test:e2e
```

## Project Structure

- `src/` - API source code
- `tests/` - Unit, integration, and E2E tests

---
 

## API Endpoints Examples

### Get all rooms to be occupied on 2024-06-01
```
GET /rooms?date=2024-06-01
```

### Get all rooms in a travel group
```
GET /groups/A123B1/rooms
```

### Get individual room
```
GET /rooms/1001
```

### Move traveller from one room to another
```
POST /rooms/1001/move-traveller
Body: { "travellerId": "t1", "toRoomCode": "1002" }
``` 