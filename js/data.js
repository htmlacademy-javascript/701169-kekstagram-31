import {getRandomInteger} from './util.js';

const NAME =[
  'David',
  'John',
  'Sebastian',
  'Franz',
  'Wolfie',
  'Ada'
]

const DESCRIPTION = [
  'What a strike it was!',
  'Awwesome summer!',
  'Never imagine to be somewhere like here',
  'Вот это да!',
  'Невероятный закат',
  'Все оттенки лета',
  'Белые начинают и выигрывают'
]

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
]

const createPhoto = () => {
  return {
    id: getRandomInteger(1, 25),
    url: 'photos/' + getRandomInteger(1, 25) + '.jpg',
    description: DESCRIPTION[getRandomInteger(0, DESCRIPTION.length - 1)],
    likes: getRandomInteger(15, 200),
    comments: {
      id: getRandomInteger(1, 250),
      avatar: 'img/avatar-' + getRandomInteger(1, 6) + '.svg',
      message: MESSAGE[getRandomInteger(0, MESSAGE.length - 1)],
      name: NAME[getRandomInteger(0, NAME.length - 1)],
    }
  }
}


const similarPhotos = Array.from({length: 25}, createPhoto)

export {similarPhotos};
