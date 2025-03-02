import s from "./LoginGoogle.module.css";
import googleIcon from "../../../assets/images/google-icon.png";
import { URL_NHEXA_API } from "../../../middlewares/config";

export default function LoginGoogle() {
  return (
    <div className={s.googleLoginContainer}>
      <a className={s.googleBtn} href={`${URL_NHEXA_API}/login-google`}>
        <span className={s.spanIcon}>
          <img
            src={googleIcon}
            height="40px"
            className={s.googleImg}
            alt="Sign Up with Google"
          />
        </span>
        <span className={s.spanText}>
          Google
        </span>
      </a>
    </div>
  );
}
