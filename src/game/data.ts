import type { Look } from '../engine/gfx';

/* ---------------- characters ---------------- */
export const LOOKS: Record<string, Look> = {
  mira: { coat: 0xb01828, coatLen: 0.95, hair: 0x140c0c, hairStyle: 'long', accent: 0xff4fa0, height: 0.96, skin: 0xd8b49c },
  theo: { coat: 0x3a4a2a, coatLen: 0.4, hairStyle: 'hood', accent: 0x5affb0, extra: ['glasses', 'scarf'] },
  orlova: { coat: 0x1c2438, coatLen: 0.9, hair: 0x2a1c14, hairStyle: 'bun', accent: 0x6a8aff, extra: ['tie'] },
  wong: { coat: 0x5a5a5a, coatLen: 0, hairStyle: 'bald', extra: ['apron'], build: 1.15, skin: 0xc8a070 },
  garth: { coat: 0x4a2a1a, coatLen: 0, hairStyle: 'bald', accent: 0xff5a2a, build: 1.3, height: 1.06, extra: ['apron'], skin: 0x8a6048 },
  pixel: { coat: 0x2a1a4a, coatLen: 0.3, hairStyle: 'mohawk', accent: 0xffb040, extra: ['visor'], height: 0.92, build: 0.9 },
  soyka: { coat: 0xb8ccc4, coatLen: 0.85, hair: 0x8a8f96, hairStyle: 'short', accent: 0x5affa0, extra: ['glasses'], skin: 0xb89078 },
  elias: { coat: 0x3a4450, coatLen: 0.3, hair: 0x2a2420, hairStyle: 'short', skin: 0xd8c8c0, accent: 0x55ddff, build: 0.92 },
  agnes: { coat: 0x5a4a5a, coatLen: 0.9, hair: 0xb0b0b0, hairStyle: 'bun', accent: 0xffb040, height: 0.88, extra: ['cane', 'scarf'] },
  krane: { coat: 0xe4e6ec, coatLen: 1, hair: 0xd0d0d8, hairStyle: 'bun', accent: 0x7fd4ff, height: 1.03, build: 0.95, pants: 0x0a0b0e },
  bruno: { coat: 0x20262e, coatLen: 0, hairStyle: 'bald', accent: 0x3ac0ff, build: 1.25, height: 1.04, extra: ['armor', 'visor'] },
  junk: { coat: 0x33301f, coatLen: 0.5, hairStyle: 'hat', accent: 0x55ddff },
  cook: { coat: 0x4a2222, coatLen: 0, hairStyle: 'short', extra: ['apron'], build: 1.1 },
  tenant: { coat: 0x26302a, coatLen: 0.6, hairStyle: 'hood', accent: 0xff7a3a },
};

