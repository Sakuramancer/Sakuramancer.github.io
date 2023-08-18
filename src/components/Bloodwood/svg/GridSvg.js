const GridSvg = ({ className, factor = 1, x = 10, y = 15, color }) => {
  return (
    <svg
      className={className}
      style={{ stroke: color }}
      viewBox={`0 0 ${x * 300 * factor} ${y * 173.2 * factor}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={[...Array(x).keys()].map((x) =>
          [...Array(y).keys()].map(
            (y) =>
              `M${300 * factor * x} ${173.2 * factor * y}
            l ${50 * factor} 0
            ${50 * factor} ${86.6 * factor}
            ${100 * factor} 0
            ${50 * factor} ${-86.6 * factor}
            ${50 * factor} 0
            m ${-50 * factor} ${173.2 * factor}
            ${-50 * factor} ${-86.6 * factor}
            m ${-100 * factor} 0
            l ${-50 * factor} ${86.6 * factor}
          `
          )
        )}
      />
    </svg>
  );
};

export default GridSvg;
