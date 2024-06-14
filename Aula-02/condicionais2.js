//Muito util quando sua variavel possui valores especificos

const permissoes = 'admin' // 'aluno' || 'professor' || 'Admin'

switch (permissoes) {
    case 'aluno':
        console.log('Voce so pode visualizar as aulas');
        break;
    case 'professor':
        console.log('Voce so pode alterar as aulas e adicionar exercicios');
        break;
    case 'admin':
        console.log('Voce pode fazer o que quiser no sistema');
        break;
    default:
        console.log('Não sei quem voce e no sistema');
}