export interface NpcMeta { name: string; role: string; bio: [string | null, string][]; voice: number; }
/** bio lines: [flag required | null, text] — dossier grows as you learn */
export const NPCS: Record<string, NpcMeta> = {
  mira: { name: 'Мира Вейн', role: 'Клиентка', voice: 520, bio: [[null, 'Наняла меня искать брата. Красный плащ, упрямый подбородок, 400 кредитов аванса.'], ['mira_child2', 'Детство пересказывает слово в слово — как заученный текст.'], ['mira_confessed_gap', 'Не помнит ночь на 14-е: проснулась одетой, с грязью на ботинках.'], ['d_mira_m12', 'Субъект М-12. Единственная выжившая на Марлоу-стрит. «Сестра» — легенда прикрытия.']] },
  elias: { name: 'Элиас Вейн', role: 'Пропавший', voice: 300, bio: [[null, 'Мнемо-архитектор HYPERION, Лаб-7. Исчез в ночь на 14 ноября.'], ['c_mail_veil', 'Отказался уничтожать «оригиналы» перед запуском проекта «Вуаль».'], ['mem_lab7_seen', 'Залил архив в собственную кору. Без охлаждения проживёт считаные дни.'], ['met_elias', 'Шесть лет был «братом» женщине, чью память сам переписал. По моей просьбе.']] },
  agnes: { name: 'Агнес Вольф', role: 'Соседка, кв. 7A', voice: 610, bio: [[null, 'Бывшая учительница. Видит всё, что происходит на этаже. Или думает, что видит.'], ['agnes_testified', 'Утверждает: Элиас ушёл в 23:40 с женщиной в красном плаще.'], ['agnes_cleaners_talk', 'К ней приходили «двое в сером» — «калибровать бэкап». После болела голова.']] },
  garth: { name: 'Гарт «Ржавый»', role: 'Бармен, «Последний байт»', voice: 180, bio: [[null, 'Ржавый протез, тяжёлый взгляд. Знает на ярусе всех. Сойку в обиду не даст.'], ['q_garth', 'Продал воспоминание о дне рождения дочери, чтобы оплатить протез.']] },
  pixel: { name: 'Пиксель', role: 'Торговец памятью', voice: 760, bio: [[null, 'Продаёт чужие жизни по прейскуранту. Трус, но память у него «хорошая — чужая, но хорошая».']] },
  soyka: { name: 'Док Сойка', role: 'Подпольный хирург', voice: 420, bio: [[null, 'Лечит тех, кого наверху не считают людьми. Никому не верит — и правильно.'], ['c_coolant', 'Третий день скупает весь нейрохладагент на ярусе.']] },
  orlova: { name: 'Инспектор Лена Орлова', role: 'VCPD, бывшая напарница', voice: 380, bio: [[null, 'Мы вместе вели Марлоу-стрит. Она помнит обо мне больше, чем я сам.'], ['orlova_marlow_react', 'Побледнела, когда я упомянул Марлоу. Спросила: «Ты помнишь?»'], ['d_orlova', 'Держала Элиасу лифт в ночь кражи. Она на его стороне — или на своей.']] },
  theo: { name: 'Тео Замбрано', role: 'Журналист, «Свободная частота»', voice: 460, bio: [[null, 'Пиратский эфир на четыре района. Шесть лет копает Марлоу-стрит. Спит на крыше.']] },
  krane: { name: 'Августа Крейн', role: 'Директор мнемо-архитектуры HYPERION', voice: 340, bio: [[null, 'Называет массовое стирание памяти «анестезией». Кажется, верит в это.'], ['krane_told_noah', 'Говорит, что я подписал согласие на коррекцию добровольно. «Выдохнул с облегчением».']] },
  bruno: { name: 'Бруно Хейл', role: 'Охрана HYPERION', voice: 230, bio: [[null, 'Проходная комплекса. Дочь ждёт операции.'], ['know_bruno', 'Это он продал Пикселю воспоминание о Лаб-7.']] },
  noah: { name: 'Ной Каррен', role: 'Я', voice: 250, bio: [[null, 'Частный детектив. Бывший следователь отдела мнемо-преступлений.'], ['c_marlow_file', 'В деле Марлоу значусь как субъект К-01: «коррекция согласована добровольно».']] },
};

export const BARKS: Record<string, { name: string; lines: string[] }> = {
  wong: { name: 'Вонг', lines: ['Лапша — три кредита. Память о вкусе лапши — тридцать. Мир сошёл с ума, бери лапшу.', 'Тот в капюшоне сидит тут каждую ночь. Платит. Пишет что-то. Хороший клиент.', 'Дождь четвёртый день. Говорят, это HYPERION охлаждает серверы.'] },
  junk: { name: 'Торговец', lines: ['Руки, глаза, печень на кремнии. Всё снято с добровольцев. Ну, почти.', 'Ищешь Сойку? Зелёный крест. Только она не любит, когда ищут.', 'Память не беру. Этим Пиксель промышляет, тьфу.'] },
  cook: { name: 'Повар', lines: ['Не спрашивай, из чего. Спрашивай, сколько.', 'Наверху дождь? Тут всегда капает. Привыкаешь.', 'Вчера серые ходили по ярусу. Спрашивали про какого-то инженера.'] },
  tenant: { name: 'Жилец', lines: ['Третий месяц плачу за квартиру воспоминаниями. Школу уже не помню. Зато крыша есть.', 'Семь-бэ? Тихий мужик. К нему баба ходила по воскресеньям. Сестра, говорил.', 'Старуха Вольф всё про всех знает. Только последнее время путается.'] },
  holo: { name: 'Голо-администратор', lines: ['Добро пожаловать в HYPERION. Ваш визит будет записан. И, при необходимости, скорректирован.', 'Лаборатории — по пропускам. Дирекция — по приглашению. Забвение — по тарифу.', 'Улыбнитесь. Мы запомним вас счастливым.'] },
};

