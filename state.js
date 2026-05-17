/* ──────────────────────────────────────────────────────────────────────
   SeenFolio — State Layer
   localStorage-backed app state. Namespaced under "seenfolio:".
   Survives reload. Resettable from Settings → Reset demo.
   ──────────────────────────────────────────────────────────────────── */
(function (global) {
  const KEY = "seenfolio:state";
  const SIMULATED_LATENCY = 600;

  const defaults = {
    authed: false,
    onboarded: true,                  // default true so app.html is usable directly
    current_workspace: "ws_silver",
    mode: "beginner",                 // beginner | intermediate | advanced
    auto_mode: true,                  // global auto mode on/off
    token_balance: 2140,
    edge_flags: {},                   // { ec_token_low_20: true, ec_ad_suspended: false, … }
    autonomy_overrides: {},           // per-engine overrides keyed by workspace_id
    dismissed_toasts: [],
    inbox_resolved: [],               // ids of pending items the user already actioned
    undo_count_streak: 0,
    last_seen_actions: [],
  };

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return { ...defaults };
      return { ...defaults, ...JSON.parse(raw) };
    } catch (_) {
      return { ...defaults };
    }
  }

  function save(state) {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (_) {}
  }

  let _state = load();
  const subscribers = new Set();

  function notify() { subscribers.forEach((fn) => { try { fn(_state); } catch (_) {} }); }

  /* ─── API ────────────────────────────────────────────────────────── */
  const State = {
    SIMULATED_LATENCY,
    get all() { return _state; },
    get(k) { return _state[k]; },
    set(k, v) { _state = { ..._state, [k]: v }; save(_state); notify(); },
    patch(obj) { _state = { ..._state, ...obj }; save(_state); notify(); },
    subscribe(fn) { subscribers.add(fn); return () => subscribers.delete(fn); },

    /* Workspace */
    currentWorkspace() {
      const id = _state.current_workspace;
      return (global.SeenFolioMock?.workspaces || []).find((w) => w.id === id);
    },
    switchWorkspace(id) { this.set("current_workspace", id); },

    /* Mode */
    setMode(mode) { this.set("mode", mode); },

    /* Tokens */
    deductTokens(cost) {
      const next = Math.max(0, _state.token_balance - cost);
      this.set("token_balance", next);
      return next;
    },
    refillTokens(amount) {
      this.set("token_balance", _state.token_balance + amount);
    },

    /* Edge flags */
    flag(id, on = true) {
      const next = { ..._state.edge_flags, [id]: !!on };
      this.set("edge_flags", next);
    },
    isFlagged(id) { return !!_state.edge_flags[id]; },
    clearFlags() { this.set("edge_flags", {}); },

    /* Inbox */
    resolveInboxItem(id) {
      const next = Array.from(new Set([..._state.inbox_resolved, id]));
      this.set("inbox_resolved", next);
    },
    isInboxResolved(id) { return _state.inbox_resolved.includes(id); },

    /* Undo streak (edge case trigger) */
    bumpUndoStreak() {
      const next = _state.undo_count_streak + 1;
      this.set("undo_count_streak", next);
      if (next >= 3) this.flag("ec_three_undos", true);
      return next;
    },
    resetUndoStreak() { this.set("undo_count_streak", 0); },

    /* Reset */
    reset() {
      _state = { ...defaults };
      save(_state);
      notify();
    },

    /* Async sim */
    sleep(ms = SIMULATED_LATENCY) {
      return new Promise((r) => setTimeout(r, ms));
    },
  };

  global.SeenFolioState = State;

  /* On load: sync displayed values where present */
  document.addEventListener("DOMContentLoaded", () => {
    document.documentElement.setAttribute("data-mode", _state.mode);
  });
})(window);
