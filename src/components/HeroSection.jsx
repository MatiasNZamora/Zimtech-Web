import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-20">
            <h1 className="text-4xl sm:txt-6xl lg:text-8xl text-center tracking-wide">
                Asesoria técnica 
                <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                    {" "}
                    para Empresas
                </span>
            </h1>
            <p className="mt-10 text'lg text-center text-neutral-500 max-w-4xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet alias, atque ipsum quam ea officia quas sit totam laboriosam laudantium, maiores eius iste nobis pariatur ducimus voluptatibus ut! Praesentium, perferendis!
            </p>
            <div className="flex justify-center my-10">
                <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md">
                    Start for free
                </a>
                <a href="#" className="py-3 px-4 rounded-md border">
                    Documentacion
                </a>
            </div>
            <div className="flex mt-10 justify-center">
                <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4">
                    <source src={video1} type="video/mp4" />
                    your browser does not support the video tag.
                </video>
                <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4">
                    <source src={video2} type="video/mp4" />
                    your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default HeroSection;
