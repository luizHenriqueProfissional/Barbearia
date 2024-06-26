let nomeCliente = document.getElementById('nomeCliente');
let telefoneCliente = document.getElementById('telefone');
let corteCliente = document.getElementById('corte');
let pgCliente = document.getElementById('pg')
linhas = '';
const formulario = document.getElementById('formulario');
formulario.addEventListener('submit',function(e){
    e.preventDefault();
    recuperaDados();
    adcionaLinha();


})
    function recuperaDados(){
        let linha = '<tr>';
        linha += `<td >${nomeCliente.value}</td >`;
        linha += `<td >${telefoneCliente.value}</td >`;
        linha += `<td >${corteCliente.value}</td >`;
        linha += `<td >${pgCliente.value}</td >`;
        linha += '</tr>';
        linhas += linha;
        const infosCliente =  document.getElementById('infos-clientes')
        infosCliente.innerHTML = linha
    }

    function adcionaLinha(){
        const corpotabela = document.getElementById('infos-clientes')
        corpotabela.innerHTML = linhas
    }
