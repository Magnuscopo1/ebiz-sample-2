import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Target, Eye, Heart } from "lucide-react";
const aboutImg = "/assets/about-3d-CY6YDU5D.jpg";
const values = [{
  icon: Target,
  title: "Cost & Time Efficiency",
  desc: "A ready-to-use, professional setup instead of building your own infrastructure."
}, {
  icon: Eye,
  title: "Transparency",
  desc: "Clearly defined processes, stock tracking, fulfilment protocols and compliance."
}, {
  icon: Heart,
  title: "Long-term Partnership",
  desc: "Aligned with your growth goals — flexibility and professionalism at every step."
}];
function AboutPage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative py-32 overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-20" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl" }),
      /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-primary uppercase tracking-widest mb-4", children: "Who we are" }),
          /* @__PURE__ */ jsxs("h1", { className: "text-5xl md:text-6xl font-bold leading-[1.05] mb-6", children: [
            "A back-end ",
            /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "built for brands" }),
            " that wish to scale."
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground leading-relaxed", children: "Atya Ebiz Solutions LLP is envisioned as a specialised partner for e-commerce sellers and brands — offering end-to-end support from online onboarding to warehousing, inventory management, order fulfilment and logistics coordination." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "relative rounded-3xl overflow-hidden shadow-elegant", children: /* @__PURE__ */ jsx("img", { src: aboutImg, alt: "Premium abstract 3D composition", width: 1600, height: 1024, className: "w-full" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-card-gradient border border-border rounded-3xl p-10", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4", children: "E-commerce Solutions" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "We act as a reliable back-end operations arm for brands who wish to scale rapidly but want to avoid the complexity of managing warehousing, inventory, dispatch and marketplace compliance themselves." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-card-gradient border border-border rounded-3xl p-10", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4", children: "HR Solutions" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "We provide strategic HR and recruitment services to start-ups, B2B/D2C brands and growing businesses — helping organisations build strong, scalable teams and professional HR frameworks." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-2xl mx-auto mb-16", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-primary uppercase tracking-widest mb-3", children: "Our commitment" }),
        /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold", children: "More than a service provider." }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4", children: "We aim to be a reliable business partner — flexibility, transparency and professionalism at every step." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: values.map((v) => /* @__PURE__ */ jsxs("div", { className: "bg-card-gradient border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors", children: [
        /* @__PURE__ */ jsx("div", { className: "h-12 w-12 rounded-xl bg-primary-gradient grid place-items-center shadow-glow mb-5", children: /* @__PURE__ */ jsx(v.icon, { size: 22, className: "text-primary-foreground" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2", children: v.title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: v.desc })
      ] }, v.title)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-10 text-center", children: "Our Locations" }),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "glass rounded-2xl p-8", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-widest text-primary font-semibold mb-3", children: "Bengaluru — Registered Office" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Survey No. 133/2, V Begur Hobli, Mylasandra, Begur, Bangalore South, Bengaluru, Karnataka 560068" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "glass rounded-2xl p-8", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-widest text-primary font-semibold mb-3", children: "Gurugram Operations" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Khewat No. 424, Mustil No. 13, Killa No. 22/2, Village Kankrola, PO Bhangrola, Gurugram, Haryana 122505" })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  AboutPage as component
};
