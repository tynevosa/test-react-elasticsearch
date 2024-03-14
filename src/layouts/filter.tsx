import React from "react";
import SearchBox from "../components/searchBox";

const searchBoxList = [
  {
    placeholder: "Organization name",
  },
  {
    placeholder: "Country",
  },
  {
    placeholder: "Applications",
  },
  {
    placeholder: "Technologies",
  },
  {
    placeholder: "Type",
  },
  {
    placeholder: "Date",
  },
]

function Filter() {
  return (
    <div className="w-full h-full border border-blue-500">
      <div className="space-y-5 p-3 mt-10">
        {
          searchBoxList.map(searchBox => <SearchBox placeholder={searchBox.placeholder}/>)
        }
      </div>
    </div>
  );
}

export default Filter;
