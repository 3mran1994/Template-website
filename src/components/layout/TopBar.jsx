export default function TopBar() {
  return (
    <div className="flex items-center justify-center bg-[#8ad3e3] py-2 text-xs text-[#00344d]">
      <span className="flex items-center gap-2">
        <span>Start the New Year with New Rituals</span>
        <span className="text-[#1c2333]">|</span>
        <a className="underline hover:no-underline" href="#">
          Shop Brew Tools
        </a>
      </span>
    </div>
  );
}
