// src/components/Timeline.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { timelineEvents } from "../../data/timeline.data";
import { extractYears } from "../../utils/DateHelpers";

// Calcula duración total para proporciones (si lo necesitas)
const totalDuration = timelineEvents.reduce((sum, e) => sum + e.duration, 0);

// Colores según tipo
const typeColors = {
  study: "bg-estudios",
  work: "bg-trabajo",
  milestone: "bg-eventos",
};

const Timeline: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  // 1. Saca todos los años de todos los eventos
  const years = React.useMemo(() => {
    const all = timelineEvents.flatMap((e) => extractYears(e.date));
    if (all.length === 0) return [];
    const start = Math.min(...all);
    const end = Math.max(...all);
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }, []);

  return (
    <div className="flex flex-col items-center w-full py-12">
      <div className="relative w-full max-w-4xl mx-auto">
        {/*  A. Checkpoints uniformes con Flexbox  */}
        <div className="w-full flex justify-between items-center px-4 mb-2">
          {years.map((y) => (
            <div key={y} className="flex-1 flex flex-col items-center relative">
              {/* Año */}
              <span className="text-xs text-texto-principal font-semibold mb-1">
                {y}
              </span>

              {/* Tick vertical */}
              <div className="w-[2px] h-3 bg-texto-principal/40" />
            </div>
          ))}
        </div>

        {/*  B. Línea principal  */}
        <div className="relative w-full h-2 bg-texto-principal/40 rounded-md flex items-center">
          {
            timelineEvents.reduce<{
              widthAcc: number;
              nodes: React.ReactNode[];
            }>(
              (acc, ev, idx) => {
                const w = (ev.duration / totalDuration) * 100;
                const left = acc.widthAcc;
                acc.widthAcc += w;

                acc.nodes.push(
                  <div
                    key={idx}
                    className="absolute top-0 h-full"
                    style={{ left: `${left}%`, width: `${w}%` }}
                    onMouseEnter={() => setHovered(idx)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <motion.div
                      className={`h-full ${
                        typeColors[ev.type]
                      } border-2 border-white rounded-md`}
                      animate={{ scaleY: hovered === idx ? 1.3 : 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                );
                return acc;
              },
              { widthAcc: 0, nodes: [] }
            ).nodes
          }
        </div>
      </div>

      {/*  C. Tooltips  */}
      <div className="relative flex justify-between w-full max-w-4xl mt-8 px-4">
        {timelineEvents.map((ev, idx) => (
          <div key={idx} className="flex-1 flex justify-center relative">
            <AnimatePresence>
              {hovered === idx && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full mt-2 p-3 bg-white/10 border border-white/30 backdrop-blur-md rounded-xl shadow-md w-40"
                >
                  <p className="text-sm font-semibold">{ev.date}</p>
                  <h3 className="text-md font-bold mt-1">{ev.title}</h3>
                  <p className="text-xs mt-2">{ev.description}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
