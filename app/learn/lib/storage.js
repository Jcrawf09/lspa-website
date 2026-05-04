// Browser-only storage helper for /learn.
// All data stays on the device — never sent to a server.
// No PII collected. Child first name is optional and screen-only.

const NS = 'lspa-learn';
const KEYS = {
  completed: NS + '-completed',
  favorites: NS + '-favorites',
  childName: NS + '-child-name',
  readiness: NS + '-readiness',
  recent:    NS + '-recent'
};

function isBrowser() {
  return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
}

function safeGet(key, fallback) {
  if (!isBrowser()) return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    if (raw === null) return fallback;
    return JSON.parse(raw);
  } catch (e) {
    return fallback;
  }
}

function safeSet(key, value) {
  if (!isBrowser()) return false;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (e) {
    return false;
  }
}

function safeRemove(key) {
  if (!isBrowser()) return;
  try {
    window.localStorage.removeItem(key);
  } catch (e) {}
}

// ---------- Completed activities ----------

export function getCompleted() {
  return safeGet(KEYS.completed, []);
}

export function isCompleted(slug) {
  return getCompleted().indexOf(slug) !== -1;
}

export function markComplete(slug) {
  const list = getCompleted();
  if (list.indexOf(slug) === -1) {
    list.push(slug);
    safeSet(KEYS.completed, list);
    addRecent({ type: 'completed', slug: slug, at: Date.now() });
  }
  return list;
}

export function unmarkComplete(slug) {
  const list = getCompleted().filter(function (s) { return s !== slug; });
  safeSet(KEYS.completed, list);
  return list;
}

export function toggleComplete(slug) {
  return isCompleted(slug) ? unmarkComplete(slug) : markComplete(slug);
}

// ---------- Favorites ----------

export function getFavorites() {
  return safeGet(KEYS.favorites, []);
}

export function isFavorite(slug) {
  return getFavorites().indexOf(slug) !== -1;
}

export function toggleFavorite(slug) {
  const list = getFavorites();
  const idx = list.indexOf(slug);
  if (idx === -1) {
    list.push(slug);
  } else {
    list.splice(idx, 1);
  }
  safeSet(KEYS.favorites, list);
  return list;
}

// ---------- Child first name (optional, screen-only) ----------

export function getChildName() {
  return safeGet(KEYS.childName, '');
}

export function setChildName(name) {
  const trimmed = (name || '').trim().slice(0, 40);
  if (trimmed) {
    safeSet(KEYS.childName, trimmed);
  } else {
    safeRemove(KEYS.childName);
  }
  return trimmed;
}

// ---------- Kindergarten readiness checklist ----------

export function getReadiness() {
  return safeGet(KEYS.readiness, {});
}

export function isReadinessChecked(id) {
  return getReadiness()[id] === true;
}

export function toggleReadiness(id) {
  const map = getReadiness();
  if (map[id]) {
    delete map[id];
  } else {
    map[id] = true;
  }
  safeSet(KEYS.readiness, map);
  return map;
}

export function getReadinessProgress(totalCount) {
  const checked = Object.keys(getReadiness()).length;
  if (!totalCount || totalCount <= 0) return { checked: checked, total: 0, percent: 0 };
  return {
    checked: checked,
    total: totalCount,
    percent: Math.round((checked / totalCount) * 100)
  };
}

// ---------- Recent activity log ----------

export function getRecent(limit) {
  if (!limit) limit = 10;
  const list = safeGet(KEYS.recent, []);
  return list.slice(0, limit);
}

function addRecent(entry) {
  const list = safeGet(KEYS.recent, []);
  list.unshift(entry);
  safeSet(KEYS.recent, list.slice(0, 50));
}

// ---------- Reset ----------

export function resetAll() {
  safeRemove(KEYS.completed);
  safeRemove(KEYS.favorites);
  safeRemove(KEYS.childName);
  safeRemove(KEYS.readiness);
  safeRemove(KEYS.recent);
}

// ---------- Stats ----------

export function getStats(totalReadinessIndicators) {
  if (!totalReadinessIndicators) totalReadinessIndicators = 30;
  return {
    completedCount: getCompleted().length,
    favoritesCount: getFavorites().length,
    readiness:      getReadinessProgress(totalReadinessIndicators),
    childName:      getChildName()
  };
}
