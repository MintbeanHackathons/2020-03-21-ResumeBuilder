// Resume Builder
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let resume = {
    "basics": {
        "name": "",
        "label": "",
        "picture": "",
        "email": "",
        "phone": "",
        "website": "",
        "summary": ""
      },
      "work": [],
      "education": [],
      "languages": [],
      "skills": [],
      "references": []
};
let fileName = 'resume.json';

console.log('==============================\nWelcome to Resume Builder!\n==============================');

// Check if fileName is given (if not, use default)
if (process.argv[2]) {
    fileName = process.argv[2];
    showCommands();
} else {
    showCommands();
}

// Read .json file and add to resume
fs.readFile(fileName, (err, data) => {
    if (typeof data !== 'undefined') {
        const fileContents = JSON.parse(data);
        for (item in resume) {
            if (fileContents[item]) resume[item] = fileContents[item];
        };
    };
});

function showCommands() {
    // Show command options after every request is completed
    rl.question(`(v) View • (a) Add • (d) Delete • (s) Save • (q) Quit\n`, answer => {
        // View resume
        if (answer === 'v') {
            const categories = Object.entries(resume);
            categories.forEach(category => {
                Array.isArray(category) ? category.forEach(item => console.log(item)) : console.log(category);
            });
            showCommands();
        // Add resume item
        } else if (answer === 'a') {
            const getCategory = () => {
                rl.question('(b) Basics • (w) Work • (e) Education • (l) Languages • (s) Skills • (r) References\n', category => {
                    switch(category) {
                        case 'b':
                            const getBasic = () => {
                                rl.question('Please select a field: name • label • picture • email • phone • summary\n', field => {
                                    field === 'name' || field === 'label' || field === 'picture' || field === 'email' || field === 'phone' || field === 'summary' ? 
                                    rl.question(`Enter ${field}:\n`, answer => {
                                        resume['basics'][field] = answer;
                                        const fieldName = field[0].toUpperCase() + field.slice(1);
                                        console.log(`${fieldName} added successfully. 👏`)
                                        showCommands();
                                    })
                                    : 
                                    console.log("Please enter a valid field.");
                                    getBasic();
                                });
                            };
                            
                            getBasic();
                            break;
                        case 'w':
                            let job = {};

                            const getCompany = answer => {
                                job['company'] = answer;
                                rl.question('Position?\n', getPosition);
                            };
                            
                            const getPosition = answer => {
                                job['position'] = answer;
                                rl.question('Start Date?\n', getWorkStartDate);
                            };

                            const getWorkStartDate = answer => {
                                job['startDate'] = answer;
                                rl.question('End Date?\n', getWorkEndDate);
                            };

                            const getWorkEndDate = answer => {
                                job['endDate'] = answer;
                                rl.question('Summary?\n', getSummary);
                            };

                            const getSummary = answer => {
                                job['summary'] = answer;
                                resume.work.push(job);
                                console.log('Work experience added successfully. 👏');
                                showCommands();
                            };

                            rl.question('Company?\n', getCompany);
                            break;
                        case 'e':
                            let school = {};

                            const getInstitution = answer => {
                                school['institution'] = answer;
                                rl.question('Area?\n', getArea);
                            };

                            const getArea = answer => {
                                school['area'] = answer;
                                rl.question('Study Type?\n', getStudyType);
                            };

                            const getStudyType = answer => {
                                school['studyType'] = answer;
                                rl.question('Start Date?\n', getEducationStartDate);
                            };

                            const getEducationStartDate = answer => {
                                school['startDate'] = answer;
                                rl.question('End Date?\n', getEducationEndDate);
                            };

                            const getEducationEndDate = answer => {
                                school['endDate'] = answer;
                                resume.education.push(school);
                                console.log('Education added successfully. 👏');
                                showCommands();
                            };

                            rl.question('Institution?\n', getInstitution);
                            break;
                        case 'l':
                            let language = {};

                            const getLanguage = answer => {
                                language['language'] = answer;
                                rl.question('Fluency?\n', getFluency);
                            };

                            const getFluency = answer => {
                                language['fluency'] = answer;
                                resume.languages.push(language);
                                console.log('Language added successfully. 👏')
                                showCommands();
                            };

                            rl.question('Language?\n', getLanguage);
                            break;
                        case 's':
                            let skill = {};
                            
                            const getSkillName = answer => {
                                skill['name'] = answer;
                                rl.question('Level?\n', getLevel);
                            };

                            const getLevel = answer => {
                                skill['level'] = answer;
                                rl.question('Enter keywords associated with skill separated by a comma.\n', getKeywords);
                            };

                            const getKeywords = answer => {
                                const keywords = [];
                                const answerArr = answer.split(",");
                                answerArr.forEach(keyword => keywords.push(keyword.trim()));
                                skill['keywords'] = keywords;
                                resume.skills.push(skill);
                                console.log('Skill added successfully. 👏');
                                showCommands();
                            };

                            rl.question('Name?\n', getSkillName);
                            break;
                        case 'r':
                            let reference = {};

                            const getRefName = answer => {
                                reference['name'] = answer;
                                rl.question('Reference?\n', getReference);
                            };

                            const getReference = answer => {
                                reference['reference'] = answer;
                                resume.references.push(reference);
                                console.log('Reference added successfully. 👏');
                                showCommands();
                            };

                            rl.question('Name?\n', getRefName);
                            break;
                        default:
                            console.log("Please enter a valid category.");
                            getCategory();
                            break;
                    };
                });
            };

            getCategory();
        // Delete item from resume
        } else if (answer === 'd') {
            const getCategory = category => {
                switch(category) {
                    case 'b':
                        const info = Object.entries(resume.basics);
                        info.forEach(([key, value], index) => {
                            console.log(`[${index}] ${key}: ${value}`);
                        });
                        rl.question('Enter index number.\n', number => {
                            console.log('Deleted from basic information.');
                            resume.basics[info[number][0]] = "";
                            showCommands();
                        });
                        break;
                    case 'w':
                        resume.work.forEach((job, index) => {
                            console.log(`[${index}] ${job.company}`);
                            rl.question('Enter index number.\n', number => {
                                console.log('Deleted from work.');
                                resume.work.splice(number, number + 1);
                                showCommands();
                            });
                        });
                        
                        break;
                    case 'e':
                        resume.education.forEach((school, index) => {
                            console.log(`[${index}] ${school.institution}`);
                            rl.question('Enter index number.\n', number => {
                                console.log('Deleted from education.');
                                resume.education.splice(number, number + 1);
                                showCommands();
                            });
                        });
                        
                        break;
                    case 's':
                        resume.skills.forEach((skill, index) => {
                            console.log(`[${index}] ${skill.name}`);
                            rl.question('Enter index number.\n', number => {
                                console.log("Deleted from skills.");
                                resume.skill.splice(number, number + 1);
                                showCommands();
                            });
                        });
                        
                        break;
                };
            };

            rl.question('Which category?\n(b) Basics • (w) Work • (e) Education • (s) Skills\n', getCategory);
            showCommands();
        // Save resume to file
        } else if (answer === 's') {
            fileContents = JSON.stringify(resume);
            
            fs.writeFile(fileName, fileContents, err => {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log(`Saved "${fileName}" to disk`);
                showCommands();
            });
        // Quit
        } else if (answer === 'q') {
            console.log('See you soon! 😄');
            rl.close();
        } else {
            console.log('Please enter a valid command.');
            showCommands();
        };
    });
};
