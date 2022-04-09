
import illustration from '../assets/images/apple.svg';
import logo from '../assets/images/chrome.svg';
import letm from '../assets/images/letmeask.svg';

import '../styles/auth.scss' //importar o SCSS especifico somente para a pagina que vai utilizar.

export function Home() {
  return (
    <div id="page-auth">
      <div>
        <aside>
          <img src={illustration} alt="illustar" />
          <strong>Crie a sala de conversa</strong>
          <p></p>
        </aside>
      </div>
      <main>
        {/* no react a classe se utiliza className=""
        porque Class é uma palavra reservada do javascript para criação de Classes */}
        <div className="main-content">
          <img src={letm} alt="Letmeask" />
          <button className="create-room">
            <img src={logo} alt="logo do Google" /> Crie sua sala com Google
          </button>
          <div className="separator">ou <br /> Entre na sala</div>
          <form>
            <input type="text" placeholder="Digite o codigo da sala"></input>
          </form>
          <button>
            <input type="submit" value="Entrar na sala"></input>
          </button>
        </div>
      </main>
    </div>
  )
}