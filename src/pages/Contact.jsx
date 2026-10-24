import React, { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Package,
  Phone,
  Send,
  ShoppingBag,
  Truck,
} from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Enquiry",
    orderNumber: "",
    message: "",
    consent: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const updateForm = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const inputStyle =
    "w-full rounded-lg border border-[#deded9] bg-white px-4 py-3.5 text-sm text-[#20201e] outline-none transition placeholder:text-[#a2a29d] focus:border-[#242421] focus:ring-1 focus:ring-[#242421]";

  const contactOptions = [
    {
      icon: Mail,
      title: "Email support",
      text: "For product questions, feedback and general enquiries.",
      detail: "support@nitra.in",
      href: "mailto:support@nitra.in",
    },
    {
      icon: Phone,
      title: "Phone support",
      text: "Speak with our team for help with your shopping experience.",
      detail: "Add your phone number",
      href: null,
    },
    {
      icon: Package,
      title: "Order assistance",
      text: "Need help with an order, delivery, return or exchange?",
      detail: "Get order help",
      href: "/profile",
    },
  ];

  const topics = [
    {
      icon: ShoppingBag,
      title: "Products & sizing",
      description:
        "Need help choosing a size, understanding a product, or finding the right fit? Tell us what you're looking for.",
      subject: "Product Enquiry",
    },
    {
      icon: Package,
      title: "Orders & payments",
      description:
        "Get help with order confirmation, payment questions, cancellations, or a problem during checkout.",
      subject: "Order & Payment",
    },
    {
      icon: Truck,
      title: "Shipping & delivery",
      description:
        "Have a question about delivery timelines, tracking, a delayed parcel, or your delivery address?",
      subject: "Shipping & Delivery",
    },
    {
      icon: CheckCircle2,
      title: "Returns & exchanges",
      description:
        "Contact us about return eligibility, exchanges, or an item that did not meet your expectations.",
      subject: "Returns & Exchanges",
    },
  ];

  const faqs = [
    {
      q: "How can I contact NITRA?",
      a: "You can use the contact form on this page or email our support team. Include a clear description of your question so we can help you more efficiently.",
    },
    {
      q: "How can I track my order?",
      a: "Sign in to your NITRA account and check your order details if tracking is available. You can also contact support with your order number.",
    },
    {
      q: "Can I cancel or change an order?",
      a: "Contact us as soon as possible with your order number and requested change. Whether we can make the change depends on the order's processing and shipping status.",
    },
    {
      q: "What if my item arrives damaged or incorrect?",
      a: "Please contact our team with your order number and a description of the issue. Photos of the product and packaging can help us understand the problem and explain the available options.",
    },
    {
      q: "How do returns and exchanges work?",
      a: "Eligibility depends on the product and NITRA's applicable return policy. Contact us with your order details and we will guide you through the relevant steps.",
    },
    {
      q: "When can I expect a response?",
      a: "Response times vary depending on enquiry volume. We aim to reply as promptly as possible. Please check your inbox and spam folder for our response.",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Demo only: connect this form to your backend API before launch.
    setSubmitted(true);
  };

  return (
    <main className="overflow-hidden bg-[#fafaf8] text-[#20201e]">
      {/* Announcement strip */}
      <div className="bg-[#20201e] px-4 py-3 text-center text-xs font-medium text-white">
        WE'RE HERE TO HELP — GET IN TOUCH WITH THE NITRA TEAM
      </div>

      {/* Hero */}
      <section className="mx-auto grid max-w-[1600px] lg:min-h-[570px] lg:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-16 sm:px-12 lg:px-16 xl:px-24">
          <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#777771]">
            <span className="h-px w-8 bg-[#777771]" />
            Contact NITRA
          </p>

          <h1 className="max-w-xl text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            We're here to
            <br />
            make things
            <br />
            <span className="text-[#8a8a80]">easier for you.</span>
          </h1>

          <p className="mt-7 max-w-lg text-sm leading-7 text-[#696963] sm:text-base sm:leading-8">
            Have a question about your order, need help choosing a product, or
            want to share some feedback? Whatever it is, we'd love to hear from
            you. Tell us how we can help.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact-form"
              className="inline-flex items-center gap-3 rounded-md bg-[#20201e] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#42423d]"
            >
              Send us a message
              <ArrowRight size={16} />
            </a>

            <a
              href="#contact-options"
              className="inline-flex items-center gap-2 rounded-md border border-[#d8d8d2] px-6 py-4 text-sm font-semibold transition hover:border-[#20201e]"
            >
              Other ways to reach us
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="mt-12 flex items-center gap-3 border-t border-[#e4e4df] pt-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ecece6]">
              <MessageCircle size={18} />
            </div>
            <div>
              <p className="text-sm font-semibold">Your experience matters</p>
              <p className="mt-1 text-xs text-[#777771]">
                Every question deserves attention.
              </p>
            </div>
          </div>
        </div>

        <div className="relative min-h-[370px] overflow-hidden bg-[#e9e7e1] lg:min-h-full">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=85"
            alt="Contemporary fashion boutique"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/5" />
          <div className="absolute bottom-8 left-7 right-7 text-white sm:bottom-12 sm:left-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
              The NITRA standard
            </p>
            <p className="mt-3 max-w-md text-2xl font-medium leading-snug sm:text-3xl">
              Good products. Honest answers. A better shopping experience.
            </p>
          </div>
        </div>
      </section>

      {/* Contact methods */}
      <section
        id="contact-options"
        className="border-y border-[#e8e8e2] bg-white px-6 py-16 sm:px-12 lg:px-20 lg:py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#888880]">
                Customer support
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Choose how to reach us
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-[#777771]">
              Choose the option that suits you best. We're committed to making
              your experience with NITRA straightforward and convenient.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {contactOptions.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group rounded-xl border border-[#e5e5df] p-6 transition hover:border-[#aaa99f] hover:shadow-lg hover:shadow-black/[0.03] sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#f1f1ec]">
                      <Icon size={20} strokeWidth={1.7} />
                    </div>
                    <span className="text-xs text-[#a0a098]">0{i + 1}</span>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 min-h-[48px] text-sm leading-6 text-[#777771]">
                    {item.text}
                  </p>
                  <div className="mt-6">
                    {item.href ? (
                      <a
                        href={item.href}
                        className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
                      >
                        {item.detail}
                        <ArrowUpRight size={14} />
                      </a>
                    ) : (
                      <span className="text-sm font-semibold">
                        {item.detail}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <p className="mt-5 text-xs leading-6 text-[#888880]">
            Update the sample contact details and links above with your real
            customer support information before launching.
          </p>
        </div>
      </section>

      {/* Support topics */}
      <section className="px-6 py-16 sm:px-12 lg:px-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#888880]">
              What do you need?
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Let's get you
              <br />
              <span className="text-[#8a8a80]">the right help.</span>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-[#777771]">
              From choosing the right item to getting an update on your
              delivery, select a topic below and we'll preselect it in your
              message form.
            </p>
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=85"
              alt="Customers exploring fashion"
              className="mt-8 h-64 w-full rounded-xl object-cover sm:h-80"
              loading="lazy"
            />
          </div>

          <div className="divide-y divide-[#e5e5df] border-y border-[#e5e5df]">
            {topics.map((topic, index) => {
              const Icon = topic.icon;
              return (
                <button
                  type="button"
                  key={topic.title}
                  onClick={() =>
                    setForm((prev) => ({ ...prev, subject: topic.subject }))
                  }
                  className="group grid w-full grid-cols-[40px_1fr_20px] gap-4 py-7 text-left sm:grid-cols-[48px_1fr_20px] sm:gap-5"
                >
                  <span className="pt-1 text-xs text-[#999990]">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold transition group-hover:text-[#777771] sm:text-lg">
                      {topic.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#777771]">
                      {topic.description}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-2 text-xs font-semibold">
                      Select topic <ArrowRight size={13} />
                    </span>
                  </div>
                  <Icon size={19} className="mt-1 text-[#777771]" />
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section
        id="contact-form"
        className="scroll-mt-20 border-y border-[#e8e8e2] bg-[#f1f1ec] px-6 py-16 sm:px-12 lg:px-20 lg:py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#888880]">
              Get in touch
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Tell us what's
              <br />
              on your mind.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-[#777771]">
              Fill in the form and share the details of your enquiry. If you're
              contacting us about an order, including your order number will
              help us understand your request.
            </p>

            <div className="mt-9 space-y-6">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white">
                  <Clock3 size={19} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Support hours</h3>
                  <p className="mt-1 text-sm leading-6 text-[#777771]">
                    Add your actual customer support days and hours here.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white">
                  <MapPin size={19} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">Business address</h3>
                  <p className="mt-1 text-sm leading-6 text-[#777771]">
                    Add your official business address if you want to display it
                    publicly.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-9 rounded-xl border border-[#deded6] bg-white p-6">
              <h3 className="text-base font-semibold">
                A quick tip before you send
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#777771]">
                For order-related questions, include your order number and
                checkout email. Never include your password, OTP, or complete
                payment card details.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-[#e1e1da] bg-white p-6 sm:p-9 lg:p-10">
            {submitted ? (
              <div className="flex min-h-[450px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#eef2e9]">
                  <CheckCircle2 size={30} />
                </div>
                <h3 className="mt-6 text-2xl font-semibold">
                  Thank you for reaching out.
                </h3>
                <p className="mt-3 max-w-md text-sm leading-7 text-[#777771]">
                  This is a demo confirmation only. Your message has not been
                  sent yet. Connect the form to your backend to enable delivery.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      name: "",
                      email: "",
                      phone: "",
                      subject: "General Enquiry",
                      orderNumber: "",
                      message: "",
                      consent: false,
                    });
                  }}
                  className="mt-7 rounded-md bg-[#20201e] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#42423d]"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <div className="mb-7 border-b border-[#e8e8e2] pb-6">
                  <h3 className="text-xl font-semibold">Contact form</h3>
                  <p className="mt-2 text-sm text-[#777771]">
                    Fields marked * are required.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium"
                    >
                      Full name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={updateForm}
                      className={inputStyle}
                      placeholder="Enter your full name"
                      autoComplete="name"
                      required
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium"
                      >
                        Email address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={updateForm}
                        className={inputStyle}
                        placeholder="you@example.com"
                        autoComplete="email"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-medium"
                      >
                        Phone number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={updateForm}
                        className={inputStyle}
                        placeholder="+91"
                        autoComplete="tel"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-medium"
                    >
                      Enquiry type *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={updateForm}
                      className={inputStyle}
                      required
                    >
                      <option>General Enquiry</option>
                      <option>Product Enquiry</option>
                      <option>Order & Payment</option>
                      <option>Shipping & Delivery</option>
                      <option>Returns & Exchanges</option>
                      <option>Account & Login</option>
                      <option>Feedback & Suggestions</option>
                      <option>Business Enquiry</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="orderNumber"
                      className="mb-2 block text-sm font-medium"
                    >
                      Order number{" "}
                      <span className="font-normal text-[#999990]">
                        (optional)
                      </span>
                    </label>
                    <input
                      id="orderNumber"
                      name="orderNumber"
                      value={form.orderNumber}
                      onChange={updateForm}
                      className={inputStyle}
                      placeholder="e.g. NTR-10001"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium"
                    >
                      How can we help? *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={updateForm}
                      className={`${inputStyle} min-h-[150px] resize-y`}
                      placeholder="Write your message here..."
                      minLength={10}
                      required
                    />
                    <p className="mt-2 text-right text-xs text-[#999990]">
                      {form.message.length} characters
                    </p>
                  </div>

                  <label className="flex items-start gap-3 text-xs leading-6 text-[#777771]">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={form.consent}
                      onChange={updateForm}
                      required
                      className="mt-1 h-4 w-4 accent-[#20201e]"
                    />
                    <span>
                      I agree that NITRA may use the information provided to
                      respond to my enquiry, in line with its privacy policy.
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-3 rounded-md bg-[#20201e] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#42423d]"
                  >
                    Submit enquiry
                    <Send size={16} />
                  </button>

                  <p className="text-center text-xs leading-5 text-[#999990]">
                    Please do not share passwords, OTPs, or sensitive payment
                    information.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-16 sm:px-12 lg:px-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#888880]">
              Frequently asked questions
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Need a quick
              <br />
              answer?
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-[#777771]">
              Here are answers to some common questions. If you need more help,
              send us a message and our team can guide you.
            </p>
            <a
              href="#contact-form"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4"
            >
              Ask us directly <ArrowRight size={15} />
            </a>
          </div>

          <div className="divide-y divide-[#e5e5df] border-y border-[#e5e5df]">
            {faqs.map((faq, i) => (
              <div key={faq.q}>
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  aria-expanded={openFaq === i}
                  className="flex w-full items-center justify-between gap-5 py-5 text-left"
                >
                  <span className="text-sm font-semibold leading-6 sm:text-base">
                    {faq.q}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#deded8] text-lg transition ${
                      openFaq === i ? "rotate-45 bg-[#20201e] text-white" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <p className="max-w-2xl pb-6 pr-8 text-sm leading-7 text-[#777771]">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing banner */}
      <section className="px-6 pb-16 sm:px-12 lg:px-20 lg:pb-24">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-2xl bg-[#eaeae4] md:grid-cols-2">
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#777771]">
              One more thing
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Your next favourite
              <br />
              piece is waiting.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-[#696963]">
              Explore the collection and discover styles made for your everyday
              moments. Need a hand? We're just a message away.
            </p>
            <a
              href="/collection"
              className="mt-7 inline-flex w-fit items-center gap-3 rounded-md bg-[#20201e] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#42423d]"
            >
              Shop the collection <ArrowRight size={16} />
            </a>
          </div>
          <div className="relative min-h-[280px] md:min-h-[380px]">
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=85"
              alt="Explore contemporary fashion"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
