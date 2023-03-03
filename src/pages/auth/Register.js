import { Link } from 'react-router-dom';
import styles from './auth.module.scss';
import { TiUserAddOutline } from 'react-icons/ti';
import Card from '../../components/card/Card';

const Register = () => {
  return (
    <div className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <div className="--flex-center">
            <TiUserAddOutline size={35} color="#999" />
          </div>
          <h2>Register</h2>

          <form>
            <input type="text" placeholder="Name" required name="name" />
            <input type="text" placeholder="Email" required name="email" />
            <input
              type="text"
              placeholder="Password"
              required
              name="password"
            />
            <input
              type="text"
              placeholder="Confirm Password"
              required
              name="password"
            />

            <button className="--btn --btn-primary --btn-block" type="submit">
              Register
            </button>
          </form>

          <span className={styles.register}>
            <Link to="/">Home | </Link>
            <p>&nbsp; Already have an account? &nbsp;</p>
            <Link to="/login">Login</Link>
          </span>
        </div>
      </Card>
    </div>
  );
};

export default Register;
