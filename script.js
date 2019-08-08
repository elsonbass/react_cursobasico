class Pessoa extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nome:this.props.nome
        };
    }

    render() {
        return (
            <div>
                <h1>Olá meu nome é {this.state.nome}</h1>
            </div>
        );
    }
}

let elemento = (
    <div>
        <Pessoa nome="Josielson" />
    </div>
);

ReactDOM.render(
    elemento,
    document.getElementById("app")
);