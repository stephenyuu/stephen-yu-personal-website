import React from "react";
import aboutImage from "../../assets/photos/about.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="mt-3 d-flex justify-content-center align-items-center my-section"
    >
      <div className="my-image me-5">
        <img
          src={aboutImage}
          alt="Me standing in front of Golden Gate Bridge"
          className="rounded"
        />
      </div>
      <div className="my-content">
        <h2 className="text-center">
          About <span>Me</span>
        </h2>
        <p className="mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          consectetur vitae mi a volutpat. Quisque eget ornare eros. Nam vel est
          tincidunt, vehicula mi sit amet, gravida justo. Aliquam erat volutpat.
          Maecenas egestas, risus a ultricies facilisis, mi magna hendrerit
          enim, a mattis est sapien et purus. Quisque vitae leo ultrices,
          faucibus nulla ac, interdum sapien. Nulla in tincidunt purus. Maecenas
          vitae ullamcorper risus. Pellentesque condimentum auctor enim, in
          accumsan risus lacinia ac.
        </p>
      </div>
    </div>
  );
};

export default About;
