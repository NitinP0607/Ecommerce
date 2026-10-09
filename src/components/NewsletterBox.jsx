import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

const NewsletterBox = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!email.trim()) return;

    // Connect your backend here to save subscriber emails.
    setSubscribed(true);
    setEmail("");
  };

  return (
    <section className="px-4 py-10 sm:px-6 sm:py-14 lg:px-10">
      <div className="relative overflow-hidden bg-[#f5f3ee]">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr]">

          {/* Left: Editorial heading */}
          <div className="flex flex-col justify-between p-7 sm:p-10 lg:min-h-[390px] lg:p-14">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-500">
                NITRA / The Style Letter
              </p>

              <h2 className="mt-10 text-5xl font-medium leading-[0.98] tracking-[-0.06em] sm:text-6xl lg:mt-14 lg:text-7xl">
                Dress
                <br />
                <span className="font-light italic">like</span> yourself.
              </h2>
            </div>

            <p className="mt-8 max-w-xs text-sm leading-6 text-neutral-600">
              A little inspiration for your wardrobe. Discover new arrivals,
              considered essentials, and exclusive offers from NITRA.
            </p>
          </div>

          {/* Right: Subscription */}
          <div className="flex flex-col justify-center bg-[#e9e5dc] p-7 sm:p-10 lg:p-14">
            <div className="mb-12 flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.2em] text-neutral-600">
                The insider edit
              </span>

              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15">
                <ArrowRight size={18} strokeWidth={1.5} />
              </span>
            </div>

            {subscribed ? (
              <div role="status" className="py-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                  <Check size={22} />
                </div>

                <h3 className="mt-6 text-2xl font-medium tracking-tight">
                  You're on the list.
                </h3>

                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  Thanks for joining the NITRA community.
                </p>

                <button
                  type="button"
                  onClick={() => setSubscribed(false)}
                  className="mt-6 border-b border-black pb-1 text-xs uppercase tracking-widest"
                >
                  Add another email
                </button>
              </div>
            ) : (
              <>
                <h3 className="max-w-sm text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
                  Your next favourite thing starts here.
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-6 text-neutral-600">
                  Sign up for first looks, fresh drops, and something special
                  in your inbox.
                </p>

                <form onSubmit={onSubmitHandler} className="mt-10">
                  <label
                    htmlFor="newsletter-email"
                    className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-600"
                  >
                    Your email address
                  </label>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <input
                      id="newsletter-email"
                      type="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="you@example.com"
                      autoComplete="email"
                      required
                      className="h-12 min-w-0 flex-1 border border-black/15 bg-transparent py-3 px-2 text-sm text-black outline-none transition placeholder:text-neutral-400"
                    />

                    <button
                      type="submit"
                      className="group flex h-12 items-center justify-center gap-3 bg-black px-6 text-xs font-medium uppercase tracking-[0.15em] text-white transition hover:bg-neutral-700"
                    >
                      Sign me up
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </button>
                  </div>
                </form>

                <p className="mt-5 text-[11px] leading-5 text-neutral-500">
                  No spam. Just good style. Unsubscribe whenever you like.
                </p>
              </>
            )}

            <div className="mt-12 border-t border-black/10 pt-5">
              <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                New season. New perspective. NITRA.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterBox;