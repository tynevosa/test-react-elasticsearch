import React from "react";
import { SearchSumType } from "../types";

function SearchSum({data}: {data: SearchSumType}) {
  return (
    <div className="w-full h-full text-blue-500">
      <div>
        Item count: {data.count}
      </div>
      <div>
        Organization count: {data.organization_count}
      </div>
      <div>
        Filters: {data.filers.map(filter => '['+filter+']').join(' ')}
      </div>
    </div>
  );
}

export default SearchSum;
