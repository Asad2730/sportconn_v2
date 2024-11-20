interface FooterProps {
  title: string;
  navTitle: string;
  onNavigate?: () => void;
}

export const Footer = ({ title, navTitle, onNavigate }: FooterProps) => (
  <div className="mt-10 text-center text-sm text-gray-500">
    {title}{" "}
    <button
      onClick={onNavigate}
      className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
    >
      {navTitle}
    </button>
  </div>
);
