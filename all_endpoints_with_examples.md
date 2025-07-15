# Полный список эндпоинтов API s1.detmir.ru с примерами запросов

> Автоматически сгенерировано на основе анализа всех файлов и реальных HAR-запросов


---

### `/v1/{any`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/activity-feed`

**Методы:** GET, POST

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/activity-feed/get-response?table_name=employee&record_id=169764896307908353&widget_instance_id=169539020307105952
```
```http
GET https://s1.detmir.ru/v1/activity-feed/get-response?table_name=itsm_incident&record_id=175187110104179739&widget_instance_id=170168378104521063
```
```http
GET https://s1.detmir.ru/v1/activity-feed/get-response?table_name=itsm_inquiry&record_id=169996466508313434&widget_instance_id=165088137510790025
```
**Примеры для POST:**
```http
POST https://s1.detmir.ru/v1/activity-feed/create-thread?table_name=itsm_incident&record_id=175187110104179739&widget_instance_id=170168378104521063&type_ids%5B0%5D=159413087600226434&type_ids%5B1%5D=161466978318106001&type_ids%5B2%5D=161466978416389790
```
```http
POST https://s1.detmir.ru/v1/activity-feed/create-thread?table_name=itsm_incident&record_id=175187110104179739&widget_instance_id=170168378104521063&type_ids%5B0%5D=159413087600226434&type_ids%5B1%5D=161466978318106001&type_ids%5B2%5D=161466978416389790
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/activity-feed/create-thread`

**Методы:** POST

**Примеры для POST:**
```http
POST https://s1.detmir.ru/v1/activity-feed/create-thread?table_name=itsm_incident&record_id=175187110104179739&widget_instance_id=170168378104521063&type_ids%5B0%5D=159413087600226434&type_ids%5B1%5D=161466978318106001&type_ids%5B2%5D=161466978416389790
```
```http
POST https://s1.detmir.ru/v1/activity-feed/create-thread?table_name=itsm_incident&record_id=175187110104179739&widget_instance_id=170168378104521063&type_ids%5B0%5D=159413087600226434&type_ids%5B1%5D=161466978318106001&type_ids%5B2%5D=161466978416389790
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/activity-feed/get-response`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/activity-feed/get-response?table_name=employee&record_id=169764896307908353&widget_instance_id=169539020307105952
```
```http
GET https://s1.detmir.ru/v1/activity-feed/get-response?table_name=itsm_incident&record_id=175187110104179739&widget_instance_id=170168378104521063
```
```http
GET https://s1.detmir.ru/v1/activity-feed/get-response?table_name=itsm_inquiry&record_id=169996466508313434&widget_instance_id=165088137510790025
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ajax-script`

