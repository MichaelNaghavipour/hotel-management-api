import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'tests/e2e',
  reporter: 'list',
  timeout: 30000, // 30 seconds per test
  expect: {
    timeout: 5000, // 5 seconds for expect conditions
  },
  retries: process.env.CI ? 2 : 0, // Retry failed tests twice in CI
  use: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
    trace: 'on-first-retry', // Collect trace on first retry
    screenshot: 'only-on-failure', // Take screenshots only on failure
    video: 'retain-on-failure', // Record video only on failure
    actionTimeout: 0, // No limit for actions
    navigationTimeout: 15000, // 15 seconds for navigation
    ignoreHTTPSErrors: true, // Useful for self-signed certs in CI
    headless: true, // Always run headless in CI
  },
  workers: process.env.CI ? 2 : undefined, // Limit workers in CI for stability
}); 