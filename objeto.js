// 1- criando objeto vazio
let moto = {};

// 2- criando um objeto com as propriedades/keys/chaves/atributos
let pessoa = {
    nome: 'Pedro',
    sobrenome: 'Laurindo',
    idade: 27,
    cores_favoritas: ['branca', 'vermelha', 'preta'],
    altura: 1.69,
    estrangeiro: false,
    //endereco: 'Rua Rio Negro, 20, Tabapua, Caucaia-Ce, 62840-000',
    endereco : {
        rua: 'Rua Rio Negro',
        numero: 20,
        bairro: 'Tabapua',
        cidade: 'Caucaia',
        estado: 'CE',
        cep: '62840-000',

    },
};
console.log('CEP:', pessoa.endereco.cep);

//console.log('CEP:', pessoa.endereco.split(',')[4].trim());


// 3- acessando valor da propriedade de um objeto
console.log(pessoa.nome);
console.log(pessoa.endereco);
console.log(pessoa['altura'])

// 4- atualizando valor da propriedade de um objeto
pessoa.idade = 28;
console.log(pessoa.idade);

// 5- adicionando propriedade a um objeto
pessoa.peso = 80.5;
pessoa.profissao = 'contador';

// 6- criando propriedade de forma mais flexível
pessoa['filhos'] = true;
console.log(pessoa);

// 7- deletando uma propriedade
delete pessoa.filhos
console.log (pessoa);

// 8- concatenando propriedades
//pessoa.nomeCompleto = pessoa.nome +' ' + pessoa.sobrenome;
pessoa.nomeCompleto = `${pessoa.nome} ${pessoa.sobrenome}`
console.log(pessoa.nomeCompleto);

// 9- verificar se a propriedade existe
console.log('nome' in pessoa);
console.log('telefone' in pessoa);

//10- listrar todas as propriedades do objeto
console.log(Object.keys(pessoa));
console.log(Object.keys(pessoa).length);

// 11- listar os valores das propriedades dos objetos
console.log(Object.values(pessoa));

// 12- criar um array com a combinação de chave e valor
console.log(Object.entries(pessoa));

// 13- desestruturação de objetos (como uma cópia de segurança) cria um novo objeto, caso o obejto original seja alterado (pessoa), este novo objeto não será alterado
console.log({...pessoa});

// 14- converter um objeto javascript em JSON 
let produto = {
    nome: " mangueira 25m",
    preco: 50.00,
}
console.log(JSON.stringify(produto));

// 15- mesclando objeto
let moto2 = {
    marca: 'Honda',
    modelo: 'CBR500R',
    ano: 2024,
    cor: 'vermelha',
    cc: 500,
}
let caracteristicas = {
    tipo: 'trail',
    ano: 2025,
    combustivel: 'flex',
    chassi: 'gdsbfakwsfhq8o73uu98236571r7e7',
}
let completo = Object.assign(caracteristicas, moto2);
console.log(completo);

// 16- propriedade com função e referenciando a variável de escopo "this" do objeto
moto.marca = 'shineray';
moto.modelo = 'SH 125';
moto.ano = 2024;
moto.cor = 'preto';
/* moto.ligar = function (){
    console.log(`a moto  ${moto.marca} ${moto.modelo} ligou!`);

} */
moto.ligar = () => console.log(`a moto  ${moto.marca} ${moto.modelo} ligou!`);
console.log(moto.ligar());

// 17- convertendo uma string em objeto
let pessoaString = '{"nome":"Pedro", "idade":"27"}';
let pessoaJSON = JSON.parse(pessoaString);
console.log(pessoaJSON);

// 18- identação do objeto
console.log(JSON.stringify(pessoaJSON,  null, 7));

