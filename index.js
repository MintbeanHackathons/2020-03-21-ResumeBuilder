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
        "summary": "",
        "location": {
            "address": "",
            "city": "",
            "state": "",
            "postalCode": "",
            "country": ""
        },
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
    rl.question(`\u001b[36;1m(v) View • (a) Add • (d) Delete • (s) Save • (q) Quit\n\u001b[0m`, answer => {
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
                rl.question('\u001b[35;1m(b) Basics • (w) Work • (e) Education • (l) Languages • (s) Skills • (r) References\n\u001b[0m', category => {
                    switch(category) {
                        case 'b':
                            const getBasic = () => {
                                rl.question('\u001b[34;1mPlease select a field: name • label • picture • email • phone • summary • location\nEnter "main" to return to main menu\n\u001b[0m', field => {
                                    switch(field) {
                                        case 'name' || 'label' || 'picture' || 'email' || 'phone' || 'summary':
                                            rl.question(`\u001b[33;1mEnter ${field}:\n\u001b[0m`, answer => {
                                                resume['basics'][field] = answer;
                                                const fieldName = field[0].toUpperCase() + field.slice(1);
                                                console.log(`\u001b[32;1m${fieldName} added successfully. 👏\n\u001b[0m`)
                                                showCommands();
                                            });
                                            break;
                                        case 'location':
                                            const getAddress = answer => {
                                                resume.basics.location.address = answer;
                                                rl.question('\u001b[33;1mCity?\n', getCity);
                                            };

                                            const getCity = answer => {
                                                resume.basics.location.city = answer;
                                                rl.question('\u001b[33;1mState? (Hit enter if N/A)\n\u001b[0m', getState);
                                            };

                                            const getState = answer => {
                                                resume.basics.location.state = answer;
                                                rl.question('\u001b[33;1mPostal Code?\n\u001b[0m', getPostalCode);
                                            };
                                            
                                            const getPostalCode = answer => {
                                                resume.basics.location.postalCode = answer;
                                                rl.question('\u001b[33;1mCountry?\n\u001b[0m', getCountry);
                                            };

                                            const getCountry = answer => {
                                                resume.basics.location.country = answer;
                                                console.log(`\u001b[32;1mAddress added successfully. 👏\n\u001b[0m`)
                                                showCommands();
                                            };

                                            rl.question('\u001b[33;1mAddress?\n\u001b[0m', getAddress);
                                            break;
                                        case 'main':
                                            showCommands();
                                            break;
                                        default:
                                            console.log('\u001b[31;1mPlease enter a valid field.\n\u001b[0m');
                                            getBasic();
                                    };
                                });
                            };
                            
                            getBasic();
                            break;
                        case 'w':
                            let job = {};

                            const getCompany = answer => {
                                job['company'] = answer;
                                rl.question('\u001b[33;1mPosition?\n\u001b[0m', getPosition);
                            };
                            
                            const getPosition = answer => {
                                job['position'] = answer;
                                rl.question('\u001b[33;1mStart Date?\n\u001b[0m', getWorkStartDate);
                            };

                            const getWorkStartDate = answer => {
                                job['startDate'] = answer;
                                rl.question('\u001b[33;1mEnd Date?\n\u001b[0m', getWorkEndDate);
                            };

                            const getWorkEndDate = answer => {
                                job['endDate'] = answer;
                                rl.question('\u001b[33;1mSummary?\n\u001b[0m', getSummary);
                            };

                            const getSummary = answer => {
                                job['summary'] = answer;
                                resume.work.push(job);
                                console.log('\u001b[32;1mWork experience added successfully. 👏\n\u001b[0m');
                                showCommands();
                            };

                            rl.question('\u001b[33;1mCompany?\n\u001b[0m', getCompany);
                            break;
                        case 'e':
                            let school = {};

                            const getInstitution = answer => {
                                school['institution'] = answer;
                                rl.question('\u001b[33;1mArea?\n\u001b[0m', getArea);
                            };

                            const getArea = answer => {
                                school['area'] = answer;
                                rl.question('\u001b[33;1mStudy Type?\n\u001b[0m', getStudyType);
                            };

                            const getStudyType = answer => {
                                school['studyType'] = answer;
                                rl.question('\u001b[33;1mStart Date?\n\u001b[0m', getEducationStartDate);
                            };

                            const getEducationStartDate = answer => {
                                school['startDate'] = answer;
                                rl.question('\u001b[33;1mEnd Date?\n\u001b[0m', getEducationEndDate);
                            };

                            const getEducationEndDate = answer => {
                                school['endDate'] = answer;
                                resume.education.push(school);
                                console.log('\u001b[32;1mEducation added successfully. 👏\n\u001b[0m');
                                showCommands();
                            };

                            rl.question('\u001b[33;1mInstitution?\n\u001b[0m', getInstitution);
                            break;
                        case 'l':
                            let language = {};

                            const getLanguage = answer => {
                                language['language'] = answer;
                                rl.question('\u001b[33;1mFluency?\n\u001b[0m', getFluency);
                            };

                            const getFluency = answer => {
                                language['fluency'] = answer;
                                resume.languages.push(language);
                                console.log('\u001b[32;1mLanguage added successfully. 👏\n\u001b[0m')
                                showCommands();
                            };

                            rl.question('\u001b[33;1mLanguage?\n\u001b[0m', getLanguage);
                            break;
                        case 's':
                            let skill = {};
                            
                            const getSkillName = answer => {
                                skill['name'] = answer;
                                rl.question('\u001b[33;1mLevel?\n\u001b[0m', getLevel);
                            };

                            const getLevel = answer => {
                                skill['level'] = answer;
                                rl.question('\u001b[33;1mEnter keywords associated with skill separated by a comma.\n\u001b[0m', getKeywords);
                            };

                            const getKeywords = answer => {
                                const keywords = [];
                                const answerArr = answer.split(",");
                                answerArr.forEach(keyword => keywords.push(keyword.trim()));
                                skill['keywords'] = keywords;
                                resume.skills.push(skill);
                                console.log('\u001b[32;1mSkill added successfully. 👏\n\u001b[0m');
                                showCommands();
                            };

                            rl.question('\u001b[33;1mName?\n\u001b[0m', getSkillName);
                            break;
                        case 'r':
                            let reference = {};

                            const getRefName = answer => {
                                reference['name'] = answer;
                                rl.question('\u001b[33;1mReference?\n\u001b[0m', getReference);
                            };

                            const getReference = answer => {
                                reference['reference'] = answer;
                                resume.references.push(reference);
                                console.log('\u001b[32;1mReference added successfully. 👏\n\u001b[0m');
                                showCommands();
                            };

                            rl.question('\u001b[33;1mName?\n\u001b[0m', getRefName);
                            break;
                        default:
                            console.log('\u001b[31;1mPlease enter a valid category.\u001b[0m');
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
                            key !== 'location' ? console.log(`[${index}] ${key}: ${value}`)
                            : console.log(`[${index}] location: ${Object.values(resume.basics.location)}`);
                        });
                        rl.question('\u001b[33;1mEnter index number.\n\u001b[0m', number => {
                            console.log('\u001b[31;1mDeleted from basic information.\u001b[0m');
                            resume.basics[info[number][0]] = "";
                            showCommands();
                        });
                        break;
                    case 'w':
                        resume.work.forEach((job, index) => {
                            console.log(`[${index}] ${job.company}`);
                        });
                        rl.question('\u001b[33;1mEnter index number.\n\u001b[0m', number => {
                            console.log('\u001b[31;1mDeleted from work.\u001b[0m');
                            resume.work.splice(number, number + 1);
                            showCommands();
                        });
                        
                        break;
                    case 'e':
                        resume.education.forEach((school, index) => {
                            console.log(`[${index}] ${school.institution}`);
                        });

                        rl.question('\u001b[33;1mEnter index number.\n\u001b[0m', number => {
                            console.log('\u001b[31;1mDeleted from education.\u001b[0m');
                            resume.education.splice(number, number + 1);
                            showCommands();
                        });
                        
                        break;
                    case 's':
                        resume.skills.forEach((skill, index) => {
                            console.log(`[${index}] ${skill.name}`);
                        });

                        rl.question('\u001b[33;1mEnter index number.\n\u001b[0m', number => {
                            console.log('\u001b[31;1mDeleted from skills.\u001b[0m');
                            resume.skills.splice(number, number + 1);
                            showCommands();
                        });
                        
                        break;
                };
            };

            rl.question('\u001b[35;1mWhich category?\n(b) Basics • (w) Work • (e) Education • (s) Skills\n\u001b[0m', getCategory);
            showCommands();
        // Save resume to file
        } else if (answer === 's') {
            fileContents = JSON.stringify(resume);
            
            fs.writeFile(fileName, fileContents, err => {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log(`\u001b[32;1mSuccessfully saved "${fileName}" to disk\u001b[0m.`);
                showCommands();
            });
        // Quit
        } else if (answer === 'q') {
            console.log('========================================\nThank you for using Resume Builder! 😄\n========================================');
            rl.close();
        } else {
            console.log('\u001b[31;1mPlease enter a valid command.\u001b[0m');
            showCommands();
        };
    });
};
