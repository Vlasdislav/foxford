const videoGallery = document.querySelector('.video-gallery'),
      listLessons = document.querySelector('.list-lessons');

const dataNames = ['0. Вводное занятие', 
                   '1. Типы данных в C++, бинарное представление чисел, битовые операции над числами',
                   '2. Ввод-вывод в языках C/C++, scanf, printf, использование файлов. Структуры и классы',
                   '3. Строки в языке C++, char, string. Операции над string из STL. Работа с памятью',
                   '4. Контейнеры STL. Итераторы',
                   '5. Важные встроенные алгоритмы STL и их реализация. Сортировки',
                   '6. Арифметические алгоритмы',
                   '7. Бинарный поиск',
                   '8. Тернарный поиск, метод двух указателей, метод сканирующей прямой',
                   '9. Динамическое программирование. Базовые задачи. Восстановление ответа',
                   '10. Динамическое программирование. Подбор параметров в задачах ДП. Решение задач. Задача о рюкзаке',
                   '11. Динамическое программирование. Задачи НОП, НВП, НОВП',
                   '12. Структуры данных. Префиксные суммы, sqrt-декомпозиция, sparse table, алгоритм Мо',
                   '13. Дерево отрезков',
                   '14. Массовые операции в дереве отрезков',
                   '15. Алгоритмы на графах. Хранение графов. DFS. Задачи на деревьях',
                   '16. Алгоритмы на графах. Использование DFS для решения задач. Неявные графы. Топологическая сортировка. Конденсация',
                   '17. Алгоритмы на графах. Поиск мостов и точек сочленения',
                   '18. Алгоритмы на графах. BFS. Алгоритм Дейкстры. Алгоритм Форда-Беллмана. Алгоритм Флойда',
                   '19. Алгоритмы поиска минимального остовного дерева. Алгоритмы Прима, Краскала. Система непересекающихся множеств',
                   '20. Строковые алгоритмы. Хеширование. Z-функция, префикс-функция. Бор',
                   '21. Окончание занятия Строки. Геометрия. Структура точки. Скалярное и векторное произведение',
                   '22. Геометрия. Прямые и окружности. Многоугольники. Задача точки внутри многоугольника. Выпуклая оболочка',
                   '23. Геометрия. Прямые и окружности. Многоугольники. Задача точки внутри многоугольника. Выпуклая оболочка',
                   '24. Динамическое программирование по профилю. Бинарное дерево поиска. Декартово дерево',
                   '25. Декартово дерево по неявному ключу. Дерево merge-sort',
                   '26. Метод сканирующей прямой и дерева отрезков. Дерево Фенвика. Задача DCP',
                   '27. Комбинаторные алгоритмы',
                   '28. Задача LCA. Функции на поддеревьях и путях в дереве',
                   '29. Оптимизации динамического программирования. Convex Hull Trick',
                   '30. Паросочетания. Алгоритм Куна'
                ];

const listLesson = (name, link) => `<li class="lesson"><a href="#les-${link}">${name}</a></li>`;

const videoPlayer = (number, name) => {
    return (
        `
        <div class="block-lesson" id=les-${number}>
            <h1 class="block-lesson-name">${name}</h1>
            <!--<video id="player" width="50%" height="auto" controls>
                <source src="https://www.dubox.com/play/video?path=%2Fvideo%2F${number}.mkv&t=-1" type="video/mp4">
            </video>-->
            <a href="https://www.dubox.com/play/video?path=%2Fvideo%2F${number}.mkv&t=-1" target="_blank">
                  <img class="img-video" src="http://sch9.goruno-dubna.ru/wp-content/uploads/2020/03/99571548.jpg">
            </a>
            <div class="links">
                <a class="block-lesson-link" target="_blank" href="./presentations/${number}.pdf">Презентация</a>
                <a class="block-lesson-link" href="./tasks/${number}.docx">Задачи</a>
                <a class="block-lesson-link" href="./theory/${number}.docx">Теория</a>
            </div>
        </div>
        `
    )
}

dataNames.forEach((elem, i) => (listLessons.innerHTML += listLesson(elem, i)) && (videoGallery.innerHTML += videoPlayer(i, elem)));
