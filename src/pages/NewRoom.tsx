
import illustration from '../assets/images/apple.svg';
import logo from '../assets/images/chrome.svg';
import letm from '../assets/images/letmeask.svg';
import { Button } from '../components/Button';

import '../styles/auth.scss' //importar o SCSS especifico somente para a pagina que vai utilizar.

export function NewRoom() {

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
          <h2>Criar uma nova sala</h2>

          <form>
            <input type="text" placeholder="Nome da Sala"></input>
          </form>
          <Button type="submit">
            <input type="submit" value="Criar sala"></input>
          </Button>
          <p>
            Quer entrar em uma sala existente? <a href="#">Clique Aqui</a>
          </p>
        </div>
      </main>
    </div>

  )
}