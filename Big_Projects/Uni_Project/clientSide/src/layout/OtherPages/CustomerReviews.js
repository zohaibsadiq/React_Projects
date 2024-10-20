import React from "react";

const CustomerReviews = () => {
  // List of customer reviews with names and feedback
  const reviews = [
    {
      name: "Ali Mansoor",
      feedback:
        "I am satisfied with Service Hub team. I recommended all people to take Services Hub services.",
    },
    {
      name: "Syed Muhammad Ali",
      feedback: "Their work was exceptional and satisfactory.",
    },
    {
      name: "Huzaifa",
      feedback: "I am satisfied with Service Hub. Good work, Service Hub.",
    },
    {
      name: "Saba Naveed",
      feedback:
        "The overall experience is very good and I am satisfied with Services Hub service. Good teamwork.",
    },
    {
      name: "Mrs Talha",
      feedback:
        "I am very much satisfied with Services Hub team. Keep it up, Services Hub.",
    },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto">
        <div className="flex flex-col w-full mb-2 text-center">
          <h1 className="text-xl font-bold text-black sm:text-2xl title-font">
            Latest Customer Reviews
          </h1>
          <p className="mx-auto mb-3 text-lg leading-relaxed lg:w-2/3">
            Here’s what some of our customers say about us.
          </p>
        </div>
        <div className="flex flex-wrap -m-4 text-black">
          {reviews.map((review, index) => (
            <div key={index} className="p-4 lg:w-1/3 sm:w-1/2">
              <div className="relative flex h-48">
                <div className="relative z-10 w-full px-8 py-2 bg-white border shadow-lg">
                  <h2 className="mb-1 font-medium tracking-widest text-md title-font">
                    {review.name}.
                  </h2>
                  <p className="mt-2 leading-relaxed">{review.feedback}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
