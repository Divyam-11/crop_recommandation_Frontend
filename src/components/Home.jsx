import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Hero from "../assets/hero.jpeg";
import question_mark from "../assets/question_mark.svg";
import LanguageSwitcher from "../languageSwitcher";

function Home() {
    const [formData, setFormData] = useState({
        Temperature: "",
        Humidity: "",
        Rainfall: "",
        PH: "",
        Nitrogen: "",
        Phosphorous: "",
        Potassium: "",
        Carbon: "",
        Soil: "Loamy Soil", // Default selected
    });
    const [prediction, setPrediction] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setPrediction("");
        setError("");

        try {
            const payload = {
                ...formData,
                Temperature: parseFloat(formData.Temperature),
                Humidity: parseFloat(formData.Humidity),
                Rainfall: parseFloat(formData.Rainfall),
                PH: parseFloat(formData.PH),
                Nitrogen: parseFloat(formData.Nitrogen),
                Phosphorous: parseFloat(formData.Phosphorous),
                Potassium: parseFloat(formData.Potassium),
                Carbon: parseFloat(formData.Carbon),
            };

            const res = await axios.post("http://localhost:5000/predict", payload);
            setPrediction(res.data.predicted_crop);
        } catch (err) {
            console.error(err.response?.data);
            setError(err.response?.data?.error || "Prediction Failed!");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div
                className="grid sm:grid-cols-3 grid-cols-2 m-auto"
                data-translate="message"
            >
                <div className="col-span-2 m-5 " data-translate="message">
                    <p
                        className="font-roboto font-semibold text-8xl m-5"
                        data-translate="message"
                    >
                        Sustainable <br /> farming for better tomorrow
                    </p>
                    <Link
                        to="/login"
                        className="focus:outline-none text-black bg-emerald-400 hover:bg-emerald-500 focus:ring-4 focus:ring-emerald-300 font-semibold rounded-full text-3xl p-6 me-2 mb-2 dark:bg-emerald-500 dark:hover:bg-emerald-600 dark:focus:ring-emerald-700 inline-block text-center"
                        data-translate="message"
                    >
                        Get Started Today
                    </Link>
                </div>
                <div data-translate="message">
                    <img
                        src={Hero}
                        alt="hero"
                        className="h-100"
                        data-translate="message"
                    />
                </div>
            </div>

            {/* Crop Recommendation Section */}
            <div className="max-w-4xl mx-auto mt-12 mb-12 bg-white rounded-2xl p-8 shadow-2xl">
                <h2 className="font-roboto font-semibold text-4xl text-center mb-6" data-translate="message">
                    Crop Recommendation System 🌾
                </h2>

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="mb-4">
                            <input
                                type="number"
                                step="any"
                                name="Temperature"
                                placeholder="Temperature"
                                value={formData.Temperature}
                                onChange={handleChange}
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                data-translate="message"
                            />
                        </div>

                        <div className="mb-4">
                            <input
                                type="number"
                                step="any"
                                name="Humidity"
                                placeholder="Humidity"
                                value={formData.Humidity}
                                onChange={handleChange}
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                data-translate="message"
                            />
                        </div>

                        <div className="mb-4">
                            <input
                                type="number"
                                step="any"
                                name="Rainfall"
                                placeholder="Rainfall"
                                value={formData.Rainfall}
                                onChange={handleChange}
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                data-translate="message"
                            />
                        </div>

                        <div className="mb-4">
                            <input
                                type="number"
                                step="any"
                                name="PH"
                                placeholder="PH"
                                value={formData.PH}
                                onChange={handleChange}
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                data-translate="message"
                            />
                        </div>

                        <div className="mb-4">
                            <input
                                type="number"
                                step="any"
                                name="Nitrogen"
                                placeholder="Nitrogen"
                                value={formData.Nitrogen}
                                onChange={handleChange}
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                data-translate="message"
                            />
                        </div>

                        <div className="mb-4">
                            <input
                                type="number"
                                step="any"
                                name="Phosphorous"
                                placeholder="Phosphorous"
                                value={formData.Phosphorous}
                                onChange={handleChange}
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                data-translate="message"
                            />
                        </div>

                        <div className="mb-4">
                            <input
                                type="number"
                                step="any"
                                name="Potassium"
                                placeholder="Potassium"
                                value={formData.Potassium}
                                onChange={handleChange}
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                data-translate="message"
                            />
                        </div>

                        <div className="mb-4">
                            <input
                                type="number"
                                step="any"
                                name="Carbon"
                                placeholder="Carbon"
                                value={formData.Carbon}
                                onChange={handleChange}
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                data-translate="message"
                            />
                        </div>

                        <div className="mb-4">
                            <select
                                name="Soil"
                                value={formData.Soil}
                                onChange={handleChange}
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                data-translate="message"
                            >
                                <option value="Acidic Soil">Acidic Soil</option>
                                <option value="Peaty Soil">Peaty Soil</option>
                                <option value="Neutral Soil">Neutral Soil</option>
                                <option value="Loamy Soil">Loamy Soil</option>
                                <option value="Alkaline Soil">Alkaline Soil</option>
                            </select>
                        </div>
                    </div>

                    <div className="text-center mt-4">
                        <button
                            type="submit"
                            className="focus:outline-none text-black bg-emerald-400 hover:bg-emerald-500 focus:ring-4 focus:ring-emerald-300 font-semibold rounded-full text-xl px-6 py-3 dark:bg-emerald-500 dark:hover:bg-emerald-600 dark:focus:ring-emerald-700"
                            disabled={isLoading}
                            data-translate="message"
                        >
                            {isLoading ? "Predicting..." : "Predict Crop"}
                        </button>
                    </div>
                </form>

                {prediction && (
                    <div className="mt-6 p-4 bg-emerald-100 rounded-lg border border-emerald-200">
                        <h3 className="font-roboto font-semibold text-2xl text-center">
                            Recommended Crop: <span className="text-emerald-600">{prediction}</span>
                        </h3>
                    </div>
                )}

                {error && (
                    <div className="mt-6 p-4 bg-red-100 rounded-lg border border-red-200">
                        <h3 className="font-roboto font-semibold text-2xl text-center">
                            Error: <span className="text-red-600">{error}</span>
                        </h3>
                    </div>
                )}
            </div>

            <div
                className="text-center font-roboto font-semibold text-5xl"
                data-translate="message"
            >
                What We Provide:
            </div>
            <div
                className="grid sm:grid-cols-2 grid-cols-2"
                data-translate="message"
            >
                <div
                    className="col-span-1 m-5 bg-white-300 rounded-2xl p-4 shadow-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                    data-translate="message"
                >
                    <div
                        className="font-roboto font-semibold text-3xl m-5 flex items-center justify-center"
                        data-translate="message"
                    >
                        <img
                            src={question_mark}
                            alt="question_mark"
                            className="h-8 inline mr-2"
                            data-translate="message"
                        />
                        Environnmental protection
                    </div>
                    <p className="font-roboto text-l m-5" data-translate="message">
                        By minimizing over-fertilization, the app reduces the risk of runoff
                        and water pollution, helping to prevent eutrophication and protect
                        aquatic ecosystems.
                    </p>
                </div>
                <div
                    className="col-span-1 m-5 bg-white-300 rounded-2xl p-4 shadow-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                    data-translate="message"
                >
                    <div
                        className="font-roboto font-semibold text-3xl m-5 flex items-center justify-center"
                        data-translate="message"
                    >
                        <img
                            src={question_mark}
                            alt="question_mark"
                            className="h-8 inline mr-2"
                            data-translate="message"
                        />
                        Increased Agricultural Productivity:
                    </div>
                    <p className="font-roboto text-l m-5" data-translate="message">
                        Optimized fertilizer usage ensures healthy crop growth, leading to
                        improved yields and higher income for farmers, thus promoting
                        economic sustainability.
                    </p>
                </div>
                <div
                    className="col-span-1 m-5 bg-white-300 rounded-2xl p-4 shadow-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                    data-translate="message"
                >
                    <div
                        className="font-roboto font-semibold text-3xl m-5 flex items-center justify-center"
                        data-translate="message"
                    >
                        <img
                            src={question_mark}
                            alt="question_mark"
                            className="h-8 inline mr-2"
                            data-translate="message"
                        />
                        Community Building:
                    </div>
                    <p className="font-roboto text-l m-5" data-translate="message">
                        The community page fosters collaboration and knowledge exchange
                        among farmers, building resilience and strengthening social ties
                        within agricultural communities.
                    </p>
                </div>
                <div
                    className="col-span-1 m-5 bg-white-300 rounded-2xl p-4 shadow-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                    data-translate="message"
                >
                    <div
                        className="font-roboto font-semibold text-3xl m-5 flex items-center justify-center"
                        data-translate="message"
                    >
                        <img
                            src={question_mark}
                            alt="question_mark"
                            className="h-8 inline mr-2"
                            data-translate="message"
                        />
                        Cost Efficiency for Farmers:
                    </div>
                    <p className="font-roboto text-l m-5" data-translate="message">
                        By accurately predicting the appropriate amount and type of
                        fertilizer, the app helps farmers reduce unnecessary expenses,
                        lowering their operational costs while maintaining high
                        productivity.
                    </p>
                </div>
                <LanguageSwitcher data-translate="message" />
            </div>
        </>
    );
}

export default Home;