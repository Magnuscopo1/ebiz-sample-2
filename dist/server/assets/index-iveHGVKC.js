import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Package, Warehouse, Truck, Users, ShieldCheck, TrendingUp } from "lucide-react";
const heroImg = "/assets/hero-3d-finbbBG2.jpg";
const warehouseImg = "/assets/warehouse-3d-CagIi_NL.jpg";
const hrImg = "/assets/hr-3d-CZtQFvy6.jpg";
const stats = [{
  value: "2",
  label: "Strategic Locations"
}, {
  value: "End-to-End",
  label: "Operations Coverage"
}, {
  value: "Pan-India",
  label: "Logistics Reach"
}, {
  value: "24/7",
  label: "Operational Support"
}];
const features = [{
  icon: Package,
  title: "Marketplace Onboarding",
  desc: "Cataloguing, SKU creation, listing optimisation and compliance with marketplace guidelines."
}, {
  icon: Warehouse,
  title: "Warehousing & Inventory",
  desc: "Secure storage with real-time tracking, FIFO management and quality checks."
}, {
  icon: Truck,
  title: "Order Fulfilment",
  desc: "Pick, pack, label and dispatch with COD or prepaid courier integration across India."
}, {
  icon: Users,
  title: "HR & Recruitment",
  desc: "Talent acquisition, HR operations, policies and performance management systems."
}, {
  icon: ShieldCheck,
  title: "Compliance Support",
  desc: "Tax, invoicing, returns and packaging norms — fully audit-ready."
}, {
  icon: TrendingUp,
  title: "Scalable Infrastructure",
  desc: "Grow without limits — capacity, forecasting and logistics relationships handled."
}];
function HomePage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden min-h-[92vh] flex items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsx("img", { src: heroImg, alt: "", className: "absolute inset-0 w-full h-full object-cover opacity-60", width: 1920, height: 1280 }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-30" }),
        /* @__PURE__ */ jsx("div", { className: "absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/20 blur-3xl animate-pulse-glow" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl animate-pulse-glow" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-7xl px-6 py-32 grid lg:grid-cols-12 gap-12 items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 space-y-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium", children: [
            /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full bg-primary animate-pulse" }),
            "E-commerce Operations · HR Solutions"
          ] }),
          /* @__PURE__ */ jsxs("h1", { className: "text-5xl md:text-7xl font-bold leading-[1.05]", children: [
            "Backend operations",
            /* @__PURE__ */ jsx("br", {}),
            "built for ",
            /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "brands that scale." })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground max-w-xl leading-relaxed", children: "Atya Ebiz Solutions LLP is your reliable back-end operations arm — from marketplace onboarding to warehousing, fulfilment, logistics and strategic HR." }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4", children: [
            /* @__PURE__ */ jsxs(Link, { to: "/services", className: "group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary-gradient text-primary-foreground font-semibold shadow-glow hover:scale-105 transition-transform", children: [
              "Explore Services ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 18, className: "group-hover:translate-x-1 transition-transform" })
            ] }),
            /* @__PURE__ */ jsx(Link, { to: "/contact", className: "inline-flex items-center gap-2 px-7 py-3.5 rounded-full glass font-semibold hover:border-primary/50 transition-colors", children: "Talk to Us" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "lg:col-span-5 hidden lg:block", children: /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx("div", { className: "glass rounded-3xl p-6 shadow-elegant animate-float", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4", children: stats.map((s) => /* @__PURE__ */ jsxs("div", { className: "bg-card/40 rounded-2xl p-5 border border-border", children: [
          /* @__PURE__ */ jsx("div", { className: "text-2xl font-display font-bold text-gradient", children: s.value }),
          /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground mt-1", children: s.label })
        ] }, s.label)) }) }) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "relative py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mb-16", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-primary uppercase tracking-widest mb-3", children: "What we do" }),
        /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold", children: "A complete operations engine for your brand." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: features.map((f) => /* @__PURE__ */ jsxs("div", { className: "group relative bg-card-gradient border border-border rounded-2xl p-8 hover:border-primary/50 transition-all hover:-translate-y-1", children: [
        /* @__PURE__ */ jsx("div", { className: "h-12 w-12 rounded-xl bg-primary-gradient grid place-items-center shadow-glow mb-5", children: /* @__PURE__ */ jsx(f.icon, { size: 22, className: "text-primary-foreground" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2", children: f.title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: f.desc })
      ] }, f.title)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative rounded-3xl overflow-hidden shadow-elegant", children: [
        /* @__PURE__ */ jsx("img", { src: warehouseImg, alt: "Premium warehousing infrastructure", loading: "lazy", width: 1600, height: 1024, className: "w-full h-full object-cover" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-tr from-background/60 to-transparent" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-primary uppercase tracking-widest mb-3", children: "E-commerce Suite" }),
        /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold mb-6", children: "Warehouse-grade fulfilment, marketplace-ready compliance." }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-8 leading-relaxed", children: "Secure storage in Bengaluru with real-time stock tracking. Pick, pack, label and dispatch with COD or prepaid integration across India — all aligned with marketplace SLAs." }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-3 text-sm", children: ["Marketplace onboarding & catalogue setup", "FIFO inventory with quality checks", "Pan-India courier coordination", "Returns & compliance handling"].map((i) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }),
          i
        ] }, i)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "order-2 lg:order-1", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-primary uppercase tracking-widest mb-3", children: "HR Suite" }),
        /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold mb-6", children: "Build strong, scalable teams without the overhead." }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-8 leading-relaxed", children: "From talent acquisition to performance frameworks, we set up the HR backbone start-ups and growing brands need to scale sustainably." }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-3 text-sm", children: ["End-to-end recruitment across all levels", "HR operations & employee lifecycle", "Policies, documentation & compliance", "KPI / KRA & performance management"].map((i) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }),
          i
        ] }, i)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "order-1 lg:order-2 relative rounded-3xl overflow-hidden shadow-elegant", children: [
        /* @__PURE__ */ jsx("img", { src: hrImg, alt: "Strategic HR and talent networks", loading: "lazy", width: 1600, height: 1024, className: "w-full h-full object-cover" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-tl from-background/60 to-transparent" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-28", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-5xl px-6", children: /* @__PURE__ */ jsxs("div", { className: "relative glass rounded-3xl p-12 md:p-16 text-center overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-primary/20 blur-3xl" }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-5", children: "Let's scale your operations." }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-xl mx-auto mb-8", children: "Partner with a team that treats your backend as the foundation of your growth." }),
        /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary-gradient text-primary-foreground font-semibold shadow-glow hover:scale-105 transition-transform", children: [
          "Start the Conversation ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 18 })
        ] })
      ] })
    ] }) }) })
  ] });
}
export {
  HomePage as component
};
