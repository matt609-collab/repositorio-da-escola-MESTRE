import re
url = "https://www.alura.com.br/?srsltid=AfmBOoq8T0nR53-2vSeiUJp-w3kLmx6Ra-MwRCA1gpCr8K3XtVaR00rX"
padrao_url = re.compile(r'(http(s)?://)?alura.com.br')
match = padrao_url.search(url)

if not match:
    raise ValueError('A URL não é válida')
else:
         print('A URL é válida')