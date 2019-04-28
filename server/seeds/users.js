// import { genObjectId } from '../helpers/index';

// eslint-disable-next-line no-unused-vars
const users = [
  {
    // id: genObjectId('user1'),
    firstName: 'first',
    lastName: 'user',
    email: 'test@user1.com',
    accountType: 'individual',
    verified: true,
    skills: [
      {
        skill: 'React',
        years: 3
      }
    ]
  },
  {
    // id: genObjectId('user2'),
    firstName: 'second',
    lastName: 'user2',
    email: 'test@user2.com',
    accountType: 'individual',
    verified: true,
    skills: [
      {
        skill: 'Node',
        years: 3
      }
    ]
  },
  {
    // id: genObjectId('user3'),
    firstName: 'third',
    lastName: 'user',
    email: 'test@user3.com',
    accountType: 'individual',
    verified: true,
    skills: [
      {
        skill: 'Express',
        years: 7
      }
    ]
  }
];


// export default users;
module.exports = users;
