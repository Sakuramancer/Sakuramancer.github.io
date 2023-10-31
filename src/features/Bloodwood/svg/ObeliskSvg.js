// import classes from "./ObeliskSvg.module.css";

const ObeliskSvg = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 50 70"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="
        M 19,15
        l 5,-14
        a 1 1 0 0 1 2 0
        l 5,14 -1,0 -5,-14 -5,14z" />
      <path d="M15,30 l-3,10 13,10 13,-10 -3,-10 -1,0 3,10 -12,9 -12,-9 3,-10z" />
      <path d="M20,35
       l 10,0
       a 5 10 0 0 1 5,-10
       a 10 10 0 0 0 -20 0
       a 5 10 0 0 1 5,10z" />
      <path fill="#4040FF" d="M10,40
        a 24,10 0 1 0 30,0
        l-1,0
        a 22,8 0 1 1 -28,0
        z
      " />
    </svg>
  );
};

export default ObeliskSvg;
