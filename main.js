

function TelefoneCelular(ddd,numero){
        this.ddd = ddd
        this.numero = numero
        this.DDD= () =>{
            return this.ddd
        }
        this.Numero=() =>{
            return this.numero
        }
    }


function Endereco(Estado, Cidade, Rua, numero){
        this.estado = Estado
        this.cidade = Cidade
        this.rua = Rua
        this.numero = numero
        this.Estado = () =>{
            return this.estado
        };
        this.Cidade = () =>{
            return this.cidade
        };
        this.Rua = ()=>{
            return this.rua
        };
        this.Numero=()=>{
            return this.numero
        };
    }

function Cliente(nome,telefoneCel,email,endereco){
    this.nome=nome
    this.telefoneCel=telefoneCel
    this.email=email
    this.endereco=endereco
    this.Info = () =>{
        return "------------------\n" + 
        "Informações do Cliente:\n"
        + this.nome + "\n"
        + "------------------\n"
        + "------------------\n"
        + "Telefone: \n"
        + "DDD:" + this.telefoneCel.DDD() +"\n"
        + "Número:"+this.telefoneCel.Numero()+"\n"
        + "------------------\n"
        + "Endereço: \n"
        + "Rua:" + this.endereco.Rua() +"\n"
        + "Número: "+ this.endereco.Numero()+"\n"
        + "Cidade: "+ this.endereco.Cidade()+"\n"
        + "Estado:"+ this.endereco.Estado()+"\n"
        + "------------------\n";
    };
 };

var ordenate = (listaClientes) =>{
    listaClientes.sort(function (a, b) {
    if (a.nome > b.nome) {
        return 1;
    }
    if (a.nome < b.nome) {
        return -1;
    }
    return 0;
});
};


const main = () => {
    let endereco = new Endereco("SP","Sao Jose Dos Campos", "Rua Um", 123)
    let telefoneCel = new TelefoneCelular("12","981888023")
    let novocliente = new Cliente("Daniel", telefoneCel, "emailgenerico@gmail.com",endereco)
    console.log(novocliente.Info())

    let endereco2 = new Endereco ("SP","Sao Jose Dos Campos", "Rua Dois", 431)
    let telefoneCel2 = new TelefoneCelular("12","981234567")
    let novocliente2 = new Cliente("Matheus", telefoneCel2, "emailgenerico2@gmail.com",endereco2)
    console.log(novocliente2.Info())

    let endereco3 = new Endereco ("SP","Sao Jose Dos Campos", "Rua Trez", 730)
    let telefoneCel3 = new TelefoneCelular("12","987654321")
    let novocliente3 = new Cliente("Artur", telefoneCel3, "emailgenerico3@gmail.com",endereco3)
    console.log(novocliente3.Info())

    listaClientes=[novocliente,novocliente2,novocliente3]

    ordenate(listaClientes)
    for(var i = 0; i<9;i++){
    console.log("\n")
    }

    console.log("Array Ordenado")
    for(Cliente of listaClientes){
        console.log(Cliente.Info())
    }

}   
main()