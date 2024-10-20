import Link from "react-router-dom";
import ComplaintForm from "../../components/ComplainForm";

const Complaint = () => {
  return (
    <section className="text-gray-600 body-font bg-[#EEF4ED] ">
      <div className="container flex flex-wrap items-center px-5 py-8 mx-auto">
        <div className="pb-10 mb-10 border-b border-gray-200 md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 md:mb-0">
          <h1 className="mb-2 text-3xl font-medium text-center text-black sm:text-5xl title-font">
          Resolving your complaints!
          </h1>
          <p className="mt-5 leading-relaxed text-center text-black text-md">
          Your feedback helps us understand where we can improve and ultimately provides a better experience for you and others. Please leave your complaint below, including as much detail as possible. Your input is valuable, and we appreciate you taking the time to share your thoughts with us.
          </p>
         
        </div>
        <div className="flex flex-col md:w-1/2 md:pl-12 w-[100%] mx-auto">
          <ComplaintForm/>
        </div>
      </div>
    </section>
  );
};
export default Complaint;
