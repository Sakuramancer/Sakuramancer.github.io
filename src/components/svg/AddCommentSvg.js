import classes from "./AddCommentSvg.module.css";

const AddCommentSvg = ({ className }) => {
  return (
    <svg
      className={[classes.svg, className].join(" ")}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 17.74,30 16,29 20,22
          h 6 a 2,2 0 0 0 2,-2
          V 8 A 2,2 0 0 0 26,6
          H 6 A 2,2 0 0 0 4,8
          v 12 a 2,2 0 0 0 2,2
          h 9 v 2
          H 6 A 4,4 0 0 1 2,20
          V 8 A 4,4 0 0 1 6,4
          h 20 a 4,4 0 0 1 4,4
          v 12 a 4,4 0 0 1 -4,4
          h -4.84 z"
      />
      <polygon
        points="
          11,15 15,15 15,19
          17,19 17,15 21,15
          21,13 17,13 17,9
          15,9 15,13 11,13"
      />
    </svg>
  );
};

export default AddCommentSvg;
