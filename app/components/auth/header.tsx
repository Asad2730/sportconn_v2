interface HeaderProps {
  title: string;
  subTitle: string;
}

export const Header = ({ title, subTitle }: HeaderProps) => (
  <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
    <h1 className="text-2xl font-bold mb-2">{title}</h1>
    <h2 className="text-lg text-gray-600">{subTitle}</h2>
  </div>
);