**Методы:** GET, POST

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/ajax-script/get-choice-translation/itsm_incident/contact_type/10
```
```http
GET https://s1.detmir.ru/v1/ajax-script/get-choice-translation/itsm_incident/contact_type/20
```
```http
GET https://s1.detmir.ru/v1/ajax-script/get-choice-translation/itsm_incident/contact_type/30
```
**Примеры для POST:**
```http
POST https://s1.detmir.ru/v1/ajax-script/run
```
```http
POST https://s1.detmir.ru/v1/ajax-script/script-to-xml
```
```http
POST https://s1.detmir.ru/v1/ajax-script/run
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ajax-script/get-choice-translation/`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/ajax-script/get-choice-translation/itsm_incident/contact_type/10
```
```http
GET https://s1.detmir.ru/v1/ajax-script/get-choice-translation/itsm_incident/contact_type/20
```
```http
GET https://s1.detmir.ru/v1/ajax-script/get-choice-translation/itsm_incident/contact_type/30
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ajax-script/get-choice-translation/{table}/{field}/{value}`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ajax-script/get-choice-translation/itsm_incident/contact_type/10`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/ajax-script/get-choice-translation/itsm_incident/contact_type/10
```
```http
GET https://s1.detmir.ru/v1/ajax-script/get-choice-translation/itsm_incident/contact_type/10
```
```http
GET https://s1.detmir.ru/v1/ajax-script/get-choice-translation/itsm_incident/contact_type/10
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ajax-script/get-choice-translation/itsm_incident/contact_type/20`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/ajax-script/get-choice-translation/itsm_incident/contact_type/20
```
```http
GET https://s1.detmir.ru/v1/ajax-script/get-choice-translation/itsm_incident/contact_type/20
```
```http
GET https://s1.detmir.ru/v1/ajax-script/get-choice-translation/itsm_incident/contact_type/20
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ajax-script/get-choice-translation/itsm_incident/contact_type/30`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/ajax-script/get-choice-translation/itsm_incident/contact_type/30
```
```http
GET https://s1.detmir.ru/v1/ajax-script/get-choice-translation/itsm_incident/contact_type/30
```
```http
GET https://s1.detmir.ru/v1/ajax-script/get-choice-translation/itsm_incident/contact_type/30
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ajax-script/get-choice-translation/itsm_incident/state/-2`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/ajax-script/get-choice-translation/itsm_incident/state/-2
```
```http
GET https://s1.detmir.ru/v1/ajax-script/get-choice-translation/itsm_incident/state/-2
```
```http
GET https://s1.detmir.ru/v1/ajax-script/get-choice-translation/itsm_incident/state/-2
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ajax-script/get-choice-translation/itsm_incident/state/2`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/ajax-script/get-choice-translation/itsm_incident/state/2
```
```http
GET https://s1.detmir.ru/v1/ajax-script/get-choice-translation/itsm_incident/state/2
```
```http
GET https://s1.detmir.ru/v1/ajax-script/get-choice-translation/itsm_incident/state/2
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ajax-script/get-choice-translation/itsm_incident/state/3`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/ajax-script/get-choice-translation/itsm_incident/state/3
```
```http
GET https://s1.detmir.ru/v1/ajax-script/get-choice-translation/itsm_incident/state/3
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ajax-script/get-choice-translation/itsm_incident/state/4`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/ajax-script/get-choice-translation/itsm_incident/state/4
```
```http
GET https://s1.detmir.ru/v1/ajax-script/get-choice-translation/itsm_incident/state/4
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ajax-script/get-choice-translation/itsm_incident/state/7`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/ajax-script/get-choice-translation/itsm_incident/state/7
```
```http
GET https://s1.detmir.ru/v1/ajax-script/get-choice-translation/itsm_incident/state/7
```
```http
GET https://s1.detmir.ru/v1/ajax-script/get-choice-translation/itsm_incident/state/7
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ajax-script/get-choice-translation/itsm_request/state/2`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/ajax-script/get-choice-translation/itsm_request/state/2
```
```http
GET https://s1.detmir.ru/v1/ajax-script/get-choice-translation/itsm_request/state/2
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ajax-script/get-choice-translation/itsm_request/state/3`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/ajax-script/get-choice-translation/itsm_request/state/3
```
```http
GET https://s1.detmir.ru/v1/ajax-script/get-choice-translation/itsm_request/state/3
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ajax-script/get-choice-translation/itsm_request/state/4`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/ajax-script/get-choice-translation/itsm_request/state/4
```
```http
GET https://s1.detmir.ru/v1/ajax-script/get-choice-translation/itsm_request/state/4
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ajax-script/get-choice-translation/itsm_request/state/7`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/ajax-script/get-choice-translation/itsm_request/state/7
```
```http
GET https://s1.detmir.ru/v1/ajax-script/get-choice-translation/itsm_request/state/7
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ajax-script/run`

**Методы:** POST

**Примеры для POST:**
```http
POST https://s1.detmir.ru/v1/ajax-script/run
```
```http
POST https://s1.detmir.ru/v1/ajax-script/run
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ajax-script/script-to-xml`

**Методы:** POST

**Примеры для POST:**
```http
POST https://s1.detmir.ru/v1/ajax-script/script-to-xml
```
```http
POST https://s1.detmir.ru/v1/ajax-script/script-to-xml
```
```http
POST https://s1.detmir.ru/v1/ajax-script/script-to-xml
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/attachment/`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/attachment/download/{id}`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/attachment/download/123`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/attachment/upload`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/attachments/download/:id`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/auth/`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/auth/access-data`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/auth/access-token`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/auth/dictionary`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/auth/login`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/auth/logout`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/auth/me`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/auth/token`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/autosuggest`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/autosuggest/reference/?reference_id=155931135900000025&reference_column_id=156943341303994936&term=2%2F&reference_qualifier_condition=(sys_idIN174790235103073337%40174644911001090743%40173735987600743588%40173735983802675569%40173735980705956362%40173321518202369550%40173158077401904810%40172969911907548461%40172969906605658192%40172969892305513917%40172969883004567320%40172969876600988239%40172969864908116350%40172969847201516509%40172969835507629275%40172969824304059868%40172969799905787796%40172924506408826103%40172924024607042025%40172923999308930410%40172923991407164418%40172590525800916476%40172590517301549722%40172590510300124773%40172590500508935458%40172590481708131764%40172555424806483509%40172228180608087161%40172176494706323882%40171147700902572996%40171078397705670363%40170714072305381556%40170186820203315580%40170141901004820579%40170141889807476950%40170109255104950064%40170066042706154896%40170057200305753067%40170056753708586713%40169951545006863653%40169824779602952183%40169815998202555377%40169635153005721764%40169635152904660147%40169635152904659820%40169635152808038000%40169635152808036720%40169635152704038941%40169635152704038588%40169635152704038113%40169635152604434795%40169635152604434369%40169635152604434010%40169635152604433620%40169635152506964477%40169635152506963992%40169635152506963468%40169635152506962930%40169635152405525537%40169635152405525132%40169635152405524641%40169635152405524269%40169635152307838236%40169635152307837310%40169635152307836964%40169635152208853562%40169635152208853137%40169291705407534067%40169073468508820349)%5EORDERBYname
```
```http
GET https://s1.detmir.ru/v1/autosuggest/reference/?reference_id=155931135900000025&reference_column_id=156943341303994936&term=2%D0%B1&reference_qualifier_condition=(sys_idIN174790235103073337%40174644911001090743%40173735987600743588%40173735983802675569%40173735980705956362%40173321518202369550%40173158077401904810%40172969911907548461%40172969906605658192%40172969892305513917%40172969883004567320%40172969876600988239%40172969864908116350%40172969847201516509%40172969835507629275%40172969824304059868%40172969799905787796%40172924506408826103%40172924024607042025%40172923999308930410%40172923991407164418%40172590525800916476%40172590517301549722%40172590510300124773%40172590500508935458%40172590481708131764%40172555424806483509%40172228180608087161%40172176494706323882%40171147700902572996%40171078397705670363%40170714072305381556%40170186820203315580%40170141901004820579%40170141889807476950%40170109255104950064%40170066042706154896%40170057200305753067%40170056753708586713%40169951545006863653%40169824779602952183%40169815998202555377%40169635153005721764%40169635152904660147%40169635152904659820%40169635152808038000%40169635152808036720%40169635152704038941%40169635152704038588%40169635152704038113%40169635152604434795%40169635152604434369%40169635152604434010%40169635152604433620%40169635152506964477%40169635152506963992%40169635152506963468%40169635152506962930%40169635152405525537%40169635152405525132%40169635152405524641%40169635152405524269%40169635152307838236%40169635152307837310%40169635152307836964%40169635152208853562%40169635152208853137%40169291705407534067%40169073468508820349)%5EORDERBYname
```
```http
GET https://s1.detmir.ru/v1/autosuggest/reference/?reference_id=155931135900000025&reference_column_id=156943341303994936&term=2%D1%8E&reference_qualifier_condition=(sys_idIN174790235103073337%40174644911001090743%40173735987600743588%40173735983802675569%40173735980705956362%40173321518202369550%40173158077401904810%40172969911907548461%40172969906605658192%40172969892305513917%40172969883004567320%40172969876600988239%40172969864908116350%40172969847201516509%40172969835507629275%40172969824304059868%40172969799905787796%40172924506408826103%40172924024607042025%40172923999308930410%40172923991407164418%40172590525800916476%40172590517301549722%40172590510300124773%40172590500508935458%40172590481708131764%40172555424806483509%40172228180608087161%40172176494706323882%40171147700902572996%40171078397705670363%40170714072305381556%40170186820203315580%40170141901004820579%40170141889807476950%40170109255104950064%40170066042706154896%40170057200305753067%40170056753708586713%40169951545006863653%40169824779602952183%40169815998202555377%40169635153005721764%40169635152904660147%40169635152904659820%40169635152808038000%40169635152808036720%40169635152704038941%40169635152704038588%40169635152704038113%40169635152604434795%40169635152604434369%40169635152604434010%40169635152604433620%40169635152506964477%40169635152506963992%40169635152506963468%40169635152506962930%40169635152405525537%40169635152405525132%40169635152405524641%40169635152405524269%40169635152307838236%40169635152307837310%40169635152307836964%40169635152208853562%40169635152208853137%40169291705407534067%40169073468508820349)%5EORDERBYname
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/autosuggest/reference/`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/autosuggest/reference/?reference_id=155931135900000025&reference_column_id=156943341303994936&term=2%2F&reference_qualifier_condition=(sys_idIN174790235103073337%40174644911001090743%40173735987600743588%40173735983802675569%40173735980705956362%40173321518202369550%40173158077401904810%40172969911907548461%40172969906605658192%40172969892305513917%40172969883004567320%40172969876600988239%40172969864908116350%40172969847201516509%40172969835507629275%40172969824304059868%40172969799905787796%40172924506408826103%40172924024607042025%40172923999308930410%40172923991407164418%40172590525800916476%40172590517301549722%40172590510300124773%40172590500508935458%40172590481708131764%40172555424806483509%40172228180608087161%40172176494706323882%40171147700902572996%40171078397705670363%40170714072305381556%40170186820203315580%40170141901004820579%40170141889807476950%40170109255104950064%40170066042706154896%40170057200305753067%40170056753708586713%40169951545006863653%40169824779602952183%40169815998202555377%40169635153005721764%40169635152904660147%40169635152904659820%40169635152808038000%40169635152808036720%40169635152704038941%40169635152704038588%40169635152704038113%40169635152604434795%40169635152604434369%40169635152604434010%40169635152604433620%40169635152506964477%40169635152506963992%40169635152506963468%40169635152506962930%40169635152405525537%40169635152405525132%40169635152405524641%40169635152405524269%40169635152307838236%40169635152307837310%40169635152307836964%40169635152208853562%40169635152208853137%40169291705407534067%40169073468508820349)%5EORDERBYname
```
```http
GET https://s1.detmir.ru/v1/autosuggest/reference/?reference_id=155931135900000025&reference_column_id=156943341303994936&term=2%D0%B1&reference_qualifier_condition=(sys_idIN174790235103073337%40174644911001090743%40173735987600743588%40173735983802675569%40173735980705956362%40173321518202369550%40173158077401904810%40172969911907548461%40172969906605658192%40172969892305513917%40172969883004567320%40172969876600988239%40172969864908116350%40172969847201516509%40172969835507629275%40172969824304059868%40172969799905787796%40172924506408826103%40172924024607042025%40172923999308930410%40172923991407164418%40172590525800916476%40172590517301549722%40172590510300124773%40172590500508935458%40172590481708131764%40172555424806483509%40172228180608087161%40172176494706323882%40171147700902572996%40171078397705670363%40170714072305381556%40170186820203315580%40170141901004820579%40170141889807476950%40170109255104950064%40170066042706154896%40170057200305753067%40170056753708586713%40169951545006863653%40169824779602952183%40169815998202555377%40169635153005721764%40169635152904660147%40169635152904659820%40169635152808038000%40169635152808036720%40169635152704038941%40169635152704038588%40169635152704038113%40169635152604434795%40169635152604434369%40169635152604434010%40169635152604433620%40169635152506964477%40169635152506963992%40169635152506963468%40169635152506962930%40169635152405525537%40169635152405525132%40169635152405524641%40169635152405524269%40169635152307838236%40169635152307837310%40169635152307836964%40169635152208853562%40169635152208853137%40169291705407534067%40169073468508820349)%5EORDERBYname
```
```http
GET https://s1.detmir.ru/v1/autosuggest/reference/?reference_id=155931135900000025&reference_column_id=156943341303994936&term=2%D1%8E&reference_qualifier_condition=(sys_idIN174790235103073337%40174644911001090743%40173735987600743588%40173735983802675569%40173735980705956362%40173321518202369550%40173158077401904810%40172969911907548461%40172969906605658192%40172969892305513917%40172969883004567320%40172969876600988239%40172969864908116350%40172969847201516509%40172969835507629275%40172969824304059868%40172969799905787796%40172924506408826103%40172924024607042025%40172923999308930410%40172923991407164418%40172590525800916476%40172590517301549722%40172590510300124773%40172590500508935458%40172590481708131764%40172555424806483509%40172228180608087161%40172176494706323882%40171147700902572996%40171078397705670363%40170714072305381556%40170186820203315580%40170141901004820579%40170141889807476950%40170109255104950064%40170066042706154896%40170057200305753067%40170056753708586713%40169951545006863653%40169824779602952183%40169815998202555377%40169635153005721764%40169635152904660147%40169635152904659820%40169635152808038000%40169635152808036720%40169635152704038941%40169635152704038588%40169635152704038113%40169635152604434795%40169635152604434369%40169635152604434010%40169635152604433620%40169635152506964477%40169635152506963992%40169635152506963468%40169635152506962930%40169635152405525537%40169635152405525132%40169635152405524641%40169635152405524269%40169635152307838236%40169635152307837310%40169635152307836964%40169635152208853562%40169635152208853137%40169291705407534067%40169073468508820349)%5EORDERBYname
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/autosuggest/user`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/autosuggest/user?reference_id=155931135900000084&reference_column_id=155931135900001080&term=%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D0%B0&reference_qualifier_condition=sys_idIN172185511101357586%40168813850604162939%40174412515900997284%40173859519802375604%40173920099305024313%40173866193906187263%40173814303501552038%40173764589801537892%40171993295805124243%40173081942302246374%40171343159803321234%40172682328301880437%40172563551701394312%40169461199304780764%40171578589603329898%40170973772601216312%40170835522406106165%40169470324301425437%40168813853808042085%40168813823904446234%40168813851508881567%40168813854902896353%40168813856300903569%40169279315604588176%40168813856405572689%40169580833308153374%40168813856105710113
```
```http
GET https://s1.detmir.ru/v1/autosuggest/user?reference_id=155931135900000084&reference_column_id=155931135900001080&term=%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2&reference_qualifier_condition=sys_idIN172185511101357586%40168813850604162939%40174412515900997284%40173859519802375604%40173920099305024313%40173866193906187263%40173814303501552038%40173764589801537892%40171993295805124243%40173081942302246374%40171343159803321234%40172682328301880437%40172563551701394312%40169461199304780764%40171578589603329898%40170973772601216312%40170835522406106165%40169470324301425437%40168813853808042085%40168813823904446234%40168813851508881567%40168813854902896353%40168813856300903569%40169279315604588176%40168813856405572689%40169580833308153374%40168813856105710113
```
```http
GET https://s1.detmir.ru/v1/autosuggest/user?reference_id=155931135900000084&reference_column_id=155931135900001080&term=G&reference_qualifier_condition=sys_idIN172185511101357586%40168813850604162939%40174412515900997284%40173859519802375604%40173920099305024313%40173866193906187263%40173814303501552038%40173764589801537892%40171993295805124243%40173081942302246374%40171343159803321234%40172682328301880437%40172563551701394312%40169461199304780764%40171578589603329898%40170973772601216312%40170835522406106165%40169470324301425437%40168813853808042085%40168813823904446234%40168813851508881567%40168813854902896353%40168813856300903569%40169279315604588176%40168813856405572689%40169580833308153374%40168813856105710113
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/brand`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/catalog`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/categories`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/change`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/change/:id`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/choice`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/choice/list-set?table_id=156950363112415683&column_id=155931135900001086
```
```http
GET https://s1.detmir.ru/v1/choice/list-set?table_id=156950363112415683&column_id=156950458513084273
```
```http
GET https://s1.detmir.ru/v1/choice/list-set?table_id=156950363112415683&column_id=158517133815769391
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/choice/list-set`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/choice/list-set?table_id=156950363112415683&column_id=155931135900001086
```
```http
GET https://s1.detmir.ru/v1/choice/list-set?table_id=156950363112415683&column_id=156950458513084273
```
```http
GET https://s1.detmir.ru/v1/choice/list-set?table_id=156950363112415683&column_id=158517133815769391
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/client-script`

**Методы:** POST