/* ---------------- items ---------------- */
export interface ItemDef { name: string; desc: string; icon: 'doc' | 'shard' | 'key' | 'tool' | 'badge' | 'vial' | 'photo' | 'core'; use?: string; }
export const ITEMS: Record<string, ItemDef> = {
  i_neuro: { name: 'Портативный нейролинк', desc: 'Потёртый обруч следователя. Позволяет погружаться в записанные воспоминания с любого шарда.', icon: 'tool' },
  i_key: { name: 'Ключ-карта, кв. 7B', desc: 'Квартира Элиаса Вейна. Блок «Тессера», корпус C, этаж 7.', icon: 'key' },
  i_photo: { name: 'Фото Миры и Элиаса', desc: 'Двое на мостках у озера. Он смеётся. На обороте штамп печати: 05.11.2091 — девять дней назад. Для «детского» снимка бумага слишком свежая.', icon: 'photo' },
  i_badge: { name: 'Старый жетон VCPD', desc: 'Отдел мнемо-преступлений, №4471. Недействителен шесть лет. Но блестит как настоящий.', icon: 'badge' },
  i_pass: { name: 'Пропуск HYPERION', desc: 'Вейн Э., уровень 2, Лаб-7. Аннулирован, но чип ещё отвечает считывателю.', icon: 'key' },
  i_shard_agnes: { name: 'Шард: вечер Агнес Вольф', desc: 'Страховой бэкап памяти за 13.11.2091. Используйте, чтобы погрузиться.', icon: 'shard', use: 'dive:mem_agnes' },
  i_shard_lab7: { name: 'Шард: «Лаб-7, первые руки»', desc: 'Куплено у Пикселя. Чьё-то воспоминание о ночи на 14-е. Используйте, чтобы погрузиться.', icon: 'shard', use: 'dive:mem_lab7' },
  i_shard_garth: { name: 'Шард: день рождения Лин', desc: 'Семь свечей. Одна не задута. Это не ваше.', icon: 'shard' },
  i_coolant: { name: 'Нейрохладагент ×6', desc: 'Ампулы для охлаждения перегруженных мнемо-имплантов. Суточная доза для очень горячей головы.', icon: 'vial' },
  i_decryptor: { name: 'Одноразовый дешифратор', desc: 'Вскрывает две позиции кода при взломе. Сгорает после использования.', icon: 'tool' },
  i_archive: { name: 'Архив «ОРИГИНАЛЫ»', desc: '31 подлинная смерть, память выжившей и одна добровольная коррекция. Влажный на ощупь. Тёплый.', icon: 'core' },
  i_shard_noah: { name: 'Шард: Н. Каррен — оригинал', desc: 'Марлоу-стрит, 02.03.2085. Ваша собственная память, которую вы просили стереть. Используйте, чтобы погрузиться.', icon: 'shard', use: 'dive:mem_noah' },
};

