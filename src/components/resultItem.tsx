import React from "react";
import { ResultItemType } from "../types";

function ResultItem({data}: {data: ResultItemType}) {
  return (
    <div className="w-full h-full border border-blue-800 p-3 relative">
      <a href={data.link} className="underline text-blue-600">Link to Follow</a>
      <div className="text-blue-800">
        <div>{data.organization}</div>
        <div>{data.country}</div>
        <div>{data.applications}</div>
        <div>{data.technologies}</div>
        <div>{data.type}</div>
      </div>
      <div className="mt-4 text-blue-900">{data.description}</div>
      <div className="absolute -bottom-0 end-0 flex items-center pe text-2xl hover:cursor-pointer">
        +
      </div>
    </div>
  );
}

export default ResultItem;
