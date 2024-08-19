import React from "react";

const FAQSection = () => {
  return (
    <>
      <div className="w3l-faq-block py-5" id="faq">
        <div className="container py-lg-5">
          <div className="row align-items-center">
            <div
              className="col-lg-7 pe-lg-5 order-lg-first order-last"
              data-aos="fade-down"
            >
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      01. Why pet is a part of our life?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Pets are our loyal companions, offering unconditional love
                      and emotional support. They enrich our lives by reducing
                      stress, promoting physical activity, and fostering a sense
                      of responsibility. From playful puppies to wise old dogs,
                      they bring joy and companionship to our homes.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      02. How we take care about our pet?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Caring for a pet is a commitment. Provide a safe, clean
                      environment with fresh water and nutritious food. Regular
                      exercise is vital for their physical and mental
                      well-being. Routine vet check-ups prevent health issues.
                      Shower them with love and attention, and never forget they
                      rely on you for their happiness and safety.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      03. Which pet you choose and why?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Choosing a pet depends on lifestyle, living situation, and
                      personality. Dogs offer unmatched loyalty and
                      companionship, but require significant time and attention.
                      Cats are independent yet affectionate, suitable for busier
                      lifestyles. For those with limited space, small animals
                      like hamsters or guinea pigs can be low-maintenance
                      companions. Birds are intelligent and interactive, but
                      demand specific care. Ultimately, the best pet is one that
                      complements your life and provides mutual joy.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-5 mb-lg-0 mb-5 order-lg-last order-first"
              data-aos="fade-up"
            >
              <div className="position-relative">
                <h3 className="title-style mb-3">
                  We are working for the community
                </h3>
                <div className="title-paw-style">
                  <i className="fas fa-paw" />
                  <i className="fas fa-paw paw-2" />
                  <i className="fas fa-paw paw-3" />
                </div>
              </div>
              <p>
                Together, we are building a brighter future for both animals and
                people, fostering a community that values and protects all
                living beings. We are dedicated to strengthening our community
                by promoting responsible pet ownership and encouraging adoption
                over buying.{" "}
              </p>
              <p className="mt-2 mb-sm-5 mb-4">
                Our efforts focus on rescuing stray and abandoned animals,
                ensuring they find safe and loving homes.{" "}
              </p>
              <a
                href="tel:+(21) 255 999 8888"
                className="call-style d-flex align-items-center"
              >
                <i className="fas fa-phone-volume me-2" /> +(91) 945 658 3214
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQSection;
