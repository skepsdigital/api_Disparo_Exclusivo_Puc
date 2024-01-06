# API para Disparo de Notificações

## Descrição

Este endpoint permite o disparo de notificações para um determinado telefone, enviando uma mensagem e mídias associadas.

## Endpoint

`POST /api/trigger`

## Requisição

### Corpo da Requisição (JSON)

```json
{
  "tipo": "",
  "phone": "",
  "parameters": [
    {
      "type": "text",
      "text": ""
    },
    {
      "type": "text",
      "text": ""
    },
    {
      "type": "text",
      "text": ""
    },
    {
      "type": "text",
      "text": ""
    },
    {
      "type": "text",
      "text": ""
    }
  ],
  "midia": [
    {
      "type": "document",
      "document": {
        "filename": "",
        "link": ""
      }
    },
    {
      "type": "image",
      "image": {
        "link": ""
      }
    },
    {
      "type": "document",
      "document": {
        "filename": "",
        "link": ""
      }
    }
  ]
}
```

## Parâmetros

### tipo (string): Tipo da notificação (OBRIGATÓRIO).

1 - Atendimento
2 - Transferência
3 - Conclusão

### phone (string): Número de telefone para o envio da notificação (OBRIGATÓRIO).

### parameters (array de objetos contendo as variáveis do template) (OBRIGATÓRIO):

type (string): Sempre "text".

text (string): Texto associado ao parâmetro.

#### A ordem é importante! O primeiro faz referência à primeira variável do template e assim sucessivamente.

### midia (array de objetos) (OPCIONAL):

type (string): Tipo de mídia (document ou image).

document (objeto, se type for "document"):

filename (string): Nome do arquivo.

link (string): Link para o arquivo.

image (objeto, se type for "image"):

link (string): Link da imagem.

### Resposta de Sucesso

```json
{
  "status": "success"
}
```

## Códigos de Resposta

200 OK: A notificação foi encaminhada.

400 Bad Request: Erro nos parâmetros da requisição.

# Exemplo de uso:

```json
{
  "tipo": "3",
  "phone": "5511997859999",
  "parameters": [
    {
      "type": "text",
      "text": "Skeps"
    },
    {
      "type": "text",
      "text": "2155"
    },
    {
      "type": "text",
      "text": "Teste de API"
    },
    {
      "type": "text",
      "text": "21/12/2023"
    },
    {
      "type": "text",
      "text": "21:30"
    }
  ],
  "midia": [
    {
      "type": "document",
      "document": {
        "filename": "take.pdf",
        "link": "https://www.caceres.mt.gov.br/fotos_institucional_downloads/2.pdf"
      }
    },
    {
      "type": "image",
      "image": {
        "link": "https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png"
      }
    },
    {
      "type": "document",
      "document": {
        "filename": "take.pdf",
        "link": "https://www.caceres.mt.gov.br/fotos_institucional_downloads/2.pdf"
      }
    }
  ]
}
```

### Documentação completa:
https://drive.google.com/file/d/1XtamruW5BBPzYiBA_vuva4eI-EKQ9tjC/view?usp=sharing