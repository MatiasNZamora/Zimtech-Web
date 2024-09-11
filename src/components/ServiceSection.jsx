import { CheckCircle2 } from "lucide-react";
import { serviceOptions } from "../constants";



const ServiceSection = () => {
    return (
        <div className="mt-20">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">
                Servicios
            </h2>
            <div className="flex flex-wrap">
                {serviceOptions.map((service, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                        <div className="p-10 border border-neutral-700 rounded-xl">
                            <p className="text-4xl mb-8">
                                {service.title}
                                {service.title === "Pro" && (
                                    <span className="bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text text-xl ml-2">
                                        (Mas Popular)
                                    </span>
                                )}
                            </p>
                            <p className="mb-8">
                                <span className="text-5xl mt-6 mr-2">{ service.price }</span>
                                <span className="text-neutral-400 tracking-tighter"> /mes </span>
                            </p>
                            <ul>
                                {service.features.map((feacture, index) => (
                                    <li key={index} className="mt-8 flex items-center">
                                        <CheckCircle2 /> 
                                        <span className="ml-2"> {feacture} </span>
                                    </li>
                                ))}
                            </ul>
                            <a href="#" className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl
                                hover:bg-blue-900 border border-blue-900 rounded-lg transition duration-200">
                                Mas información
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceSection;
