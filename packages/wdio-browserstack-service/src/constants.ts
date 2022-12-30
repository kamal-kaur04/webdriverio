import type { BrowserstackConfig } from './types'

export const BROWSER_DESCRIPTION = [
    'device',
    'os',
    'osVersion',
    'os_version',
    'browserName',
    'browser',
    'browserVersion',
    'browser_version'
] as const

export const VALID_APP_EXTENSION = [
    '.apk',
    '.aab',
    '.ipa'
]

export const DEFAULT_OPTIONS: Partial<BrowserstackConfig> = {
    setSessionName: true,
    setSessionStatus: true,
    testObservability: true
}

export const DATA_ENDPOINT = 'https://collector-observability.browserstack.com'
export const DATA_EVENT_ENDPOINT = 'api/v1/event'
export const DATA_BATCH_ENDPOINT = 'api/v1/batch'
export const DATA_SCREENSHOT_ENDPOINT = 'api/v1/screenshots'
export const DATA_BATCH_SIZE = 1000
export const DATA_BATCH_INTERVAL = 2000
export const BATCH_EVENT_TYPES = ['LogCreated', 'TestRunStarted', 'TestRunFinished', 'HookRunFinished', 'HookRunStarted', 'ScreenshotCreated']
export const DEFAULT_WAIT_TIMEOUT_FOR_PENDING_UPLOADS = 5000 // 5s
export const DEFAULT_WAIT_INTERVAL_FOR_PENDING_UPLOADS = 100 // 100ms