/* ---------------- board entities (clues, people, places, events) ---------------- */
export interface Ent { type: 'person' | 'evidence' | 'place' | 'event'; title: string; text: string; }
export const ENTS: Record<string, Ent> = {
  p_mira: { type: 'person', title: 'Мира Вейн', text: 'Клиентка. Называет себя сестрой Элиаса.' },
  p_elias: { type: 'person', title: 'Элиас Вейн', text: 'Пропавший мнемо-архитектор HYPERION.' },
  p_agnes: { type: 'person', title: 'Агнес Вольф', text: 'Соседка Элиаса по этажу.' },
  p_garth: { type: 'person', title: 'Гарт «Ржавый»', text: 'Бармен на Нижнем ярусе.' },
  p_pixel: { type: 'person', title: 'Пиксель', text: 'Торговец воспоминаниями.' },
  p_soyka: { type: 'person', title: 'Док Сойка', text: 'Подпольный хирург. Клиника с зелёным крестом.' },
  p_orlova: { type: 'person', title: 'Лена Орлова', text: 'Инспектор VCPD. Моя бывшая напарница.' },
  p_theo: { type: 'person', title: 'Тео Замбрано', text: 'Журналист пиратского эфира.' },
  p_krane: { type: 'person', title: 'Августа Крейн', text: 'Директор мнемо-архитектуры HYPERION.' },
  p_bruno: { type: 'person', title: 'Бруно Хейл', text: 'Охранник на проходной HYPERION.' },
  p_noah: { type: 'person', title: 'Ной Каррен (я)', text: 'Почему моё имя всплывает в этом деле?' },
  l_apartment: { type: 'place', title: 'Квартира 7B', text: 'Жильё Элиаса в блоке «Тессера». Обыскана до меня.' },
  l_clinic: { type: 'place', title: 'Клиника Сойки', text: 'Нижний ярус. Задняя комната за гермодверью.' },
  l_lab7: { type: 'place', title: 'Лаб-7', text: 'Лаборатория мнемо-архитектуры HYPERION. Место «инцидента».' },
  l_marlow: { type: 'place', title: 'Клиника «Марлоу»', text: 'Сгорела в 2085-м. 31 погибший.' },
  e_disappear: { type: 'event', title: 'Исчезновение, 14.11', text: 'Ночь, когда Элиас Вейн не вернулся со смены.' },
  e_marlow: { type: 'event', title: 'Пожар на Марлоу-стрит', text: '2085 год. 31 жертва. Дело закрыто за девять дней — мной.' },
  c_photo: { type: 'evidence', title: 'Фото «у озера»', text: 'Мира и Элиас в детстве. Отпечатано девять дней назад.' },
  c_family_photo: { type: 'evidence', title: 'Семейное фото Вейнов', text: '«Вирен, 2063. Наш единственный, наш Эли». На снимке один ребёнок.' },
  c_mira_loop: { type: 'evidence', title: 'Заученное детство', text: 'Мира рассказывает о детстве слово в слово, с теми же паузами.' },
  c_red_coat: { type: 'evidence', title: 'Красный плащ Миры', text: 'Носит каждый день. Подарок Элиаса: «чтобы я мог найти тебя в толпе».' },
  c_injector: { type: 'evidence', title: 'Кейс инъектора «С»', text: 'Пустой кейс из-под нейрохладагента с клеймом клиники Сойки.' },
  c_note_soyka: { type: 'evidence', title: 'Записка Элиаса', text: '«Сойка. Нижний ярус. Спросить Ржавого. Хладагент — 6 амп./сутки, иначе не дотяну. НЕ ЗВОНИТЬ М.»' },
  c_pass: { type: 'evidence', title: 'Брошенный пропуск', text: 'Пропуск HYPERION остался в куртке. Он знал, что его аннулируют.' },
  c_mail_veil: { type: 'evidence', title: 'Переписка о «Вуали»', text: 'Крейн приказала уничтожить «оригиналы» до аудита. Элиас отказался: «Я их верну».' },
  c_hidden_msg: { type: 'evidence', title: 'Послание в вентиляции', text: 'Голос Элиаса: «Не верь тому, что помнишь о Марлоу-стрит». Он знал, что наймут именно меня.' },
  c_agnes_testimony: { type: 'evidence', title: 'Показания Агнес', text: '23:40 — Элиас ушёл под руку с женщиной в красном плаще. Лица она не помнит.' },
  c_mem_agnes: { type: 'evidence', title: 'Воспоминание Агнес', text: 'Запись вечера 13.11 со страхового бэкапа.' },
  c_cctv_empty: { type: 'evidence', title: 'Камера: 23:40 — пусто', text: 'В 23:40 коридор седьмого этажа пуст. Никто не выходил из 7B.' },
  c_cctv_cleaners: { type: 'evidence', title: 'Камера: 01:05 — двое в сером', text: 'Двое с шевронами HYPERION входят в квартиру Агнес и проводят там 26 минут.' },
  c_cctv_alone: { type: 'evidence', title: 'Камера: 02:14 — Элиас один', text: 'Элиас выходит из 7B один, с медицинским кейсом, держась за стену.' },
  c_coolant: { type: 'evidence', title: 'Закупки хладагента', text: 'Сойка третьи сутки берёт по шесть ампул нейрохладагента — «как на живой сервер».' },
  c_mem_lab7: { type: 'evidence', title: 'Воспоминание из Лаб-7', text: 'Шард с рынка: ночь на 14-е глазами очевидца.' },
  c_cradle: { type: 'evidence', title: 'Пустая криоячейка', text: '«ОРИГИНАЛЫ • 31 + 1. Марлоу-стрит». Носитель извлечён, рядом — нейрошунт.' },
  c_subjects: { type: 'evidence', title: 'Список субъектов', text: 'М-12: женщина, выжила, полная коррекция, легенда «сестра». К-01: офицер, добровольно.' },
  c_marlow_file: { type: 'evidence', title: 'Дело Марлоу (оригинал)', text: 'Не пожар — сбой массовой коррекции. Следователь Н. Каррен. «Коррекция согласована субъектом К-01».' },
  c_archive: { type: 'evidence', title: 'Архив «Оригиналы»', text: 'Подлинные записи Марлоу-стрит. У меня в кармане.' },
  c_mem_noah: { type: 'evidence', title: 'Мой оригинал', text: 'Что я на самом деле сделал в ночь пожара.' },
};

