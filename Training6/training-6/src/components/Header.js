import { PageHeader } from "antd";
import { useSelector } from "react-redux";

export default function Header() {
  const authentication = useSelector((state) => state.authentication);

  return (
    <PageHeader
      className="site-page-header"
      title="Dashboard"
      extra={authentication.user && <p>{authentication.user.fullName}</p>}
    />
  );
}
