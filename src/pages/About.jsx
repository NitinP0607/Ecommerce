
import React, { useState } from "react";

const benefits = [
  {
    icon: "✧",
    title: "Quality You Can Feel",
    description:
      "We focus on comfortable styles, thoughtful details and everyday value.",
  },
  {
    icon: "✳",
    title: "Style That Inspires",
    description:
      "Discover versatile pieces inspired by modern fashion and individuality.",
  },
  {
    icon: "♡",
    title: "Made for Everyone",
    description:
      "Explore clothing for Men, Women and Kids, all in one place.",
  },
  {
    icon: "↗",
    title: "Shopping Made Simple",
    description:
      "Enjoy easy browsing, convenient ordering and a smooth shopping journey.",
  },
];

const values = [
  {
    number: "01",
    icon: "♧",
    title: "Thoughtful Choices",
    description:
      "We believe fashion can keep evolving. We aim to make considered choices as NITRA grows.",
  },
  {
    number: "02",
    icon: "♡",
    title: "Inclusivity",
    description:
      "Personal style belongs to everyone. We want people to feel comfortable being themselves.",
  },
  {
    number: "03",
    icon: "☆",
    title: "Quality First",
    description:
      "We look for the details that matter: comfort, versatility, fit and value.",
  },
  {
    number: "04",
    icon: "♧",
    title: "Customer First",
    description:
      "Your feedback matters. We keep learning to make your shopping experience better.",
  },
];

const categories = [
  {
    name: "MEN",
    subtitle: "Everyday essentials",
    number: "01",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "WOMEN",
    subtitle: "Find your expression",
    number: "02",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85",
  },
  {
    name: "KIDS",
    subtitle: "Comfort for little days",
    number: "03",
    image:
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=1000&q=85",
  },
];

const faqs = [
  {
    question: "What is NITRA?",
    answer:
      "NITRA is a fashion shopping brand focused on modern, wearable clothing for Men, Women and Kids.",
  },
  {
    question: "How can I explore your collections?",
    answer:
      "Visit the Collection page and browse products by category, type or your preferred style.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "Visit the Contact page on our website for the available support details and contact options.",
  },
  {
    question: "How can I learn about shipping and returns?",
    answer:
      "Please check the Shipping Policy and Return Policy pages on the website for the current terms.",
  },
];

const Eyebrow = ({ children, light = false }) => (
  <div
    className={`mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] sm:text-xs ${
      light ? "text-stone-300" : "text-stone-500"
    }`}
  >
    <span
      className={`h-px w-8 ${light ? "bg-stone-400" : "bg-stone-400"}`}
    />
    {children}
  </div>
);

const ShopButton = ({
  children,
  light = false,
  href = "/collection",
}) => (
  <a
    href={href}
    className={`group inline-flex items-center justify-center gap-5 border px-6 py-3.5 text-xs font-semibold uppercase tracking-wider transition duration-300 sm:px-8 ${
      light
        ? "border-white bg-white text-stone-950 hover:bg-transparent hover:text-white"
        : "border-stone-950 bg-stone-950 text-white hover:bg-transparent hover:text-stone-950"
    }`}
  >
    {children}
    <span className="transition-transform duration-300 group-hover:translate-x-1">
      ↗
    </span>
  </a>
);

