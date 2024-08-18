export const NavItem = ({
  path,
  label,
  count,
  onClick,
}: {
  path: string;
  label: string;
  count: string;
  onClick: (path: string) => void;
}) => {
  return (
    <div
      className="font-bold hover:text-purple-600 mx-3 cursor-pointer"
      onClick={() => onClick(path)}
    >
      <div className="text-right text-xs text-purple-500">
        <small>{count}</small>
      </div>
      {label}
    </div>
  );
};
