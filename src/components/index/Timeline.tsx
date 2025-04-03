import React, { useState } from "react";
import { motion } from "framer-motion";
import { timelineEvents } from "../../data/timeline.data";
import type { TimelineEvent } from "../../data/timeline.data";

const totalDuration = timelineEvents.reduce((sum, event) => sum + event.duration, 0);

const typeColors = {
  study: "bg-estudios",
  work: "bg-trabajo",
  milestone: "bg-eventos",
};

const Timeline = () => {
  const [hoveredEvent, setHoveredEvent] = useState<number | null>(null);

  return (
    <div className="relative flex flex-col items-center justify-center w-full py-8">
      {/* Línea principal */}
      <div className="relative w-full max-w-4xl h-2 bg-texto-principal/40 rounded-md flex items-center">
        {/* Segmentos de línea en lugar de círculos */}
        {timelineEvents.reduce<{ totalWidth: number; elements: React.ReactNode[] }>(
          (acc, event, index) => {
            const eventWidth = (event.duration / totalDuration) * 100;
            const position = acc.totalWidth;

            acc.totalWidth += eventWidth;

            acc.elements.push(
              <div
                key={index}
                className="absolute top-0 h-full flex items-center"
                style={{ left: `${position}%`, width: `${eventWidth}%` }}
                onMouseEnter={() => setHoveredEvent(index)}
                onMouseLeave={() => setHoveredEvent(null)}
              >
                {/* Tooltip con mejor contraste */}
                {hoveredEvent === index && (
                  <motion.div
                    className="absolute bottom-full mb-3 bg-gray-900 text-white text-xs p-2 rounded-md shadow-md text-center w-48 left-1/2 -translate-x-1/2"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                  >
                    {event.description}
                  </motion.div>
                )}

                {/* Línea con color según el tipo de evento */}
                <motion.div
                  className={`h-2 ${typeColors[event.type || "milestone"]} h-3 border-2 border-white rounded-md`}
                  style={{ width: "100%" }}
                  animate={{ scaleY: hoveredEvent === index ? 1.3 : 1 }}
                  transition={{ duration: 0.2 }}
                />
              </div>
            );

            return acc;
          },
          { totalWidth: 0, elements: [] }
        ).elements}
      </div>

      {/* Fechas y títulos con mejor espaciado y alineación */}
      <div className="relative flex justify-between items-center w-full max-w-4xl py-2 mt-6 text-center">
        {timelineEvents.map((event, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-texto-principal"
            style={{ flex: event.duration }}
          >
            <p className="text-sm font-semibold">{event.date}</p>
            <h3 className="text-md font-bold mt-1">{event.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
