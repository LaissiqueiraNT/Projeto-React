import service from './service';

function adicionar(cliente){
    return new Promise((resolve, reject) => {
        service.post('/clientes', cliente)
        .then(response => resolve(response))
        .catch(erro => reject(erro))
    });
}

function obter(){
    return new Promise((resolve, reject) => {
        service.get('/clientes')
        .then(response => resolve(response))
        .catch(erro => reject(erro))
    });
}

function atualizar(cliente){
    return new Promise((resolve, reject) => {
        service.put(`/clientes/${cliente.id}`, cliente)
        .then(response => resolve(response))
        .catch(erro => reject(erro))
    });
}

function excluir(id){
    return new Promise((resolve, reject) => {
        service.delete(`/clientes/${id}`)
        .then(response => resolve(response))
        .catch(erro => reject(erro))
    });
}

export default {
    adicionar,
    obter,
    atualizar,
    excluir
}