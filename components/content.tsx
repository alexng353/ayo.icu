import React from "react";

export default function Content(properties: { children: React.ReactNode }) {
  return (
    <main className="mb-20 mt-10 ml-5 mr-5">
      <div className="flex justify-center">
        <div className="text-left md:max-w-2xl sm:max-w-2xl">
          {properties.children}
        </div>
      </div>
    </main>
  );
}
