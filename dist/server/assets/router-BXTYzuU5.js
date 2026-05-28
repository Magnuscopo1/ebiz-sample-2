import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Link, createRootRouteWithContext, useRouter, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { X, Menu, Mail, Phone, MapPin } from "lucide-react";
const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" }
];
function SiteHeader() {
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsxs("header", { className: "fixed top-0 inset-x-0 z-50 glass", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 h-16 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2 font-display font-bold text-lg", children: [
        /* @__PURE__ */ jsx("span", { className: "h-8 w-8 rounded-lg bg-primary-gradient grid place-items-center shadow-glow", children: /* @__PURE__ */ jsx("span", { className: "text-primary-foreground font-black", children: "A" }) }),
        /* @__PURE__ */ jsxs("span", { children: [
          "Atya",
          /* @__PURE__ */ jsx("span", { className: "text-primary", children: "." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("nav", { className: "hidden md:flex items-center gap-8", children: [
        nav.map((n) => /* @__PURE__ */ jsx(
          Link,
          {
            to: n.to,
            className: "text-sm text-muted-foreground hover:text-foreground transition-colors",
            activeProps: { className: "text-foreground font-medium" },
            activeOptions: { exact: n.to === "/" },
            children: n.label
          },
          n.to
        )),
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/contact",
            className: "px-5 py-2 rounded-full bg-primary-gradient text-primary-foreground text-sm font-semibold shadow-glow hover:scale-105 transition-transform",
            children: "Get Started"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("button", { className: "md:hidden text-foreground", onClick: () => setOpen(!open), "aria-label": "menu", children: open ? /* @__PURE__ */ jsx(X, { size: 22 }) : /* @__PURE__ */ jsx(Menu, { size: 22 }) })
    ] }),
    open && /* @__PURE__ */ jsx("div", { className: "md:hidden glass border-t border-border", children: /* @__PURE__ */ jsx("div", { className: "px-6 py-4 flex flex-col gap-3", children: nav.map((n) => /* @__PURE__ */ jsx(Link, { to: n.to, className: "text-sm py-2", onClick: () => setOpen(false), children: n.label }, n.to)) }) })
  ] });
}
function SiteFooter() {
  return /* @__PURE__ */ jsxs("footer", { className: "relative border-t border-border bg-card/30 mt-24", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 font-display font-bold text-lg", children: [
          /* @__PURE__ */ jsx("span", { className: "h-8 w-8 rounded-lg bg-primary-gradient grid place-items-center", children: /* @__PURE__ */ jsx("span", { className: "text-primary-foreground font-black", children: "A" }) }),
          "Atya Ebiz Solutions LLP"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm text-muted-foreground max-w-md", children: "Your reliable back-end operations partner for e-commerce growth and strategic HR solutions across India." })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold mb-4", children: "Navigate" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-primary", children: "Home" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/about", className: "hover:text-primary", children: "About" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/services", className: "hover:text-primary", children: "Services" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/contact", className: "hover:text-primary", children: "Contact" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold mb-4", children: "Reach Us" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx(Mail, { size: 14, className: "text-primary mt-1 shrink-0" }),
            " info@atyaebizsolutions.com"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx(Phone, { size: 14, className: "text-primary mt-1 shrink-0" }),
            " +91 75440 00929"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx(MapPin, { size: 14, className: "text-primary mt-1 shrink-0" }),
            " Bengaluru · Gurugram"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "border-t border-border py-6 text-center text-xs text-muted-foreground", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Atya Ebiz Solutions LLP. All rights reserved."
    ] })
  ] });
}
const appCss = "/assets/styles-C0eTzBRG.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$4 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Atya Ebiz Solutions LLP — E-commerce & HR Solutions" },
      { name: "description", content: "Reliable back-end operations partner: e-commerce onboarding, warehousing, fulfilment and strategic HR solutions across Bengaluru & Gurugram." },
      { property: "og:title", content: "Atya Ebiz Solutions LLP — E-commerce & HR Solutions" },
      { property: "og:description", content: "Reliable back-end operations partner: e-commerce onboarding, warehousing, fulfilment and strategic HR solutions across Bengaluru & Gurugram." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Atya Ebiz Solutions LLP — E-commerce & HR Solutions" },
      { name: "twitter:description", content: "Reliable back-end operations partner: e-commerce onboarding, warehousing, fulfilment and strategic HR solutions across Bengaluru & Gurugram." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/2b5931ad-db6d-4432-af63-c778c602bf41/id-preview-02755ff7--3613576d-83e0-4a29-bfce-2d487a9537e0.lovable.app-1779867177603.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/2b5931ad-db6d-4432-af63-c778c602bf41/id-preview-02755ff7--3613576d-83e0-4a29-bfce-2d487a9537e0.lovable.app-1779867177603.png" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$4.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col bg-background", children: [
    /* @__PURE__ */ jsx(SiteHeader, {}),
    /* @__PURE__ */ jsx("main", { className: "flex-1 pt-16", children: /* @__PURE__ */ jsx(Outlet, {}) }),
    /* @__PURE__ */ jsx(SiteFooter, {})
  ] }) });
}
const $$splitComponentImporter$3 = () => import("./services-JA8AFb7N.js");
const Route$3 = createFileRoute("/services")({
  head: () => ({
    meta: [{
      title: "Services — E-commerce & HR Solutions | Atya Ebiz"
    }, {
      name: "description",
      content: "Complete e-commerce fulfilment suite and strategic HR services — onboarding, warehousing, logistics, recruitment, policies and performance."
    }, {
      property: "og:title",
      content: "Services — Atya Ebiz Solutions"
    }, {
      property: "og:description",
      content: "Complete e-commerce and HR service suite."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./contact-CpN6F10q.js");
const Route$2 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — Atya Ebiz Solutions LLP"
    }, {
      name: "description",
      content: "Reach Atya Ebiz Solutions in Bengaluru or Gurugram. Email, phone and contact form for e-commerce and HR enquiries."
    }, {
      property: "og:title",
      content: "Contact Atya Ebiz Solutions"
    }, {
      property: "og:description",
      content: "Talk to our team about fulfilment and HR partnerships."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-CvLhSL9Z.js");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — Atya Ebiz Solutions LLP"
    }, {
      name: "description",
      content: "Atya Ebiz Solutions LLP is a specialised partner for e-commerce sellers and brands offering operations and HR solutions."
    }, {
      property: "og:title",
      content: "About Atya Ebiz Solutions"
    }, {
      property: "og:description",
      content: "Reliable back-end operations arm for brands scaling across India."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-iveHGVKC.js");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Atya Ebiz Solutions — E-commerce Fulfilment & HR Partner"
    }, {
      name: "description",
      content: "Scale your brand with end-to-end e-commerce onboarding, warehousing, fulfilment and HR solutions from Bengaluru & Gurugram."
    }, {
      property: "og:title",
      content: "Atya Ebiz Solutions LLP"
    }, {
      property: "og:description",
      content: "End-to-end e-commerce fulfilment and HR solutions for growing brands."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ServicesRoute = Route$3.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$4
});
const ContactRoute = Route$2.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$4
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$4
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$4
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  ServicesRoute
};
const routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
