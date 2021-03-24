# desafio_dotz
Desafio Área de dados Dotz

Arquitetura técnica:

Foi utilizado o padrão de arquitetura Lambda para as soluções de ingestão, processamento, análise e visualização de dados.


Ferramentas utilizadas no desenvolvimento:

1 - Os processos de ingestão e análise de dados foram criados no ambiente GCP.

2 - Cloud Storage (armazenar os arquivos de entrada).

3 - Dataflow (construir os jobs de ingestão).

4 - BigQuery (armazernar os dados de saídas para os processos de ingestão e suporte no tratamento de dados).

5 - Data Studio (análise e visualização de dados).


Linguagens utilizadas:

1 - JSON (definição do schema das tabelas no Dataflow).

2 - JavaScript (fornece a lógica para transformar as linhas de texto numa saída string JSON no Dataflow).

3 - SQL (tratamento de dados no BigQuery e análise de dados no Data Studio).


Impementação:

1 - Faça o download dos arquivos do projeto localizados no GitHub (https://github.com/mabdiel/desafio_dotz).

2 - Descompacte os arquivos em uma pasta local.

3 - Crie um projeto com o nome "Dotz" e altere o id para "dotz-308423".

4 - Crie um bucket com o nome "desafio_dotz".

5 - Faça o upload dos arquivos *.csv, *.json, *.js para o bucket "desafio_dotz".

![image](https://user-images.githubusercontent.com/50160018/112361711-73373f80-8cb2-11eb-8dd3-44bcc3a5b976.png)

6 - Crie um dataset no BigQuery com o nome "desafio_dotz".

![image](https://user-images.githubusercontent.com/50160018/112363491-4f74f900-8cb4-11eb-83b6-7819cada2ba8.png)

7 - Crie os seguintes jobs no Dataflow, usando o modelo "Text Files on Cloud Storage to BigQuery":

![image](https://user-images.githubusercontent.com/50160018/112366167-3e79b700-8cb7-11eb-9f4e-f1bbc764eb66.png)

7.1 - Nome do job: ingest_bill_of_materials

7.1.1 - javascriptTextTransformGcsPath: gs://desafio_dotz/transform_udf_bill_of_materials.js

7.1.2 - JSONPath: gs://desafio_dotz/bigquery_schema_bill_of_materials.json

7.1.3 - javascriptTextTransformFunctionName: transform

7.1.4 - outputTable: dotz-308423:desafio_dotz.bill_of_materials

7.1.5 - inputFilePattern: gs://desafio_dotz/bill_of_materials.csv

7.1.6 - bigQueryLoadingTemporaryDirectory: gs://desafio_dotz/bq_temp/bill_of_materials

7.1.7 - gcpTempLocation: gs://desafio_dotz/local_temp

7.1.8 - Clique no botão para executar o job.

7.2 - Nome do job: ingest_comp_boss

7.2.1 - javascriptTextTransformGcsPath: gs://desafio_dotz/transform_udf_comp_boss.js

7.2.2 - JSONPath: gs://desafio_dotz/bigquery_schema_comp_boss.json

7.2.3 - javascriptTextTransformFunctionName: transform

7.2.4 - outputTable: dotz-308423:desafio_dotz.comp_boss

7.2.5 - inputFilePattern: gs://desafio_dotz/comp_boss.csv

7.2.6 - bigQueryLoadingTemporaryDirectory: gs://desafio_dotz/bq_temp/comp_boss

7.2.7 - gcpTempLocation: gs://desafio_dotz/local_temp

7.2.8 - Clique no botão para executar o job.

7.3 - Nome do job: ingest_price_quote

7.3.1 - javascriptTextTransformGcsPath: gs://desafio_dotz/transform_udf_price_quote.js

7.3.2 - JSONPath: gs://desafio_dotz/bigquery_schema_price_quote.json

7.3.3 - javascriptTextTransformFunctionName: transform

7.3.4 - outputTable: dotz-308423:desafio_dotz.price_quote

7.3.5 - inputFilePattern: gs://desafio_dotz/price_quote.csv

7.3.6 - bigQueryLoadingTemporaryDirectory: gs://desafio_dotz/bq_temp/price_quote

7.3.7 - gcpTempLocation: gs://desafio_dotz/local_temp

7.3.8 - Clique no botão para executar o job.

8 - 







