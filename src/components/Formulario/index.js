import CampoTexto from "../Campo Texto";
import "./formulario.css";

const Formulario = () => {
  return (
    <section class="formulario">
      <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto label="Nome" placeholder="Digite seu nome" />
        <CampoTexto label="Email" placeholder="Digite seu email" />
        <CampoTexto label="Imagem" placeholder="Informe o endereco da imagem" />
      </form>
    </section>
  );
};

export default Formulario;
