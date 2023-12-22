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





