export default function Login() {
  return (
    <>
      <section className="login">
          <form className="login__form" action="" method="post">
            <p className="login__form-p">
              <label htmlFor="name">Имя</label>
              <input className="login__form-input" type="text" name="name" id="name" required></input>
            </p>
            <p className="login__form-p">
              <label htmlFor="email">Email</label>
              <input className="login__form-input" type="email" name="email" id="email" required></input>
            </p>
          </form>
      </section>
    </>
  );
}
