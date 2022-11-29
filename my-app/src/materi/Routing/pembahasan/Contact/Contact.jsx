// menggunakan useRouterMatch sudah tidak digunakan lagi
import { Link, Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <div>
        <ul>
          <li>
            <Link to="admin">Nomor Admin</Link>
          </li>
          <li>
            <Link to="teknisi">Nomor Teknisi</Link>
          </li>
          <li>
            <Link to="darurat">Nomor Darurat</Link>
          </li>
        </ul>
      </div>
      <hr />
      <Outlet />
    </div>
  );
};
export default Contact;
