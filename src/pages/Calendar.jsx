import React, { useState } from "react";
import dayjs from "dayjs";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());

  // Helper function to generate the days of the month
  const generateDays = () => {
    const startOfMonth = currentDate.startOf("month");
    const endOfMonth = currentDate.endOf("month");
    const days = [];

    // Get days from the previous month to fill the grid
    for (let i = 0; i < startOfMonth.day(); i++) {
      days.push(
        <div className="text-gray-400 flex justify-center items-center h-16 border border-gray-300">
          {startOfMonth.subtract(i + 1, "day").date()}
        </div>
      );
    }

    // Get all the days in the current month
    for (let i = 1; i <= endOfMonth.date(); i++) {
      days.push(
        <div className="flex justify-center items-center h-16 border border-gray-300">
          {i}
        </div>
      );
    }

    // Get days from the next month to fill the grid
    for (let i = 1; days.length < 42; i++) {
      days.push(
        <div className="text-gray-400 flex justify-center items-center h-16 border border-gray-300">
          {i}
        </div>
      );
    }

    return days;
  };

  const handlePrevMonth = () => {
    setCurrentDate(currentDate.subtract(1, "month"));
  };

  const handleNextMonth = () => {
    setCurrentDate(currentDate.add(1, "month"));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <button className="btn btn-sm" onClick={handlePrevMonth}>
            &lt; Previous
          </button>
          <h2 className="text-xl font-semibold">
            {currentDate.format("MMMM YYYY")}
          </h2>
          <button className="btn btn-sm" onClick={handleNextMonth}>
            Next &gt;
          </button>
        </div>
        <div className="grid grid-cols-7 gap-0">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div className="flex justify-center items-center h-16 font-bold">
              {day}
            </div>
          ))}
          {generateDays()}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