**Примеры для POST:**
```http
POST https://s1.detmir.ru/v1/client-script/match-condition/itsm_incident
```
```http
POST https://s1.detmir.ru/v1/client-script/match-condition/itsm_incident/175187110104179739
```
```http
POST https://s1.detmir.ru/v1/client-script/match-condition/itsm_inquiry/169996466508313434
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/client-script/match-condition/itsm_incident`

**Методы:** POST

**Примеры для POST:**
```http
POST https://s1.detmir.ru/v1/client-script/match-condition/itsm_incident
```
```http
POST https://s1.detmir.ru/v1/client-script/match-condition/itsm_incident/175187110104179739
```
```http
POST https://s1.detmir.ru/v1/client-script/match-condition/itsm_incident
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/client-script/match-condition/itsm_incident/175187110104179739`

**Методы:** POST

**Примеры для POST:**
```http
POST https://s1.detmir.ru/v1/client-script/match-condition/itsm_incident/175187110104179739
```
```http
POST https://s1.detmir.ru/v1/client-script/match-condition/itsm_incident/175187110104179739
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/client-script/match-condition/itsm_incident/175189583005294314`

**Методы:** POST

**Примеры для POST:**
```http
POST https://s1.detmir.ru/v1/client-script/match-condition/itsm_incident/175189583005294314
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/client-script/match-condition/itsm_inquiry/169996466508313434`

**Методы:** POST

**Примеры для POST:**
```http
POST https://s1.detmir.ru/v1/client-script/match-condition/itsm_inquiry/169996466508313434
```
```http
POST https://s1.detmir.ru/v1/client-script/match-condition/itsm_inquiry/169996466508313434
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/client-script/match-condition/itsm_request/175187130508735062`

**Методы:** POST

**Примеры для POST:**
```http
POST https://s1.detmir.ru/v1/client-script/match-condition/itsm_request/175187130508735062
```
```http
POST https://s1.detmir.ru/v1/client-script/match-condition/itsm_request/175187130508735062
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/condition`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/condition/dictionary
```
```http
GET https://s1.detmir.ru/v1/condition/dot-walk?referenced_table_id=155931135900000078
```
```http
GET https://s1.detmir.ru/v1/condition/dot-walk?referenced_table_id=155931135900000081
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/condition/`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/condition/dictionary
```
```http
GET https://s1.detmir.ru/v1/condition/dot-walk?referenced_table_id=155931135900000078
```
```http
GET https://s1.detmir.ru/v1/condition/dot-walk?referenced_table_id=155931135900000081
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/condition/dictionary`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/condition/dictionary
```
```http
GET https://s1.detmir.ru/v1/condition/dictionary
```
```http
GET https://s1.detmir.ru/v1/condition/dictionary
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/condition/dot-walk`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/condition/dot-walk?referenced_table_id=155931135900000078
```
```http
GET https://s1.detmir.ru/v1/condition/dot-walk?referenced_table_id=155931135900000081
```
```http
GET https://s1.detmir.ru/v1/condition/dot-walk?referenced_table_id=156525007504892837
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/condition/opts`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/condition/opts?table_id=156525007504892837&column_id=156525007504894826&operator=DYNAMIC
```
```http
GET https://s1.detmir.ru/v1/condition/opts?table_id=156873090301469473&column_id=156873095908372435&operator=!%3D
```
```http
GET https://s1.detmir.ru/v1/condition/opts?table_id=156950363112415683&column_id=155931135900001080&operator=!%3D
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/condition/parse`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/condition/parse?condition=((stateNOT%20IN7%4010%5Eassignment_group%3D169635152405524641))&table_id=156950363112415683
```
```http
GET https://s1.detmir.ru/v1/condition/parse?condition=()&table_id=157233752019606969
```
```http
GET https://s1.detmir.ru/v1/condition/parse?condition=(approver_idDYNAMIC166065662210008466)%5EORDERBYDESCsys_created_at&table_id=156525007504892837
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/dictionary`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/dictionary/:name`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/dictionary/{name}`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/employee`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/employee/profile`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/employees`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/exports`

