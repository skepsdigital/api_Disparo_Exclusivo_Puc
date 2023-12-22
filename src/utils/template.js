module.exports = whatTemplate = (tipo, parameters) => {
    if(tipo == '1') return "puc_atendimento_mensagem_v0";
    if(tipo == '2') return "puc_atendimento_transferencia_v0";
    if(tipo == '3' && parameters.length >5 ) return "puc_atendimento_conclusao_curta_v0";
    if(tipo == '3' && parameters.length <6 ) return "puc_atendimento_conclusao_longa_v0";
    else return false;
}