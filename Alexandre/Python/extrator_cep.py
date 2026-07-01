import re # Regular Expressions

endereço = "Rua Dr Orlando Araujo Costa 1931, casa, Parque São Basílio, Pitanga, PR, 85202-000"

padrao = re.compile("[0-9] {5} [-]? [0-9] {3}")

busca = padrao.search(endereço)

if busca:
    cep = busca.group()
    print(cep)