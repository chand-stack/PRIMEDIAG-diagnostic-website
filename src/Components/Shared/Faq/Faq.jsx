import { MdRoundaboutRight } from "react-icons/md";

const Faq = () => {
  return (
    <div className="bg-white py-5">
      <div className="font-poppin container mx-auto grid grid-cols-1 md:grid-cols-2 my-20 md:gap-5">
        <div className="flex flex-col lg:pr-20">
          <p className="text-blue-600 text-lg md:text-2xl font-medium flex-grow flex items-center gap-3">
            <MdRoundaboutRight />
            READ FAQ
          </p>
          <h1 className="text-2xl md:text-5xl font-semibold text-black flex-grow">
            There are many common questions here!
          </h1>
          <p className="leading-8 flex-grow">
            From diagnostics to treatment and beyond, we prioritize innovation,
            integrity, and the overall health journey of those we serve. Our
            vision is to be at the forefront of healthcare excellence,
            consistently exceeding expectations and making a positive impact on
            the lives we touch.
          </p>
          <p className="leading-8 flex-grow">
            Experience the difference with PRIMEDIAG — where leading healthcare
            meets personalized care, setting new benchmarks for a healthier,
            happier future.
          </p>
          <div className="flex items-center gap-2">
            <button className="btn rounded-full text-xl bg-blue-600 text-white">
              Contact Now
            </button>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="collapse collapse-plus flex-grow bg-white border-2">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              What services does the diagnostic center provide?
            </div>
            <div className="collapse-content">
              <p>
                Diagnostic centers offer a range of medical tests such as blood
                tests, imaging (X-rays, MRI, CT scans), and pathology services
                to assist in diagnosing medical conditions.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus flex-grow bg-white border-2">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              How should I prepare for a diagnostic test at the center?
            </div>
            <div className="collapse-content">
              <p>
                Preparation varies, but generally includes fasting before
                certain tests, following specific instructions, and bringing
                relevant medical records and identification.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus flex-grow bg-white border-2">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              How long does it take to receive test results?
            </div>
            <div className="collapse-content">
              <p>
                Turnaround time varies by test complexity, with routine tests
                often providing results within a day or two. Patients can
                inquire about estimated result times and any available expedited
                options.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
