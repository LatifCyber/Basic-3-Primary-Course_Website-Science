/**
 * ScienceB3 – Auth Module
 * Handles login, session, and demo account seeding via localStorage.
 *
 * Demo Credentials
 * ─────────────────────────────────────────────────────────
 *  STUDENT  │ ID: STU-2024-001  │ Password: science123
 *  STUDENT  │ ID: student       │ Password: science123
 *  ─────────────────────────────────────────────────────────
 *  TEACHER  │ ID: TCH-2024-007  │ Password: teacher123
 *  TEACHER  │ ID: teacher       │ Password: teacher123
 * ─────────────────────────────────────────────────────────
 */

const Auth = (() => {

  const USERS_KEY   = 'sb3_users';
  const SESSION_KEY = 'sb3_session';
  // Bump this version string any time DEFAULT_USERS changes.
  // Auth will force-reseed whenever the stored version doesn't match.
  const SEED_VERSION = 'v3';
  const SEED_VER_KEY = 'sb3_seed_ver';

  /* ── Default demo accounts ───────────────────────────── */
  const DEFAULT_USERS = [
    {
      userId   : 'STU-2024-001',
      username : 'student',
      password : 'science123',
      role     : 'student',
      name     : 'Ama Mensah',
      class    : 'Basic 3A'
    },
    {
      userId   : 'STU-2024-002',
      username : 'kofi',
      password : 'science123',
      role     : 'student',
      name     : 'Kofi Asante',
      class    : 'Basic 3A'
    },
    {
      userId   : 'STU-2024-003',
      username : 'efua',
      password : 'science123',
      role     : 'student',
      name     : 'Efua Osei',
      class    : 'Basic 3B'
    },
    {
      userId   : 'TCH-2024-007',
      username : 'teacher',
      password : 'teacher123',
      role     : 'teacher',
      name     : 'Mr. K. Asante'
    }
  ];

  /* ── Helpers ─────────────────────────────────────────── */
  function getUsers() {
    try {
      return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
    } catch {
      return [];
    }
  }

  function getSession() {
    try {
      return JSON.parse(localStorage.getItem(SESSION_KEY)) || null;
    } catch {
      return null;
    }
  }

  /* ── Public API ──────────────────────────────────────── */

  /**
   * Always seeds / re-seeds demo accounts when the seed version changes.
   * This fixes stale-localStorage issues from previous deployments.
   * Returns a resolved Promise so callers can await it.
   */
  function seedDefaultUsers() {
    try {
      const storedVer = localStorage.getItem(SEED_VER_KEY);
      if (storedVer !== SEED_VERSION) {
        // Wipe old user data and re-seed with fresh defaults
        localStorage.removeItem(USERS_KEY);
        localStorage.removeItem(SESSION_KEY);
        localStorage.setItem(USERS_KEY, JSON.stringify(DEFAULT_USERS));
        localStorage.setItem(SEED_VER_KEY, SEED_VERSION);
      }
    } catch (e) {
      // localStorage unavailable (private mode etc.) — silently continue
      console.warn('ScienceB3: localStorage unavailable', e);
    }
    return Promise.resolve();
  }

  /**
   * Attempt login. Returns { ok: true } or { ok: false, error: '...' }
   * Matches on userId OR username (case-insensitive), then password and role.
   */
  function login(id, pw, role) {
    return new Promise(resolve => {
      // Short delay for UX feedback only — not hiding real async work
      setTimeout(() => {
        let users;
        try {
          users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
        } catch {
          users = [];
        }

        // Fallback: if localStorage is empty for any reason, use defaults
        if (users.length === 0) {
          users = DEFAULT_USERS;
          try {
            localStorage.setItem(USERS_KEY, JSON.stringify(DEFAULT_USERS));
          } catch (_) {}
        }

        const idLower = (id || '').trim().toLowerCase();
        const user = users.find(u =>
          (u.userId.toLowerCase()   === idLower ||
           u.username.toLowerCase() === idLower) &&
          u.password === pw &&
          u.role     === role
        );

        if (user) {
          // Store session — exclude password for security
          const { password, ...session } = user;
          try {
            localStorage.setItem(SESSION_KEY, JSON.stringify(session));
          } catch (_) {}
          resolve({ ok: true });
        } else {
          resolve({
            ok    : false,
            error : 'Invalid credentials. Please check your ID and password.'
          });
        }
      }, 400); // reduced delay so login feels snappy
    });
  }

  /**
   * Clear session and redirect to login page.
   */
  function logout(redirectUrl) {
    try { localStorage.removeItem(SESSION_KEY); } catch (_) {}
    window.location.href = redirectUrl || 'index.html';
  }

  /**
   * Require a valid session of a given role.
   * Redirects to the appropriate login page immediately if not authenticated.
   */
  function requireAuth(role) {
    const session = getSession();
    if (!session || session.role !== role) {
      window.location.replace(
        role === 'teacher' ? 'teacher-login.html' : 'student-login.html'
      );
    }
  }

  /**
   * If the user is already logged in, send them to their portal immediately.
   */
  function redirectIfLoggedIn(url) {
    const session = getSession();
    if (session) {
      window.location.replace(url);
    }
  }

  /**
   * Toggle a submit button into/out of a loading state.
   */
  function setButtonLoading(btn, loading) {
    if (loading) {
      btn.disabled = true;
      btn._origHtml = btn.innerHTML;
      btn.innerHTML = `<span style="
        display:inline-block;width:14px;height:14px;
        border:2px solid rgba(255,255,255,0.4);
        border-top-color:#fff;border-radius:50%;
        animation:sb3spin .7s linear infinite;
        vertical-align:middle;margin-right:8px;
      "></span>Signing in…`;
    } else {
      btn.disabled = false;
      btn.innerHTML = btn._origHtml || btn.innerHTML;
    }
  }

  return {
    seedDefaultUsers,
    login,
    logout,
    getSession,
    requireAuth,
    redirectIfLoggedIn,
    setButtonLoading
  };

})();

/* Inject spinner keyframe once */
(function () {
  if (!document.getElementById('sb3-auth-style')) {
    const s = document.createElement('style');
    s.id = 'sb3-auth-style';
    s.textContent = '@keyframes sb3spin{to{transform:rotate(360deg)}}';
    document.head.appendChild(s);
  }
})();