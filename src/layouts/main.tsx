import React from "react";
import SearchBox from "../components/searchBox";
import SearchSum from "../components/searchSum";
import ResultItem from "../components/resultItem";
import { ResultItemType, SearchSumType } from "../types";

const exampleSearchSum : SearchSumType = {
  count: 10,
  organization_count: 2,
  filers: ['apples', 'Sweden', 'train']
}

const exampleResultItems : ResultItemType[] = [
  {
    link: "#",
    organization: "organization",
    country: "United States",
    applications: ['apples', 'pears'],
    technologies: ['train', 'boat'],
    type: 'mention',
    description: '[description]'
  },
  {
    link: "#",
    organization: "organization",
    country: "United States",
    applications: ['apples', 'pears'],
    technologies: ['train', 'boat'],
    type: 'mention',
    description: '[description]'
  },
]

function Main() {
  return (
    <div className="w-full h-full space-y-6">
      <div className="w-full">
        <SearchBox placeholder="Search" /> 
      </div>
      <div>
        <SearchSum data={exampleSearchSum} />
      </div>
      <div className="space-y-3">
        {exampleResultItems.map(item => <ResultItem data={item} />)}
      </div>
    </div>
  );
}

export default Main;
