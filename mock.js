/* ──────────────────────────────────────────────────────────────────────
   SeenFolio — Mock Data Universe
   Single source of fake truth shared across every prototype page.
   Realistic volume. Stable IDs. Mutable via SeenFolioMock.mutate().
   ──────────────────────────────────────────────────────────────────── */
(function (global) {
  const now = Date.now();
  const HOUR = 3600 * 1000;
  const DAY = 24 * HOUR;
  const ago = (ms) => new Date(now - ms).toISOString();

  /* ─── USER & WORKSPACE ───────────────────────────────────────────── */
  const user = {
    id: "u_amara",
    name: "Amara Okafor",
    email: "amara@silverjewelry.com",
    avatar_initial: "A",
    role: "owner",
  };

  const workspaces = [
    {
      id: "ws_silver",
      name: "Silver Jewelry Co",
      site_url: "silverjewelry.com",
      currency: "USD",
      timezone: "Africa/Lagos",
      industry: "Jewelry & accessories",
      created_at: ago(82 * DAY),
      plan: "growth",
      token_balance: 2140,
      token_quota: 5000,
      goal: "more_sales",
      autonomy: {
        seo_geo: "full_auto",
        bi: "full_auto",
        ads: "suggest_confirm",
        content: "full_auto",
        trust: "suggest_confirm",
        whatsapp: "notify_only",
        retention: "full_auto",
      },
      mode: "beginner",
      integration_method: "wordpress_plugin",
    },
    {
      id: "ws_kente",
      name: "Kente Threads",
      site_url: "kentethreads.com",
      currency: "NGN",
      timezone: "Africa/Lagos",
      industry: "Apparel & fashion",
      created_at: ago(34 * DAY),
      plan: "starter",
      token_balance: 612,
      token_quota: 1000,
      goal: "more_traffic",
      autonomy: {
        seo_geo: "suggest_confirm",
        bi: "full_auto",
        ads: "off",
        content: "suggest_confirm",
        trust: "full_auto",
        whatsapp: "full_auto",
        retention: "notify_only",
      },
      mode: "intermediate",
      integration_method: "js_sdk",
    },
  ];

  /* ─── TEAM ───────────────────────────────────────────────────────── */
  const team = [
    { id: "u_amara", name: "Amara Okafor", email: "amara@silverjewelry.com", role: "Owner", last_seen: ago(2 * HOUR) },
    { id: "u_tunde", name: "Tunde Adesina", email: "tunde@silverjewelry.com", role: "Admin", last_seen: ago(6 * HOUR) },
    { id: "u_zara",  name: "Zara Mukasa",   email: "zara@silverjewelry.com",  role: "Editor", last_seen: ago(1 * DAY) },
  ];

  /* ─── PAGES (Engine 1 surface) ───────────────────────────────────── */
  const pages = [
    { id: "pg_home", url: "/", title: "Handmade silver jewelry — free shipping over $50", meta_description: "Hand-forged sterling silver pieces, made in Lagos. Free shipping over $50. 30-day returns.", seo_score: 86, geo_score: 71, cwv_score: 92, issues: 2, last_ingested: ago(2 * HOUR), staging_patch: null, version_count: 7, traffic_rank: 1, ai_citations_30d: 14 },
    { id: "pg_rings", url: "/rings", title: "Sterling silver rings", meta_description: "Hand-forged silver rings, every piece signed.", seo_score: 64, geo_score: 58, cwv_score: 88, issues: 6, last_ingested: ago(5 * HOUR), staging_patch: "patch_rings", version_count: 3, traffic_rank: 2, ai_citations_30d: 4 },
    { id: "pg_earrings", url: "/earrings", title: "Silver earrings collection", meta_description: "Statement and everyday silver earrings.", seo_score: 78, geo_score: 66, cwv_score: 94, issues: 3, last_ingested: ago(11 * HOUR), staging_patch: null, version_count: 4, traffic_rank: 3, ai_citations_30d: 2 },
    { id: "pg_care", url: "/blog/silver-care", title: "Your silver will last 20 years if you do these 4 things", meta_description: "Storage, wearing, cleaning, and what to avoid — care guide from a Lagos silversmith.", seo_score: 91, geo_score: 88, cwv_score: 90, issues: 1, last_ingested: ago(1 * DAY), staging_patch: null, version_count: 2, traffic_rank: 4, ai_citations_30d: 22 },
    { id: "pg_about", url: "/about", title: "Our story", meta_description: "Hand-forged in Lagos since 2019.", seo_score: 52, geo_score: 42, cwv_score: 96, issues: 9, last_ingested: ago(2 * DAY), staging_patch: "patch_about", version_count: 1, traffic_rank: 9, ai_citations_30d: 0 },
    { id: "pg_anniversary", url: "/collections/anniversary", title: "Anniversary collection", meta_description: "Pieces for the people who chose to stay.", seo_score: 73, geo_score: 64, cwv_score: 89, issues: 4, last_ingested: ago(2 * DAY), staging_patch: null, version_count: 2, traffic_rank: 5, ai_citations_30d: 1 },
    { id: "pg_cleaning_kit", url: "/products/polishing-cloth", title: "Silver polishing cloth", meta_description: "Bring tarnished pieces back to life. Re-usable, lint-free.", seo_score: 81, geo_score: 70, cwv_score: 93, issues: 2, last_ingested: ago(3 * DAY), staging_patch: null, version_count: 5, traffic_rank: 6, ai_citations_30d: 8 },
    { id: "pg_gifting", url: "/gift-cards", title: "Gift cards", meta_description: "Let them pick.", seo_score: 38, geo_score: 25, cwv_score: 91, issues: 12, last_ingested: ago(3 * DAY), staging_patch: null, version_count: 0, traffic_rank: 12, ai_citations_30d: 0 },
    { id: "pg_size_guide", url: "/size-guide", title: "Ring size guide", meta_description: "Find your size at home in 60 seconds.", seo_score: 88, geo_score: 81, cwv_score: 95, issues: 1, last_ingested: ago(4 * DAY), staging_patch: null, version_count: 3, traffic_rank: 7, ai_citations_30d: 6 },
    { id: "pg_returns", url: "/returns", title: "Returns & exchanges", meta_description: "30 days, no questions. Free returns within Nigeria.", seo_score: 71, geo_score: 60, cwv_score: 92, issues: 3, last_ingested: ago(4 * DAY), staging_patch: null, version_count: 2, traffic_rank: 10, ai_citations_30d: 3 },
    { id: "pg_contact", url: "/contact", title: "Contact us", meta_description: "Hello, friends.", seo_score: 44, geo_score: 30, cwv_score: 98, issues: 8, last_ingested: ago(5 * DAY), staging_patch: null, version_count: 1, traffic_rank: 11, ai_citations_30d: 0 },
    { id: "pg_journal", url: "/journal", title: "Journal — stories from the workshop", meta_description: "Notes, photos, and processes from our Lagos workshop.", seo_score: 67, geo_score: 72, cwv_score: 87, issues: 4, last_ingested: ago(6 * DAY), staging_patch: null, version_count: 1, traffic_rank: 8, ai_citations_30d: 5 },
  ];

  /* ─── STAGING PATCHES (Engine 1) ─────────────────────────────────── */
  const patches = {
    patch_rings: {
      id: "patch_rings",
      page_id: "pg_rings",
      generated_at: ago(5 * HOUR),
      staged_until: new Date(now + 19 * HOUR).toISOString(),
      title_before: "Sterling silver rings",
      title_after: "Handmade sterling silver rings — solid, signed, free shipping over $50",
      meta_before: "Hand-forged silver rings, every piece signed.",
      meta_after: "Hand-forged sterling silver rings from a Lagos studio. Every piece numbered and signed. Free shipping over $50, 30-day returns.",
      changes: 3,
      rationale: "Three things changed. (1) The title was generic — search algos and AI engines prefer concrete category + differentiator. (2) The meta description was 38 characters; you're leaving snippet real estate on the table. (3) Added the social-proof handle 'numbered and signed' which converts in your existing copy.",
      hallucination_flags: 0,
      lighthouse_delta: { lcp: -0.1, cls: 0.0 },
      autonomy_path: "full_auto",
      target_keyword: "handmade silver rings",
      target_serp_rank: 14,
    },
    patch_about: {
      id: "patch_about",
      page_id: "pg_about",
      generated_at: ago(8 * HOUR),
      staged_until: new Date(now + 16 * HOUR).toISOString(),
      title_before: "Our story",
      title_after: "Our story — hand-forged silver, Lagos workshop since 2019",
      meta_before: "Hand-forged in Lagos since 2019.",
      meta_after: "Founded in 2019, our Lagos workshop hand-forges sterling silver one piece at a time. Read about our process, our team, and the silver we source.",
      changes: 2,
      rationale: "Your About page ranks #87 for 'Lagos silver jewelry' — too generic to be findable. Naming the city, the year, and the craft method ('hand-forged') gives crawlers and AI engines specific facts to cite.",
      hallucination_flags: 1,
      hallucination_details: [{ claim: "hand-forges sterling silver one piece at a time", source: "verified in About paragraph 3", status: "ok" }],
      lighthouse_delta: { lcp: 0.0, cls: 0.0 },
      autonomy_path: "full_auto",
      target_keyword: "Lagos silver jewelry",
      target_serp_rank: 87,
    },
  };

  /* ─── ACTIONS (Action Registry — cross-engine) ───────────────────── */
  const actions = [
    { id: "a_3094", engine: "seo_geo", action_type: "patch_page_title", page_id: "pg_home", status: "completed", before: '"Welcome to Our Store"', after: '"Handmade silver jewelry — free shipping over $50"', rationale: "Visitors arriving from your ads were bouncing because the old headline didn't tell them what you sold. The new one names the product and the offer up front.", executed_at: ago(2 * HOUR), rolled_back_at: null, outcome: { bounce: -18, add_to_cart: 12 }, tokens: 8, undoable: true },
    { id: "a_3081", engine: "ads", action_type: "reallocate_budget", status: "completed", before: "Google $400 / Facebook $300", after: "Google $550 / Facebook $150", rationale: "Google traffic is converting twice as well right now — $45 CAC vs. $89 on Facebook. I'm not killing Facebook; keeping it at $150 to keep testing.", executed_at: ago(1 * DAY), rolled_back_at: null, outcome: { net_cac: -14 }, tokens: 0, undoable: true },
    { id: "a_3072", engine: "content", action_type: "publish_blog", status: "completed", before: "no post", after: '"How to care for sterling silver" — 1,180 words', rationale: "There were 14k monthly searches for 'how to clean silver jewelry at home' and you didn't rank for any. This piece targets exactly that query with your brand voice.", executed_at: ago(2 * DAY), rolled_back_at: null, outcome: { indexed: true }, tokens: 34, undoable: true },
    { id: "a_3061", engine: "retention", action_type: "send_winback", status: "completed", before: "12 customers inactive 90+ days", after: "winback email sent to 12 contacts", rationale: "These 12 had spent $1,840 cumulatively. A $15-off offer is small risk for the chance to bring even three of them back.", executed_at: ago(3 * DAY), rolled_back_at: null, outcome: { returned: 3, revenue: 214 }, tokens: 60, undoable: false },
    { id: "a_3055", engine: "trust", action_type: "draft_review_reply", status: "pending_approval", before: "5★ from Maya O.", after: "drafted personal reply, awaiting Amara", rationale: "Customers respond well to first-name addresses and a specific reference to the product purchased.", executed_at: ago(4 * DAY), rolled_back_at: null, outcome: null, tokens: 0, undoable: true },
    { id: "a_3048", engine: "trust", action_type: "draft_review_reply", status: "pending_approval", before: "4★ from David L.", after: "drafted reply addressing shipping concern", rationale: "The customer mentioned shipping took longer than expected. Acknowledging this builds more trust than ignoring it.", executed_at: ago(4 * DAY), rolled_back_at: null, outcome: null, tokens: 0, undoable: true },
    { id: "a_3041", engine: "seo_geo", action_type: "ab_test_layout", page_id: "pg_rings", status: "completed", before: "long product page with hero video", after: "short page with reviews above the fold", rationale: "Shorter product pages with social proof above the fold tested better with your audience.", executed_at: ago(5 * DAY), rolled_back_at: null, outcome: { add_to_cart: 9 }, tokens: 22, undoable: true },
    { id: "a_3030", engine: "seo_geo", action_type: "patch_meta_descriptions", status: "completed", before: "11 product pages with auto-meta", after: "11 product pages with handwritten-style meta", rationale: "Default Shopify meta descriptions repeat the page title. Custom ones increase click-through from search results.", executed_at: ago(5 * DAY), rolled_back_at: null, outcome: { pending_index: true }, tokens: 14, undoable: true },
    { id: "a_3018", engine: "trust", action_type: "publish_testimonial_widget", status: "completed", before: "no widget", after: "social-proof widget on 3 product pages", rationale: "Top-of-page social proof on highest-traffic pages is consistently a +0.3–0.5 second time-on-page lift.", executed_at: ago(5 * DAY), rolled_back_at: null, outcome: { time_on_page: 0.4 }, tokens: 6, undoable: true },
    { id: "a_3005", engine: "seo_geo", action_type: "optimize_images", status: "completed", before: "14 product pages, ~3.4MB avg", after: "14 product pages, ~2.1MB avg", rationale: "Mobile LCP was over 4 seconds on /rings. Compressing without quality loss got it under 2.5s.", executed_at: ago(6 * DAY), rolled_back_at: null, outcome: { lcp: -0.7 }, tokens: 0, undoable: true },
    { id: "a_2998", engine: "content", action_type: "publish_journal", status: "completed", before: "no post", after: '"What we learned at Maker Faire Lagos" — 720 words', rationale: "Long-tail keywords around 'Lagos craft' have very low competition.", executed_at: ago(7 * DAY), rolled_back_at: null, outcome: { indexed: true }, tokens: 18, undoable: true },
    { id: "a_2987", engine: "trust", action_type: "update_gbp_photos", status: "completed", before: "GBP photos from Jan", after: "12 new workshop photos uploaded to GBP", rationale: "Google Business Profile photos refreshed in last 90 days = ~18% higher local map views.", executed_at: ago(7 * DAY), rolled_back_at: null, outcome: { map_views: 18 }, tokens: 0, undoable: true },
    { id: "a_2972", engine: "bi", action_type: "shift_attribution_model", status: "completed", before: "Last-touch", after: "Data-driven (Shapley)", rationale: "You now have 432 conversions in the trailing 90 days — past the 100-conversion threshold for Shapley to be statistically valid.", executed_at: ago(8 * DAY), rolled_back_at: null, outcome: null, tokens: 0, undoable: true },
    { id: "a_2960", engine: "ads", action_type: "pause_loser_variant", status: "completed", before: "4 Google headlines tested", after: "1 paused, 3 continuing", rationale: "Variant D underperformed CTR by 38% after 7 days of equal spend. Pausing rather than killing — keeps it eligible for future tests.", executed_at: ago(9 * DAY), rolled_back_at: null, outcome: { ctr: 0.4 }, tokens: 0, undoable: true },
    { id: "a_2944", engine: "retention", action_type: "send_welcome_series", status: "completed", before: "new subscribers", after: "3-email welcome series triggered for 18 new contacts", rationale: "Welcome flows open at 3x the rate of generic promo emails.", executed_at: ago(10 * DAY), rolled_back_at: null, outcome: { opens: 47 }, tokens: 18, undoable: false },
    { id: "a_2922", engine: "seo_geo", action_type: "patch_schema_markup", status: "rolled_back", before: "no schema on product pages", after: "Product schema added", rationale: "Schema improves rich-snippet eligibility.", executed_at: ago(12 * DAY), rolled_back_at: ago(11 * DAY), outcome: { reason: "user_undo" }, tokens: 10, undoable: false, learning: "User preferred to add schema manually — flagged as preference." },
    { id: "a_2899", engine: "content", action_type: "fill_content_gap", status: "completed", before: "no post for 'silver vs gold for sensitive skin'", after: '"Silver vs gold for sensitive ears" — 940 words', rationale: "Search volume 4.8k/mo, you ranked at #91, no competition for the specific 'sensitive ears' query.", executed_at: ago(14 * DAY), rolled_back_at: null, outcome: { indexed: true, queries_ranked: 14 }, tokens: 28, undoable: true },
    { id: "a_2870", engine: "whatsapp", action_type: "send_cart_recovery", status: "completed", before: "cart abandoned 6h", after: "WhatsApp message + checkout link sent", rationale: "Cart recovery via WhatsApp outperforms email recovery 3:1 for Nigerian customers.", executed_at: ago(16 * DAY), rolled_back_at: null, outcome: { recovered: 1, revenue: 89 }, tokens: 5, undoable: false },
    { id: "a_2848", engine: "bi", action_type: "rebalance_budget_proposal", status: "pending_approval", before: "Google $550 / Meta $150 / TikTok $0", after: "Google $500 / Meta $100 / TikTok $100", rationale: "TikTok ads outperformed Meta on cost-per-engagement in 4 of your 5 competitor brands. Worth a $100/week test.", executed_at: ago(18 * DAY), rolled_back_at: null, outcome: null, tokens: 0, undoable: true },
    { id: "a_2811", engine: "trust", action_type: "auto_reply_5star", status: "completed", before: "5★ from Priya R.", after: "auto-replied with short thank-you", rationale: "Within your auto-reply policy (5★, ≤60 words).", executed_at: ago(21 * DAY), rolled_back_at: null, outcome: null, tokens: 4, undoable: true },
    { id: "a_2780", engine: "seo_geo", action_type: "monitor_ai_citation", status: "completed", before: "asked Perplexity 'best silver jewelry Lagos'", after: "your brand cited #3 of 5 sources", rationale: "Weekly AI citation check.", executed_at: ago(25 * DAY), rolled_back_at: null, outcome: null, tokens: 2, undoable: false },
  ];

  /* ─── STATS / KPIs ───────────────────────────────────────────────── */
  const stats = {
    revenue: { value: 4820, currency: "$", delta_pct: 22, trend_30d: [3.1, 3.0, 2.8, 3.2, 3.4, 3.5, 3.7, 3.9, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8] },
    customers: { value: 63, delta_pct: 17, trend_30d: [42, 44, 46, 48, 49, 51, 52, 54, 55, 56, 58, 59, 60, 61, 62, 63] },
    visitors: { value: 11402, delta_pct: 2, trend_30d: [10800, 10900, 11000, 10950, 11100, 11050, 11150, 11200, 11250, 11300, 11350, 11380, 11390, 11395, 11400, 11402] },
    cac: { value: 48, currency: "$" },
    ltv: { value: 184, currency: "$" },
    payback_days: 38,
  };

  /* ─── ATTRIBUTION (Engine 2) ─────────────────────────────────────── */
  const attribution = {
    models: ["shapley", "first_touch", "last_touch", "linear", "time_decay"],
    active_model: "shapley",
    window_days: 90,
    channels: [
      { name: "Google Ads", spend: 2200, conversions: 49, revenue: 7200, cac: 44.9, ltv: 184, payback_days: 32, efficiency: 4.1, learning_phase: false },
      { name: "Meta Ads", spend: 600, conversions: 7, revenue: 980, cac: 85.7, ltv: 132, payback_days: 58, efficiency: 1.5, learning_phase: false },
      { name: "Organic", spend: 0, conversions: 31, revenue: 5840, cac: 0, ltv: 212, payback_days: 0, efficiency: Infinity, learning_phase: false },
      { name: "Email", spend: 0, conversions: 14, revenue: 2640, cac: 0, ltv: 198, payback_days: 0, efficiency: Infinity, learning_phase: false },
      { name: "WhatsApp", spend: 0, conversions: 9, revenue: 1480, cac: 0, ltv: 164, payback_days: 0, efficiency: Infinity, learning_phase: false },
      { name: "TikTok Ads", spend: 0, conversions: 0, revenue: 0, cac: 0, ltv: 0, payback_days: 0, efficiency: 0, learning_phase: true, status: "proposed" },
    ],
    journeys: [
      { conversion_id: "conv_001", value: 184, customer: "Maya O.", touchpoints: [
        { channel: "Instagram organic", action: "post view", at: ago(7 * DAY) },
        { channel: "Google Ads", action: "branded search click", at: ago(5 * DAY) },
        { channel: "Direct", action: "homepage", at: ago(3 * DAY) },
        { channel: "Email", action: "welcome series open", at: ago(2 * DAY) },
        { channel: "Email", action: "welcome series click", at: ago(1 * DAY) },
        { channel: "Direct", action: "checkout — $184", at: ago(6 * HOUR) },
      ] },
      { conversion_id: "conv_002", value: 89, customer: "David L.", touchpoints: [
        { channel: "TikTok organic", action: "video view", at: ago(4 * DAY) },
        { channel: "Google Ads", action: "non-branded click", at: ago(1 * DAY) },
        { channel: "Direct", action: "checkout — $89", at: ago(20 * HOUR) },
      ] },
    ],
  };

  /* ─── AI CITATIONS (Engine 1, GEO surface) ───────────────────────── */
  const ai_citations = {
    visibility_score: 62,
    delta_4w: 14,
    by_engine: [
      { engine: "ChatGPT", citations: 18, trend: [4, 6, 7, 8, 10, 12, 14, 18] },
      { engine: "Perplexity", citations: 12, trend: [3, 4, 5, 6, 7, 9, 11, 12] },
      { engine: "Google SGE", citations: 9, trend: [1, 2, 2, 4, 6, 7, 8, 9] },
      { engine: "Claude", citations: 7, trend: [0, 1, 2, 3, 4, 5, 6, 7] },
    ],
    queries: [
      { query: "best silver jewelry Lagos", engines_citing: ["Perplexity", "ChatGPT"], rank: 3, weekly_trend: [5, 4, 4, 3, 3, 3, 2] },
      { query: "handmade silver rings Nigeria", engines_citing: ["ChatGPT", "Claude"], rank: 1, weekly_trend: [8, 6, 5, 4, 3, 2, 1] },
      { query: "how to care for sterling silver", engines_citing: ["ChatGPT", "Perplexity", "Google SGE", "Claude"], rank: 2, weekly_trend: [12, 9, 7, 5, 4, 3, 2] },
      { query: "silver vs gold sensitive ears", engines_citing: ["ChatGPT"], rank: 5, weekly_trend: [null, null, 12, 10, 8, 6, 5] },
      { query: "anniversary jewelry gift ideas", engines_citing: [], rank: null, weekly_trend: [null, null, null, null, null, null, null] },
    ],
  };

  /* ─── SITEMAP DIFF ───────────────────────────────────────────────── */
  const sitemap_diff = {
    last_scan: ago(2 * DAY),
    next_scan: new Date(now + 5 * DAY).toISOString(),
    new_urls: ["/blog/anniversary-gifts-guide", "/collections/mens", "/products/cuff-bracelet"],
    removed_urls: ["/blog/discontinued-line"],
    changed_urls: ["/about (h1 changed)", "/contact (added FAQ section)"],
  };

  /* ─── PENDING APPROVALS / INBOX ──────────────────────────────────── */
  const pending = [
    { id: "p_review_maya", type: "review_reply", title: "Reply to Maya O.", stars: 5, customer: "Maya O.", platform: "Google", snippet: "Absolutely love the ring I got for my anniversary…", drafted_at: ago(3 * HOUR), draft: "Maya — thank you so much for taking the time to share this. We pour a lot of care into every piece, and hearing it landed for an anniversary means a great deal. Wear it well, and we'll be here whenever you're ready to add to the set.\n\n— Amara, SilverJewelry" },
    { id: "p_review_david", type: "review_reply", title: "Reply to David L.", stars: 4, customer: "David L.", platform: "Google", snippet: "Beautiful piece, but took longer than expected to arrive…", drafted_at: ago(5 * HOUR), draft: "David — thanks for the honest review. Three weeks to Brisbane is longer than I'd like, and we're switching couriers for international orders next month for exactly this reason. The fact that you'd buy again means the world. — Amara" },
    { id: "p_blog_silver_mistakes", type: "blog_draft", title: "\"4 silver-care mistakes\"", word_count: 1184, drafted_at: ago(1 * DAY), target_keyword: "how to clean silver jewelry", estimated_search_volume: 14000 },
    { id: "p_budget_tiktok", type: "budget_proposal", title: "Test TikTok Ads at $100/week", from: "Meta $150 → TikTok $100, Meta $50", drafted_at: ago(18 * DAY), rationale: "TikTok outperformed Meta on cost-per-engagement in 4 of 5 competitor brands you compete with for share-of-voice." },
    { id: "p_campaign_mothers_day", type: "campaign_confirm", title: "Confirm Mother's Day launch", launch_at: new Date(now + 3 * DAY).toISOString(), budget: 400, drafted_at: ago(6 * HOUR) },
  ];

  /* ─── CONTENT (Engine 4) ─────────────────────────────────────────── */
  const brand_voice = {
    examples: [
      "Hand-forged in Lagos, signed by the maker.",
      "If your silver darkens, that's it doing its job — patina is a feature, not a flaw.",
      "We don't do flashy. We do pieces you'll wear in twenty years.",
    ],
    tone_attributes: ["confident", "warm", "specific", "anti-jargon"],
    avoid: ["luxurious", "exquisite", "elegant", "unparalleled", "discover"],
    version: 4,
  };

  const content_campaigns = [
    { id: "cc_silver_care", status: "completed", topic: "Silver care guide", stages: ["keyword","competitor","brief","draft","seo","review","distribute"], stage_status: ["done","done","done","done","done","done","done"], published_url: "/blog/silver-care", tokens: 34 },
    { id: "cc_mistakes", status: "review_gate", topic: "Silver-care mistakes", stages: ["keyword","competitor","brief","draft","seo","review","distribute"], stage_status: ["done","done","done","done","done","waiting","queued"], tokens: 28 },
    { id: "cc_gift_guide", status: "draft", topic: "Anniversary gift guide", stages: ["keyword","competitor","brief","draft","seo","review","distribute"], stage_status: ["done","done","done","running","queued","queued","queued"], tokens: 22 },
  ];

  const content_gaps = [
    { topic: "Silver ring resizing at home", monthly_searches: 6800, competition: "low", you_rank: null, recommended: true },
    { topic: "Sterling vs plated silver", monthly_searches: 9200, competition: "medium", you_rank: 41, recommended: true },
    { topic: "Hypoallergenic earrings for kids", monthly_searches: 3200, competition: "low", you_rank: null, recommended: true },
    { topic: "Silver wedding band care", monthly_searches: 11000, competition: "medium", you_rank: 67, recommended: false },
  ];

  /* ─── ADS (Engine 3) ─────────────────────────────────────────────── */
  const ad_accounts = [
    { platform: "Google Ads", account_id: "874-991-2208", connected: true, auth_health: "ok", last_sync: ago(15 * 60 * 1000), monthly_spend: 2200 },
    { platform: "Meta (FB/IG)", account_id: "act_1029384756", connected: true, auth_health: "ok", last_sync: ago(15 * 60 * 1000), monthly_spend: 600 },
    { platform: "TikTok", account_id: null, connected: false, auth_health: null, last_sync: null, monthly_spend: 0 },
    { platform: "LinkedIn", account_id: null, connected: false, auth_health: null, last_sync: null, monthly_spend: 0 },
    { platform: "Twitter/X", account_id: null, connected: false, auth_health: null, last_sync: null, monthly_spend: 0 },
    { platform: "Snapchat", account_id: null, connected: false, auth_health: null, last_sync: null, monthly_spend: 0 },
  ];

  const campaigns = [
    { id: "cmp_g_brand", platform: "Google Ads", name: "Brand — Silver Jewelry Co", spend_week: 280, impressions: 18400, clicks: 412, ctr: 2.24, conversions: 18, cvr: 4.37, cac: 15.6, status: "active", learning: false },
    { id: "cmp_g_rings", platform: "Google Ads", name: "Rings — non-brand", spend_week: 270, impressions: 12800, clicks: 308, ctr: 2.41, conversions: 11, cvr: 3.57, cac: 24.5, status: "active", learning: false },
    { id: "cmp_m_anniv", platform: "Meta", name: "Anniversary — retargeting", spend_week: 150, impressions: 22800, clicks: 384, ctr: 1.68, conversions: 4, cvr: 1.04, cac: 37.5, status: "active", learning: false },
    { id: "cmp_m_lookalike", platform: "Meta", name: "Lookalike — past buyers", spend_week: 0, impressions: 0, clicks: 0, ctr: 0, conversions: 0, cvr: 0, cac: 0, status: "review_pending", learning: false, review_hours: 51 },
  ];

  const creative_variants = [
    { campaign_id: "cmp_g_rings", variant: "A", headline: "Hand-forged silver rings — Lagos", description: "Free shipping over $50. 30-day returns.", cta: "Shop now", impressions: 4200, clicks: 108, ctr: 2.57, status: "winner", scaled: true },
    { campaign_id: "cmp_g_rings", variant: "B", headline: "Sterling silver, signed by the maker", description: "Wear it in twenty years. Free returns.", cta: "Browse rings", impressions: 4200, clicks: 96, ctr: 2.29, status: "active" },
    { campaign_id: "cmp_g_rings", variant: "C", headline: "Buy silver rings online", description: "Free shipping. 30-day returns.", cta: "Buy now", impressions: 4400, clicks: 41, ctr: 0.93, status: "paused", reason: "CTR 38% below winner" },
  ];

  /* ─── TRUST (Engine 5) ───────────────────────────────────────────── */
  const reviews = [
    { id: "rv_maya", platform: "Google", customer: "Maya O.", stars: 5, posted_at: ago(3 * HOUR), body: "Absolutely love the ring I got for my anniversary. The quality is incredible and shipping was so fast — arrived in 3 days! Will definitely be back for more pieces.", reply_status: "pending_approval", reply_draft: pending[0].draft },
    { id: "rv_david", platform: "Google", customer: "David L.", stars: 4, posted_at: ago(5 * HOUR), body: "Beautiful piece, but took longer than expected to arrive. Would buy again though, the craftsmanship is real.", reply_status: "pending_approval", reply_draft: pending[1].draft },
    { id: "rv_priya", platform: "Google", customer: "Priya R.", stars: 5, posted_at: ago(21 * DAY), body: "Bought a cuff for my mum's birthday — she has not taken it off.", reply_status: "auto_replied", reply_draft: "Priya — that is the highest compliment. Please give her our regards. — Amara" },
    { id: "rv_sam", platform: "Trustpilot", customer: "Sam K.", stars: 5, posted_at: ago(28 * DAY), body: "Sixth order from this team. Service is impeccable.", reply_status: "replied" },
  ];

  const gbp = {
    last_post_at: ago(4 * DAY),
    last_post_topic: "New cuff bracelet drop — 6 pieces only",
    profile_views_30d: 1840,
    photo_count: 47,
    local_rank: { keyword: "silver jewelry Lagos", rank: 4, delta: -2 },
    pending_posts: 1,
  };

  /* ─── WHATSAPP / CRM (Engine 6) ──────────────────────────────────── */
  const contacts = [
    { id: "c_maya", name: "Maya O.", phone: "+234 803 555 0142", email: "maya.o@gmail.com", whatsapp_opt_in: true, tags: ["high_value", "anniversary_buyer"], orders: 12, ltv: 1840, last_purchase: ago(3 * HOUR), churn_risk: 0.08, lifecycle_stage: "engaged" },
    { id: "c_priya", name: "Priya R.", phone: "+234 706 555 0093", email: "priya.r@hotmail.com", whatsapp_opt_in: true, tags: ["high_value", "gift_buyer"], orders: 8, ltv: 920, last_purchase: ago(21 * DAY), churn_risk: 0.18, lifecycle_stage: "engaged" },
    { id: "c_sam", name: "Sam K.", phone: "+234 802 555 0021", email: "sam.k@protonmail.com", whatsapp_opt_in: true, tags: ["high_value", "wholesale"], orders: 6, ltv: 740, last_purchase: ago(28 * DAY), churn_risk: 0.22, lifecycle_stage: "engaged" },
    { id: "c_david", name: "David L.", phone: "+61 4 1455 9281", email: "david.l@gmail.com", whatsapp_opt_in: false, tags: ["international"], orders: 1, ltv: 89, last_purchase: ago(20 * HOUR), churn_risk: 0.61, lifecycle_stage: "activated" },
    { id: "c_chioma", name: "Chioma N.", phone: "+234 901 555 0388", email: "chioma@example.com", whatsapp_opt_in: true, tags: [], orders: 2, ltv: 138, last_purchase: ago(102 * DAY), churn_risk: 0.84, lifecycle_stage: "at_risk" },
    { id: "c_isabel", name: "Isabel A.", phone: "+34 600 555 049", email: "isabel.a@example.es", whatsapp_opt_in: false, tags: ["international"], orders: 1, ltv: 72, last_purchase: ago(146 * DAY), churn_risk: 0.92, lifecycle_stage: "at_risk" },
  ];

  const conversations = [
    { id: "conv_chioma", contact_id: "c_chioma", channel: "whatsapp", status: "bot_active", last_message_at: ago(2 * HOUR), last_message: "Yes please, send the gold options.", messages: [
      { role: "customer", text: "Hi, do you also do gold?", at: ago(3 * HOUR) },
      { role: "bot", text: "Hi Chioma — we focus on sterling silver, but we know two Lagos silversmiths who do incredible gold. Want me to send their handles?", at: ago(3 * HOUR) },
      { role: "customer", text: "Yes please, send the gold options.", at: ago(2 * HOUR) },
    ]},
    { id: "conv_unknown", contact_id: null, channel: "whatsapp", status: "handoff_to_human", last_message_at: ago(40 * 60 * 1000), last_message: "Can I speak with a person? I want to cancel.", messages: [
      { role: "customer", text: "My ring is the wrong size", at: ago(80 * 60 * 1000) },
      { role: "bot", text: "I'm sorry to hear that. You can exchange any unworn ring within 30 days. Want me to start the exchange?", at: ago(75 * 60 * 1000) },
      { role: "customer", text: "Can I speak with a person? I want to cancel.", at: ago(40 * 60 * 1000) },
    ]},
    { id: "conv_maya", contact_id: "c_maya", channel: "whatsapp", status: "resolved", last_message_at: ago(3 * DAY), last_message: "Got it. Thanks Amara x", messages: [] },
  ];

  const message_templates = [
    { name: "abandoned_cart_24h", status: "approved", language: "en", body: "Hey {{1}}, you left some pieces in your cart at silverjewelry.com. Want me to hold them for 24h? Reply YES." },
    { name: "post_purchase_3d", status: "approved", language: "en", body: "Hi {{1}}, just checking — did your order arrive okay? Reply with a thumbs up or let me know if anything's off." },
    { name: "winback_90d", status: "approved", language: "en", body: "It's been a while {{1}}. We just released the anniversary collection — saved a piece you'd love. Reply SHOW to see it." },
    { name: "review_request", status: "pending_meta", language: "en", body: "Hi {{1}}, how's your {{2}} treating you? A short review would mean a lot. Link inside." },
  ];

  /* ─── RETENTION (Engine 7) ───────────────────────────────────────── */
  const email_campaigns = [
    { id: "ec_welcome", name: "Welcome series", trigger: "new_subscriber", status: "active", enrolled_28d: 84, open_rate: 64, click_rate: 22, nodes: 4 },
    { id: "ec_post_purchase", name: "Post-purchase + review", trigger: "first_purchase", status: "active", enrolled_28d: 63, open_rate: 58, click_rate: 14, nodes: 5 },
    { id: "ec_winback_90", name: "Winback — 90 days inactive", trigger: "90d_inactive", status: "active", enrolled_28d: 12, open_rate: 41, click_rate: 18, nodes: 3 },
    { id: "ec_at_risk", name: "At-risk intervention", trigger: "churn_risk_0.65", status: "active", enrolled_28d: 8, open_rate: 52, click_rate: 24, nodes: 2 },
    { id: "ec_anniversary", name: "Anniversary push (April)", trigger: "manual", status: "draft", enrolled_28d: 0, open_rate: 0, click_rate: 0, nodes: 6 },
  ];

  const esp_options = [
    { name: "Mailchimp", connected: false },
    { name: "Brevo", connected: true, deliverability: 98.4 },
    { name: "Loops", connected: false },
    { name: "Klaviyo", connected: false },
    { name: "AWS SES (platform fallback)", connected: true, role: "transactional" },
  ];

  /* ─── TOKEN LEDGER & BILLING ─────────────────────────────────────── */
  const token_ledger = [
    { id: "tl_001", action_id: "a_3094", action_type: "patch_page_title", cost: 8, at: ago(2 * HOUR) },
    { id: "tl_002", action_id: "a_3072", action_type: "publish_blog", cost: 34, at: ago(2 * DAY) },
    { id: "tl_003", action_id: "a_3061", action_type: "send_winback", cost: 60, at: ago(3 * DAY) },
    { id: "tl_004", action_id: "a_3041", action_type: "ab_test_layout", cost: 22, at: ago(5 * DAY) },
    { id: "tl_005", action_id: "a_3030", action_type: "patch_meta_descriptions", cost: 14, at: ago(5 * DAY) },
    { id: "tl_006", action_id: "a_3018", action_type: "publish_testimonial_widget", cost: 6, at: ago(5 * DAY) },
    { id: "tl_007", action_id: "a_2998", action_type: "publish_journal", cost: 18, at: ago(7 * DAY) },
    { id: "tl_008", action_id: "a_2944", action_type: "send_welcome_series", cost: 18, at: ago(10 * DAY) },
    { id: "tl_009", action_id: "a_2899", action_type: "fill_content_gap", cost: 28, at: ago(14 * DAY) },
    { id: "tl_010", action_id: "a_2870", action_type: "send_cart_recovery", cost: 5, at: ago(16 * DAY) },
    { id: "tl_011", action_id: "a_2811", action_type: "auto_reply_5star", cost: 4, at: ago(21 * DAY) },
    { id: "tl_012", action_id: "a_2780", action_type: "monitor_ai_citation", cost: 2, at: ago(25 * DAY) },
  ];

  const billing = {
    plan: "Growth",
    plan_price: 149,
    next_invoice_at: new Date(now + 14 * DAY).toISOString(),
    payment_method: "Visa •• 4242",
    invoices: [
      { id: "in_2604", date: ago(16 * DAY), amount: 149, status: "paid" },
      { id: "in_2580", date: ago(46 * DAY), amount: 149, status: "paid" },
      { id: "in_2553", date: ago(76 * DAY), amount: 49,  status: "paid", plan: "Starter" },
    ],
    auto_refill: false,
    auto_refill_amount: 20,
  };

  /* ─── CREDENTIALS & WEBHOOKS ─────────────────────────────────────── */
  const credentials = [
    { id: "cr_google_ads", service: "Google Ads", scope: "ads.readwrite", last_refresh: ago(4 * HOUR), expires_at: new Date(now + 86 * DAY).toISOString(), health: "ok" },
    { id: "cr_meta_ads", service: "Meta Marketing (System User)", scope: "ads_management", last_refresh: ago(2 * DAY), expires_at: null, health: "ok" },
    { id: "cr_gbp", service: "Google Business Profile", scope: "business.manage", last_refresh: ago(1 * DAY), expires_at: new Date(now + 78 * DAY).toISOString(), health: "ok" },
    { id: "cr_shopify", service: "Shopify Admin (silverjewelry)", scope: "read_write_products", last_refresh: ago(30 * 60 * 1000), expires_at: null, health: "ok" },
    { id: "cr_brevo", service: "Brevo (email ESP)", scope: "marketing", last_refresh: ago(6 * HOUR), expires_at: null, health: "ok" },
    { id: "cr_paystack", service: "Paystack (payments)", scope: "transactions", last_refresh: ago(12 * HOUR), expires_at: null, health: "ok" },
  ];

  const webhook_log = [
    { id: "wh_1", source: "Shopify", event: "orders/create", at: ago(2 * HOUR), status: "200", duration_ms: 142 },
    { id: "wh_2", source: "Paystack", event: "charge.success", at: ago(6 * HOUR), status: "200", duration_ms: 88 },
    { id: "wh_3", source: "WhatsApp", event: "messages", at: ago(40 * 60 * 1000), status: "200", duration_ms: 31 },
    { id: "wh_4", source: "Meta", event: "ad_review_status", at: ago(8 * HOUR), status: "200", duration_ms: 67 },
    { id: "wh_5", source: "Brevo", event: "email.bounce", at: ago(1 * DAY), status: "200", duration_ms: 22 },
    { id: "wh_6", source: "Google Ads", event: "campaign_status_change", at: ago(2 * DAY), status: "200", duration_ms: 51 },
    { id: "wh_7", source: "WhatsApp", event: "messages", at: ago(2 * DAY), status: "401", duration_ms: 9, error: "signature mismatch — replayed and verified" },
  ];

  /* ─── FRAUD / QUALITY ────────────────────────────────────────────── */
  const fraud_panel = {
    last_24h: {
      events_total: 8420,
      bot_filtered: 312,
      bot_pct: 3.7,
      click_fraud_blocked: 18,
      fake_reviews_flagged: 0,
    },
    by_source: [
      { source: "Direct", events: 4100, bot_pct: 1.2 },
      { source: "Google Ads", events: 2200, bot_pct: 3.4 },
      { source: "Meta Ads", events: 1100, bot_pct: 9.8, status: "elevated" },
      { source: "Organic", events: 1020, bot_pct: 2.0 },
    ],
  };

  /* ─── PERFORMANCE BUDGET ─────────────────────────────────────────── */
  const performance_budget = {
    sdk_size_kb: 12.8,
    sdk_budget_kb: 15,
    widget_size_kb: 41.2,
    widget_budget_kb: 50,
    avg_lcp_impact_ms: -180, // negative means improved
    cf_worker_time_ms: 6.4,
    cf_worker_budget_ms: 10,
  };

  /* ─── API KEYS ───────────────────────────────────────────────────── */
  const api_keys = [
    { id: "k_live", label: "Production", prefix: "sf_live_8h2k", masked_tail: "•••• 7q1d", created_at: ago(82 * DAY), last_used: ago(2 * HOUR) },
    { id: "k_test", label: "Test / staging", prefix: "sf_test_3p9w", masked_tail: "•••• 4r6m", created_at: ago(82 * DAY), last_used: ago(1 * DAY) },
  ];

  /* ─── NOTIFICATIONS / EMAIL DIGEST ───────────────────────────────── */
  const notifications = [
    { id: "n_1", at: ago(2 * HOUR), title: "Homepage headline live", body: "I rewrote your homepage headline. Bounce rate down 18%.", action_id: "a_3094", read: false, kind: "action" },
    { id: "n_2", at: ago(5 * HOUR), title: "11 meta descriptions updated", body: "Updated meta descriptions on product pages.", action_id: "a_3030", read: false, kind: "action" },
    { id: "n_3", at: ago(4 * DAY), title: "Two reviews need your approval", body: "Drafted replies to a 5★ and a 4★. Awaiting you.", read: false, kind: "approval" },
    { id: "n_4", at: ago(6 * HOUR), title: "Mother's Day campaign ready", body: "Confirm to launch in 3 days. Budget $400.", read: false, kind: "approval" },
    { id: "n_5", at: ago(8 * DAY), title: "Switched attribution to data-driven", body: "Past 100 conversions — Shapley now active.", action_id: "a_2972", read: true, kind: "system" },
    { id: "n_6", at: ago(11 * DAY), title: "Patch reverted by you", body: "Schema markup change rolled back. I'll remember.", action_id: "a_2922", read: true, kind: "learning" },
  ];

  /* ─── AUDIT LOG ──────────────────────────────────────────────────── */
  const audit_log = [
    { at: ago(30 * 60 * 1000), actor: "Amara Okafor", action: "approved review reply", target: "a_3055" },
    { at: ago(2 * HOUR), actor: "system", action: "executed", target: "a_3094 patch_page_title" },
    { at: ago(2 * HOUR), actor: "system", action: "scheduled outcome measurement", target: "a_3094 (7 days)" },
    { at: ago(6 * HOUR), actor: "Amara Okafor", action: "toggled autonomy", target: "Engine 3 (Ads): full_auto → suggest_confirm" },
    { at: ago(11 * DAY), actor: "Amara Okafor", action: "rolled back action", target: "a_2922 patch_schema_markup" },
    { at: ago(82 * DAY), actor: "Amara Okafor", action: "created workspace", target: "ws_silver" },
  ];

  /* ─── ONBOARDING RECOMMENDATIONS (post-analysis) ─────────────────── */
  const first_recommendations = [
    { title: "Your homepage doesn't say what you sell above the fold", impact: "high", engine: "seo_geo", est_lift: "+12% add-to-cart" },
    { title: "11 product pages have auto-generated meta descriptions", impact: "high", engine: "seo_geo", est_lift: "+8% organic CTR" },
    { title: "You don't rank for 'how to clean silver' — 14k searches/mo", impact: "medium", engine: "content", est_lift: "+~600 organic visits/mo" },
    { title: "Cart abandonment recovery isn't running on WhatsApp", impact: "medium", engine: "whatsapp", est_lift: "+~$400 recovered/mo" },
    { title: "Facebook Ads costs 2x Google for the same outcome", impact: "high", engine: "bi", est_lift: "+$200/wk freed up" },
  ];

  /* ─── DEMO CONTROL — edge case triggers ──────────────────────────── */
  const edge_cases = [
    { id: "ec_csp_block", label: "JS SDK blocked by site CSP" },
    { id: "ec_kv_stale", label: "Cloudflare KV cache stale" },
    { id: "ec_halluc", label: "Patch hallucination flagged" },
    { id: "ec_sitemap_changed", label: "Site URL structure changed" },
    { id: "ec_ad_suspended", label: "Ad account suspended" },
    { id: "ec_meta_review_long", label: "Meta ad review > 48h" },
    { id: "ec_wa_window", label: "WhatsApp 24h window expiring" },
    { id: "ec_wa_handoff", label: "WhatsApp handed off to human" },
    { id: "ec_email_bounce", label: "Email bounce > 5% — auto-paused" },
    { id: "ec_attrib_insufficient", label: "Insufficient attribution data" },
    { id: "ec_channel_learning", label: "New channel < 14 days" },
    { id: "ec_patch_regression", label: "Patch hurt performance — auto-disabled" },
    { id: "ec_token_low_20", label: "Token balance 20% threshold" },
    { id: "ec_token_low_5", label: "Token balance 5% — autonomous jobs paused" },
    { id: "ec_token_spike", label: "Token cost spike above pattern" },
    { id: "ec_three_undos", label: "3+ consecutive undos — learning prompt" },
    { id: "ec_conflict", label: "Conflicting optimization (SEO vs CRO)" },
    { id: "ec_budget_out", label: "Ad budget ran out" },
  ];

  /* ─── EXPORT ─────────────────────────────────────────────────────── */
  global.SeenFolioMock = {
    user, workspaces, team, pages, patches, actions, stats, attribution,
    ai_citations, sitemap_diff, pending, brand_voice, content_campaigns,
    content_gaps, ad_accounts, campaigns, creative_variants, reviews, gbp,
    contacts, conversations, message_templates, email_campaigns, esp_options,
    token_ledger, billing, credentials, webhook_log, fraud_panel,
    performance_budget, api_keys, notifications, audit_log,
    first_recommendations, edge_cases,
    // Helpers
    fmtCurrency(value, currency = "$") {
      if (value === null || value === undefined) return "—";
      return currency + value.toLocaleString();
    },
    fmtAgo(iso) {
      const d = Date.now() - new Date(iso).getTime();
      if (d < 60 * 1000) return "just now";
      if (d < HOUR) return Math.floor(d / 60000) + "m ago";
      if (d < DAY) return Math.floor(d / HOUR) + "h ago";
      if (d < 14 * DAY) return Math.floor(d / DAY) + "d ago";
      return new Date(iso).toLocaleDateString();
    },
  };
})(window);
