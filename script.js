function gerarPDF(){
let conteudo = `
APAC - AUTORIZAÇÃO DE PROCEDIMENTOS AMBULATORIAIS

Paciente: ${nome.value}
CPF/CNS: ${cns.value}
Nascimento: ${nascimento.value}
Nome da mãe: ${mae.value}

Procedimento:
${procedimento.value}
Código:
${codigo.value}

CID: ${cid.value}

Justificativa:
${justificativa.value}

Solicitante:
${profissional.value}
`;

let janela = window.open('');
janela.document.write('<pre style="font-family:Arial">'+conteudo+'</pre>');
janela.document.close();
janela.print();
}
