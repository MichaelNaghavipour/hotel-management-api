import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'tests/e2e',
  reporter: [['list'], ['html', { outputFolder: 'playwright-report', open: 'never' }]],
  timeout: 30000, // 30 seconds per test
  expect: {
    timeout: 5000, // 5 seconds for expect conditions
  },
  retries: process.env.CI ? 1 : 0, // Retry failed tests once in CI
  use: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
    trace: 'on-first-retry', // Collect trace on first retry
    screenshot: 'only-on-failure', // Take screenshots only on failure
    video: 'retain-on-failure', // Record video only on failure
    actionTimeout: 5000, // 5 seconds for actions
    navigationTimeout: 8000, // 8 seconds for navigation
    ignoreHTTPSErrors: true, // Useful for self-signed certs in CI
    headless: true, // Always run headless in CI
  },
  workers: process.env.CI ? undefined : undefined, // Max workers in CI (default: all available cores)
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
}); 