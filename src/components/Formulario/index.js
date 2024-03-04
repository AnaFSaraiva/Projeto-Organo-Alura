import Botao from "../Botao";
import CampoTexto from "../Campo Texto";
import ListaSuspensa from "../ListaSuspensa";
import "./formulario.css";

const Formulario = () => {
  const times = [
    "Programação",
    "Front-End",
    "Data Science",
    "Devops",
    "UX e Desing",
    "Mobile",
    "Inovação e Gestão",
  ];

  const aoSalvar = (e) => {
    e.preventDefault();
    console.log("Form foi subimetido");
  };

  return (
    <section class="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
        />
        <CampoTexto
          obrigatorio={true}
          label="Email"
          placeholder="Digite seu email"
        />
        <CampoTexto
          obrigatorio={true}
          label="Imagem"
          placeholder="Informe o endereco da imagem"
        />
        <ListaSuspensa obrigatorio={true} item={times} />
        <Botao texto="Adicionar" />
      </form>
    </section>
  );
};

export default Formulario;