/* ---------------- relations & deductions ---------------- */
export const RELS: Record<string, { label: string; color: string }> = {
  linked: { label: 'связано с', color: '#6fe0ff' },
  contra: { label: 'противоречит', color: '#ff5a5a' },
  hides: { label: 'скрывает', color: '#b070ff' },
  forged: { label: 'подделано / подделал', color: '#ff4fa0' },
  at: { label: 'находится в / был в', color: '#5affb0' },
  guilty: { label: 'виновен в', color: '#ffb040' },
};
export interface Deduction { id: string; pairs: [string, string][]; rels: string[]; title: string; text: string; theory?: string; need?: (g: any) => boolean; }
export const DEDUCTIONS: Deduction[] = [
  { id: 'd_contra', rels: ['contra'], pairs: [['c_agnes_testimony', 'c_cctv_alone'], ['c_agnes_testimony', 'c_cctv_empty'], ['c_mem_agnes', 'c_cctv_empty'], ['c_mem_agnes', 'c_cctv_alone']],
    title: 'Камера против свидетеля', text: 'Запись не оставляет места для «женщины в красном»: в 23:40 коридор пуст, а Элиас уходит в 02:14 — один. Либо врёт камера, либо память Агнес.' },
  { id: 'd_agnes_edited', rels: ['forged', 'linked'], pairs: [['p_agnes', 'c_cctv_cleaners'], ['c_mem_agnes', 'c_cctv_cleaners'], ['c_agnes_testimony', 'c_cctv_cleaners']],
    title: 'Агнес «откалибровали»', text: 'Двое с шевронами HYPERION провели у Агнес 26 минут — после этого у неё появилось воспоминание о женщине в красном. Ложный след вписали ей в голову.' },
  { id: 'f_red', rels: ['linked'], pairs: [['c_red_coat', 'c_agnes_testimony'], ['c_red_coat', 'c_mem_agnes'], ['p_mira', 'c_agnes_testimony']],
    title: 'Женщина в красном — Мира', text: 'Плащ приметный, и носит его ровно один человек в этом деле. Агнес видела с Элиасом Миру.' },
  { id: 'f_mira', rels: ['guilty'], theory: 'Мира Вейн причастна к исчезновению брата и наняла меня для отвода глаз.', pairs: [['p_mira', 'c_agnes_testimony'], ['p_mira', 'c_mem_agnes'], ['p_mira', 'p_elias'], ['p_mira', 'e_disappear'], ['c_red_coat', 'e_disappear']],
    title: 'Версия: Мира увела Элиаса', text: 'Она была с ним в последнюю ночь, скрыла это и наняла меня, чтобы выглядеть безутешной сестрой.' },
  { id: 'f_soyka', rels: ['guilty'], theory: 'Док Сойка убила Элиаса ради его импланта и архива.', pairs: [['p_soyka', 'c_injector'], ['p_soyka', 'p_elias'], ['p_soyka', 'e_disappear'], ['l_clinic', 'c_injector'], ['l_clinic', 'e_disappear']],
    title: 'Версия: Сойка разобрала его на части', text: 'Её кейс в его квартире. Подпольный хирург, которому достался пациент с бесценным имплантом. Живым он ей не нужен.' },
  { id: 'f_hyperion', rels: ['guilty', 'at', 'hides'], theory: 'HYPERION схватил Элиаса и держит его в комплексе.', pairs: [['p_krane', 'p_elias'], ['p_krane', 'e_disappear'], ['l_lab7', 'p_elias'], ['l_lab7', 'e_disappear'], ['p_krane', 'c_pass']],
    title: 'Версия: Элиас в руках HYPERION', text: 'Он пошёл против Крейн — и исчез в ту же ночь. Корпорации не теряют людей. Они их убирают в подвал.' },
  { id: 'd_elias_hiding', rels: ['at', 'hides', 'linked'], theory: 'Элиас жив. Он унёс архив в собственной голове и прячется у Сойки.', pairs: [['p_soyka', 'c_coolant'], ['l_clinic', 'c_coolant'], ['p_elias', 'c_coolant'], ['c_note_soyka', 'c_coolant'], ['p_elias', 'l_clinic'], ['p_soyka', 'c_note_soyka'], ['p_elias', 'c_note_soyka'], ['c_injector', 'c_coolant'], ['c_cradle', 'c_coolant']],
    need: g => g.hasClue('c_coolant') || (g.hasClue('c_note_soyka') && g.hasClue('c_injector')),
    title: 'Версия: Элиас прячется у Сойки', text: 'Записка, кейс, закупки хладагента «как на живой сервер». Живой сервер — это он сам. Сойка не убийца: она держит его в живых.' },
  { id: 'd_mira_m12', rels: ['linked', 'forged', 'contra', 'hides'], pairs: [['p_mira', 'c_subjects'], ['p_mira', 'c_family_photo'], ['c_photo', 'c_family_photo'], ['c_mira_loop', 'c_subjects'], ['c_mira_loop', 'c_family_photo'], ['p_mira', 'c_mira_loop']],
    need: g => g.hasClue('c_subjects') || (g.hasClue('c_family_photo') && g.hasClue('c_mira_loop')),
    title: 'У Элиаса нет сестры', text: 'Единственный ребёнок на семейном фото. Свежая печать «детского» снимка. Заученные воспоминания. Мира — субъект М-12, а «сестра» — легенда, вписанная ей в память.' },
  { id: 'd_orlova', rels: ['hides', 'linked', 'at'], pairs: [['p_orlova', 'c_mem_lab7'], ['p_orlova', 'l_lab7'], ['p_orlova', 'e_disappear'], ['p_orlova', 'p_elias']],
    need: g => g.flag('mem_lab7_verdict') === 'real' && g.memFoundIn('mem_lab7', 'l_orlova'),
    title: 'Орлова выпустила его', text: 'Инспектор Орлова стояла на стрёме в Лаб-7. Она не закрыла дело «сверху» — она прикрывает Элиаса сама.' },
  { id: 'd_bruno', rels: ['linked', 'hides'], pairs: [['p_bruno', 'c_mem_lab7'], ['p_bruno', 'p_pixel']],
    need: g => g.memFoundIn('mem_lab7', 'l_self'),
    title: 'Память с рынка — Хейла', text: 'Запись Лаб-7 снята с охранника Бруно Хейла. Он всё видел, промолчал и продал.' },
  { id: 'd_marlow', rels: ['linked', 'hides', 'guilty'], pairs: [['c_marlow_file', 'c_mail_veil'], ['e_marlow', 'c_mail_veil'], ['c_cradle', 'e_marlow'], ['e_marlow', 'p_krane'], ['c_marlow_file', 'p_krane'], ['c_cradle', 'c_mail_veil']],
    need: g => g.hasClue('c_marlow_file') || (g.hasClue('c_cradle') && g.hasClue('c_mail_veil')),
    title: '«Вуаль» растёт из Марлоу', text: 'Марлоу-стрит была не пожаром, а первым массовым стиранием — с 31 трупом. «Оригиналы» — единственное доказательство. «Вуаль» — то же самое, но на весь город.' },
  { id: 'd_noah', rels: ['linked', 'hides', 'guilty'], pairs: [['p_noah', 'c_marlow_file'], ['p_noah', 'e_marlow'], ['p_noah', 'c_hidden_msg'], ['p_noah', 'c_subjects'], ['p_noah', 'l_marlow']],
    title: 'Я — субъект К-01', text: 'Я вёл дело Марлоу, закрыл его как несчастный случай и добровольно лёг в кресло. «Плюс один» в архиве — это я.' },
];

