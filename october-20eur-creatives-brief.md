# Октябрь по 20 € — задача на креативы

Школа: Espachicas (академия испанского, https://academiaespachicas.com)
Посадочная: https://academiaespachicas.com/trial (опубликована; кнопки форматов пока не подключены)

---

## 1. Задача

Сделать 3 рекламных креатива под акцию «любой пробный формат за 20 €»:

| # | Креатив | Формат | Роль |
|---|---|---|---|
| 1 | Карусель «Все форматы» | 9 слайдов, 1080×1350 | Объясняет оффер: что входит в каждый формат |
| 2 | Кот-мем «¿En serio?» | 1 картинка, 1080×1350 | Привлекает внимание: «Правда, всё по 20 €?» |
| 3 | Кот-мем «Не могу выбрать» | 1 картинка, 1080×1350 | Показывает боль выбора, ведёт к диагностике |

Подробности оффера идут в тексте поста, на картинках только суть.

### Оффер (все пять пробных форматов за 20 €)

- 🇪🇸 **А1 «С нуля»**: пробная неделя обучения за 20 € вместо 37 €
- 🇪🇸 **А2**: пробное индивидуальное занятие + доступ к доске Miro с материалами и домашними заданиями
- 🇪🇸 **Индивидуальные занятия**: полноценный пробный индивидуальный урок
- 🇪🇸 **Разговорные интенсивы (РИ)**: пробное индивидуальное занятие + рабочая тетрадь интенсива
- 🇪🇸 **«Разговорись»**: неделя безлимитной разговорной практики

### Нужно подтвердить до запуска

- [ ] Срок акции. В черновиках стоит «до 31 октября»
- [ ] Зачёркнутую цену «37 €» показываем только у А1 (у других форматов обычной цены в материалах нет)
- [ ] Куда ведут кнопки на `/trial` (форма, Telegram-бот или оплата) и куда ведёт ссылка в шапке профиля

---

## 2. Мудборд: стиль школы

Референсы взяты с сайта школы и лежат в папке `moodboard/`:

| Файл | Что показывает |
|---|---|
| `moodboard/ref-1-lime-wordmark.jpg` | Лаймовый фон, крупный логотип капсом, мягкие органичные пятна |
| `moodboard/ref-2-lime-script.jpg` | То же + подпись рукописным шрифтом («Диагностика уровня») |
| `moodboard/ref-3-violet-wordmark.png` | Фиолетовый фон, логотип «ЭСПАЧИКАС» |
| `moodboard/ref-4-violet-script-a1.png` | Логотип + лаймовая рукописная подпись «испанский с нуля A1» |
| `moodboard/ref-5-violet-a2.png` | То же для А2 |

### Цвета (сняты с картинок сайта)

| Роль | HEX | Где |
|---|---|---|
| Лайм (основной фон) | `#AFBD70` | Фон обложек, акценты |
| Лайм светлый (пятна) | `#B9C585` | Органичные формы на лаймовом фоне |
| Фиолет (основной фон) | `#5A5981` | Фон обложек, меню сайта |
| Светлый (текст на цвете) | `#F6F6F6` | Логотип, основной текст на фоне |
| Тёмный текст (на светлом) | `#252439` | Если нужен текст на светлой подложке |

Лайм и фиолет чередуем. Белый текст только на фиолете. На лайме белый логотип читается, но мелкий текст на лайме делаем фиолетовым `#454367`.

### Шрифты

| Роль | Шрифт | Как используем |
|---|---|---|
| Заголовки и логотип | **Playfair Display** (Bold/Black), КАПСОМ | Крупный заголовок, цена, название формата |
| Акцент / подпись | Тонкий каллиграфический рукописный шрифт с кириллицей (на сайте это «рукописная» подпись под логотипом) | Одна-две строки на слайд: подзаголовки, «до 31 октября» |
| Основной текст | **Inter** (Regular/Medium) | Описания, мелкий текст |

Playfair Display и Inter подключены в проекте на Тильде. **Точное название рукописного шрифта нужно уточнить** (в проекте он вшит в картинки). Пока подойдёт похожий с кириллицей: Bad Script, Marck Script или Caveat.

### Что берём и что не берём

| Берём | Не берём |
|---|---|
| Плоский чистый фон одним цветом (лайм или фиолет) | Градиенты, тени, объёмные эффекты |
| Крупный логотип/заголовок Playfair капсом | Жирные безличные шрифты без засечек в заголовках |
| Мягкие органичные пятна светлее фона | Геометрические узоры и паттерны на весь фон |
| Рукописная подпись лаймом на фиолете | Много мелкого текста на картинке |
| Много пустого места, воздух | Яркие цвета вне палитры (красный, оранжевый, синий) |
| Плоские простые иллюстрации в палитре школы | Реалистичные фото-стоки, 3D, глянец |
| Испанские мотивы в виде лёгких намёков (веер, керамика, сомбреро у кота) | Туристические клише в лоб (флаг, фламенко-красный) |

Коты — единственное исключение: у них допустим естественный цвет шерсти (рыжий/серый), но фон и аксессуары в палитре школы.

### Важно: сайт и креативы пока в разных стилях

Страницы `/trial` и `/diagnostika` сделаны в похожей палитре (фиолет + лайм), но шрифт там Manrope + Georgia, а у логотипа школы Playfair Display. Креативы делаем по шрифтам логотипа (Playfair + рукописный + Inter). При желании шрифты на `/trial` можно выровнять отдельно.

---

## 3. Шаблон слайда (для сборки в Canva/Figma)

- Размер: **1080 × 1350 px** (4:5)
- Поля: по 80 px со всех сторон. Важное не ближе чем в 150 px от нижнего края (там интерфейс соцсети)
- Верх: логотип «ЭСПАЧИКАС» Playfair, мелко (высота ~40 px), белый, по центру или слева
- Центр: заголовок Playfair капсом (60–90 px), строка рукописной подписи лаймом или белым (40–50 px)
- Низ: цена и/или мелкий текст Inter 28–32 px
- Фон: лайм `#AFBD70` или фиолет `#5A5981`, поверх 1–2 светлых органичных пятна (на лайме `#B9C585`, на фиолете чуть светлее фона)
- Иллюстрация (из промптов ниже) на плоском фоне, не перекрывает текст
- Чередование: слайд 1 фиолет, 2 лайм, 3 фиолет и так далее. Слайды форматов 3–7 держим в одной вёрстке

---

## 4. Креатив 1: карусель «Все форматы» (9 слайдов)

| # | Слайд | Заголовок (Playfair, капс) | Подпись (рукописный) | Мелкий текст (Inter) |
|---|---|---|---|---|
| 1 | Обложка | ОКТЯБРЬ ПО 20 € | любой формат Эспачикас | Листай → |
| 2 | Вопрос | НЕ ЗНАЕШЬ, КАКОЙ ФОРМАТ ТВОЙ? | попробуй, а потом выбирай | Пять форматов. Одна цена |
| 3 | А1 «С нуля» | А1 «С НУЛЯ» | неделя обучения | 20 € вместо 37 € |
| 4 | А2 | А2 | индивидуальное занятие | + доска Miro с материалами и домашними заданиями. 20 € |
| 5 | Индивидуальные | ИНДИВИДУАЛЬНЫЕ ЗАНЯТИЯ | пробный урок один на один | Полноценный урок с преподавателем. 20 € |
| 6 | Интенсивы | РАЗГОВОРНЫЕ ИНТЕНСИВЫ | занятие + рабочая тетрадь | Пробное индивидуальное занятие. 20 € |
| 7 | «Разговорись» | «РАЗГОВОРИСЬ» | неделя безлимитной практики | Говори столько, сколько успеешь. 20 € |
| 8 | Диагностика | НЕ УВЕРЕНА, С ЧЕГО НАЧАТЬ? | начни с диагностики | Преподаватель определит уровень и подскажет формат |
| 9 | Призыв | ВЫБИРАЙ И ПРОБУЙ | акция до 31 октября | Ссылка в шапке профиля |

### Подпись к карусели

> Октябрь по 20 € 🇪🇸
> Выбери формат и попробуй, как у нас учат: А1, А2, индивидуальные занятия, разговорные интенсивы и «Разговорись».
> Листай и выбирай. Акция до 31 октября, ссылка в шапке профиля.

---

## 5. Креатив 2: кот «¿En serio?»

- **Идея:** кот в сомбреро с подозрением смотрит на ценник в витрине. Шутка в том, что акция выглядит слишком хорошо, чтобы быть правдой
- **Текст на картинке:** «Любой формат за 20 €? ¿En serio?» (заголовок Playfair, рукописным «¿En serio?»)
- **Логотип:** маленький «ЭСПАЧИКАС» внизу или вверху
- **Фон:** лайм `#AFBD70` или сцена в палитре школы

### Текст поста

> Да, en serio 😼
> Весь октябрь любой пробный формат Эспачикас стоит 20 €:
> 🇪🇸 А1 «С нуля»: неделя обучения (вместо 37 €)
> 🇪🇸 А2: индивидуальное занятие + доска Miro
> 🇪🇸 Индивидуальные занятия: полноценный пробный урок
> 🇪🇸 Разговорные интенсивы: занятие + рабочая тетрадь
> 🇪🇸 «Разговорись»: неделя безлимитной практики
> Акция до 31 октября. Ссылка в шапке профиля.

---

## 6. Креатив 3: кот «Не могу выбрать»

- **Идея:** кот сидит перед пятью одинаковыми мисками и не знает, из какой есть. Миски = форматы обучения
- **Текст на картинке:** «Не знаешь, какой формат выбрать? Попробуй по 20 €»
- **Подписи на мисках** (дорисовываем в редакторе): А1 · А2 · Индивидуально · Интенсив · Разговорись
- **Фон:** фиолет `#5A5981`, текст белый

### Текст поста

> Тот самый момент, когда форматов много, а выбрать надо один 😅
> В октябре не нужно гадать: любой формат Эспачикас можно попробовать за 20 €.
> А если совсем не понятно, с чего начать, запишись на диагностику. Преподаватель определит уровень и подскажет формат.
> Ссылка в шапке профиля. Акция до 31 октября.

---

## 7. Промпты для генерации

Правила для всех:

- Картинки генерируем **без текста**. Надписи добавляем в редакторе (генераторы портят кириллицу)
- Просим **плоский однотонный фон** брендового цвета, чтобы потом проще вырезать или подложить
- Если генератор поддерживает референс стиля, первую удачную картинку используем как референс для остальных (Midjourney: `--sref`, Nano Banana: загрузить как референс)
- Midjourney: в конец добавляем `--ar 4:5 --style raw`

### 7.1. Блок стиля (вставлять в начало каждого промпта)

```
Flat minimal vector illustration, clean shapes, no gradients, no shadows, no texture. Solid flat background in {BACKGROUND}. Soft organic blob shapes in a slightly lighter tint of the background as subtle decoration. Limited palette: soft lime green #AFBD70, muted violet #5A5981, off-white #F6F6F6. Elegant, calm, editorial. Generous empty space in the upper half for text overlay. Vertical 4:5. No text, no letters, no numbers, no logos, no watermark.
```

Вместо `{BACKGROUND}` подставляем `muted violet #5A5981` или `soft lime green #AFBD70` (чередуем по плану слайдов).

### 7.2. Карусель (сцена после блока стиля)

1. **Обложка** (фон фиолет): `one large off-white circle with a smaller lime circle overlapping it, a playful inverted question mark shape and a few small stars floating around, festive October mood, centered composition with empty space for a big headline`
2. **Вопрос** (фон лайм): `a small simple figure seen from behind standing in a corridor facing five doors in different tints of violet and off-white, each door slightly open with soft light, thoughtful mood`
3. **А1 «С нуля»** (фон фиолет): `a small lime green seedling sprouting from a simple off-white pot, a single big leaf, fresh beginning, first step feeling, object placed in the lower third`
4. **А2** (фон лайм): `a short staircase of three rounded steps going up, an open notebook with two small sticky notes on the top step, sense of progress, in violet and off-white shades`
5. **Индивидуальные занятия** (фон фиолет): `two cups of coffee facing each other on a small round table seen from above, a notebook and a pen between them, calm one-on-one conversation mood, lime and off-white objects`
6. **Разговорные интенсивы** (фон лайм): `a stack of three energetic speech bubbles with a small lightning bolt, next to a spiral-bound workbook, dynamic and focused, violet and off-white shapes`
7. **«Разговорись»** (фон фиолет): `a cascade of many overlapping speech bubbles in lime and off-white, with inverted exclamation and question mark shapes, playful chatter mood, bubbles filling the lower half of the frame`
8. **Диагностика** (фон лайм): `a simple compass next to a magnifying glass over a ladder of six rounded steps, calm and clear direction-finding mood, violet and off-white shapes`
9. **Призыв** (фон фиолет): `a ticket stub with a lime circle and a simple arrow pointing right, a small calendar page nearby with one circled date and no numbers, upbeat and inviting, lower third`

Цены, названия форматов и знак «€» добавляем в редакторе.

### 7.3. Кот «¿En serio?»

```
A cute fluffy ginger cat wearing a small sombrero, sitting in front of a simple shop window and giving a deeply suspicious side-eye to a blank round price tag hanging in the window. Flat minimal vector illustration, clean shapes, no gradients, no texture. Solid flat lime green #AFBD70 background with soft lighter organic blob shapes, small touches of muted violet #5A5981 and off-white #F6F6F6 on the window and sombrero. Humorous expressive face, slightly skeptical raised eyebrows. Empty space at the top for text overlay. Vertical 4:5. No text, no letters, no numbers, no logos, no watermark.
```

### 7.4. Кот «Не могу выбрать»

```
A confused grey cat sitting in the center, looking at five identical ceramic bowls in a row on the floor, head slightly tilted, one paw raised in indecision. Flat minimal vector illustration, clean shapes, no gradients, no texture. Solid flat muted violet #5A5981 background with soft lighter organic blob shapes, bowls in lime #AFBD70 and off-white #F6F6F6. Funny, relatable mood. The bowls are blank so labels can be added later. Empty space at the top for text overlay. Vertical 4:5. No text, no letters, no numbers, no logos, no watermark.
```

### 7.5. Запасные коты

- **«Ni idea»:** `a cat in round glasses staring at a laptop with a completely lost face, a coffee mug beside, flat vector, palette lime/violet/off-white, solid flat background, empty space on top, no text`. Для поста про диагностику
- **«¡A hablar!»:** `a cat wearing a sombrero singing and playing a small guitar on a balcony, speech bubbles above, flat vector, palette lime/violet/off-white, solid flat background, empty space on top, no text`. Для «Разговорись» и интенсивов

---

## 8. План работы

1. [ ] Подтвердить срок акции и якорь цены (раздел 1)
2. [ ] Сгенерировать иллюстрации по промптам (раздел 7), по 3–4 варианта на слайд
3. [ ] Собрать шаблон слайда в Canva/Figma по разделу 3 (логотип, шрифты, цвета)
4. [ ] Собрать карусель из 9 слайдов (раздел 4)
5. [ ] Собрать два кота-мема, дорисовать подписи на мисках (разделы 5–6)
6. [ ] Проверить, что на всех креативах один набор цветов и шрифтов
7. [ ] Экспорт: PNG 1080×1350, sRGB
8. [ ] Загрузить с текстами постов, подключить ссылку в шапке профиля
9. [ ] Перед запуском рекламы: подключить кнопки на `/trial` (форма/бот/оплата)

## 9. Чек-лист перед публикацией

- [ ] Цены и срок совпадают на креативах, в тексте поста и на `/trial`
- [ ] На картинках нет случайных искажённых букв от генератора
- [ ] Контраст текста читается с телефона (белый на фиолете, фиолетовый на лайме)
- [ ] Кнопки на `/trial` работают, ссылка в шапке ведёт на `/trial`
