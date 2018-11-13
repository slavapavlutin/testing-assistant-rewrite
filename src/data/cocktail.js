const db = `
мохито облепиховый ба (900 мл), мята 15, лимон 30, сахарный сироп 60, святой источник газ. 600, лед, облепиха с/м 10, лайм 30, концентрат облепихи 90
чай алтайский травяной (травяной чай), чай черный цейлон 5, чабрец 5, анис 5, мята 15
домашний лимонад клубничный (300 мл), вода святой источник газ. 150, сироп клубничный 20, лимон 20, лед колотый 100, сахарный сироп 10
персиковое настроение, мороженое ванильное 80, сок персик 220, коктейльная вишня 8, лед, апельсин (на украшение) 20
мохито вишневый б/а (300 мл), святой источник газ. 150, лайм 20, сироп вишня 20, лед, сахарный сироп 10, вишня коктейльная 15, лимон 20, мята 10
молочный коктейль со сгущенкой, сливки взбитые 20, топпинг шоколад 10, сгущёнка 30, молоко 120, мороженое ванильное 100
чай лимонная легкость, лимон 30, сок лимона 20, мята 2, палочка корицы 7, сироп маракуйя 20, мед 20, сахарный сироп 20, вода 600
белый глинтвейн липа-облепиха (бокал) ба, чай липовый 5, сок яблоко 100, концентрат облепихи 20, апельсин 20, корень имбиря 5, корица палочка 5, гвоздика 3, вода 100, мед 20
лимонад цитрон (кувшин), сок апельсин 300, апельсин 40, киви 40, лед 250, лимон 10, сироп маракуйя 40, святой источник газ. 300
домашний лимонад вишнёвый (300 мл), лед колотый 100, вода святой источник газ. 150, лимон 20, сироп вишня 20, сахарный сироп 10
фруктовый чай, чай эрл грей 5, яблоко 30, груша 30, клубника с/м 30, лимон 10, сироп гренадин 10, апельсин 50
белый глинтвейн липа-облепиха (кувшин) ба, чай липовый 5, сок яблоко 300, концентрат облепихи 60, апельсин 20, корица палочка 5, гвоздика 3, вода 250, мед 100, корень имбиря 10
фруктовый смузи, сок апельсин 150, клубника с/м 40, сироп клубничный 10, киви (на украшение) 10, киви 40, банан 100
лимонад цитрон (бокал), сок апельсин 100, апельсин 15, киви 15, лед 50, лимон 5, сироп маракуйя 15, святой источник газ. 100
красная сангрия (бокал), вино красное сухое 150, апельсин 30, лайм 10, яблоко 20, лимон 10, лед, спрайт 100, клубника 5
мохито классический алк. (бокал), ром шарк тус сильвер 40, мята 5, лайм 10, лимон 10, сахарный сироп 25, святой источник газ. 150, лед
домашний глинтвейн, вино красное сухое 150, лимон 10, яблоко 10, мед 20, гвоздика 5, палочка корицы 5, апельсин 20
южный ветер, сок апельсин 30, сок лимона 10, апельсин (на украшение) 20, лед 120, болс дыня 20, виски беллс 15
мохито классический алк. (кувшин), ром шарк тус сильвер 120, мята 15, лайм 10, лимон 30, сахарный сироп 80, святой источник газ. 500, лед
снифт-тоник, ром шарк тус сильвер 20, водка смирнов №21 20, лимон 15, ликер болс трипл сек 20, лед 100, сироп маракуйя 10, швепс (стекло) 150, сок лимона 15
orange beer, лед, апельсин (цедра) 20, сок апельсин 70, сироп роз. грейпфрут 20, пиво светлое лагер 150, лимон 10
лесное яблоко, джин гордонс 10, сахарный сироп 15, сок лимона 10, апельсин (на украшение) 20, лед 150, тимьян 3, водка смирнов №21 15, ликер болс сауэр эйпл 20
виски-кола (кувшин), виски беллс 200, лимон 40, лед, кока-кола (для коктейлей) 600
яблочный розе (бокал), вермут белый 50, сок яблоко 150, яблоко (на украшение) 20, палочка корицы 5, лед, сироп роз. грейпфрут 10
ром-кола (бокал), ром шарк тус сильвер 40, лед, лимон 10, кока-кола (для коктейлей) 150
роми, водка смирнов №21 20, сироп роз. грейпфрут 15, кампари 20, апельсин (на украшение) 5, сок лимона 20, лед 70, святой источник газ. 50
белая сангрия (кувшин), вино белое сухое 400, апельсин 60, клубника 10, лимон 30, яблоко 60, спрайт 200, лайм 20, лед 230
белый глинтвейн липа-облепиха (кувшин), чай липовый 5, вино белое сухое 300, корень имбиря 10, концентрат облепихи 60, апельсин 20, корица палочка 5, гвоздика 3, мед 60, вода 250
молочный коктейль имбирный пряник, мороженое ванильное 100, сироп "имбирный пряник" 30, топпинг шоколад 10, сливки взбитые 20, молоко 120
мохито классический б/а (300 мл), мята 5, сахарный сироп 20, лед, лайм 10, святой источник газ. 150, лимон 10
домашний лимонад кокосовый (300 мл), лимон 20, вода святой источник газ. 150, сироп кокос 20, сахарный сироп 10, лед колотый 100
латте "макиато", кофе эспрессо, молоко 150
мохито вишневый б/а (900 мл), святой источник газ. 550, лимон 30, сироп вишня 50, лед, сахарный сироп 30, вишня коктейльная 30, мята 15, лайм 30
домашний лимонад вишнёвый (900 мл), лед 200, вода святой источник газ. 450, лимон 60, сироп вишня 60, сахарный сироп 30
домашний лимонад клубничный (900 мл), вода святой источник газ. 450, сироп клубничный 60, лимон 60, лед 200, сахарный сироп 30
айриш кофе, виски джеймсон 15, кофе американо, топинг карамель 10, сахар 5, сливки взбитые 20
ром-кола (кувшин), ром шарк тус сильвер 200, лед, лимон 40, кока-кола (для коктейлей) 600
снежный апельсин, ликер болс йогурт натуральный 40, апельсин (на украшение) 20, апельсин 40, лед 120
лонг айленд нью-йорк (бокал), текила пепе лопес сильвер 10, джин гордонс 10, ром шарк тус сильвер 10, лимон 10, лайм 10, сироп вишня 10, лед, вишня коктейльная 8, ликер болс трипл сек 10, водка смирнов №21 10, кока-кола (для коктейлей) 150
молодильное яблоко (вашингтонское яблоко), лед 150, сироп гренадин 10, яблоко 30, палочка корицы 5, ликер болс сауэр эйпл 20, водка смирнов №21 20, сок лимона 5
текила санрайз, сок апельсин 200, апельсин (на украшение) 20, лед 25, сироп гренадин 15, текила пепе лопес сильвер 40
йогуртовый физз, ром шарк тус сильвер 20, ликер болс йогурт натуральный 20, сахарный сироп 10, сок лимона 10, апельсин 30, лед 120
молочный банановый коктейль, молоко 150, мороженое 100, банан (на украшение) 5, сливки взбитые 30, банан 50
домашний глинтвейн б/а, лимон 10, яблоко 10, мед 20, сок вишнёвый 150, палочка корицы 5, гвоздика 5, апельсин 20
кофе "евразия", кофе эспрессо, сливки взбитые 30, топинг шоколад 10, апельсин (цедра) 20, сироп "имбирный пряник" 20, молоко 220
мохито клубничный б/а (300 мл), лимон 10, лайм 10, сироп клубничный 20, клубника 10, лед, сахарный сироп 10, святой источник газ. 150, мята 5
чай тропики, апельсин 20, лимон 20, яблоко 20, гвоздика 1, палочка корицы 7, сок лимона 10, мускатный орех 1, сироп маракуйя 40, сахарный сироп 30
домашний лимонад кокосовый (900 мл), вода святой источник газ. 450, сироп кокос 60, сахарный сироп 30, лед 200, лимон 60
фрут шампань, апельсин 30, лимон 10, лед 110, лайм 10, сироп роз. грейпфрут 30, огурец 30, клубника с/м 30, шампанское барон де виник п/сл 0|75
белый глинтвейн липа-облепиха (бокал), чай липовый 5, вино белое сухое 100, концентрат облепихи 20, апельсин 20, корень имбиря 5, корица палочка 5, гвоздика 3, мед 20, вода 100
мохито клубничный алк. (бокал), ром шарк тус сильвер 40, сироп клубничный 20, сахарный сироп 10, клубника 10, мята 5, лимон 10, святой источник газ. 150, лед, лайм 10
мохито облепиховый алк. (кувшин), ром шарк тус сильвер 120, лайм 30, лимон 30, сахарный сироп 60, концентрат облепихи 90, лед, святой источник газ. 500, мята 15, облепиха с/м 10
мохито вишневый алк. (кувшин), ром шарк тус сильвер 120, сироп вишня 50, сахарный сироп 30, лайм 30, мята 15, лед, лимон 30, святой источник газ. 550, вишня коктейльная 30
иллюзия, водка смирнов №21 20, ликер болс трипл сек 10, ликер болс дыня 10, сок ананас 30, сок лимона 10, апельсин (на украшение) 20, лед 110
цитрусовый дайкири, ром шарк тус сильвер 30, болс триппл сек 20, сок лимона 10, лед 100, апельсин 30, сироп роз. грейпфрут 15, апельсин (на украшение) 15
молочный коктейль с топингом, сливки взбитые 20, сливки 40, вишня коктейльная 8, молоко 170, мороженое ванильное 70, сироп на выбор: клубника| карамель| вишня| шоколад 20
байский чай, чай черный цейлон 5, мята 5, яблоко 50, анис 5, гвоздика 1, чабрец 2, лимон 5, палочка корицы 7|5
красная мэри б/а, петрушка 2, лед, соус табаско 3, сок томатный 180, перец| соль
брусничный розато, вермут белый 50, сахарный сироп 10, лед, брусника с/м 20, сироп роз. грейпфрут 15
гумбай смеш, ром шарк тус сильвер 20, ликер болс трипл сек 15, сироп кокос 15, сок ананас 80, сок лимона 10, апельсин (на украшение) 20, лед
вишнёвое пиво, пиво светлое лагер 100, сироп вишня 20, лимон 5, лед 75, вишня коктейльная 5, сок вишнёвый 100
мохито облепиховый алк. (бокал), ром шарк тус сильвер 40, мята 10, лайм 20, лимон 20, сахарный сироп 20, концентрат облепихи 30, лед, облепиха с/м 5, святой источник газ. 150
виски-кола (бокал), виски беллс 40, кока-кола 150, лимон 10, лед
мохито классический б/а (900 мл), мята 15, сахарный сироп 80, лед, лайм 10, святой источник газ. 550, лимон 30
чай облепиха-липа, чай липовый 5, концентрат облепихи 100, облепиха с/м 50, сок апельсин 50, апельсин 40, шалфей (свежий) 5, мед 30, вода 330
мохито облепиховый ба (300 мл), мята 10, лайм 20, лимон 20, сахарный сироп 20, концентрат облепихи 30, святой источник газ. 200, лед, облепиха с/м 5
клубничная маргарита, текила пепе лопес сильвер 30, ликер болс трипл сек 10, сок лимона 15, сироп клубничный 20, лед, лайм (на украшение) 10, клубника с/м 35
лонг айленд нью-йорк (600 мл), текила пепе лопес сильвер 20, джин гордонс 20, ром шарк тус сильвер 20, лимон 10, лайм 10, топинг вишня 20, лед, вишня коктейльная 8, ликер болс трипл сек 20, водка смирнов №21 40, кока-кола (для коктейлей) 300
мохито вишневый алк. (бокал), ром шарк тус сильвер 40, сироп вишня 20, сахарный сироп 10, лайм 20, мята 10, лед, лимон 20, святой источник газ. 150, вишня коктейльная 15
красная мери алк., водка смирнов №21 40, сок томатный 150, петрушка 2, соус табаско 3, лед, соль| перец
айс кофе с бейлисом, ликер бейлис 20, кофе эспрессо, сахарный сироп 5, лед, сливки взбитые 30, молоко 100, топинг карамель 20
юбари, ром шарк тус сильвер 20, ликер болс йогурт натуральный 15, ликер болс дыня 15, сок лимона 10, сок ананас 30, сахарный сироп 10, огурец 20, апельсин 20, лед 100
айс кофе с карамелью, кофе эспрессо, сливки взбитые 30, сахарный сироп 20, лед, топинг карамель 20, молоко 100
мохито клубничный б/а (900 мл), лимон 30, мята 15, лайм 10, сироп клубничный 50, лед, сахарный сироп 30, святой источник газ. 550, клубника 20
яблочный розе (кувшин), вермут белый 200, яблоко 50, палочка корицы 5, лед, сироп роз. грейпфрут 40, сок яблоко 600
белая сангрия (бокал), вино белое сухое 150, апельсин 30, клубника 5, лимон 10, яблоко 20, спрайт 100, лайм 10, лед
смузи бананово-клубничный, молоко 150, банан 100, апельсин 10, сироп клубничный 10, клубника с/м 50
красная сангрия (кувшин), вино красное сухое 400, апельсин 60, лайм 20, яблоко 60, лимон 30, спрайт 200, клубника 10, лед 230
`;

export default db;