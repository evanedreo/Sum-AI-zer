import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/evanedreo/Sum-AI-zer", "_blank")
          }
          className="black_btn"
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Sumaizer Powered by <br className="max-md:hidden" />
        <span className="orange_gradient ">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Save your time reading an article, a free tool for summarizing articles, making long texts brief and straightforward. <i className="text-purple-700">Please wait for around 10 seconds</i>
      </h2>
    </header>
  );
};

export default Hero;
