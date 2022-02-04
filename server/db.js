const { DataStore } = require('notarealdb');

const store = new DataStore('./data');

module.exports = {
  users: store.collection('users'),
  codingsData: store.collection('codingsData'),
  codingSkillset: store.collection('codingSkillset'),
  designsData: store.collection('designsData'),
  education: store.collection('education'),
  experiences: store.collection('experiences'),
  illustrationsData: store.collection('illustrationsData'),
  languages: store.collection('languages'),
  softwareSkillset: store.collection('softwareSkillset'),
};
