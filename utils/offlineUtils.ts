/**
 * Service Worker and Offline Storage Utilities
 */

export interface OfflineData {
  timestamp: number;
  url: string;
  data: any;
  type: 'page' | 'api' | 'user-action';
}

/**
 * Register the service worker
 */
export const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/'
      });
      console.log('[App] Service Worker registered successfully:', registration);

      // Check for updates periodically
      setInterval(() => {
        registration.update();
      }, 60000); // Check every minute

      // Listen for controller change (new SW activated)
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        console.log('[App] Service Worker updated');
      });

      return registration;
    } catch (error) {
      console.error('[App] Service Worker registration failed:', error);
    }
  }
};

/**
 * Store data for offline use
 */
export const storeOfflineData = (data: OfflineData) => {
  try {
    const offlineDataKey = 'coolbuttons_offline_data';
    const existingData = localStorage.getItem(offlineDataKey);
    const dataArray: OfflineData[] = existingData ? JSON.parse(existingData) : [];

    // Add new data
    dataArray.push(data);

    // Keep only last 50 entries to avoid storage overflow
    if (dataArray.length > 50) {
      dataArray.shift();
    }

    localStorage.setItem(offlineDataKey, JSON.stringify(dataArray));
    console.log('[Offline Storage] Data stored:', data);
  } catch (error) {
    console.error('[Offline Storage] Failed to store data:', error);
  }
};

/**
 * Retrieve stored offline data
 */
export const getOfflineData = (): OfflineData[] => {
  try {
    const offlineDataKey = 'coolbuttons_offline_data';
    const data = localStorage.getItem(offlineDataKey);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('[Offline Storage] Failed to retrieve data:', error);
    return [];
  }
};

/**
 * Clear offline data
 */
export const clearOfflineData = () => {
  try {
    localStorage.removeItem('coolbuttons_offline_data');
    console.log('[Offline Storage] Offline data cleared');
  } catch (error) {
    console.error('[Offline Storage] Failed to clear data:', error);
  }
};

/**
 * Monitor online/offline status
 */
export const monitorConnectionStatus = (onStatusChange?: (isOnline: boolean) => void) => {
  const handleOnline = () => {
    console.log('[Connection] Back online');
    onStatusChange?.(true);
    // Sync any pending data
    syncOfflineData();
  };

  const handleOffline = () => {
    console.log('[Connection] Went offline');
    onStatusChange?.(false);
  };

  window.addEventListener('online', handleOnline);
  window.addEventListener('offline', handleOffline);

  return () => {
    window.removeEventListener('online', handleOnline);
    window.removeEventListener('offline', handleOffline);
  };
};

/**
 * Sync offline data when connection is restored
 */
export const syncOfflineData = async () => {
  const data = getOfflineData();
  
  if (data.length === 0) {
    console.log('[Offline Storage] No data to sync');
    return;
  }

  try {
    // Simulate sync (in real app, send to server)
    console.log('[Offline Storage] Syncing', data.length, 'items');
    
    // Store sync timestamp
    localStorage.setItem('coolbuttons_last_sync', new Date().toISOString());
    
    // Clear synced data
    clearOfflineData();
    
    console.log('[Offline Storage] Sync complete');
  } catch (error) {
    console.error('[Offline Storage] Sync failed:', error);
  }
};

/**
 * Get last sync timestamp
 */
export const getLastSyncTime = (): Date | null => {
  try {
    const timestamp = localStorage.getItem('coolbuttons_last_sync');
    return timestamp ? new Date(timestamp) : null;
  } catch (error) {
    console.error('[Offline Storage] Failed to get sync time:', error);
    return null;
  }
};

/**
 * Store page visit data
 */
export const recordPageVisit = (pageName: string) => {
  storeOfflineData({
    timestamp: Date.now(),
    url: window.location.href,
    data: { pageName },
    type: 'page'
  });
};

/**
 * Store user action data
 */
export const recordUserAction = (action: string, details?: any) => {
  storeOfflineData({
    timestamp: Date.now(),
    url: window.location.href,
    data: { action, details },
    type: 'user-action'
  });
};

/**
 * Store API response for offline use
 */
export const recordApiCall = (endpoint: string, data: any) => {
  storeOfflineData({
    timestamp: Date.now(),
    url: endpoint,
    data: data,
    type: 'api'
  });
};
