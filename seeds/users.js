// import { genObjectId } from '../helpers/index';

// eslint-disable-next-line no-unused-vars
const users = [
  {
    firstName: 'first',
    lastName: 'user',
    email: 'test@user1.com',
    accountType: 'individual',
    verified: true,
    timestamp: Date.now,
    skills: [
      {
        skill: 'React',
        years: 3
      }
    ]
  },
  {
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
    ],
    timestamp: Date.now,
  },
  {
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
    ],
    timestamp: Date.now,
  }
];


// export default users;
module.exports = users;
