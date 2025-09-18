const DEFAULT_API_BASE_URL = 'http://localhost:8000/api';

export const API_BASE_URL =
  (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_API_BASE_URL) ||
  (typeof window !== 'undefined' && window.__API_BASE_URL__) ||
  DEFAULT_API_BASE_URL;

function buildQuery(params) {
  const searchParams = new URLSearchParams();
  Object.entries(params || {}).forEach(([key, value]) => {
    if (value === undefined || value === null || value === '') return;
    searchParams.set(key, String(value));
  });
  const qs = searchParams.toString();
  return qs ? `?${qs}` : '';
}

async function apiRequest(path, { method = 'GET', body, headers } = {}) {
  const url = `${API_BASE_URL}${path}`;
  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => '');
    const error = new Error(`Request failed ${response.status}: ${errorText || response.statusText}`);
    error.status = response.status;
    error.details = errorText;
    throw error;
  }

  const contentType = response.headers.get('content-type') || '';
  if (contentType.includes('application/json')) {
    return response.json();
  }
  return response.text();
}

export async function fetchShipments({ page, page_size, search, ordering, status } = {}) {
  const query = buildQuery({ page, page_size, search, ordering, status });
  return apiRequest(`/shipments/${query}`);
}

export async function fetchShipmentById(id) {
  return apiRequest(`/shipments/${id}/`);
}

export async function fetchTrackingEventsByTrackingNumber(trackingNumber) {
  const query = buildQuery({ search: trackingNumber });
  return apiRequest(`/tracking-events/${query}`);
}

export async function fetchPackages({ search } = {}) {
  const query = buildQuery({ search });
  return apiRequest(`/packages/${query}`);
}

export async function fetchWarehouses({ search } = {}) {
  const query = buildQuery({ search });
  return apiRequest(`/warehouses/${query}`);
}

export async function fetchCarriers({ search } = {}) {
  const query = buildQuery({ search });
  return apiRequest(`/carriers/${query}`);
}

export async function fetchCustomers({ search } = {}) {
  const query = buildQuery({ search });
  return apiRequest(`/customers/${query}`);
}

