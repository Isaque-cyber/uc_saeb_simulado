
import { useState } from "react";

function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  function handleLogin(event) {
    event.preventDefault();

    setErro("");

    if (!usuario || !senha) {
      setErro("Preencha usuário e senha.");
      return;
    }

    console.log("Usuário:", usuario);
    console.log("Senha:", senha);
  }

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleLogin}>
        <div>
          <label>Usuário</label>
          <input
            type="text"
            value={usuario}
            onChange={(event) => setUsuario(event.target.value)}
          />
        </div>

        <div>
          <label>Senha</label>
          <input
            type="password"
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
          />
        </div>

        {erro && <p>{erro}</p>}

        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;

