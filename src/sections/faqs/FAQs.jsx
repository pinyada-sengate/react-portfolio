import "./faqs.css";
import data from "./data";
import FAQ from "./FAQ";

const FAQs = () => {
  return (
    <section id="faqs">
      <h2>Frequently Asked Questions</h2>
      <p>
        Here are some questions I usually get. if you still have more questions,
        send me a message.
      </p>
      <div className="container faqs__container">
        {data.map((faq) => (
          <FAQ key={faq.id} faq={faq} />
        ))}
      </div>
    </section>
  );
};

export default FAQs;
