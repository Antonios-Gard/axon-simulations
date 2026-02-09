"use client";
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Cpu,
  Waves,
  Flame,
  Gauge,
  ShieldCheck,
  Blocks,
  CheckCircle2,
  FileDown,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Sparkles,
  Timer,
  ClipboardList,
  BadgeCheck,
} from "lucide-react";

export default function AxonEngineeringSimulationsPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const services = useMemo(
    () => [
      {
        title: "CFD / Ροές & Αερισμός",
        desc: "Ροές αέρα, εξαερισμοί, πτώσεις πίεσης, ανεμιστήρες, καπναγωγοί, HVAC, καθαροί χώροι.",
        icon: Waves,
        tags: ["Ventilation", "Δίκτυα", "HVAC"],
      },
      {
        title: "Thermal / Θερμικά",
        desc: "Μεταφορά θερμότητας, ψύξη/θέρμανση, θερμικές απώλειες, heat sinks, θερμικές γέφυρες.",
        icon: Flame,
        tags: ["Steady", "Transient", "HTC"],
      },
      {
        title: "Structural / Μηχανική Αντοχή",
        desc: "Στατική/δυναμική ανάλυση, συνδέσεις, κόπωση, ιδιομορφές, βελτιστοποίηση πάχους & μάζας.",
        icon: Gauge,
        tags: ["FEA", "Modal", "Fatigue"],
      },
      {
        title: "EM / Ηλεκτρομαγνητικά",
        desc: "Κοιλότητες RF, κεραίες, S-parameters, σύζευξη, απώλειες, Q-factor, θωράκιση.",
        icon: Cpu,
        tags: ["RF", "Microwave", "S-params"],
      },
      {
        title: "Fire & Safety Engineering",
        desc: "Τεχνικές αξιολογήσεις, σενάρια, καπνοί/θερμικά φορτία, υποστήριξη συμμόρφωσης & τεκμηρίωση.",
        icon: ShieldCheck,
        tags: ["Compliance", "Scenarios", "Reports"],
      },
      {
        title: "Parametric Design & Automation",
        desc: "Παραμετρικά μοντέλα, templates, batch runs, post-processing, dashboards.",
        icon: Blocks,
        tags: ["Automation", "Scripting", "QA"],
      },
    ],
    []
  );

  const workflow = useMemo(
    () => [
      {
        title: "1) Δωρεάν αξιολόγηση 15′",
        desc: "Μας λες στόχο, constraints, timelines. Σου προτείνουμε την κατάλληλη ανάλυση και deliverables.",
        icon: Phone,
      },
      {
        title: "2) Στήσιμο μοντέλου & παραδοχές",
        desc: "CAD/γεωμετρία, υλικά, συνοριακές συνθήκες. Τεκμηριωμένες παραδοχές και έλεγχοι ποιότητας.",
        icon: ClipboardList,
      },
      {
        title: "3) Runs & επαλήθευση",
        desc: "Mesh independence / convergence, sensitivity checks, validation όπου υπάρχουν δεδομένα.",
        icon: Timer,
      },
      {
        title: "4) Αναφορά & αρχεία",
        desc: "PDF report + εικόνες/plots + αρχεία εξαγωγής (CSV, STEP/IGES όπου χρειάζεται).",
        icon: FileDown,
      },
    ],
    []
  );

  const faqs = useMemo(
    () => [
      {
        q: "Τι χρειάζεται να σας στείλω για να ξεκινήσουμε;",
        a: "Ιδανικά: (α) CAD (STEP/IGES/SolidWorks/Inventor), (β) στόχο ανάλυσης (π.χ. θερμοκρασία max, πτώση πίεσης, ιδιοσυχνότητα), (γ) συνθήκες λειτουργίας (ροές, ισχύς, θερμοκρασίες, φορτία), (δ) περιορισμούς (χώρος, υλικά, budget) και (ε) προθεσμία.",
      },
      {
        q: "Δίνετε υπογραφή/τεχνική τεκμηρίωση;",
        a: "Παραδίδουμε πλήρη τεχνική αναφορά με παραδοχές, μεθοδολογία, αποτελέσματα και συμπεράσματα. Για θέματα κανονιστικής συμμόρφωσης, παρέχουμε υποστήριξη τεκμηρίωσης και φακέλου ανά περίπτωση.",
      },
      {
        q: "Μπορείτε να τρέξετε μεγάλα μοντέλα;",
        a: "Ναι. Επιλέγουμε λύση ανά έργο: από τοπικό workstation μέχρι απομακρυσμένους υπολογιστικούς πόρους για batch runs.",
      },
      {
        q: "Πόσο κοστίζει;",
        a: "Εξαρτάται από την πολυπλοκότητα, τον αριθμό σεναρίων και τα deliverables. Συνήθως προτείνουμε πακέτα: Quick Scan, Engineering Study, Design Optimization.",
      },
    ],
    []
  );

  const packages = useMemo(
    () => [
      {
        name: "Quick Scan",
        price: "Από 450€",
        highlight: "Γρήγορη τεχνική εικόνα",
        bullets: [
          "1 σενάριο / 1 κύκλος",
          "Σύντομο report 3–5 σελίδες",
          "Key plots + recommendations",
          "Παράδοση 3–5 εργάσιμες",
        ],
      },
      {
        name: "Engineering Study",
        price: "Από 1.200€",
        highlight: "Πλήρης μελέτη",
        bullets: [
          "2–4 σενάρια",
          "Convergence / sensitivity checks",
          "Report 10–25 σελίδες",
          "Review call & iteration",
        ],
      },
      {
        name: "Design Optimization",
        price: "Κατόπιν προσφοράς",
        highlight: "Βελτιστοποίηση & αυτοματοποίηση",
        bullets: [
          "Parametric model & batch runs",
          "Trade-off curves",
          "Design space exploration",
          "Handover package",
        ],
      },
    ],
    []
  );

  const tools = useMemo(
    () => [
      "ANSYS (Mechanical/CFD/HFSS)",
      "OpenFOAM / Open-source workflows",
      "CST Studio Suite",
      "COMSOL (σε συνεργασία)",
      "Python post-processing (NumPy/Matplotlib)",
      "CAD: STEP/IGES, SolidWorks/Inventor imports",
    ],
    []
  );

  function onChange(
   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl border shadow-sm">
              <Sparkles className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold">AXON ENGINEERING</div>
              <div className="text-xs text-muted-foreground">Mechanical & Energy Solutions</div>
            </div>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            <a className="text-sm text-muted-foreground hover:text-foreground" href="#services">
              Services
            </a>
            <a className="text-sm text-muted-foreground hover:text-foreground" href="#workflow">
              Workflow
            </a>
            <a className="text-sm text-muted-foreground hover:text-foreground" href="#packages">
              Packages
            </a>
            <a className="text-sm text-muted-foreground hover:text-foreground" href="#faq">
              FAQ
            </a>
            <a className="text-sm text-muted-foreground hover:text-foreground" href="#contact">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild variant="secondary" className="hidden sm:inline-flex">
              <a href="#contact">Request a quote</a>
            </Button>
            <Button asChild>
              <a href="#services">
                Explore <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]">
          <div className="absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-muted blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-5"
          >
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline" className="rounded-full">
                Simulations • CFD • FEA • EM
              </Badge>
              <Badge variant="secondary" className="rounded-full">
                Fast engineering turnaround
              </Badge>
            </div>

            <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
              Simulations που μειώνουν ρίσκο, κόστος και χρόνο ανάπτυξης.
            </h1>
            <p className="text-base text-muted-foreground md:text-lg">
              Από ροές & θερμικά μέχρι μηχανική αντοχή και RF/μικροκυματικά — φτιάχνουμε τεκμηριωμένες
              μελέτες, σενάρια και βελτιστοποιήσεις για προϊόντα, εγκαταστάσεις και R&D.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg">
                <a href="#contact">
                  Ζήτα προσφορά <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#workflow">Δες πώς δουλεύουμε</a>
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2 md:grid-cols-3">
              {["Μεσολογγίου • Ελλάδα", "Remote σε όλη την ΕΕ", "Reports & Deliverables"].map(
                (t) => (
                  <div key={t} className="flex items-center gap-2 rounded-2xl border p-3">
                    <CheckCircle2 className="h-4 w-4" />
                    <div className="text-sm text-muted-foreground">{t}</div>
                  </div>
                )
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <Card className="rounded-3xl shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">Τι παραδίδουμε</CardTitle>
                <CardDescription>Τυπικό πακέτο deliverables σε κάθε έργο.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-3">
                {[
                  {
                    title: "Τεχνική αναφορά PDF",
                    desc: "Μεθοδολογία, παραδοχές, αποτελέσματα, συστάσεις.",
                    icon: BadgeCheck,
                  },
                  {
                    title: "Plots & εικόνες",
                    desc: "Contours, vectors, S-params, stress/strain, temps.",
                    icon: Gauge,
                  },
                  {
                    title: "Data exports",
                    desc: "CSV/Excel datasets για χρήση σε δικά σου dashboards.",
                    icon: FileDown,
                  },
                ].map((x) => (
                  <div key={x.title} className="flex items-start gap-3 rounded-2xl border p-3">
                    <div className="grid h-10 w-10 place-items-center rounded-2xl bg-muted">
                      <x.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">{x.title}</div>
                      <div className="text-sm text-muted-foreground">{x.desc}</div>
                    </div>
                  </div>
                ))}

                <div className="rounded-2xl border p-3">
                  <div className="text-sm font-medium">Έχεις NDA / εμπιστευτικότητα;</div>
                  <div className="text-sm text-muted-foreground">
                    Υποστηρίζουμε NDA και ασφαλή ανταλλαγή αρχείων. Στείλε μας το template σου.
                  </div>
                </div>
              </CardContent>
            </Card>
           </motion.div>
          </div>
        </section>

      {/* Services */}
      <section id="services" className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="mb-8 flex flex-col gap-2">
            <h2 className="text-2xl font-semibold md:text-3xl">Simulation Services</h2>
            <p className="text-muted-foreground">
              Επιλέγουμε τη σωστή ανάλυση για το πρόβλημα — όχι «ένα tool για όλα».
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.35 }}
              >
                <Card className="h-full rounded-3xl">
                  <CardHeader>
                    <div className="mb-2 flex items-center justify-between">
                      <div className="grid h-10 w-10 place-items-center rounded-2xl bg-muted">
                        <s.icon className="h-5 w-5" />
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {s.tags.map((t) => (
                          <Badge key={t} variant="secondary" className="rounded-full">
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <CardTitle className="text-lg">{s.title}</CardTitle>
                    <CardDescription>{s.desc}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section id="workflow" className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="mb-8 flex flex-col gap-2">
            <h2 className="text-2xl font-semibold md:text-3xl">Πώς δουλεύουμε</h2>
            <p className="text-muted-foreground">
              Διαφανής διαδικασία, quality checks, και παραδοτέα που «στέκονται» τεχνικά.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {workflow.map((w) => (
              <Card key={w.title} className="rounded-3xl">
                <CardHeader>
                  <div className="mb-2 grid h-10 w-10 place-items-center rounded-2xl bg-muted">
                    <w.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-base">{w.title}</CardTitle>
                  <CardDescription>{w.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[{
              title: "Convergence & QA",
              desc: "Mesh independence, energy balance checks, residuals, και sanity checks.",
            },
            {
              title: "Reproducibility",
              desc: "Καταγράφουμε versions, settings, και παραδοχές για να επαναληφθεί η μελέτη.",
            },
            {
              title: "Decision-ready outputs",
              desc: "Μετρήσιμα KPIs και recommendations που οδηγούν σε επιλογές design.",
            }].map((x) => (
              <div key={x.title} className="rounded-3xl border p-5">
                <div className="text-sm font-semibold">{x.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{x.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="mb-8 flex flex-col gap-2">
            <h2 className="text-2xl font-semibold md:text-3xl">Ενδεικτικά πακέτα</h2>
            <p className="text-muted-foreground">
              Για να ξεκινήσουμε γρήγορα, χωρίς να «θολώνει» το scope.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {packages.map((p) => (
              <Card key={p.name} className="rounded-3xl">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{p.name}</span>
                    <Badge variant="secondary" className="rounded-full">
                      {p.highlight}
                    </Badge>
                  </CardTitle>
                  <CardDescription className="text-base">{p.price}</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-3">
                  <ul className="grid gap-2">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="mt-0.5 h-4 w-4" />
                        <span className="text-muted-foreground">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" className="rounded-2xl">
                    <a href="#contact">
                      Ζήτα προσφορά <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border p-5">
            <div className="text-sm font-semibold">Tools & stack</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {tools.map((t) => (
                <Badge key={t} variant="outline" className="rounded-full">
                  {t}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="mb-8 flex flex-col gap-2">
            <h2 className="text-2xl font-semibold md:text-3xl">FAQ</h2>
            <p className="text-muted-foreground">Συχνές ερωτήσεις πριν ξεκινήσουμε.</p>
          </div>

          <Card className="rounded-3xl">
            <CardContent className="p-2 md:p-4">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((f, idx) => (
                  <AccordionItem key={f.q} value={`item-${idx}`}>
                    <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-14 md:grid-cols-2">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold md:text-3xl">Επικοινωνία</h2>
            <p className="text-muted-foreground">
              Στείλε 2–3 γραμμές για το project και θα σου απαντήσουμε με προτεινόμενο scope και προσφορά.
            </p>

            <div className="grid gap-3">
              <div className="flex items-center gap-3 rounded-3xl border p-4">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-muted">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-medium">Email</div>
                  <div className="text-sm text-muted-foreground">antgardi@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-3xl border p-4">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-muted">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-medium">Τηλέφωνο</div>
                  <div className="text-sm text-muted-foreground">+30 6981 961 564</div>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-3xl border p-4">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-muted">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-medium">Έδρα</div>
                  <div className="text-sm text-muted-foreground">Κεντρική Πλατεία Μεσολογγίου</div>
                </div>
              </div>
            </div>

            <div className="mt-2 rounded-3xl border p-5">
              <div className="text-sm font-semibold">Tip για γρήγορη προσφορά</div>
              <div className="mt-1 text-sm text-muted-foreground">
                Αν στείλεις και 1–2 φωτογραφίες/σχέδια + βασικές συνθήκες λειτουργίας, μπορούμε να εκτιμήσουμε
                γρηγορότερα effort και κόστος.
              </div>
            </div>
          </div>

          <Card className="rounded-3xl">
            <CardHeader>
              <CardTitle>Request a quote</CardTitle>
              <CardDescription>
                (Demo φόρμα — σύνδεσε την με email/CRM όταν τη βάλεις σε hosting.)
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3">
              <div className="grid gap-3 md:grid-cols-2">
                <Input
                  name="name"
                  placeholder="Ονοματεπώνυμο"
                  value={form.name}
                  onChange={onChange}
                />
                <Input
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={onChange}
                />
              </div>
              <Input
                name="company"
                placeholder="Εταιρεία (προαιρετικό)"
                value={form.company}
                onChange={onChange}
              />
              <Textarea
                name="message"
                placeholder="Περιέγραψε το πρόβλημα/στόχο (π.χ. ροή 1200 m³/h, θερμικό φορτίο 2 kW, RF cavity 20 GHz...)"
                value={form.message}
                onChange={onChange}
                rows={6}
              />
              <Button
                className="rounded-2xl"
                onClick={() => {
                  // Replace with your integration (email, CRM, webhook)
                  const subject = encodeURIComponent("AXON Engineering — Request a quote");
                  const body = encodeURIComponent(
                    `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\n\nMessage:\n${form.message}`
                  );
                  window.location.href = `mailto:antgardi@gmail.com?subject=${subject}&body=${body}`;
                }}
              >
                Send <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <div className="text-xs text-muted-foreground">
                Πατώντας Send ανοίγει το email client σου. Δεν αποθηκεύουμε δεδομένα μέσα σε αυτή τη demo σελίδα.
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="text-sm">
              <span className="font-semibold">AXON ENGINEERING</span> — Simulations & Engineering Services
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <a className="hover:text-foreground" href="#services">
                Services
              </a>
              <a className="hover:text-foreground" href="#workflow">
                Workflow
              </a>
              <a className="hover:text-foreground" href="#packages">
                Packages
              </a>
              <a className="hover:text-foreground" href="#contact">
                Contact
              </a>
            </div>
          </div>

          <div className="mt-6 text-xs text-muted-foreground">
            © {new Date().getFullYear()} AXON Engineering. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
