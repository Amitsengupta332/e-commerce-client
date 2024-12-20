// const Banner = () => {
//   return (
//     <div
//       className="hero min-h-screen"
//       style={{
//         backgroundImage:
//           "url(https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309643.jpg?t=st=1734703146~exp=1734706746~hmac=d536603a7822484bde335218d5d10ebf8f52de1a3a411256e00f45019df34607&w=740)",
//       }}
//     >
//       <div className="hero-overlay bg-opacity-60"></div>
//       <div className="hero-content text-neutral-content text-center">
//         <div className="max-w-md">
//           <h1 className="mb-5 text-5xl font-bold">Welcome to Mobile Shop</h1>
//           <p className="mb-5">
//             Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
//             excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
//             a id nisi.
//           </p>
//           <button className="btn btn-primary">Explore More</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;

const Banner = () => {
  return (
    <div className="hero min-h-screen relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309643.jpg?t=st=1734703146~exp=1734706746~hmac=d536603a7822484bde335218d5d10ebf8f52de1a3a411256e00f45019df34607&w=740)",
        }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="hero-content relative z-10 text-neutral-content text-center px-4 flex flex-col justify-center items-center">
        <div className="max-w-md md:max-w-lg lg:max-w-2xl">
          <h1 className="mb-5 text-4xl font-bold md:text-5xl lg:text-6xl">
            Welcome to Mobile Shop
          </h1>
          <p className="mb-5 text-sm md:text-base lg:text-lg">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary px-6 py-3 text-sm md:text-base lg:text-lg">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
