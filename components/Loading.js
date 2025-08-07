import React from "react";
import "../app/globals.css";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="premium-loader">
        <div className="ring"></div>
        <div className="ring"></div>
        <div className="ring"></div>
        <span className="loading-text">Loading...</span>
      </div>
    </div>
  );
}