const db = require('./db');

const Query = {
    language: (root, args) => db.languages.get(args.id),
    languages: () => db.languages.list(),
    experiences: () => db.experiences.list(),
    experience: (root, args) => db.experiences.get(args.id),
    illustrationsDataEle: (root, args) => db.illustrationsData.get(args.id),
    illustrationsData: () => db.illustrationsData.list(),
    codingsData:() => db.codingsData.list(),
    codingsDataEle:(root, args) => db.codingsData.get(args.id),
    codingSkillset:() => db.codingSkillset.list(),
    codingSkillsetEle:(root, args) => db.codingSkillset.get(args.id),
    softwareSkillset:() => db.softwareSkillset.list(),
    softwareSkillsetEle:(root, args) => db.softwareSkillset.get(args.id),
    education:() => db.education.list(),
    educationEle:(root, args) => db.education.get(args.id),
    designsData: () => db.designsData.list(),
    designsDataEle:(root, args) => db.designsData.get(args.id)
};

// const Job = {
    // company: (job) => db.companies.get(job.companyId)
// };

module.exports = { Query };