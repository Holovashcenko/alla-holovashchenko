import type {
  Education,
  Cooperation,
  StudentWork,
  Project,
  Lesson,
  Certificate,
} from '../types';
import avatar from '../assets/avatar.jpg';

export const mockData = {
  teacher: {
    name: 'Алла Гульмирівна',
    role: 'Вчителька польської та англійської мови',
    bio: 'Я люблю допомагати дітям відкривати світ через гру, читання та експерименти. Маю 10 років досвіду та вже випустила збірку віршів на польській мові.',
    photo: avatar,
  },
  education: [
    {
      year: '2012',
      title: 'Магістр педагогіки',
      institution: 'КНУ ім. Т. Шевченка',
    },
    {
      year: '2018',
      title: 'Курс з інклюзивної освіти',
      institution: 'Нова Школа',
    },
  ] as Education[],
  cooperation: [
    {
      id: 'co1',
      title: 'Програма обміну "Міст знань"',
      description: 'Семінари з білінгвального навчання в Польщі.',
    },
    {
      id: 'co2',
      title: 'Конференція "Цифрова Освіта"',
      description: 'Доповідь про інтерактивні методи у школі.',
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
