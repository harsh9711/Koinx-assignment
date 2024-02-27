"use client";
import React from "react";
import PriceChangeChart from "../Components/price";
import Graph from "../Components/Graph"
const Bitcoin = () => {
    return (
        <div className="mt-8 lg:w-11/12">
            <div className="mx-auto lg:mx-0 lg:p-8 rounded-md bg-white p-4">
            <Graph/>
            </div>
        </div>
    );
};

export default Bitcoin;
