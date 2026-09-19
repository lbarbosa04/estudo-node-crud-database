# Branch de testes

Este projeto possui uma branch separada, criada exclusivamente para **testes**, sem afetar o código principal.

## Estrutura de branches

- **`main`** (ou `master`) → código principal, estável, em produção.
- **`teste`** (ou o nome que você deu à branch) → branch usada para experimentar mudanças, testar novas funcionalidades ou correções antes de aplicá-las na branch principal.

## Por que usar uma branch de testes?

- Evita que erros ou código incompleto afetem a versão principal do projeto.
- Permite testar novas rotas, middlewares ou lógicas sem medo de "quebrar" o que já está funcionando.
- Facilita o processo de revisão: só depois que tudo estiver validado, as mudanças são unidas (merge) de volta à `main/master`.

## Comandos úteis do Git relacionados

```bash
# criar uma nova branch a partir da atual
git branch teste

# trocar para a branch de teste
git checkout teste

# criar e já mudar para a branch em um único comando
git checkout -b teste

# ver todas as branches existentes
git branch

# voltar para a branch principal
git checkout main/master

# unir as mudanças da branch de teste na main (depois de validado)
git checkout main/master
git merge teste
```

## Observação

Enquanto estiver na branch de testes, qualquer commit feito **não afeta** a branch `main/master` até que um `merge` seja realizado manualmente.