**Методы:** GET, POST

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/exports?userId=168813850604162939
```
```http
GET https://s1.detmir.ru/v1/exports?userId=168813850604162939
```
**Примеры для POST:**
```http
POST https://s1.detmir.ru/v1/exports
```
```http
POST https://s1.detmir.ru/v1/exports/download-url
```
```http
POST https://s1.detmir.ru/v1/exports
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/exports/download-url`

**Методы:** POST

**Примеры для POST:**
```http
POST https://s1.detmir.ru/v1/exports/download-url
```
```http
POST https://s1.detmir.ru/v1/exports/download-url
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/field`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/field/display-value?table_name=itsm_incident&column_id=155931135900001080&value=168813850604162939
```
```http
GET https://s1.detmir.ru/v1/field/display-value?table_name=itsm_incident&column_id=155931135900001086&value=2
```
```http
GET https://s1.detmir.ru/v1/field/display-value?table_name=itsm_incident&column_id=155931135900001087&value=1
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/field/display-value`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/field/display-value?table_name=itsm_incident&column_id=155931135900001080&value=168813850604162939
```
```http
GET https://s1.detmir.ru/v1/field/display-value?table_name=itsm_incident&column_id=155931135900001086&value=2
```
```http
GET https://s1.detmir.ru/v1/field/display-value?table_name=itsm_incident&column_id=155931135900001087&value=1
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/files/`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/files/{table}/{id}`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/files/{table}/{id}/{file_id}`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/files/{table}/{id}/1`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/files/{table}/1`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/files/{table}/2`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/filter`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/filter/dynamic-filter-options?column_id=155931135900001080
```
```http
GET https://s1.detmir.ru/v1/filter/dynamic-filter-options?column_id=156525007504894826
```
```http
GET https://s1.detmir.ru/v1/filter/dynamic-filter-options?column_id=156873095908372435
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/filter/dynamic-filter-options`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/filter/dynamic-filter-options?column_id=155931135900001080
```
```http
GET https://s1.detmir.ru/v1/filter/dynamic-filter-options?column_id=156525007504894826
```
```http
GET https://s1.detmir.ru/v1/filter/dynamic-filter-options?column_id=156873095908372435
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/group_members`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/incident`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/incident/:id`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/incident/:id/attachments`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/incident/:id/comments`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/incident/categories`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/incident/priorities`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/incident/statuses`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/info`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/info/main-page
```
```http
GET https://s1.detmir.ru/v1/info/error-pages
```
```http
GET https://s1.detmir.ru/v1/info/main-page
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/info/error-pages`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/info/error-pages
```
```http
GET https://s1.detmir.ru/v1/info/error-pages
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/info/main-page`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/info/main-page
```
```http
GET https://s1.detmir.ru/v1/info/main-page
```
```http
GET https://s1.detmir.ru/v1/info/main-page
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/itsm_incident`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/itsm_task`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/LICENSE`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/list-filter`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/list-filter/dashboard?condition=&per_page=50
```
```http
GET https://s1.detmir.ru/v1/list-filter/itsm_incident?condition=(assigned_userDYNAMIC156957117519820256%5EstateNOT%20IN10%407)&per_page=50
```
```http
GET https://s1.detmir.ru/v1/list-filter/itsm_incident?condition=(assignment_groupDYNAMIC159679003220074662%5EstateNOT%20IN7%4010)&per_page=50
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/list-filter/`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/list-filter/dashboard?condition=&per_page=50
```
```http
GET https://s1.detmir.ru/v1/list-filter/itsm_incident?condition=(assigned_userDYNAMIC156957117519820256%5EstateNOT%20IN10%407)&per_page=50
```
```http
GET https://s1.detmir.ru/v1/list-filter/itsm_incident?condition=(assignment_groupDYNAMIC159679003220074662%5EstateNOT%20IN7%4010)&per_page=50
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/list-filter/:table`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/list-filter/{table_name}`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/list-filter/{table}`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/list-filter/dashboard`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/list-filter/dashboard?condition=&per_page=50
```
```http
GET https://s1.detmir.ru/v1/list-filter/dashboard?condition=&per_page=50
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/list-filter/employee`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/list-filter/itsm_change`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/list-filter/itsm_incident`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/list-filter/itsm_incident?condition=(assigned_userDYNAMIC156957117519820256%5EstateNOT%20IN10%407)&per_page=50
```
```http
GET https://s1.detmir.ru/v1/list-filter/itsm_incident?condition=(assignment_groupDYNAMIC159679003220074662%5EstateNOT%20IN7%4010)&per_page=50
```
```http
GET https://s1.detmir.ru/v1/list-filter/itsm_incident?condition=(state!%3D10)&per_page=50
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/list-filter/itsm_inquiry`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/list-filter/itsm_inquiry?condition=(number%3D9-00002527)&per_page=50
```
```http
GET https://s1.detmir.ru/v1/list-filter/itsm_inquiry?condition=(numberLIKE9-00002527)&per_page=50
```
```http
GET https://s1.detmir.ru/v1/list-filter/itsm_inquiry?condition=(numberSTARTSWITH9-%5E(related_ticketLIKE7-%20%5EORrelated_ticketLIKE8-))&per_page=50
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/list-filter/itsm_problem`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/list-filter/itsm_problem?condition=(assigned_userDYNAMIC156957117519820256%5EstateNOT%20IN10%407)&per_page=50
```
```http
GET https://s1.detmir.ru/v1/list-filter/itsm_problem?condition=(assignment_groupDYNAMIC159679003220074662%5EstateNOT%20IN7%4010)&per_page=50
```
```http
GET https://s1.detmir.ru/v1/list-filter/itsm_problem?condition=(state!%3D10)&per_page=50
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/list-filter/itsm_request`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/list-filter/itsm_request?condition=(assigned_userDYNAMIC156957117519820256%5EstateNOT%20IN7%4010)&per_page=50
```
```http
GET https://s1.detmir.ru/v1/list-filter/itsm_request?condition=(assignment_groupDYNAMIC159679003220074662%5EstateNOT%20IN10%407)&per_page=50
```
```http
GET https://s1.detmir.ru/v1/list-filter/itsm_request?condition=(state!%3D10)&per_page=50
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/list-filter/itsm_task`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/list-filter/itsm_task?condition=((stateNOT%20IN7%4010%5Eassignment_group%3D169635152405524641))&per_page=50
```
```http
GET https://s1.detmir.ru/v1/list-filter/itsm_task?condition=(assigned_userDYNAMIC166065669613487583%5EstateNOT%20IN7%4010)&per_page=50
```
```http
GET https://s1.detmir.ru/v1/list-filter/itsm_task?condition=(callerDYNAMIC156957117519820256%5EstateNOT%20IN10%407)%5EORDERBYsys_created_at&per_page=50
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/list-filter/org_company`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/list-filter/org_unit`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/list-filter/request`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/list-filter/sys_approval`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/list-filter/sys_approval?condition=(approver_idDYNAMIC166065662210008466)%5EORDERBYDESCsys_created_at&per_page=50
```
```http
GET https://s1.detmir.ru/v1/list-filter/sys_approval?condition=(approver_idDYNAMIC166065662210008466)%5EORDERBYDESCsys_created_at&per_page=50
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/list-filter/sys_cmdb_ci_service`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/list-filter/sys_cmdb_ci_service?condition=()&reference_column_id=158088653215716107&type=dictionary&page=2&per_page=50
```
```http
GET https://s1.detmir.ru/v1/list-filter/sys_cmdb_ci_service?condition=()&reference_column_id=158088653215716107&type=dictionary&page=3&per_page=50
```
```http
GET https://s1.detmir.ru/v1/list-filter/sys_cmdb_ci_service?condition=()&reference_column_id=158088653215716107&type=dictionary&per_page=50
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/list-filter/sys_delegation`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/list-filter/sys_delegation?condition=(delegator_idDYNAMIC156957141416138823)%5EGROUPBYDESCstate&view=My%20Delegates&per_page=50
```
```http
GET https://s1.detmir.ru/v1/list-filter/sys_delegation?condition=(delegator_idDYNAMIC156957141416138823)%5EGROUPBYDESCstate&view=My%20Delegates&per_page=50
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/list-filter/sys_group`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/list-filter/sys_personal_schedule_entry`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/list-filter/sys_personal_schedule_entry?condition=(employeeDYNAMIC156957141416138823)&per_page=50
```
```http
GET https://s1.detmir.ru/v1/list-filter/sys_personal_schedule_entry?condition=(employeeDYNAMIC156957141416138823)&per_page=50
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/list-filter/sys_product`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/list-filter/sys_product?condition=&per_page=50
```
```http
GET https://s1.detmir.ru/v1/list-filter/sys_product?condition=&per_page=50
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/list-filter/sys_report`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/list-filter/sys_report?condition=&per_page=50
```
```http
GET https://s1.detmir.ru/v1/list-filter/sys_report?condition=&per_page=50
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/list-filter/sys_user_group`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/list-filter/user`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/list-group-filter`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/list-group-filter/itsm_task?condition=(stateIN7%4010%5Esys_db_table_id!%3D156950639316968592%5Eresolved_atBETWEEN2024-03-16%2021%3A01%3A01%402024-03-24%2020%3A59%3A41%5Eassignment_groupDYNAMIC159679003220074662%5Eclosure_code!%3D4)%5EGROUPBYCOUNTDESCresolved_by%5EORDERBYDESCsys_created_at&per_page=50
```
```http
GET https://s1.detmir.ru/v1/list-group-filter/itsm_task?condition=(stateIN7%4010%5Esys_db_table_id!%3D156950639316968592%5Eresolved_atBETWEEN2025-06-28%2021%3A01%3A01%402025-07-06%2020%3A59%3A41%5Eassignment_groupDYNAMIC159679003220074662%5Eclosure_code!%3D4)%5EGROUPBYCOUNTDESCresolved_by%5EORDERBYDESCsys_created_at&per_page=50
```
```http
GET https://s1.detmir.ru/v1/list-group-filter/sys_delegation?condition=(delegator_idDYNAMIC156957141416138823)%5EGROUPBYDESCstate&view=My%20Delegates&per_page=50
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/list-group-filter/itsm_task`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/list-group-filter/itsm_task?condition=(stateIN7%4010%5Esys_db_table_id!%3D156950639316968592%5Eresolved_atBETWEEN2024-03-16%2021%3A01%3A01%402024-03-24%2020%3A59%3A41%5Eassignment_groupDYNAMIC159679003220074662%5Eclosure_code!%3D4)%5EGROUPBYCOUNTDESCresolved_by%5EORDERBYDESCsys_created_at&per_page=50
```
```http
GET https://s1.detmir.ru/v1/list-group-filter/itsm_task?condition=(stateIN7%4010%5Esys_db_table_id!%3D156950639316968592%5Eresolved_atBETWEEN2025-06-28%2021%3A01%3A01%402025-07-06%2020%3A59%3A41%5Eassignment_groupDYNAMIC159679003220074662%5Eclosure_code!%3D4)%5EGROUPBYCOUNTDESCresolved_by%5EORDERBYDESCsys_created_at&per_page=50
```
```http
GET https://s1.detmir.ru/v1/list-group-filter/itsm_task?condition=(stateIN7%4010%5Esys_db_table_id!%3D156950639316968592%5Eresolved_atBETWEEN2024-03-16%2021%3A01%3A01%402024-03-24%2020%3A59%3A41%5Eassignment_groupDYNAMIC159679003220074662%5Eclosure_code!%3D4)%5EGROUPBYCOUNTDESCresolved_by%5EORDERBYDESCsys_created_at&per_page=50
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/list-group-filter/sys_delegation`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/list-group-filter/sys_delegation?condition=(delegator_idDYNAMIC156957141416138823)%5EGROUPBYDESCstate&view=My%20Delegates&per_page=50
```
```http
GET https://s1.detmir.ru/v1/list-group-filter/sys_delegation?condition=(delegator_idDYNAMIC156957141416138823)%5EGROUPBYDESCstate&view=My%20Delegates&per_page=50
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/list-tables`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/list/employee`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/list/incident`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/list/itsm_task`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/list/sys_group`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/list/user`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/lookup/{dictionary}`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/lookup/categories`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/lookup/priorities`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/lookup/statuses`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/menu`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/menu/get-favorites
```
```http
GET https://s1.detmir.ru/v1/menu/get-list
```
```http
GET https://s1.detmir.ru/v1/menu/get-favorites
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/menu/get-favorites`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/menu/get-favorites
```
```http
GET https://s1.detmir.ru/v1/menu/get-favorites
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/menu/get-list`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/menu/get-list
```
```http
GET https://s1.detmir.ru/v1/menu/get-list
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/new-certificate`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/notifications/messages/sent-by-client/79771389478`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/notifications/messages/sent-by-client/79818187679`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/oauth/token`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ord`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/orders`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/orders/`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/orders/{{order_id}}`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ordersFile`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/package/npm/decimal`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/package/npm/error-stack-parser/badge`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/package/npm/punycode/badge`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/page`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/page/170834390406837066?
```
```http
GET https://s1.detmir.ru/v1/page/170834390406837066?
```
```http
GET https://s1.detmir.ru/v1/page/170834390406837066?
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/page/`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/page/170834390406837066?
```
```http
GET https://s1.detmir.ru/v1/page/170834390406837066?
```
```http
GET https://s1.detmir.ru/v1/page/170834390406837066?
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/page/{id}`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/page/{id}/children`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/page/{id}/widgets`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/page/1708343904068370`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/page/170834390406837066?
```
```http
GET https://s1.detmir.ru/v1/page/170834390406837066?
```
```http
GET https://s1.detmir.ru/v1/page/170834390406837066?
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/page/1708343904068370/children`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/page/1708343904068370/widgets`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/page/170834390406837066`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/page/170834390406837066?
```
```http
GET https://s1.detmir.ru/v1/page/170834390406837066?
```
```http
GET https://s1.detmir.ru/v1/page/170834390406837066?
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/page/170834390406837066/children`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/page/170834390406837066/widgets`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/partners/52458e7c`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/partners/52458e7c0d422d4d54590318/anyPla`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/partners/52458e7c0d422d4d54590318/anyPlacemen`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/partners/52458e7c0d422d4d54590318/anyPlacements/6f087f6b-9ed8-409c-b0fc-ce0f27d1ce80/impressions`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/partners/52458e7c0d422d4d54590318/anyPlacements/8a4a5963-049a-4dca-a182-49a147cc444`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/partners/52458e7c0d422d4d54590318/productPlacement`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/portal/`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/portal/{endpoint}`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/portal/auth/access-data`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/portal/auth/dictionary`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/portal/auth/login`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/portal/catalog`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/portal/categories`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/portal/condition/dictionary`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/portal/dictionary`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/portal/info/error-pages`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/portal/info/main-page`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/portal/menu`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/portal/portal`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/portal/portal/404`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/portal/portal/preferences`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/portal/portal/record`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/portal/portal/setting`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/portal/preferences`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/portal/service_catalog/items`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/portal/setting`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/portal/sso/login`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/portal/sys-property`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/portal/sys-property/get-branding`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/portal/sys-property/get-public-properties`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/portal/ui-action`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/portal/user/current`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/portal/user/me`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/portal/user/notifications`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/portal/user/tasks`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/preferences`

