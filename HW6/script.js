class HumanAbstraction {
    constructor(height, weight, name, date, gender, disability) {
        this.height = height;
        this.weight = weight;
        this.name = name;
        this.date = date;
        this.gender = gender;
        this.disability = disability;

    }

    get getHi() {
        console.log(`Привет, меня зовут ${this.name}`);
    }

    set setName(name) {
        this.name = name;
    }

    set setDisability(disability) {
        this.disability = disability;
    }

    get getInfo() {
        return {
            height: this.height,
            weight: this.weight,
            name: this.name,
            date: this.date,
            gender: this.gender,
            disability: this.disability

        }
    }

}

const firstClass = new HumanAbstraction(179, 63, 'Kirill', new Date('13.11.1999'), 'male', false);

// firstClass.setName ====== Можите сменить Имя
// firstClass.setDisability ====== Можите сделать себе белый билет если тут поставите true
firstClass.getInfo;
firstClass.getHi;


class ImFrontEndSenior extends HumanAbstraction {
    constructor(height, weight, name, date, gender, disability, careerStart, company) {
        super(height, weight, name, date, gender, disability);
        this.careerStart = careerStart;
        this.company = company;
    }

    get getHi() {
        console.log(`Привет, меня зовут ${this.name},я Фронтенд разработчик. Работаю с ${this.careerStart} `);
    }


    get getMoney() {
        let allAmount = 0;
        let allSalaryPerCareer = this.company.reduce((acc, el) => {
            acc = Math.abs(el.end.getTime() - el.start.getTime());
            acc = Math.floor((acc / (1000 * 60 * 60 * 25)) / 30);
            acc = acc * el.salaryPerMonth;
            allAmount += acc;
        }, 0);
        console.log(allAmount);
    }

    myWorkCompany(company) {
        let searchCompany = this.company.filter(obj => {
            return obj.companyName === company
        });
        console.log(searchCompany);
    }

    addCompany(obj) {
        this.company.push(obj);
        console.log(this.company);
    }
}


const front = new ImFrontEndSenior(178, 78, 'Valera', new Date('1996-12-11'), 'male', false, new Date('2019-10-01'), [{
    start: new Date('2019-10-01'),
    end: new Date('2020-11-02'),
    salaryPerMonth: 800,
    position: 'junior',
    companyName: 'Oracle',
},
    {
        start: new Date('2020-11-03'),
        end: new Date('2022-06-08'),
        salaryPerMonth: 2500,
        position: 'middle',
        companyName: 'EPAM',
    }],);

console.log(front.getInfo);
console.log(front);
front.getHi;
front.getMoney;
front.myWorkCompany();
front.addCompany({
    start: new Date('2020-11-03'),
    end: new Date('2022-06-08'),
    salaryPerMonth: 3500,
    position: 'middle',
    companyName: 'Gorelyi Vald',
});


tool = ['кирка', 'топор'];

class TajikBuilder extends HumanAbstraction {

    constructor(height, weight, name, date, gender, disability, location, tool, speedJob) {
        super(height, weight, name, date, gender, disability);
        this.location = location;
        this.tool = tool;
        this.speedJob = speedJob;
    }


    buildHouse(workArea) {
        let workTime = Math.floor(this.speedJob * workArea / 60);
        let sumHour = workTime % 24;
        let workDay = Math.floor(workTime / 24);
        let day = workDay % 7;
        let workWeek = Math.floor(day / 7);
        let week = workWeek % 4;
        let workMonth = Math.floor(workWeek / 4);
        let month = workMonth % 12;
        let workYear = Math.floor(workMonth / 12);
        if (workTime < 24) {
            return `Работа займет ${workTime}`;
        } else if (workTime > 24 && workDay < 7) {
            return `Работа займет ${workDay} дней и ${sumHour} часов`;
        } else if (workDay > 7 && workWeek < 4) {
            return `Работа займет ${workWeek} недель ${day} дней и ${sumHour}`;
        } else if (workWeek > 4 && workMonth < 12) {
            return `Работа займет ${month} месяцев ${week} недель ${day} дней ${sumHour} часов`
        } else {
            return `Работа займет ${workYear} лет ${month} месяцев ${week} недель ${day} дней ${sumHour} часов`
        }

    }


}

const builder = new TajikBuilder(175, 60, 'Altybmek', new Date('02-07-1997'), 'male', true, 'Kharkov', tool, 5);
console.log(builder.getInfo);
builder.buildHouse();
builder.buildHouse(1500);


















