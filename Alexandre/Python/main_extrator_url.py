url = "https://bytebank.com/cambio?moedaDestino=dolar&quantidade=100&"
url = ""
url = url.replace(" ", "")
if url == "":
    return ValueError("A url está vazia")
indice_interrogacao = url.find("?")
parametro_busca = 'moedaOrigem'
url_parametros = url[(indice_interrogacao + 1):]
indice_parametro = url_parametros.find(parametro_busca)
indice_valor = indice_parametro + len(parametro_busca) + 1
indice_e_comercial = url_parametros.find('&', indice_valor)
if indice_e_comercial ==-1:
    valor = url_parametros[indice_valor:]

else:
    valor = url_parametros[indice_valor:indice_e_comercial]
url_base = url[:indice_interrogacao]

valor = url_parametros[indice_valor:]

print(valor)