**Методы:** GET, POST

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/preferences/get-preferences?preferencesNames%5B%5D=menu.pin&preferencesNames%5B%5D=menu.item&preferencesNames%5B%5D=menu.tab
```
```http
GET https://s1.detmir.ru/v1/preferences/get-preferences?preferencesNames=dashboard.refresh.interval.170834390406837066
```
```http
GET https://s1.detmir.ru/v1/preferences/get-preferences?preferencesNames%5B%5D=list_items.per_page&preferencesNames%5B%5D=related.c_related_tickets.per_page
```
**Примеры для POST:**
```http
POST https://s1.detmir.ru/v1/preferences/save
```
```http
POST https://s1.detmir.ru/v1/preferences/save
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/preferences/`

**Методы:** GET, POST

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/preferences/get-preferences?preferencesNames%5B%5D=menu.pin&preferencesNames%5B%5D=menu.item&preferencesNames%5B%5D=menu.tab
```
```http
GET https://s1.detmir.ru/v1/preferences/get-preferences?preferencesNames=dashboard.refresh.interval.170834390406837066
```
```http
GET https://s1.detmir.ru/v1/preferences/get-preferences?preferencesNames%5B%5D=list_items.per_page&preferencesNames%5B%5D=related.c_related_tickets.per_page
```
**Примеры для POST:**
```http
POST https://s1.detmir.ru/v1/preferences/save
```
```http
POST https://s1.detmir.ru/v1/preferences/save
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/preferences/get-preferences`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/preferences/get-preferences?preferencesNames%5B%5D=menu.pin&preferencesNames%5B%5D=menu.item&preferencesNames%5B%5D=menu.tab
```
```http
GET https://s1.detmir.ru/v1/preferences/get-preferences?preferencesNames=dashboard.refresh.interval.170834390406837066
```
```http
GET https://s1.detmir.ru/v1/preferences/get-preferences?preferencesNames%5B%5D=list_items.per_page&preferencesNames%5B%5D=related.c_related_tickets.per_page
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/preferences/save`

**Методы:** POST

**Примеры для POST:**
```http
POST https://s1.detmir.ru/v1/preferences/save
```
```http
POST https://s1.detmir.ru/v1/preferences/save
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/preview`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/preview/org_unit/169514556302645490?reference_column_id=169297155701221692
```
```http
GET https://s1.detmir.ru/v1/preview/org_unit/169514556302645572?reference_column_id=156873095908372435
```
```http
GET https://s1.detmir.ru/v1/preview/user/169764896307908353?reference_column_id=156943341302811366
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/preview/org_unit/`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/preview/org_unit/169514556302645490?reference_column_id=169297155701221692
```
```http
GET https://s1.detmir.ru/v1/preview/org_unit/169514556302645572?reference_column_id=156873095908372435
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/preview/org_unit/{id}`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/preview/org_unit/169514556302645490`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/preview/org_unit/169514556302645490?reference_column_id=169297155701221692
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/preview/org_unit/169514556302645572`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/preview/org_unit/169514556302645572?reference_column_id=156873095908372435
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/preview/user/`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/preview/user/169764896307908353?reference_column_id=156943341302811366
```
```http
GET https://s1.detmir.ru/v1/preview/user/169764896307908353?reference_column_id=156943341302811366
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/preview/user/{id}`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/preview/user/169764896307908353`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/preview/user/169764896307908353?reference_column_id=156943341302811366
```
```http
GET https://s1.detmir.ru/v1/preview/user/169764896307908353?reference_column_id=156943341302811366
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/problem`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/problem/:id`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/products-indexer/checkinvalid`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/profile`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/query/employee`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/query/user`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/record`

**Методы:** GET, POST, PUT

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/record/dashboard/174902718606389077?open_first_rel_list=0
```
```http
GET https://s1.detmir.ru/v1/record/dashboard?open_first_rel_list=0
```
```http
GET https://s1.detmir.ru/v1/record/employee/169764896307908353?open_first_rel_list=0
```
**Примеры для POST:**
```http
POST https://s1.detmir.ru/v1/record/itsm_incident/175187110104179739?form_id=&form_view=Default&open_first_rel_list=0&is_service_portal=0
```
```http
POST https://s1.detmir.ru/v1/record/itsm_incident/175187110104179739?form_id=&form_view=Default&open_first_rel_list=0&is_service_portal=0
```
**Примеры для PUT:**
```http
PUT https://s1.detmir.ru/v1/record/itsm_incident?form_id=&form_view=Default&open_first_rel_list=0&is_service_portal=0
```
```http
PUT https://s1.detmir.ru/v1/record/itsm_incident?form_id=&form_view=Default&open_first_rel_list=0&is_service_portal=0
```
```http
PUT https://s1.detmir.ru/v1/record/itsm_incident?form_id=&form_view=Default&open_first_rel_list=0&is_service_portal=0
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/record/`

**Методы:** GET, POST, PUT

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/record/dashboard/174902718606389077?open_first_rel_list=0
```
```http
GET https://s1.detmir.ru/v1/record/dashboard?open_first_rel_list=0
```
```http
GET https://s1.detmir.ru/v1/record/employee/169764896307908353?open_first_rel_list=0
```
**Примеры для POST:**
```http
POST https://s1.detmir.ru/v1/record/itsm_incident/175187110104179739?form_id=&form_view=Default&open_first_rel_list=0&is_service_portal=0
```
```http
POST https://s1.detmir.ru/v1/record/itsm_incident/175187110104179739?form_id=&form_view=Default&open_first_rel_list=0&is_service_portal=0
```
**Примеры для PUT:**
```http
PUT https://s1.detmir.ru/v1/record/itsm_incident?form_id=&form_view=Default&open_first_rel_list=0&is_service_portal=0
```
```http
PUT https://s1.detmir.ru/v1/record/itsm_incident?form_id=&form_view=Default&open_first_rel_list=0&is_service_portal=0
```
```http
PUT https://s1.detmir.ru/v1/record/itsm_incident?form_id=&form_view=Default&open_first_rel_list=0&is_service_portal=0
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/record/:table`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/record/:table_name`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/record/:table_name/:number`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/record/:table/:id`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/record/{table}`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/record/{table}/{id}`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/record/{table}/{sys_id}`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/record/{table}/1`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/record/{table}/2`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/record/dashboard`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/record/dashboard/174902718606389077?open_first_rel_list=0
```
```http
GET https://s1.detmir.ru/v1/record/dashboard?open_first_rel_list=0
```
```http
GET https://s1.detmir.ru/v1/record/dashboard/174902718606389077?open_first_rel_list=0
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/record/dashboard/174902718606389077`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/record/dashboard/174902718606389077?open_first_rel_list=0
```
```http
GET https://s1.detmir.ru/v1/record/dashboard/174902718606389077?open_first_rel_list=0
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/record/employee`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/record/employee/169764896307908353?open_first_rel_list=0
```
```http
GET https://s1.detmir.ru/v1/record/employee/169764896307908353?open_first_rel_list=0
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/record/employee/`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/record/employee/169764896307908353?open_first_rel_list=0
```
```http
GET https://s1.detmir.ru/v1/record/employee/169764896307908353?open_first_rel_list=0
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/record/employee/{id}`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/record/employee/169764896307908353`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/record/employee/169764896307908353?open_first_rel_list=0
```
```http
GET https://s1.detmir.ru/v1/record/employee/169764896307908353?open_first_rel_list=0
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/record/employee/current`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/record/itsm_change`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/record/itsm_incident`

**Методы:** GET, POST, PUT

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/record/itsm_incident/175187110104179739?open_first_rel_list=0
```
```http
GET https://s1.detmir.ru/v1/record/itsm_incident?open_first_rel_list=0
```
```http
GET https://s1.detmir.ru/v1/record/itsm_incident/175187110104179739?open_first_rel_list=0
```
**Примеры для POST:**
```http
POST https://s1.detmir.ru/v1/record/itsm_incident/175187110104179739?form_id=&form_view=Default&open_first_rel_list=0&is_service_portal=0
```
```http
POST https://s1.detmir.ru/v1/record/itsm_incident/175187110104179739?form_id=&form_view=Default&open_first_rel_list=0&is_service_portal=0
```
**Примеры для PUT:**
```http
PUT https://s1.detmir.ru/v1/record/itsm_incident?form_id=&form_view=Default&open_first_rel_list=0&is_service_portal=0
```
```http
PUT https://s1.detmir.ru/v1/record/itsm_incident?form_id=&form_view=Default&open_first_rel_list=0&is_service_portal=0
```
```http
PUT https://s1.detmir.ru/v1/record/itsm_incident?form_id=&form_view=Default&open_first_rel_list=0&is_service_portal=0
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/record/itsm_incident/:number`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/record/itsm_incident/{id}`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/record/itsm_incident/175187110104179739`

**Методы:** GET, POST

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/record/itsm_incident/175187110104179739?open_first_rel_list=0
```
```http
GET https://s1.detmir.ru/v1/record/itsm_incident/175187110104179739?open_first_rel_list=0
```
**Примеры для POST:**
```http
POST https://s1.detmir.ru/v1/record/itsm_incident/175187110104179739?form_id=&form_view=Default&open_first_rel_list=0&is_service_portal=0
```
```http
POST https://s1.detmir.ru/v1/record/itsm_incident/175187110104179739?form_id=&form_view=Default&open_first_rel_list=0&is_service_portal=0
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/record/itsm_incident/175189583005294314`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/record/itsm_incident/175189583005294314?open_first_rel_list=0
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/record/itsm_inquiry/{id}`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/record/itsm_inquiry/169996466508313434`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/record/itsm_inquiry/169996466508313434?open_first_rel_list=0
```
```http
GET https://s1.detmir.ru/v1/record/itsm_inquiry/169996466508313434?open_first_rel_list=0
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/record/itsm_problem`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/record/itsm_request`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/record/itsm_request/175187130508735062?open_first_rel_list=0
```
```http
GET https://s1.detmir.ru/v1/record/itsm_request/175187130508735062?open_first_rel_list=0
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/record/itsm_request/{id}`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/record/itsm_request/175187130508735062`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/record/itsm_request/175187130508735062?open_first_rel_list=0
```
```http
GET https://s1.detmir.ru/v1/record/itsm_request/175187130508735062?open_first_rel_list=0
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/record/itsm_task`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/record/org_company`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/record/org_unit/169514556302645490`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/record/org_unit/169514556302645490?open_first_rel_list=0
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/record/org_unit/169514556302645572`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/record/org_unit/169514556302645572?open_first_rel_list=0
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/record/sys_report_chart_bar/175146692900092510`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/record/sys_report_chart_bar/175146692900092510?open_first_rel_list=0
```
```http
GET https://s1.detmir.ru/v1/record/sys_report_chart_bar/175146692900092510?open_first_rel_list=0
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/record/user`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/reference-qualifier`

**Методы:** POST

**Примеры для POST:**
```http
POST https://s1.detmir.ru/v1/reference-qualifier/dynamic/itsm_incident/155931135900001080
```
```http
POST https://s1.detmir.ru/v1/reference-qualifier/dynamic/itsm_incident/156943341303994936
```
```http
POST https://s1.detmir.ru/v1/reference-qualifier/dynamic/itsm_incident/158088653215716107
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/reference-qualifier/dynamic/itsm_incident/155931135900001080`

**Методы:** POST

**Примеры для POST:**
```http
POST https://s1.detmir.ru/v1/reference-qualifier/dynamic/itsm_incident/155931135900001080
```
```http
POST https://s1.detmir.ru/v1/reference-qualifier/dynamic/itsm_incident/155931135900001080
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/reference-qualifier/dynamic/itsm_incident/156943341303994936`

**Методы:** POST

**Примеры для POST:**
```http
POST https://s1.detmir.ru/v1/reference-qualifier/dynamic/itsm_incident/156943341303994936
```
```http
POST https://s1.detmir.ru/v1/reference-qualifier/dynamic/itsm_incident/156943341303994936
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/reference-qualifier/dynamic/itsm_incident/158088653215716107`

**Методы:** POST

**Примеры для POST:**
```http
POST https://s1.detmir.ru/v1/reference-qualifier/dynamic/itsm_incident/158088653215716107
```
```http
POST https://s1.detmir.ru/v1/reference-qualifier/dynamic/itsm_incident/158088653215716107/175187110104179739
```
```http
POST https://s1.detmir.ru/v1/reference-qualifier/dynamic/itsm_incident/158088653215716107
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/reference-qualifier/dynamic/itsm_incident/158088653215716107/175187110104179739`

**Методы:** POST

**Примеры для POST:**
```http
POST https://s1.detmir.ru/v1/reference-qualifier/dynamic/itsm_incident/158088653215716107/175187110104179739
```
```http
POST https://s1.detmir.ru/v1/reference-qualifier/dynamic/itsm_incident/158088653215716107/175187110104179739
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/reference-qualifier/dynamic/itsm_incident/168897322508264413/175187110104179739`

**Методы:** POST

**Примеры для POST:**
```http
POST https://s1.detmir.ru/v1/reference-qualifier/dynamic/itsm_incident/168897322508264413/175187110104179739
```
```http
POST https://s1.detmir.ru/v1/reference-qualifier/dynamic/itsm_incident/168897322508264413/175187110104179739
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/reference-qualifier/dynamic/itsm_incident/169217089303685364/175187110104179739`

**Методы:** POST

**Примеры для POST:**
```http
POST https://s1.detmir.ru/v1/reference-qualifier/dynamic/itsm_incident/169217089303685364/175187110104179739
```
```http
POST https://s1.detmir.ru/v1/reference-qualifier/dynamic/itsm_incident/169217089303685364/175187110104179739
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/reference/`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/reference/:table`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/reference/{table}`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/reference/employee`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/reference/itsm_change`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/reference/itsm_incident`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/reference/itsm_problem`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/reference/itsm_request`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/reference/itsm_task`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/reference/itsm_task_status`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/reference/table`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/reference/user`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/regions/cities`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/report`

