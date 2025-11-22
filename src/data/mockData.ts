import type {
  Education,
  Cooperation,
  StudentWork,
  Project,
  Lesson,
  Certificate,
} from '../types';
import avatar from '../assets/avatar.jpg';
import mainAvatar from '../assets/main-ava.jpg';

import bookCover from '../assets/image.png';

import Zoom1 from '../assets/zoom1.png';
import Zoom2 from '../assets/zoom2.jpg';
import Zoom3 from '../assets/zoom3.png';

import Lesson1 from '../assets/lesson1.jpg';

import StudentWorkFood1 from '../assets/student-works/food/1.jpg';

import Competition1 from '../assets/stem-poster.png';

import StudentWorkCensored1 from '../assets/student-works/censored/1.jpg';
import StudentWorkCensored2 from '../assets/student-works/censored/2.jpg';
import StudentWorkCensored3 from '../assets/student-works/censored/3.jpg';
import StudentWorkCensored4 from '../assets/student-works/censored/4.jpg';

export const mockData = {
  books: [
    {
      id: 'b1',
      title: 'Спів душі Аліції',
      description: 'Збірка віршів польською мовою',
      year: '2023',
      link: bookCover,
    },
  ],
  teacher: {
    name: 'Алла Гульмирівна',
    role: 'Вчителька польської мови',
    bio: 'Я люблю допомагати дітям відкривати світ через гру, читання та експерименти. Маю 20 років досвіду та вже випустила збірку віршів на польській мові.',
    photo: avatar,
    mainPhoto: mainAvatar,
  },
  education: [
    {
      year: '2020–2022',
      title: 'Факультет філології — Англійська мова та зарубіжна література',
      institution: 'НПУ імені М.П. Драгоманова, Київ',
      details: 'Тривалість навчання: 2 роки',
    },
    {
      year: '2016–2018',
      title: 'Юридичний факультет — Медичне та фармацевтичне право',
      institution: 'Міжнародний університет економіки та права "КРОК", Київ',
      details: 'Тривалість навчання: 1 рік 6 місяців',
    },
    {
      year: '2013–2016',
      title: 'Факультет психології — Психологія',
      institution: 'Міжнародний університет економіки та права "КРОК", Київ',
      details: 'Тривалість навчання: 3 роки',
    },
    {
      year: '2005–2008',
      title: 'Філологічний факультет — Викладання польської мови',
      institution: 'Akademia Filozoficzno-Pedagogiczna Ignatianum, Краків',
      details: 'Тривалість навчання: 3 роки',
    },
  ] as Education[],

  cooperation: [
    {
      id: 'co1',
      title: 'Телемости з польськими школами',
      description:
        'Онлайн-зустрічі (Zoom) для обміну навчальним досвідом з польськими колегами.',
      details:
        'Обговорення методик викладання, спільні проєкти та обмін навчальними матеріалами.',
      images: [Zoom1, Zoom2, Zoom3],
    },
  ] as Cooperation[],

  certificates: [
    {
      id: 'cert1',
      title: 'Професійний розвиток (30 год)',
      date: 'Жовтень 2024',
    },
    {
      id: 'cert2',
      title: 'Методика викладання польської мови (B2)',
      date: 'Червень 2023',
    },
  ] as Certificate[],

  studentWork: [
    {
      id: 'sw1',
      title: 'Здоровий спосіб життя',
      type: 'Лекція та малюнки учнів',
      date: 'Жовтень',
      imageUrls: [StudentWorkFood1],
    },
    {
      id: 'sw2',
      title: "Вплив ненормативної лексики на здоров'",
      type: 'Лекція та малюнки учнів',
      date: 'Листопад',
      imageUrls: [
        StudentWorkCensored1,
        StudentWorkCensored2,
        StudentWorkCensored3,
        StudentWorkCensored4,
      ],
    },
  ] as StudentWork[],
  projects: [
    {
      id: 'p1',
      title: 'MIĘDZYNARODOWY KONKURS LITERACKI „MAM TALENT”',
      role: 'Організатор',
      posterUrl: Competition1,
      gallery: [] as string[],

      descriptionParts: [
        {
          type: 'text',
          content:
            'Подія, організована спільно зі Szkołą Podstawową nr 1 w Swarzędzu (Польща) та Ліцеєм «Гармонія» №9 у Києві (Україна).',
        },
        { type: 'date', content: '26 березня' },
        {
          type: 'text',
          content:
            'Запрошуємо молодих авторів до участі в конкурсі, що відкриває літературні таланти.',
        },
        { type: 'divider' },
        {
          type: 'award',
          title: 'Головна нагорода',
          content:
            'Авторський збірник поезій Алли Головащенко з особистим автографом',
        },
        {
          type: 'award',
          title: 'Додаткові призи',
          content: 'Дипломи, відзнаки та публікація найкращих робіт',
        },
        {
          type: 'highlight',
          content: 'Покажи свій талант — дозволь себе почути!',
        },
      ],
    },
  ] as Project[],
  lessons: [
    {
      id: 'l1',
      title: 'Онлайн урок',
      description: 'Інтерактивне заняття з картинками та аудіо.',
      photo: Lesson1,
      date: '20.11.2025',
    },
  ] as Lesson[],
};
