import type {
  Education,
  Cooperation,
  StudentWork,
  Project,
  Lesson,
  Certificate,
} from '../types';
import avatar from '../assets/avatar.jpg';
import bookCover from '../assets/image.png';

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
    role: 'Вчителька польської та англійської мови',
    bio: 'Я люблю допомагати дітям відкривати світ через гру, читання та експерименти. Маю 10 років досвіду та вже випустила збірку віршів на польській мові.',
    photo: avatar,
  },
  education: [
    {
      year: '2020–2022',
      title: 'Викладач англійської мови та вчитель зарубіжної літератури',
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
      year: '2012–2016',
      title: 'Психологія',
      institution: 'Міжнародний університет економіки та права "КРОК", Київ',
      details: 'Тривалість навчання: 4 роки',
    },
    {
      year: '2009–2012',
      title: 'Вчитель польської мови',
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
      title: 'Малюнки "Моє місто"',
      type: 'Малюнки',
      date: 'Травень',
    },
    {
      id: 'sw2',
      title: 'Аплікації "Кольорова Осінь"',
      type: 'Аплікації',
      date: 'Жовтень',
    },
  ] as StudentWork[],
  projects: [
    {
      id: 'p1',
      title: 'Екологічний проєкт "Зелена школа"',
      role: 'Керівник',
      description: 'Висадка дерев та сортування відходів.',
    },
    {
      id: 'p2',
      title: 'Конкурс читців "Слово"',
      role: 'Організатор',
      description: 'Підготовка учнів до міського конкурсу.',
    },
  ] as Project[],
  lessons: [
    {
      id: 'l1',
      title: 'Урок "Тварини Польщі"',
      description: 'Інтерактивне заняття з картинками та аудіо.',
      photo: 'path/to/lesson1.jpg',
      date: '12.09.2025',
    },
    {
      id: 'l2',
      title: 'Фонетична гра "Голосні та Приголосні"',
      description: 'Вправа на розрізнення звуків.',
      photo: 'path/to/lesson2.jpg',
      date: '05.10.2025',
    },
  ] as Lesson[],
};