**Методы:** GET, POST

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/report/get-report/170834579901941700?group_id=null&condition=
```
```http
GET https://s1.detmir.ru/v1/report/get-report/170841561107958785?group_id=null&condition=
```
```http
GET https://s1.detmir.ru/v1/report/get-report/170841572808609427?group_id=null&condition=
```
**Примеры для POST:**
```http
POST https://s1.detmir.ru/v1/report/get-report
```
```http
POST https://s1.detmir.ru/v1/report/get-report
```
```http
POST https://s1.detmir.ru/v1/report/get-report
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/report/get-report`

**Методы:** GET, POST

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/report/get-report/170834579901941700?group_id=null&condition=
```
```http
GET https://s1.detmir.ru/v1/report/get-report/170841561107958785?group_id=null&condition=
```
```http
GET https://s1.detmir.ru/v1/report/get-report/170841572808609427?group_id=null&condition=
```
**Примеры для POST:**
```http
POST https://s1.detmir.ru/v1/report/get-report
```
```http
POST https://s1.detmir.ru/v1/report/get-report
```
```http
POST https://s1.detmir.ru/v1/report/get-report
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/report/get-report/`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/report/get-report/170834579901941700?group_id=null&condition=
```
```http
GET https://s1.detmir.ru/v1/report/get-report/170841561107958785?group_id=null&condition=
```
```http
GET https://s1.detmir.ru/v1/report/get-report/170841572808609427?group_id=null&condition=
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/report/get-report/:id`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/report/get-report/{id}`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/report/get-report/170834579901941700`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/report/get-report/170834579901941700?group_id=null&condition=
```
```http
GET https://s1.detmir.ru/v1/report/get-report/170834579901941700?group_id=null&condition=
```
```http
GET https://s1.detmir.ru/v1/report/get-report/170834579901941700?group_id=null&condition=
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/report/get-report/170841561107958785`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/report/get-report/170841561107958785?group_id=null&condition=
```
```http
GET https://s1.detmir.ru/v1/report/get-report/170841561107958785?group_id=null&condition=
```
```http
GET https://s1.detmir.ru/v1/report/get-report/170841561107958785?group_id=null&condition=
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/report/get-report/170841572808609427`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/report/get-report/170841572808609427?group_id=null&condition=
```
```http
GET https://s1.detmir.ru/v1/report/get-report/170841572808609427?group_id=null&condition=
```
```http
GET https://s1.detmir.ru/v1/report/get-report/170841572808609427?group_id=null&condition=
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/report/get-report/170841799203902954`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/report/get-report/170841799203902954?group_id=null&condition=
```
```http
GET https://s1.detmir.ru/v1/report/get-report/170841799203902954?group_id=null&condition=
```
```http
GET https://s1.detmir.ru/v1/report/get-report/170841799203902954?group_id=null&condition=
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/report/get-report/170841847801609427`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/report/get-report/170841847801609427?group_id=null&condition=
```
```http
GET https://s1.detmir.ru/v1/report/get-report/170841847801609427?group_id=null&condition=
```
```http
GET https://s1.detmir.ru/v1/report/get-report/170841847801609427?group_id=null&condition=
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/report/get-report/170843407803274655`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/report/get-report/170843407803274655?group_id=null&condition=
```
```http
GET https://s1.detmir.ru/v1/report/get-report/170843407803274655?group_id=null&condition=
```
```http
GET https://s1.detmir.ru/v1/report/get-report/170843407803274655?group_id=null&condition=
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/report/get-report/171342548903705123`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/report/get-report/171342548903705123?group_id=null&condition=
```
```http
GET https://s1.detmir.ru/v1/report/get-report/171342548903705123?group_id=null&condition=
```
```http
GET https://s1.detmir.ru/v1/report/get-report/171342548903705123?group_id=null&condition=
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/report/get-report/171464610800898934`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/report/get-report/171464610800898934?group_id=null&condition=
```
```http
GET https://s1.detmir.ru/v1/report/get-report/171464610800898934?group_id=null&condition=
```
```http
GET https://s1.detmir.ru/v1/report/get-report/171464610800898934?group_id=null&condition=
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/report/get-report/171501345900104492`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/report/get-report/171501345900104492?group_id=null&condition=
```
```http
GET https://s1.detmir.ru/v1/report/get-report/171501345900104492?group_id=null&condition=
```
```http
GET https://s1.detmir.ru/v1/report/get-report/171501345900104492?group_id=null&condition=
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/report/get-report/171630206307159980`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/report/get-report/171630206307159980?group_id=null&condition=
```
```http
GET https://s1.detmir.ru/v1/report/get-report/171630206307159980?group_id=null&condition=
```
```http
GET https://s1.detmir.ru/v1/report/get-report/171630206307159980?group_id=null&condition=
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/report/get-report/171878777205052005`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/report/get-report/171878777205052005?group_id=null&condition=
```
```http
GET https://s1.detmir.ru/v1/report/get-report/171878777205052005?group_id=null&condition=
```
```http
GET https://s1.detmir.ru/v1/report/get-report/171878777205052005?group_id=null&condition=
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/report/get-report/171879096208103990`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/report/get-report/171879096208103990?group_id=null&condition=
```
```http
GET https://s1.detmir.ru/v1/report/get-report/171879096208103990?group_id=null&condition=
```
```http
GET https://s1.detmir.ru/v1/report/get-report/171879096208103990?group_id=null&condition=
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/report/get-report/172052663303282202`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/report/get-report/172052663303282202?group_id=null&condition=
```
```http
GET https://s1.detmir.ru/v1/report/get-report/172052663303282202?group_id=null&condition=
```
```http
GET https://s1.detmir.ru/v1/report/get-report/172052663303282202?group_id=null&condition=
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/report/get-report/172978440108816817`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/report/get-report/172978440108816817?group_id=null&condition=
```
```http
GET https://s1.detmir.ru/v1/report/get-report/172978440108816817?group_id=null&condition=
```
```http
GET https://s1.detmir.ru/v1/report/get-report/172978440108816817?group_id=null&condition=
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/report/get-report/get-report`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/report/get-types`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/request`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/requests`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/role/list`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/search`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/search/groups?
```
```http
GET https://s1.detmir.ru/v1/search?query=175187130508735062&page=0
```
```http
GET https://s1.detmir.ru/v1/search?query=175187130508735062&ts_table_id=157018697215257037&page=0&per_page=10
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/search/employee`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/search/groups`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/search/groups?
```
```http
GET https://s1.detmir.ru/v1/search/groups?
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/search/user`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/selection/list`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/seo/declarations`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/service_catalog/items`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/service_request`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/service_request/:id`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/setting`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/setting/get
```
```http
GET https://s1.detmir.ru/v1/setting/get
```
```http
GET https://s1.detmir.ru/v1/setting/get
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/setting/`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/setting/get
```
```http
GET https://s1.detmir.ru/v1/setting/get
```
```http
GET https://s1.detmir.ru/v1/setting/get
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/setting/get`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/setting/get
```
```http
GET https://s1.detmir.ru/v1/setting/get
```
```http
GET https://s1.detmir.ru/v1/setting/get
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/spec/q-spec`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/sso/login`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/suggestions`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/switch-related-list`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/switch-related-list/dashboard/174902718606389077?related_list_element_id=158159261813820330&form_id=158151605519579284&per_page=50&page=1
```
```http
GET https://s1.detmir.ru/v1/switch-related-list/employee/169764896307908353?related_list_element_id=159367884816790187&form_id=156708201007645905&per_page=50&page=1
```
```http
GET https://s1.detmir.ru/v1/switch-related-list/itsm_incident/175187110104179739?related_list_element_id=170963865100429871&form_id=156950677316101176&per_page=50&page=1
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/switch-related-list/`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/switch-related-list/dashboard/174902718606389077?related_list_element_id=158159261813820330&form_id=158151605519579284&per_page=50&page=1
```
```http
GET https://s1.detmir.ru/v1/switch-related-list/employee/169764896307908353?related_list_element_id=159367884816790187&form_id=156708201007645905&per_page=50&page=1
```
```http
GET https://s1.detmir.ru/v1/switch-related-list/itsm_incident/175187110104179739?related_list_element_id=170963865100429871&form_id=156950677316101176&per_page=50&page=1
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/switch-related-list/{table}/{id}`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/switch-related-list/dashboard/174902718606389077`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/switch-related-list/dashboard/174902718606389077?related_list_element_id=158159261813820330&form_id=158151605519579284&per_page=50&page=1
```
```http
GET https://s1.detmir.ru/v1/switch-related-list/dashboard/174902718606389077?related_list_element_id=158159261813820330&form_id=158151605519579284&per_page=50&page=1
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/switch-related-list/employee/169764896307908353`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/switch-related-list/employee/169764896307908353?related_list_element_id=159367884816790187&form_id=156708201007645905&per_page=50&page=1
```
```http
GET https://s1.detmir.ru/v1/switch-related-list/employee/169764896307908353?related_list_element_id=159367884816790187&form_id=156708201007645905&per_page=50&page=1
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/switch-related-list/itsm_incident/175187110104179739`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/switch-related-list/itsm_incident/175187110104179739?related_list_element_id=170963865100429871&form_id=156950677316101176&per_page=50&page=1
```
```http
GET https://s1.detmir.ru/v1/switch-related-list/itsm_incident/175187110104179739?related_list_element_id=170963865100429871&form_id=156950677316101176&per_page=50&page=1
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/switch-related-list/itsm_incident/175189583005294314`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/switch-related-list/itsm_incident/175189583005294314?related_list_element_id=170963865100429871&form_id=156950677316101176&per_page=50&page=1
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/switch-related-list/itsm_inquiry/169996466508313434`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/switch-related-list/itsm_inquiry/169996466508313434?related_list_element_id=165899577616594354&form_id=156993217313218998&per_page=50&page=1
```
```http
GET https://s1.detmir.ru/v1/switch-related-list/itsm_inquiry/169996466508313434?related_list_element_id=165899577616594354&form_id=156993217313218998&per_page=50&page=1
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/switch-related-list/itsm_request/175187130508735062`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/switch-related-list/itsm_request/175187130508735062?related_list_element_id=159136394218470331&form_id=156993264115136526&per_page=50&page=1
```
```http
GET https://s1.detmir.ru/v1/switch-related-list/itsm_request/175187130508735062?related_list_element_id=159136394218470331&form_id=156993264115136526&per_page=50&page=1
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/switch-related-list/org_unit/169514556302645490`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/switch-related-list/org_unit/169514556302645490?related_list_element_id=156976836211117008&form_id=156580860501927650&per_page=50&page=1
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/switch-related-list/org_unit/169514556302645572`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/switch-related-list/org_unit/169514556302645572?related_list_element_id=156976836211117008&form_id=156580860501927650&per_page=50&page=1
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/switch-related-list/sys_group/`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/switch-related-list/sys_group/{group_id}`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/switch-related-list/sys_group/169635152405524641`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/switch-related-list/sys_group/174652075000270118`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/switch-related-list/sys_report_chart_bar/175146692900092510`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/switch-related-list/sys_report_chart_bar/175146692900092510?related_list_element_id=169840060304529798&form_id=156811387309048807&per_page=50&page=1
```
```http
GET https://s1.detmir.ru/v1/switch-related-list/sys_report_chart_bar/175146692900092510?related_list_element_id=169840060304529798&form_id=156811387309048807&per_page=50&page=1
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/sys_group_member`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/sys-property`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/sys-property/get-branding
```
```http
GET https://s1.detmir.ru/v1/sys-property/get-public-properties
```
```http
GET https://s1.detmir.ru/v1/sys-property/get-branding
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/sys-property/`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/sys-property/get-branding
```
```http
GET https://s1.detmir.ru/v1/sys-property/get-public-properties
```
```http
GET https://s1.detmir.ru/v1/sys-property/get-branding
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/sys-property/get-branding`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/sys-property/get-branding
```
```http
GET https://s1.detmir.ru/v1/sys-property/get-branding
```
```http
GET https://s1.detmir.ru/v1/sys-property/get-branding
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/sys-property/get-public-properties`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/sys-property/get-public-properties
```
```http
GET https://s1.detmir.ru/v1/sys-property/get-public-properties
```
```http
GET https://s1.detmir.ru/v1/sys-property/get-public-properties
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/table`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/table/`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/table/{table_name}`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/table/{table}`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/table/{table}/{id}`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/table/{table}/1`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/table/{table}/2`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/table/asset`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/table/employee`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/table/employee/{id}`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/table/itsm_category`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/table/itsm_change`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/table/itsm_change/{id}`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/table/itsm_incident`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/table/itsm_incident_state`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/table/itsm_incident/{id}`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/table/itsm_priority`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/table/itsm_problem`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/table/itsm_problem/{id}`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/table/itsm_request`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/table/itsm_request/{id}`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/table/itsm_task`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/table/itsm_task/{id}`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/table/itsm_task/123`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/table/sys_group_member`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/table/table`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/table/user`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/table/user/{id}`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/task`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/task/:id`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/tmp/order/6517000182/statuses`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/tools/run_sql_query`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ui-action`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/ui-action/list-actions/dashboard?condition=
```
```http
GET https://s1.detmir.ru/v1/ui-action/list-actions/itsm_incident?condition=(assigned_userDYNAMIC156957117519820256%5EstateNOT%20IN10%407)
```
```http
GET https://s1.detmir.ru/v1/ui-action/list-actions/itsm_incident?condition=(assignment_groupDYNAMIC159679003220074662%5EstateNOT%20IN7%4010)
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ui-action/`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/ui-action/list-actions/dashboard?condition=
```
```http
GET https://s1.detmir.ru/v1/ui-action/list-actions/itsm_incident?condition=(assigned_userDYNAMIC156957117519820256%5EstateNOT%20IN10%407)
```
```http
GET https://s1.detmir.ru/v1/ui-action/list-actions/itsm_incident?condition=(assignment_groupDYNAMIC159679003220074662%5EstateNOT%20IN7%4010)
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ui-action/execute/`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ui-action/execute/{table}`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ui-action/execute/employee`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ui-action/execute/itsm_incident`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ui-action/execute/itsm_task`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ui-action/execute/user`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ui-action/list`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/ui-action/list-actions/dashboard?condition=
```
```http
GET https://s1.detmir.ru/v1/ui-action/list-actions/itsm_incident?condition=(assigned_userDYNAMIC156957117519820256%5EstateNOT%20IN10%407)
```
```http
GET https://s1.detmir.ru/v1/ui-action/list-actions/itsm_incident?condition=(assignment_groupDYNAMIC159679003220074662%5EstateNOT%20IN7%4010)
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ui-action/list-actions/:table`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ui-action/list-actions/{table}`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ui-action/list-actions/dashboard`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/ui-action/list-actions/dashboard?condition=
```
```http
GET https://s1.detmir.ru/v1/ui-action/list-actions/dashboard?condition=
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ui-action/list-actions/employee`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ui-action/list-actions/itsm_change`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ui-action/list-actions/itsm_incident`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/ui-action/list-actions/itsm_incident?condition=(assigned_userDYNAMIC156957117519820256%5EstateNOT%20IN10%407)
```
```http
GET https://s1.detmir.ru/v1/ui-action/list-actions/itsm_incident?condition=(assignment_groupDYNAMIC159679003220074662%5EstateNOT%20IN7%4010)
```
```http
GET https://s1.detmir.ru/v1/ui-action/list-actions/itsm_incident?condition=(state!%3D10)
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ui-action/list-actions/itsm_inquiry`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/ui-action/list-actions/itsm_inquiry?condition=(number%3D9-00002527)
```
```http
GET https://s1.detmir.ru/v1/ui-action/list-actions/itsm_inquiry?condition=(numberLIKE9-00002527)
```
```http
GET https://s1.detmir.ru/v1/ui-action/list-actions/itsm_inquiry?condition=(numberSTARTSWITH9-%5E(related_ticketLIKE7-%20%5EORrelated_ticketLIKE8-))
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ui-action/list-actions/itsm_problem`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/ui-action/list-actions/itsm_problem?condition=(assigned_userDYNAMIC156957117519820256%5EstateNOT%20IN10%407)
```
```http
GET https://s1.detmir.ru/v1/ui-action/list-actions/itsm_problem?condition=(assignment_groupDYNAMIC159679003220074662%5EstateNOT%20IN7%4010)
```
```http
GET https://s1.detmir.ru/v1/ui-action/list-actions/itsm_problem?condition=(state!%3D10)
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ui-action/list-actions/itsm_request`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/ui-action/list-actions/itsm_request?condition=(assigned_userDYNAMIC156957117519820256%5EstateNOT%20IN7%4010)
```
```http
GET https://s1.detmir.ru/v1/ui-action/list-actions/itsm_request?condition=(assignment_groupDYNAMIC159679003220074662%5EstateNOT%20IN10%407)
```
```http
GET https://s1.detmir.ru/v1/ui-action/list-actions/itsm_request?condition=(state!%3D10)
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ui-action/list-actions/itsm_task`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/ui-action/list-actions/itsm_task?condition=((stateNOT%20IN7%4010%5Eassignment_group%3D169635152405524641))
```
```http
GET https://s1.detmir.ru/v1/ui-action/list-actions/itsm_task?condition=(assigned_userDYNAMIC166065669613487583%5EstateNOT%20IN7%4010)
```
```http
GET https://s1.detmir.ru/v1/ui-action/list-actions/itsm_task?condition=(callerDYNAMIC156957117519820256%5EstateNOT%20IN10%407)%5EORDERBYsys_created_at
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ui-action/list-actions/org_company`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ui-action/list-actions/sys_approval`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/ui-action/list-actions/sys_approval?condition=(approver_idDYNAMIC166065662210008466)%5EORDERBYDESCsys_created_at
```
```http
GET https://s1.detmir.ru/v1/ui-action/list-actions/sys_approval?condition=(approver_idDYNAMIC166065662210008466)%5EORDERBYDESCsys_created_at
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ui-action/list-actions/sys_delegation`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/ui-action/list-actions/sys_delegation?condition=(delegator_idDYNAMIC156957141416138823)%5EGROUPBYDESCstate&view=My%20Delegates
```
```http
GET https://s1.detmir.ru/v1/ui-action/list-actions/sys_delegation?condition=(delegator_idDYNAMIC156957141416138823)%5EGROUPBYDESCstate&view=My%20Delegates
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ui-action/list-actions/sys_personal_schedule_entry`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/ui-action/list-actions/sys_personal_schedule_entry?condition=(employeeDYNAMIC156957141416138823)
```
```http
GET https://s1.detmir.ru/v1/ui-action/list-actions/sys_personal_schedule_entry?condition=(employeeDYNAMIC156957141416138823)
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ui-action/list-actions/sys_product`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/ui-action/list-actions/sys_product?condition=
```
```http
GET https://s1.detmir.ru/v1/ui-action/list-actions/sys_product?condition=
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ui-action/list-actions/sys_report`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/ui-action/list-actions/sys_report?condition=
```
```http
GET https://s1.detmir.ru/v1/ui-action/list-actions/sys_report?condition=
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ui-action/list-actions/user`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ui-action/record-actions/`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/ui-action/record-actions/dashboard/174902718606389077?
```
```http
GET https://s1.detmir.ru/v1/ui-action/record-actions/dashboard?
```
```http
GET https://s1.detmir.ru/v1/ui-action/record-actions/employee/169764896307908353?
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ui-action/record-actions/{table}/{id}`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ui-action/record-actions/dashboard`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/ui-action/record-actions/dashboard/174902718606389077?
```
```http
GET https://s1.detmir.ru/v1/ui-action/record-actions/dashboard?
```
```http
GET https://s1.detmir.ru/v1/ui-action/record-actions/dashboard/174902718606389077?
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ui-action/record-actions/dashboard/174902718606389077`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/ui-action/record-actions/dashboard/174902718606389077?
```
```http
GET https://s1.detmir.ru/v1/ui-action/record-actions/dashboard/174902718606389077?
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ui-action/record-actions/employee/:id`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ui-action/record-actions/employee/169764896307908353`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/ui-action/record-actions/employee/169764896307908353?
```
```http
GET https://s1.detmir.ru/v1/ui-action/record-actions/employee/169764896307908353?
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ui-action/record-actions/itsm_incident`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/ui-action/record-actions/itsm_incident/175187110104179739?
```
```http
GET https://s1.detmir.ru/v1/ui-action/record-actions/itsm_incident?
```
```http
GET https://s1.detmir.ru/v1/ui-action/record-actions/itsm_incident/175187110104179739?
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ui-action/record-actions/itsm_incident/:number`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ui-action/record-actions/itsm_incident/175187110104179739`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/ui-action/record-actions/itsm_incident/175187110104179739?
```
```http
GET https://s1.detmir.ru/v1/ui-action/record-actions/itsm_incident/175187110104179739?
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ui-action/record-actions/itsm_incident/175189583005294314`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/ui-action/record-actions/itsm_incident/175189583005294314?
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ui-action/record-actions/itsm_inquiry/169996466508313434`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/ui-action/record-actions/itsm_inquiry/169996466508313434?
```
```http
GET https://s1.detmir.ru/v1/ui-action/record-actions/itsm_inquiry/169996466508313434?
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ui-action/record-actions/itsm_request/175187130508735062`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/ui-action/record-actions/itsm_request/175187130508735062?
```
```http
GET https://s1.detmir.ru/v1/ui-action/record-actions/itsm_request/175187130508735062?
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ui-action/record-actions/org_unit/:id`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ui-action/record-actions/org_unit/169514556302645490`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/ui-action/record-actions/org_unit/169514556302645490?
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ui-action/record-actions/org_unit/169514556302645572`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/ui-action/record-actions/org_unit/169514556302645572?
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ui-action/record-actions/sys_report_chart_bar/175146692900092510`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/ui-action/record-actions/sys_report_chart_bar/175146692900092510?
```
```http
GET https://s1.detmir.ru/v1/ui-action/record-actions/sys_report_chart_bar/175146692900092510?
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/ui/configs`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/user`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/user/me
```
```http
GET https://s1.detmir.ru/v1/user/me
```
```http
GET https://s1.detmir.ru/v1/user/me
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/user/`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/user/me
```
```http
GET https://s1.detmir.ru/v1/user/me
```
```http
GET https://s1.detmir.ru/v1/user/me
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/user/current`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/user/me`

