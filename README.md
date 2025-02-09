
## Запуск проекта

Если запускаете проект впервые, нужно выполнить следующие команды

```
yarn

npx prisma generate

yarn dev
```

После запуска сайт доступен локально по адресу [http://localhost:3000](http://localhost:3000).

В дальнейшем запускать нужно одной командой

```
yarn dev
```


## Работа над задачами

- ### Вы получаете таску с определенным номером, допустим ```GRAF-15```. Ваш порядок действий

- ### перейти в ветку мастер

```
git checkout master
```

- ### сделать ```pull```

```
git pull --rebase
```

- ### создать свою ветку для задачи

```
git checkout -b feature/GRAF-15
```

- ### закоммитить и отправить изменения на гитхаб

```
git add .

git commit -m "feat: добавил новую фишку"

git push origin feature/GRAF-15

```
- ### создать PR и отправить на code review
<img width="1277" alt="Снимок экрана 2025-02-09 135535" src="https://github.com/user-attachments/assets/e320c446-0833-4f0f-92f4-6408a419d83d" />


### В title указываем номер задачи, в description небольше описание. 
### В reviewers выбираем slaveRRR
<img width="1251" alt="Снимок экрана 2025-02-09 135843" src="https://github.com/user-attachments/assets/128bd890-f8d5-487a-8dba-289c35df4f83" />


#### Наименование веток
- feature/branch_name - новый функционал.
- fix/branch_name - исправление ошибок/багов.

#### Наименование коммитов аналогично
- feat: "message" - новый функционал.
- fix: "message" - исправление ошибок/багов.


