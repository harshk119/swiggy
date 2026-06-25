interface FAQItem {
  question: string;
  answer: string;
}
interface FAQSection {
  title: string;
  items: FAQItem[];
}

export const faqData: Record<string, FAQSection> = {
  "partner-onboarding": {
    title: "Partner Onboarding",
    items: [
      {
        question: "I want to partner my restaurant with Swiggy",
        answer:
          "To partner with Swiggy, please visit the Swiggy Partner Portal (partner.swiggy.com) and click on 'Register Your Restaurant'. You will need to provide your restaurant details, business registration documents, FSSAI license, PAN card, and bank details.",
      },
      {
        question:
          "What are the mandatory documents needed to list my restaurant on Swiggy?",
        answer:
          "The mandatory documents include: 1. FSSAI License, 2. Partnership Deed / LLP Agreement / GST certificate (if applicable), 3. PAN Card of the business, 4. Cancelled cheque or bank statement, and 5. Menu with prices.",
      },
      {
        question: "I want to opt-out from Google reserve",
        answer:
          "If you wish to opt-out from Google Reserve integrations, please raise a support ticket through your Partner Partner Dashboard or contact your partner support executive.",
      },
      {
        question:
          "After I submit all documents, how long will it take for my restaurant to go live on Swiggy?",
        answer:
          "It usually takes 3 to 5 business days to verify your documents and set up your restaurant menu on Swiggy once all mandatory documents are submitted successfully.",
      },
      {
        question:
          "What is this one time Onboarding fees? Do I have to pay for it while registering?",
        answer:
          "The onboarding fee is a one-time charge for setting up your restaurant on Swiggy, including cataloging and training. It is typically deducted from your first few weekly payouts rather than charged upfront.",
      },
      {
        question:
          "Who should I contact if I need help & support in getting onboarded?",
        answer:
          "You can reach out to our partner onboarding team at onboarding@swiggy.in or call our partner helpline listed on the partner portal.",
      },
      {
        question: "How much commission will I be charged by Swiggy?",
        answer:
          "Swiggy charges a nominal commission rate based on your restaurant type, location, and average order value. The exact rates will be detailed in your onboarding agreement.",
      },
    ],
  },
  legal: {
    title: "Legal",
    items: [
      {
        question: "What are the Terms of Use for customers?",
        answer:
          "Our Terms of Use govern the usage of the Swiggy platform by customers. It covers account creation, ordering rules, cancellation policies, and liability terms.",
      },
      {
        question: "How does Swiggy protect customer data?",
        answer:
          "Swiggy takes data privacy seriously. All customer information is encrypted and stored securely in accordance with relevant IT acts and data protection regulations.",
      },
    ],
  },
  faqs: {
    title: "FAQs",
    items: [
      {
        question: "Can I edit an order after placing it?",
        answer:
          "Once an order is accepted by the restaurant, it cannot be modified. However, you can contact our support team immediately to see if cancellation is possible.",
      },
      {
        question: "How do I cancel my order?",
        answer:
          "You can cancel your order through the active orders page within 60 seconds of placing it. Post that, cancellations may attract a fee depending on the order status.",
      },
    ],
  },
  "instamart-onboarding": {
    title: "Instamart Onboarding",
    items: [
      {
        question: "How do I become an Instamart seller?",
        answer:
          "To sell your products on Instamart, please reach out to our vendor onboarding team at instamart-vendors@swiggy.in with your product catalog and business credentials.",
      },
    ],
  },
  "irctc-faq": {
    title: "IRCTC FAQ",
    items: [
      {
        question: "How can I order Swiggy delivery on a train?",
        answer:
          "You can order Swiggy food delivery to your train coach by entering your PNR number in the IRCTC section of the Swiggy app. Select your preferred station, choose a restaurant, and place your order. The food will be delivered directly to your berth.",
      },
      {
        question: "Which stations are train deliveries available at?",
        answer:
          "We currently deliver to major railway stations across India. You can check availability by entering your PNR or selecting the station name on the app during your journey.",
      },
    ],
  },
};
