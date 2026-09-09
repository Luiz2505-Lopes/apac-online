function gerar(){
let texto=`
SUS - Ministério da Saúde

APAC
Autorização de Procedimentos Ambulatoriais
Laudo de Solicitação / Autorização

IDENTIFICAÇÃO DO ESTABELECIMENTO DE SAÚDE (SOLICITANTE)
${estabelecimento.value}
CNES: ${cnes.value}

IDENTIFICAÇÃO DO PACIENTE
Nome do paciente: ${paciente.value}
CPF/CNS: ${cpf.value}
Nome da mãe: ${mae.value}
Data de nascimento: ${nascimento.value}
Sexo: ${sexo.value}
Município de residência: ${municipio.value}

PROCEDIMENTO SOLICITADO
Código: ${codigo.value}
Procedimento: ${procedimento.value}

DADOS DO DIAGNÓSTICO
CID 10: ${cid.value}

JUSTIFICATIVA DO(S) PROCEDIMENTO(S) SOLICITADO(S)
${justificativa.value}

SOLICITAÇÃO
Nome do profissional solicitante:
${solicitante.value}
`;

let janela=window.open("");
janela.document.write("<pre style='font-family:Arial;font-size:12px'>"+texto+"</pre>");
janela.print();
}
