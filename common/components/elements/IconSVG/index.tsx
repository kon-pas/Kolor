import styles from "./IconSVG.module.scss";

interface IconSVGProps {
  children: React.ReactNode;
  strokeWidth?: number;
  title?: string;
  desc?: string;
  filled?: boolean;
}

const IconSVG: React.FC<IconSVGProps> = ({
  children: path,
  strokeWidth,
  title,
  desc,
  filled = false,
}) => {
  return (
    <svg
      className={styles["icon-svg"]}
      xmlns="http://www.w3.org/2000/svg"
      fill={filled ? "currentColor" : "none"}
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth ?? 1.75}
      stroke="currentColor"
      role="img"
      aria-hidden={title ? false : true}
      aria-label={`${title ?? null} ${desc ?? null}`}
      aria-labelledby={`${title ? "titleID" : null} ${desc ? "descID" : null}`}
    >
      {title && <title id="titleID">{title}</title>}
      {desc && <desc id="descID">{desc}</desc>}
      {path}
    </svg>
  );
};

export default IconSVG;