**Методы:** GET

**Примеры для GET:**
```http
GET https://s1.detmir.ru/v1/user/me
```
```http
GET https://s1.detmir.ru/v1/user/me
```
```http
GET https://s1.detmir.ru/v1/user/me
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/user/notifications`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/user/profile`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/user/tasks`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/users`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/verify`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/widget`

**Методы:** POST

**Примеры для POST:**
```http
POST https://s1.detmir.ru/v1/widget/run-server-script/170834390501654239
```
```http
POST https://s1.detmir.ru/v1/widget/run-server-script/159308302717568109
```
```http
POST https://s1.detmir.ru/v1/widget/run-server-script/166266449414139721
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/widget/`

**Методы:** POST

**Примеры для POST:**
```http
POST https://s1.detmir.ru/v1/widget/run-server-script/170834390501654239
```
```http
POST https://s1.detmir.ru/v1/widget/run-server-script/159308302717568109
```
```http
POST https://s1.detmir.ru/v1/widget/run-server-script/166266449414139721
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/widget/run-server-script`

**Методы:** POST

**Примеры для POST:**
```http
POST https://s1.detmir.ru/v1/widget/run-server-script/170834390501654239
```
```http
POST https://s1.detmir.ru/v1/widget/run-server-script/159308302717568109
```
```http
POST https://s1.detmir.ru/v1/widget/run-server-script/166266449414139721
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/widget/run-server-script/`

**Методы:** POST

**Примеры для POST:**
```http
POST https://s1.detmir.ru/v1/widget/run-server-script/170834390501654239
```
```http
POST https://s1.detmir.ru/v1/widget/run-server-script/159308302717568109
```
```http
POST https://s1.detmir.ru/v1/widget/run-server-script/166266449414139721
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/widget/run-server-script/:id`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/widget/run-server-script/{id}`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/widget/run-server-script/{script_id}`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/widget/run-server-script/158750129415903979`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/widget/run-server-script/159308302717568109`

**Методы:** POST

**Примеры для POST:**
```http
POST https://s1.detmir.ru/v1/widget/run-server-script/159308302717568109
```
```http
POST https://s1.detmir.ru/v1/widget/run-server-script/159308302717568109
```
```http
POST https://s1.detmir.ru/v1/widget/run-server-script/159308302717568109
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/widget/run-server-script/160767740511016793`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/widget/run-server-script/160767742115787725`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/widget/run-server-script/160767743612372124`

**Методы:** (нет примеров в HAR)

**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/widget/run-server-script/166266449414139721`

