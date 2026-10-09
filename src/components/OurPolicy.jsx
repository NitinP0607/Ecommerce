import React from "react";
import {
  RefreshCcw,
  RotateCcw,
  Headset,
  Award,
  ShieldCheck,
  PackageCheck,
} from "lucide-react";
import Title from "./Title";

const OurPolicy = () => {
  return (
    <div className="py-10 text-xs sm:text-sm md:text-base text-gray-700">

      {/* Section Heading */}
      <div className="text-center py-8 text-3xl">
        <Title text1="WHY SHOP WITH" text2="NITRA ?" />
      </div>

      {/* Policies Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-12 text-center">

        {/* Policy 1 */}
        <div>
          <RefreshCcw className="w-12 h-12 m-auto mb-5" strokeWidth={1.5} />
          <p className="font-semibold mb-2">Easy Exchange Policy</p>
          <p className="text-gray-400">
            We offer a hassle-free exchange policy.
          </p>
        </div>

        {/* Policy 2 */}
        <div>
          <RotateCcw className="w-12 h-12 m-auto mb-5" strokeWidth={1.5} />
          <p className="font-semibold mb-2">7 Days Return Policy</p>
          <p className="text-gray-400">
            Easy returns within 7 days, subject to our return policy.
          </p>
        </div>

        {/* Policy 3 */}
        <div>
          <Headset className="w-12 h-12 m-auto mb-5" strokeWidth={1.5} />
          <p className="font-semibold mb-2">Customer Support</p>
          <p className="text-gray-400">
            We're here to help with your queries.
          </p>
        </div>

        {/* Policy 4 */}
        <div>
          <ShieldCheck className="w-12 h-12 m-auto mb-5" strokeWidth={1.5} />
          <p className="font-semibold mb-2">Quality Assurance</p>
          <p className="text-gray-400">
            Carefully selected styles for your everyday wardrobe.
          </p>
        </div>

        {/* Policy 5 */}
        <div>
          <PackageCheck className="w-12 h-12 m-auto mb-5" strokeWidth={1.5} />
          <p className="font-semibold mb-2">Secure Payments</p>
          <p className="text-gray-400">
            Shop with confidence using our available payment options.
          </p>
        </div>

        {/* Policy 6 */}
        <div>
          <Award className="w-12 h-12 m-auto mb-5" strokeWidth={1.5} />
          <p className="font-semibold mb-2">Order Assistance</p>
          <p className="text-gray-400">
            Need help with an order? Contact our support team.
          </p>
        </div>

      </div>
    </div>
  );
};

export default OurPolicy;