const About = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [email, setEmail] = useState("");

  const handleNewsletter = (e) => {
    e.preventDefault();
    alert(
      "Thanks for your interest! Connect this form to your newsletter service to save subscriptions."
    );
    setEmail("");
  };

  return (
    <main className="overflow-hidden bg-[#f7f6f2] font-sans text-[#20211e]">

      {/* 01 — EDITORIAL HERO */}
      <section className="px-4 pb-8 pt-5 sm:px-8 sm:pt-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-6 flex items-center justify-between border-b border-stone-300 pb-4">
            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-stone-500">
              EST. IN STYLE
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-500">
              THE NITRA STORY — 001
            </span>
          </div>

          <div className="grid gap-7 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
            <div className="flex flex-col justify-center py-8 sm:py-12 lg:py-16">
              <Eyebrow>Welcome to NITRA</Eyebrow>

              <h1 className="font-serif text-[clamp(3.4rem,8vw,7.8rem)] font-normal leading-[0.91] tracking-[-0.065em]">
                More than
                <br />
                fashion<span className="text-stone-400">.</span>
                <br />
                <span className="italic text-stone-500">
                  A way of life.
                </span>
              </h1>

              <p className="mt-8 max-w-lg text-sm leading-7 text-stone-600 sm:text-base sm:leading-8">
                We believe what you wear is a reflection of who you are.
                Discover a world of modern, comfortable and versatile fashion
                designed to make everyday dressing feel special.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <ShopButton>Explore Collection</ShopButton>
                <ShopButton href="/contact" light>
                  Contact Us
                </ShopButton>
              </div>

              <div className="mt-12 flex items-center gap-4">
                <span className="h-px w-12 bg-stone-400" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500">
                  Personal style. Everyday confidence.
                </span>
              </div>
            </div>

            <div className="relative min-h-[390px] overflow-hidden bg-stone-200 sm:min-h-[520px] lg:min-h-[660px]">
              <img
                src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1400&q=90"
                alt="Contemporary fashion editorial"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/5" />

              <div className="absolute left-5 top-5 border border-white/60 px-4 py-3 text-[10px] uppercase tracking-[0.22em] text-white sm:left-7 sm:top-7">
                Everyday / Elevated
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white sm:bottom-9 sm:left-9 sm:right-9">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-white/80">
                    Discover your style
                  </p>
                  <p className="mt-2 font-serif text-3xl italic sm:text-4xl">
                    Wear your story.
                  </p>
                </div>
                <span className="grid h-12 w-12 place-items-center rounded-full border border-white/70 text-xl">
                  ↘
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — BRAND INTRODUCTION */}
      <section className="bg-white px-5 py-20 sm:px-10 sm:py-28 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <div>
            <Eyebrow>01 / Who We Are</Eyebrow>

            <h2 className="font-serif text-4xl font-normal leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              The art of
              <br />
              <span className="italic text-stone-500">
                everyday dressing.
              </span>
            </h2>

            <div className="mt-8 h-px w-20 bg-stone-400" />

            <p className="mt-7 text-sm leading-8 text-stone-600 sm:text-base">
              NITRA is built around a simple idea: style should feel personal,
              comfortable and accessible.
            </p>
          </div>

          <div className="grid gap-7 sm:grid-cols-[1.05fr_0.95fr] sm:items-center">
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=85"
              alt="Fashion and shopping lifestyle"
              loading="lazy"
              className="h-[340px] w-full object-cover sm:h-[440px]"
            />

            <div className="sm:py-8">
              <p className="text-sm leading-8 text-stone-600 sm:text-base">
                We bring together modern designs and everyday essentials to
                help you find pieces that fit your lifestyle.
              </p>

              <p className="mt-5 text-sm leading-8 text-stone-600 sm:text-base">
                Whether you're dressing for work, a relaxed weekend or a
                special occasion, we want NITRA to be a place where finding
                your style feels easy and enjoyable.
              </p>

              <a
                href="/collection"
                className="mt-8 inline-flex items-center gap-4 border-b border-stone-900 pb-2 text-xs font-semibold uppercase tracking-[0.15em]"
              >
                Discover NITRA <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — BRAND BENEFITS */}
      <section className="bg-[#eae8e1] px-5 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <Eyebrow>02 / The NITRA Difference</Eyebrow>
              <h2 className="font-serif text-4xl font-normal sm:text-5xl">
                Made for real life.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-stone-600">
              Good style is not just about how it looks. It's how it feels,
              fits and works for you.
            </p>
          </div>

          <div className="grid border-l border-t border-stone-300 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item, index) => (
              <article
                key={item.title}
                className="group border-b border-r border-stone-300 p-6 transition-colors duration-300 hover:bg-white sm:p-8 lg:p-7 xl:p-9"
              >
                <div className="flex items-start justify-between">
                  <span className="font-serif text-3xl text-stone-600">
                    {item.icon}
                  </span>
                  <span className="text-[10px] tracking-widest text-stone-400">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-9 font-serif text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-stone-600">
                  {item.description}
                </p>

                <span className="mt-7 block h-px w-8 bg-stone-400 transition-all duration-300 group-hover:w-16" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — FULL BLEED STATEMENT */}
      <section className="relative isolate flex min-h-[430px] items-center justify-center overflow-hidden px-5 py-20 text-center text-white sm:min-h-[530px] sm:py-28">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1800&q=90"
          alt="Fashion store interior"
          loading="lazy"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />

        <div className="absolute inset-0 -z-10 bg-[#191a17]/75" />

        <div className="max-w-4xl">
          <Eyebrow light>03 / More Than What You Wear</Eyebrow>

          <h2 className="font-serif text-5xl font-normal leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Confidence
            <br />
            <span className="italic text-stone-300">
              looks good on you.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-stone-200 sm:text-base">
            Fashion is more than following trends. It's about finding what
            feels right for you, expressing your personality and showing up
            every day with confidence.
          </p>

          <div className="mt-8">
            <ShopButton light>Find Your Look</ShopButton>
          </div>
        </div>
      </section>

      {/* 05 — COLLECTIONS */}
      <section className="bg-[#f7f6f2] px-5 py-20 sm:px-10 sm:py-28 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow>04 / Explore NITRA</Eyebrow>
              <h2 className="font-serif text-4xl font-normal tracking-tight sm:text-5xl md:text-6xl">
                Find your
                <span className="italic text-stone-500"> expression.</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-stone-600">
              Different collections. Different personalities. One place to
              discover the style that feels like you.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {categories.map((item, index) => (
              <a
                href="/collection"
                key={item.name}
                className={`group relative isolate min-h-[390px] overflow-hidden bg-stone-300 sm:min-h-[480px] ${
                  index === 1 ? "md:mt-12" : ""
                }`}
              >
                <img
                  src={item.image}
                  alt={`${item.name} fashion`}
                  loading="lazy"
                  className="absolute inset-0 -z-20 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/75 via-black/5 to-black/10" />

                <div className="absolute left-5 top-5 border border-white/70 px-3 py-2 text-[10px] tracking-widest text-white">
                  COLLECTION / {item.number}
                </div>

                <div className="absolute inset-x-6 bottom-7 text-white sm:bottom-9">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/80">
                    {item.subtitle}
                  </p>
                  <h3 className="mt-2 font-serif text-4xl font-normal sm:text-5xl">
                    {item.name}
                  </h3>
                  <div className="mt-5 flex items-center justify-between border-t border-white/50 pt-4 text-xs font-semibold uppercase tracking-widest">
                    <span>Explore Collection</span>
                    <span className="text-lg transition-transform group-hover:translate-x-2">
                      →
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 06 — VALUES */}
      <section className="bg-white px-5 py-20 sm:px-10 sm:py-28 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Eyebrow>05 / What We Stand For</Eyebrow>

            <h2 className="font-serif text-4xl font-normal leading-tight sm:text-5xl md:text-6xl">
              Our values.
              <br />
              <span className="italic text-stone-500">Our promise.</span>
            </h2>

            <p className="mt-6 max-w-md text-sm leading-8 text-stone-600 sm:text-base">
              The principles that guide how we think about fashion, our
              customers and the experience we want to create.
            </p>

            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=85"
              alt="Curated wardrobe"
              loading="lazy"
              className="mt-9 hidden h-[330px] w-full object-cover lg:block"
            />
          </div>

          <div className="border-t border-stone-300">
            {values.map((item) => (
              <article
                key={item.number}
                className="grid grid-cols-[48px_1fr] gap-4 border-b border-stone-300 py-7 sm:grid-cols-[65px_1fr] sm:gap-7 sm:py-9"
              >
                <span className="pt-1 text-xs tracking-widest text-stone-400">
                  {item.number}
                </span>

                <div>
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-serif text-2xl font-medium sm:text-3xl">
                      {item.title}
                    </h3>
                    <span className="text-2xl text-stone-500">
                      {item.icon}
                    </span>
                  </div>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-stone-600 sm:text-base sm:leading-8">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 07 — LIFESTYLE */}
      <section className="grid bg-[#eae8e1] lg:grid-cols-2">
        <div className="relative min-h-[390px] sm:min-h-[550px]">
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1300&q=90"
            alt="Fashion wardrobe inspiration"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute bottom-6 left-6 bg-white px-5 py-4 sm:bottom-9 sm:left-9 sm:px-7 sm:py-5">
            <p className="font-serif text-2xl">Wear it your way.</p>
            <p className="mt-1 text-xs text-stone-500">
              Your wardrobe. Your personality.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center px-6 py-16 sm:px-12 sm:py-20 lg:px-16 xl:px-24">
          <Eyebrow>06 / Everyday Inspiration</Eyebrow>

          <h2 className="font-serif text-4xl font-normal leading-tight sm:text-5xl md:text-6xl">
            Make room for
            <br />
            <span className="italic text-stone-500">
              your own style.
            </span>
          </h2>

          <p className="mt-7 text-sm leading-8 text-stone-600 sm:text-base">
            The best outfits are the ones that feel natural to you. Build your
            wardrobe around pieces that work together, suit your routine and
            help you feel confident.
          </p>

          <p className="mt-5 text-sm leading-8 text-stone-600 sm:text-base">
            From everyday basics to statement pieces, NITRA is here to help
            you explore different looks and make them your own.
          </p>

          <div className="mt-8">
            <ShopButton>Discover Your Style</ShopButton>
          </div>
        </div>
      </section>

      {/* 08 — CUSTOMER EXPERIENCE */}
      <section className="bg-[#20211e] px-5 py-20 text-white sm:px-10 sm:py-24 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 md:items-end">
            <div>
              <Eyebrow light>07 / The NITRA Experience</Eyebrow>
              <h2 className="font-serif text-4xl font-normal sm:text-5xl md:text-6xl">
                Designed around
                <br />
                <span className="italic text-stone-400">you.</span>
              </h2>
            </div>

            <p className="max-w-lg text-sm leading-8 text-stone-300 md:justify-self-end">
              We want every step of your shopping journey to feel clear,
              convenient and enjoyable.
            </p>
          </div>

          <div className="mt-12 grid border-l border-t border-white/20 sm:grid-cols-3">
            {[
              {
                number: "01",
                icon: "⌕",
                title: "Discover",
                text: "Browse collections and find pieces that fit your taste.",
              },
              {
                number: "02",
                icon: "♡",
                title: "Choose",
                text: "Explore product details to find the style that suits you.",
              },
              {
                number: "03",
                icon: "✓",
                title: "Enjoy",
                text: "Shop with confidence and reach out when you need help.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="border-b border-r border-white/20 p-7 transition hover:bg-white/5 sm:p-9 lg:p-12"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl text-stone-300">
                    {item.icon}
                  </span>
                  <span className="text-xs tracking-widest text-stone-500">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-9 font-serif text-3xl">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-stone-300">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 09 — FAQ */}
      <section className="bg-[#f7f6f2] px-5 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          <div>
            <Eyebrow>08 / Need to Know</Eyebrow>

            <h2 className="font-serif text-4xl font-normal leading-tight sm:text-5xl md:text-6xl">
              Good to
              <br />
              <span className="italic text-stone-500">know.</span>
            </h2>

            <p className="mt-6 max-w-sm text-sm leading-8 text-stone-600">
              A few helpful answers to get you started on your NITRA journey.
            </p>

            <a
              href="/contact"
              className="mt-7 inline-flex items-center gap-3 border-b border-stone-900 pb-2 text-xs font-semibold uppercase tracking-widest"
            >
              Have another question? <span>↗</span>
            </a>
          </div>

          <div className="border-t border-stone-300">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="border-b border-stone-300"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-5 py-6 text-left sm:py-7"
                  >
                    <span className="font-serif text-lg sm:text-xl">
                      {faq.question}
                    </span>

                    <span className="grid h-8 w-8 shrink-0 place-items-center border border-stone-300 text-lg">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <p className="max-w-xl pb-7 pr-8 text-sm leading-7 text-stone-600">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10 — NEWSLETTER */}
      <section className="border-y border-stone-300 bg-[#eae8e1] px-5 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>09 / Stay Connected</Eyebrow>

            <h2 className="font-serif text-4xl font-normal leading-tight sm:text-5xl">
              A little NITRA
              <br />
              <span className="italic text-stone-500">in your inbox.</span>
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-stone-600">
              Stay connected for new collection announcements, styling
              inspiration and brand updates.
            </p>
          </div>

          <form onSubmit={handleNewsletter} className="w-full">
            <label
              htmlFor="nitra-email"
              className="mb-3 block text-xs font-semibold uppercase tracking-widest"
            >
              Your email address
            </label>

            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                id="nitra-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="min-w-0 flex-1 border border-stone-400 bg-transparent px-5 py-4 text-sm outline-none transition placeholder:text-stone-500 focus:border-stone-950"
              />

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-4 bg-stone-950 px-7 py-4 text-xs font-semibold uppercase tracking-widest text-white transition hover:bg-stone-700"
              >
                Subscribe <span>↗</span>
              </button>
            </div>

            <p className="mt-4 text-xs leading-5 text-stone-500">
              By subscribing, you agree to receive updates from NITRA.
            </p>
          </form>
        </div>
      </section>

      {/* 11 — FINAL CAMPAIGN */}
      <section className="relative isolate flex min-h-[460px] items-center justify-center overflow-hidden px-5 py-20 text-center text-white sm:min-h-[560px] sm:py-28">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1800&q=90"
          alt="Fashion campaign"
          loading="lazy"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 -z-10 bg-[#181916]/70" />

        <div className="max-w-4xl">
          <Eyebrow light>The Next Chapter</Eyebrow>

          <h2 className="font-serif text-5xl font-normal leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Your next favourite
            <br />
            <span className="italic text-stone-300">is waiting.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-stone-200 sm:text-base">
            Explore NITRA and discover everyday fashion that feels like it
            belongs to you.
          </p>

          <div className="mt-9">
            <ShopButton light>Shop the Collection</ShopButton>
          </div>

          <p className="mt-12 text-[10px] uppercase tracking-[0.35em] text-white/60">
            NITRA — Find Your Own Expression
          </p>
        </div>
      </section>

    </main>
  );
};

export default About;
