/*
 * Static web port of the app's mascot (better-everyday-react
 * src/components/mascot). Paths, palette and mouth shapes are copied from
 * geometry.ts, palette.ts and physics.ts `mouthPath()` — keep them in sync.
 * The app's spring physics are replaced by the CSS loops in globals.css.
 */

const color = {
  green: "#7FBF63",
  greenDeep: "#679C57",
  tint: "#A8D48C",
  eye: "#1E3A21",
  white: "#FFFFFF",
};

const body =
  "M150 172 C 168 168, 176 146, 206 146 C 236 146, 256 178, 258 218 " +
  "C 260 250, 260 288, 250 316 C 238 344, 205 358, 150 358 " +
  "C 95 358, 62 344, 50 316 C 40 288, 40 250, 42 218 " +
  "C 44 178, 64 145, 94 145 C 124 145, 132 168, 150 172 Z";
const stem = "M150 182 C 150 158, 150 134, 150 110";
const leafR = "M153 114 C 165 90, 193 79, 214 87 C 208 111, 180 126, 153 114 Z";
const leafL = "M148 126 C 136 106, 113 96, 95 103 C 101 125, 125 138, 148 126 Z";

export type SproutMood = "happy" | "curious";

const moods: Record<SproutMood, { mouth: string; tilt: number; pupil: number }> = {
  happy: {
    mouth: "M129 292 C138.45 324,161.55 324,171 292 C161.55 288,138.45 288,129 292 Z",
    tilt: 0,
    pupil: 1,
  },
  curious: {
    mouth: "M140.45 292 C144.75 304.32,155.25 304.32,159.55 292 C155.25 285.6,144.75 285.6,140.45 292 Z",
    tilt: 6,
    pupil: 1.12,
  },
};

const eyes = [
  { x: 115, y: 240, rx: 34, ry: 36, pupil: 25 },
  { x: 186, y: 238, rx: 35, ry: 37, pupil: 26 },
];

export function Sprout({ mood = "happy", className }: { mood?: SproutMood; className?: string }) {
  const pose = moods[mood];

  return (
    <svg viewBox="8 74 284 290" className={className} aria-hidden="true">
      <g transform={`rotate(${pose.tilt} 150 340)`}>
        <g className="sprout-breathe">
          <ellipse cx={34} cy={288} rx={12.5} ry={21} fill={color.greenDeep} transform="rotate(16 34 288)" />
          <ellipse cx={266} cy={288} rx={12.5} ry={21} fill={color.greenDeep} transform="rotate(-16 266 288)" />

          <g className="sprout-sway">
            <path d={stem} stroke={color.green} strokeWidth={12} strokeLinecap="round" fill="none" />
            <path d={leafR} fill={color.green} />
            <path d={leafL} fill={color.green} />
          </g>

          <path d={body} fill={color.green} />
          <ellipse cx={88} cy={284} rx={18} ry={9} fill={color.tint} />
          <ellipse cx={212} cy={284} rx={18} ry={9} fill={color.tint} />

          {eyes.map((eye) => (
            <g key={eye.x} transform={`translate(${eye.x} ${eye.y})`}>
              <g className="sprout-blink">
                <ellipse rx={eye.rx} ry={eye.ry} fill={color.white} />
                <circle cx={1} cy={2} r={eye.pupil * pose.pupil} fill={color.eye} />
                <circle cx={10} cy={-8} r={6.5} fill={color.white} opacity={0.92} />
              </g>
            </g>
          ))}

          <path
            d={pose.mouth}
            fill={color.eye}
            stroke={color.eye}
            strokeWidth={9}
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </g>
      </g>
    </svg>
  );
}
