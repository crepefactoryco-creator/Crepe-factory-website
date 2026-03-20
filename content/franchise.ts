export type LocalizedText = {
  en: string;
  hi: string;
};

export type FaqItem = {
  q: LocalizedText;
  a: LocalizedText;
};

export type Testimonial = {
  name: LocalizedText;
  role: LocalizedText;
  quote: LocalizedText;
};

// Central place to update investment numbers, FAQ content, and testimonials.
// (Kept bilingual so you can localize without hunting through components/pages.)
export const franchiseContent = {
  investmentRange: {
    en: "INR 35 Lakhs - 50 Lakhs",
    hi: "INR 35 लाख - 50 लाख",
  },
  investmentIncludes: {
    en: [
      "Training and operations support",
      "Marketing and local launch planning",
      "SOPs and quality checklists",
      "Partner-level communication",
    ],
    hi: [
      "ट्रेनिंग और ऑपरेशंस सपोर्ट",
      "मार्केटिंग और लोकल लॉन्च प्लानिंग",
      "SOPs और क्वालिटी चेकलिस्ट",
      "पार्टनर-लेवल कम्युनिकेशन",
    ],
  },
  faqs: [
    {
      q: {
        en: "What are the franchise eligibility criteria?",
        hi: "फ्रैंचाइज़ के लिए योग्यता क्या है?",
      },
      a: {
        en: "We evaluate capital availability, operational readiness, and location fit. The deck/pack shares more detailed criteria.",
        hi: "हम आपकी उपलब्ध पूंजी, ऑपरेशनल अनुभव, और लोकेशन फिट को देखते हैं। अधिक डिटेल के लिए डेक/पैक देखें।",
      },
    },
    {
      q: {
        en: "How does training work?",
        hi: "ट्रेनिंग कैसे होती है?",
      },
      a: {
        en: "Hands-on training for both owners and the kitchen team. The final schedule depends on your setup.",
        hi: "मालिक और टीम दोनों के लिए हैंड्स-ऑन ट्रेनिंग दी जाती है। फाइनल शेड्यूल आपके सेटअप के अनुसार होगा।",
      },
    },
    {
      q: {
        en: "What marketing support is included?",
        hi: "मार्केटिंग सपोर्ट क्या मिलता है?",
      },
      a: {
        en: "Brand campaigns, local launch planning, and post-launch marketing guidance.",
        hi: "ब्रांड कैंपेन, लोकल लॉन्च प्लानिंग, और पोस्ट-लॉन्च मार्केटिंग गाइडेंस शामिल है।",
      },
    },
    {
      q: {
        en: "How is inventory and sourcing managed?",
        hi: "इन्वेंट्री/सोर्सिंग कैसे मैनेज होती है?",
      },
      a: {
        en: "We provide sourcing guidance and operational SOPs to maintain quality and consistency.",
        hi: "हम सोर्सिंग गाइडेंस और ऑपरेशनल SOPs देते हैं ताकि क्वालिटी और उपलब्धता बनी रहे।",
      },
    },
    {
      q: {
        en: "Is territory protected?",
        hi: "क्या क्षेत्र (टेरिटरी) का प्रावधान है?",
      },
      a: {
        en: "Territory is discussed based on city and location. Details are included in the deck/pack.",
        hi: "हाँ, टेरिटरी आपके शहर/लोकेशन के आधार पर तय की जाती है। डेक में विवरण होगा।",
      },
    },
    {
      q: {
        en: "Can we review the full deck first?",
        hi: "क्या हम प्रोजेक्ट के बारे में डिटेल्स पहले देख सकते हैं?",
      },
      a: {
        en: "Yes. After you submit the form, we’ll share the investor pack/deck and next steps.",
        hi: "जी हाँ। फॉर्म सबमिट करने के बाद हम निवेशक पैक/डेक और अगले कदम भेजेंगे।",
      },
    }
  ] satisfies FaqItem[],
  testimonials: [] as Testimonial[],
} as const;

