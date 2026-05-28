import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Send, Mail, Phone, MapPin } from "lucide-react";
function ContactPage() {
  const [sent, setSent] = useState(false);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative py-28 overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-pattern opacity-20" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/15 blur-3xl" }),
      /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-4xl px-6 text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-primary uppercase tracking-widest mb-4", children: "Get in touch" }),
        /* @__PURE__ */ jsxs("h1", { className: "text-5xl md:text-6xl font-bold leading-[1.05] mb-6", children: [
          "Let's build your ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "backend together." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground", children: "Share a few details and our team will get back to you within one business day." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "pb-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 grid lg:grid-cols-5 gap-10", children: [
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-3 glass rounded-3xl p-8 md:p-10", children: sent ? /* @__PURE__ */ jsxs("div", { className: "text-center py-16", children: [
        /* @__PURE__ */ jsx("div", { className: "h-14 w-14 mx-auto rounded-full bg-primary-gradient grid place-items-center shadow-glow mb-5", children: /* @__PURE__ */ jsx(Send, { className: "text-primary-foreground", size: 22 }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-2", children: "Message received." }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "We'll be in touch shortly at the email you provided." })
      ] }) : /* @__PURE__ */ jsxs("form", { onSubmit: (e) => {
        e.preventDefault();
        setSent(true);
      }, className: "space-y-5", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsx(Field, { label: "Full Name", name: "name", required: true }),
          /* @__PURE__ */ jsx(Field, { label: "Company", name: "company" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsx(Field, { label: "Email", name: "email", type: "email", required: true }),
          /* @__PURE__ */ jsx(Field, { label: "Phone", name: "phone", type: "tel" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2", children: "Interested In" }),
          /* @__PURE__ */ jsxs("select", { className: "w-full bg-input border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary", children: [
            /* @__PURE__ */ jsx("option", { children: "E-commerce Fulfilment" }),
            /* @__PURE__ */ jsx("option", { children: "HR & Recruitment" }),
            /* @__PURE__ */ jsx("option", { children: "Both Suites" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2", children: "Message" }),
          /* @__PURE__ */ jsx("textarea", { rows: 5, required: true, className: "w-full bg-input border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary resize-none", placeholder: "Tell us about your brand and what you'd like to scale..." })
        ] }),
        /* @__PURE__ */ jsxs("button", { type: "submit", className: "w-full md:w-auto inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary-gradient text-primary-foreground font-semibold shadow-glow hover:scale-105 transition-transform", children: [
          "Send Message ",
          /* @__PURE__ */ jsx(Send, { size: 16 })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 space-y-6", children: [
        /* @__PURE__ */ jsx(InfoCard, { icon: Mail, title: "Email", lines: ["info@atyaebizsolutions.com", "atyaebiz@gmail.com"] }),
        /* @__PURE__ */ jsx(InfoCard, { icon: Phone, title: "Phone", lines: ["+91 75440 00929", "+91 93414 56513", "+91 80735 16150"] }),
        /* @__PURE__ */ jsx(InfoCard, { icon: MapPin, title: "Bengaluru", lines: ["Survey No. 133/2, V Begur Hobli,", "Mylasandra, Begur, Bangalore South,", "Karnataka 560068"] }),
        /* @__PURE__ */ jsx(InfoCard, { icon: MapPin, title: "Gurugram", lines: ["Khewat No. 424, Mustil No. 13,", "Killa No. 22/2, Village Kankrola,", "PO Bhangrola, Haryana 122505"] })
      ] })
    ] }) })
  ] });
}
function Field({
  label,
  name,
  type = "text",
  required
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("label", { className: "block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2", children: [
      label,
      required && " *"
    ] }),
    /* @__PURE__ */ jsx("input", { type, name, required, className: "w-full bg-input border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" })
  ] });
}
function InfoCard({
  icon: Icon,
  title,
  lines
}) {
  return /* @__PURE__ */ jsxs("div", { className: "bg-card-gradient border border-border rounded-2xl p-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
      /* @__PURE__ */ jsx("div", { className: "h-10 w-10 rounded-lg bg-primary-gradient grid place-items-center shadow-glow", children: /* @__PURE__ */ jsx(Icon, { size: 18, className: "text-primary-foreground" }) }),
      /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: title })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground space-y-1", children: lines.map((l) => /* @__PURE__ */ jsx("p", { children: l }, l)) })
  ] });
}
export {
  ContactPage as component
};
