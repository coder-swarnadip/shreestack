import mark from "../assets/shreestack-mark.png";

function BrandLogo({ size = "default" }) {
  const markSize = size === "large" ? "h-12 w-12" : "h-10 w-10";
  const textSize = size === "large" ? "text-3xl" : "text-2xl";

  return (
    <span className="inline-flex items-center gap-2.5">
      <img
        src={mark}
        alt=""
        aria-hidden="true"
        className={`${markSize} shrink-0 object-contain`}
      />
      <span
        className={`${textSize} font-black tracking-normal leading-none`}
        style={{
          fontFamily:
            '"Arial Rounded MT Bold", "Trebuchet MS", Inter, system-ui, sans-serif',
        }}
      >
        <span className="text-slate-100">Shree</span>
        <span className="text-sky-400">Stack</span>
      </span>
    </span>
  );
}

export default BrandLogo;
