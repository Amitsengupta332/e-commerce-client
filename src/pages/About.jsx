const About = () => {
  return (
    <div className="bg-base-100 text-base-content py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
        <p className="text-center text-lg mb-10 max-w-3xl mx-auto">
          Welcome to our e-commerce platform! Our mission is to provide a
          seamless and enjoyable shopping experience for everyone. Whether
          you&apos;re a buyer looking for quality products, a seller expanding
          your business, or an admin ensuring smooth operations, we have you
          covered.
        </p>

        {/* Info Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card bg-neutral text-neutral-content shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Buyers</h2>
            <p>
              Explore a wide range of products, add items to your wishlist or
              cart, and enjoy an effortless shopping journey. Our platform is
              tailored to make your experience as convenient as possible.
            </p>
          </div>
          <div className="card bg-neutral text-neutral-content shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Sellers</h2>
            <p>
              Easily manage your products, reach a broader audience, and grow
              your business with our user-friendly tools and insights designed
              specifically for sellers.
            </p>
          </div>
          <div className="card bg-neutral text-neutral-content shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Admins</h2>
            <p>
              Ensure everything runs smoothly by managing users and overseeing
              platform activities. Our admin tools provide the control and
              flexibility you need to maintain a thriving ecosystem.
            </p>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center mt-10">
          <button className="btn btn-primary btn-wide">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
