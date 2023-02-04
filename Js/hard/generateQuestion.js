const generateQuestion = (countries) => {
    const random = parseInt(Math.random() * countries.length);

    const country = countries[random]

    const possibilities = [];
    for (let index = 0; index < 3; index ++) {
        const r = parseInt(Math.random() * countries.length);
        const name = countries[r].name;
        possibilities.push(name);
    }
    possibilities.push(country.name);

    possibilities.sort((a, b) => {
        return a.charCodeAt(0) - b.charCodeAt(0);
    });

    const question = {
        flag: country.flag,
        answer: country.name,
        possibilities
    };

    return question
}