**Методы:** POST

**Примеры для POST:**
```http
POST https://s1.detmir.ru/v1/widget/run-server-script/166266449414139721
```
```http
POST https://s1.detmir.ru/v1/widget/run-server-script/166266449414139721
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/widget/run-server-script/169567017005524456`

**Методы:** POST

**Примеры для POST:**
```http
POST https://s1.detmir.ru/v1/widget/run-server-script/169567017005524456
```
```http
POST https://s1.detmir.ru/v1/widget/run-server-script/169567017005524456
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/widget/run-server-script/169567069901311072`

**Методы:** POST

**Примеры для POST:**
```http
POST https://s1.detmir.ru/v1/widget/run-server-script/169567069901311072
```
```http
POST https://s1.detmir.ru/v1/widget/run-server-script/169567069901311072
```
```http
POST https://s1.detmir.ru/v1/widget/run-server-script/169567069901311072
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/widget/run-server-script/169599187806152335`

**Методы:** POST

**Примеры для POST:**
```http
POST https://s1.detmir.ru/v1/widget/run-server-script/169599187806152335
```
```http
POST https://s1.detmir.ru/v1/widget/run-server-script/169599187806152335
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/widget/run-server-script/169624238800424865`

**Методы:** POST

**Примеры для POST:**
```http
POST https://s1.detmir.ru/v1/widget/run-server-script/169624238800424865
```
```http
POST https://s1.detmir.ru/v1/widget/run-server-script/169624238800424865
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/widget/run-server-script/170168378104521063`

**Методы:** POST

**Примеры для POST:**
```http
POST https://s1.detmir.ru/v1/widget/run-server-script/170168378104521063
```
```http
POST https://s1.detmir.ru/v1/widget/run-server-script/170168378104521063
```
```http
POST https://s1.detmir.ru/v1/widget/run-server-script/170168378104521063
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/widget/run-server-script/170169488606655843`

**Методы:** POST

**Примеры для POST:**
```http
POST https://s1.detmir.ru/v1/widget/run-server-script/170169488606655843
```
```http
POST https://s1.detmir.ru/v1/widget/run-server-script/170169488606655843
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/widget/run-server-script/170834390501654239`

**Методы:** POST

**Примеры для POST:**
```http
POST https://s1.detmir.ru/v1/widget/run-server-script/170834390501654239
```
```http
POST https://s1.detmir.ru/v1/widget/run-server-script/170834390501654239
```
```http
POST https://s1.detmir.ru/v1/widget/run-server-script/170834390501654239
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/widget/run-server-script/172743131808414344`

**Методы:** POST

**Примеры для POST:**
```http
POST https://s1.detmir.ru/v1/widget/run-server-script/172743131808414344
```
```http
POST https://s1.detmir.ru/v1/widget/run-server-script/172743131808414344
```
```http
POST https://s1.detmir.ru/v1/widget/run-server-script/172743131808414344
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/widget/run-server-script/172743131808414488`

**Методы:** POST

**Примеры для POST:**
```http
POST https://s1.detmir.ru/v1/widget/run-server-script/172743131808414488
```
```http
POST https://s1.detmir.ru/v1/widget/run-server-script/172743131808414488
```
```http
POST https://s1.detmir.ru/v1/widget/run-server-script/172743131808414488
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/widget/run-server-script/173883031008108125`

**Методы:** POST

**Примеры для POST:**
```http
POST https://s1.detmir.ru/v1/widget/run-server-script/173883031008108125
```
```http
POST https://s1.detmir.ru/v1/widget/run-server-script/173883031008108125
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/widget/run-server-script/173883031008108290`

**Методы:** POST

**Примеры для POST:**
```http
POST https://s1.detmir.ru/v1/widget/run-server-script/173883031008108290
```
```http
POST https://s1.detmir.ru/v1/widget/run-server-script/173883031008108290
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```

---

### `/v1/widget/run-server-script/174027708303704374`

**Методы:** POST

**Примеры для POST:**
```http
POST https://s1.detmir.ru/v1/widget/run-server-script/174027708303704374
```
```http
POST https://s1.detmir.ru/v1/widget/run-server-script/174027708303704374
```
```http
POST https://s1.detmir.ru/v1/widget/run-server-script/174027708303704374
```
**Описание:** _добавьте описание эндпоинта_

**Пример ответа:**
```json
{
  // ...
}
```
