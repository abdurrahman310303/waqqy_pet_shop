import React, { useState } from 'react';
import { Icon } from '@iconify/react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqs = [
    {
      category: "Orders & Shipping",
      items: [
        {
          question: "How long does shipping take?",
          answer: "Standard shipping takes 3-5 business days. Express shipping is available for 1-2 business days delivery. Free shipping on orders over $50."
        },
        {
          question: "Do you ship internationally?",
          answer: "Currently, we ship within the United States only. We're working on expanding to international shipping soon."
        },
        {
          question: "Can I track my order?",
          answer: "Yes! Once your order ships, you'll receive a tracking number via email. You can also check your order status in your account dashboard."
        }
      ]
    },
    {
      category: "Pet Care",
      items: [
        {
          question: "How often should I feed my pet?",
          answer: "Feeding frequency depends on your pet's age, size, and species. Generally, adult dogs should be fed twice daily, while cats prefer smaller, more frequent meals. Consult your vet for personalized advice."
        },
        {
          question: "What size collar should I buy?",
          answer: "Measure your pet's neck circumference and add 2 inches for comfort. Our product pages include detailed sizing charts for each item."
        },
        {
          question: "Are your products safe for sensitive pets?",
          answer: "Yes, we carefully select products that are safe for sensitive pets. Look for our 'Sensitive Pet Approved' label on product pages."
        }
      ]
    },
    {
      category: "Returns & Exchanges",
      items: [
        {
          question: "What is your return policy?",
          answer: "We accept returns within 30 days of purchase. Items must be unused and in original packaging. Pet food and opened hygiene products cannot be returned for health reasons."
        },
        {
          question: "How do I exchange an item?",
          answer: "Contact our customer service team to initiate an exchange. We'll provide a prepaid return label and send the replacement item once we receive the original."
        }
      ]
    },
    {
      category: "Pet Adoption",
      items: [
        {
          question: "How does the adoption process work?",
          answer: "Browse available pets, submit an application, schedule a meet-and-greet, and if it's a good match, complete the adoption paperwork and take your new friend home!"
        },
        {
          question: "What does the adoption fee cover?",
          answer: "Adoption fees cover spaying/neutering, vaccinations, microchipping, and basic health screening. Each pet's specific medical history is provided."
        }
      ]
    }
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="display-5 mb-3">
              <Icon icon="mdi:frequently-asked-questions" className="text-primary me-2" />
              Frequently Asked Questions
            </h2>
            <p className="lead text-muted">
              Find answers to common questions about our products and services
            </p>
          </div>
        </div>

        {faqs.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-5">
            <h4 className="mb-4 text-primary">
              <Icon icon="mdi:folder-outline" className="me-2" />
              {category.category}
            </h4>
            
            <div className="accordion">
              {category.items.map((faq, itemIndex) => {
                const globalIndex = `${categoryIndex}-${itemIndex}`;
                const isOpen = openItems.has(globalIndex);
                
                return (
                  <div key={itemIndex} className="card border-0 shadow-sm mb-3">
                    <div className="card-header bg-white border-0">
                      <button
                        className="btn btn-link text-decoration-none w-100 text-start p-0 d-flex justify-content-between align-items-center"
                        onClick={() => toggleItem(globalIndex)}
                      >
                        <span className="fw-semibold text-dark">{faq.question}</span>
                        <Icon 
                          icon={isOpen ? "mdi:chevron-up" : "mdi:chevron-down"} 
                          className="fs-5 text-primary"
                        />
                      </button>
                    </div>
                    
                    {isOpen && (
                      <div className="card-body pt-0">
                        <p className="text-muted mb-0">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        <div className="row mt-5">
          <div className="col-12 text-center">
            <div className="card border-0 shadow-sm">
              <div className="card-body py-4">
                <h5 className="card-title mb-3">
                  <Icon icon="mdi:help-circle" className="text-primary me-2" />
                  Still have questions?
                </h5>
                <p className="card-text text-muted mb-4">
                  Can't find the answer you're looking for? Our customer support team is here to help!
                </p>
                <div className="d-flex justify-content-center gap-2 flex-wrap">
                  <button className="btn btn-primary">
                    <Icon icon="mdi:message" className="me-2" />
                    Contact Support
                  </button>
                  <button className="btn btn-outline-primary">
                    <Icon icon="mdi:phone" className="me-2" />
                    Call Us
                  </button>
                  <button className="btn btn-outline-primary">
                    <Icon icon="mdi:chat" className="me-2" />
                    Live Chat
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
