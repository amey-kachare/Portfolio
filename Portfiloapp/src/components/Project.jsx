import React from "react";
import { useLoaderData } from "react-router-dom";
import Cards from "./Cards";
function Project() {
  const props = useLoaderData();
  console.log(props);

  return (
    <>
      <div className="text-center text-3xl m-4">GitHub Repository</div>
    <div className="flex flex-wrap gap-y-4 m-3">
      {/*Loop and Add TodoItem here */}
      {props.map((prop) => (
        <div key={prop.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
          <Cards prop={prop} />
        </div>
      ))}
    </div>
      </>
  );
}

export default Project;