/* ---------------- objectives ---------------- */
export interface Quest { id: string; title: string; main?: boolean; visible?: (g: any) => boolean; stages: { text: string; done: (g: any) => boolean }[]; }
export const QUESTS: Quest[] = [
  { id: 'main', main: true, title: 'ДЕЛО ВЕЙНА', stages: [
    { text: 'Поговорить с Мирой Вейн в офисе', done: g => g.flag('mira_briefed') },
    { text: 'Добраться до квартиры Элиаса: блок «Тессера», 7B (транзит — на площади за переулком)', done: g => g.flag('apt_entered') },
    { text: 'Обыскать квартиру 7B и опросить соседку', done: g => g.hasClue('c_note_soyka') && (g.hasClue('c_agnes_testimony') || g.flag('agnes_shut')) },
    { text: 'Найти Сойку на Нижнем ярусе', done: g => g.s.npc.soyka?.met },
    { text: 'Выяснить, что произошло в Лаб-7 комплекса HYPERION', done: g => g.hasClue('c_cradle') },
    { text: 'Собрать версию на доске расследования [B] и выбрать рабочую гипотезу', done: g => !!g.s.theory },
    { text: 'Найти Элиаса Вейна', done: g => g.flag('met_elias') },
    { text: 'Решить судьбу архива «Оригиналы»: эфир, HYPERION, огонь — или закон', done: g => g.flag('ended') },
  ] },
  { id: 'cctv', title: 'ЧТО ВИДЕЛА КАМЕРА', visible: g => g.hasClue('c_agnes_testimony') || g.flag('cctv_seen'), stages: [
    { text: 'Получить доступ к пульту наблюдения в вестибюле «Тессеры»', done: g => g.flag('cctv_seen') },
    { text: 'Найти на записи момент, когда Элиас покинул квартиру', done: g => g.hasClue('c_cctv_alone') },
  ] },
  { id: 'agnes', title: 'ЧУЖОЙ ВЕЧЕР', visible: g => g.has('i_shard_agnes') || !!g.flag('mem_agnes_verdict'), stages: [
    { text: 'Погрузиться в воспоминание Агнес (инвентарь [I] → использовать шард)', done: g => !!g.flag('mem_agnes_verdict') },
    { text: 'Решить, говорить ли Агнес, что вы узнали', done: g => g.flag('agnes_told') || g.flag('agnes_spared') || g.flag('mem_agnes_verdict') === 'real' },
  ] },
  { id: 'garth', title: 'ЧУЖОЕ ДЕТСТВО', visible: g => g.flag('q_garth'), stages: [
    { text: 'Добыть у Пикселя воспоминание Гарта о дне рождения дочери', done: g => g.has('i_shard_garth') || g.flag('garth_done') },
    { text: 'Вернуть шард Гарту', done: g => g.flag('garth_done') },
  ] },
  { id: 'theo', title: 'СВОБОДНАЯ ЧАСТОТА', visible: g => g.s.npc.theo?.met, stages: [
    { text: 'Убедить Тео Замбрано дать доступ к передатчику', done: g => g.flag('theo_code') || g.flag('roof_open') },
  ] },
  { id: 'self', title: 'К-01', visible: g => g.has('i_shard_noah'), stages: [
    { text: 'Посмотреть собственный оригинал (инвентарь [I] → использовать шард)', done: g => !!g.flag('noah_recall') },
  ] },
];

export const MEMS: Record<string, { title: string; verdict: boolean; clue: string; total: number }> = {
  mem_agnes: { title: 'Вечер Агнес Вольф', verdict: true, clue: 'c_mem_agnes', total: 7 },
  mem_lab7: { title: 'Лаб-7, ночь на 14-е', verdict: true, clue: 'c_mem_lab7', total: 7 },
  mem_noah: { title: 'Марлоу-стрит, оригинал', verdict: false, clue: 'c_mem_noah', total: 4 },
};
export const ZONES: Record<string, { name: string; desc: string; x: number; y: number }> = {
  central: { name: 'Центральный район', desc: 'Проспект Аркадия. Офис, пост VCPD, лапшичная Вонга.', x: 50, y: 46 },
  residential: { name: 'Жилой сектор', desc: 'Блок «Тессера». Квартира Элиаса Вейна.', x: 22, y: 30 },
  underground: { name: 'Нижний ярус', desc: 'Чёрный рынок, бар «Последний байт», клиника Сойки.', x: 34, y: 74 },
  hyperion: { name: 'Комплекс HYPERION', desc: 'Плаза Памяти. Лаб-7. Дирекция.', x: 78, y: 24 },
};
